<?php

if(isset($_FILES))
{
    error_reporting(0);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comments = $_POST['comments'];


    $domain = $_SERVER['HTTP_HOST'];
    $to = "ing_julianmadrid@hotmail.com";
    /*$subject = "Contacto desde el formulario desde el sitio: ".$domain.": ".$subject;*/    
    $subject_mail = `Contacto desde el formulario desde el sitio $domain.`;
    $message = `<p>
    Datos enviados desde el sitio <b> $domain </b>
    <ul>
    <li>Nombre: <b>$nombre</b></li>
    <li>Email: <b>$email</b></li>
    <li>Asunto: <b>$subject</b></li>
    <li>Comentarios: <b>$comments</b></li>
    </ul> 
    </p>`;
    $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset: utf-8\r\n" . "From: Envío Automático - No responder <no-replay@$domain>";
    $sendMail = mail($to, $subject_mail, $message, $headers);

    if ($sendMail) 
    {
        $res = [
            "err" => false,
            "message" => "Tus datos han sido enviados exitosamente"
        ];
    } 
    else 
    {
        $res =[
            "err" => true,
            "message" => "Error al enviar los datos. Intenta nuevamente"
        ];
    }
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    echo json_encode($res);
    
}

?>