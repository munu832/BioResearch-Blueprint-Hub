document.addEventListener('DOMContentLoaded', function() {
    const detailedRecommendationDiv = document.getElementById('detailedRecommendation');
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const value = urlParams.get('value');

    const detailedRecommendations = {
        'Research Topic': {
            'Ecology': 'Ecology': {
            description: `Ecology is a broad and dynamic field of study that offers numerous opportunities for impactful research. It examines the interactions between organisms and their environment across various scales, from microscopic to global ecosystems. It addresses critical issues such as climate change impacts, biodiversity loss, and conservation efforts.`,
            citations: [
                { name: 'Frontiers in Ecology and Evolution', link: 'https://www.frontiersin.org/journals/ecology-and-evolution/research-topics' },
                { name: 'Helpful Papers', link: 'https://helpfulpapers.com/blog/30-really-good-ecology-essay-topics-you-will-like/' }
            ]
        },
        'Genetics': {
            description: `Genetics research focuses on cutting-edge areas such as CRISPR-Cas9 gene editing technologies and personalized medicine approaches.`,
            citations: []
        },
        'Microbiology': {
            description: `Microbiology explores critical issues like antibiotic resistance mechanisms and the complexities of the human microbiome.`,
            citations: []
        },
        'Biochemistry': {
            description: `Biochemistry delves into advanced topics such as protein engineering for therapeutic purposes and the application of metabolomics in disease research.`,
            citations: []
        }
    },
    'Study Objective': {
        'Patterns': {
            description: `Implement sophisticated data visualization techniques to reveal intricate patterns in your data.`,
            citations: []
        },
        'Hypotheses': {
            description: `Develop clear, testable hypotheses grounded in a comprehensive review of existing literature.`,
            citations: []
        },
        'Methods': {
            description: `Conduct an exhaustive literature review to identify and evaluate existing methodologies relevant to your research.`,
            citations: [
                { name: 'SERC', link: 'https://serc.si.edu/research/research-topics/ecosystems-ecology' }
            ]
        }
    },
    'Study Type': {
        'Experimental': {
            description: `Ensure rigorous application of randomization and blinding techniques to eliminate bias and improve the reliability of your findings.`,
            citations: []
        },
        'Observational': {
            description: `Be vigilant about identifying and controlling for potential biases and confounding variables that may impact your results.`,
            citations: [
                { name: 'SERC', link: 'https://serc.si.edu/research/research-topics/ecosystems-ecology' }
            ]
        },
        'Survey': {
            description: `Prioritize the development of a valid and reliable survey instrument, ensuring questions are clear and unbiased.`,
            citations: []
        },
        'Meta-analysis': {
            description: `Formulate a thorough and systematic search strategy to comprehensively review and synthesize existing research findings.`,
            citations: [
                { name: 'Frontiers in Ecology and Evolution', link: 'https://www.frontiersin.org/journals/ecology-and-evolution/research-topics' }
            ]
        }
    },
    'Data Collection': {
        'Surveys': {
            description: `Design survey questions with precision to ensure clarity and neutrality, minimizing the risk of respondent bias.`,
            citations: [
                { name: 'Helpful Papers', link: 'https://helpfulpapers.com/blog/30-really-good-ecology-essay-topics-you-will-like/' }
            ]
        },
        'Experiments': {
            description: `Develop and adhere to detailed experimental protocols to ensure consistency and reproducibility of results.`,
            citations: []
        },
        'Observations': {
            description: `Employ standardized observation protocols to maintain consistency and objectivity in data collection.`,
            citations: [
                { name: 'SERC', link: 'https://serc.si.edu/research/research-topics/ecosystems-ecology' }
            ]
        },
        'Secondary': {
            description: `Critically appraise the quality, validity, and reliability of secondary data sources to ensure their suitability for your research.`,
            citations: []
        }
    },
    'Data Type': {
        'Quantitative': {
            description: `Plan for robust statistical analyses, ensuring the selection of appropriate methods to accurately interpret your data.`,
            citations: []
        },
        'Qualitative': {
            description: `Develop a comprehensive coding scheme to systematically analyze and interpret qualitative data.`,
            citations: []
        },
        'Both': {
            description: `Design a mixed-methods approach that effectively integrates quantitative and qualitative data to provide a comprehensive understanding of your research question.`,
            citations: []
        }
    }
};
            'Genetics': 'Detailed information about genetics research...',
            'Microbiology': 'Detailed information about microbiology research...',
            'Biochemistry': 'Detailed information about biochemistry research...'
        },
        'Study Objective': {
            'Patterns': 'Detailed information about pattern analysis...',
            'Hypotheses': 'Detailed information about hypothesis testing...',
            'Methods': 'Detailed information about method development...'
        },
        // Add detailed information for other categories and values
    };

    const detailedRecommendation = detailedRecommendations[category][value] || 'No detailed information available for this selection.';

    detailedRecommendationDiv.innerHTML = `
        <h2>${category}: ${value}</h2>
        <p>${detailedRecommendation}</p>
    `;
});
