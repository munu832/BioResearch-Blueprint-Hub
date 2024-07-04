document.addEventListener('DOMContentLoaded', function() {
    const detailedRecommendationDiv = document.getElementById('detailedRecommendation');
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const value = urlParams.get('value');

    const detailedRecommendations = {
        'Research Topic': {
            'Ecology': `Ecology is a broad and diverse field of study that offers numerous opportunities for impactful research. Here’s an in-depth exploration of key aspects to consider when selecting an ecology research topic:
            <ol>
                <li><b>Scope and Relevance:</b> Ecology examines the interactions between organisms and their environment across various scales, from microscopic to global ecosystems. It addresses critical issues such as <a href="https://www.frontiersin.org/journals/ecology-and-evolution/research-topics" target="_blank">climate change impacts</a>, <a href="https://helpfulpapers.com/blog/30-really-good-ecology-essay-topics-you-will-like/" target="_blank">biodiversity loss</a>, and <a href="https://www.frontiersin.org/journals/ecology-and-evolution/research-topics" target="_blank">conservation efforts</a>.</li>
                <li><b>Interdisciplinary Nature:</b> Ecological research integrates knowledge from biology, chemistry, physics, geology, and social sciences. This interdisciplinary approach allows for comprehensive studies of complex environmental systems. (<a href="https://serc.si.edu/research/research-topics/ecosystems-ecology" target="_blank">SERC</a>)</li>
                <li><b>Hot Topics in Ecology:</b> 
                    <ul>
                        <li>Climate Change: Impacts on ecosystems and biodiversity.</li>
                        <li>Conservation and Restoration: Efforts to preserve habitats and species.</li>
                        <li>Sustainable Agriculture: Practices for food security and environmental sustainability.</li>
                        <li>Urban Ecology: Study of ecosystems in urban environments for sustainable city planning.</li>
                        <li>Invasive Species: Effects on native ecosystems and management strategies.</li>
                        <li>Ecosystem Services: Understanding how ecosystems support human well-being.</li>
                        <li>Pollution: Microplastics and other pollutants in marine and terrestrial ecosystems. (<a href="https://helpfulpapers.com/blog/30-really-good-ecology-essay-topics-you-will-like/" target="_blank">Helpful Papers</a>)</li>
                    </ul>
                </li>
                <li><b>Research Approaches:</b> Ecological studies employ diverse methodologies including field observations, laboratory experiments, remote sensing, GIS technologies, modeling, and genetic analyses. (<a href="https://serc.si.edu/research/research-topics/ecosystems-ecology" target="_blank">SERC</a>)</li>
                <li><b>Subfields of Ecology:</b> Specialized areas include evolutionary ecology, conservation ecology, ecosystem ecology, population ecology, behavioral ecology, and microbial ecology. (<a href="https://www.greatassignmenthelp.com/blog/ecology-research-topics/" target="_blank">Great Assignment Help</a>, <a href="https://us.dissertationteam.com/blog/ecology-topics/" target="_blank">Dissertation Team</a>)</li>
                <li><b>Applied Research:</b> Many ecological studies directly inform environmental management, policy-making, and conservation strategies, highlighting the field’s real-world impact. (<a href="https://serc.si.edu/research/research-topics/ecosystems-ecology" target="_blank">SERC</a>)</li>
                <li><b>Emerging Technologies:</b> Advancements in AI, remote sensing, and environmental informatics are revolutionizing ecological research, enhancing data collection, analysis, and prediction capabilities. (<a href="https://www.greatassignmenthelp.com/blog/ecology-research-topics/" target="_blank">Great Assignment Help</a>)</li>
                <li><b>Global Collaboration:</b> Due to the interconnected nature of ecosystems and environmental challenges, ecology often involves international collaborations and large-scale studies. (<a href="https://www.frontiersin.org/journals/ecology-and-evolution/research-topics" target="_blank">Frontiers in Ecology and Evolution</a>)</li>
            </ol>
            When selecting an ecology research topic, consider your interests, the topic’s relevance to current environmental issues, and the availability of resources and data. A well-defined research question within a specialized ecological theme will help focus your study and maximize its impact.`,
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

    if (category && value && detailedRecommendations[category] && detailedRecommendations[category][value]) {
        const detailedRecommendation = detailedRecommendations[category][value];
        detailedRecommendationDiv.innerHTML = `
            <h2>${category}: ${value}</h2>
            <p>${detailedRecommendation}</p>
        `;
    } else {
        detailedRecommendationDiv.innerHTML = '<p>No detailed information available for this selection.</p>';
    }
});
