# Whitelist Subscription Plans - Node.js App

A professional gaming subscription plans website built with Node.js, Express, and EJS templating.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Professional UI** - Modern glassmorphism design with smooth animations
- **Dynamic Content** - EJS templating for easy content management
- **Price Calculator** - Interactive calculator for custom enterprise plans
- **Static Assets** - Optimized CSS and JavaScript files
- **SEO Ready** - Proper meta tags and semantic HTML structure

## Project Structure

```
whitelist-subscription-plans/
├── app.js                  # Main Express application
├── package.json           # Dependencies and scripts
├── README.md              # This file
├── views/
│   └── index.ejs          # Main template file
├── public/
│   ├── css/
│   │   └── styles.css     # All CSS styles
│   └── js/
│       └── calculator.js  # Client-side JavaScript
```

## Installation

1. **Clone or create the project directory:**
   ```bash
   mkdir whitelist-subscription-plans
   cd whitelist-subscription-plans
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create the folder structure:**
   ```bash
   mkdir views public public/css public/js
   ```

4. **Copy the files:**
   - Copy `app.js` to the root directory
   - Copy `package.json` to the root directory
   - Copy `index.ejs` to the `views/` directory
   - Copy `styles.css` to the `public/css/` directory
   - Copy `calculator.js` to the `public/js/` directory

## Usage

### Development Mode
```bash
npm run dev
```
This starts the server with nodemon for auto-reloading during development.

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in the PORT environment variable).

## Configuration

### Environment Variables
- `PORT` - Server port (default: 3000)

### Customizing Content

The main data structure is in `app.js`. You can easily modify:

- **Plan Information** - Edit the `plansData` object to change prices, features, and descriptions
- **Links** - Update Discord and GitHub links in the route handler
- **Branding** - Change creator name, company info, etc.

Example of customizing a plan:
```javascript
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
```

## API Endpoints

### GET /
Main page displaying all subscription plans

### GET /api/calculate-price
API endpoint for price calculations
- Query parameters: `players`, `duration`
- Returns: JSON with pricing information

Example:
```
GET /api/calculate-price?players=5&duration=6
```

Response:
```json
{
  "basePrice": "30.00",
  "finalPrice": "22.50",
  "discount": 25,
  "savings": "7.50"
}
```

## Features in Detail

### Professional Design
- Modern glassmorphism effects
- Smooth animations and transitions
- Professional color schemes (Bronze, Silver, Gold)
- Responsive grid layouts

### Interactive Calculator
- Real-time price calculations
- Team size and duration discounts
- Professional discount tiers
- Smooth UI interactions

### Performance Optimizations
- Optimized CSS with modern features
- Efficient JavaScript with minimal dependencies
- Responsive images and layouts
- Fast loading times

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### Heroku
1. Create a Heroku app
2. Set the NODE_ENV environment variable to 'production'
3. Deploy using Git or GitHub integration

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect the Node.js app
3. Deploy with one click

### Traditional VPS
1. Upload files to your server
2. Install Node.js and npm
3. Run `npm install --production`
4. Start with `npm start` or use PM2 for process management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own gaming subscription service.

## Credits

Created by **roster_0**
- GitHub: [https://github.com/Ar7340](https://github.com/Ar7340)

---

For support or questions, please visit the Discord server or open an issue on GitHub.