const News = require('../models/news');

const createNews = async (req, res, next) => {
    try {
        const { title, description, matchId, tourId, sportId } = req.body;
        const news = { title, description, matchId, tourId, sportId };
        const result = await News.createNews(news);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const getNewsByMatchId = async (req, res, next) => {
    try {
        const matchId = req.params.matchId;
        const result = await News.getNewsByMatchId(matchId);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const getNewsByTourId = async (req, res, next) => {
    try {
        const tourId = req.params.tourId;
        const result = await News.getNewsByTourId(tourId);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const getNewsBySportId = async (req, res, next) => {
    try {
        const sportId = req.params.sportId;
        const result = await News.getNewsBySportId(sportId);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNews,
    getNewsByMatchId,
    getNewsByTourId,
    getNewsBySportId
};
