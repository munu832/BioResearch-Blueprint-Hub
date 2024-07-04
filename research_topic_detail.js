<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research Topic Details</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header>
            <h1>Research Topic Details</h1>
        </header>
        <nav class="topic-nav">
            <button class="topic-btn" data-topic="Ecology">Ecology</button>
            <button class="topic-btn" data-topic="Genetics">Genetics</button>
            <button class="topic-btn" data-topic="Microbiology">Microbiology</button>
            <button class="topic-btn" data-topic="Biochemistry">Biochemistry</button>
        </nav>
        <main id="detailedRecommendation"></main>
        <button onclick="window.location.href='recommendations.html'" class="back-btn">Back to Recommendations</button>
    </div>
    <div class="author-info">
        <div class="author-card">
            <div class="author-details">
                <h3>Kavindu Munugoda</h3>
                <p>Creator of BioResearch Blueprint Hub</p>
                <a href="https://www.linkedin.com/in/kavindu-munugoda-18436bb6/" target="_blank" class="linkedin-link">
                    <i class="fab fa-linkedin"></i> Connect on LinkedIn
                </a>
            </div>
        </div>
    </div>
    <script src="research_topic_detail.js"></script>
</body>
</html>
