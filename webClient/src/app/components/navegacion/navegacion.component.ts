import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  normal:boolean = true

  constructor(private serv: UsuarioService) { }

  ngOnInit(): void {
    if(this.serv.getUsuario() == null || this.serv.getUsuario() == undefined || this.serv.getUsuario() == "") this.normal = false
  }

}
