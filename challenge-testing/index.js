class CarritoCompra {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularTotal() {
      return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
  
    aplicarDescuento(porcentaje) {
        const totalConDescuento = this.calcularTotal() * (1 - porcentaje / 100);
        return totalConDescuento;
    }
    
}    

module.exports =CarritoCompra;

// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.