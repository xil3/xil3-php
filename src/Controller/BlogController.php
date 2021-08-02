<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\RedirectResponse;
use App\Entity\Article;
use App\Entity\Tag;

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
     * @Route("/blog/funplace/add", name="blog_article_add")
     */
    public function add()
    {
        return $this->render('blog/add.html.twig');
    }

    /**
     * @Route("/blog/funplace/edit/{id}", name="blog_article_edit")
     */
    public function edit($id)
    {
        $repository = $this->getDoctrine()->getRepository(Article::class);

        $article = $repository->find($id);

        return $this->render('blog/edit.html.twig', array(
            'article' => $article
        ));
    }

    /**
     * @Route("/blog/funplace/update/{id}", name="blog_article_update")
     */
    public function update(Request $request, $id = null)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $this->getDoctrine()->getRepository(Article::class);
        $article = null;

        // post data
        $author = $request->request->get('author');
        $title = $request->request->get('title');
        $seoTitle = $request->request->get('seo-title');
        $body = $request->request->get('body');

        if($author && $title && $seoTitle && $body) {
            if($id) {
                $article = $repository->find($id);
            } else {
                $article = new Article();
            }

            $article->setAuthor($author);
            $article->setTitle($title);
            $article->setSeoTitle($seoTitle);
            $article->setBody($body);

            if(!$id) {
                $em->persist($article);
            }

            $em->flush();
            
            return $this->redirectToRoute('blog_article', array(
                'id' => $article->getId(),
                'articleName' => $article->getSeoTitle()
            ));
        }

        if($id) {
            return $this->redirectToRoute('blog_article_edit', array(
                'id' => $id
            ));
        } else {
            return $this->redirectToRoute('blog_article_add');
        }
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

    /**
     * Panels
     */
    public function rightPanel()
    {
        $repository = $this->getDoctrine()->getRepository(Tag::class);

        $tags = $repository->findAll();

        return $this->render('blog/right_panel.html.twig', array(
            'tags' => $tags
        ));
    }
}