document.addEventListener('DOMContentLoaded', function() {
    const detailedRecommendationDiv = document.getElementById('detailedRecommendation');
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const value = urlParams.get('value');

    const detailedRecommendations = {
        'Research Topic': {
            'ecology': 'Detailed information about ecology research...',
            'genetics': 'Detailed information about genetics research...',
            'microbiology': 'Detailed information about microbiology research...',
            'biochemistry': 'Detailed information about biochemistry research...'
        },
        'Study Objective': {
            'patterns': 'Detailed information about pattern analysis...',
            'hypotheses': 'Detailed information about hypothesis testing...',
            'methods': 'Detailed information about method development...'
        },
        // Add detailed information for other categories and values
    };

    const detailedRecommendation = detailedRecommendations[category][value] || 'No detailed information available for this selection.';

    detailedRecommendationDiv.innerHTML = `
        <h2>${category}: ${value}</h2>
        <p>${detailedRecommendation}</p>
    `;
});
