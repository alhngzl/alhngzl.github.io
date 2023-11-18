<?php
session_start();
include 'db_connecter.php';

$conn 		= OpenCon();

$mail 		= $_POST["mail"];
$password	= $_POST["password"];

$returnMessage	= "";


$control_sql = "SELECT * FROM t_member WHERE member_mail = '".$mail."' AND member_password = '".$password."';";
$control_result = mysqli_query($conn, $control_sql);
$control_count = mysqli_num_rows($control_result);

if ($control_count > 0) {
	$returnMessage = "S - SignIn Success";
	$_SESSION["sign_user"] = $mail;

}else{
	$returnMessage = "E - SignIn is unsuccess.";
	$_SESSION["sign_user"] = "";
}

echo $returnMessage;

CloseCon($conn);

?>