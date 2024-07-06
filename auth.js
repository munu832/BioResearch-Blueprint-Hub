document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // In a real application, you would validate against a backend here
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = 'blueprint-hub.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const userData = Object.fromEntries(formData.entries());
            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
            
            localStorage.setItem('currentUser', JSON.stringify(userData));
            window.location.href = 'blueprint-hub.html';
        });
    }

    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser && window.location.pathname !== '/index.html' && 
        window.location.pathname !== '/login.html' && window.location.pathname !== '/register.html') {
        window.location.href = 'index.html';
    }
});

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
