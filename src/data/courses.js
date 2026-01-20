
import { Layout, Database, Cpu, Shield, Activity, BarChart, Code, CheckCircle, Smartphone } from 'lucide-react';

export const COURSES_DATA = [
    // --- Technology Courses ---
    {
        id: "devops",
        title: "DevOps",
        category: "Technology Courses",
        shortDescription: "Master the art of continuous integration, deployment, and infrastructure as code to streamline software delivery.",
        level: "Intermediate",
        duration: "12 Weeks",
        mode: "Online",
        language: "English",
        price: 499,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 399,
        image: "/courses/devops.png",
        overview: "This comprehensive DevOps course bridges the gap between software development and IT operations. You will learn to automate and integrate the processes between software development and IT teams, allowing them to build, test, and release software faster and more reliably.",
        outcomes: [
            "Master CI/CD pipelines with Jenkins and GitLab",
            "Containerize applications using Docker and Kubernetes",
            "Manage infrastructure as code with Terraform",
            "Implement monitoring and logging with Prometheus and Grafana",
            "Understand cloud services (AWS/Azure) for DevOps"
        ],
        curriculum: [
            { title: "Module 1: Introduction to DevOps", content: "Understanding DevOps culture, lifecycle, and benefits." },
            { title: "Module 2: Version Control with Git", content: "Branching strategies, merging, and collaboration workflows." },
            { title: "Module 3: CI/CD with Jenkins", content: "Building automated pipelines for continuous integration and delivery." },
            { title: "Module 4: Containerization with Docker", content: "Creating, managing, and orchestrating containers." },
            { title: "Module 5: Kubernetes Orchestration", content: "Deploying and scaling applications in a Kubernetes cluster." },
        ],
        tools: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Git", "AWS"],
        careerBenefits: [
            "High demand for DevOps Engineers",
            "Competitive salary packages",
            "Key role in modern software development teams"
        ],
        projects: [
            { title: "Automated Deployment Pipeline", description: "Build a complete CI/CD pipeline to deploy a web app automatically." },
            { title: "Microservices Architecture", description: "Deploy a multi-container microservices application using Kubernetes." }
        ],
        prerequisites: ["Basic understanding of Linux commands", "Knowledge of one programming language"],
        certification: "Certificate of Completion in DevOps Engineering"
    },
    {
        id: "power-bi",
        title: "Power BI",
        category: "Technology Courses",
        shortDescription: "Transform raw data into meaningful insights and interactive visualizations using Microsoft Power BI.",
        level: "Beginner",
        duration: "6 Weeks",
        mode: "Self-paced",
        language: "english",
        price: 0,
        pricingType: "Free",
        hasDiscount: false,
        image: "/courses/power-bi.png",
        overview: "Get hands-on experience with Microsoft Power BI, one of the leading business intelligence tools. Learn how to connect to data sources, clean and model data, and create stunning visual reports that drive business decisions.",
        outcomes: [
            "Connect to various data sources (Excel, SQL, Cloud)",
            "Perform data transformation using Power Query",
            "Create advanced DAX calculations",
            "Build interactive dashboards and reports",
            "Share insights via Power BI Service"
        ],
        curriculum: [
            { title: "Module 1: Getting Started with Power BI", content: "Interface overview, connecting to data, and basic loading." },
            { title: "Module 2: Data Transformation", content: "Cleaning and shaping data with Power Query Editor." },
            { title: "Module 3: Data Modeling", content: "Creating relationships, star schemas, and measures." },
            { title: "Module 4: Visualization Mastery", content: "Choosing the right charts, custom visuals, and formatting." },
            { title: "Module 5: DAX Fundamentals", content: "Calculated columns, measures, and time intelligence functions." }
        ],
        tools: ["Power BI Desktop", "Power Query", "DAX", "Power BI Service"],
        careerBenefits: [
            "Become a Data Analyst or BI Developer",
            "Essential skill for modern business roles",
            "Ability to communicate data-driven stories"
        ],
        projects: [
            { title: "Sales Performance Dashboard", description: "Create a dynamic dashboard to track regional sales and KPIs." },
            { title: "Financial Reporting Tool", description: "Build a financial report with Year-over-Year comparisons." }
        ],
        prerequisites: ["Basic familiarity with Excel"],
        certification: "Microsoft Power BI Data Analyst Associate (Preparation)"
    },
    {
        id: "ai-ml",
        title: "Artificial Intelligence & Machine Learning",
        category: "Technology Courses",
        shortDescription: "Dive into the world of AI/ML, learning algorithms, neural networks, and building smart applications.",
        level: "Advanced",
        duration: "16 Weeks",
        mode: "Hybrid",
        language: "German",
        price: 999,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 899,
        image: "/courses/ai-ml.png",
        overview: "This course covers the full spectrum of AI and ML, from statistical foundations to deep learning. You will use Python and popular libraries to build predictive models, natural language processing applications, and computer vision systems.",
        outcomes: [
            "Understand supervised vs. unsupervised learning",
            "Master Python for Data Science (Pandas, NumPy)",
            "Build and train ML models with Scikit-Learn",
            "Implement Neural Networks with TensorFlow/Keras",
            "Deploy AI models into production"
        ],
        curriculum: [
            { title: "Module 1: Python for AI", content: "Data structures, manipulation, and visualization in Python." },
            { title: "Module 2: Statistics & Probability", content: "The mathematical backbone of machine learning algorithms." },
            { title: "Module 3: Machine Learning Algorithms", content: "Regression, Classification, Clustering, and Decision Trees." },
            { title: "Module 4: Deep Learning Foundations", content: "Introduction to Neural Networks, CNNs, and RNNs." },
            { title: "Module 5: NLP & Computer Vision", content: "Working with text and image data." }
        ],
        tools: ["Python", "TensorFlow", "Scikit-Learn", "Jupyter", "Pandas"],
        careerBenefits: [
            "Enter the fastest-growing tech field",
            "Roles include ML Engineer, AI Specialist, Data Scientist",
            "High earning potential and innovative work"
        ],
        projects: [
            { title: "House Price Prediction", description: "Build a regression model to predict real estate prices." },
            { title: "Image Classification System", description: "Create a CNN to classify images (e.g., cats vs. dogs)." }
        ],
        prerequisites: ["Strong programming basics (Python preferred)", "Math/Statistics knowledge"],
        certification: "AI & ML Specialist Certification"
    },
    {
        id: "data-analytics",
        title: "Data Analytics",
        category: "Technology Courses",
        shortDescription: "Learn to analyze data, find trends, and answer business questions using SQL, Excel, and Tableau.",
        level: "Beginner",
        duration: "8 Weeks",
        mode: "Online",
        language: "Spanish",
        price: 299,
        pricingType: "Paid",
        hasDiscount: false,
        image: "/courses/data-analytics.png",
        overview: "Master the essential tools of data analytics. This course takes you from data gathering to storytelling. You'll learn detailed SQL querying, advanced Excel techniques, and interactive visualization with Tableau.",
        outcomes: [
            "Write complex SQL queries for data extraction",
            "Perform advanced analysis in Excel",
            "Create visualizations in Tableau",
            "Understand data cleaning and preprocessing",
            "Apply statistical analysis to business data"
        ],
        curriculum: [
            { title: "Module 1: Excel for Analysts", content: "Pivot tables, VLOOKUP, and advanced formulas." },
            { title: "Module 2: SQL Fundamentals", content: "SELECT, JOIN, GROUP BY, and database managment." },
            { title: "Module 3: Data Visualization with Tableau", content: "Connecting data, creating charts, and dashboard actions." },
            { title: "Module 4: Exploratory Data Analysis", content: "Finding patterns and outliers in datasets." },
            { title: "Module 5: Capstone Project", content: "End-to-end analysis of a business dataset." }
        ],
        tools: ["SQL", "Excel", "Tableau", "Python (Basics)"],
        careerBenefits: [
            "Fundamental skill for all business sectors",
            "High demand for Data Analysts",
            "Strong foundation for Data Science"
        ],
        projects: [
            { title: "E-commerce Sales Analysis", description: "Analyze sales data to recommend marketing strategies." },
            { title: "Customer Churn Dashboard", description: "Identify factors contributing to customer loss." }
        ],
        prerequisites: ["None - beginners welcome"],
        certification: "Data Analytics Professional Certificate"
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        category: "Technology Courses",
        shortDescription: "Defend against digital threats. Learn network security, ethical hacking, and risk management.",
        level: "Intermediate",
        duration: "10 Weeks",
        mode: "Online",
        language: "English",
        price: 599,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 450,
        image: "/courses/cybersecurity.png",
        overview: "In an era of increasing cyber threats, cybersecurity skills are vital. This course covers the fundamentals of network security, cryptography, risk assessment, and ethical hacking techniques to protect systems and data.",
        outcomes: [
            "Understand network security protocols",
            "Perform vulnerability assessments",
            "Learn basics of ethical hacking (Penetration Testing)",
            "Master cryptography concepts",
            "Implement security best practices"
        ],
        curriculum: [
            { title: "Module 1: Security Fundamentals", content: "CIA Triad, threat landscape, and security policies." },
            { title: "Module 2: Network Security", content: "Firewalls, VPNs, IDS/IPS, and secure protocols." },
            { title: "Module 3: Ethical Hacking Basics", content: "Reconnaissance, scanning, and exploitation phases." },
            { title: "Module 4: Cryptography", content: "Encryption standards, PKI, and digital signatures." },
            { title: "Module 5: Incident Response", content: "Detecting and responding to security breaches." }
        ],
        tools: ["Wireshark", "Nmap", "Metasploit", "Kali Linux", "Burp Suite"],
        careerBenefits: [
            "Critically important role in every industry",
            "High salary potential and job security",
            "Roles: Security Analyst, Pentester, SOC Analyst"
        ],
        projects: [
            { title: "Vulnerability Scan Report", description: "Scan a network and report potential security weaknesses." },
            { title: "Secure Network Design", description: "Design a secure network architecture for a small business." }
        ],
        prerequisites: ["Basic IT and Networking knowledge"],
        certification: "Cybersecurity Security+ Prep"
    },
    {
        id: "agile-scrum",
        title: "Agile & Scrum",
        category: "Technology Courses",
        shortDescription: "Adopt the Agile mindset. Learn Scrum frameworks to manage projects efficiently and deliver value faster.",
        level: "Beginner",
        duration: "4 Weeks",
        mode: "Online",
        language: "English",
        price: 199,
        pricingType: "Paid",
        hasDiscount: false,
        image: "/courses/agile-scrum.png",
        overview: "Move away from traditional Waterfall methods. This course teaches the Agile philosophy and the Scrum framework detailedly, preparing you to act as a Scrum Master or Agile Team member in dynamic project environments.",
        outcomes: [
            "Understand Agile Manifesto and Principles",
            "Master the Scrum Framework (Roles, Events, Artifacts)",
            "Facilitate Sprint Planning, Dailies, and Retrospectives",
            "Manage Product Backlogs and User Stories",
            "Scale Agile for larger teams"
        ],
        curriculum: [
            { title: "Module 1: Agile Foundations", content: "Why Agile? History and core values." },
            { title: "Module 2: The Scrum Framework", content: "Scrum Master, Product Owner, and Dev Team roles." },
            { title: "Module 3: Scrum Events", content: "Running effective Sprints and meetings." },
            { title: "Module 4: Agile Artifacts", content: "Backlog management and Definition of Done." },
            { title: "Module 5: Kanban & XP", content: "Overview of other Agile methodologies." }
        ],
        tools: ["Jira", "Trello", "Miro", "Confluence"],
        careerBenefits: [
            "Essential for modern Project Management",
            "Qualify for Scrum Master roles",
            "Improve team efficiency and collaboration"
        ],
        projects: [
            { title: "Sprint Simulation", description: "Run a simulated 2-week sprint with a small team." },
            { title: "Backlog Creation", description: "Create and prioritize a product backlog from a project brief." }
        ],
        prerequisites: ["None"],
        certification: "Certified Scrum Master (CSM) Prep"
    },
    {
        id: "manual-testing",
        title: "Manual Testing",
        category: "Technology Courses",
        shortDescription: "Learn the fundamentals of software testing, creating test plans, and identifying bugs manually.",
        level: "Beginner",
        duration: "5 Weeks",
        mode: "Online",
        language: "Italian",
        price: 150,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 100,
        image: "/courses/manual-testing.png",
        overview: "Quality Assurance is key to software success. This course covers the Software Testing Life Cycle (STLC), writing effective test cases, executing tests, and logging defects efficiently.",
        outcomes: [
            "Understand SDLC and STLC",
            "Write comprehensive Test Scenarios and Test Cases",
            "Execute Functional and Non-functional testing",
            "Perform Regression and Sanity testing",
            "Report defects using tracking tools"
        ],
        curriculum: [
            { title: "Module 1: Testing Basics", content: "Principles of testing and verification vs. validation." },
            { title: "Module 2: Test Design Techniques", content: "Boundary Value Analysis, Equivalence Partitioning." },
            { title: "Module 3: Test Execution", content: "Running tests and logging results." },
            { title: "Module 4: Defect Management", content: "Bug life cycle and reporting (Jira)." },
            { title: "Module 5: Mobile App Testing", content: "Introduction to testing mobile applications." }
        ],
        tools: ["Jira", "Bugzilla", "Excel (for Test Cases)"],
        careerBenefits: [
            "Entry point into the IT industry",
            "Critical role in ensuring product quality",
            "Foundation for Automation Testing"
        ],
        projects: [
            { title: "E-commerce Website Testing", description: "Write and execute test cases for a shopping cart flow." },
            { title: "Bug Report Portfolio", description: "Document real bugs found in open-source software." }
        ],
        prerequisites: ["None"],
        certification: "ISTQB Foundation Prep"
    },
    {
        id: "automation-testing",
        title: "Automation Testing",
        category: "Technology Courses",
        shortDescription: "Accelerate testing with automation. Learn Selenium, Java/Python, and test frameworks.",
        level: "Intermediate",
        duration: "8 Weeks",
        mode: "Online",
        language: "English",
        price: 350,
        pricingType: "Paid",
        hasDiscount: false,
        image: "/courses/automation-testing.png",
        overview: "Transition from manual to automation testing. Learn to write scripts that test software automatically using Selenium WebDriver, increasing coverage and speed of release cycles.",
        outcomes: [
            "Master Java or Python for testing",
            "Use Selenium WebDriver for web automation",
            "Implement TestNG/JUnit frameworks",
            "Understand Page Object Model (POM)",
            "Integrate automation with CI/CD"
        ],
        curriculum: [
            { title: "Module 1: Programming for Testers", content: "Java/Python basics needed for automation." },
            { title: "Module 2: Selenium WebDriver", content: "Locators, interactions, and potential sync issues." },
            { title: "Module 3: Test Frameworks", content: "Structuring tests with TestNG/PyTest." },
            { title: "Module 4: Advanced Selenium", content: "Handling popups, frames, and dynamic content." },
            { title: "Module 5: CI/CD Integration", content: "Running tests in Jenkins." }
        ],
        tools: ["Selenium", "Java", "TestNG", "Maven", "Jenkins"],
        careerBenefits: [
            "High demand skill set",
            "Higher salary than manual testing",
            "SDET (Software Development Engineer in Test) roles"
        ],
        projects: [
            { title: "Automated Regression Suite", description: "Build a suite of 50+ automated tests for a web app." },
            { title: "Data-Driven Testing Framework", description: "Create a framework that reads test data from Excel." }
        ],
        prerequisites: ["Manual Testing knowledge", "Basic Programming"],
        certification: "Selenium Automation Specialist"
    },
    {
        id: "salesforce",
        title: "Salesforce – Associate & Admin and Business Analyst",
        category: "Technology Courses",
        shortDescription: "Master the world's #1 CRM. Learn Salesforce Administration and Business Analysis skills.",
        level: "Beginner",
        duration: "10 Weeks",
        mode: "Online",
        language: "Spanish",
        price: 450,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 350,
        image: "/courses/salesforce.png",
        overview: "This dual-focus course prepares you for two critical roles in the Salesforce ecosystem. Learn to configure and manage Salesforce instances as an Admin, and capture business requirements as a Business Analyst.",
        outcomes: [
            "Configure Sales and Service Cloud",
            "Manage users, profiles, and permissions",
            "Create custom objects, fields, and automation (Flows)",
            "Design reports and dashboards",
            "Gather and document business requirements efficiently"
        ],
        curriculum: [
            { title: "Module 1: Salesforce Fundamentals", content: "CRM concepts and navigation." },
            { title: "Module 2: Security & Access", content: "Profiles, Roles, and Sharing Rules." },
            { title: "Module 3: Data Management", content: "Import/Export data and data quality." },
            { title: "Module 4: Automation", content: "Process Builder and Flows." },
            { title: "Module 5: Business Analysis", content: "Requirement gathering, user stories, and acceptance criteria." }
        ],
        tools: ["Salesforce Lightning", "Data Loader", "Jira", "Visio"],
        careerBenefits: [
            "Rapidly growing ecosystem",
            "High salary for certified Admins",
            "Versatile career path (Admin, Developer, Consultant)"
        ],
        projects: [
            { title: "CRM Setup for Non-Profit", description: "Configure a Salesforce org for a non-profit use case." },
            { title: "Process Automation", description: "Automate a lead qualification process using Flows." }
        ],
        prerequisites: ["None"],
        certification: "Salesforce Admin & BA Certification Prep"
    },

    // --- Internship Courses (Derived from Tech Courses) ---
    {
        id: "devops-internship",
        title: "DevOps Internship",
        category: "Course Internship",
        shortDescription: "3-month intensive internship program working on real-world DevOps projects.",
        level: "Intermediate",
        duration: "3 Months",
        mode: "Online",
        language: "English",
        price: 199,
        pricingType: "Paid",
        hasDiscount: false,
        image: "/courses/devops-internship.png",
        overview: "Join our DevOps Internship program to gain practical work experience. You will work alongside senior engineers on live projects, managing cloud infrastructure and deployment pipelines for real clients. Focus is on 'Learning by Doing'.",
        outcomes: [
            "Practical experience with large-scale infrastructure",
            "Troubleshooting live production issues",
            "Collaboration in an Agile team environment",
            "Code reviews and best practices",
            "Project portfolio for job applications"
        ],
        curriculum: [
            { title: "Month 1: Onboarding & Shadowing", content: "Environment setup and understanding existing pipelines." },
            { title: "Month 2: Ticket Handling", content: "Resolving real user issues and optimizing scripts." },
            { title: "Month 3: Capstone Project", content: "Refactoring a legacy deployment system." }
        ],
        tools: ["AWS/Azure", "Kubernetes", "Docker", "Terraform", "GitLab CI"],
        careerBenefits: [
            "Work experience certificate",
            "Industry mentorship",
            "Job placement assistance"
        ],
        projects: [
            { title: "Live Infrastructure Migration", description: "Assist in migrating on-prem servers to AWS." },
            { title: "Monitoring Dashboard Implementation", description: "Set up full-stack monitoring for a client app." }
        ],
        prerequisites: ["Completion of DevOps Course or equivalent knowledge"],
        certification: "DevOps Internship Certificate"
    },
    {
        id: "power-bi-internship",
        title: "Power BI Internship",
        category: "Course Internship",
        shortDescription: "Apply your Power BI skills to solve real business data problems in this internship.",
        level: "Beginner",
        duration: "3 Months",
        mode: "Online",
        language: "Italian",
        price: 0,
        pricingType: "Free",
        hasDiscount: false,
        image: "/courses/power-bi-internship.png",
        overview: "Work on live data analytics projects. You will be given raw datasets from retail, finance, or healthcare domains and tasked with cleaning, modeling, and visualizing insights that stakeholders can use.",
        outcomes: [
            "Handling messy, real-world data",
            " Requirement gathering from stakeholders",
            "Building professional-grade dashboards",
            "Presentation skills for data storytelling",
            "Performance optimization of reports"
        ],
        curriculum: [
            { title: "Month 1: Data Cleaning Projects", content: "ETL challenges with complex datasets." },
            { title: "Month 2: Dashboard Development", content: "Building interactive reports for specific departments." },
            { title: "Month 3: Client Presentation", content: "Presenting findings and iterating based on feedback." }
        ],
        tools: ["Power BI", "SQL", "Excel"],
        careerBenefits: [
            "Portfolio of live dashboards",
            "Experience with business logic",
            "Recommendation letter"
        ],
        projects: [
            { title: "Retail Sales Optimization", description: "Analyze 1M+ rows of sales data to find growth areas." },
            { title: "HR Attrition Report", description: "Visualize employee turnover trends." }
        ],
        prerequisites: ["Power BI Course completion"],
        certification: "Data Analytics Internship Certificate"
    },
    {
        id: "ai-ml-internship",
        title: "Artificial Intelligence & Machine Learning Internship",
        category: "Course Internship",
        shortDescription: "Build and deploy AI models in a professional setting during this internship.",
        level: "Advanced",
        duration: "3 Months",
        mode: "Remote",
        language: "German",
        price: 299,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 199,
        image: "/courses/ai-ml-internship.png",
        overview: "Gain experience in the full ML lifecycle. From data collection and annotation to model training and deployment via APIs. You will work on NLP or Computer Vision problems relevant to industry needs.",
        outcomes: [
            "End-to-end ML pipline experience",
            "Working with large datasets",
            "Model optimization and tuning",
            "Deploying models (Flask/FastAPI)",
            "Version control for ML (DVC)"
        ],
        curriculum: [
            { title: "Month 1: Data Engineering", content: "Scraping, cleaning, and labeling data." },
            { title: "Month 2: Model Development", content: "Training and testing various architectures." },
            { title: "Month 3: Deployment", content: "Containerizing and serving the model." }
        ],
        tools: ["Python", "TensorFlow/PyTorch", "Docker", "AWS SageMaker"],
        careerBenefits: [
            "Publication opportunities",
            "Production-grade experience",
            "Networking with AI researchers"
        ],
        projects: [
            { title: "Chatbot Development", description: "Build a customer support chatbot using NLP." },
            { title: "Product Recommendation Engine", description: "Create a recommender system for an e-commerce site." }
        ],
        prerequisites: ["AI/ML Course completion"],
        certification: "AI/ML Internship Certificate"
    },
    {
        id: "data-analytics-internship",
        title: "Data Analytics Internship",
        category: "Course Internship",
        shortDescription: "Execute data projects for real clients using SQL, Python, and Tableau.",
        level: "Intermediate",
        duration: "3 Months",
        mode: "Online",
        language: "English",
        price: 0,
        pricingType: "Free",
        hasDiscount: false,
        image: "/courses/data-analytics-internship.png",
        overview: "Bridge the gap between theory and practice. You will work as a Junior Data Analyst, handling ad-hoc data requests, maintaining data pipelines, and creating periodic reports for management.",
        outcomes: [
            "Writing efficient SQL for large DBs",
            "Automating reports with Python",
            "Tableau Server management",
            "Data governance basics"
        ],
        curriculum: [
            { title: "Month 1: SQL Heavy Lifting", content: "Complex joins and stored procedures." },
            { title: "Month 2: Visualization Projects", content: "Creating executive dashboards." },
            { title: "Month 3: Automated Reporting", content: "Scripting daily email reports." }
        ],
        tools: ["SQL", "Tableau", "Python"],
        careerBenefits: [
            "Real-world data handling skills",
            "Corporate communication experience",
            "Strong portfolio"
        ],
        projects: [
            { title: "Market Basket Analysis", description: "Analyze purchase patterns." },
            { title: "Operational Efficiency Report", description: "Track supply chain metrics." }
        ],
        prerequisites: ["Data Analytics Course completion"],
        certification: "Data Analytics Internship Certificate"
    },
    {
        id: "cybersecurity-internship",
        title: "Cybersecurity Internship",
        category: "Course Internship",
        shortDescription: "Hands-on security operations center (SOC) and penetration testing experience.",
        level: "Intermediate",
        duration: "3 Months",
        mode: "Online",
        language: "Spanish",
        price: 250,
        pricingType: "Paid",
        hasDiscount: false,
        // Reuse main image as fallback due to quota limit
        image: "/courses/cybersecurity.png",
        overview: "Work in a simulated SOC environment. Monitor logs, investigate alerts, and participate in red team/blue team exercises. This internship prepares you for the high-pressure environment of cybersecurity.",
        outcomes: [
            "Log analysis with SIEM tools",
            "Phishing email investigation",
            "Vulnerability assessment reporting",
            "Compliance auditing basics"
        ],
        curriculum: [
            { title: "Month 1: SOC Level 1 Tasks", content: "Monitoring and triaging alerts." },
            { title: "Month 2: Vulnerability Management", content: "Scanning and patching workflows." },
            { title: "Month 3: Incident Response Simulation", content: "Handling a live breach scenario." }
        ],
        tools: ["Splunk", "Nessus", "Wireshark"],
        careerBenefits: [
            "Hands-on SIEM experience",
            "Understanding of corporate security policies",
            "Job readiness for SOC Analyst roles"
        ],
        projects: [
            { title: "Security Audit", description: "Perform an audit of a sample infrastructure." },
            { title: "Malware Analysis", description: "Basic static analysis of suspicious files." }
        ],
        prerequisites: ["Cybersecurity Course completion"],
        certification: "Cybersecurity Internship Certificate"
    },
    {
        id: "agile-scrum-internship",
        title: "Agile & Scrum Internship",
        category: "Course Internship",
        shortDescription: "Act as a Junior Scrum Master in a real software development team.",
        level: "Beginner",
        duration: "3 Months",
        mode: "Online",
        language: "English",
        price: 99,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 50,
        // Reuse main image as fallback due to quota limit
        image: "/courses/agile-scrum.png",
        overview: "Facilitate real sprints. You will assist the Scrum Master in organizing daily standups, sprint planning, and retrospectives for a development team, ensuring the Agile process is followed.",
        outcomes: [
            "Practical Jira administration",
            "Conflict resolution skills",
            "Metric tracking (Velocity, Burndown)",
            "Removal of impediments"
        ],
        curriculum: [
            { title: "Month 1: Shadowing Scrum Master", content: "Observing ceremonies and tool usage." },
            { title: "Month 2: Facilitation", content: "Running daily standups and refinement sessions." },
            { title: "Month 3: Process Improvement", content: "Running a retrospective and implementing changes." }
        ],
        tools: ["Jira", "Confluence", "Slack"],
        careerBenefits: [
            "Real leadership experience",
            "Certified Scrum Master preparation",
            "Soft skills enhancement"
        ],
        projects: [
            { title: "Sprint Report Generation", description: "Create detailed reports on team velocity." },
            { title: "Agile Transformation Case Study", description: "Document the team's agile maturity." }
        ],
        prerequisites: ["Agile & Scrum Course completion"],
        certification: "Agile Internship Certificate"
    },
    {
        id: "manual-testing-internship",
        title: "Manual Testing Internship",
        category: "Course Internship",
        shortDescription: "QA internship focusing on rigorous manual testing of web and mobile apps.",
        level: "Beginner",
        duration: "3 Months",
        mode: "Online",
        language: "English",
        price: 120,
        pricingType: "Paid",
        hasDiscount: false,
        // Reuse main image as fallback due to quota limit
        image: "/courses/manual-testing.png",
        overview: "Join our QA team to test upcoming product releases. You will be responsible for executing test cycles, reporting detailed bugs, and verifying fixes before deployment.",
        outcomes: [
            "Professional bug reporting",
            "Cross-browser testing experience",
            "Regression testing cycles",
            "Collaboration with developers"
        ],
        curriculum: [
            { title: "Month 1: Test Execution", content: "Executing existing test suites." },
            { title: "Month 2: Test Creation", content: "Writing new test cases for features." },
            { title: "Month 3: Release Management", content: "Participating in Go/No-Go decisions." }
        ],
        tools: ["Jira", "BrowserStack", "Postman"],
        careerBenefits: [
            "Experience with live production bugs",
            "Understanding of release cycles",
            "QA Portfolio"
        ],
        projects: [
            { title: "Regression Suite Execution", description: "Full regression pass for a major release." },
            { title: "Exploratory Testing Session", description: "Uncover edge case bugs in a new feature." }
        ],
        prerequisites: ["Manual Testing Course completion"],
        certification: "QA Internship Certificate"
    },
    {
        id: "automation-testing-internship",
        title: "Automation Testing Internship",
        category: "Course Internship",
        shortDescription: "Automate real test cases using Selenium and integrate them into CI/CD pipelines.",
        level: "Intermediate",
        duration: "3 Months",
        mode: "Online",
        language: "Spanish",
        price: 250,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 200,
        // Reuse main image as fallback due to quota limit
        image: "/courses/automation-testing.png",
        overview: "Work as an Automation Engineer. You will take manual test cases and convert them into stable, reusable automation scripts, helping to reduce regression testing time.",
        outcomes: [
            "Writing robust Selenium scripts",
            "Framework maintenance",
            "Debugging failed builds",
            "Code quality standards"
        ],
        curriculum: [
            { title: "Month 1: Scripting Frameworks", content: "Understanding the existing automation framework." },
            { title: "Month 2: Automating New Features", content: "Writing scripts for new UI elements." },
            { title: "Month 3: CI Integration", content: "Configuring Jenkins jobs for nightly runs." }
        ],
        tools: ["Selenium", "Java/Python", "Git", "Jenkins"],
        careerBenefits: [
            "SDET role readiness",
            "Experience with complex DOMs",
            "Automation portfolio"
        ],
        projects: [
            { title: "Smoke Test Automation", description: "Automate critical path tests." },
            { title: "Cross-Browser Setup", description: "Configure grid for parallel execution." }
        ],
        prerequisites: ["Automation Testing Course completion"],
        certification: "Automation Internship Certificate"
    },
    {
        id: "salesforce-internship",
        title: "Salesforce – Associate & Admin and Business Analyst Internship",
        category: "Course Internship",
        shortDescription: "Practical Salesforce Admin and BA work on a live Salesforce instance.",
        level: "Beginner",
        duration: "3 Months",
        mode: "Online",
        language: "German",
        price: 150,
        pricingType: "Paid",
        hasDiscount: false,
        // Reuse main image as fallback due to quota limit
        image: "/courses/salesforce.png",
        overview: "Assist in managing a Salesforce org. You will handle user requests, generate reports, help with data cleaning, and document requirements for new customizations.",
        outcomes: [
            "Real org management",
            "Data cleanup experience",
            "Building dashboards for management",
            "User training and support"
        ],
        curriculum: [
            { title: "Month 1: User Support", content: "Resetting passwords, troubleshooting access." },
            { title: "Month 2: Configuration", content: "Building custom reports and small flows." },
            { title: "Month 3: Requirement Gathering", content: "Documenting needs for a new module." }
        ],
        tools: ["Salesforce", "Excel", "Jira"],
        careerBenefits: [
            "Salesforce Admin experience",
            "Business Analyst practical skills",
            "Reference for Salesforce ecosystem"
        ],
        projects: [
            { title: "Security Cleanup", description: "Review and optimize roles and profiles." },
            { title: "Sales Dashboard", description: "Build a comprehensive dashboard for the Sales VP." }
        ],
        prerequisites: ["Salesforce Course completion"],
        certification: "Salesforce Internship Certificate"
    },

    // --- Value Added Skills ---
    {
        id: "soft-skills",
        title: "Soft Skills",
        category: "Value Added Skills",
        shortDescription: "Design your personality and career with essential communication and leadership skills.",
        level: "Beginner",
        duration: "4 Weeks",
        mode: "Online",
        language: "English",
        price: 49,
        pricingType: "Paid",
        hasDiscount: true,
        discountPrice: 29,
        image: "/courses/soft-skills.png",
        overview: "Technical skills get you the interview; soft skills get you the job. This course covers everything from crafting the perfect resume and acing interviews to effective workplace communication and leadership.",
        outcomes: [
            "Confident Public Speaking",
            "Effective Business Writing",
            "Ace Behavioral Interviews",
            "Teamwork and Conflict Resolution",
            "Time Management & Productivity"
        ],
        curriculum: [
            { title: "Module 1: Communication Mastery", content: "Verbal and non-verbal communication skills." },
            { title: "Module 2: Resume & LinkedIn", content: "Building a personal brand that sells." },
            { title: "Module 3: Interview Preparation", content: "Mock interviews and common questions." },
            { title: "Module 4: Professional Etiquette", content: "Email writing and workplace behavior." },
            { title: "Module 5: Leadership Basics", content: "Taking initiative and leading small teams." }
        ],
        tools: ["Zoom", "LinkedIn", "PowerPoint"],
        careerBenefits: [
            "Higher employability",
            "Faster career progression",
            "Better workplace relationships"
        ],
        projects: [
            { title: "Mock Interview", description: "Participate in a recorded mock interview with feedback." },
            { title: "Presentation Delivery", description: "Deliver a 5-minute presentation on a technical topic." }
        ],
        prerequisites: ["None"],
        certification: "Professional Soft Skills Certificate"
    }
];
