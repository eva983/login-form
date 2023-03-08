
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
var capstxt = document.querySelector(".capstxt");
const formid = document.querySelector(".formid");


const container=document.querySelector('.container');
const btnLogIn=document.querySelector('.btnLogIn');
const close=document.querySelector('.close');

//MAKE PASSWORD VISIBLE
togglePassword.addEventListener('click', function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "capstxt" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

btnLogIn.addEventListener('click', ()=>{
    container.style.visibility="visible";
    btnLogIn.style.visibility="hidden";
});

close.addEventListener('click', ()=>{
    container.style.visibility="hidden";
    btnLogIn.style.visibility="visible";

});

//DETECT CAPSLOCK
email.addEventListener("keyup", function (event) {

    // If "caps lock" is pressed, display the warning capstxt
    if (event.getModifierState("CapsLock")) {
        capstxt.style.display = "block";
    } else {
        capstxt.style.display = "none"
    }
});

password.addEventListener("keyup", function (event) {

    // If "caps lock" is pressed, display the warning capstxt
    if (event.getModifierState("CapsLock")) {
        capstxt.style.display = "block";
    } else {
        capstxt.style.display = "none"
    }
});




function ValidateInput() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.value.match(validRegex)) {

        alert("Invalid email address!");

        document.login_form.email.focus();

        return false;

    } 
    else if (password.value.length <8) {
        alert("password needs to be longer than 8 values");

        document.login_form.password.focus();

        return false;
    }

}




//CLICK LOG IN WITH ENTER BUTTON
email.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("loginbtn").click();
    }
});
password.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("loginbtn").click();
    }
});