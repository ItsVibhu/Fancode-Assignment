const Tour = require('../controllers/tour');

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            const { name } = req.query; // Extract 'name' from query parameters
            if (!name) {
                throw new Error('Missing required query parameter: name');
            }
            const result = await Tour.getMatchesByTourName({ name }); // Pass 'name' as a parameter
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
};
