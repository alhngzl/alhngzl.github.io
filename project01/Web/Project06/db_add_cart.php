<?php
session_start(); 

$returnMessage	= "";
if($_SESSION['sign_user'] == ""){
	$returnMessage = "C - Must SignIn.";
}else{
	include 'db_connecter.php';

	$conn 		= OpenCon();

	$mail 		= $_SESSION["sign_user"];
	$product_id	= $_POST["product_id"];

	$insert_sql = "INSERT INTO  t_cart (cart_mail, cart_product, cart_status) VALUES ('".$mail."',".$product_id.",0);";
	mysqli_query($conn, $insert_sql);
	$returnMessage = "S - Added to cart.";

	CloseCon($conn);
}

echo $returnMessage;

?>