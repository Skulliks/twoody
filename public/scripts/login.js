function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password){
        showNotification(`${username} successfully logged in!`)
        setTimeout(() => window.location.href = 'index.html', 750);
    } else {
        showNotification("Please fill in all fields.");
        return;
    }
}