import { Component, OnInit } from '@angular/core';
import { Login, Respuesta, Usuario } from "../../models/modelo";
import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string = ""
  password:string = ""
  oculto:boolean = true
  mensaje:string = ""
  
  constructor(
    private servicio:UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  loguear():void{
    this.oculto = true
    this.mensaje = ""
    let login:Login = {
      "correoElectronico": this.correo,
      "contrasena" : this.password
    }
    let autenticado:Respuesta
    this.servicio.loguear(login).subscribe(
      (res)=>{
        autenticado = res as Respuesta
        let respuesta:Usuario = autenticado.data 
        if (respuesta.idUsuario != 0 && autenticado.status == 1) {  
          this.servicio.setUsuario(respuesta.idUsuario)
          this.router.navigate(['/home'])
        }
        this.correo = ""
        this.password = ""
        this.mensaje = autenticado.mensaje
        this.oculto = false
        console.log(this.mensaje)
      })
    
  }

  ocultar(){
    this.oculto = true
  }
}
