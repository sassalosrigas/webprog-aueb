const books = [
    {
        id: 1,
        title: "HTML5 & CSS3: Building Responsive Web Pages",
        category: "web-dev",
        level: "Beginner",
        price: "18€",
        image: "assets/img/thumbnails/html5-css3-book.jpg",
        description: "A comprehensive guide to mastering HTML5 and CSS3 for modern web design.",
        longDescription: "This essential guide covers all aspects of HTML5 and CSS3, from semantic markup to advanced layout techniques. Learn how to create beautiful, responsive websites that work flawlessly across all devices. Perfect for beginners and intermediate developers looking to strengthen their web fundamentals.",
        author: "Alexis Goldstein",
        pages: "425",
        isbn: "978-1-23456-789-0",
        syllabus: [
            "HTML5 Fundamentals",
            "CSS3 Styling & Selectors",
            "Responsive Web Design",
            "Flexbox & Grid Layouts",
            "Web Accessibility"
        ]
    },
    {
        id: 2,
        title: "The JavaScript Handbook: Advanced Concepts",
        category: "programming",
        level: "Advanced",
        price: "32€",
        image: "assets/img/thumbnails/js-handbook.jpg",
        description: "Master JavaScript's most challenging concepts and unlock your full potential.",
        longDescription: "Dive deep into JavaScript with this comprehensive handbook. Learn about closures, prototypes, async/await, event delegation, and much more. This book is designed for developers who already know JavaScript basics and want to take their skills to the next level.",
        author: "David Chen",
        pages: "550",
        isbn: "978-1-98765-432-1",
        syllabus: [
            "Advanced Functions & Closures",
            "Prototypal Inheritance",
            "The Event Loop & Promises",
            "Async/Await Patterns",
            "Performance & Optimization"
        ]
    },
    {
        id: 3,
        title: "Web Security Essentials: Protect Your Applications",
        category: "security",
        level: "Intermediate",
        price: "24€",
        image: "assets/img/thumbnails/web-security.jpg",
        description: "Learn essential security practices to build safer web applications.",
        longDescription: "This practical guide teaches you how to identify and prevent common web security vulnerabilities. Understand OWASP principles, implement authentication and authorization, and protect against attacks like XSS, CSRF, and SQL injection. Ideal for developers of all levels who want to build secure applications.",
        author: "Thompson Carter",
        pages: "380",
        isbn: "978-1-55555-555-5",
        syllabus: [
            "Security Fundamentals",
            "Authentication & Authorization",
            "OWASP Top 10 Vulnerabilities",
            "Secure Coding Practices",
            "Security Testing & Auditing"
        ]
    },
    {
        id: 4,
        title: "Database Design & Implementation",
        category: "databases",
        level: "Intermediate",
        price: "28€",
        image: "assets/img/thumbnails/database-sql.jpg",
        description: "Master database design and SQL to manage data efficiently.",
        longDescription: "Learn how to design robust databases and write efficient SQL queries. This book covers normalization, indexing, query optimization, and best practices. Whether you're working with PostgreSQL, MySQL, or SQL Server, this comprehensive guide will help you become a database expert.",
        author: "Edward Sciore",
        pages: "475",
        isbn: "978-1-99999-999-9",
        syllabus: [
            "Relational Database Concepts",
            "Database Normalization",
            "SQL Query Writing",
            "Query Optimization",
            "Database Administration"
        ]
    },
    {
        id: 5,
        title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Images",
        category: "web-dev",
        level: "Beginner",
        price: "22€",
        image: "assets/img/thumbnails/learn-web-design.jpg",
        description: "Master modern CSS techniques to create stunning web layouts.",
        longDescription: "Explore the latest CSS features and techniques. Learn about CSS Grid, Flexbox, CSS Variables, animations, transitions, and responsive design. This book will help you write cleaner, more maintainable CSS code and create visually appealing websites.",
        author: "Jennifer Niederst Robbins",
        pages: "395",
        isbn: "978-1-44444-444-4",
        syllabus: [
            "CSS Fundamentals & Selectors",
            "Flexbox & Grid Deep Dive",
            "CSS Variables & Custom Properties",
            "Animations & Transitions",
            "Responsive Design Patterns"
        ]
    },
    {
        id: 6,
        title: "Introduction to Cybersecurity: Concepts, Principles, Technologies and Practices",
        category: "security",
        level: "Beginner",
        price: "20€",
        image: "assets/img/thumbnails/cyber-intro.jpg",
        description: "Start your cybersecurity journey with this beginner-friendly guide.",
        longDescription: "Perfect for those new to cybersecurity. This book introduces fundamental concepts, common threats, and practical defense strategies. Learn about password management, network security, phishing awareness, and how to build a security mindset.",
        author: "Ajay Singh",
        pages: "320",
        isbn: "978-1-33333-333-3",
        syllabus: [
            "Cybersecurity Basics",
            "Common Threats & Vulnerabilities",
            "Password & Account Security",
            "Network Security Fundamentals",
            "Building Security Awareness"
        ]
    }
];
