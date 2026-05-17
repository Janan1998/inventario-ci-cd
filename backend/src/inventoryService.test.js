const { crearProducto } = require('./inventoryService');

test('crea producto correctamente', () => {

    const prod = crearProducto({
        sku: 'A-001',
        nombre: 'Cable HDMI'
    });

    expect(prod.stock).toBe(0);

});