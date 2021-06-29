import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UsuarioGuard } from 'src/app/guards/usuario.guard';
import { Categoria, Producto, Respuesta,Carrito} from 'src/app/models/modelo';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductoService } from 'src/app/services/producto.service';

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
  descripcion:string=""
  inicio:number = 0
  final:number = 10
  oculto : boolean = false

  constructor(
    private serv:UsuarioService,
    private servProducto:ProductoService,
    private _sanitizer:DomSanitizer,
    ) { }

  ngOnInit(): void {
    if(this.serv.getUsuario() == null || this.serv.getUsuario() == undefined || this.serv.getUsuario() == "") this.oculto = true 
    this.getProductos()
    this.servProducto.getCategoria().subscribe(
      (res)=>{
        let cat:Respuesta
        console.log(res)
        cat = res as Respuesta
        this.categorias = this.categorias.concat(cat.data);
      }
    )

  }

  cambiarPagina(e:PageEvent):void{
    this.inicio = e.pageIndex * e.pageSize
    this.final = this.inicio + e.pageSize
  }

  anadirCarrito(producto:number){
    let carrito:Carrito={
      idUsuario:Number(this.serv.getUsuario()),
      idProducto:Number(producto)
    }
    this.serv.addCarrito(carrito).subscribe(
      (res)=>{
        let cat:Respuesta
        console.log(res)
        cat = res as Respuesta
        this.categorias = this.categorias.concat(cat.data);
      }
    )
  }

  buscar(){
    if(this.categoria == 0){
      this.getProductos()
    }else{
      this.servProducto.buscarProductoCat(this.categoria).subscribe(
        (res)=>{
          let cat:Respuesta
          console.log(res)
          cat = res as Respuesta
          this.productos = cat.data;
        }
      )
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

  getProductos():void{
    let producto:Respuesta
    this.servProducto.getProductos().subscribe(
      (res)=>{
        console.log(res)
        producto = res as Respuesta
        this.productos = producto.data
      }
    )
  }
  buscarProducto():void{
    let producto:Respuesta
    this.servProducto.buscarProducto(this.descripcion).subscribe(
      (res)=>{
        console.log(res)
        producto = res as Respuesta
        this.productos = producto.data
      }
    )
  }

  
}
