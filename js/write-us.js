var btn = document.querySelector(".button-write");

var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var storage = localStorage.getItem("login");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!login.value || !email.value || !text.value) {
        if (!login.value) login.classList.add("modal-invalid");
        if (!email.value) email.classList.add("modal-invalid");
        if (!text.value) text.classList.add("modal-invalid");

    } else {
        if (login.classList.contains("modal-invalid")) login.classList.remove("modal-invalid");
        if (email.classList.contains("modal-invalid")) email.classList.remove("modal-invalid");
        if (text.classList.contains("modal-invalid")) text.classList.remove("modal-invalid");

        localStorage.setItem("login", login.value);
    }
});

login.addEventListener("blur", function(event) {
    event.preventDefault();
    if (login.classList.contains("modal-invalid")) login.classList.remove("modal-invalid");
});

email.addEventListener("blur", function(event) {
    event.preventDefault();
    if (email.classList.contains("modal-invalid")) email.classList.remove("modal-invalid");
});

text.addEventListener("blur", function(event) {
    event.preventDefault();
    if (text.classList.contains("modal-invalid")) text.classList.remove("modal-invalid");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});