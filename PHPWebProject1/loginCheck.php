

<?php
session_start();


$username = trim($_POST["username"]);
$password=trim($_POST["password"]);

if($username=="orerhusam" && $password=="1")
{

 

 $_SESSION["login"]=$username;
 header("Location: index.html");

  
}
else
{ 
echo "<div class='col-md-4'>GİREMEDİN</div>";

}


?>

