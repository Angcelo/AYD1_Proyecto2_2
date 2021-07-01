import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path : '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'registro',
    component : RegistroComponent
  },
  {
    path : 'carrito',
    component : CarritoComponent,
    canActivate : [UsuarioGuard]
  },
  {
    path : 'home',
    component : ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
