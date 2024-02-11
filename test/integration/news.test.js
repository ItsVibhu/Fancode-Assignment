const request = require('supertest');
const { app } = require('../../index');

describe('Problem 3: News Support', () => {
    describe('POST /news', () => {
        it('should create a news article for a match', async () => {
            const newNews = {
                title: 'Exciting Match Ahead',
                description: 'Get ready for an exhilarating match!',
                matchId: 1,
                tourId: 1,
                sportId: 1
            };

            const response = await request(app)
                .post('/news')
                .send(newNews);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('insertId');
        });
    });

    describe('GET /news/match/:matchId', () => {
        it('should fetch news articles by match id', async () => {
            const matchId = 1;

            const response = await request(app).get(`/news/match/${matchId}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(1); // Assuming only one news article for this match
        });
    });

    describe('GET /news/tour/:tourId', () => {
        it('should fetch news articles by tour id', async () => {
            const tourId = 1;

            const response = await request(app).get(`/news/tour/${tourId}`);

            expect(response.status).toBe(200);
            expect(response.body).not.toHaveLength(0); // Assuming there are news articles for this tour
        });
    });

    describe('GET /news/sport/:sportId', () => {
        it('should fetch news articles by sport id', async () => {
            const sportId = 1;

            const response = await request(app).get(`/news/sport/${sportId}`);

            expect(response.status).toBe(200);
            expect(response.body).not.toHaveLength(0); // Assuming there are news articles for this sport
        });
    });
});
