const express = require('express')
const router = express.Router()
const usuarios = require('../controllers/usuario')

router.get('/',(req,res)=>{
  res.status(200).json({status:0,mensaje:'Bienvendido a la API'})
})

router.get('/usuario',usuarios.bienvenida)
router.post('/usuario/registro',usuarios.register)
router.post('/usuario/login',usuarios.login)
router.post('/usuario/addCarrito',usuarios.añadirCarrito)
router.put('/usuario/cantidadCarrito',usuarios.cantidadCarrito)
router.get('/usuario/Carrito',usuarios.Carrito)
router.delete('/usuario/quitarCarrito',usuarios.quitarCarrito)
router.post('/usuario/comprar',usuarios.Comprar)


module.exports = router