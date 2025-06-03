function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const passwordNotSimilar = document.getElementById('passwordNotSimilar');
    const emailNotSimilar = document.getElementById('emailNotSimilar');

    if (username && password && confirmPassword && email && confirmEmail) {
        if (password !== confirmPassword) {
            passwordNotSimilar.style.visibility = 'visible';
            return;
        }
        if (email !== confirmEmail) {
            emailNotSimilar.style.visibility = 'visible';
            return;
        }
        // Simulate a successful registration
        alert(`User ${username} registered successfully!`);
        // Redirect to the login page or home page
        window.location.href = 'login.html';
    } else {
        alert('Please fill in both fields.');
    }
}