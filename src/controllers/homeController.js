const nodemailer = require('nodemailer');
const emailConfig = require('../config/email');
const logger = require('../utils/logger');

const homeController = {
    index: (req, res) => {
        res.render('index');
    },

    sendMessage: async (req, res) => {
        const { name, email, message } = req.body;
        
        if (name && email && message) {
            try {
                const transporter = nodemailer.createTransporter(emailConfig.smtp);

                await transporter.sendMail({
                    from: emailConfig.from,
                    to: emailConfig.to,
                    subject: `Message from ${name} [${email}] - xil3.com`,
                    text: message
                });

                logger.info(`Contact form message sent from ${email}`);
                req.flash('notice', 'Success! Message has been sent. We will be getting back to you as soon as possible.');
            } catch (error) {
                logger.error('Email sending failed:', error);
                req.flash('error', 'Unable to send message. Please try again later.');
            }
        } else {
            req.flash('error', 'Unable to send message. Please make sure you enter all the required fields.');
        }
        
        res.redirect('/');
    }
};

module.exports = homeController;