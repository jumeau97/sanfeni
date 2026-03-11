<?php

namespace App\Controller;

use App\Entity\Category;
use App\Payload\CategoryRequest;
use App\Payload\CategoryUpdateRequest;
use App\Payload\Utils\DtoMapperService;
use App\Payload\Utils\GlobalResponse;
use App\Payload\Utils\ObjectUpdater;
use App\Payload\Utils\UtilisService;
use App\Repository\CategoryRepository;
use App\Request\Search\SearchCategory;
use App\Service\Category\CategoryInterface;
use Doctrine\DBAL\Exception\ConstraintViolationException;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
        private DtoMapperService       $mapperService,
        private ObjectUpdater          $objectUpdater,


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
        $data = $this->categoryRepository->findCategoryTree();
        $jsonData = $this->serializer->serialize($data, 'json', ["groups" => "getCategory"]);
        $dataArray = json_decode($jsonData, true);
//      dd($data);
        return GlobalResponse::successWith("liste", $dataArray);
    }

    #[Route('/category/{id}', name: 'delete-category', methods: ['DELETE'])]
    public function delete($id, Request $request)
    {

        try {
            $category = $this->entityManager->getRepository(Category::class)->findOneBy(['id' => $id]);

            if (!$category) {
                return GlobalResponse::error("Aucune information avec cet identifiant");
            }

//            if ($category->getEnterprises()->getValues() || $category->getOffers()->getValues()) {
//                return GlobalResponse::error("Suppression impossible : cette donnée est encore liée à d’autres éléments");
//            }
            $this->entityManager->remove($category);
            $this->entityManager->flush();
        } catch (ConstraintViolationException $exception) {
            return GlobalResponse::error("Suppression impossible : cette donnée est encore liée à d’autres éléments");
        } catch (\Exception $exception) {
            return GlobalResponse::error("Une erreur est survenue $exception");
        }
        return GlobalResponse::success("Suppresion reussie !");
    }

    #[Route('/update-category/{id}', name: 'update_category', methods: ['PUT'])]
    public function update($id, Request $request): JsonResponse
    {
        try {
            $existData = $this->entityManager->getRepository(Category::class)->findOneBy(["id" => $id]);
            if (!$existData) {
                return GlobalResponse::error("Aucune information avec cette information");
            }
            $data = $this->serializer->deserialize($request->getContent(), CategoryUpdateRequest::class, 'json');

            $errors = $this->validator->validate($data);
            if ($errors->count() > 0) {
                $errorMessages = [];
                foreach ($errors as $error) {
                    $errorMessages[] = $error->getMessage();
                }
                return GlobalResponse::errorWith("erreur", $errorMessages);
            }

            $entity = $this->mapperService->mapDtoToEntity($data, new Category());
            $this->objectUpdater->updateObject($existData, $entity);
            $this->entityManager->flush();
        } catch (\Exception $exception) {
            return GlobalResponse::error("Une erreur est survenue, veuillez réessayer !");

        }

        return GlobalResponse::success("Mise à jour de la categorie reussie!.");
    }
}
