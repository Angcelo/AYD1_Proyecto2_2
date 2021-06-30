import { Component, OnInit } from '@angular/core';
import { Registro, Respuesta } from "../../models/modelo";
import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre:string = ""
  apellido:string = ""
  dpi:string = ""
  correo:string = ""
  contrasena:string = ""
  direccion:string = ""
  oculto:boolean = true
  mensaje:string = ""
  clase:string = "success"
  constructor(
    private servicio:UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  registrar():void{
    this.oculto = true
    this.mensaje = ""
    this.clase = "success"
    if (!this.validarcontrasena()) {
      this.clase = "danger"
      this.oculto = false
      return
    }
    let registrar:Registro = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "dpi": this.dpi,
      "correoElectronico":this.correo,
      "contrasena":this.contrasena,
      "direccion":this.direccion
    }
    let respuesta:Respuesta
    console.log(registrar)
    this.servicio.registrarUsuario(registrar).subscribe(
      (res)=>{
        respuesta = res as Respuesta
        this.mensaje = respuesta.mensaje
        console.log(respuesta)
        this.nombre = ""
        this.contrasena = ""
        this.direccion = ""
        this.dpi = ""
        this.correo = ""
        this.apellido = ""
        this.oculto = false

      })
  }

  validarcontrasena():boolean{
    if (this.contrasena.length < 8)this.mensaje = "La contraseña no puede ser menor a 8 caracteres"
    else{
      for (let index = 0; index < this.contrasena.length; index++) {
        if(!isNaN(Number(this.contrasena.charAt(index)))) return true
      }
      this.mensaje = "La contraseña debe ser alfanumerica"
    }
    return false
  }

  ocultar(){
    this.oculto = true
  }
}
