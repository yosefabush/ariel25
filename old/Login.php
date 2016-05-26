

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


<?php
/*
    if (isset($_GET['req']) && $_GET['req'] == 'getCities') {
        $cities = array();
        array_push($cities, new City(6,'kfar sava'));
        array_push($cities, new City(7,'Raanana'));

        echo(json_encode($cities));
    }

    if (!empty($_POST)) {
        echo 'You sent '.$_POST["field1"];
    }
*/
	?>
