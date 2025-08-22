const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// Import routes
const indexRoutes = require('./src/routes/index');
const blogRoutes = require('./src/routes/blog');

// Import middleware
const { flashMiddleware } = require('./src/middleware');

// Import utilities
const logger = require('./src/utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'xil3-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Flash messages
app.use(flash());
app.use(flashMiddleware);

// Routes
app.use('/', indexRoutes);
app.use('/blog', blogRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', { 
        title: 'Page Not Found',
        message: 'The page you are looking for does not exist.' 
    });
});

// Error handler
app.use((err, req, res, next) => {
    logger.error('Application error:', err);
    res.status(500).render('500', { 
        title: 'Server Error',
        message: process.env.NODE_ENV === 'production' ? 
            'Something went wrong!' : err.message 
    });
});

// Start server
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
    logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;