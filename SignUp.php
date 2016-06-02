<?php
    try{
		include_once('db.php');
            
			$userId=$_GET['userID'];
			$username = $_GET['username'];
            $job = $_GET['job'];
            $workPlace = $_GET['workPlace'];
            $isInField = $_GET['isInField'];
           
			$sql = "UPDATE users SET Arrived=1, NickName='$username', WorkInField='$isInField',WorkPlace= '$workPlace'
                WHERE userId='$userId'";
            
            $insert  = $db->exec($sql);
            if( $insert !== FALSE ) {
                echo 1;
            } else {
                echo $sql;
            }

    } catch (PDOException $e) {
        echo $e->getMessage();
    } 
?>


