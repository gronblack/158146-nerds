var btn=document.querySelector(".button-write"),popup=document.querySelector(".modal-write"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),email=popup.querySelector("[name=email]"),text=popup.querySelector("[name=text]"),storage=localStorage.getItem("login");btn.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,password.focus()):login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")}),form.addEventListener("submit",function(e){e.preventDefault(),login.value&&email.value&&text.value?(login.classList.contains("modal-invalid")&&login.classList.remove("modal-invalid"),email.classList.contains("modal-invalid")&&email.classList.remove("modal-invalid"),text.classList.contains("modal-invalid")&&text.classList.remove("modal-invalid"),localStorage.setItem("login",login.value)):(login.value||login.classList.add("modal-invalid"),email.value||email.classList.add("modal-invalid"),text.value||text.classList.add("modal-invalid"))}),login.addEventListener("blur",function(e){e.preventDefault(),login.classList.contains("modal-invalid")&&login.classList.remove("modal-invalid")}),email.addEventListener("blur",function(e){e.preventDefault(),email.classList.contains("modal-invalid")&&email.classList.remove("modal-invalid")}),text.addEventListener("blur",function(e){e.preventDefault(),text.classList.contains("modal-invalid")&&text.classList.remove("modal-invalid")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&popup.classList.remove("modal-show")});