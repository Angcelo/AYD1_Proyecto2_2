import { Component, OnInit } from '@angular/core';
import { CarritoCompra, Respuesta } from 'src/app/models/modelo';
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

  constructor(private servicio:UsuarioService) { }

  ngOnInit(): void {
    this.getCarrito()
  }

  getTotal(){
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

  modificarCantidad(){
    
  }

  comprar(){
  }

  quitarCarrito(){
    
  }

}
