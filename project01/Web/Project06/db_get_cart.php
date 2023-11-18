<?php
function getAllCart(){
	$mail 		= $_SESSION["sign_user"];
	include 'db_connecter.php';

	$conn 		= OpenCon();
	$sql 		= "SELECT * FROM t_cart, t_product WHERE cart_product = product_id AND cart_mail = '".$_SESSION["sign_user"]."' AND cart_status = 0;";
	$result 	= mysqli_query($conn, $sql);

	CloseCon($conn);

	return $result;
}

?>