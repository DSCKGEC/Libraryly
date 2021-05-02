const sanitizeHtml = require('sanitize-html');

const sanitizer = {
    allowedTags: [],
    allowedAttributes: {},
    allowedIframeHostnames: [],
};
/* ------------ Html sanitizer Middleware ----------- */

const SanitizerMiddleware = () => {
    return async (req, res, next) => {
        let m = 0;
        for (let [key, value] of Object.entries(req.body)) {
            if (value !== sanitizeHtml(value, sanitizer)) {
                // TODO: handle error
                res.status(500).send(key + ' must not include HTML!');
                m = 1;
            }
        }
        if (m == 0) next();
    };
};

module.exports = SanitizerMiddleware;
