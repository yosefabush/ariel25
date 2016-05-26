<?php
    try{
		// alex.php?pwd=dsdsd&username=65964&address=fjelgd
        $db = new PDO('mysql:host=209.188.15.35;dbname=effeecom_Ariel25_DB','effeecom','eff23130');	
            
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


