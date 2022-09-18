const toggle = document.getElementById('toggle');
const unread = document.querySelectorAll('.unread');
const numberofNotifications = document.getElementById("notification-count")

toggle.addEventListener('click', () => {
    unread.forEach(notification => {
        notification.classList.remove('unread');
    })

    numberofNotifications.innerHTML = '0';
})
