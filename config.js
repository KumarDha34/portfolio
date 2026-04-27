// ============================================
// PORTFOLIO CONFIGURATION FILE
// ============================================
// EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// ============================================

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        firstName: 'Kumar',
        lastName: 'Dhamala',
        fullName: 'Kumar Dhamala',
        title: 'Python | Django Developer',
        tagline: 'Building web applications with Django and Python',
        email: 'dhamalakumar834@gmail.com',
        phone: '+977 9765299096',
        location: 'Kathmandu, Nepal',
        availability: 'Open for opportunities',
        github: 'https://github.com/KumarDha34',
        linkedin: 'https://linkedin.com/in/kumardhamala',
        twitter: 'https://twitter.com/',
        instagram: '',
        facebook: '',
        website: 'https://kumardhamala.com.np'
    },
    
    // Professional Summary
    summary: {
        short: 'Passionate Python and Django developer with experience in building web applications and managing backend functionality.',
        long: 'Passionate Python and Django developer with experience in building web applications and managing backend functionality. Strong understanding of database operations, CRUD features, and creating responsive user-friendly interfaces. Looking for an opportunity to apply my skills and grow through real project experience.'
    },
    
    // Technical Skills
    skills: {
        languages: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
        frameworks: ['Django', 'Django REST Framework', 'Bootstrap', 'Tailwind CSS'],
        databases: ['MySQL', 'PostgreSQL', 'SQLite'],
        cloud: ['AWS (EC2, S3)', 'Netlify', 'GitHub Pages'],
        tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker (learning)']
    },
    
    // Education
    education: [
        {
            degree: 'Bachelor\'s Degree',
            field: 'Computer Science',
            institution: 'Tribhuvan University',
            location: 'Kathmandu, Nepal',
            startYear: 2022,
            endYear: 2026,
            gpa: 3.70,
            description: 'Focus on web development, database management, and software engineering.'
        }
    ],
    
    // Certifications
    certifications: [
        {
            name: 'Claude Code in Action',
            issuer: 'Anthropic',
            year: 2024,
            credentialUrl: '#',
            icon: 'fab fa-python'
        },
        {
            name: 'Django for Beginners',
            issuer: 'Django Project',
            year: 2024,
            credentialUrl: '#',
            icon: 'fab fa-python'
        }
    ],
    
    // Experience (if any)
    experience: [
        // Uncomment and add your experience
        // {
        //     title: 'Junior Developer',
        //     company: 'Tech Company',
        //     location: 'Kathmandu',
        //     startDate: '2024-01',
        //     endDate: 'Present',
        //     current: true,
        //     description: 'Building web applications, maintaining databases, collaborating with team.',
        //     technologies: ['Django', 'Python', 'PostgreSQL']
        // }
    ],
    
    // Social Links
    social: {
        github: { username: 'KumarDha34', url: 'https://github.com/KumarDha34' },
        linkedin: { username: 'kumardhamala', url: 'https://linkedin.com/in/kumardhamala' },
        email: { address: 'dhamalakumar834@gmail.com', url: 'mailto:dhamalakumar834@gmail.com' }
    },
    
    // UI Settings
    ui: {
        primaryColor: '#2563eb',
        secondaryColor: '#1e40af',
        accentColor: '#8b5cf6',
        darkModeEnabled: true,
        animationsEnabled: true,
        typingAnimation: true,
        typingPhrases: ['Django Developer', 'Python Enthusiast', 'Backend Engineer', 'Open to Work'],
        itemsPerPage: 6,
        dateFormat: 'long', // 'short', 'long', 'relative'
        currency: 'NPR'
    },
    
    // Analytics (Optional)
    analytics: {
        googleAnalyticsId: '', // Add your GA4 ID: 'G-XXXXXXXX'
        clarityId: '', // Add Microsoft Clarity ID
        hotjarId: '' // Add Hotjar ID
    },
    
    // Contact Form Configuration
    contact: {
        formspreeEndpoint: 'https://formspree.io/f/xgvorgdp',
        // Or use EmailJS
        emailjs: {
            enabled: false,
            serviceId: '',
            templateId: '',
            publicKey: ''
        },
        // Or use Netlify Forms (set to true if on Netlify)
        netlifyForms: false
    },
    
    // SEO Settings
    seo: {
        siteTitle: 'Kumar Dhamala | Python Django Developer',
        siteDescription: 'Portfolio of Kumar Dhamala - Python Django Developer showcasing web applications and backend projects',
        siteKeywords: 'Python, Django, Developer, Portfolio, Web Development, Backend, Nepal',
        siteAuthor: 'Kumar Dhamala',
        ogImage: 'assets/images/og-image.jpg',
        twitterHandle: '@',
        siteUrl: 'https://kumardhamala.com.np'
    },
    
    // Feature Toggles
    features: {
        showBlog: true,
        showContactForm: true,
        showDarkMode: true,
        showAnalytics: false,
        showTypingAnimation: true,
        showStatsSection: true,
        showFeaturedProjects: true,
        showResumeDownload: true,
        projectFilters: true,
        blogSearch: true,
        socialLinks: true,
        scrollAnimations: true
    },
    
    // Custom Messages
    messages: {
        welcomeMessage: '👋 Available for opportunities',
        newsletterText: 'Subscribe for updates on my latest projects and blog posts.',
        footerText: 'Built with HTML, CSS, JavaScript, Tailwind & Bootstrap',
        copyrightText: 'All rights reserved.',
        contactSuccess: 'Thank you! Your message has been sent successfully.',
        contactError: 'Sorry, there was an error sending your message. Please try again.'
    }
};

// Export for modern JS (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}