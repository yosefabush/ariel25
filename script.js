var PinCode;

/*checks if the student/user exists in data base*/

function othername() {

	var id = $("#fname").val();

    if (id.trim().length == 0) {
        return;
    }
 
	$.get( "Login.php?userId=" + id, function( data ) {
				   var usersFromServer = $.parseJSON(data);
				   /*if this is the first login of the user/student*/
    if(usersFromServer.length > 0 && usersFromServer[0].Arrived==0){
        $(".First").addClass("hide").append();
        $(".Second").removeClass("hide");
		
        $(".Second #centerBoxTxt").text("שלום " + usersFromServer[0].FirstName);		
   }
   /*if the user already looged in sen him to the inset pin screen*/
   else  if(usersFromServer.length > 0 && usersFromServer[0].Arrived==1){
	    localStorage.generalId=usersFromServer[0].UserId;
		
        window.location.assign("pinCodePage.html");
   }
   /*if the user doesn't exist in the db*/
   else
        alert("לא מצאנו אותך במערכת, אנא נסה שנית");
	  }); 
	}

/*the function that insets the additional detail of the user to the db*/
 
function aditionalDetails(){
    var userName = $("#usernmae").val();
    var job = $("#job2").val();
    var workPlace = $("#job1").val();
    var id = $("#fname").val();

	var isInFeild = 0;
    if ($('#iswork').is(':checked')) {
		isInFeild = 1;
	}
	//alert(isInFeild);  
	$.get( "SignUp.php?username=" + userName + "&job=" + job + "&workPlace=" + workPlace + "&isInField=" + isInFeild+"&userID="+id, function( data ) {
         
    }); 
	
     $(".Second").addClass("hide").append();
        $(".Third").removeClass("hide");
    setTimeout(redirect,5000);   
    
}

function redirect() {
    
        window.location.assign("pinCodePage.html");
}

function logout() {
    //localStorage.generalId = null; 
    window.location.assign("index.html");
}

/*checks if the pin that the user unserted is valid if yes starts the game*/
function Play(){
	PinCode = $("#pinCode").val();
    
    if (PinCode.trim().length == 0)
        return;
    $.ajax({
        type: "GET",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        url: "../ariel25_Game/Hackaton/getGameInfo.php?req=getGameInfo&gameId=" + PinCode.trim() ,
        success : function(d) {
            var data = JSON.parse(d);
            if(data[0].Status != 0){
                forwardToGame();
            }else{
                alert("Game not started yet...");
            }

        },
        error: function (xhr, ajaxOptions, thrownError) {
        }
    });
    
    
    
    
}

function forwardToGame() {
    
	var id= localStorage.generalId;

	$.get( "PinEnter.php?PinCode="+PinCode+"&userID="+id, function( data )
	 {	 
	 //var PinCode = $("#pinCode").val();
	//var id= localStorage.generalId;
		     var GameFromServer = $.parseJSON(data);

			if(GameFromServer.length > 0 && GameFromServer[0].Id == PinCode){
				//localStorage.setItem("generalGameNumber", "GameFromServer[0].UserId");
				
				$.get( "PinEnter.php?PinCode=" + PinCode+"&userID=" + id, function( data ) {
                // alert("game started "+ id);
				
				// TODO: REDIRECT TO ASSAF
                localStorage.PinCode = PinCode.trim();
                window.location = "../ariel25_Game/Hackaton/game.html";
			
				//alert(localStorage.getItem("generalGameNumber", "GameFromServer[0].UserId"));
                 });	
			}
			
			else{
				alert("The game you entered does not exists!");
			}
	}); 

}