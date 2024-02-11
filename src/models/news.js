const mysql = require('../lib/mysql');

const createNews = async (news) => {
    const statement = 'INSERT INTO news (title, description, matchId, tourId, sportId) VALUES (?, ?, ?, ?, ?)';
    const { title, description, matchId, tourId, sportId } = news;
    const parameters = [title, description, matchId, tourId, sportId];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async (matchId) => {
    const statement = 'SELECT * FROM news WHERE matchId = ?';
    const parameters = [matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async (tourId) => {
    const statement = 'SELECT * FROM news WHERE tourId = ?';
    const parameters = [tourId];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async (sportId) => {
    const statement = 'SELECT * FROM news WHERE sportId = ?';
    const parameters = [sportId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNews,
    getNewsByMatchId,
    getNewsByTourId,
    getNewsBySportId
};
