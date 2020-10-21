<?php
require "phpmailer/PHPMailer.php";
require "phpmailer/SMTP.php";
require "phpmailer/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'mikhail.teslya22@mail.ru';
$mail->Password = '123890tesLsW2';
$mail->SMTPSecure = 'ssl';
$mail->CharSet = 'utf-8';
$mail->Port = 465;
$mail->setFrom('mikhail.teslya22@mail.ru', 'Тест');
$mail->addAddress('silverduck.hr@gmail.com', 'User');
$mail->isHTML(true);
$mail->Subject = 'Проверка отправки письма';
foreach ($_POST as $key => $value) {
  $message .= "
          <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
          <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
}
$mail->Body = "<table style='width: 100%;'>$message</table>";
function adopt($text)
{
  return '=?UTF-8?B?' . Base64_encode($text) . '?=';
}
if ($mail->send()) {
  print 'yes';
} else {
  print 'no';
}
$mail->smtpClose();
