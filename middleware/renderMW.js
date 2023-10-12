// Using the template engine render the values into the template

const requireOption = require('./requireOption');

module.exports = function(objectrepository, responseData) {
    return function(req, res) {
        // res.render(viewName);
        res.json(responseData);
    };
};
