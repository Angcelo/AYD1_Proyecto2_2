import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UsuarioGuard } from 'src/app/guards/usuario.guard';
import { Categoria, Producto } from 'src/app/models/modelo';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = []
  categorias:Categoria[] = [
    {
      idCategoria:0,
      categoria:"todos"
    }
  ]
  categoria:number = 0

  inicio:number = 0
  final:number = 10
  oculto : boolean = false

  constructor(
    private serv:UsuarioService,
    private _sanitizer:DomSanitizer,
    ) { }

  ngOnInit(): void {
    if(this.serv.getUsuario() == null || this.serv.getUsuario() == undefined || this.serv.getUsuario() == "") this.oculto = true

  }

  cambiarPagina(e:PageEvent):void{
    this.inicio = e.pageIndex * e.pageSize
    this.final = this.inicio + e.pageSize
  }

  anadirCarrito(){

  }

  buscar(){
    if(this.categoria == 0){

    }else{
      
    }
  }

  crearRuta(contenido:string):SafeUrl{
    var split = contenido.split(',')
    var splitData = split[0].includes('png') ? 'image/png' : 'image/jpeg'

    const blob:Blob = this.b64ToBlob(split[1], splitData  );
    const blobUrl = URL.createObjectURL(blob);
    return this._sanitizer.bypassSecurityTrustUrl(blobUrl);
  }

  b64ToBlob(b64Data:string, contentType='image/png', sliceSize=512):Blob {
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }
}
