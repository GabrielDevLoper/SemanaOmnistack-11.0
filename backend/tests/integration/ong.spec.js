const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('ONG', () => {

    afterAll(() => {
        connection.destroy();
    })
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"APAD3",
            email:"apad3@hotmail.com",
            whatsapp:"82981029294",
            city:"Maceió",
            uf:"AL"
        });

        expect(response.body.id).toHaveLength(8);
       
    });
})