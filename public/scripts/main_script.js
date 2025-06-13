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

isOpen = false;

function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const openSidebar = document.getElementById('openSidebar');
    const content_sidebar = document.getElementById('content_sidebar');

    if (isOpen !== true){
        sidebar.classList.add('open');
        openSidebar.classList.add('open');
        content_sidebar.style.visibility = 'visible';
        isOpen = true;
    }
    else{
        sidebar.classList.remove('open');
        openSidebar.classList.remove('open');
        content_sidebar.style.visibility = 'hidden';
        isOpen = false;
    }
}