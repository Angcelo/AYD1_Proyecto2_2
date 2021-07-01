export interface Usuario{
    idUsuario:number,
    nombre:string,
    apellido:string,
    dpi:string,
    correoElectronico:string,
    contrasena:string,
    direccion:string,
    cantidadCompras:number,
    descuentoActual:number
}
export interface Registro{
    nombre:string,
    apellido:string,
    dpi:string,
    correoElectronico:string,
    contrasena:string,
    direccion:string
}
export interface Carrito{
    idUsuario:number,
    idProducto:number
}

export interface Comprar{
    idUsuario:number,
    nombre:string,
    nit:string,
    telefono:string,
    formaPago:string,
    correoConfirmacion:string
}

export interface Producto{
    idProducto:number,
    descripcion:string,
    precioVenta:number,
    rutaFoto:number,
    idCategoria:number
    foto?:any
}

export interface CarritoCantidad{
    idUsuario:number,
    idProducto:number,
    cantidad:number
}

export interface Login{
    correoElectronico:string,
    contrasena:string
}

export interface Respuesta{
    status:number,
    mensaje:string,
    data:any
}

export interface CarritoCompra{
    categoria:string,
    idProducto:number,
    cantidad:number,
    montoUnidad:number,
    subTotal:number,
    descuento:number,
    descripcion:string
}

export interface Categoria{
    idCategoria:number
    categoria:string
}