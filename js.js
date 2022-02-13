document.getElementById('user-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if (userEmail == 'tanvir10ahmmed@gmail.com' && userPassword == 'hellow123') {
        window.location.href = "bank.html";
    }
})
