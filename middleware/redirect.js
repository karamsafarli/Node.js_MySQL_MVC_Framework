const redirectMiddleware = (req, res, next) => {
    const redirectRules = [
        {
            from: /^\/test\/([a-zA-Z0-9]+)\/?$/,
            to: '/test'
        }
        // Add more redirect rules as needed
    ];

    for (const rule of redirectRules) {
        const match = req.url.match(rule.from);
        if (match) {
            const destination = rule.to.replace(/\$([0-9]+)/g, (_, index) => match[index]);
            return res.redirect(destination);
        }
    }

    // If no matching rule is found, continue to the next middleware/route handler
    next();
};

module.exports = redirectMiddleware;