<?php
    
    // production code
    $servername = "remotemysql.com";
    $username = "sql12708336";
    $password = "bnHmjvTdKJ";
    $dbname = "sql12708336";


    $conn =  mysqli_connect($servername, $username, $password, $dbname);
    if(!$conn){
        die("Connection failed: " .mysqli_connect_error());
    }
?>  