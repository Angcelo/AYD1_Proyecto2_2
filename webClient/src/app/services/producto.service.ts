import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Producto } from "../models/modelo";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_URL = "http://localhost:3030/catprod/"

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


}
