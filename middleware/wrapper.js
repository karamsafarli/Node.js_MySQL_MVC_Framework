const wrapperMiddleware = (req, res, next) => {
    // Set common data like meta tags, titles, etc.
    res.locals.metaTags = {
        title: 'Your Website Title',
        description: 'Your website description',
        // Add more meta tags as needed
    };

    next();
};

module.exports = wrapperMiddleware;