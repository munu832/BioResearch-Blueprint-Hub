document.addEventListener('DOMContentLoaded', function() {
    const recommendationsDiv = document.getElementById('recommendations');
    const urlParams = new URLSearchParams(window.location.search);
    let recommendations = '';

    recommendations += getRecommendation('Research Topic', urlParams.get('researchTopic'));
    recommendations += getRecommendation('Study Objective', urlParams.get('objective'));
    recommendations += getRecommendation('Study Type', urlParams.get('studyType'));
    recommendations += getRecommendation('Data Collection', urlParams.get('dataCollection'));
    recommendations += getRecommendation('Data Type', urlParams.get('dataType'));

    if (recommendations === '') {
        recommendations = '<p>No recommendations available. Please fill out the form.</p>';
    }

    recommendationsDiv.innerHTML = recommendations;
});

function getRecommendation(title, value) {
    if (!value) return '';

    const recommendations = {
        'Research Topic': {
            'ecology': 'Focus on current ecological challenges like climate change impacts or biodiversity conservation.',
            'genetics': 'Explore emerging areas like CRISPR gene editing or personalized medicine.',
            'microbiology': 'Investigate antibiotic resistance or microbiome research.',
            'biochemistry': 'Look into protein engineering or metabolomics.'
        },
        'Study Objective': {
            'patterns': 'Use advanced data visualization techniques.',
            'hypotheses': 'Formulate clear, testable hypotheses.',
            'methods': 'Conduct a thorough literature review of existing methods.'
        },
        'Study Type': {
            'experimental': 'Ensure proper randomization and blinding procedures.',
            'observational': 'Be aware of potential biases and confounding factors.',
            'survey': 'Ensure survey validity and reliability.',
            'meta-analysis': 'Develop a comprehensive search strategy.'
        },
        'Data Collection': {
            'surveys': 'Ensure question wording is clear and unbiased.',
            'experiments': 'Develop detailed protocols to ensure consistency.',
            'observations': 'Use standardized observation protocols.',
            'secondary': 'Critically evaluate the quality and reliability of secondary data sources.'
        },
        'Data Type': {
            'quantitative': 'Plan for appropriate statistical analyses.',
            'qualitative': 'Develop a robust coding scheme.',
            'both': 'Design a mixed-methods approach that integrates quantitative and qualitative data effectively.'
        }
    };

    const recommendation = recommendations[title][value] || 'Ensure your choice aligns with your research goals and methodology.';

    return `<div class="recommendation">
                <h3>${title}: ${value}</h3>
                <p>${recommendation}</p>
                <a href="detail.html?category=${encodeURIComponent(title)}&value=${encodeURIComponent(value)}">Get more information</a>
            </div>`;
}
