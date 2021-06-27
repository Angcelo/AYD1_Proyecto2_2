var {app} = require('../src/app')
//var chai = require('chai');
var expect = require('chai').expect;
var supertest = require('supertest');
var server = supertest.agent("https://localhost:8080");
var request = require('supertest');


var loginData =
{
  usuario:'dambricia',
  contrasena:"123456789"
}

var idUsuario = undefined;

var idReporte = 7;

var assert = require('assert')
describe('API',function(){
  describe('Ciudadano',function(){

    it('POST /ciudadano/login',(done)=>{
      request(app.listen())
      .post('/ciudadano/login')
      .send(loginData)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done()
      })
    })

    it('GET /ciudadano/imagenes',(done)=>{
      request(app.listen())
      .get(`/ciudadano/imagenes?idReporte=${idReporte}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done()
      })
    })

    it('GET /ciudadano/notificaciones',(done)=>{
      request(app.listen())
      .get(`/ciudadano/notificaciones?id=${idUsuario}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(respuesta.status).to.equal(1)
        done()
      })
    })

  })
  
  describe('Empleado',function(){

    it('GET empleado/reportes',(done)=>{
      request(app.listen())
      .get(`/ciudadano/reportes?id=${idUsuario}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.status).to.equal(1)
        done()
      })
    })

    it('Get empleado/mensaje',(done)=>{
      request(app.listen())
      .get(`/empleado/mensajes${idReporte}`)
      .expect(200)
      .end(function(err,res){
        console.log(res.status)
        var respuesta = JSON.parse(res.res.text)
        expect(res.status).to.equal(200)
        expect(respuesta.length).to.gt(0)
        done()
      })
    })

  })

})

