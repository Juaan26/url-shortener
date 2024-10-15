<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$routesArray = explode("/", $_SERVER['REQUEST_URI']);

require_once "models/Url.php";
require_once "Database.php";

if (count(array_filter($routesArray)) == 2) {
    $json = array(
        "detalle" => "Root"
    );
    echo json_encode($json, true);
    return;
} elseif (count(array_filter($routesArray)) == 3) {
    $ruta = array_filter($routesArray)[3];

    if ($ruta == "shorten" && $_SERVER['REQUEST_METHOD'] == 'POST') {
        // Obtener los datos del cuerpo de la solicitud
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Verificar los datos recibidos
        error_log('Datos recibidos: ' . print_r($data, true));

        $db = Database::getInstance()->getConnection();
        $urlModel = new Url($db);
        
        $inputUrl = $data['url'] ?? null;
        $userId = $data['user_id'] ?? null;  // Asumiendo que user_id es opcional
        error_log('URL: ' . $inputUrl); // Verificación adicional
        error_log('User ID: ' . $userId); // Verificación adicional

        if ($inputUrl) {
            $shortenedUrl = $urlModel->shortenUrl($inputUrl);
            if ($urlModel->createUrl($userId, $inputUrl, $shortenedUrl)) {
                $json = array(
                    "shortened_url" => $shortenedUrl
                );
            } else {
                $json = array(
                    "error" => "No se pudo crear la URL acortada"
                );
            }
        } else {
            $json = array(
                "error" => "URL no proporcionada"
            );
        }
        echo json_encode($json, true);
        return;
    } 
    
}
