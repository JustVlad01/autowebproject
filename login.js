document.addEventListener("DOMContentLoaded", function() {
    // Registration form submission
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Store the user's email and password in local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert("Registration successful. You can now log in.");
    });

    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const registeredEmail = localStorage.getItem('userEmail');
        const registeredPassword = localStorage.getItem('userPassword');

        if (email === registeredEmail && password === registeredPassword) {
            // Redirect to index page
            window.location.href = 'index.html';
        } else {
            alert("Invalid login credentials.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if user is logged in
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');
    const loginLogoutLink = document.getElementById('loginLogoutLink');

    if (userEmail && userPassword) {
        // User is logged in, change link to Logout
        loginLogoutLink.textContent = 'Logout';
        loginLogoutLink.href = '#'; // You can also redirect to a logout function
        loginLogoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Clear local storage or perform other logout actions
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPassword');
            // Redirect to login page or update UI accordingly
            window.location.href = 'login.html';
        });
    }
});
