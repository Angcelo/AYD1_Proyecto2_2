import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from "../models/modelo";

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
