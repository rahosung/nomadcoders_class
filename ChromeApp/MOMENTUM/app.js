// Log In
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem("username", userName);

    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)

    console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);