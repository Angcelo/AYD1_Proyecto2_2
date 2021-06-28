var {app} = require('../index')
//var chai = require('chai');
var expect = require('chai').expect;
var supertest = require('supertest');
var server = supertest.agent("https://localhost:3030");
var request = require('supertest');


var loginData =
{
  correoElectronico:'josuedanielguzman@gmail.com',
  contrasena:"12345678"
}

var registroData =
{ 
  nombre:"Angel", 
  apellido:"Marroquin", 
  dpi:"3512337680403", 
  correoElectronico:"marroquin.a14037@gmail.com ", 
  contrasena:"M12345678", 
  direccion:"Una direccion" 
}

var Carrito = 
{
  idUsuario:2,
  idProducto:1,
  cantidad:2,
}

var idProducto = 1;
var idCategoria = 1;
var descripcion = "hp";

var assert = require('assert')
describe('API',function(){
  describe('Ciudadano',function(){
    it('POST /usuario/login',(done)=>{
      request(app.listen())
      .post('/usuario/login')
      .send(loginData)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    // it('POST /usuario/registro',(done)=>{
    //   request(app.listen())
    //   .post(`/usuario/registro`)
    //   .send(registroData)
    //   .expect(200)
    //   .end(function(err,res){
    //     console.log(res.status)
    //     var respuesta = JSON.parse(res.res.text)
    //     expect(respuesta.status).to.equal(1)
    //     done(err)
    //   })
    // })

    it('POST /usuario/addCarrito',(done)=>{
      request(app.listen())
      .post(`/usuario/addCarrito`)
      .send(Carrito)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    it('PUT /usuario/cantidadCarrito',(done)=>{
      request(app.listen())
      .put(`/usuario/cantidadCarrito`)
      .send(Carrito)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    it('GET /usuario/Carrito',(done)=>{
      request(app.listen())
      .get(`/usuario/Carrito?idUsuario=${Carrito.idUsuario}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    it('DELETE /usuario/quitarCarrito',(done)=>{
      request(app.listen())
      .delete(`/usuario/quitarCarrito?idUsuario=${Carrito.idUsuario}&idProducto=${Carrito.idProducto}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })
  })
  
  describe('Producto',function(){

    it('GET catprod/categorias',(done)=>{
      request(app.listen())
      .get(`/catprod/categorias`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    it('GET catprod/categoria',(done)=>{
      request(app.listen())
      .get(`/catprod/categoria?idCategoria=${idCategoria}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    it('GET catprod/productos',(done)=>{
      request(app.listen())
      .get(`/catprod/productos`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    it('GET catprod/productoscategoria',(done)=>{
      request(app.listen())
      .get(`/catprod/productoscategoria?idCategoria=${idCategoria}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    it('GET catprod/productosdescripcion',(done)=>{
      request(app.listen())
      .get(`/catprod/productosdescripcion?descripcion=${descripcion}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

    it('GET catprod/producto',(done)=>{
      request(app.listen())
      .get(`/catprod/producto?idProducto=${idProducto}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done(err)
      })
    })

  })

})

