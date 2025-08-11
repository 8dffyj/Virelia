// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Sample data that could be passed to the template
const plansData = {
    solo: [
        {
            type: 'bronze',
            title: 'Bronze Pass',
            subtitle: 'Essential Access',
            price: '$1.00',
            duration: 'per month',
            discount: null,
            features: [
                'Single player access',
                'Standard server features',
                'Community support',
                '99.9% uptime guarantee'
            ]
        },
        {
            type: 'silver',
            title: 'Silver Pass',
            subtitle: 'Extended Access',
            price: '$1.90',
            duration: '2 months',
            discount: '5% OFF',
            features: [
                'Single player access',
                'Enhanced server features',
                'Priority support',
                'Extended session limits'
            ]
        },
        {
            type: 'gold',
            title: 'Gold Pass',
            subtitle: 'Premium Access',
            price: '$2.70',
            duration: '3 months',
            discount: '10% OFF',
            features: [
                'Single player access',
                'Premium server features',
                'VIP support channel',
                'Best value option'
            ]
        }
    ],
    duo: [
        {
            type: 'bronze',
            title: 'Bronze Duo',
            subtitle: 'Team Gaming',
            price: '$1.90',
            duration: 'per month',
            discount: '5% OFF',
            features: [
                '2 player access',
                'Shared server features',
                'Team coordination tools',
                'Duo-optimized gameplay'
            ]
        },
        {
            type: 'silver',
            title: 'Silver Duo',
            subtitle: 'Extended Partnership',
            price: '$3.60',
            duration: '2 months',
            discount: '10% OFF',
            features: [
                '2 player access',
                'Enhanced server features',
                'Priority duo support',
                'Advanced team features'
            ]
        },
        {
            type: 'gold',
            title: 'Gold Duo',
            subtitle: 'Premium Partnership',
            price: '$5.10',
            duration: '3 months',
            discount: '15% OFF',
            features: [
                '2 player access',
                'Premium duo features',
                'VIP team support',
                'Maximum duo value'
            ]
        }
    ]
};

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Whitelist Subscription Plans',
        pageTitle: 'Whitelist Subscription Plans',
        description: 'Enterprise-grade gaming access with flexible subscription options designed for serious players and teams.',
        discordLink: 'https://discord.com/channels/1402150354988306556/1404354422074642453/1404371923529367644',
        githubLink: 'https://github.com/Ar7340',
        creator: 'roster_0',
        currentYear: new Date().getFullYear(),
        plans: plansData
    });
});

// API route for price calculation (optional)
app.get('/api/calculate-price', (req, res) => {
    const { players = 1, duration = 1 } = req.query;
    
    const playersCount = parseInt(players) || 1;
    const durationMonths = parseInt(duration) || 1;
    
    // Base price per player per month
    let basePrice = 1.00;
    let totalCost = playersCount * durationMonths * basePrice;
    
    // Apply discounts
    let discount = 0;
    if (durationMonths >= 6) {
        discount = 0.15;
    } else if (durationMonths >= 3) {
        discount = 0.10;
    } else if (durationMonths >= 2) {
        discount = 0.05;
    }
    
    // Team size discounts
    if (playersCount >= 10) {
        discount += 0.15;
    } else if (playersCount >= 5) {
        discount += 0.10;
    } else if (playersCount >= 2) {
        discount += 0.05;
    }
    
    discount = Math.min(discount, 0.25);
    
    const finalPrice = totalCost * (1 - discount);
    const savedAmount = totalCost - finalPrice;
    
    res.json({
        basePrice: totalCost.toFixed(2),
        finalPrice: finalPrice.toFixed(2),
        discount: Math.round(discount * 100),
        savings: savedAmount.toFixed(2)
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;