const emailConfig = {
    smtp: {
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER || 'jon@xil3.com',
            pass: process.env.EMAIL_PASS || 'your-app-password'
        }
    },
    from: process.env.EMAIL_FROM || 'jon@xil3.com',
    to: process.env.EMAIL_TO || 'jon@j4r.org'
};

module.exports = emailConfig;