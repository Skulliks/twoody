function registerUser() {

    const usernameField = document.getElementById('username').value;
    const passwordField = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const emailField = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const privacyCheckbox = document.getElementById('privacy').checked;
    const termsCheckbox = document.getElementById('terms').checked;

    if (usernameField && passwordField && confirmPassword && emailField && confirmEmail && privacyCheckbox && termsCheckbox) {
        fetch('/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: usernameField,
                password: passwordField,
                email: emailField
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.message) { showNotification(data.message); setTimeout(() => window.location.href = './login.html', 1000) }
            else if (data.error) { showNotification('Error ' + data.error); }
        });

    }
    else {
        showNotification('Please fill in all fields.');
        return;
    }
}