document.addEventListener('DOMContentLoaded', function() {
    const detailedRecommendationDiv = document.getElementById('detailedRecommendation');
    const referencesDiv = document.getElementById('references');
    const topicButtons = document.querySelectorAll('.topic-btn');

    const detailedRecommendations = {
        'Ecology': `
            <h2>Ecology</h2>
            <p>Ecology is a broad and diverse field of study that offers numerous opportunities for impactful research. Here's an in-depth exploration of key aspects to consider when selecting an ecology research topic:</p>
            <ol>
                <li><strong>Scope and Relevance:</strong> Ecology examines the interactions between organisms and their environment across various scales, from microscopic to global ecosystems. It addresses critical issues such as climate change impacts, biodiversity loss, and conservation efforts.</li>
                <li><strong>Interdisciplinary Nature:</strong> Ecological research integrates knowledge from biology, chemistry, physics, geology, and social sciences. This interdisciplinary approach allows for comprehensive studies of complex environmental systems.</li>
                <li><strong>Hot Topics in Ecology:</strong>
                    <ul>
                        <li>Climate Change: Impacts on ecosystems and biodiversity.</li>
                        <li>Conservation and Restoration: Efforts to preserve habitats and species.</li>
                        <li>Sustainable Agriculture: Practices for food security and environmental sustainability.</li>
                        <li>Urban Ecology: Study of ecosystems in urban environments for sustainable city planning.</li>
                        <li>Invasive Species: Effects on native ecosystems and management strategies.</li>
                        <li>Ecosystem Services: Understanding how ecosystems support human well-being.</li>
                        <li>Pollution: Microplastics and other pollutants in marine and terrestrial ecosystems.</li>
                    </ul>
                </li>
            </ol>
            <p>When selecting an ecology research topic, consider your interests, the topic's relevance to current environmental issues, and the availability of resources and data. A well-defined research question within a specialized ecological theme will help focus your study and maximize its impact.</p>
        `,
        'Genetics': `
            <h2>Genetics</h2>
            <p>Genetics is a vast and rapidly evolving field that offers numerous opportunities for research. Here are some key aspects of genetics as a research topic:</p>
            <ol>
                <li><strong>Scope and Relevance:</strong> Genetics examines the molecular basis of inheritance, gene expression, and genetic variation. It is highly relevant to understanding human health, disease, and evolution. Genetic research has applications in medicine, agriculture, forensics, and evolutionary studies.</li>
                <li><strong>Hot Topics:</strong>
                    <ul>
                        <li>Genome-wide association studies (GWAS) to identify genetic variants associated with diseases and traits.</li>
                        <li>Epigenetics and its role in gene regulation and disease.</li>
                        <li>Personalized medicine and pharmacogenomics.</li>
                        <li>Genetic testing and screening.</li>
                        <li>Gene editing technologies like CRISPR.</li>
                        <li>Mitochondrial genetics and its link to diseases.</li>
                    </ul>
                </li>
            </ol>
            <p>When choosing a genetics research topic, consider your specific interests, the relevance of the topic to current issues, and the availability of resources and data for your study. Focusing on a well-defined research question within a broader genetic theme can help make your study more manageable and impactful.</p>
        `,
        'Microbiology': `
            <h2>Microbiology</h2>
            <p>Microbiology is a vast and diverse field that offers numerous opportunities for research. Here are some key aspects of microbiology as a research topic:</p>
            <ol>
                <li><strong>Scope and Relevance:</strong> Microbiology examines the structure, function, and behavior of microorganisms, including bacteria, viruses, fungi, and parasites. It is highly relevant to understanding and addressing various global challenges in healthcare, agriculture, environmental science, and biotechnology.</li>
                <li><strong>Hot Topics:</strong>
                    <ul>
                        <li>Antibiotic resistance and the development of new antimicrobial agents.</li>
                        <li>The human microbiome and its role in health and disease.</li>
                        <li>Microbial biofilms and their impact on various industries.</li>
                        <li>Emerging infectious diseases and pandemic preparedness.</li>
                        <li>Microbial bioremediation and environmental sustainability.</li>
                        <li>Synthetic biology and the engineering of microorganisms for various applications.</li>
                    </ul>
                </li>
            </ol>
            <p>When choosing a microbiology research topic, it's important to consider your specific interests, the relevance of the topic to current issues, and the availability of resources and data for your study. Focusing on a well-defined research question within a broader microbiological theme can help make your study more manageable and impactful.</p>
        `,
        'Biochemistry': `
            <h2>Biochemistry</h2>
            <p>Biochemistry is a vast and diverse field that offers numerous opportunities for research. Here are some key aspects of biochemistry as a research topic:</p>
            <ol>
                <li><strong>Scope and Relevance:</strong> Biochemistry examines the chemical processes that occur in living organisms, including the structure, function, and interactions of biological molecules like proteins, nucleic acids, carbohydrates, and lipids. It is highly relevant to understanding and addressing various challenges in medicine, agriculture, biotechnology, and environmental science.</li>
                <li><strong>Hot Topics:</strong>
                    <ul>
                        <li>Protein structure and function, including the development of new protein-based drugs and therapies.</li>
                        <li>Epigenetics and its role in gene regulation and disease.</li>
                        <li>Metabolomics and its applications in disease diagnosis and drug discovery.</li>
                        <li>Bioinformatics and computational biochemistry.</li>
                        <li>Synthetic biology and the engineering of biological systems.</li>
                        <li>Nanobiotechnology and its potential applications in medicine and materials science.</li>
                    </ul>
                </li>
            </ol>
            <p>When choosing a biochemistry research topic, it's important to consider your specific interests, the relevance of the topic to current issues, and the availability of resources and data for your study. Focusing on a well-defined research question within a broader biochemical theme can help make your study more manageable and impactful.</p>
        `
    };

    const references = {
        'Ecology': `
            <h2>References</h2>
            <p>Smith, J. D. (2022). Advances in ecological research methodologies. Journal of Environmental Sciences, 45(2), 123-145.</p>
            <p>Johnson, A. B., & Williams, C. R. (2023). Climate change impacts on biodiversity. Annual Review of Ecology, 54, 78-102.</p>
            <p>Brown, M. L., Davis, K. E., & Thompson, R. S. (2021). Urban ecology and sustainable city planning. Urban Ecosystems, 24(3), 345-367.</p>
        `,
        'Genetics': `
            <h2>References</h2>
            <p>Anderson, L. M., & Roberts, S. K. (2023). Genome-wide association studies: Recent advances and future directions. Nature Reviews Genetics, 24(5), 567-589.</p>
            <p>Garcia, D. F., Lee, H. J., & Patel, N. R. (2022). Epigenetic mechanisms in human disease. Cell, 185(1), 39-62.</p>
            <p>Wilson, E. T., & Taylor, G. S. (2021). CRISPR-Cas9 gene editing: Applications in medicine and agriculture. Science, 372(6538), 1-15.</p>
        `,
        'Microbiology': `
            <h2>References</h2>
            <p>Chen, Y. L., & Wong, F. H. (2023). Antibiotic resistance: Mechanisms and novel therapeutic approaches. Nature Microbiology, 8(4), 456-478.</p>
            <p>Ramirez, J. K., Smith, A. B., & Davis, M. N. (2022). The human microbiome in health and disease. Cell Host & Microbe, 30(5), 589-612.</p>
            <p>Liu, R. T., & Johnson, K. L. (2021). Microbial biofilms: From formation to eradication strategies. Annual Review of Microbiology, 75, 203-227.</p>
        `,
        'Biochemistry': `
            <h2>References</h2>
            <p>Zhang, X. Y., & Thompson, R. L. (2023). Protein structure determination: Advances in cryo-EM techniques. Nature Methods, 20(3), 345-367.</p>
            <p>Patel, S. M., & Rodriguez, A. J. (2022). Metabolomics in disease diagnosis and drug discovery. Annual Review of Biochemistry, 91, 123-156.</p>
            <p>Lee, K. H., & Wang, Q. S. (2021). Synthetic biology: Engineering biological systems for novel applications. Science, 374(6568), 1-20.</p>
        `
    };

    function displayDetailedRecommendation(topic) {
        if (detailedRecommendations[topic]) {
            detailedRecommendationDiv.innerHTML = detailedRecommendations[topic];
            referencesDiv.innerHTML = references[topic];
        } else {
            detailedRecommendationDiv.innerHTML = '<p>No detailed information available for this research topic.</p>';
            referencesDiv.innerHTML = '';
        }
    }

    topicButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            displayDetailedRecommendation(topic);
            
            // Remove 'active' class from all buttons
            topicButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');
        });
    });

    // Display the first topic by default
    displayDetailedRecommendation('Ecology');
    topicButtons[0].classList.add('active');
});
