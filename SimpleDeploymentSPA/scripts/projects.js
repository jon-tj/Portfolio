const PROJECTS = [
    {
        name: "Halliburton / Aker BP Pathfinders Modernization for AI",
        duration: ["2025-09", "present"],
        role: "Fullstack Developer",
        tags: ["angular", "figma", "typescript", "java", "html", "git", "gitlab", "postgresql", "devops"],
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
      My role focused on implementing features, handling payment integration, and connecting 
      frontend and backend seamlessly. I also contributed to team coordination and Agile 
      processes, ensuring that we delivered a working demo on time.
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
        ]
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
            `
      For my bachelor's at UiS, I worked on developing an unsupervised learning system using 
      autoencoders in Python with TensorFlow and Keras to analyze MRI images. The goal was to explore how 
      structural brain changes can help characterize Alzheimer's and related disorders, and to 
      evaluate whether autonomous systems can support early detection.
      `,
            `
      I collected and preprocessed large MRI datasets from multiple clinical studies, and experimented with several ML 
      architectures and compared internal representations across models to understand how 
      different structures captured patterns in the brain. By integrating population-level datasets, 
      I helped uncover correlations between brain changes and broader health trends, supporting 
      further research at the university.
      `,
            `
      The system was developed securely on UiS's Unix servers via SSH, ensuring compliance with 
      data-handling standards. I used Git for version control and set up GitHub Projects to 
      coordinate tasks within the team. The result was a research-ready platform that UiS could 
      confidently build on for future studies in early detection of neurodegenerative diseases.
      `
        ],
        images: [
            "images/projects/dementia-1.png",
            "images/projects/dementia-2.png",
            "images/projects/dementia-3.png",
        ]
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
            `
      As a .NET developer and team lead, I built an online multiplayer drawing game where 
      players join rooms, chat in real time, and guess what the host is drawing. I implemented 
      features such as authentication, scoreboards, host rotation, chat, and live game events, 
      all developed under domain-driven design principles and an Agile workflow.
      `,
            `
      For the frontend we used Jinja2 templates, Bootstrap, and JavaScript to create a lively and 
      intuitive user experience. MediatR supported clean flows for interactive game events, and 
      sockets were used to enable fast and responsive communication between players. This made 
      the gameplay feel dynamic and engaging.
      `
        ]
    },
    {
        name: "AI Clinical Diagnoses",
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
            `
      As an ML Engineer, I built a system for estimating disease likelihood based on symptom 
      descriptions. I collected data through web scraping using Selenium and Python's requests 
      module, and cleaned and structured the datasets with Pandas.
      `,
            `
      I applied manual and library-based NLP techniques using TensorFlow and SpaCy, enabling the 
      model to use symptoms to predict posterior probabilities of diseases from unstructured medical text.
      GitHub branching made it easy to test several models side-by-side without disrupting ongoing 
      development, helping keep the workflow efficient and organized.
      `,
            `
      As a Frontend Developer, I created a simple and user-friendly interface where users could 
      input symptoms and receive model predictions. The website was built with Python and Flask, 
      using HTML5 and Jinja templates to create a clean, dynamic user experience that connected 
      seamlessly to the backend model.
      `
        ]
    }
];
