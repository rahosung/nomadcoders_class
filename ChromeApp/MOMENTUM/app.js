// Log In
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(info) {
    info.preventDefault();
    const userName = loginInput.value;

    console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);