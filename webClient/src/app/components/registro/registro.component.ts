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
  contrasena2:string = ""
  direccion:string = ""
  constructor(
    private servicio:UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  registrar():void{
    let registrar:Registro = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "dpi": this.dpi,
      "correoElectronico":this.correo,
      "contrasena":this.contrasena,
      "direccion":this.direccion
    }
    let respuesta:Respuesta
    this.servicio.loguear(registrar).subscribe(
      (res)=>{
        respuesta = res as Respuesta
        console.log(respuesta.status)
        console.log(respuesta.mensaje)
        this.nombre=""
        this.contrasena=""
        this.direccion = ""
        this.dpi= ""
        this.correo = ""
        this.apellido = ""
      })
  }
}
