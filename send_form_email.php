<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From:Fields'; 
    $to = 'di.disegno@gmail.com'; 
    $subject = 'Hello';
    $human = $_POST['human'];
            
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
                
    if ($_POST['submit']) {                 
        if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Thanks for contact me!, I am writing you back ASAP, have a good day!</p><br>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    } 
    } 
?>