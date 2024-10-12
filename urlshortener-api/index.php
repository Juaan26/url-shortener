<?php
require_once 'libs/Controller.php';
require_once 'libs/Database.php';
require_once 'controllers/RoutesController.php';

$routes = new RoutesController();
$routes->init();
