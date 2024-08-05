<?php
    function im($id){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "book";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully <br>";

        $sql = "SELECT image_path FROM october WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->store_result();
    
        if ($stmt->num_rows > 0) {
            $stmt->bind_result($imagePath);
            $stmt->fetch();

            // Έλεγχος αν το αρχείο εικόνας υπάρχει
            if (file_exists($imagePath)) {
                // header("Content-Type: image/jpeg");
                $imagePath = str_replace("C:/xampp/htdocs/BookAdmin/", "", $imagePath);
                return '<img src="' . $imagePath . '" alt="Η εικόνα σας">';
                // readfile($imagePath);
            } else {
                echo "Η εικόνα δεν βρέθηκε.";
            }
        } else {
            echo "Η εικόνα δεν βρέθηκε.";
        }
        $stmt->close();
        $conn->close();
    }

    // $result = $stmt->get_result();

    // if ($result->num_rows > 0) {
    //     while($row = $result->fetch_assoc()) {
    //         echo 'name: '.$row["name"];
    //     }
    // } else {
    //     echo "0 αποτελέσματα";
    // }
    // $stmt->close();
?>
