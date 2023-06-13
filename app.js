function usersignup(){
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

console.log(email)
if (username == "" || email==""|| password =="" ) {
  alert("please enter")

} else {
    localStorage.setItem("name", username)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    
    location.href = "./login/login.html";
  }

}
