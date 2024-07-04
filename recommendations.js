document.addEventListener('DOMContentLoaded', function() {
    const recommendationsDiv = document.getElementById('recommendations');
    const urlParams = new URLSearchParams(window.location.search);

    const recommendations = {
        'Research Topic': {
            'Ecology': 'Focus on current ecological challenges like climate change impacts or biodiversity conservation.',
            'Genetics': 'Explore emerging areas like CRISPR gene editing or personalized medicine.',
            'Microbiology': 'Investigate antibiotic resistance or microbiome research.',
            'Biochemistry': 'Look into protein engineering or metabolomics.'
        },
        'Study Objective': {
            'Patterns': 'Use advanced data visualization techniques to identify and analyze patterns.',
            'Hypotheses': 'Formulate clear, testable hypotheses and design experiments to validate them.',
            'Methods': 'Conduct a thorough literature review of existing methods and propose innovative approaches.'
        },
        'Study Type': {
            'Experimental': 'Ensure proper randomization and blinding procedures in your experimental design.',
            'Observational': 'Be aware of potential biases and confounding factors in observational studies.',
            'Survey': 'Ensure survey validity and reliability through proper questionnaire design and sampling methods.',
            'Meta-analysis': 'Develop a comprehensive search strategy and use appropriate statistical techniques for data synthesis.'
        },
        'Data Collection': {
            'Surveys': 'Ensure question wording is clear, unbiased, and aligned with your research objectives.',
            'Experiments': 'Develop detailed protocols to ensure consistency and reproducibility in your experiments.',
            'Observations': 'Use standardized observation protocols and consider inter-observer reliability.',
            'Secondary': 'Critically evaluate the quality and reliability of secondary data sources before incorporation.'
        },
        'Data Type': {
            'Quantitative': 'Plan for appropriate statistical analyses and consider power calculations for sample size.',
            'Qualitative': 'Develop a robust coding scheme and consider using qualitative analysis software.',
            'Both': 'Design a mixed-methods approach that integrates quantitative and qualitative data effectively.'
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
