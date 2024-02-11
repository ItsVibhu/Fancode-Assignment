const request = require('supertest');
const { app } = require('../../index');

describe('GET /tour/matches', () => {
    it('should return matches for a given tour name', async () => {
        const tourName = 'Indian Premier League, 2023';
        const response = await request(app)
            .get('/tour/matches')
            .query({ name: tourName });

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should handle missing tour name parameter', async () => {
        const response = await request(app)
            .get('/tour/matches');

        expect(response.status).toBe(400);
    });
});
