<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\RedirectResponse;
use App\Entity\Article;

class BlogController extends AbstractController
{
    /**
     * @Route("/blog", name="blog")
     */
    public function index()
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $this->getDoctrine()->getRepository(Article::class);

        $articles = $repository->findAll();


        return $this->render('blog/index.html.twig', array(
            'articles' => $articles
        ));
    }

    /**
     * @Route("/blog/{id}/{articleName}", name="blog_article")
     */
    public function article($id, $articleName)
    {
        $repository = $this->getDoctrine()->getRepository(Article::class);

        $article = $repository->find($id);

        return $this->render('blog/article.html.twig', array(
            'article' => $article
        ));
    }
}