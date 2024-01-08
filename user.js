let password = document.getElementById("password");
let alert = document.querySelector(".alert");
let login = document.getElementById("login");
let userName = document.getElementById("userName");
let interNme = document.querySelector(".intername")

password.addEventListener("click", () => {
    alert.classList.add("action");
});

password.addEventListener("click", function() {
    if (password.value != "") {
        alert.classList.remove("action");
    }
});

document.addEventListener("DOMContentLoaded", function() {

    login.addEventListener("click", function(){
        if (userName.value != "") {
            window.location.href = "index.html";
        }else {
            interNme.classList.add("active");
        }
    });
  });

 