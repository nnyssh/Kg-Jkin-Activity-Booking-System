document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");

    const loginForm = document.querySelector("form[action='LoginServlet']");
    const signUpForm = document.querySelector("form[action='SignUpServlet']");

    loginForm.addEventListener("submit", (e) => {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        if (!email || !password) {
            e.preventDefault();
            alert("Please fill in all fields to login.");
        }
    });

    signUpForm.addEventListener("submit", (e) => {
        const firstname = document.getElementById("signup-firstname").value;
        const lastname = document.getElementById("signup-lastname").value;
        const email = document.getElementById("signup-email").value;
        const phone = document.getElementById("signup-phone").value;
        const id = document.getElementById("signup-id").value;

        if (!firstname || !lastname || !email || !phone || !id) {
            e.preventDefault();
            alert("Please fill in all fields to sign up.");
        }
    });
});