<?php

	try{
        
        include_once('db.php');
		$jsUserId = $_GET['userId'];
		
		$resultSet = $db->query("SELECT * FROM users WHERE UserId = '$jsUserId'")->fetchAll(PDO::FETCH_ASSOC);
		echo(json_encode($resultSet));
	}
	
	catch (PDOException $e){
		echo $e->getMessage();
	    return $resultSet;
	}
?>

