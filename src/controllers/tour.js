const Tour = require('../models/tour');

const getMatchesByTourName = async (req, res, next) => {
    try {
        const { name } = req.query;
        if (!name) {
            throw new Error('Missing required parameter: name');
        }

        const matches = await Tour.getMatchesByTourName({ name });
        return res.json(matches);
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getMatchesByTourName: getMatchesByTourName
}
