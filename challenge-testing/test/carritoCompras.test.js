const CarritoCompra = require("../index")


describe('CarritoCompra', () => {

  test('inicializa el carrito como un array vacío', () => {
    const carrito = new CarritoCompra();
    expect(carrito.productos).toEqual([]);
  });

  
  test('agrega un producto al carrito', () => {
    const carrito = new CarritoCompra();
    const producto = { nombre: 'Producto', precio: 10 };
    carrito.agregarProducto(producto);
    expect(carrito.productos).toContainEqual(producto);
  });

  test('agrega múltiples productos al carrito', () => {
    const carrito = new CarritoCompra();
    const productos = [
      { nombre: 'Producto1', precio: 10 },
      { nombre: 'Producto2', precio: 20 }
    ];
    productos.forEach(producto => carrito.agregarProducto(producto));
    expect(carrito.productos.length).toBe(2);
  });

  
  test('calcula correctamente el total de la compra', () => {
    const carrito = new CarritoCompra();
    const productos = [
      { nombre: 'Producto1', precio: 10 },
      { nombre: 'Producto2', precio: 20 }
    ];
    productos.forEach(producto => carrito.agregarProducto(producto));
    expect(carrito.calcularTotal()).toBe(30);
  });

  test('aplica correctamente un descuento al total de la compra', () => {
    const carrito = new CarritoCompra();
    const productos = [
      { nombre: 'Producto1', precio: 10 },
      { nombre: 'Producto2', precio: 20 }
    ];
    productos.forEach(producto => carrito.agregarProducto(producto));
    carrito.aplicarDescuento(10);
    expect(carrito.calcularTotal()).toBe(27);
  });
  
});
