<?php

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
       
        $db = Database::getInstance()->getConnection();
        $urlModel = new Url($db);
        $inputUrl = $_POST['url'];
        $userId = $_POST['user_id'];
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
        echo json_encode($json, true);
        return;
    // } else {
    //     // Verificar si la ruta es una URL acortada
    //     require_once "models/Url.php";
    //     require_once "Database.php";

    //     $db = Database::getInstance()->getConnection();
    //     $urlModel = new Url($db);
    //     $originalUrl = $urlModel->getUrl($ruta);

    //     if ($originalUrl) {
    //         header("Location: " . $originalUrl['input_url']);
    //         exit();
    //     } else {
    //         $json = array(
    //             "error" => "URL acortada no encontrada"
    //         );
    //         echo json_encode($json, true);
    //         return;
    //     }
    // }
}
}
