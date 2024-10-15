<?php

class UrlsController extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model('Url');
    }

    public function shortenUrl($userId, $inputUrl)
    {
        $shortenedUrl = substr(md5($inputUrl . time()), 0, 8); // Crear una URL acortada

        if ($this->model->createUrl($userId, $inputUrl, $shortenedUrl)) {
            return $shortenedUrl; // Devuelve la URL acortada
        } else {
            return false; // Algo falló
        }
    }

}

