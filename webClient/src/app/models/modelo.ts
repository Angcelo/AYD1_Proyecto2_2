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
export interface carrito{
    idUsuario:number,
    idProducto:number
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