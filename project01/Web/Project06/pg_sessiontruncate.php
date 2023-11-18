<?php 
session_start();
session_destroy();
$_SESSION["sign_user"] = "";
echo $_SESSION["sign_user"];

header('Location: index.php'); 
?>