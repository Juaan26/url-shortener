<?php

class Url
{
    private $db;

    public function __construct()
    {
        $this->db = Database::getInstance()->getConnection();
    }

    public function createUrl($userId, $inputUrl, $shortenedUrl)
    {
        $sql = "INSERT INTO urls (user_id, input_url, shortened_url) VALUES (:user_id, :input_url, :shortened_url)";
        $stmt = $this->db->prepare($sql);

        $stmt->bindParam(':user_id', $userId, PDO::PARAM_INT);
        $stmt->bindParam(':input_url', $inputUrl, PDO::PARAM_STR);
        $stmt->bindParam(':shortened_url', $shortenedUrl, PDO::PARAM_STR);

        return $stmt->execute();
    }

    public function getUrl($shortenedUrl)
    {
        $sql = "SELECT input_url FROM urls WHERE shortened_url = :shortened_url";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':shortened_url', $shortenedUrl, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

}
