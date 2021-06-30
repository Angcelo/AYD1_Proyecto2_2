import { Component, OnInit } from '@angular/core';
import { CarritoCompra, Respuesta, Carrito, CarritoCantidad,Comprar } from 'src/app/models/modelo';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos:CarritoCompra[] = []
  mensaje:string = ""
  oculto:boolean = true
  total:number = 0
  nit:string ="";
  correo:string=""
  telefono:string=""
  nombre:string = ""

  constructor(private servicio:UsuarioService) { }

  ngOnInit(): void {
    this.getCarrito()
  }

  getTotal(){
    this.total=0;
    this.productos.forEach(p => {
      this.total += (1 - p.descuento) * p.subTotal
    })
  }

  getCarrito(){
    this.servicio.carrito(Number(this.servicio.getUsuario())).subscribe(
      res =>{
        let respuesta:Respuesta = res as Respuesta
        this.productos = respuesta.data as CarritoCompra[]
        this.getTotal()
      }
    )
  }

  ocultar(){
    this.oculto = true
  }

  modificarCantidad(producto:number,cant:number){
    let carrito:CarritoCantidad ={
      idUsuario : Number(this.servicio.getUsuario()),
      idProducto: Number(producto),
      cantidad: cant 
    }
    this.servicio.cantidadCarrito(carrito).subscribe(
      res =>{
        let respuesta:Respuesta = res as Respuesta
        this.getCarrito()
      }
    )
  }

  comprar(){
    this.oculto = true
    this.mensaje = ""
    let compra:Comprar={
      idUsuario:Number(this.servicio.getUsuario()),
      nombre:this.nombre,
      nit:this.nit,
      telefono:this.telefono,
      formaPago:'T',
      correoConfirmacion:this.correo
    }
    console.log(compra)
    this.servicio.comprar(compra).subscribe(
      res =>{
        let respuesta:Respuesta = res as Respuesta
        console.log(res)
        this.mensaje = respuesta.mensaje
        this.oculto = false
        this.getCarrito()
        this.nombre=""
        this.nit=""
        this.telefono=""
        this.correo=""
      }

    )
  }

  quitarCarrito(producto:number){
    let carrito:Carrito ={
      idUsuario : Number(this.servicio.getUsuario()),
      idProducto: Number(producto)
    }
    this.servicio.quitarCarrito(carrito).subscribe(
      res =>{
        let respuesta:Respuesta = res as Respuesta
        this.getCarrito()
      }
    )
  }

}
