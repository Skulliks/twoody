function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    notification.style.visibility = 'visible';
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.style.visibility = 'hidden', 500);
    }, 3000);
}