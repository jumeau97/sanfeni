<?php

namespace App\Controller;

use App\Entity\Album;
use App\Entity\Category;
use App\Entity\Product;
use App\Payload\Utils\GlobalResponse;
use App\Request\ProductRequest;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Vich\UploaderBundle\Handler\UploadHandler;

#[Route("")]
final class ProductController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SerializerInterface    $serializer,
        private ValidatorInterface     $validator

    )
    {
    }

    #[Route('/details/{slug}', name: 'product-details')]
    public function details($slug, Request $request): Response
    {
        $product = $this->entityManager->getRepository(Product::class)->findOneBy(['slug' => $slug]);
//        dd($product->getAlbums());
        return $this->render('products/details.html.twig', [
            'product' => $product
        ]);
    }

    #[Route('/dashboard/add-product', name: 'add_new_product', methods: ['POST'])]
    public function save(Request $request, UploadHandler $uploadHandler): JsonResponse
    {

        try {
            $jsonData = $request->request->get('data');


            if (!$jsonData) {
                return GlobalResponse::error("Les données JSON sont requises.");
            }

            $data = $this->serializer->deserialize($jsonData, ProductRequest::class, 'json');

            $errors = $this->validator->validate($data);
            if ($errors->count() > 0) {
                $errorMessages = [];
                foreach ($errors as $error) {
                    $errorMessages[] = $error->getMessage();
                }
                return GlobalResponse::errorWith("erreur", $errorMessages);
            }


            $product = new Product();
            $product->setName($data->getName())
                ->setIsPromotion($data->getIsPromotion())
                ->setDescription($data->getDescription())
                ->setPrice($data->getPrice())
                ->setSlug(uniqid($data->getName()));


            if ($data->getIsPromotion()) {
                if ($data->getOffPercent()):
                    $product->setOffPercent($data->getOffPercent());
                else:
                    return GlobalResponse::error("Definissez le pourcentage de réduction");
                endif;
            }

            $files = $request->files->all('album');
//            dd($files);
            if ($files) {
                foreach ($files as $file) {
                    $album = new Album();
                    $album->setImageFile($file);
                    $uploadHandler->upload($album, 'imageFile');
                    $product->addAlbum($album);
                }
            }

            //Charger le logo de l'entreprise
            $illustrationFile = $request->files->get('illustration');
//            dd($illustrationFile);
            if ($illustrationFile) {
                $product->setImageFile($illustrationFile);
                $uploadHandler->upload($product, 'imageFile');
            }


            $categories = $data->getCategories(); // tableau de rôles

            if ($categories) {
                $categ = $this->entityManager->getRepository(Category::class)->findBy(['id' => $categories]);
                if (!$categ) {
                    return GlobalResponse::error("Aucune catégorie trouvée");
                }
                foreach ($categ as $cat) {
                    $product->addCategory($cat);
                }
            }


//            dd($product->getOffPercent());
            $this->entityManager->persist($product);
            $this->entityManager->flush();


        } catch
        (UniqueConstraintViolationException $exception) {
            return GlobalResponse::error("Ce produit existe déjà");

        }

        return GlobalResponse::success("Produit crée avec succès");
    }
}
