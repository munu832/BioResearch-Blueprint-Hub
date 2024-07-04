document.addEventListener('DOMContentLoaded', function() {
    const recommendationsDiv = document.getElementById('recommendations');
    const urlParams = new URLSearchParams(window.location.search);

    const recommendations = {
        'Research Topic': {
            'ecology': 'Focus on current ecological challenges like climate change impacts or biodiversity conservation.',
            'genetics': 'Explore emerging areas like CRISPR gene editing or personalized medicine.',
            'microbiology': 'Investigate antibiotic resistance or microbiome research.',
            'biochemistry': 'Look into protein engineering or metabolomics.'
        },
        'Study Objective': {
            'patterns': 'Use advanced data visualization techniques to identify and analyze patterns.',
            'hypotheses': 'Formulate clear, testable hypotheses and design experiments to validate them.',
            'methods': 'Conduct a thorough literature review of existing methods and propose innovative approaches.'
        },
        'Study Type': {
            'experimental': 'Ensure proper randomization and blinding procedures in your experimental design.',
            'observational': 'Be aware of potential biases and confounding factors in observational studies.',
            'survey': 'Ensure survey validity and reliability through proper questionnaire design and sampling methods.',
            'meta-analysis': 'Develop a comprehensive search strategy and use appropriate statistical techniques for data synthesis.'
        },
        'Data Collection': {
            'surveys': 'Ensure question wording is clear, unbiased, and aligned with your research objectives.',
            'experiments': 'Develop detailed protocols to ensure consistency and reproducibility in your experiments.',
            'observations': 'Use standardized observation protocols and consider inter-observer reliability.',
            'secondary': 'Critically evaluate the quality and reliability of secondary data sources before incorporation.'
        },
        'Data Type': {
            'quantitative': 'Plan for appropriate statistical analyses and consider power calculations for sample size.',
            'qualitative': 'Develop a robust coding scheme and consider using qualitative analysis software.',
            'both': 'Design a mixed-methods approach that integrates quantitative and qualitative data effectively.'
        }
    };

    const detailPages = {
        'Research Topic': 'research_topic_detail.html',
        'Study Objective': 'study_objective_detail.html',
        'Study Type': 'study_type_detail.html',
        'Data Collection': 'data_collection_detail.html',
        'Data Type': 'data_type_detail.html'
    };

    function getRecommendation(category, value) {
        if (!category || !value) return '';

        const recommendation = recommendations[category][value] || 'Ensure your choice aligns with your research goals and methodology.';
        const detailPage = detailPages[category] || 'detail.html';

        return `
            <div class="recommendation">
                <h3>${category}: ${value}</h3>
                <p>${recommendation}</p>
                <a href="${detailPage}?value=${encodeURIComponent(value)}">Get more information</a>
            </div>
        `;
    }

    function displayRecommendations() {
        let recommendationsHTML = '';

        recommendationsHTML += getRecommendation('Research Topic', urlParams.get('researchTopic'));
        recommendationsHTML += getRecommendation('Study Objective', urlParams.get('objective'));
        recommendationsHTML += getRecommendation('Study Type', urlParams.get('studyType'));
        recommendationsHTML += getRecommendation('Data Collection', urlParams.get('dataCollection'));
        recommendationsHTML += getRecommendation('Data Type', urlParams.get('dataType'));

        if (recommendationsHTML === '') {
            recommendationsHTML = '<p>No recommendations available. Please fill out the form.</p>';
        }

        recommendationsDiv.innerHTML = recommendationsHTML;
    }

    displayRecommendations();
});
