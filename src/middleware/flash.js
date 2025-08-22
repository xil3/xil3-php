const flashMiddleware = (req, res, next) => {
    res.locals.success = req.flash('notice');
    res.locals.error = req.flash('error');
    next();
};

module.exports = flashMiddleware;