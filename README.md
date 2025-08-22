# Xil3 Media - Node.js Express Web Application

A modern Node.js Express web application for Xil3 Media's technical consulting website, featuring a blog system and contact functionality.

## Features

- 🏠 **Homepage** with company information and contact form
- 📝 **Blog System** with CRUD operations for articles
- 📧 **Email Integration** for contact form submissions
- 🎨 **Responsive Design** with Bootstrap
- 🚀 **Modern Architecture** following Express.js best practices

## Tech Stack

- **Backend**: Node.js, Express.js
- **View Engine**: EJS with layouts
- **Email**: Nodemailer
- **Session Management**: express-session with flash messaging
- **Architecture**: MVC pattern with separation of concerns

## Project Structure

```
xil3/
├── app.js                    # Main application entry point
├── package.json              # Dependencies and scripts
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose setup
├── .env.example            # Environment variables template
├── src/                    # Source code
│   ├── controllers/        # Business logic
│   ├── models/            # Data models
│   ├── routes/            # Route definitions
│   ├── middleware/        # Custom middleware
│   ├── config/            # Configuration files
│   └── utils/             # Utility functions
├── views/                 # EJS templates
└── public/               # Static assets
```

## Quick Start

### Local Development

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the application:**
   ```bash
   npm start          # Production
   npm run dev        # Development (with auto-restart)
   ```

4. **Access the application:**
   - Homepage: http://localhost:3000
   - Blog: http://localhost:3000/blog

### Docker Deployment

1. **Build and run with Docker:**
   ```bash
   docker build -t xil3-app .
   docker run -p 3000:3000 xil3-app
   ```

2. **Or use Docker Compose:**
   ```bash
   docker-compose up -d
   ```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
NODE_ENV=development
PORT=3000
SESSION_SECRET=your-super-secret-session-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@example.com
EMAIL_TO=recipient@example.com
```

## Docker Configuration

### Dockerfile Features
- **Base Image**: Node.js 18 Alpine (lightweight)
- **Security**: Non-root user execution
- **Optimization**: Multi-stage build with production dependencies only
- **Health Check**: Built-in application health monitoring
- **Port**: Exposes port 3000

### Docker Compose Features
- **Service Orchestration**: Web application with environment configuration
- **Volume Mounting**: Development-friendly file mounting
- **Health Checks**: Application health monitoring
- **Restart Policy**: Automatic restart on failure
- **Future Ready**: Commented database service configuration

## API Endpoints

### Homepage Routes
- `GET /` - Homepage
- `POST /send-message` - Contact form submission

### Blog Routes
- `GET /blog` - List all articles
- `GET /blog/:id/:articleName` - View specific article
- `GET /blog/funplace/add` - Add article form
- `GET /blog/funplace/edit/:id` - Edit article form
- `POST /blog/funplace/update` - Create new article
- `POST /blog/funplace/update/:id` - Update existing article

## Development

### Adding New Features

1. **Models**: Add data models in `src/models/`
2. **Controllers**: Add business logic in `src/controllers/`
3. **Routes**: Define URL patterns in `src/routes/`
4. **Views**: Create EJS templates in `views/`
5. **Middleware**: Add custom middleware in `src/middleware/`

### Code Structure Guidelines

- Follow MVC architecture pattern
- Use proper error handling and logging
- Implement input validation
- Follow Express.js best practices
- Use environment variables for configuration

## Production Deployment

### Docker Production Setup

1. **Build optimized image:**
   ```bash
   docker build -t xil3-app:latest .
   ```

2. **Run with production environment:**
   ```bash
   docker run -d \
     --name xil3-production \
     -p 80:3000 \
     -e NODE_ENV=production \
     -e SESSION_SECRET=your-secure-secret \
     -e EMAIL_USER=your-email \
     -e EMAIL_PASS=your-password \
     xil3-app:latest
   ```

### Security Considerations

- Use strong session secrets in production
- Enable HTTPS with reverse proxy (nginx/Apache)
- Set up proper email authentication
- Use environment variables for sensitive data
- Regular security updates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the code structure
4. Test your changes
5. Submit a pull request

## License

Private - Xil3 Media Ltd.