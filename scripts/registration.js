function registerUser() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const privacyCheckbox = document.getElementById('privacy').checked;
    const termsCheckbox = document.getElementById('terms').checked;

    if (username && password && confirmPassword && email && confirmEmail) {
        if(password !== confirmEmail && email !== confirmEmail){
            showNotification("Passwords and emails don't match")
            return;
        }
        else if (password !== confirmPassword) {
            showNotification("Passwords don't match")
            return;
        }
        else if (email !== confirmEmail) {
            showNotification("Emails don't match")
            return;
        }
        else if (privacyCheckbox == false || termsCheckbox == false){
            showNotification("Please check all boxes to confirm your agreement.")
            return;
        }
        showNotification(`User ${username} registered successfully!`);
        setTimeout(() => window.location.href = 'login.html', 750);
    }
    else {
        showNotification('Please fill in all fields.');
        return;
    }
}