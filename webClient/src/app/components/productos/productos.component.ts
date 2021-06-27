import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

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

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPagina(e:PageEvent):void{
    console.log(e)
    this.inicio = e.pageIndex * e.pageSize
    this.final = this.inicio + e.pageSize
  }
}
