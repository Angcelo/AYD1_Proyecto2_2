import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login, Usuario, Registro, Carrito,CarritoCantidad,Comprar } from "../models/modelo";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URL = "http://104.198.62.172:3030/usuario/"

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

    
  loguear(user:Login){
    return this.http.post(`${this.API_URL}login`, user)
  }

  registrarUsuario(user:Registro){
    return this.http.post(`${this.API_URL}registro`, user)
  }

  addCarrito(carrito:Carrito){
    return this.http.post(`${this.API_URL}addCarrito`, carrito)
  }

  quitarCarrito(carrito: Carrito){
    return this.http.delete(`${this.API_URL}quitarCarrito/?idUsuario=${carrito.idUsuario}&idProducto=${carrito.idProducto}`)
  }
  
  cantidadCarrito(carrito2: CarritoCantidad){
    return this.http.put(`${this.API_URL}cantidadCarrito`, carrito2)
  }
  
  carrito(carrito2: number){
    return this.http.get(`${this.API_URL}Carrito/?idUsuario=${carrito2}`)
  }

  comprar(comprar: Comprar){
    return this.http.post(`${this.API_URL}comprar`,comprar)
  }

   //TO DO SET LOG ACTUAL
   setUsuario(user:number){
    localStorage.setItem("logueado",String(user))
  }

  //TO DO GET LOG ACTUAL
  getUsuario(){
    return localStorage.getItem("logueado")
  }

  //TO DO LOG OUT
  logout(){
    localStorage.removeItem("logueado")
    this.router.navigate(['/login'])
  }

}
