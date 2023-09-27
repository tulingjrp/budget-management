const userLogin = document.getElementById("user-login");
const continueBtn = document.getElementById("continue-button");
const userPassword = document.getElementById("user-password");
const loginBtn = document.getElementById("login-button");

function continuefunc(event,state) {
    event.preventDefault();
    if (state === true) {
        userPassword.style.display = 'flex';
        loginBtn.style.display = 'flex';
        userLogin.style.display = 'flex';
        continueBtn.style.display = 'none';
        userLogin.readOnly = true;
    }
}