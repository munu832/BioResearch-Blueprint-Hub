document.addEventListener('DOMContentLoaded', function() {
    const detailedRecommendationDiv = document.getElementById('detailedRecommendation');
    const topicButtons = document.querySelectorAll('.topic-btn');

    const detailedRecommendations = {
        'Ecology': `
            <h2>Ecology</h2>
            <p>Ecology is a broad and diverse field of study that offers numerous opportunities for impactful research. Here's an in-depth exploration of key aspects to consider when selecting an ecology research topic:</p>
            <ol>
                <li><strong>Scope and Relevance:</strong> Ecology examines the interactions between organisms and their environment across various scales, from microscopic to global ecosystems. It addresses critical issues such as <a href="https://www.frontiersin.org/journals/ecology-and-evolution/research-topics" target="_blank">climate change impacts</a>, <a href="https://helpfulpapers.com/blog/30-really-good-ecology-essay-topics-you-will-like/" target="_blank">biodiversity loss</a>, and <a href="https://www.frontiersin.org/journals/ecology-and-evolution/research-topics" target="_blank">conservation efforts</a>.</li>
                <li><strong>Interdisciplinary Nature:</strong> Ecological research integrates knowledge from biology, chemistry, physics, geology, and social sciences. This interdisciplinary approach allows for comprehensive studies of complex environmental systems. (<a href="https://serc.si.edu/research/research-topics/ecosystems-ecology" target="_blank">SERC</a>)</li>
                <li><strong>Hot Topics in Ecology:</strong>
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
            </ol>
            <p>When selecting an ecology research topic, consider your interests, the topic's relevance to current environmental issues, and the availability of resources and data. A well-defined research question within a specialized ecological theme will help focus your study and maximize its impact.</p>
        `,
        'Genetics': `
            <h2>Genetics</h2>
            <p>Genetics is a vast and rapidly evolving field that offers numerous opportunities for research. Here are some key aspects of genetics as a research topic:</p>
            <ol>
                <li><strong>Scope and Relevance:</strong> Genetics examines the molecular basis of inheritance, gene expression, and genetic variation. It is highly relevant to understanding human health, disease, and evolution. Genetic research has applications in medicine, agriculture, forensics, and evolutionary studies. (<a href="https://www.wordsdoctorate.com/services/genetics-research-paper-topics/" target="_blank">Words Doctorate</a>, <a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>, <a href="https://www.frontiersin.org/journals/genetics/research-topics" target="_blank">Frontiers in Genetics</a>)</li>
                <li><strong>Hot Topics:</strong>
                    <ul>
                        <li>Genome-wide association studies (GWAS) to identify genetic variants associated with diseases and traits. (<a href="https://www.nature.com/collections/dzlzxywztq" target="_blank">Nature</a>)</li>
                        <li>Epigenetics and its role in gene regulation and disease. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                        <li>Personalized medicine and pharmacogenomics. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>, <a href="https://www.frontiersin.org/journals/genetics/research-topics" target="_blank">Frontiers in Genetics</a>)</li>
                        <li>Genetic testing and screening. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                        <li>Gene editing technologies like CRISPR. (<a href="https://www.wordsdoctorate.com/services/genetics-research-paper-topics/" target="_blank">Words Doctorate</a>)</li>
                        <li>Mitochondrial genetics and its link to diseases. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                    </ul>
                </li>
            </ol>
            <p>When choosing a genetics research topic, consider your specific interests, the relevance of the topic to current issues, and the availability of resources and data for your study. Focusing on a well-defined research question within a broader genetic theme can help make your study more manageable and impactful. (<a href="https://www.wordsdoctorate.com/services/genetics-research-paper-topics/" target="_blank">Words Doctorate</a>)</p>
        `,
        'Microbiology': `
            <h2>Microbiology</h2>
            <p>Microbiology is a vast and diverse field that offers numerous opportunities for research. Here are some key aspects of microbiology as a research topic:</p>
            <ol>
                <li><strong>Scope and Relevance:</strong> Microbiology examines the structure, function, and behavior of microorganisms, including bacteria, viruses, fungi, and parasites. It is highly relevant to understanding and addressing various global challenges in healthcare, agriculture, environmental science, and biotechnology. (<a href="https://paperwritten.com/blog/microbiology-research-topics/" target="_blank">Paper Written</a>, <a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>)</li>
                <li><strong>Hot Topics:</strong>
                    <ul>
                        <li>Antibiotic resistance and the development of new antimicrobial agents. (<a href="https://paperwritten.com/blog/microbiology-research-topics/" target="_blank">Paper Written</a>, <a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>)</li>
                        <li>The human microbiome and its role in health and disease. (<a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>, <a href="https://microbiology.osu.edu/gradstudents/topics" target="_blank">OSU Microbiology</a>)</li>
                        <li>Microbial biofilms and their impact on various industries. (<a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>, <a href="https://www.theresearchguardian.com/thesis-topics/microbiology-research-topics/" target="_blank">The Research Guardian</a>)</li>
                        <li>Emerging infectious diseases and pandemic preparedness. (<a href="https://paperwritten.com/blog/microbiology-research-topics/" target="_blank">Paper Written</a>, <a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>)</li>
                        <li>Microbial bioremediation and environmental sustainability. (<a href="https://www.theresearchguardian.com/thesis-topics/microbiology-research-topics/" target="_blank">The Research Guardian</a>)</li>
                        <li>Synthetic biology and the engineering of microorganisms for various applications. (<a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>)</li>
                    </ul>
                </li>
            </ol>
            <p>When choosing a microbiology research topic, it's important to consider your specific interests, the relevance of the topic to current issues, and the availability of resources and data for your study. Focusing on a well-defined research question within a broader microbiological theme can help make your study more manageable and impactful.</p>
            <p>(<a href="https://paperwritten.com/blog/microbiology-research-topics/" target="_blank">Paper Written</a>, <a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>, <a href="https://www.theresearchguardian.com/thesis-topics/microbiology-research-topics/" target="_blank">The Research Guardian</a>, <a href="https://www.frontiersin.org/journals/microbiology/research-topics" target="_blank">Frontiers in Microbiology</a>, <a href="https://microbiology.osu.edu/gradstudents/topics" target="_blank">OSU Microbiology</a>)</p>
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
            <p>(<a href="https://thesisgeek.com/blog/biochemistry-research-topics/" target="_blank">Thesis Geek</a>, <a href="https://thesisrush.com/blog/biochemistry-topics/" target="_blank">Thesis Rush</a>, <a href="https://www.iprojectmaster.com/final-year-projects-materials/BIOCHEMISTRY" target="_blank">I Project Master</a>, <a href="https://www.linkedin.com/pulse/biochemistry-research-topics-materials-2020-daniel-amutah" target="_blank">Daniel Amutah on LinkedIn</a>, <a href="https://publicationmaster.com/biochemistry-thesis-dissertation-topics-for-md-dnb/" target="_blank">Publication Master</a>)</p>
        `
    };

    function displayDetailedRecommendation(topic) {
        if (detailedRecommendations[topic]) {
            detailedRecommendationDiv.innerHTML = detailedRecommendations[topic];
        } else {
            detailedRecommendationDiv.innerHTML = '<p>No detailed information available for this research topic.</p>';
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
