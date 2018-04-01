<?php

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
$name = $email = $message = "";
if (strpos($contentType,"application/json") !== false) {
  //Receive the RAW post data.
  $content = trim(file_get_contents("php://input"));

  $decoded = json_decode($content, true);
  //If json_decode failed, the JSON is invalid.
  if(is_array($decoded)) {
  	  $name = test_input($decoded["name"]);
	  $email = test_input($decoded["email"]);
	  $message = test_input($decoded["message"]);
  } else {
    echo "{\"error\":true}";
  }
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$to = "nickthesick@nickthesick.com";
$subject = "Nick The Sick.com Contact Form";

// compose headers
$headers = "From: nickthesick@nickthesick.com\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHP/".phpversion();

$message = wordwrap($message, 70)."This message is from: ".$name."\n With the email: ".$email."\n On: ".date("Y-m-d h:i:sa")."\n";
// send email
mail($to, $subject, $message, $headers);
echo "{\"success\":true}";
?>