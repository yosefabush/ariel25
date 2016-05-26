/*checks if the student/user exists in data base*/

function othername() {

	var id = $("#fname").val();

 
	$.get( "Login.php?userId=" + id, function( data ) {
				   var usersFromServer = $.parseJSON(data);
				   /*if this is the first login of the user/student*/
    if(usersFromServer.length > 0 && usersFromServer[0].Arrived==0){
        $(".First").addClass("hide").append();
        $(".Second").removeClass("hide");
		
		alert ('HI ' + usersFromServer[0].FirstName);
		
   }
   /*if the user already looged in sen him to the inset pin screen*/
   else  if(usersFromServer.length > 0 && usersFromServer[0].Arrived==1){
	    localStorage.generalId=usersFromServer[0].UserId;
		 alert (localStorage.generalId);
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
    var job = $("#job1").val();
    var workPlace = $("#job2").val();
    var id = $("#fname").val();

	var isInFeild = 0;
	if ($('#WorkCheck').is(':checked')) {
		isInFeild = 1;
	}
	  alert(isInFeild);
	$.get( "SignUp.php?username=" + userName + "&job=" + job + "&workPlace=" + workPlace + "&isInField=" + isInFeild+"&userID="+id, function( data ) {
       alert("Saved");
    }); 
	
     $(".Second").addClass("hide").append();
        $(".Third").removeClass("hide");
    
}
/*checks if the pin that the user unserted is valid if yes starts the game*/
function Play(){
	var PinCode = $("#pinCode").val();
	var id= localStorage.generalId;
$.get( "PinEnter.php?PinCode=" + PinCode+"&userID=" + id, function( data ) {
       alert("game started "+ id);
    }); 
	
}
