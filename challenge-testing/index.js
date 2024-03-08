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
      
      this.productos.forEach(producto => {
        producto.precio -= (producto.precio * porcentaje / 100);
      });
    }
    
}    

module.exports =CarritoCompra;

// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.