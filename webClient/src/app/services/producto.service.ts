import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Categoria, Producto } from "../models/modelo";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_URL = "http://104.198.250.129:3030/catprod/"

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  getProductos(){
    return this.http.get(`${this.API_URL}productos`)
  }

  getCategoria(){
    return this.http.get(`${this.API_URL}categorias`)
  }

  buscarProductoCat(idCat:number){
    return this.http.get(`${this.API_URL}productoscategoria?idCategoria=${idCat}`)
  }

  buscarProducto(descripcion:string){
    return this.http.get(`${this.API_URL}productosdescripcion?descripcion=${descripcion}`)
  }

  getImg(id:number){
    return this.http.get(`${this.API_URL}imagen?idImagen=${id}`)
  }

}
