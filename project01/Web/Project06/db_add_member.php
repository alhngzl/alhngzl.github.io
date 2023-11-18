<?php
include 'db_connecter.php';

$conn 		= OpenCon();

$fullname 	= $_POST["fullname"];
$mail 		= $_POST["mail"];
$password	= $_POST["password"];

$returnMessage	= "";


$control_sql = "SELECT * FROM t_member WHERE member_mail = '".$mail."';";
$control_result = mysqli_query($conn, $control_sql);
$control_count = mysqli_num_rows($control_result);

if ($control_count > 0) {
	$returnMessage = "E - Mail address is exist.";
}else{
	$insert_sql = "INSERT INTO t_member(member_fullname, member_mail, member_password) VALUES ('".$fullname."','".$mail."','".$password."');";
	$insert_result = mysqli_query($conn, $insert_sql);
	$returnMessage = "S - SignUp is success.";
}

echo $returnMessage;

CloseCon($conn);

?>