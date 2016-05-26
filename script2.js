/*
function othername() {
  //  var input = document.getElementById("fname").value;
	var id = $("#fname").val();
   // var id=123;
	$.get( "Login.php?userId=" + id, function( data ) {
				   var usersFromServer = $.parseJSON(data);
    if(usersFromServer.length > 0){
        $(".First").addClass("hide").append();
        $(".Second").removeClass("hide");
		alert ('HI ' + usersFromServer[0].FirstName);
   }else
        alert("לא מצאנו אותך במערכת, אנא נסה שנית");
	  }); 
	}


function aditionalDetails(){
    var userName = $("#usernmae").val();
    var job = $("#job1").val();
    var workPlace = $("#job2").val();
    var isInFeild = $("#WorkCheck").val();
    
     alert(userName+job+workPlace+isInFeild);
      
        item = {}
        item ["usernmae"] = userName;
        item ["job"] = job;
        item ["workPlace"] = workPlace;
        item ["isInFeild"] = isInFeild;
        jsonObj.push(item);
   
     $(".Second").addClass("hide").append();
        $(".Third").removeClass("hide");
    
}


*/
var SignUpAjax = function() {
   var title = $("#name").val();
   $.get( "SignUp.php?title="+title, function( data ) {
       alert(data);
   }); 
}

var insertUserAjax = function() {    
    $.ajax( {
       type: "post",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        url:"SignUp.php",
        data: {"usernmae":$("#usernmae").val(),
                "job":$("#job2").val(),
                "WorkPlace":$("#WorkCheck").val()
                },
        success: function( data ) {
            alert(data); 
        },
        error: function( data ) {
            alert( data );
        }
    });
}