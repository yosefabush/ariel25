<?php

	try{
		$db = new PDO('mysql:host=209.188.15.35;dbname=effeecom_Ariel25_DB','effeecom','eff23130');
		$jsUserId = $_GET['userId'];
		
		$resultSet = $db->query("SELECT * FROM users WHERE UserId = '$jsUserId'")->fetchAll(PDO::FETCH_ASSOC);
		echo(json_encode($resultSet));
	}
	
	catch (PDOException $e){
		echo $e->getMessage();
	    return $resultSet;
	}
?>

