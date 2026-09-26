const form = document.getElementById("registrationForm");

function account(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;

    const selectedGender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

        if (!selectedGender) {

        alert("Please select your gender.");

        return;
    }


    const gender =
        selectedGender.value;
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
       alert("Password does not match");
       return;
    }
    if(password.length < 6){
       alert("Password must have atleast 6 characters.");
       return;
    }
    if(username.length < 3){
       alert("Username must contain at least 3 characters.");
       return;
    }

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    window.location.href="login.html";
    alert("Account created...go and login.");
}