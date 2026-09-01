const careerData = [

    {
        id: "software-engineer",
        role: "Software Engineer",
        skills: [
            "Programming Fundamentals",
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Git & GitHub",
            "SQL & Databases",
            "APIs",
            "Software Testing",
            "Debugging",
            "System Design"
        ]
    },

    {
        id: "ai-engineer",
        role: "AI Engineer",
        skills: [
            "Python",
            "Programming Fundamentals",
            "Data Structures & Algorithms",
            "Statistics & Probability",
            "Machine Learning",
            "Deep Learning",
            "Large Language Models",
            "APIs",
            "Git & GitHub"
        ]
    },

    {
        id: "ml-engineer",
        role: "ML Engineer",
        skills: [
            "Python",
            "Programming Fundamentals",
            "Data Structures & Algorithms",
            "Statistics & Probability",
            "Machine Learning",
            "Deep Learning",
            "APIs",
            "Git & GitHub",
            "Docker & Containers"
        ]
    },

    {
        id: "data-engineer",
        role: "Data Engineer",
        skills: [
            "Python",
            "SQL & Databases",
            "Data Engineering",
            "Data Structures & Algorithms",
            "Git & GitHub",
            "APIs",
            "Linux",
            "Cloud Computing",
            "Docker & Containers"
        ]
    },

    {
        id: "cloud-engineer",
        role: "Cloud Engineer",
        skills: [
            "Linux",
            "Networking",
            "Cloud Computing",
            "Docker & Containers",
            "Git & GitHub",
            "CI/CD",
            "Security",
            "Infrastructure as Code",
            "Monitoring & Observability"
        ]
    },

    {
        id: "devops-engineer",
        role: "DevOps Engineer",
        skills: [
            "Linux",
            "Networking",
            "Git & GitHub",
            "Docker & Containers",
            "CI/CD",
            "Cloud Computing",
            "Infrastructure as Code",
            "Monitoring & Observability",
            "Security"
        ]
    },

    {
        id: "full-stack-engineer",
        role: "Full Stack Engineer",
        skills: [
            "HTML",
            "CSS",
            "Responsive Web Design",
            "JavaScript",
            "DOM & Browser APIs",
            "Git & GitHub",
            "React",
            "TypeScript",
            "SQL & Databases",
            "APIs"
        ]
    },

    {
        id: "qa-automation-test-engineer",
        role: "QA / Automation Test Engineer",
        skills: [
            "Programming Fundamentals",
            "Software Testing",
            "Test Automation",
            "API Testing",
            "SQL & Databases",
            "Git & GitHub",
            "Debugging",
            "CI/CD",
            "Performance Testing"
        ]
    },

    {
        id: "database-engineer",
        role: "Database Engineer",
        skills: [
            "SQL & Databases",
            "Database Design",
            "Database Administration",
            "Data Structures & Algorithms",
            "Linux",
            "Networking",
            "Git & GitHub",
            "Cloud Computing",
            "Performance Optimization"
        ]
    },

    {
        id: "system-analyst",
        role: "Systems Analyst",
        skills: [
            "Programming Fundamentals",
            "SQL & Databases",
            "Systems Analysis",
            "System Design",
            "APIs",
            "Networking",
            "Software Testing",
            "Data Analysis",
            "Documentation & Requirements"
        ]
    },

    {
        id: "data-scientist",
        role: "Data Scientist",
        skills: [
            "Python",
            "Statistics & Probability",
            "Data Analysis",
            "Data Visualization",
            "Machine Learning",
            "Data Engineering",
            "SQL & Databases",
            "Git & GitHub",
            "Deep Learning"
        ]
    },

    {
        id: "data-analyst",
        role: "Data Analyst",
        skills: [
            "SQL & Databases",
            "Data Analysis",
            "Statistics & Probability",
            "Data Visualization",
            "Python",
            "Excel & Spreadsheets",
            "Business Intelligence",
            "Git & GitHub"
        ]
    },

    {
        id: "cybersecurity-engineer",
        role: "Cybersecurity Engineer",
        skills: [
            "Cybersecurity Fundamentals",
            "Networking",
            "Linux",
            "Programming Fundamentals",
            "Web Security",
            "Penetration Testing",
            "Security Monitoring",
            "Cloud Security",
            "Git & GitHub"
        ]
    },

    {
        id: "front-end-engineer",
        role: "Front-End Engineer",
        skills: [
            "HTML",
            "CSS",
            "Responsive Web Design",
            "JavaScript",
            "DOM & Browser APIs",
            "Git & GitHub",
            "React",
            "TypeScript",
            "Web Accessibility",
            "Web Performance"
        ]
    },

    {
        id: "back-end-engineer",
        role: "Back-End Engineer",
        skills: [
            "Programming Fundamentals",
            "Object-Oriented Programming",
            "Git & GitHub",
            "SQL & Databases",
            "APIs",
            "Backend Architecture",
            "Software Testing",
            "Docker & Containers",
            "System Design"
        ]
    },

    {
        id: "python-developer",
        role: "Python Developer",
        skills: [
            "Python",
            "Programming Fundamentals",
            "Object-Oriented Programming",
            "Data Structures & Algorithms",
            "Git & GitHub",
            "SQL & Databases",
            "APIs",
            "Software Testing",
            "Debugging"
        ]
    },

    {
        id: "java-full-stack-engineer",
        role: "Java Full-Stack Engineer",
        skills: [
            "Java",
            "Object-Oriented Programming",
            "Data Structures & Algorithms",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "SQL & Databases",
            "APIs",
            "Git & GitHub"
        ]
    },

    {
        id: "ai-prompt-engineer",
        role: "AI Prompt Engineer",
        skills: [
            "Prompt Engineering",
            "Large Language Models",
            "Programming Fundamentals",
            "Python",
            "APIs",
            "Data Analysis",
            "Git & GitHub",
            "AI Evaluation",
            "AI Safety"
        ]
    }

];
const skillLearningData = {

    /* =========================================================
       PROGRAMMING FUNDAMENTALS
    ========================================================= */

    "Programming Fundamentals": {

        beginner: {
            topics: [
                "Variables and Constants",
                "Data Types",
                "Input and Output",
                "Arithmetic and Logical Operators",
                "Conditional Statements",
                "Loops",
                "Functions",
                "Basic Error Handling"
            ],

            resources: [
                "Programming syntax and basic problem solving",
                "Control flow and functions",
                "Basic debugging techniques"
            ],

            projects: [
                "Simple Calculator",
                "Number Guessing Game",
                "Student Grade Calculator"
            ]
        },

        intermediate: {
            topics: [
                "Functions and Modular Programming",
                "Nested Data Structures",
                "File Handling",
                "Exception Handling",
                "Code Organization",
                "Debugging Techniques",
                "Basic Algorithms"
            ],

            resources: [
                "Modular programming",
                "Exception handling",
                "Problem-solving patterns"
            ],

            projects: [
                "Bank Account Simulator",
                "Contact Management System",
                "Expense Tracker"
            ]
        },

        advanced: {
            topics: [
                "Advanced Program Design",
                "Memory and Resource Management",
                "Concurrency Fundamentals",
                "Design Principles",
                "Clean Code",
                "Performance Optimization"
            ],

            resources: [
                "Clean code principles",
                "Software design principles",
                "Program optimization"
            ],

            projects: [
                "Command-Line Application",
                "Modular Management System",
                "Performance-focused Application"
            ]
        }
    },


    /* =========================================================
       DATA STRUCTURES & ALGORITHMS
    ========================================================= */

    "Data Structures & Algorithms": {

        beginner: {
            topics: [
                "Arrays",
                "Strings",
                "Linked Lists",
                "Stacks",
                "Queues",
                "Searching",
                "Basic Sorting",
                "Time Complexity Basics"
            ],

            resources: [
                "Data structure fundamentals",
                "Big-O notation",
                "Basic algorithmic thinking"
            ],

            projects: [
                "Array-Based Student Manager",
                "Stack and Queue Simulator",
                "Sorting Visualizer"
            ]
        },

        intermediate: {
            topics: [
                "Trees",
                "Binary Search Trees",
                "Hash Tables",
                "Heaps",
                "Recursion",
                "Binary Search",
                "Merge Sort",
                "Quick Sort",
                "Graph Fundamentals"
            ],

            resources: [
                "Intermediate DSA",
                "Recursion and divide-and-conquer",
                "Graph fundamentals"
            ],

            projects: [
                "File System Simulator",
                "Priority Queue System",
                "Graph Traversal Visualizer"
            ]
        },

        advanced: {
            topics: [
                "Advanced Graph Algorithms",
                "Dynamic Programming",
                "Greedy Algorithms",
                "Backtracking",
                "Advanced Trees",
                "Shortest Path Algorithms",
                "Algorithm Optimization"
            ],

            resources: [
                "Advanced algorithm design",
                "Dynamic programming",
                "Competitive problem solving"
            ],

            projects: [
                "Route Optimization System",
                "Advanced Algorithm Visualizer",
                "Recommendation Graph Engine"
            ]
        }
    },


    /* =========================================================
       OBJECT-ORIENTED PROGRAMMING
    ========================================================= */

    "Object-Oriented Programming": {

        beginner: {
            topics: [
                "Classes and Objects",
                "Constructors",
                "Methods",
                "Attributes",
                "Encapsulation",
                "Basic Inheritance"
            ],

            resources: [
                "Object-oriented programming fundamentals",
                "Classes and objects"
            ],

            projects: [
                "Bank Account System",
                "Library Management System"
            ]
        },

        intermediate: {
            topics: [
                "Inheritance",
                "Polymorphism",
                "Abstraction",
                "Composition",
                "Interfaces",
                "Exception Design",
                "Reusable Classes"
            ],

            resources: [
                "OOP design principles",
                "Composition vs inheritance",
                "Reusable software components"
            ],

            projects: [
                "E-Commerce System",
                "Vehicle Management System",
                "Employee Management System"
            ]
        },

        advanced: {
            topics: [
                "SOLID Principles",
                "Design Patterns",
                "Dependency Injection",
                "Advanced Abstraction",
                "Domain Modeling",
                "Maintainable Architecture"
            ],

            resources: [
                "SOLID principles",
                "Software design patterns",
                "Object-oriented architecture"
            ],

            projects: [
                "Extensible E-Commerce Platform",
                "Modular Business Application",
                "Plugin-Based Application"
            ]
        }
    },


    /* =========================================================
       HTML
    ========================================================= */

    "HTML": {

        beginner: {
            topics: [
                "HTML Document Structure",
                "Headings and Paragraphs",
                "Links",
                "Images",
                "Lists",
                "Tables",
                "Forms",
                "Semantic HTML"
            ],

            resources: [
                "HTML fundamentals",
                "Semantic HTML",
                "HTML forms"
            ],

            projects: [
                "Personal Profile Page",
                "Simple Portfolio",
                "Registration Form"
            ]
        },

        intermediate: {
            topics: [
                "Advanced Forms",
                "Form Validation",
                "Semantic Page Architecture",
                "Accessibility Attributes",
                "Media Elements",
                "SEO-Friendly HTML"
            ],

            resources: [
                "Accessible HTML",
                "HTML forms and validation",
                "Semantic page architecture"
            ],

            projects: [
                "Multi-Page Portfolio",
                "Blog Website",
                "Course Registration Website"
            ]
        },

        advanced: {
            topics: [
                "Advanced Accessibility",
                "Structured Content",
                "SEO Architecture",
                "Web Standards",
                "Performance-Oriented Markup",
                "Progressive Enhancement"
            ],

            resources: [
                "Web accessibility standards",
                "Advanced HTML architecture",
                "Progressive enhancement"
            ],

            projects: [
                "Accessible Production Website",
                "SEO-Optimized Web Platform"
            ]
        }
    },


    /* =========================================================
       CSS
    ========================================================= */

    "CSS": {

        beginner: {
            topics: [
                "Selectors",
                "Colors",
                "Fonts",
                "Box Model",
                "Margins and Padding",
                "Display",
                "Positioning",
                "Basic Flexbox"
            ],

            resources: [
                "CSS fundamentals",
                "Box model",
                "Flexbox fundamentals"
            ],

            projects: [
                "Styled Portfolio",
                "Landing Page",
                "Product Card Interface"
            ]
        },

        intermediate: {
            topics: [
                "Flexbox",
                "CSS Grid",
                "Responsive Design",
                "Media Queries",
                "Transitions",
                "Animations",
                "Pseudo Classes",
                "CSS Variables"
            ],

            resources: [
                "Responsive web design",
                "CSS Grid",
                "Modern CSS layout"
            ],

            projects: [
                "Responsive Portfolio",
                "Dashboard UI",
                "Responsive E-Commerce Page"
            ]
        },

        advanced: {
            topics: [
                "Advanced Grid Systems",
                "Design Systems",
                "CSS Architecture",
                "Advanced Animations",
                "Container Queries",
                "CSS Performance",
                "Scalable Styling"
            ],

            resources: [
                "CSS architecture",
                "Design systems",
                "Advanced responsive design"
            ],

            projects: [
                "Complete Design System",
                "Complex Responsive Dashboard",
                "Production UI Library"
            ]
        }
    },


    /* =========================================================
       RESPONSIVE WEB DESIGN
    ========================================================= */

    "Responsive Web Design": {

        beginner: {
            topics: [
                "Viewport",
                "Mobile-First Design",
                "Media Queries",
                "Flexible Widths",
                "Responsive Images"
            ],

            resources: [
                "Mobile-first design",
                "Responsive layout fundamentals"
            ],

            projects: [
                "Responsive Landing Page",
                "Mobile Portfolio"
            ]
        },

        intermediate: {
            topics: [
                "Responsive Grid Systems",
                "Advanced Breakpoints",
                "Fluid Typography",
                "Responsive Navigation",
                "Adaptive Components"
            ],

            resources: [
                "Advanced responsive layouts",
                "Fluid design"
            ],

            projects: [
                "Responsive Dashboard",
                "Responsive E-Commerce Website"
            ]
        },

        advanced: {
            topics: [
                "Container Queries",
                "Advanced Adaptive Layouts",
                "Responsive Design Systems",
                "Device-Agnostic Interfaces",
                "Performance Across Devices"
            ],

            resources: [
                "Advanced responsive architecture",
                "Design systems"
            ],

            projects: [
                "Enterprise Responsive Platform",
                "Complex Multi-Device Application"
            ]
        }
    },


    /* =========================================================
       JAVASCRIPT
    ========================================================= */

    "JavaScript": {

        beginner: {
            topics: [
                "Variables",
                "Data Types",
                "Operators",
                "Conditions",
                "Loops",
                "Functions",
                "Arrays",
                "Objects"
            ],

            resources: [
                "JavaScript fundamentals",
                "Basic problem solving",
                "Functions and data structures"
            ],

            projects: [
                "Calculator",
                "Number Guessing Game",
                "Simple Quiz"
            ]
        },

        intermediate: {
            topics: [
                "DOM Manipulation",
                "Event Handling",
                "Array Methods",
                "Object Methods",
                "Destructuring",
                "Modules",
                "Promises",
                "Async and Await",
                "Fetch API"
            ],

            resources: [
                "DOM and browser APIs",
                "Asynchronous JavaScript",
                "Modern JavaScript"
            ],

            projects: [
                "To-Do Application",
                "Weather Application",
                "Quiz Application"
            ]
        },

        advanced: {
            topics: [
                "Advanced Asynchronous Programming",
                "Closures",
                "Prototypes",
                "Advanced Browser APIs",
                "Performance Optimization",
                "Design Patterns",
                "Application Architecture",
                "Testing"
            ],

            resources: [
                "Advanced JavaScript",
                "JavaScript architecture",
                "Web performance"
            ],

            projects: [
                "Real-Time Web Application",
                "Production-Grade Web Application",
                "Advanced Dashboard"
            ]
        }
    },


    /* =========================================================
       DOM & BROWSER APIs
    ========================================================= */

    "DOM & Browser APIs": {

        beginner: {
            topics: [
                "DOM Tree",
                "Selecting Elements",
                "Changing Content",
                "Changing Styles",
                "Basic Events"
            ],

            resources: [
                "DOM fundamentals",
                "Browser interaction"
            ],

            projects: [
                "Interactive Form",
                "Simple To-Do List"
            ]
        },

        intermediate: {
            topics: [
                "Event Delegation",
                "Dynamic DOM Creation",
                "Local Storage",
                "Session Storage",
                "Fetch API",
                "Browser APIs"
            ],

            resources: [
                "Advanced DOM manipulation",
                "Web Storage",
                "Browser APIs"
            ],

            projects: [
                "Task Manager",
                "Weather Application",
                "Notes Application"
            ]
        },

        advanced: {
            topics: [
                "Performance Optimization",
                "Web Workers",
                "Advanced Browser APIs",
                "Intersection Observer",
                "Mutation Observer",
                "Complex UI Architecture"
            ],

            resources: [
                "Advanced browser APIs",
                "Web performance"
            ],

            projects: [
                "High-Performance Dashboard",
                "Offline Web Application"
            ]
        }
    },


    /* =========================================================
       GIT & GITHUB
    ========================================================= */

    "Git & GitHub": {

        beginner: {
            topics: [
                "Git Basics",
                "Repositories",
                "git init",
                "git add",
                "git commit",
                "git status",
                "GitHub Basics"
            ],

            resources: [
                "Git fundamentals",
                "GitHub repository management"
            ],

            projects: [
                "Version-Controlled Portfolio",
                "Personal GitHub Repository"
            ]
        },

        intermediate: {
            topics: [
                "Branches",
                "Merging",
                "Pull Requests",
                "Merge Conflicts",
                "Remote Repositories",
                "Git Workflows",
                "Issues"
            ],

            resources: [
                "Branching workflows",
                "Collaborative GitHub development"
            ],

            projects: [
                "Team GitHub Project",
                "Open-Source Contribution"
            ]
        },

        advanced: {
            topics: [
                "Git Rebase",
                "Advanced Branching",
                "Git Hooks",
                "Release Workflows",
                "Repository Management",
                "CI/CD Integration"
            ],

            resources: [
                "Advanced Git workflows",
                "GitHub Actions",
                "CI/CD fundamentals"
            ],

            projects: [
                "Automated Deployment Repository",
                "Team Development Workflow"
            ]
        }
    },


    /* =========================================================
       REACT
    ========================================================= */

    "React": {

        beginner: {
            topics: [
                "Components",
                "JSX",
                "Props",
                "State",
                "Events",
                "Conditional Rendering",
                "Lists"
            ],

            resources: [
                "React fundamentals",
                "Component-based development"
            ],

            projects: [
                "React To-Do App",
                "Counter Application",
                "Simple Product List"
            ]
        },

        intermediate: {
            topics: [
                "Hooks",
                "useEffect",
                "Forms",
                "Context API",
                "Routing",
                "API Integration",
                "Reusable Components"
            ],

            resources: [
                "React Hooks",
                "React Router",
                "API-driven React applications"
            ],

            projects: [
                "E-Commerce Frontend",
                "Movie Search Application",
                "Admin Dashboard"
            ]
        },

        advanced: {
            topics: [
                "Advanced State Management",
                "Performance Optimization",
                "Code Splitting",
                "Lazy Loading",
                "Component Architecture",
                "Testing",
                "Server-Side Rendering Concepts"
            ],

            resources: [
                "React architecture",
                "React performance",
                "Advanced state management"
            ],

            projects: [
                "Production E-Commerce Platform",
                "Large-Scale Dashboard",
                "Real-Time React Application"
            ]
        }
    },


    /* =========================================================
       TYPESCRIPT
    ========================================================= */

    "TypeScript": {

        beginner: {
            topics: [
                "Types",
                "Interfaces",
                "Type Annotations",
                "Arrays and Objects",
                "Functions",
                "Union Types"
            ],

            resources: [
                "TypeScript fundamentals",
                "Static typing"
            ],

            projects: [
                "Typed Calculator",
                "Typed To-Do Application"
            ]
        },

        intermediate: {
            topics: [
                "Generics",
                "Enums",
                "Utility Types",
                "Classes",
                "Modules",
                "Advanced Interfaces"
            ],

            resources: [
                "Intermediate TypeScript",
                "Reusable typed components"
            ],

            projects: [
                "Typed API Application",
                "React TypeScript Application"
            ]
        },

        advanced: {
            topics: [
                "Advanced Generics",
                "Conditional Types",
                "Mapped Types",
                "Type-Level Programming",
                "Large-Scale Type Architecture"
            ],

            resources: [
                "Advanced TypeScript",
                "Type-safe architecture"
            ],

            projects: [
                "Large TypeScript Application",
                "Reusable TypeScript Library"
            ]
        }
    },


    /* =========================================================
       WEB ACCESSIBILITY
    ========================================================= */

    "Web Accessibility": {

        beginner: {
            topics: [
                "Semantic HTML",
                "Alt Text",
                "Labels",
                "Keyboard Navigation",
                "Color Contrast"
            ],

            resources: [
                "Accessibility fundamentals",
                "Accessible HTML"
            ],

            projects: [
                "Accessible Registration Form",
                "Accessible Portfolio"
            ]
        },

        intermediate: {
            topics: [
                "ARIA",
                "Focus Management",
                "Accessible Forms",
                "Screen Reader Support",
                "Accessible Components"
            ],

            resources: [
                "ARIA fundamentals",
                "Accessible component design"
            ],

            projects: [
                "Accessible Dashboard",
                "Accessible E-Commerce Interface"
            ]
        },

        advanced: {
            topics: [
                "Accessibility Auditing",
                "Advanced ARIA",
                "Accessibility Testing",
                "Inclusive Design Systems",
                "Accessibility Performance"
            ],

            resources: [
                "Accessibility auditing",
                "Inclusive design"
            ],

            projects: [
                "Accessible Design System",
                "Accessibility-First Web Platform"
            ]
        }
    },


    /* =========================================================
       WEB PERFORMANCE
    ========================================================= */

    "Web Performance": {

        beginner: {
            topics: [
                "Image Optimization",
                "Minification",
                "Browser Caching",
                "Lazy Loading",
                "Basic Performance Metrics"
            ],

            resources: [
                "Web performance fundamentals",
                "Browser performance"
            ],

            projects: [
                "Optimized Portfolio",
                "Fast Landing Page"
            ]
        },

        intermediate: {
            topics: [
                "Code Splitting",
                "Resource Optimization",
                "Caching Strategies",
                "Network Performance",
                "Critical Rendering Path"
            ],

            resources: [
                "Frontend performance",
                "Network optimization"
            ],

            projects: [
                "Performance-Optimized Dashboard",
                "Optimized E-Commerce Website"
            ]
        },

        advanced: {
            topics: [
                "Advanced Performance Profiling",
                "Rendering Optimization",
                "Advanced Caching",
                "Web Workers",
                "Performance Monitoring"
            ],

            resources: [
                "Advanced web performance",
                "Performance profiling"
            ],

            projects: [
                "High-Performance Web Platform",
                "Performance Monitoring System"
            ]
        }
    },


    /* =========================================================
       SQL & DATABASES
    ========================================================= */

    "SQL & Databases": {

        beginner: {
            topics: [
                "Database Fundamentals",
                "Tables",
                "Rows and Columns",
                "SELECT",
                "INSERT",
                "UPDATE",
                "DELETE",
                "Basic WHERE Queries"
            ],

            resources: [
                "SQL fundamentals",
                "Relational databases"
            ],

            projects: [
                "Student Database",
                "Library Database"
            ]
        },

        intermediate: {
            topics: [
                "Joins",
                "Subqueries",
                "Aggregate Functions",
                "GROUP BY",
                "Indexes",
                "Normalization",
                "Transactions"
            ],

            resources: [
                "Intermediate SQL",
                "Database design",
                "Query optimization"
            ],

            projects: [
                "E-Commerce Database",
                "Banking Database",
                "Inventory Management Database"
            ]
        },

        advanced: {
            topics: [
                "Advanced Query Optimization",
                "Stored Procedures",
                "Advanced Indexing",
                "Transactions",
                "Concurrency",
                "Database Architecture",
                "Replication Concepts"
            ],

            resources: [
                "Advanced database systems",
                "Database performance",
                "Database architecture"
            ],

            projects: [
                "Scalable Banking Database",
                "Large-Scale E-Commerce Database"
            ]
        }
    },


    /* =========================================================
       APIs
    ========================================================= */

    "APIs": {

        beginner: {
            topics: [
                "What is an API",
                "HTTP Basics",
                "GET Requests",
                "POST Requests",
                "JSON",
                "Status Codes"
            ],

            resources: [
                "HTTP and API fundamentals",
                "REST API basics"
            ],

            projects: [
                "Weather API Application",
                "Quote Generator"
            ]
        },

        intermediate: {
            topics: [
                "REST APIs",
                "PUT and DELETE",
                "Authentication",
                "API Error Handling",
                "Headers",
                "Pagination"
            ],

            resources: [
                "REST API development",
                "API authentication"
            ],

            projects: [
                "Task Management API",
                "E-Commerce API"
            ]
        },

        advanced: {
            topics: [
                "API Architecture",
                "Rate Limiting",
                "Caching",
                "API Security",
                "Versioning",
                "Scalability",
                "Microservices Communication"
            ],

            resources: [
                "Production API architecture",
                "API security",
                "Distributed systems"
            ],

            projects: [
                "Production-Grade REST API",
                "Scalable Microservice API"
            ]
        }
    },


    /* =========================================================
       SOFTWARE TESTING
    ========================================================= */

    "Software Testing": {

        beginner: {
            topics: [
                "Testing Fundamentals",
                "Test Cases",
                "Manual Testing",
                "Bug Reports",
                "Functional Testing"
            ],

            resources: [
                "Software testing fundamentals",
                "Test case design"
            ],

            projects: [
                "Test Plan for Web Application",
                "Manual Testing Project"
            ]
        },

        intermediate: {
            topics: [
                "Unit Testing",
                "Integration Testing",
                "Regression Testing",
                "Test Automation",
                "Mocking",
                "Test Coverage"
            ],

            resources: [
                "Automated testing",
                "Unit and integration testing"
            ],

            projects: [
                "Automated Web Test Suite",
                "API Testing Project"
            ]
        },

        advanced: {
            topics: [
                "Test Architecture",
                "End-to-End Testing",
                "Performance Testing",
                "Security Testing",
                "CI/CD Testing",
                "Advanced Automation"
            ],

            resources: [
                "Advanced test automation",
                "Continuous testing",
                "Performance testing"
            ],

            projects: [
                "Enterprise Test Automation Framework",
                "CI/CD Testing Pipeline"
            ]
        }
    },


    /* =========================================================
       DEBUGGING
    ========================================================= */

    "Debugging": {

        beginner: {
            topics: [
                "Reading Error Messages",
                "Console Debugging",
                "Breakpoints",
                "Common Programming Errors",
                "Basic Debugging Process"
            ],

            resources: [
                "Debugging fundamentals",
                "Developer tools"
            ],

            projects: [
                "Debug Existing Mini Applications",
                "Bug-Fixing Challenge"
            ]
        },

        intermediate: {
            topics: [
                "Advanced Breakpoints",
                "Stack Traces",
                "Network Debugging",
                "Runtime Analysis",
                "Logging",
                "Performance Debugging"
            ],

            resources: [
                "Advanced debugging",
                "Browser developer tools"
            ],

            projects: [
                "Debug a Broken Web Application",
                "Performance Debugging Project"
            ]
        },

        advanced: {
            topics: [
                "Production Debugging",
                "Distributed Debugging",
                "Observability",
                "Advanced Performance Analysis",
                "Root Cause Analysis"
            ],

            resources: [
                "Production debugging",
                "Observability"
            ],

            projects: [
                "Production Incident Investigation",
                "Application Monitoring System"
            ]
        }
    },


    /* =========================================================
       SYSTEM DESIGN
    ========================================================= */

    "System Design": {

        beginner: {
            topics: [
                "Client and Server",
                "Databases",
                "APIs",
                "Basic Architecture",
                "Scalability Concepts"
            ],

            resources: [
                "System design fundamentals",
                "Client-server architecture"
            ],

            projects: [
                "Design a URL Shortener",
                "Design a Basic Blog System"
            ]
        },

        intermediate: {
            topics: [
                "Load Balancing",
                "Caching",
                "Database Scaling",
                "Message Queues",
                "Horizontal Scaling",
                "High Availability"
            ],

            resources: [
                "Intermediate system design",
                "Scalable architectures"
            ],

            projects: [
                "Design a Chat Application",
                "Design an E-Commerce Platform"
            ]
        },

        advanced: {
            topics: [
                "Distributed Systems",
                "Microservices",
                "Event-Driven Architecture",
                "Distributed Databases",
                "Fault Tolerance",
                "Consistency",
                "System Reliability"
            ],

            resources: [
                "Distributed systems",
                "Advanced system design",
                "Large-scale architecture"
            ],

            projects: [
                "Design a Video Streaming Platform",
                "Design a Large-Scale Social Platform"
            ]
        }
    },


    /* =========================================================
       PYTHON
    ========================================================= */

    "Python": {

        beginner: {
            topics: [
                "Python Syntax",
                "Variables",
                "Data Types",
                "Operators",
                "Conditions",
                "Loops",
                "Functions",
                "Lists",
                "Dictionaries"
            ],

            resources: [
                "Python fundamentals",
                "Python problem solving"
            ],

            projects: [
                "Calculator",
                "Number Guessing Game",
                "Student Grade System"
            ]
        },

        intermediate: {
            topics: [
                "Object-Oriented Programming",
                "Modules",
                "Packages",
                "File Handling",
                "Exception Handling",
                "Virtual Environments",
                "Libraries",
                "Testing"
            ],

            resources: [
                "Intermediate Python",
                "Python OOP",
                "Python project development"
            ],

            projects: [
                "Bank Simulator",
                "Expense Tracker",
                "Library Management System"
            ]
        },

        advanced: {
            topics: [
                "Advanced OOP",
                "Decorators",
                "Generators",
                "Context Managers",
                "Concurrency",
                "Asyncio",
                "Performance Optimization",
                "Python Architecture"
            ],

            resources: [
                "Advanced Python",
                "Python concurrency",
                "Production Python development"
            ],

            projects: [
                "Async Web Application",
                "Production Python Service",
                "Concurrent Data Processing System"
            ]
        }
    },


    /* =========================================================
       MACHINE LEARNING
    ========================================================= */

    "Machine Learning": {

        beginner: {
            topics: [
                "Machine Learning Fundamentals",
                "Supervised Learning",
                "Unsupervised Learning",
                "Training and Testing Data",
                "Features and Labels",
                "Linear Regression",
                "Classification"
            ],

            resources: [
                "Machine learning fundamentals",
                "Basic statistics for ML"
            ],

            projects: [
                "House Price Prediction",
                "Student Score Prediction",
                "Basic Classification Model"
            ]
        },

        intermediate: {
            topics: [
                "Feature Engineering",
                "Model Evaluation",
                "Cross Validation",
                "Decision Trees",
                "Random Forest",
                "KNN",
                "SVM",
                "Clustering"
            ],

            resources: [
                "Intermediate machine learning",
                "Model evaluation",
                "Feature engineering"
            ],

            projects: [
                "Customer Churn Prediction",
                "Customer Segmentation",
                "Fraud Detection Model"
            ]
        },

        advanced: {
            topics: [
                "Ensemble Learning",
                "Hyperparameter Optimization",
                "Deep Learning Fundamentals",
                "Model Deployment",
                "ML Pipelines",
                "Model Monitoring",
                "Production ML"
            ],

            resources: [
                "Advanced machine learning",
                "MLOps fundamentals",
                "Production ML systems"
            ],

            projects: [
                "End-to-End ML Pipeline",
                "Production Prediction Service",
                "Recommendation System"
            ]
        }
    },


    /* =========================================================
       DEEP LEARNING
    ========================================================= */

    "Deep Learning": {

        beginner: {
            topics: [
                "Neural Networks",
                "Neurons",
                "Activation Functions",
                "Loss Functions",
                "Training",
                "Backpropagation"
            ],

            resources: [
                "Neural network fundamentals",
                "Deep learning basics"
            ],

            projects: [
                "Digit Recognition",
                "Simple Image Classifier"
            ]
        },

        intermediate: {
            topics: [
                "CNNs",
                "RNNs",
                "Transfer Learning",
                "Regularization",
                "Batch Normalization",
                "Model Evaluation"
            ],

            resources: [
                "CNNs",
                "Transfer learning",
                "Intermediate deep learning"
            ],

            projects: [
                "Image Classification System",
                "Sentiment Analysis Model"
            ]
        },

        advanced: {
            topics: [
                "Transformers",
                "Attention Mechanisms",
                "Fine-Tuning",
                "Model Optimization",
                "Distributed Training",
                "Advanced Computer Vision",
                "Generative Models"
            ],

            resources: [
                "Transformers",
                "Advanced deep learning",
                "Generative AI"
            ],

            projects: [
                "Image Generation System",
                "Advanced NLP System",
                "Vision-Language Application"
            ]
        }
    },


    /* =========================================================
       DATA ANALYSIS
    ========================================================= */

    "Data Analysis": {

        beginner: {
            topics: [
                "Data Types",
                "Data Cleaning",
                "Basic Statistics",
                "Filtering",
                "Sorting",
                "Basic Visualization"
            ],

            resources: [
                "Data analysis fundamentals",
                "Basic statistics"
            ],

            projects: [
                "Student Performance Analysis",
                "Sales Data Analysis"
            ]
        },

        intermediate: {
            topics: [
                "Advanced Data Cleaning",
                "Exploratory Data Analysis",
                "Correlation",
                "Statistical Analysis",
                "Data Visualization",
                "Dashboard Creation"
            ],

            resources: [
                "Exploratory data analysis",
                "Data visualization",
                "Applied statistics"
            ],

            projects: [
                "Business Sales Dashboard",
                "Customer Analysis",
                "Financial Data Analysis"
            ]
        },

        advanced: {
            topics: [
                "Advanced Statistical Analysis",
                "Predictive Analysis",
                "Experimentation",
                "Advanced Visualization",
                "Business Intelligence",
                "Data Storytelling"
            ],

            resources: [
                "Advanced analytics",
                "Business intelligence",
                "Statistical modeling"
            ],

            projects: [
                "Business Intelligence Dashboard",
                "Predictive Analytics Platform"
            ]
        }
    },


    /* =========================================================
       DATA ENGINEERING
    ========================================================= */

    "Data Engineering": {

        beginner: {
            topics: [
                "Data Fundamentals",
                "SQL",
                "Databases",
                "Data Formats",
                "Basic Python",
                "ETL Concepts"
            ],

            resources: [
                "Data engineering fundamentals",
                "SQL fundamentals"
            ],

            projects: [
                "CSV Data Pipeline",
                "Basic ETL Pipeline"
            ]
        },

        intermediate: {
            topics: [
                "Advanced SQL",
                "ETL Pipelines",
                "Data Warehousing",
                "APIs",
                "Data Transformation",
                "Workflow Scheduling"
            ],

            resources: [
                "ETL development",
                "Data warehouse concepts",
                "Pipeline orchestration"
            ],

            projects: [
                "E-Commerce Data Pipeline",
                "Sales Data Warehouse"
            ]
        },

        advanced: {
            topics: [
                "Distributed Data Processing",
                "Data Lakes",
                "Streaming Data",
                "Pipeline Optimization",
                "Cloud Data Platforms",
                "Data Governance"
            ],

            resources: [
                "Distributed data systems",
                "Data lake architecture",
                "Cloud data engineering"
            ],

            projects: [
                "Real-Time Data Pipeline",
                "Cloud Data Platform",
                "Large-Scale Analytics Pipeline"
            ]
        }
    },


    /* =========================================================
       LINUX
    ========================================================= */

    "Linux": {

        beginner: {
            topics: [
                "Linux File System",
                "Terminal",
                "Basic Commands",
                "File Permissions",
                "Processes",
                "Package Management"
            ],

            resources: [
                "Linux fundamentals",
                "Linux command line"
            ],

            projects: [
                "Linux Server Setup",
                "Shell-Based File Manager"
            ]
        },

        intermediate: {
            topics: [
                "Shell Scripting",
                "Process Management",
                "Networking Commands",
                "SSH",
                "System Monitoring",
                "Cron Jobs"
            ],

            resources: [
                "Linux administration",
                "Shell scripting"
            ],

            projects: [
                "Automated Backup System",
                "Server Monitoring Script"
            ]
        },

        advanced: {
            topics: [
                "Linux Networking",
                "System Optimization",
                "Security Hardening",
                "Service Management",
                "Advanced Shell Automation",
                "Server Architecture"
            ],

            resources: [
                "Advanced Linux administration",
                "Linux security",
                "Server management"
            ],

            projects: [
                "Hardened Linux Server",
                "Automated Server Management System"
            ]
        }
    },


    /* =========================================================
       CLOUD
    ========================================================= */

    "Cloud Computing": {

        beginner: {
            topics: [
                "Cloud Computing Fundamentals",
                "Virtual Machines",
                "Storage",
                "Networking Basics",
                "Cloud Services",
                "Regions and Availability Zones"
            ],

            resources: [
                "Cloud fundamentals",
                "Basic cloud architecture"
            ],

            projects: [
                "Deploy a Static Website",
                "Cloud File Storage System"
            ]
        },

        intermediate: {
            topics: [
                "Cloud Databases",
                "Virtual Networks",
                "Load Balancers",
                "Containers",
                "IAM",
                "Monitoring"
            ],

            resources: [
                "Cloud architecture",
                "Container deployment",
                "Cloud security basics"
            ],

            projects: [
                "Cloud-Hosted Web Application",
                "Containerized Application"
            ]
        },

        advanced: {
            topics: [
                "Cloud Architecture",
                "Auto Scaling",
                "Serverless Architecture",
                "Infrastructure as Code",
                "High Availability",
                "Disaster Recovery",
                "Cloud Security"
            ],

            resources: [
                "Advanced cloud architecture",
                "Infrastructure as Code",
                "Cloud security"
            ],

            projects: [
                "Highly Available Cloud Platform",
                "Serverless Application",
                "Multi-Service Cloud Architecture"
            ]
        }
    },


    /* =========================================================
       DEVOPS
    ========================================================= */

    "DevOps": {

        beginner: {
            topics: [
                "DevOps Fundamentals",
                "Linux",
                "Git",
                "Basic Networking",
                "CI/CD Concepts"
            ],

            resources: [
                "DevOps fundamentals",
                "Linux and Git"
            ],

            projects: [
                "Basic CI Pipeline",
                "Automated Deployment Demo"
            ]
        },

        intermediate: {
            topics: [
                "CI/CD Pipelines",
                "Docker",
                "Container Registries",
                "Cloud Deployment",
                "Infrastructure Basics",
                "Monitoring"
            ],

            resources: [
                "Docker",
                "CI/CD",
                "Cloud deployment"
            ],

            projects: [
                "Dockerized Web Application",
                "Automated Deployment Pipeline"
            ]
        },

        advanced: {
            topics: [
                "Kubernetes",
                "Infrastructure as Code",
                "Advanced CI/CD",
                "Cloud Architecture",
                "Observability",
                "Security Automation",
                "Scalable Infrastructure"
            ],

            resources: [
                "Kubernetes",
                "Infrastructure as Code",
                "DevSecOps"
            ],

            projects: [
                "Kubernetes Deployment Platform",
                "Production CI/CD Infrastructure",
                "Cloud-Native Application Platform"
            ]
        }
    },


    /* =========================================================
       CYBERSECURITY
    ========================================================= */

    "Cybersecurity": {

        beginner: {
            topics: [
                "Security Fundamentals",
                "Networking Basics",
                "Authentication",
                "Authorization",
                "Common Threats",
                "Basic Encryption"
            ],

            resources: [
                "Cybersecurity fundamentals",
                "Networking fundamentals"
            ],

            projects: [
                "Password Strength Analyzer",
                "Basic Security Audit"
            ]
        },

        intermediate: {
            topics: [
                "Web Security",
                "Network Security",
                "Vulnerability Assessment",
                "Security Monitoring",
                "Cryptography",
                "Incident Response"
            ],

            resources: [
                "Web application security",
                "Network security",
                "Incident response"
            ],

            projects: [
                "Web Security Audit",
                "Network Monitoring System"
            ]
        },

        advanced: {
            topics: [
                "Threat Modeling",
                "Penetration Testing Concepts",
                "Security Architecture",
                "Digital Forensics",
                "Advanced Cryptography",
                "Security Operations",
                "Zero Trust"
            ],

            resources: [
                "Advanced cybersecurity",
                "Security architecture",
                "Threat modeling"
            ],

            projects: [
                "Security Monitoring Platform",
                "Enterprise Security Architecture",
                "Incident Response System"
            ]
        }
    },


    /* =========================================================
       COMPUTER NETWORKING
    ========================================================= */

    "Computer Networking": {

        beginner: {
            topics: [
                "Network Fundamentals",
                "IP Addresses",
                "DNS",
                "HTTP",
                "TCP and UDP",
                "Ports",
                "Basic Network Devices"
            ],

            resources: [
                "Networking fundamentals",
                "Internet fundamentals"
            ],

            projects: [
                "Local Network Setup",
                "Network Information Tool"
            ]
        },

        intermediate: {
            topics: [
                "Subnetting",
                "Routing",
                "Firewalls",
                "NAT",
                "VPN",
                "Network Troubleshooting"
            ],

            resources: [
                "Intermediate networking",
                "Network security"
            ],

            projects: [
                "Network Monitoring Tool",
                "VPN Lab"
            ]
        },

        advanced: {
            topics: [
                "Advanced Routing",
                "Network Architecture",
                "Load Balancing",
                "High Availability",
                "Network Security Architecture",
                "Distributed Networking"
            ],

            resources: [
                "Advanced network architecture",
                "Enterprise networking"
            ],

            projects: [
                "Enterprise Network Design",
                "Highly Available Network Architecture"
            ]
        }
    },


    /* =========================================================
       AI FUNDAMENTALS
    ========================================================= */

    "AI Fundamentals": {

        beginner: {
            topics: [
                "Artificial Intelligence Fundamentals",
                "AI Problem Solving",
                "Search Algorithms",
                "Knowledge Representation",
                "Machine Learning Overview"
            ],

            resources: [
                "AI fundamentals",
                "Introduction to intelligent systems"
            ],

            projects: [
                "Rule-Based Chatbot",
                "Simple Recommendation System"
            ]
        },

        intermediate: {
            topics: [
                "Machine Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Model Evaluation",
                "AI APIs",
                "AI Application Design"
            ],

            resources: [
                "Applied AI",
                "Machine learning",
                "AI application development"
            ],

            projects: [
                "AI Chatbot",
                "Image Classification Application",
                "Recommendation System"
            ]
        },

        advanced: {
            topics: [
                "Deep Learning",
                "Transformers",
                "Generative AI",
                "Model Fine-Tuning",
                "AI System Architecture",
                "AI Evaluation",
                "Responsible AI"
            ],

            resources: [
                "Advanced AI",
                "Generative AI",
                "AI system design"
            ],

            projects: [
                "AI Assistant",
                "Multimodal AI Application",
                "Production AI Platform"
            ]
        }
    },


    /* =========================================================
       PROMPT ENGINEERING
    ========================================================= */

    "Prompt Engineering": {

        beginner: {
            topics: [
                "What Are Prompts",
                "Clear Instructions",
                "Context",
                "Role Prompting",
                "Output Formatting"
            ],

            resources: [
                "Prompt engineering fundamentals",
                "Effective AI instructions"
            ],

            projects: [
                "Prompt-Based Study Assistant",
                "AI Writing Assistant"
            ]
        },

        intermediate: {
            topics: [
                "Few-Shot Prompting",
                "Structured Outputs",
                "Prompt Chaining",
                "Context Management",
                "Tool Usage",
                "Prompt Evaluation"
            ],

            resources: [
                "Advanced prompting",
                "LLM application design"
            ],

            projects: [
                "AI Research Assistant",
                "Structured Data Extraction System",
                "AI Study Planner"
            ]
        },

        advanced: {
            topics: [
                "Complex Prompt Architectures",
                "Agentic Workflows",
                "Evaluation Frameworks",
                "Guardrails",
                "Tool-Calling Systems",
                "Context Optimization",
                "LLM Application Architecture"
            ],

            resources: [
                "Advanced LLM application design",
                "AI agents",
                "LLM evaluation"
            ],

            projects: [
                "AI Agent",
                "Multi-Step Research Agent",
                "Production AI Workflow"
            ]
        }
    },
    "Statistics & Probability": {

        beginner: {
            topics: [
                "Mean, Median and Mode",
                "Percentages",
                "Probability Fundamentals",
                "Data Distributions",
                "Basic Descriptive Statistics"
            ],

            resources: [
                "Statistics fundamentals",
                "Probability fundamentals",
                "Statistics for computing"
            ],

            projects: [
                "Student Performance Statistics",
                "Simple Probability Calculator"
            ]
        },

        intermediate: {
            topics: [
                "Variance and Standard Deviation",
                "Normal Distribution",
                "Correlation",
                "Conditional Probability",
                "Sampling",
                "Hypothesis Testing"
            ],

            resources: [
                "Applied statistics",
                "Statistical inference",
                "Probability for data analysis"
            ],

            projects: [
                "Customer Data Statistical Analysis",
                "A/B Test Analysis"
            ]
        },

        advanced: {
            topics: [
                "Regression Analysis",
                "Advanced Probability",
                "Statistical Modeling",
                "Bayesian Statistics",
                "Experimental Design",
                "Statistical Inference"
            ],

            resources: [
                "Advanced statistics",
                "Statistical modeling",
                "Bayesian reasoning"
            ],

            projects: [
                "Predictive Statistical Model",
                "Experimental Analysis Platform"
            ]
        }
    },


    "Large Language Models": {

        beginner: {
            topics: [
                "What Are Large Language Models",
                "Tokens",
                "Context Windows",
                "Prompt and Response",
                "Basic LLM Applications"
            ],

            resources: [
                "LLM fundamentals",
                "Generative AI fundamentals"
            ],

            projects: [
                "Basic AI Chatbot",
                "AI Text Summarizer"
            ]
        },

        intermediate: {
            topics: [
                "Prompt Engineering",
                "Embeddings",
                "Vector Databases",
                "Retrieval-Augmented Generation",
                "Function Calling",
                "LLM APIs"
            ],

            resources: [
                "LLM application development",
                "Embeddings and vector search",
                "RAG fundamentals"
            ],

            projects: [
                "Document Question Answering System",
                "RAG-Based Study Assistant"
            ]
        },

        advanced: {
            topics: [
                "LLM Fine-Tuning",
                "Model Evaluation",
                "Agentic Systems",
                "Advanced RAG",
                "Context Engineering",
                "LLM Optimization",
                "Production LLM Architecture"
            ],

            resources: [
                "Advanced LLM systems",
                "LLM evaluation",
                "AI agent architecture"
            ],

            projects: [
                "Production RAG Platform",
                "Autonomous Research Agent",
                "Domain-Specific AI Assistant"
            ]
        }
    },


    "Docker & Containers": {

        beginner: {
            topics: [
                "Containers",
                "Docker Images",
                "Docker Containers",
                "Dockerfile",
                "Docker Commands",
                "Container Ports"
            ],

            resources: [
                "Docker fundamentals",
                "Containerization basics"
            ],

            projects: [
                "Dockerized Web Application",
                "Containerized Python Application"
            ]
        },

        intermediate: {
            topics: [
                "Docker Compose",
                "Volumes",
                "Networks",
                "Environment Variables",
                "Multi-Container Applications",
                "Container Registries"
            ],

            resources: [
                "Docker Compose",
                "Multi-container applications",
                "Container networking"
            ],

            projects: [
                "Dockerized Full-Stack Application",
                "Multi-Container E-Commerce Application"
            ]
        },

        advanced: {
            topics: [
                "Container Security",
                "Multi-Stage Builds",
                "Container Optimization",
                "Container Orchestration",
                "Kubernetes Fundamentals",
                "Production Container Architecture"
            ],

            resources: [
                "Advanced Docker",
                "Kubernetes",
                "Container security"
            ],

            projects: [
                "Production Container Platform",
                "Kubernetes-Based Application"
            ]
        }
    },


    "Networking": {

        beginner: {
            topics: [
                "Network Fundamentals",
                "IP Addresses",
                "DNS",
                "HTTP",
                "TCP and UDP",
                "Ports"
            ],

            resources: [
                "Computer networking fundamentals",
                "Internet fundamentals"
            ],

            projects: [
                "Network Information Tool",
                "Basic Local Network"
            ]
        },

        intermediate: {
            topics: [
                "Subnetting",
                "Routing",
                "NAT",
                "Firewalls",
                "VPN",
                "Network Troubleshooting"
            ],

            resources: [
                "Intermediate networking",
                "Network troubleshooting"
            ],

            projects: [
                "Network Monitoring Tool",
                "VPN Lab"
            ]
        },

        advanced: {
            topics: [
                "Advanced Routing",
                "Network Architecture",
                "Load Balancing",
                "Network Security",
                "High Availability",
                "Distributed Networking"
            ],

            resources: [
                "Advanced networking",
                "Enterprise network architecture"
            ],

            projects: [
                "Enterprise Network Architecture",
                "Highly Available Network"
            ]
        }
    },


    "CI/CD": {

        beginner: {
            topics: [
                "Continuous Integration",
                "Continuous Delivery",
                "Build Pipelines",
                "Automated Testing",
                "Deployment Basics"
            ],

            resources: [
                "CI/CD fundamentals",
                "Basic automation pipelines"
            ],

            projects: [
                "Basic GitHub Actions Pipeline",
                "Automated Website Deployment"
            ]
        },

        intermediate: {
            topics: [
                "Pipeline Stages",
                "Environment Management",
                "Automated Testing",
                "Deployment Strategies",
                "Secrets Management",
                "Pipeline Monitoring"
            ],

            resources: [
                "CI/CD pipeline design",
                "Automated deployment"
            ],

            projects: [
                "Full CI/CD Pipeline",
                "Automated Cloud Deployment"
            ]
        },

        advanced: {
            topics: [
                "Deployment Strategies",
                "Blue-Green Deployment",
                "Canary Deployment",
                "Infrastructure Automation",
                "Pipeline Security",
                "Continuous Deployment Architecture"
            ],

            resources: [
                "Advanced CI/CD",
                "DevSecOps",
                "Production deployment strategies"
            ],

            projects: [
                "Production CI/CD Infrastructure",
                "Zero-Downtime Deployment System"
            ]
        }
    },


    "Security": {

        beginner: {
            topics: [
                "Security Fundamentals",
                "Authentication",
                "Authorization",
                "Passwords",
                "Common Security Threats"
            ],

            resources: [
                "Security fundamentals",
                "Application security basics"
            ],

            projects: [
                "Password Security Analyzer",
                "Basic Authentication System"
            ]
        },

        intermediate: {
            topics: [
                "Encryption",
                "Secure APIs",
                "Session Security",
                "Input Validation",
                "Security Headers",
                "Vulnerability Assessment"
            ],

            resources: [
                "Application security",
                "API security",
                "Secure coding"
            ],

            projects: [
                "Secure REST API",
                "Web Security Audit"
            ]
        },

        advanced: {
            topics: [
                "Security Architecture",
                "Threat Modeling",
                "Zero Trust",
                "Advanced Cryptography",
                "Security Automation",
                "Enterprise Security"
            ],

            resources: [
                "Security architecture",
                "Threat modeling",
                "Enterprise security"
            ],

            projects: [
                "Enterprise Security Architecture",
                "Security Monitoring Platform"
            ]
        }
    },


    "Infrastructure as Code": {

        beginner: {
            topics: [
                "Infrastructure as Code Concepts",
                "Infrastructure Configuration",
                "Cloud Resources",
                "Basic Automation"
            ],

            resources: [
                "Infrastructure as Code fundamentals",
                "Cloud infrastructure basics"
            ],

            projects: [
                "Automated Cloud Server Setup"
            ]
        },

        intermediate: {
            topics: [
                "Terraform Fundamentals",
                "Variables",
                "Modules",
                "State Management",
                "Infrastructure Automation"
            ],

            resources: [
                "Terraform fundamentals",
                "Infrastructure automation"
            ],

            projects: [
                "Terraform Cloud Infrastructure",
                "Automated Multi-Service Deployment"
            ]
        },

        advanced: {
            topics: [
                "Advanced Terraform",
                "Reusable Infrastructure Modules",
                "Remote State",
                "Infrastructure Testing",
                "Multi-Environment Infrastructure",
                "Infrastructure Security"
            ],

            resources: [
                "Advanced Infrastructure as Code",
                "Production Terraform"
            ],

            projects: [
                "Production Cloud Infrastructure",
                "Multi-Environment Infrastructure Platform"
            ]
        }
    },


    "Monitoring & Observability": {

        beginner: {
            topics: [
                "Application Monitoring",
                "Logs",
                "Metrics",
                "Basic Alerts",
                "System Health"
            ],

            resources: [
                "Monitoring fundamentals",
                "Application logging"
            ],

            projects: [
                "Server Monitoring Dashboard",
                "Application Health Monitor"
            ]
        },

        intermediate: {
            topics: [
                "Metrics Collection",
                "Centralized Logging",
                "Dashboards",
                "Alerting",
                "Application Performance Monitoring"
            ],

            resources: [
                "Application monitoring",
                "Observability fundamentals"
            ],

            projects: [
                "Application Monitoring Dashboard",
                "Centralized Logging System"
            ]
        },

        advanced: {
            topics: [
                "Distributed Tracing",
                "Observability Architecture",
                "Advanced Alerting",
                "Incident Management",
                "Reliability Engineering",
                "Performance Monitoring"
            ],

            resources: [
                "Advanced observability",
                "Site reliability engineering"
            ],

            projects: [
                "Distributed Application Observability Platform",
                "Production Reliability Dashboard"
            ]
        }
    },


    "Test Automation": {

        beginner: {
            topics: [
                "Automation Testing Fundamentals",
                "Test Scripts",
                "Assertions",
                "Test Cases",
                "Basic Automation Frameworks"
            ],

            resources: [
                "Test automation fundamentals",
                "Automated testing basics"
            ],

            projects: [
                "Automated Login Test",
                "Automated Form Testing"
            ]
        },

        intermediate: {
            topics: [
                "Page Object Model",
                "Test Suites",
                "Data-Driven Testing",
                "API Automation",
                "Regression Automation"
            ],

            resources: [
                "Automation frameworks",
                "Advanced automated testing"
            ],

            projects: [
                "Automated E-Commerce Test Suite",
                "Automated API Test Suite"
            ]
        },

        advanced: {
            topics: [
                "End-to-End Automation",
                "Parallel Testing",
                "Test Architecture",
                "CI/CD Integration",
                "Advanced Test Reporting",
                "Scalable Automation"
            ],

            resources: [
                "Enterprise test automation",
                "Continuous testing"
            ],

            projects: [
                "Enterprise Automation Framework",
                "CI/CD Integrated Test Platform"
            ]
        }
    },


    "API Testing": {

        beginner: {
            topics: [
                "API Testing Fundamentals",
                "HTTP Methods",
                "Status Codes",
                "Request and Response",
                "Basic API Test Cases"
            ],

            resources: [
                "API testing fundamentals",
                "REST API testing"
            ],

            projects: [
                "Basic REST API Test Suite"
            ]
        },

        intermediate: {
            topics: [
                "Authentication Testing",
                "Negative Testing",
                "Schema Validation",
                "Parameterized Tests",
                "API Automation"
            ],

            resources: [
                "Advanced API testing",
                "API automation"
            ],

            projects: [
                "Automated REST API Test Suite",
                "Authenticated API Testing Project"
            ]
        },

        advanced: {
            topics: [
                "API Performance Testing",
                "Security Testing",
                "Contract Testing",
                "Distributed API Testing",
                "Automated API Quality Gates"
            ],

            resources: [
                "Advanced API testing",
                "API security",
                "API performance"
            ],

            projects: [
                "Production API Testing Framework",
                "API Quality Automation Pipeline"
            ]
        }
    },


    "Performance Testing": {

        beginner: {
            topics: [
                "Performance Testing Fundamentals",
                "Load Testing",
                "Response Time",
                "Throughput",
                "Basic Performance Metrics"
            ],

            resources: [
                "Performance testing fundamentals"
            ],

            projects: [
                "Basic Web Load Test"
            ]
        },

        intermediate: {
            topics: [
                "Stress Testing",
                "Load Testing",
                "Performance Monitoring",
                "Bottleneck Identification",
                "Performance Reports"
            ],

            resources: [
                "Performance engineering",
                "Load testing"
            ],

            projects: [
                "Web Application Performance Test",
                "API Load Testing Project"
            ]
        },

        advanced: {
            topics: [
                "Scalability Testing",
                "Capacity Planning",
                "Distributed Load Testing",
                "Performance Optimization",
                "Production Performance Monitoring"
            ],

            resources: [
                "Advanced performance engineering",
                "Scalability testing"
            ],

            projects: [
                "Distributed Load Testing Platform",
                "High-Traffic Performance Analysis"
            ]
        }
    },


    "Database Design": {

        beginner: {
            topics: [
                "Tables",
                "Primary Keys",
                "Foreign Keys",
                "Relationships",
                "Basic Normalization"
            ],

            resources: [
                "Database design fundamentals"
            ],

            projects: [
                "Library Database Design",
                "Student Management Database"
            ]
        },

        intermediate: {
            topics: [
                "Normalization",
                "Entity Relationship Diagrams",
                "Indexes",
                "Constraints",
                "Transactions",
                "Schema Design"
            ],

            resources: [
                "Relational database design",
                "Database normalization"
            ],

            projects: [
                "E-Commerce Database",
                "Banking Database"
            ]
        },

        advanced: {
            topics: [
                "Large-Scale Schema Design",
                "Partitioning",
                "Sharding Concepts",
                "Distributed Databases",
                "Database Scalability"
            ],

            resources: [
                "Advanced database architecture",
                "Scalable database design"
            ],

            projects: [
                "Large-Scale E-Commerce Database",
                "Distributed Database Architecture"
            ]
        }
    },


    "Database Administration": {

        beginner: {
            topics: [
                "Database Installation",
                "Users and Permissions",
                "Backups",
                "Basic Monitoring",
                "Database Maintenance"
            ],

            resources: [
                "Database administration fundamentals"
            ],

            projects: [
                "Database Backup System"
            ]
        },

        intermediate: {
            topics: [
                "Query Optimization",
                "Index Management",
                "Backup Strategies",
                "Recovery",
                "Performance Monitoring",
                "User Management"
            ],

            resources: [
                "Database administration",
                "Database performance"
            ],

            projects: [
                "Database Monitoring System",
                "Automated Backup System"
            ]
        },

        advanced: {
            topics: [
                "Replication",
                "High Availability",
                "Disaster Recovery",
                "Database Scaling",
                "Advanced Performance Tuning",
                "Database Security"
            ],

            resources: [
                "Advanced database administration",
                "High-availability databases"
            ],

            projects: [
                "Highly Available Database Cluster",
                "Disaster Recovery System"
            ]
        }
    },


    "Performance Optimization": {

        beginner: {
            topics: [
                "Efficient Algorithms",
                "Basic Profiling",
                "Resource Usage",
                "Code Optimization"
            ],

            resources: [
                "Performance fundamentals",
                "Basic profiling"
            ],

            projects: [
                "Optimize a Slow Application"
            ]
        },

        intermediate: {
            topics: [
                "Algorithm Optimization",
                "Caching",
                "Database Optimization",
                "Memory Optimization",
                "Network Optimization"
            ],

            resources: [
                "Application performance optimization",
                "Database performance"
            ],

            projects: [
                "Performance-Optimized Web Application",
                "Optimized Data Processing System"
            ]
        },

        advanced: {
            topics: [
                "Profiling at Scale",
                "Distributed Performance",
                "Advanced Caching",
                "Concurrency Optimization",
                "System Bottleneck Analysis"
            ],

            resources: [
                "Advanced performance engineering",
                "Systems optimization"
            ],

            projects: [
                "High-Performance Distributed Application",
                "Large-Scale Performance Optimization"
            ]
        }
    },


    "Systems Analysis": {

        beginner: {
            topics: [
                "System Analysis Fundamentals",
                "Requirements Gathering",
                "Process Modeling",
                "Basic System Documentation"
            ],

            resources: [
                "Systems analysis fundamentals"
            ],

            projects: [
                "Student Management System Analysis",
                "Library System Requirements"
            ]
        },

        intermediate: {
            topics: [
                "Use Case Modeling",
                "Process Modeling",
                "Data Flow Diagrams",
                "System Requirements",
                "Stakeholder Analysis"
            ],

            resources: [
                "Systems analysis",
                "Requirements engineering"
            ],

            projects: [
                "E-Commerce System Analysis",
                "Banking System Analysis"
            ]
        },

        advanced: {
            topics: [
                "Enterprise Architecture",
                "Complex System Modeling",
                "Architecture Evaluation",
                "System Integration",
                "Business Process Optimization"
            ],

            resources: [
                "Enterprise systems analysis",
                "System architecture"
            ],

            projects: [
                "Enterprise System Architecture",
                "Large-Scale Business System Analysis"
            ]
        }
    },


    "Documentation & Requirements": {

        beginner: {
            topics: [
                "Requirement Gathering",
                "Functional Requirements",
                "Non-Functional Requirements",
                "Basic Documentation"
            ],

            resources: [
                "Requirements engineering fundamentals"
            ],

            projects: [
                "Software Requirements Document",
                "Project Documentation"
            ]
        },

        intermediate: {
            topics: [
                "User Stories",
                "Acceptance Criteria",
                "Use Cases",
                "Requirement Prioritization",
                "Technical Documentation"
            ],

            resources: [
                "Requirements engineering",
                "Technical writing"
            ],

            projects: [
                "Complete Product Requirements Document",
                "Technical Documentation Portal"
            ]
        },

        advanced: {
            topics: [
                "Enterprise Requirements",
                "Architecture Documentation",
                "Requirements Traceability",
                "Change Management",
                "Complex Stakeholder Management"
            ],

            resources: [
                "Advanced requirements engineering",
                "Enterprise documentation"
            ],

            projects: [
                "Enterprise Product Specification",
                "Large-Scale System Documentation"
            ]
        }
    },


    "Data Visualization": {

        beginner: {
            topics: [
                "Charts",
                "Bar Charts",
                "Line Charts",
                "Pie Charts",
                "Basic Data Presentation"
            ],

            resources: [
                "Data visualization fundamentals"
            ],

            projects: [
                "Student Performance Dashboard",
                "Sales Chart Dashboard"
            ]
        },

        intermediate: {
            topics: [
                "Interactive Dashboards",
                "Filtering",
                "Advanced Charts",
                "Data Storytelling",
                "Dashboard Design"
            ],

            resources: [
                "Interactive data visualization",
                "Dashboard design"
            ],

            projects: [
                "Business Analytics Dashboard",
                "Interactive Sales Dashboard"
            ]
        },

        advanced: {
            topics: [
                "Advanced Visualization",
                "Geospatial Visualization",
                "Real-Time Dashboards",
                "Visualization Architecture",
                "Advanced Data Storytelling"
            ],

            resources: [
                "Advanced data visualization",
                "Data storytelling"
            ],

            projects: [
                "Real-Time Analytics Dashboard",
                "Advanced Business Intelligence Platform"
            ]
        }
    },


    "Excel & Spreadsheets": {

        beginner: {
            topics: [
                "Cells and Worksheets",
                "Basic Formulas",
                "Sorting",
                "Filtering",
                "Basic Charts"
            ],

            resources: [
                "Spreadsheet fundamentals",
                "Excel basics"
            ],

            projects: [
                "Student Marks Workbook",
                "Personal Expense Tracker"
            ]
        },

        intermediate: {
            topics: [
                "Advanced Formulas",
                "Pivot Tables",
                "Conditional Formatting",
                "Data Cleaning",
                "Lookup Functions"
            ],

            resources: [
                "Intermediate Excel",
                "Data analysis with spreadsheets"
            ],

            projects: [
                "Sales Analysis Workbook",
                "Business Expense Dashboard"
            ]
        },

        advanced: {
            topics: [
                "Advanced Pivot Tables",
                "Power Query",
                "Advanced Data Modeling",
                "Automation",
                "Business Dashboards"
            ],

            resources: [
                "Advanced Excel",
                "Spreadsheet automation",
                "Business intelligence"
            ],

            projects: [
                "Automated Business Dashboard",
                "Advanced Financial Analysis Workbook"
            ]
        }
    },


    "Business Intelligence": {

        beginner: {
            topics: [
                "BI Fundamentals",
                "Business Metrics",
                "Data Sources",
                "Basic Dashboards",
                "Reporting"
            ],

            resources: [
                "Business intelligence fundamentals"
            ],

            projects: [
                "Sales Reporting Dashboard",
                "Business KPI Dashboard"
            ]
        },

        intermediate: {
            topics: [
                "Data Warehousing",
                "ETL",
                "Dashboard Design",
                "Data Modeling",
                "KPI Analysis"
            ],

            resources: [
                "Business intelligence systems",
                "Data warehousing"
            ],

            projects: [
                "Business Intelligence Dashboard",
                "Customer Analytics Platform"
            ]
        },

        advanced: {
            topics: [
                "Enterprise BI",
                "Advanced Data Modeling",
                "Predictive Analytics",
                "BI Architecture",
                "Self-Service Analytics"
            ],

            resources: [
                "Enterprise business intelligence",
                "Advanced analytics"
            ],

            projects: [
                "Enterprise BI Platform",
                "Advanced Business Analytics System"
            ]
        }
    },


    "Cybersecurity Fundamentals": {

        beginner: {
            topics: [
                "CIA Triad",
                "Authentication",
                "Authorization",
                "Common Cyber Threats",
                "Password Security"
            ],

            resources: [
                "Cybersecurity fundamentals",
                "Security awareness"
            ],

            projects: [
                "Password Security Analyzer",
                "Basic Security Audit"
            ]
        },

        intermediate: {
            topics: [
                "Network Security",
                "Web Security",
                "Encryption",
                "Vulnerability Assessment",
                "Incident Response"
            ],

            resources: [
                "Network security",
                "Application security"
            ],

            projects: [
                "Network Security Audit",
                "Web Security Assessment"
            ]
        },

        advanced: {
            topics: [
                "Security Architecture",
                "Threat Modeling",
                "Zero Trust",
                "Security Operations",
                "Advanced Incident Response"
            ],

            resources: [
                "Advanced cybersecurity",
                "Security architecture"
            ],

            projects: [
                "Enterprise Security Architecture",
                "Security Operations Dashboard"
            ]
        }
    },


    "Web Security": {

        beginner: {
            topics: [
                "Authentication",
                "Authorization",
                "Input Validation",
                "HTTPS",
                "Secure Password Handling"
            ],

            resources: [
                "Web security fundamentals",
                "Secure web development"
            ],

            projects: [
                "Secure Login System",
                "Web Security Checklist"
            ]
        },

        intermediate: {
            topics: [
                "XSS",
                "SQL Injection",
                "CSRF",
                "Session Security",
                "Security Headers",
                "Secure API Design"
            ],

            resources: [
                "Web application security",
                "OWASP fundamentals"
            ],

            projects: [
                "Web Security Testing Lab",
                "Secure REST API"
            ]
        },

        advanced: {
            topics: [
                "Advanced Application Security",
                "Threat Modeling",
                "Security Architecture",
                "Advanced Authentication",
                "Application Security Testing"
            ],

            resources: [
                "Advanced web security",
                "Application security architecture"
            ],

            projects: [
                "Enterprise Web Security Platform",
                "Secure Production Web Application"
            ]
        }
    },


    "Penetration Testing": {

        beginner: {
            topics: [
                "Penetration Testing Fundamentals",
                "Reconnaissance",
                "Scanning",
                "Basic Vulnerability Identification",
                "Security Reporting"
            ],

            resources: [
                "Ethical security testing fundamentals",
                "Security assessment methodology"
            ],

            projects: [
                "Controlled Security Assessment Lab"
            ]
        },

        intermediate: {
            topics: [
                "Web Application Testing",
                "Network Testing",
                "Vulnerability Analysis",
                "Exploitation Concepts",
                "Privilege Escalation Concepts",
                "Reporting"
            ],

            resources: [
                "Web penetration testing",
                "Network security testing"
            ],

            projects: [
                "Web Application Security Lab",
                "Controlled Network Assessment"
            ]
        },

        advanced: {
            topics: [
                "Advanced Web Testing",
                "Advanced Network Assessment",
                "Attack Simulation",
                "Security Architecture Review",
                "Red Team Methodology",
                "Professional Reporting"
            ],

            resources: [
                "Advanced penetration testing",
                "Red team methodology"
            ],

            projects: [
                "Enterprise Security Assessment",
                "Controlled Red Team Exercise"
            ]
        }
    },


    "Security Monitoring": {

        beginner: {
            topics: [
                "Security Logs",
                "Basic Alerts",
                "Security Events",
                "Monitoring Fundamentals"
            ],

            resources: [
                "Security monitoring fundamentals"
            ],

            projects: [
                "Basic Security Log Monitor"
            ]
        },

        intermediate: {
            topics: [
                "SIEM Concepts",
                "Log Correlation",
                "Threat Detection",
                "Alert Management",
                "Incident Investigation"
            ],

            resources: [
                "Security operations",
                "SIEM fundamentals"
            ],

            projects: [
                "Security Monitoring Dashboard",
                "Threat Detection System"
            ]
        },

        advanced: {
            topics: [
                "Advanced Threat Detection",
                "Security Analytics",
                "Incident Response Automation",
                "Threat Intelligence",
                "SOC Architecture"
            ],

            resources: [
                "Advanced security operations",
                "Threat intelligence"
            ],

            projects: [
                "SOC Monitoring Platform",
                "Automated Threat Detection System"
            ]
        }
    },


    "Cloud Security": {

        beginner: {
            topics: [
                "Cloud Security Fundamentals",
                "Identity and Access Management",
                "Cloud Permissions",
                "Secure Storage",
                "Basic Cloud Networking"
            ],

            resources: [
                "Cloud security fundamentals"
            ],

            projects: [
                "Secure Cloud Storage",
                "Cloud IAM Configuration"
            ]
        },

        intermediate: {
            topics: [
                "Cloud Network Security",
                "Encryption",
                "Secrets Management",
                "Security Monitoring",
                "Cloud Compliance"
            ],

            resources: [
                "Cloud security architecture",
                "Cloud identity management"
            ],

            projects: [
                "Secure Cloud Application",
                "Cloud Security Monitoring System"
            ]
        },

        advanced: {
            topics: [
                "Cloud Security Architecture",
                "Zero Trust Cloud",
                "Advanced IAM",
                "Security Automation",
                "Cloud Threat Detection",
                "Multi-Cloud Security"
            ],

            resources: [
                "Advanced cloud security",
                "Cloud security architecture"
            ],

            projects: [
                "Enterprise Cloud Security Platform",
                "Multi-Cloud Security Architecture"
            ]
        }
    },


    "Backend Architecture": {

        beginner: {
            topics: [
                "Client-Server Architecture",
                "Backend Fundamentals",
                "APIs",
                "Databases",
                "Basic Authentication"
            ],

            resources: [
                "Backend fundamentals",
                "Server-side development"
            ],

            projects: [
                "Basic REST API",
                "User Authentication Backend"
            ]
        },

        intermediate: {
            topics: [
                "Layered Architecture",
                "Service Architecture",
                "Authentication",
                "Caching",
                "Database Integration",
                "API Design"
            ],

            resources: [
                "Backend architecture",
                "REST API architecture"
            ],

            projects: [
                "E-Commerce Backend",
                "Task Management Backend"
            ]
        },

        advanced: {
            topics: [
                "Microservices",
                "Event-Driven Architecture",
                "Distributed Systems",
                "Scalability",
                "Fault Tolerance",
                "Service Communication"
            ],

            resources: [
                "Distributed backend systems",
                "Microservice architecture"
            ],

            projects: [
                "Scalable E-Commerce Backend",
                "Microservice-Based Platform"
            ]
        }
    },


    "Java": {

        beginner: {
            topics: [
                "Java Syntax",
                "Variables",
                "Data Types",
                "Operators",
                "Conditions",
                "Loops",
                "Methods",
                "Arrays"
            ],

            resources: [
                "Java fundamentals",
                "Object-oriented programming"
            ],

            projects: [
                "Java Calculator",
                "Student Management System"
            ]
        },

        intermediate: {
            topics: [
                "OOP",
                "Collections",
                "Exception Handling",
                "File Handling",
                "Generics",
                "Streams",
                "JDBC"
            ],

            resources: [
                "Intermediate Java",
                "Java collections",
                "Java database connectivity"
            ],

            projects: [
                "Banking Application",
                "Library Management System",
                "Java Database Application"
            ]
        },

        advanced: {
            topics: [
                "Multithreading",
                "Concurrency",
                "JVM Fundamentals",
                "Spring Framework",
                "Spring Boot",
                "Microservices",
                "Performance Optimization"
            ],

            resources: [
                "Advanced Java",
                "Spring Boot",
                "Java microservices"
            ],

            projects: [
                "Spring Boot REST API",
                "Java Microservice Application",
                "Enterprise Backend System"
            ]
        }
    },


    "AI Evaluation": {

        beginner: {
            topics: [
                "AI Output Evaluation",
                "Accuracy",
                "Relevance",
                "Consistency",
                "Basic Evaluation Criteria"
            ],

            resources: [
                "AI evaluation fundamentals",
                "LLM evaluation basics"
            ],

            projects: [
                "AI Response Evaluation Dataset",
                "Simple AI Quality Checker"
            ]
        },

        intermediate: {
            topics: [
                "Evaluation Metrics",
                "Benchmarking",
                "Human Evaluation",
                "Hallucination Detection",
                "Prompt Testing"
            ],

            resources: [
                "LLM evaluation",
                "AI benchmarking"
            ],

            projects: [
                "LLM Evaluation Dashboard",
                "Prompt Evaluation System"
            ]
        },

        advanced: {
            topics: [
                "Automated Evaluation",
                "LLM Benchmarks",
                "Model Comparison",
                "Safety Evaluation",
                "Evaluation Pipelines",
                "Production Monitoring"
            ],

            resources: [
                "Advanced AI evaluation",
                "LLM benchmarking"
            ],

            projects: [
                "Automated LLM Evaluation Platform",
                "AI Model Benchmarking System"
            ]
        }
    },


    "AI Safety": {

        beginner: {
            topics: [
                "AI Safety Fundamentals",
                "AI Bias",
                "Privacy",
                "Responsible AI",
                "Basic Safety Principles"
            ],

            resources: [
                "Responsible AI fundamentals",
                "AI safety basics"
            ],

            projects: [
                "AI Bias Analysis",
                "Responsible AI Checklist"
            ]
        },

        intermediate: {
            topics: [
                "Prompt Injection",
                "Data Privacy",
                "Model Bias",
                "AI Security",
                "Content Safety",
                "Guardrails"
            ],

            resources: [
                "AI security",
                "AI safety engineering"
            ],

            projects: [
                "AI Safety Filter",
                "Prompt Injection Testing Lab"
            ]
        },

        advanced: {
            topics: [
                "AI Governance",
                "Advanced Guardrails",
                "AI Risk Management",
                "Adversarial Evaluation",
                "Model Security",
                "Safety Architecture"
            ],

            resources: [
                "Advanced AI safety",
                "AI governance",
                "AI security"
            ],

            projects: [
                "AI Safety Evaluation Platform",
                "Production AI Guardrail System"
            ]
        }
    }

};
