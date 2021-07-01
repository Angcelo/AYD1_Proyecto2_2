import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor(private serv:UsuarioService, private router:Router){}
  canActivate(){
    if (this.serv.getUsuario() != undefined || this.serv.getUsuario() != null){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    } 
  }
  
}
