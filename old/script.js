/*function othername() {
    var input = document.getElementById("fname").value;

var id=123;
      if(id==input){
 window.location.assign("to.html") ;}
else
alert("ma gever?!");

}*/
function othername() {
				var id = $("#fname").val();
				
				$.get( "Login.php?userId=" + id, function( data ) {
				   var usersFromServer = $.parseJSON(data);
				   
				   if (usersFromServer.length > 0) {
						alert ('HI ' + usersFromServer[0].FirstName);
				   } else {
						alert ('bad');
				   }
				   
				
			   }); 
			}
 function aditionalDetails(){

 var input = document.getElementById("usernmae").value;
var input2 = document.getElementById("job").value;var val=2;


if(val==1){
 window.location.assign("insertpin.html");}
else
window.location.assign("ffirstlonigpage.html");


}
