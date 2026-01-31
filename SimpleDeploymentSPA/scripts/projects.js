const PROJECTS = [
    {
        name: "Halliburton / Aker BP Pathfinders Modernization for AI",
        duration: ["2025-09", "present"],
        role: "Fullstack Developer",
        tags: ["angular", "figma", "typescript", "java", "html", "git", "gitlab", "postgres", "devops"],
        paragraphs: [
            ` As a fullstack developer on the Pathfinders team, I helped modernize Halliburton Landmark's 
        oil-well design software in collaboration with Aker BP. The project aimed to replace 
        the existing solution with a more flexible platform that supports sensitivity analysis 
        and AI-driven features.
        `,
            ` I built dynamic UI components in Angular and PrimeNG, created backward-compatible APIs, 
        and contributed to a scalable Java backend capable of handling large datasets. Using 
        TypeScript and clear HTML structures, I focused on delivering a smooth and intuitive 
        user experience for working with complex engineering data.
        `,
            ` I also improved CI/CD workflows in GitLab, enabling faster, safer releases. The upgraded 
        solution helps Aker BP streamline well planning, reduce costs and risk, and make more 
        informed, data-driven decisions.
        `,
        ],
        highlighted: true,
    },
    {
        name: "LootVault",
        grade: "A",
        links: { "Public repo": "https://github.com/jon-tj/LootVault", "Code walkthrough": "https://www.youtube.com/watch?v=UfBDbnXRj_k" },
        role: "Fullstack Developer",
        duration: ["2025-01", "2025-11"],
        tags: [
            "c#",
            "core",
            "html",
            "docker",
            "kubernetes",
            "python",
            "git",
            "postgres",
            "sqlite",
            "redis"
        ],
        paragraphs: [
            `
        LootVault is an e-commerce platform for gaming products, where users can browse, shop, 
        and enjoy a fun, interactive experience. I worked with my team to design and build the 
        full stack, from the React frontend to the .NET backend.
        `,
            `
        This project taught me a lot about fullstack development, cloud deployment, and working 
        effectively in a fast-paced team. It's something I'm proud to showcase in my portfolio!
        `
        ],
        images: [
            "images/projects/lootvault-1.png",
            "images/projects/lootvault-2.png",
            "images/projects/lootvault-3.png",
            "images/projects/lootvault-4.png",
        ],
        highlighted: true,
    },
    {
        name: "Image Recognition & Factor Analysis for Alzheimer's Characterization",
        links: { "Public repo": "https://github.com/jon-tj/DementiaMRI", "Paper": "https://github.com/jon-tj/DementiaMRI/blob/main/Report_Unsupervised_Deep_Learning_for_Anomaly_Detection_of_MRI_Scans_in_Dementia.pdf" },
        role: "Data Scientist",
        grade: "A",
        duration: ["2025-01", "2025-05"],
        tags: [
            "python",
            "tensorflow",
            "keras",
            "github",
            "git",
        ],
        paragraphs: [
            ` For my bachelor's at UiS, I worked on developing an unsupervised learning system using 
        autoencoders in Python with TensorFlow and Keras to analyze MRI images. The goal was to explore how 
        structural brain changes can help characterize Alzheimer's and related disorders, and to 
        evaluate whether autonomous systems can support early detection.
        `,
            ` I collected and preprocessed large MRI datasets from multiple clinical studies, and experimented with several ML 
        architectures and compared internal representations across models to understand how 
        different structures captured patterns in the brain.
        `,
        ],
        images: [
            "images/projects/dementia-1.png",
            "images/projects/dementia-2.png",
            "images/projects/dementia-3.png",
        ],
        highlighted: true,
    },
    {
        name: "Techxplosion Hackathon - Watts up",
        role: "Python Developer",
        links: { "Public repo": "https://github.com/CKolle/hackathon-equinor", "LinkedIn Post": "https://www.linkedin.com/posts/-lan-anh-tran-_futureengineers-innovation-energyindustry-activity-7297177975542706176-XEgu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbbP5kBUYSRcj__qnvNXKsgAe5ktpQmzjg" },
        tags: [
            "html",
            "js",
            "python"
        ],
        duration: ["2025-02-15", "2025-02-16"],
        paragraphs: [
            `My team won the Equinor-sponsored hackathon at UiS by building a simulation game called 'Watts up', modeling the power grid,
        renewable energy sources and resource management in pure JS within 24 hours. This required that we make our own game engine, and we decided to follow the ECS pattern.
        The simulation modeled energy production, consumption, and distribution across a custom network of nodes, allowing users to visualize grid dynamics in real-time.`,
            `The simulation used data scraped in python from free weather services and the public sector, and featured multiple
        interpolation modes to retain realism at very small timescales. Game art and SFX was made by hand and music was AI-generated.`,
            `Watts Up is an interactive application designed to help people learn and explore the effect of different energy sources on GDP, production, consumption and how they are affected by the amount of sunshine and wind.`
        ],
        images: [
            "images/projects/hackathon-1.png",
            "images/projects/hackathon-2.png",
        ],
        highlighted: true,
    },
    {
        name: "Online Multiplayer Drawing Game",
        role: ".NET Developer, Team Lead",
        links: { "Public repo": "https://github.com/jon-tj/Dat240-2024" },
        duration: ["2024-08", "2024-11"],
        grade: "A",
        tags: [
            "c#",
            "core",
            "docker",
            "js",
            "sqlite",
            "git",
        ],
        paragraphs: [
            ` As a .NET developer and team lead, I built an online multiplayer drawing game where 
        players join rooms, chat in real time, and guess what the host is drawing. I implemented 
        features such as authentication, scoreboards, host rotation, chat, and live game events, 
        all developed under domain-driven design principles and an Agile workflow.
        `,
            ` For the frontend we used Jinja2 templates, Bootstrap, and JavaScript to create a lively and 
        intuitive user experience. MediatR supported clean flows for interactive game events, and 
        sockets were used to enable fast and responsive communication between players. This made 
        the gameplay feel dynamic and engaging.
        `
        ],
        highlighted: false,
    },
    {
        name: "AI Clinical Diagnoses",
        grade: "A",
        role: "ML Engineer, Frontend Developer",
        duration: ["2023-01", "2024-11"],
        tags: [
            "python",
            "tensorflow",
            "keras",
            "html",
            "git",
        ],
        paragraphs: [
            ` As an ML Engineer, I built a system for estimating disease likelihood based on symptom 
        descriptions. I collected data through web scraping using Selenium and pure python requests,
        and cleaned the data sets with Pandas.
        `,
            ` As one of my first NLP projects, I tested by making my own NLP models, as well as using open-
        source libraries like SpaCy, TensorFlow and Keras. The result was various models predicting
        posterior probability of diseases from an unstructured natural language input describing symptoms.
        `,
            ` As a Frontend Developer, I created a simple and user-friendly interface where users could 
        input symptoms and receive model predictions. The website was built with Python and Flask, 
        using HTML5 and Jinja templates to create a clean, dynamic user experience that connected 
        seamlessly to the backend model.
        `
        ],
        highlighted: false,
    },
    {
        name: "Family Secret Santa",
        duration: ["2025-12", "2025-12"],
        role: "Frontend Developer",
        tags: ["js", "html", "github"],
        images: [
            "images/projects/secret-santa-1.png",
            "images/projects/secret-santa-2.png",
        ],
        links: { "Public repo": "https://github.com/jon-tj/holiday/tree/main/christmas/secret-santa/secret-santa", "Preview": "https://htmlpreview.github.io/?https://github.com/jon-tj/holiday/blob/main/christmas/secret-santa/build.html" },
        paragraphs: [
            ` I built a lightweight Secret Santa website for my family to run organized, fair, and repeatable 
        gift-giver draws. The goal was to replace ad-hoc name pulling with a simple, transparent tool that 
        everyone could trust and reuse each year. In particular, a system that allowed fair draws without
        duplicates and excluding co-gifters required the development of a custom system!
        `,
            ` The project gave me a deeper understanding of how randomness works in JavaScript, including the 
        limitations of naive random selection. To ensure fairness and avoid bias, I implemented a custom 
        shuffling algorithm rather than relying on basic built-in approaches.
        `,
            ` The application was written in TypeScript with a focus on clarity and correctness. Due to time 
        constraints, it was deployed as a static site using GitHub Pages, which reinforced my ability to 
        scope features, make pragmatic trade-offs, and ship a complete, working solution quickly.
        `,
        ],
        highlighted: false,
    },
    {
        name: "Discord Bot",
        duration: ["2024-5", "present"],
        role: "Python Developer",
        tags: ["python", "c#", "js", "html"],
        images: [
            "images/projects/discord-bot-1.png",
            "images/projects/discord-bot-2.png",
        ],
        paragraphs: [
            `The project is an amalgamation of various projects, providing an easy access hub for
        various utility scripts and projects I've made, built in a modular fashion so the bot behaviour
        can be modified at run-time. Among the interesting modules I created were a fully functional shell,
        an LLM interface to connect to AI, a remote script scheduler, and a stock prediction module.
        `,
        ],
        highlighted: false,
    },
    {
        name: "PhysSketch",
        duration: ["2023-8", "2023-9"],
        role: "Fullstack Developer",
        tags: ["js", "html"],
        images: [
            "images/projects/phys-sketch-1.gif",
        ],
        links: { "Public repo": "https://github.com/jon-tj/PhysSketch", "Preview": "https://htmlpreview.github.io/?https://github.com/jon-tj/PhysSketch/blob/main/index.html" },
        paragraphs: [
            `Create and share simple physics models that run with Verlet Integration.
        Use the space bar or the play button in the top corner to play/pause the simulation.`,
        ],
        highlighted: false,
    },
    {
        name: "Flask Stock Trading Application",
        duration: ["2023-7", "2023-10"],
        role: "Fullstack Developer",
        tags: ["python", "c#", "js", "html", "ml"],
        images: [
            "images/projects/flask-trader-1.png",
            "images/projects/flask-trader-2.png",
        ],
        links: { "Public repo": "https://github.com/jon-tj/stocks-trading-flask", "Documentation": "https://github.com/jon-tj/stocks-trading-flask/blob/main/server/templates/docs.html" },
        paragraphs: [
            ` I developed a minimalistic stock trading and analysis application designed as a visual IDE 
        for financial decision-making. The goal was to provide an environment that is easy to get started 
        with, yet powerful enough to support advanced technical analysis and strategy experimentation.
        NOTE: To see the documentation, I suggest you start the Flask server and click the Help button.
        `,
            ` The application supports multiple markets and retrieves historical stock data from Yahoo Finance, 
        storing it locally for fast access and repeated testing. Loaded stocks are retained in memory to 
        mirror real-world quantitative workflows, allowing for rapid iteration when developing and testing 
        strategies.
        `,
            ` A key focus of the project was scriptability. Users can write and upload custom Python-based 
        indicators, tests, and predictors, with function parameters automatically exposed through the UI. 
        This required careful API design, flexible data pipelines, and a strong emphasis on transparency 
        through rich visualizations and configurable settings.
        `,
        ],
        highlighted: false,
    },

];
