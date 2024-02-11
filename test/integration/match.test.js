const request = require('supertest');
const { app } = require('../../index');

describe('Problem 2: Additional Match Information', () => {
    it('should return matches with additional information (id, startTime, format)', async () => {
        const response = await request(app).get('/sport/tour/match');

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined(); // Check if response body is defined

        // Check if the response body contains expected fields for each match
        response.body.forEach(match => {
            expect(match.id).toBeDefined(); // Check if match id is defined
            expect(match.startTime).toBeDefined(); // Check if match startTime is defined
            expect(match.format).toBeDefined(); // Check if match format is defined
        });
    });
});
