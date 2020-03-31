const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async () => {
        await connection.destroy();

    })

    it('should be able to creaate a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "juanerr@sadjad.com",
                whatsapp: "0665445698",
                city: "Belem",
                uf: "PA"
            })
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    })

})