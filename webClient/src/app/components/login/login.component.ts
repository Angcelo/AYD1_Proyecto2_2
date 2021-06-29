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
    
    let login:Login = {
      "correoElectronico": this.correo,
      "contrasena" : this.password
    }
    let autenticado:Respuesta
    this.servicio.loguear(login).subscribe(
      (res)=>{
        autenticado = res as Respuesta
        let respuesta:Usuario = autenticado.data 
        if (respuesta.idUsuario != 0) {  
          this.servicio.setUsuario(respuesta.idUsuario)
          this.router.navigate(['/home'])
        }
        this.oculto = false
        this.correo = ""
        this.password = ""
        console.log(this.mensaje)
      })
    
  }
}
