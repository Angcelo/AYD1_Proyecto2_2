import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: '/login',
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
    component : CarritoComponent
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
