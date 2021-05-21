const loginBtn = $("#home-login")
const signUpBtn = $("home-sign")
const reviewBtn = $("home-review")

loginBtn.addEventListener("click", function () {
    e.preventDefault();
    window.location.href = "login.html"
})