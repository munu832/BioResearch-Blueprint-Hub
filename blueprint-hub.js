document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('researchForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        let queryString = new URLSearchParams(formData).toString();
        window.location.href = `recommendations.html?${queryString}`;
    });
});
