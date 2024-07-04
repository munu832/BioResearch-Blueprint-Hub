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
            'Genetics': `
            Genetics is a vast and rapidly evolving field that offers numerous opportunities for research. Here are some key aspects of genetics as a research topic:
            <ol>
                <li><b>Scope and Relevance:</b> Genetics examines the molecular basis of inheritance, gene expression, and genetic variation. It is highly relevant to understanding human health, disease, and evolution. Genetic research has applications in medicine, agriculture, forensics, and evolutionary studies. (<a href="https://www.wordsdoctorate.com/services/genetics-research-paper-topics/" target="_blank">Words Doctorate</a>, <a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>, <a href="https://www.frontiersin.org/journals/genetics/research-topics" target="_blank">Frontiers in Genetics</a>)</li>
                <li><b>Hot Topics:</b> 
                    <ul>
                        <li>Genome-wide association studies (GWAS) to identify genetic variants associated with diseases and traits. (<a href="https://www.nature.com/collections/dzlzxywztq" target="_blank">Nature</a>)</li>
                        <li>Epigenetics and its role in gene regulation and disease. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                        <li>Personalized medicine and pharmacogenomics. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>, <a href="https://www.frontiersin.org/journals/genetics/research-topics" target="_blank">Frontiers in Genetics</a>)</li>
                        <li>Genetic testing and screening. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                        <li>Gene editing technologies like CRISPR. (<a href="https://www.wordsdoctorate.com/services/genetics-research-paper-topics/" target="_blank">Words Doctorate</a>)</li>
                        <li>Mitochondrial genetics and its link to diseases. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                    </ul>
                </li>
                <li><b>Research Approaches:</b> Genetic studies employ various methods, such as:
                    <ul>
                        <li>DNA sequencing and genomics. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>, <a href="https://www.frontiersin.org/journals/genetics/research-topics" target="_blank">Frontiers in Genetics</a>)</li>
                        <li>Cytogenetics and karyotyping. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                        <li>Molecular genetics techniques like PCR and cloning. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                        <li>Bioinformatics and computational genetics. (<a href="https://www.frontiersin.org/journals/genetics/research-topics" target="_blank">Frontiers in Genetics</a>)</li>
                        <li>Animal models and transgenic organisms. (<a href="https://www.wordsdoctorate.com/services/genetics-research-paper-topics/" target="_blank">Words Doctorate</a>)</li>
                    </ul>
                </li>
                <li><b>Subfields:</b> Genetics encompasses numerous specialized areas, including:
                    <ul>
                        <li>Behavioral genetics</li>
                        <li>Population genetics</li>
                        <li>Evolutionary genetics</li>
                        <li>Developmental genetics</li>
                        <li>Cancer genetics</li>
                        <li>Neurogenetics</li>
                        <li>Psychiatric genetics. (<a href="https://www.humangeneticsjournal.com/focused-topics" target="_blank">Human Genetics Journal</a>)</li>
                    </ul>
                </li>
                <li><b>Interdisciplinary Nature:</b> Genetic research often integrates knowledge from other fields, such as biology, chemistry, computer science, and statistics. This allows for comprehensive studies of complex biological systems. (<a href="https://www.wordsdoctorate.com/services/genetics-research-paper-topics/" target="_blank">Words Doctorate</a>, <a href="https://www.frontiersin.org/journals/genetics/research-topics" target="_blank">Frontiers in Genetics</a>)</li>
            </ol>
            When choosing a genetics research topic, consider your specific interests, the relevance of the topic to current issues, and the availability of resources and data for your study. Focusing on a well-defined research question within a broader genetic theme can help make your study more manageable and impactful. (<a href="https://www.wordsdoctorate.com/services/genetics-research-paper-topics/" target="_blank">Words Doctorate</a>)
        `,
            'Microbiology': `
            Microbiology is a vast and diverse field that offers numerous opportunities for research. Here are some key aspects of microbiology as a research topic:
            <ol>
                <li><b>Scope and Relevance:</b> Microbiology examines the structure, function, and behavior of microorganisms, including bacteria, viruses, fungi, and parasites. It is highly relevant to understanding and addressing various global challenges in healthcare, agriculture, environmental science, and biotechnology. (<a href="https://paperwritten.com/blog/microbiology-research-topics/" target="_blank">Paper Written</a>, <a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>)</li>
                <li><b>Hot Topics:</b> 
                    <ul>
                        <li>Antibiotic resistance and the development of new antimicrobial agents. (<a href="https://paperwritten.com/blog/microbiology-research-topics/" target="_blank">Paper Written</a>, <a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>)</li>
                        <li>The human microbiome and its role in health and disease. (<a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>, <a href="https://microbiology.osu.edu/gradstudents/topics" target="_blank">OSU Microbiology</a>)</li>
                        <li>Microbial biofilms and their impact on various industries. (<a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>, <a href="https://www.theresearchguardian.com/thesis-topics/microbiology-research-topics/" target="_blank">The Research Guardian</a>)</li>
                        <li>Emerging infectious diseases and pandemic preparedness. (<a href="https://paperwritten.com/blog/microbiology-research-topics/" target="_blank">Paper Written</a>, <a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>)</li>
                        <li>Microbial bioremediation and environmental sustainability. (<a href="https://www.theresearchguardian.com/thesis-topics/microbiology-research-topics/" target="_blank">The Research Guardian</a>)</li>
                        <li>Synthetic biology and the engineering of microorganisms for various applications. (<a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>)</li>
                    </ul>
                </li>
                <li><b>Research Approaches:</b> Microbiological studies employ various methods, such as:
                    <ul>
                        <li>Isolation and cultivation of microorganisms</li>
                        <li>Molecular techniques like PCR and sequencing</li>
                        <li>Microscopy and imaging technologies</li>
                        <li>Bioinformatics and computational analysis</li>
                        <li>Animal models and in vitro systems</li>
                    </ul>
                </li>
                <li><b>Subfields:</b> Microbiology encompasses numerous specialized areas, including:
                    <ul>
                        <li>Medical microbiology</li>
                        <li>Environmental microbiology</li>
                        <li>Food microbiology</li>
                        <li>Industrial microbiology</li>
                        <li>Microbial ecology</li>
                        <li>Evolutionary microbiology</li>
                    </ul>
                </li>
                <li><b>Interdisciplinary Nature:</b> Microbiology often integrates knowledge from other fields, such as biochemistry, genetics, immunology, and epidemiology. This allows for comprehensive studies of complex microbial systems and their interactions with the environment and host organisms.</li>
            </ol>
            When choosing a microbiology research topic, it's important to consider your specific interests, the relevance of the topic to current issues, and the availability of resources and data for your study. Focusing on a well-defined research question within a broader microbiological theme can help make your study more manageable and impactful.
            (<a href="https://paperwritten.com/blog/microbiology-research-topics/" target="_blank">Paper Written</a>, <a href="https://www.ahecounselling.com/blog/200-topics-in-microbiology-research-papers" target="_blank">AHE Counselling</a>, <a href="https://www.theresearchguardian.com/thesis-topics/microbiology-research-topics/" target="_blank">The Research Guardian</a>, <a href="https://www.frontiersin.org/journals/microbiology/research-topics" target="_blank">Frontiers in Microbiology</a>, <a href="https://microbiology.osu.edu/gradstudents/topics" target="_blank">OSU Microbiology</a>)
        `,
            'Biochemistry': `
            Biochemistry is a vast and diverse field that offers numerous opportunities for research. Here are some key aspects of biochemistry as a research topic:
            <ol>
                <li><b>Scope and Relevance:</b> Biochemistry examines the chemical processes that occur in living organisms, including the structure, function, and interactions of biological molecules like proteins, nucleic acids, carbohydrates, and lipids. It is highly relevant to understanding and addressing various challenges in medicine, agriculture, biotechnology, and environmental science.</li>
                <li><b>Hot Topics:</b> 
                    <ul>
                        <li>Protein structure and function, including the development of new protein-based drugs and therapies.</li>
                        <li>Epigenetics and its role in gene regulation and disease.</li>
                        <li>Metabolomics and its applications in disease diagnosis and drug discovery.</li>
                        <li>Bioinformatics and computational biochemistry.</li>
                        <li>Synthetic biology and the engineering of biological systems.</li>
                        <li>Nanobiotechnology and its potential applications in medicine and materials science.</li>
                    </ul>
                </li>
                <li><b>Research Approaches:</b> Biochemical studies employ various methods, such as:
                    <ul>
                        <li>Protein purification and characterization techniques.</li>
                        <li>Molecular biology techniques like PCR and cloning.</li>
                        <li>Spectroscopic and mass spectrometric methods for structural analysis.</li>
                        <li>Bioinformatics and computational modeling.</li>
                        <li>Animal models and in vitro systems.</li>
                    </ul>
                </li>
                <li><b>Subfields:</b> Biochemistry encompasses numerous specialized areas, including:
                    <ul>
                        <li>Structural biochemistry</li>
                        <li>Enzymology</li>
                        <li>Metabolism</li>
                        <li>Molecular biology</li>
                        <li>Immunology</li>
                        <li>Neurobiology</li>
                        <li>Plant biochemistry</li>
                    </ul>
                </li>
                <li><b>Interdisciplinary Nature:</b> Biochemistry often integrates knowledge from other fields, such as chemistry, biology, physics, mathematics, and computer science. This allows for comprehensive studies of complex biological systems and the development of new technologies and applications.</li>
            </ol>
            When choosing a biochemistry research topic, it's important to consider your specific interests, the relevance of the topic to current issues, and the availability of resources and data for your study. Focusing on a well-defined research question within a broader biochemical theme can help make your study more manageable and impactful.
            (<a href="https://thesisgeek.com/blog/biochemistry-research-topics/" target="_blank">Thesis Geek</a>, <a href="https://thesisrush.com/blog/biochemistry-topics/" target="_blank">Thesis Rush</a>, <a href="https://www.iprojectmaster.com/final-year-projects-materials/BIOCHEMISTRY" target="_blank">I Project Master</a>, <a href="https://www.linkedin.com/pulse/biochemistry-research-topics-materials-2020-daniel-amutah" target="_blank">Daniel Amutah on LinkedIn</a>, <a href="https://publicationmaster.com/biochemistry-thesis-dissertation-topics-for-md-dnb/" target="_blank">Publication Master</a>)
        `
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
