import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Anjali',
        title: 'Shopify & Full Stack Developer',
        subtitle: 'Web Developer • Mobile App Developer | Building accessible digital experiences',
        bio: 'Shopify and Full Stack Developer from Delhi, pursuing B.Sc Computer Science at Maitreyi College, University of Delhi. I build and launch Shopify stores for fashion brands like Agedarc and FT Grails, create responsive websites, and develop Android and Flutter apps, blending clean code with thoughtful design to create experiences people love to use.',
        avatar: '/about/anjali.webp',
        location: 'Delhi, India',
        email: 'anjalisharmaaa656@gmail.com',
        phone: '(+91) 8920702526',
        resumeUrl: '/resume',
        website: 'https://linkedin.com/in/anjali-sharma610',
        languages: [
            { name: 'Hindi', level: 'Native' },
            { name: 'English', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'LinkedIn',
                url: 'https://www.linkedin.com/in/anjali-sharma610',
                icon: 'linkedin',
                username: 'Anjali',
            },
            {
                platform: 'GitHub',
                url: 'https://github.com/Anjali61034',
                icon: 'github',
                username: 'Anjali61034',
            },
        ],
    },
    projects: [
        {
            "id": "project-1",
            "slug": "agedarc",
            "title": "Agedarc",
            "description": "Built and launched the Shopify store for a vintage streetwear brand with 115K+ Instagram followers.",
            "longDescription": "End-to-end Shopify build for Agedarc, a vintage streetwear brand with a large Instagram audience. I set up the store, customised the theme with Liquid, built the product and collection pages, and handled launch so the brand could start selling online.",
            "image": "/work/agedarc-1.webp",
            "techStack": [
                "Shopify",
                "Liquid",
                "JavaScript",
                "CSS"
            ],
            "tools": [
                "Shopify Admin",
                "Figma",
                "Meta Ads Manager"
            ],
            "status": "completed",
            "demoUrl": "https://agedarc.com/",
            "startDate": "2025-08-01",
            "role": "Shopify Store Developer",
            "customTimeline": "Aug 2025 – Aug 2026",
            "team": "Client Project",
            "category": "Shopify Development",
            "highlights": [
                "Store setup & launch",
                "Custom Liquid sections",
                "Product & collection pages"
            ]
        },
        {
            "id": "project-2",
            "slug": "ft-grails",
            "title": "FT Grails",
            "description": "Building and maintaining the Shopify store for a vintage thrift drop brand.",
            "longDescription": "Ongoing Shopify development for FT Grails, a vintage thrift brand that runs frequent product drops. I maintain the theme, build custom sections and storefront features, and manage the brand's Meta ad campaigns.",
            "image": "/work/ftgrails-1.webp",
            "techStack": [
                "Shopify",
                "Liquid",
                "JavaScript",
                "Three.js"
            ],
            "tools": [
                "Shopify Admin",
                "Meta Ads Manager"
            ],
            "status": "ongoing",
            "demoUrl": "https://ftgrails.com/",
            "startDate": "2026-08-01",
            "role": "Shopify Store Developer",
            "customTimeline": "Aug 2026 – Present",
            "team": "Client Project",
            "category": "Shopify Development",
            "highlights": [
                "Drop-ready storefront",
                "Custom theme sections",
                "Meta Ads management"
            ]
        },
        {
            "id": "project-3",
            "slug": "allbirds",
            "title": "Allbirds",
            "description": "Theme customisation and storefront components for smoother product presentation and navigation.",
            "longDescription": "Worked on Shopify theme customisation and storefront components for Allbirds, improving how products are presented and how shoppers move through the store.",
            "image": "/work/allbirds-1.webp",
            "techStack": [
                "Shopify",
                "Liquid",
                "JavaScript"
            ],
            "tools": [
                "Shopify Admin",
                "VS Code"
            ],
            "status": "completed",
            "demoUrl": "https://www.allbirds.com/",
            "startDate": "2025-01-01",
            "role": "Shopify Store Developer",
            "customTimeline": "Jan 2025 – Apr 2025",
            "team": "Client Project",
            "category": "Shopify Development",
            "highlights": [
                "Theme customisation",
                "Storefront components"
            ]
        },
        {
            "id": "project-4",
            "slug": "dopamean",
            "title": "Dopamean",
            "description": "Responsive, cross-browser layouts and UI improvements for a curated archive store.",
            "longDescription": "As a web developer intern at Dopamean, I built responsive, cross-browser layouts and made UI improvements across the site.",
            "image": "/work/dopamean-1.webp",
            "techStack": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "tools": [
                "VS Code",
                "Figma"
            ],
            "status": "completed",
            "demoUrl": "https://dopamean.in/",
            "startDate": "2025-05-01",
            "role": "Web Developer Intern",
            "customTimeline": "May 2025 – Jul 2025",
            "team": "Internship",
            "category": "Web Development",
            "highlights": [
                "Responsive layouts",
                "UI improvements"
            ]
        },
        {
            "id": "project-5",
            "slug": "canary-indoor-navigation-app",
            "title": "Canary Indoor Navigation App",
            "description": "Indoor navigation app with landmark-based voice guidance.",
            "longDescription": "Canary is an Android indoor navigation app that guides users through buildings with landmark-based voice directions, using BLE beacons and the Navigine SDK for positioning.",
            "image": "/project/canaryindoornavigationapp1.webp",
            "techStack": [
                "Java",
                "Kotlin",
                "Firebase",
                "BLE Beacons",
                "Navigine SDK"
            ],
            "tools": [
                "Android Studio",
                "Firebase Console"
            ],
            "status": "completed",
            "repoUrl": "https://github.com/Anjali61034/CANARY-an-initiative",
            "startDate": "2025-01-01",
            "role": "Full Stack App Developer",
            "customTimeline": "2025",
            "team": "CURE International India Trust",
            "category": "Mobile App Development",
            "highlights": [
                "Voice guidance",
                "BLE beacon positioning",
                "Firebase backend"
            ]
        },
        {
            "id": "project-6",
            "slug": "uniway-campus-information-app",
            "title": "UniWay Campus Information App",
            "description": "Campus information app for Maitreyi College, live on the Google Play Store.",
            "longDescription": "UniWay is a cross-platform campus information app for Maitreyi College, built with Flutter and a Django + Firebase backend, and published on the Google Play Store.",
            "image": "/project/uniwaycampusinformationapp1.webp",
            "techStack": [
                "Flutter",
                "Dart",
                "Django",
                "Firebase"
            ],
            "tools": [
                "Android Studio",
                "Google Play Console"
            ],
            "status": "completed",
            "repoUrl": "https://github.com/Anjali61034/Maitreyi-Uniway",
            "startDate": "2025-02-01",
            "role": "Mobile App Developer",
            "customTimeline": "2025",
            "team": "Maitreyi College",
            "category": "Mobile App Development",
            "highlights": [
                "Live on Play Store",
                "Flutter + Django"
            ]
        },
        {
            "id": "project-7",
            "slug": "achieve-x-merit-portal",
            "title": "Achieve-X Merit Portal",
            "description": "Student merit and academic management portal.",
            "longDescription": "Achieve-X is a web portal for managing student merit records and academic information.",
            "image": "/project/achievexmeritportal1.webp",
            "techStack": [
                "JavaScript",
                "REST APIs"
            ],
            "tools": [
                "VS Code"
            ],
            "status": "completed",
            "repoUrl": "https://github.com/Anjali61034/Achieve-X",
            "startDate": "2024-09-01",
            "role": "Full Stack Developer",
            "customTimeline": "2024",
            "team": "Academic Project",
            "category": "Web Development",
            "highlights": [
                "Merit tracking",
                "REST APIs"
            ]
        },
        {
            "id": "project-8",
            "slug": "iot-aqi-monitoring-system",
            "title": "IoT AQI Monitoring System",
            "description": "ESP32-based real-time campus air-quality monitoring, presented at Equinox 2025.",
            "longDescription": "A real-time air quality monitoring system for a sustainable campus, built on ESP32 with IoT sensors. The research paper was presented at EQUINOX 2025, the international conference at Maitreyi College.",
            "image": "/project/iotaqimonitoringsystem1.webp",
            "techStack": [
                "ESP32",
                "C++",
                "IoT Sensors"
            ],
            "tools": [
                "Arduino IDE"
            ],
            "status": "completed",
            "repoUrl": "https://github.com/Anjali61034/Iot-Based-AQI-Monitoring-System",
            "startDate": "2025-06-20",
            "role": "Researcher & Developer",
            "customTimeline": "Jun 2025 – Sep 2025",
            "team": "Centre for Research, Maitreyi College",
            "category": "IoT",
            "highlights": [
                "Real-time AQI data",
                "Presented at Equinox 2025"
            ]
        }
    ],

    experiences: [
        {
            "id": "prof-1",
            "company": "FT Grails",
            "position": "Shopify Store Developer",
            "description": "Building and maintaining the Shopify store for a vintage thrift drop brand, and managing its Meta ad campaigns.",
            "responsibilities": [
                "Maintain and extend the Shopify theme with custom Liquid sections.",
                "Build storefront features that support frequent product drops.",
                "Run and manage Meta (Facebook & Instagram) ad campaigns."
            ],
            "skills": [
                "Shopify",
                "Liquid",
                "JavaScript",
                "Meta Ads"
            ],
            "startDate": "2026-08-01",
            "isOngoing": true,
            "location": "Remote",
            "type": "part-time",
            "externalLink": "https://ftgrails.com/"
        },
        {
            "id": "prof-2",
            "company": "Agedarc",
            "position": "Shopify Store Developer",
            "description": "Built and launched the Shopify store for a vintage streetwear brand with 115K+ Instagram followers.",
            "responsibilities": [
                "Set up and launched the brand's Shopify store.",
                "Customised the theme and built product and collection pages with Liquid.",
                "Handled store maintenance after launch."
            ],
            "skills": [
                "Shopify",
                "Liquid",
                "UI/UX",
                "E-commerce"
            ],
            "startDate": "2025-08-01",
            "endDate": "2026-08-01",
            "isOngoing": false,
            "location": "Delhi, India",
            "type": "full-time",
            "externalLink": "https://agedarc.com/"
        },
        {
            "id": "prof-3",
            "company": "Dopamean",
            "position": "Web Developer Intern",
            "description": "Built responsive, cross-browser layouts and UI improvements for a curated archive store.",
            "responsibilities": [
                "Built responsive, cross-browser page layouts.",
                "Made UI improvements across the site."
            ],
            "skills": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "startDate": "2025-05-01",
            "endDate": "2025-07-31",
            "isOngoing": false,
            "location": "Remote",
            "type": "internship",
            "externalLink": "https://dopamean.in/"
        },
        {
            "id": "prof-4",
            "company": "CURE International India Trust",
            "position": "Full Stack App Developer Intern",
            "description": "Developed Canary, an Android indoor navigation app with landmark-based voice guidance.",
            "responsibilities": [
                "Built the Android app in Java and Kotlin.",
                "Integrated BLE beacons and the Navigine SDK for indoor positioning.",
                "Set up the Firebase backend."
            ],
            "skills": [
                "Java",
                "Kotlin",
                "Firebase",
                "Android"
            ],
            "startDate": "2025-01-01",
            "endDate": "2025-09-30",
            "isOngoing": false,
            "location": "India",
            "type": "internship"
        },
        {
            "id": "prof-5",
            "company": "Allbirds",
            "position": "Shopify Store Developer",
            "description": "Theme customisation and storefront components for smoother product presentation and navigation.",
            "responsibilities": [
                "Customised the Shopify theme.",
                "Built storefront components for product presentation and navigation."
            ],
            "skills": [
                "Shopify",
                "Liquid",
                "JavaScript"
            ],
            "startDate": "2025-01-01",
            "endDate": "2025-04-30",
            "isOngoing": false,
            "location": "Remote",
            "type": "contract",
            "externalLink": "https://www.allbirds.com/"
        },
        {
            "id": "lead-1",
            "company": "Maitreyi College, University of Delhi",
            "position": "Team Technical Head & Mobile App Developer",
            "description": "Led the technical team and built UniWay, the college's campus information app, published on the Google Play Store.",
            "responsibilities": [
                "Led the student technical team.",
                "Built UniWay with Flutter, Django and Firebase and published it on the Play Store."
            ],
            "skills": [
                "Flutter",
                "Dart",
                "Django",
                "Leadership"
            ],
            "startDate": "2025-02-01",
            "endDate": "2025-09-30",
            "isOngoing": false,
            "location": "Delhi, India",
            "type": "part-time"
        }
    ],

    education: [
        {
            id: 'edu-1',
            institution: 'Maitreyi College, University of Delhi',
            degree: 'B.Sc (Prog.)',
            major: 'Physical Science with Computer Science',
            startDate: '2023-01-01',
            endDate: '2026-01-01',
            isOngoing: true,
            gpa: '7.833/10',
            activities: ['First Division'],
            achievements: [
                'Relevant Coursework: Data Structures, Computer System Architecture, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Full Stack Web Application, App Development.',
            ],
        },
        {
            id: 'edu-2',
            institution: 'Saffron Public School, Faridabad',
            degree: 'Class XII (CBSE)',
            major: 'Physics, Chemistry, Mathematics, English and Web Application',
            startDate: '2021-01-01',
            endDate: '2023-01-01',
            isOngoing: false,
            gpa: '85% (425/500)',
        },
        {
            id: 'edu-3',
            institution: 'Saffron Public School, Faridabad',
            degree: 'Class X (CBSE)',
            major: 'Science, Social Science, Mathematics, Sanskrit and English',
            startDate: '2019-01-01',
            endDate: '2021-01-01',
            isOngoing: false,
            gpa: '89% (445/500)',
        },
    ],
    achievements: [
        {
            id: 'cert-1',
            title: "Google Girl Hackathon 2025",
            issuer: "Google",
            date: '2025-01-20',
            description: "Participated in Google's Girl Hackathon 2025.",
            category: 'competition',
            image: '/certificate/anjali/google-girl-hackathon-2025.webp',
        },
        {
            id: 'cert-2',
            title: "Build With India – Top 5,000 Teams",
            issuer: "HackWithIndia × Google",
            date: '2025-01-01',
            description: "Placed among the top 5,000 of 25,000 teams in BuildWithIndia, with the finale at the Google office.",
            category: 'competition',
            image: '/certificate/anjali/build-with-india-hackathon.webp',
        },
        {
            id: 'cert-3',
            title: "Web-a-Thon – 3rd Position",
            issuer: "Maitreyi College, University of Delhi",
            date: '2025-03-06',
            description: "Secured 3rd position in the Web-a-Thon web development competition at Avgaahan, the annual international interdisciplinary academic fest.",
            category: 'award',
            image: '/certificate/anjali/web-a-thon-third-position.webp',
        },
        {
            id: 'cert-4',
            title: "Paper: IoT-based AQI Monitoring System for a Sustainable Campus",
            issuer: "EQUINOX 2025 International Conference, Maitreyi College",
            date: '2025-09-12',
            description: "Presented a research paper at the 5th Annual International Conference “Minds and Machines”, Centre for Research, Maitreyi College.",
            category: 'publication',
            image: '/certificate/anjali/equinox-2025-iot-aqi-paper.webp',
        },
        {
            id: 'cert-5',
            title: "SMART-AQI Summer Research Internship",
            issuer: "Centre for Research, Maitreyi College",
            date: '2025-08-20',
            description: "Completed a two-month project, SMART-AQI: a smart campus framework for air quality monitoring and analysis (June–August 2025).",
            category: 'recognition',
            image: '/certificate/anjali/smart-aqi-summer-internship.webp',
        },
        {
            id: 'cert-6',
            title: "Gen AI Study Jams – Google Cloud",
            issuer: "Google Developer Groups On Campus",
            date: '2025-03-01',
            description: "Completed the Google Cloud Gen AI Study Jams program (2024–25), covering Cloud Storage, API Gateway, Looker, Dataplex and more.",
            category: 'certification',
            image: '/certificate/anjali/google-cloud-genai-study-jams.webp',
        },
        {
            id: 'cert-7',
            title: "Cloud Computing Workshop",
            issuer: "Acharya Narendra Dev College, University of Delhi",
            date: '2025-02-25',
            description: "Completed a two-day cloud computing workshop.",
            category: 'certification',
            image: '/certificate/anjali/cloud-computing-workshop-andc.webp',
        },
        {
            id: 'cert-8',
            title: "Natural Language Processing Workshop",
            issuer: "Acharya Narendra Dev College, University of Delhi",
            date: '2024-11-13',
            description: "Completed a two-day NLP workshop under the DBT Star College Scheme.",
            category: 'certification',
            image: '/certificate/anjali/nlp-workshop-andc.webp',
        },
        {
            id: 'cert-9',
            title: "Power BI Workshop",
            issuer: "OfficeMaster",
            date: '2024-11-03',
            description: "Completed a Power BI workshop on building AI-powered interactive dashboards.",
            category: 'certification',
            image: '/certificate/anjali/powerbi-workshop.webp',
        },
        {
            id: 'cert-10',
            title: "Career Readiness Bootcamp",
            issuer: "Placement Cell, P.G.D.A.V. College (DU)",
            date: '2024-11-25',
            description: "Completed a 10-day career readiness bootcamp, 15–25 November 2024.",
            category: 'certification',
            image: '/certificate/anjali/career-readiness-bootcamp.webp',
        },
        {
            id: 'cert-11',
            title: "Esports Tournament – Winner",
            issuer: "J.C. Bose University (YMCA), Faridabad",
            date: '2025-07-22',
            description: "Won the esports tournament held 20–22 July 2025.",
            category: 'award',
            image: '/certificate/anjali/jc-bose-esports-winner.webp',
        },
        {
            id: 'cert-12',
            title: "Inter-College Badminton – 1st Position",
            issuer: "Acharya Narendra Dev College",
            date: '2025-09-18',
            description: "Won 1st position in the doubles badminton event at the inter-college competition.",
            category: 'award',
            image: '/certificate/anjali/badminton-first-position.webp',
        },
    ],
    techStack: [
        { name: 'Shopify', icon: "https://cdn.simpleicons.org/shopify", category: 'framework' },
        { name: 'Liquid', icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%2395BF47' d='M12 2C12 2 5 10 5 14.5A7 7 0 0 0 19 14.5C19 10 12 2 12 2Z'/><text x='12' y='18' font-size='7' font-family='monospace' font-weight='700' text-anchor='middle' fill='white'>{%25}</text></svg>", category: 'language' },
        { name: 'JavaScript', icon: "https://cdn.simpleicons.org/javascript", category: 'language' },
        { name: 'HTML5', icon: "https://cdn.simpleicons.org/html5", category: 'language' },
        { name: 'CSS', icon: "https://cdn.simpleicons.org/css", category: 'language' },
        { name: 'Python', icon: "https://cdn.simpleicons.org/python", category: 'language' },
        { name: 'Java', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: 'language' },
        { name: 'Kotlin', icon: "https://cdn.simpleicons.org/kotlin", category: 'language' },
        { name: 'C++', icon: "https://cdn.simpleicons.org/cplusplus", category: 'language' },
        { name: 'Dart', icon: "https://cdn.simpleicons.org/dart", category: 'language' },
        { name: 'Flutter', icon: "https://cdn.simpleicons.org/flutter", category: 'framework' },
        { name: 'Django', icon: "https://cdn.simpleicons.org/django", category: 'framework' },
        { name: 'Firebase', icon: "https://cdn.simpleicons.org/firebase", category: 'database' },
        { name: 'SQL', icon: "https://cdn.simpleicons.org/mysql", category: 'database' },
        { name: 'REST APIs', icon: "https://cdn.simpleicons.org/openapiinitiative", category: 'tool' },
        { name: 'Android Studio', icon: "https://cdn.simpleicons.org/androidstudio", category: 'tool' },
        { name: 'Figma', icon: "https://cdn.simpleicons.org/figma", category: 'tool' },
        { name: 'Git', icon: "https://cdn.simpleicons.org/git", category: 'tool' },
        { name: 'GitHub', icon: "https://cdn.simpleicons.org/github", category: 'tool' },
        { name: 'Postman', icon: "https://cdn.simpleicons.org/postman", category: 'tool' },
        { name: 'Linux', icon: "https://cdn.simpleicons.org/linux", category: 'tool' },
        { name: 'Google Cloud', icon: "https://cdn.simpleicons.org/googlecloud", category: 'tool' },
        { name: 'Gemini API', icon: "https://cdn.simpleicons.org/googlegemini", category: 'library' },
        { name: 'Meta Ads', icon: "https://cdn.simpleicons.org/meta", category: 'tool' },
    ],
    hardSkills: [
        { name: 'System Architecture', level: 'intermediate', category: 'software', description: 'Designing robust, scalable, and high-performance system architectures for complex applications.' },

        { name: 'AI Agents & Autonomy', level: 'beginner', category: 'ai', description: 'Designing autonomous systems with recursive reasoning and decision-making capabilities.' },
        { name: 'Large Language Models (LLM)', level: 'intermediate', category: 'ai', description: 'Expertise in fine tuning open source models, RAG architectures, and prompt engineering.' },
        { name: 'Data Science', level: 'expert', category: 'ai', description: 'Advanced statistical analysis and predictive modeling to extract insights from big data.' },
        { name: 'Deep Learning (CV/NLP)', level: 'advanced', category: 'ai', description: 'Architecting deep neural networks for complex computer vision and natural language tasks.' },
        { name: 'Computer Vision', level: 'intermediate', category: 'ai', description: 'Developing real-time object detection, pattern recognition, and spatial analysis systems.' },
        { name: 'Machine Learning Ops', level: 'advanced', category: 'ai', description: 'Implementing robust pipelines for model training, deployment, and performance monitoring.' },
        { name: 'DevOps', level: 'advanced', category: 'devops', description: 'Streamlining development workflows and infrastructure management through automation.' },
        { name: 'Full Stack Development', level: 'expert', category: 'software', description: 'Engineering scalable web architectures from pixel-perfect frontends to robust databases.' },
        { name: 'System Analysis', level: 'advanced', category: 'software', description: 'Translating complex stakeholder requirements into efficient and scalable technical blueprints.' },
        { name: 'SDLC', level: 'intermediate', category: 'software', description: 'Governing the entire life cycle of software development with a focus on quality and agility.' },
        { name: 'Software Design', level: 'advanced', category: 'software', description: 'Applying architectural patterns and principles to build maintainable and modular systems.' },
        { name: 'Requirement Specifications', level: 'advanced', category: 'software', description: 'Defining clear, precise, and actionable technical documentation for engineering teams.' },
        { name: 'Data Analytics', level: 'advanced', category: 'data', description: 'Transforming raw data into meaningful visualizations and strategic intelligence.' },
        { name: 'Data Visualization', level: 'expert', category: 'data', description: 'Crafting intuitive and interactive dashboards to communicate complex data findings.' },
        { name: 'SQL & DBMS', level: 'expert', category: 'data', description: 'Architecting and optimizing relational database schemas for high-performance applications.' },
        { name: 'Docker & Kubernetes', level: 'intermediate', category: 'devops', description: 'Containerizing applications for consistent deployment and orchestrating cloud resources.' },

        // Other Technical Skills
        { name: 'Wazuh', level: 'beginner', category: 'other', description: 'Exploring open-source security monitoring for threat detection and compliance.' },
        { name: 'Network Traffic Analysis', level: 'beginner', category: 'other', description: 'Analyzing packet captures to identify anomalies and optimize network performance.' },
        { name: 'Socket Programming', level: 'expert', category: 'other', description: 'Implementing low-level network communication protocols for real-time data transfer.' },
        { name: 'Google Cloud Platform', level: 'beginner', category: 'other', description: 'Utilizing cloud infrastructure and services for scalable application hosting.' },
        { name: 'Solidity', level: 'beginner', category: 'other', description: 'Writing secure smart contracts for decentralized applications on Ethereum.' },
        { name: 'Decentralized Applications (DApps)', level: 'beginner', category: 'other', description: 'Developing web applications that interact with blockchain smart contracts.' },
        { name: 'Blockchain Architecture', level: 'beginner', category: 'other', description: 'Understanding the fundamental principles of distributed ledger technologies.' },
    ],
    softSkills: [
        { name: 'Problem Solving', description: 'Debugging storefronts, apps, and layouts until they just work' },
        { name: 'Systemic Thinking', description: 'Planning stores and apps as connected, scalable systems' },
        { name: 'Critical Thinking', description: 'Weighing design, code, and business trade-offs clearly' },
        { name: 'Continuous Learning', description: 'Always picking up new tools, from Liquid to Flutter to Gemini APIs' },
        { name: 'Analytical Thinking', description: 'Turning store data and user feedback into better experiences' },
        { name: 'Adaptability', description: 'Moving smoothly between Shopify, web, mobile, and IoT projects' },
        { name: 'Leadership', description: 'Led the UniWay app team as Technical Head' },
        { name: 'Communication', description: 'Clear updates and smooth handovers with clients and teammates' },
        { name: 'Teamwork', description: 'Collaborating with brands, designers, and fellow developers' },
        { name: 'Research Skills', description: 'Presented IoT air-quality research at Equinox 2025' },
    ],
    tools: [
        { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify', category: 'productivity' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'design' },
        { name: 'Meta Business Suite', icon: 'https://cdn.simpleicons.org/meta', category: 'productivity' },
        { name: 'Google Analytics', icon: 'https://cdn.simpleicons.org/googleanalytics', category: 'productivity' },
        { name: 'Search Console', icon: 'https://cdn.simpleicons.org/googlesearchconsole', category: 'productivity' },
        { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud', category: 'devops' },
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' },
        { name: 'Android Studio', icon: 'https://cdn.simpleicons.org/androidstudio', category: 'ide' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', category: 'devops' },
        { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux', category: 'devops' },
    ],
    faqs: [
        {
            question: 'What services do you offer?',
            answer: 'I specialize in Full Stack Development (React, Next.js, Node.js), AI/ML Development (TensorFlow, Computer Vision, NLP), Data Science, and Blockchain/Web3 development (Solidity, Smart Contracts, DApps).',
        },
        {
            question: 'What technologies are you exploring?',
            answer: 'Currently diving deep into AI Agents, Blockchain technology (Solidity, Smart Contracts), and MLOps for production-ready AI systems.',
        },
        {
            question: 'Are you available for opportunities?',
            answer: 'Yes! I\'m open to internships, collaborations, and exciting projects in AI, Data Science, Full Stack Development, and Blockchain. Feel free to reach out!',
        },
    ],
    blogs: [
        {
            "id": "blog-1",
            "slug": "shopify-stores-that-convert",
            "title": "Building Shopify Stores That Convert",
            "excerpt": "How theme structure, product pages, and smooth navigation turn browsers into buyers.",
            "content": "A store can look beautiful and still lose sales. Most of the time the problem isn't traffic but friction: shoppers can't find what they want, product pages don't answer their questions, or checkout feels uncertain.\n\n## Start with navigation\n\nKeep the main menu short and obvious. Group collections the way your customers shop (by drop, category, or size), not the way your stock sheet is organised. A search bar that actually works matters more than another banner.\n\n## Make product pages do the selling\n\nClear photos from several angles, honest measurements, a size guide, shipping and return details near the Add to Cart button, and a short description that sounds like the brand. For vintage and thrift stores, condition notes build trust.\n\n## Remove doubt at checkout\n\nShow shipping costs early, keep payment options visible, and make sure the store works perfectly on a phone, because that's where most Instagram traffic lands.\n\nSmall fixes in these three places usually do more for sales than a full redesign.",
            "image": "/blog-cards/shopify-convert.webp",
            "date": "2026-09-20",
            "category": "shopify",
            "tags": [
                "Shopify",
                "E-commerce",
                "UX"
            ],
            "author": {
                "name": "Anjali",
                "avatar": "/about/anjali.webp"
            },
            "readTime": "5"
        },
        {
            "id": "blog-2",
            "slug": "custom-liquid-sections",
            "title": "Custom Liquid Sections Without Extra Apps",
            "excerpt": "Extending Shopify themes with reusable Liquid sections instead of piling on paid apps.",
            "content": "Every Shopify app you install adds monthly cost and often extra scripts that slow your store down. A lot of what those apps do can be built once as a custom Liquid section.\n\n## Why sections\n\nOnline Store 2.0 themes let you build sections with their own settings schema. Once a section exists, the store owner can add it to any page and edit text, images, and products from the theme editor, with no code.\n\n## Good candidates\n\nFeatured product carousels, size charts, FAQ accordions, trust badges, lookbooks, and announcement bars are all easy to build as sections and rarely need an app.\n\n## Keep them reusable\n\nUse settings and blocks instead of hard-coded text, lazy-load images with the image_url and image_tag filters, and keep CSS scoped to the section. That way the store stays fast and the owner stays in control.",
            "image": "/blog-cards/liquid-sections.webp",
            "date": "2026-09-05",
            "category": "shopify",
            "tags": [
                "Shopify",
                "Liquid",
                "Theme Development"
            ],
            "author": {
                "name": "Anjali",
                "avatar": "/about/anjali.webp"
            },
            "readTime": "6"
        },
        {
            "id": "blog-3",
            "slug": "shipping-flutter-app",
            "title": "Shipping a Flutter App to the Play Store",
            "excerpt": "Lessons from building and launching UniWay, a campus app for Maitreyi College.",
            "content": "UniWay started as a simple idea: put everything a student needs to know about Maitreyi College into one app. Getting it onto the Play Store taught me more than building it.\n\n## Build for real users early\n\nWe tested with classmates from the first working version. Their feedback changed the navigation completely, and it was much cheaper to change early.\n\n## Keep the backend simple\n\nFlutter on the front, with Firebase and Django behind it, let us move fast without managing servers we didn't need.\n\n## Plan for the release process\n\nStore listing, screenshots, privacy policy, signing keys, and review time all take longer than expected. Starting on them before the app is finished saves weeks.",
            "image": "/blog-cards/flutter-app.webp",
            "date": "2026-08-15",
            "category": "app-development",
            "tags": [
                "Flutter",
                "Dart",
                "Firebase"
            ],
            "author": {
                "name": "Anjali",
                "avatar": "/about/anjali.webp"
            },
            "readTime": "6"
        },
        {
            "id": "blog-4",
            "slug": "meta-ads-that-sell",
            "title": "Meta Ads That Actually Sell",
            "excerpt": "Pixel setup, product catalogs, and creatives that bring real customers to your store.",
            "content": "Running Meta ads for a Shopify store is less about clever targeting and more about getting the basics right.\n\n## Set up tracking first\n\nConnect the Meta Pixel and Conversions API through Shopify's Facebook & Instagram channel, and check that purchase events are firing before you spend anything.\n\n## Use your product catalog\n\nA synced catalog lets you run dynamic ads that show people the exact products they viewed. For stores with frequent drops, this keeps ads fresh without making new creatives every day.\n\n## Test creatives, not just audiences\n\nBroad audiences work well now. What makes the difference is the creative: real product shots, short videos, and a clear reason to buy today.",
            "image": "/blog-cards/meta-ads.webp",
            "date": "2026-07-30",
            "category": "meta-ads",
            "tags": [
                "Meta Ads",
                "Facebook",
                "Instagram"
            ],
            "author": {
                "name": "Anjali",
                "avatar": "/about/anjali.webp"
            },
            "readTime": "5"
        },
        {
            "id": "blog-5",
            "slug": "speed-up-shopify-store",
            "title": "Speeding Up Your Shopify Store",
            "excerpt": "Image optimisation, lean themes, and smart app choices for a faster, higher-ranking store.",
            "content": "A slow store loses customers before they see a single product, and it ranks lower on Google too.\n\n## Fix images first\n\nUpload images at sensible sizes, let Shopify serve modern formats, and lazy-load anything below the first screen.\n\n## Audit your apps\n\nEach app can add scripts to every page. Remove the ones you don't use, and replace simple ones with small custom sections.\n\n## Keep the theme lean\n\nAvoid heavy sliders and autoplay video in the first screen, limit custom fonts, and test on a real mid-range phone, not just a laptop.",
            "image": "/blog-cards/speed.webp",
            "date": "2026-07-10",
            "category": "web-performance",
            "tags": [
                "Shopify",
                "Performance",
                "SEO"
            ],
            "author": {
                "name": "Anjali",
                "avatar": "/about/anjali.webp"
            },
            "readTime": "5"
        }
    ],

    gallery: [
        {
            "id": "gal-1",
            "title": "Maitreyi College",
            "description": "At Maitreyi College, University of Delhi.",
            "date": "2025-09-12",
            "type": "image",
            "url": "/gallery/maitreyi.webp",
            "category": "event"
        },
        {
            "id": "gal-2",
            "title": "Paytm Office Visit",
            "description": "Visiting the Paytm office.",
            "date": "2025-08-01",
            "type": "image",
            "url": "/gallery/paytm.webp",
            "category": "event"
        },
        {
            "id": "gal-3",
            "title": "Agedarc Store",
            "description": "Shopify store built for Agedarc.",
            "date": "2025-08-01",
            "type": "image",
            "url": "/work/agedarc-1.webp",
            "category": "technical"
        },
        {
            "id": "gal-4",
            "title": "FT Grails Store",
            "description": "Shopify store for FT Grails.",
            "date": "2026-08-01",
            "type": "image",
            "url": "/work/ftgrails-1.webp",
            "category": "technical"
        },
        {
            "id": "gal-5",
            "title": "Allbirds Storefront",
            "description": "Storefront components for Allbirds.",
            "date": "2025-01-01",
            "type": "image",
            "url": "/work/allbirds-1.webp",
            "category": "technical"
        },
        {
            "id": "gal-6",
            "title": "Dopamean Website",
            "description": "Responsive layouts for Dopamean.",
            "date": "2025-05-01",
            "type": "image",
            "url": "/work/dopamean-1.webp",
            "category": "technical"
        }
    ],

};

// Resume-aligned content. Keep the original visual system intact while making
// the portfolio a truthful presentation of Anjali's current experience.
portfolioData.projects = [
    {
        id: 'project-achieve-x', slug: 'achieve-x-merit-portal', title: 'Achieve-X – A Merit Portal',
        image: '/project/achievexmeritportal1.webp',
        description: 'A student merit and academic management portal.',
        longDescription: 'A responsive portal for managing student merit records and academic data with integrated backend data workflows. Add project screenshots, live demo, and repository details when available.',
        techStack: ['Web Development', 'Responsive UI', 'Backend Data Integration'], tools: ['VS Code', 'Git/GitHub', 'Figma'], status: 'completed',
        demoUrl: '#', repoUrl: 'https://github.com/Anjali61034/Achieve-X', startDate: '2025-08-01', customTimeline: 'Aug 2025 – Jul 2026', role: 'Full Stack Developer', team: 'Academic Project', category: 'Web Development',
        highlights: ['Merit Management', 'Academic Data Integration', 'Responsive Frontend'],
        features: [{ title: 'Project Preview', items: ['Add screenshots and live demo link here when available.', 'Placeholder for portal walkthrough and repository link.'] }],
    },
    {
        id: 'project-aqi', slug: 'iot-aqi-monitoring-system', title: 'IoT-based AQI Monitoring System for a Sustainable Campus',
        image: '/project/iotaqimonitoringsystem1.webp',
        description: 'ESP32-based real-time campus air-quality monitoring system.',
        longDescription: 'Developed an ESP32-based IoT Air Quality Monitoring System for real-time campus AQI monitoring using PM2.5, PM10, CO, CO2, NH3, H2S, and NO2 sensors. Presented the research paper at Equinox 2025 – 5th Annual International Conference.',
        techStack: ['ESP32', 'IoT', 'Sensors', 'Embedded Systems'], tools: ['Arduino IDE', 'Firebase', 'Git/GitHub'], status: 'completed', demoUrl: '#', repoUrl: 'https://github.com/Anjali61034/Iot-Based-AQI-Monitoring-System', startDate: '2026-01-01', customTimeline: 'Jan 2026 – Apr 2026', role: 'IoT Developer & Researcher', team: 'Academic Project', category: 'IoT & Embedded',
        highlights: ['Real-time AQI Data', 'Multi-sensor Monitoring', 'Conference Presentation'],
        features: [{ title: 'Project Preview', items: ['Placeholder for sensor dashboard image.', 'Placeholder for research paper and repository link.'] }],
    },
    {
        id: 'project-uniway', slug: 'uniway-campus-information-app', title: 'UniWay – Campus Information App', image: '/project/uniwaycampusinformationapp1.webp',
        description: 'Mobile application for college notices, announcements, academic updates, and student services.',
        longDescription: 'Led the development of a centralized mobile application for Maitreyi College, available on the Google Play Store.', techStack: ['Flutter', 'Dart', 'Django', 'Firebase', 'REST APIs'], tools: ['Android Studio', 'Figma', 'Git/GitHub'], status: 'completed', demoUrl: '#', repoUrl: 'https://github.com/Anjali61034/Maitreyi-Uniway', startDate: '2025-02-01', customTimeline: 'Feb 2025 – Sep 2025', role: 'Team Technical Head & Mobile Application Developer', team: 'College Project', category: 'Mobile Development', highlights: ['College Notices', 'Student Services', 'Google Play Store'], features: [{ title: 'Project Preview', items: ['Placeholder for app screenshots and Play Store link.'] }],
    },
    {
        id: 'project-canary', slug: 'canary-indoor-navigation-app', title: 'Canary – Indoor Navigation App', image: '/project/canaryindoornavigationapp1.webp',
        description: 'Accessible indoor navigation app with landmark-based voice prompts.', longDescription: 'Implemented landmark-based voice prompts to help users independently navigate high-traffic public spaces such as medical centers and office complexes.', techStack: ['Android Studio', 'Java', 'Kotlin', 'Firebase', 'BLE Beacon Technology', 'Navigine SDK', 'REST APIs'], tools: ['Git/GitHub', 'Android Studio'], status: 'completed', demoUrl: '#', repoUrl: 'https://github.com/Anjali61034/CANARY-an-initiative', startDate: '2025-01-01', customTimeline: 'Jan 2025 – Sep 2025', role: 'Full Stack App Developer Intern', team: 'CURE International India Trust', category: 'Mobile Development', highlights: ['Voice Guidance', 'Indoor Navigation', 'Accessibility'], features: [{ title: 'Project Preview', items: ['Source code available on GitHub.'] }],
    },
];

portfolioData.experiences = [
    { id: 'prof-anjali-0', company: 'FT Grails', position: 'Shopify Store Developer', description: 'Building and maintaining the Shopify store for a vintage thrift drop brand, and managing its Meta ad campaigns.', responsibilities: ['Maintain and extend the Shopify theme with custom Liquid sections.', 'Build storefront features for frequent product drops.', 'Run and manage Meta (Facebook & Instagram) ad campaigns.'], skills: ['Shopify', 'Liquid', 'JavaScript', 'Meta Ads'], startDate: '2026-08-01', isOngoing: true, location: 'Remote', type: 'part-time', externalLink: 'https://ftgrails.com/' },
    { id: 'prof-anjali-1', company: 'Agedarc', position: 'Shopify Store Developer, Full-time', description: 'Built and launched the Shopify website for a fashion brand with 115K+ Instagram followers, focusing on product discovery and a seamless shopping experience.', responsibilities: ['Built and launched the Shopify storefront.', 'Developed user-friendly product discovery and navigation flows.', 'Created a modern storefront for a growing fashion brand.'], skills: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'UI/UX Design', 'E-commerce Development'], startDate: '2025-08-01', endDate: '2026-08-01', isOngoing: false, location: 'New Delhi', type: 'full-time', externalLink: 'https://agedarc.com' },
    { id: 'prof-anjali-2', company: 'Dopamean', position: 'Web Developer Intern', description: 'Contributed to a responsive website with cross-browser compatibility and ongoing UI improvements.', responsibilities: ['Developed responsive layouts.', 'Supported cross-browser compatibility.', 'Collaborated on UI improvements and website maintenance.'], skills: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'UI/UX Design'], startDate: '2025-05-01', endDate: '2025-07-01', isOngoing: false, location: 'Remote', type: 'internship', externalLink: 'https://dopamean.in' },
    { id: 'prof-anjali-3', company: 'Allbirds', position: 'Shopify Store Developer', description: 'Assisted in building and customizing Shopify storefront components to improve product presentation and navigation.', responsibilities: ['Customized Shopify storefront components.', 'Improved product presentation and navigation.', 'Supported storefront enhancements for a smoother shopping experience.'], skills: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'E-commerce Development'], startDate: '2025-01-01', endDate: '2025-04-01', isOngoing: false, location: 'Remote', type: 'internship', externalLink: 'https://allbirds.com' },
    { id: 'prof-anjali-4', company: 'CURE International India Trust', position: 'Full Stack App Developer Intern – Canary', description: 'Implemented landmark-based voice prompts for an accessible indoor navigation app.', responsibilities: ['Implemented voice guidance for indoor navigation.', 'Worked with BLE beacons, Navigine SDK, Firebase, and REST APIs.'], skills: ['Android Studio', 'Java', 'Kotlin', 'Firebase', 'BLE Beacon Technology', 'Navigine SDK', 'REST APIs', 'Git/GitHub'], startDate: '2025-01-01', endDate: '2025-09-01', isOngoing: false, location: 'New Delhi', type: 'internship', externalLink: '#' },
    { id: 'vol-anjali-1', company: 'TARK – The Bilingual Debating Society', position: 'Management Volunteer', description: 'Assisted with panel discussion logistics and participant management.', responsibilities: ['Supported event logistics.', 'Coordinated participant management.'], skills: ['Event Management', 'Coordination'], startDate: '2025-02-01', endDate: '2025-03-01', isOngoing: false, location: 'Acharya Narendra Dev College', type: 'volunteer' },
    { id: 'vol-anjali-2', company: 'ILLUSTRADO – Computer Science Society', position: 'Sponsorship Team Volunteer', description: 'Supported sponsorship outreach and technical event execution.', responsibilities: ['Collaborated to secure partnerships.', 'Coordinated with sponsors and supported technical events.'], skills: ['Sponsorship', 'Communication', 'Event Management'], startDate: '2025-03-01', endDate: '2025-04-01', isOngoing: false, location: 'Maitreyi College', type: 'volunteer' },
];

portfolioData.hardSkills = [
    ...['Java', 'Kotlin', 'Python', 'C++', 'Dart', 'JavaScript', 'SQL', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Design', 'RESTful APIs', 'Shopify', 'Liquid', 'HTML', 'CSS', 'Flutter', 'Django', 'Firebase', 'Google Cloud Platform', 'Vertex AI', 'Gemini API'].map((name, index) => ({ name, category: index < 7 ? 'software' as const : 'frontend' as const, level: 'advanced' as const })),
];
