const express = require('express');
const router = express.Router();
const News = require('../controllers/news');

router.post('/', async (req, res, next) => {
    try {
        const { title, description, matchId, tourId, sportId } = req.body;
        const news = { title, description, matchId, tourId, sportId };
        const result = await News.createNews(news);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.get('/match/:matchId', async (req, res, next) => {
    try {
        const matchId = req.params.matchId;
        const result = await News.getNewsByMatchId(matchId);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.get('/tour/:tourId', async (req, res, next) => {
    try {
        const tourId = req.params.tourId;
        const result = await News.getNewsByTourId(tourId);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.get('/sport/:sportId', async (req, res, next) => {
    try {
        const sportId = req.params.sportId;
        const result = await News.getNewsBySportId(sportId);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;