import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioGuard } from 'src/app/guards/usuario.guard';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any[] = [
    {
      idproducto : 1,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 2,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 3,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 4,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 5,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 6,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 7,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 8,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 9,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 10,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 11,
      descripcion : "Moto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 12,
      descripcion : "Moto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 13,
      descripcion : "Moto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 14,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 15,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 16,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 17,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 18,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 19,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    },
    {
      idproducto : 20,
      descripcion : "Auto control remoto",
      precioVenta: 56.25
    }
  ]

  inicio:number = 0
  final:number = 10
  oculto : boolean = false

  constructor(
    private serv:UsuarioService
    ) { }

  ngOnInit(): void {
    if(this.serv.getUsuario() == null || this.serv.getUsuario() == undefined || this.serv.getUsuario() == "") this.oculto = true
  }

  cambiarPagina(e:PageEvent):void{
    this.inicio = e.pageIndex * e.pageSize
    this.final = this.inicio + e.pageSize
  }
}
