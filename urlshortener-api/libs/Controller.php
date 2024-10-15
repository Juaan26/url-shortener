<?php

class Controller
{

     public function model($model)
    {
        require_once dirname(__DIR__) . '/models/' . $model . '.php';
        return new $model();
    }
}
