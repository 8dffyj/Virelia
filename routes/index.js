const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {    
    res.render('home', { title: 'Virelia' });
});

// Additional routes can be added here
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

router.get('/features', (req, res) => {
    res.render('features', { title: 'Features' });
});

router.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;