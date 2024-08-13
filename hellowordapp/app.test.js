const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return "Hello World!"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello World!');
    });
});

describe('GET /info', () => {
    it('should return package information', async () => {
        const res = await request(app).get('/info');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('version');
        expect(res.body).toHaveProperty('description');
        expect(res.body).toHaveProperty('expressVersion');
    });
});
