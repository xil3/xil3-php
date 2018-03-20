<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\RedirectResponse;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/send-message", name="send_message")
     */
    public function sendMessage(Request $request, \Swift_Mailer $mailer)
    { 
        $session = $this->get('session');

        $name = $request->request->get('name');
        $email = $request->request->get('email');
        $message = $request->request->get('message');

        $message = (new \Swift_Message("Message from $name [$email] - xil3.com"))
            ->setFrom('jon@xil3.com')
            ->setTo('jon@j4r.org')
            ->setBody(
                $message,
                'text/plain'
            )
        ;

        $mailer->send($message);

        $session->getFlashBag()->add('notice', 'Success! Message has been sent. We will be getting back to you as soon as possible.');

        return $this->redirectToRoute('homepage');
    }
}