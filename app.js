const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Virelia',
        page: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About - Virelia',
        page: 'About'
    });
});

app.get('/guide', (req, res) => {
    res.render('guide', { 
        title: 'Guide Server - Virelia',
        page: 'Guide'
    });
});

// Alternative shop route
app.get('/shop', (req, res) => {
    res.render('shop', {
        title: 'Virelia Gaming - Premium Server Access',
        pageTitle: 'Virelia Premium Access', 
        description: 'Join our exclusive gaming community with premium server access, advanced features, and dedicated support.',
        discordLink: 'https://discord.gg/yourserver',
        currentYear: new Date().getFullYear(),
        creator: 'Virelia Team',
        githubLink: 'https://github.com/yourusername/virelia'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact - Virelia',
        page: 'Contact'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', { 
        title: '404 - Page Not Found',
        page: '404'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});