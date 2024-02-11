const mysql = require('../lib/mysql');

const getAllSportsToursAndMatches = async () => {
    const statement = `
        SELECT s.name as sportName, t.name as tourName, m.id as matchId, 
               m.name as matchName, m.startTime, m.format
        FROM matches m 
        INNER JOIN tours t ON m.tourId = t.id 
        INNER JOIN sports s ON t.sportId = s.id
    `;
    const parameters = [];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches
}
