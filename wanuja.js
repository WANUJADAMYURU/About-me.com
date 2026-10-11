const correctPassword = "Uph@28570";

document.getElementById("loginForm").addEventListener("submit", function(event) { event.preventDefault();

const password = document.getElementById("password").value;

if (password === correctPassword) { window.location.href = "home.html"; } else { document.getElementById("message").textContent = "Incorrect password! Please try again."; } });