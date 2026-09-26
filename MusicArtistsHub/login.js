function loginAccount(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let correctUsername = localStorage.getItem("username");
    let correctPassword = localStorage.getItem("password");

    if(username !== correctUsername){
       alert("Incorrect username...Please enter the correct username.");
       return;
    }
    if(password !== correctPassword){
       alert("Incorrect password!....Please enter the correct password.");
       return;
    }
    window.location.href="music.html";
    alert("Login succesfull.");
}