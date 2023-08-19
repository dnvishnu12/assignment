<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // You can save the data to a file, database, or send an email here

    // Sending a response to the client
    http_response_code(200);
    exit();
}
?>
