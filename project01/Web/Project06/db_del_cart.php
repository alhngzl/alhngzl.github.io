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

	$delete_sql = "DELETE FROM t_cart WHERE cart_mail = '".$mail."' AND cart_product = ".$product_id." AND cart_status = 0;";
	mysqli_query($conn, $delete_sql);
	$returnMessage = "S - Deleted to cart.";

	CloseCon($conn);
}

echo $returnMessage;

?>