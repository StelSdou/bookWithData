<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $jsonData = file_get_contents('php://input');

        $data = json_decode($jsonData, true);

        if ($data === null) {
            echo'Error';
            die('Error decoding JSON');
        }

        session_start();
        $_SESSION['num'] = $data['data'];
        
        echo $data["data"];
    }
?>
