document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('researchForm');
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tab functionality
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            let queryString = new URLSearchParams(formData).toString();
            alert('Blueprint generated! (Feature coming soon)');
            // Uncomment the following line when you have a recommendations page ready
            // window.location.href = `recommendations.html?${queryString}`;
        });
    }

    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
    }
});
