function validate1(){
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var message = document.getElementById("message");
	var title = document.getElementById("title");
	if(name.value != "" && email.value != "" && message.value != "" && title.value != ""){
		return true;
	} else {alert("values must not be blank")}
}
function validate2(){
	var name = document.getElementById("name");
	var message = document.getElementById("message");
	if(name.value.length < 4){
		alert("name must be atleast 4 characters");
	} else if(message.value.length < 20){
		alert("message must be atleast 20 characters")
	} else {
		return true;
	}
}
function validate(event){
	event.preventDefault();
	var v1 = validate1();
	var v2 = validate2();
	if(v1 && v2) {
		return true
	}
}