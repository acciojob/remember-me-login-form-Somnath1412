//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');

    // Check for existing credentials in local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
    }

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    // Handle existing user login
    existingButton.addEventListener('click', () => {
        alert(`Logged in as ${savedUsername}`);
    });
});