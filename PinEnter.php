<?php

	try{
		$db = new PDO('mysql:host=209.188.15.35;dbname=effeecom_Ariel25_DB','effeecom','eff23130');
		$jsPinCode = $_GET['PinCode'];
		$userId=$_GET['userID'];
		
		$resultSet = $db->query("SELECT * FROM games WHERE Id= + '$jsPinCode'")->fetchAll(PDO::FETCH_ASSOC);
		echo(json_encode($resultSet));
		
		$sql = "UPDATE users SET CurrentGame = '$jsPinCode', CurrentGame_loginTime=NOW() WHERE UserId='$userId'";
		$insert  = $db->exec($sql);  
            
            if( $insert !== FALSE ) {
                //echo 1;
            } else {
                echo $sql;
           }
	}
	
	catch (PDOException $e){
		echo $e->getMessage();
	    return $resultSet;
	}
?>
