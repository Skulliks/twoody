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

isOpen = true;

const sidebar = document.getElementById('sidebar')
const content_sidebar = document.getElementById('content_sidebar')
const openSidebar = document.getElementById('openSidebar')

if(isOpen == false){
    openSidebar.style.marginLeft = '12.5%';
    sidebar.style.width = '12%';
    content_sidebar.style.visibility = 'visible';
}

function openSidebar(){
    isOpen = false;
}