function loginUser() {
    const usernameField = document.getElementById('username').value;
    const passwordField = document.getElementById('password').value;

    if(username && password){
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: usernameField,
                password: passwordField,
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.message) { showNotification(data.message); setTimeout(() => window.location.href = './index.html', 1000) }
            else if (data.error) { showNotification('Error ' + data.error); }
        });
    } else {
        showNotification("Please fill in all fields.");
        return;
    }
}