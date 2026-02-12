<?php

namespace App\Controller;

use App\Entity\Category;
use App\Payload\CategoryRequest;
use App\Payload\Utils\GlobalResponse;
use App\Payload\Utils\UtilisService;
use App\Repository\CategoryRepository;
use App\Request\Search\SearchCategory;
use App\Service\Category\CategoryInterface;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route("/dashboard")]
final class CategoryController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SerializerInterface    $serializer,
        private UtilisService          $utilisService,
        private CategoryInterface      $categoryInterface,
        private ValidatorInterface     $validator,
        private CategoryRepository     $categoryRepository,


    )
    {
    }

    #[Route("/add-category", name: 'dashboard_addt_category')]
    public function add(Request $request): Response
    {
        try {
            $data = $this->serializer->deserialize($request->getContent(), CategoryRequest::class, 'json');

            $errors = $this->validator->validate($data);
            if ($errors->count() > 0) {
                $errorMessages = [];
                foreach ($errors as $error) {
                    $errorMessages[] = $error->getMessage();
                }
                return GlobalResponse::errorWith("erreur", $errorMessages);
            }

            $category = new Category();
            $category->setName($data->getName())
                ->setDescription($data->getDescription());


            if ($data->getParentId()) {
                $categParent = $this->entityManager->getRepository(Category::class)->findOneBy(["id" => $data->getParentId()]);
                if (!$categParent) {
                    return GlobalResponse::error("Aucune catégorie trouvée");
                }
                $category->setParentCateg($categParent);
            }

            $this->entityManager->persist($category);
            $this->entityManager->flush();
        } catch (UniqueConstraintViolationException $exception) {
            return GlobalResponse::error("Cette categorie existe déjà");

        }

        return GlobalResponse::success("Catégorie enregistrée avec succès");
    }

    #[Route('/list-category', name: 'dashboard_list_category')]
    public function findAll(Request $request): Response
    {
        $pageNumb = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);
        $data = $this->serializer->deserialize($request->getContent(), SearchCategory::class, 'json');

        $result = $this->categoryInterface->findAllByCriteria($pageNumb, $limit, $data);

        $jsonData = $this->serializer->serialize($result, 'json', ["groups" => "getCategory"]);
        $dataArray = json_decode($jsonData, true);
        $array = $this->utilisService->paginationResp($dataArray, $result, $limit);
        return GlobalResponse::successWith("La liste des categories", $array);
    }

    #[Route('/tree', name: 'category_tree')]
    public function categoryTree(Request $request)
    {
      $data =  $this->categoryRepository->findCategoryTree();
        $jsonData = $this->serializer->serialize($data, 'json', ["groups" => "getCategory"]);
        $dataArray = json_decode($jsonData, true);
//      dd($data);
      return GlobalResponse::successWith("liste", $dataArray);
    }
}
