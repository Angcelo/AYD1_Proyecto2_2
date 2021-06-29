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

export interface Login{
    correoElectronico:string,
    contrasena:string
}
