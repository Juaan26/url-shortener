<?php
/**
 * Manejo de la Base de Datos de MySQL
 */

class Database
{
    // Datos de la conexión
    private $host = 'localhost:3306';
    private $user = 'root';
    private $pass = '';
    private $dbname = 'url_shortener';

    // Atributos
    private static $instancia = null;
    private $db = null;

    private function __construct()
    {
        $options = [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ];

        try {
            $this->db = new PDO(
                'mysql:host=' . $this->host . ';dbname=' . $this->dbname,
                $this->user,
                $this->pass,
                $options
            );
        } catch (PDOException $error) {
            exit('No se pudo conectar con la base de datos: ' . $error->getMessage());
        }
    }

    public static function getInstance()
    {
        if (is_null(self::$instancia)) {
            self::$instancia = new Database();
        }

        return self::$instancia;
    }

    public function getConnection()
    {
        return $this->db;
    }
}
