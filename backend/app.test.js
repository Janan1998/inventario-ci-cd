const request = require('supertest');
const app = require('./app');

test('POST crea producto', async () => {

    const respuesta = await request(app)
        .post('/api/productos')
        .send({
            sku: 'A-003',
            nombre: 'Teclado',
            stock: 5
        });

    expect(respuesta.status).toBe(201);

});