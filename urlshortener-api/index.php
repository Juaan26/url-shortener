<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require_once 'libs/Controller.php';
require_once 'libs/Database.php';
require_once 'controllers/RoutesController.php';

$routes = new RoutesController();
$routes->init();
