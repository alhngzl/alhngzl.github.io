<?php

function OpenCon(){
	$dbhost = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$db = "project06";

	$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $db);
	if($conn === false){
    	die("ERROR: Could not connect. " . mysqli_connect_error());
	}

	return $conn;
}

function CloseCon($conn){
	mysqli_close($conn);
}

?>

