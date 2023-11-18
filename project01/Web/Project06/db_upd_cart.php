<?php
session_start(); 

$returnMessage	= "";
if($_SESSION['sign_user'] == ""){
	$returnMessage = "C - Must SignIn.";
}else{
	include 'db_connecter.php';

	$conn 		= OpenCon();

	$mail 		= $_SESSION["sign_user"];

	$delete_sql = "UPDATE  t_cart  SET  cart_status = 1 WHERE cart_mail = '".$mail."' AND cart_status = 0;";
	mysqli_query($conn, $delete_sql);
	$returnMessage = "S - Paymented.";

	CloseCon($conn);
}

echo $returnMessage;

?>