<?php 
session_start(); 
if(empty($_SESSION['sign_user'])){
	$_SESSION['sign_user'] = "";
}
?>