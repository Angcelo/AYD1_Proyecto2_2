import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  normal:boolean = true

  constructor(
    private serv: UsuarioService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.serv.getUsuario() == null || this.serv.getUsuario() == undefined || this.serv.getUsuario() == "") this.normal = false
  }

  cerrarSesion(){
    this.serv.logout()
    this.router.navigate(['/login'])
  }

}
