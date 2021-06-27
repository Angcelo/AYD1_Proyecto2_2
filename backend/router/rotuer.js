const express = require('express')
const router = express.Router()
const usuarios = require('../controllers/usuario')

router.get('/',(req,res)=>{
  res.status(200).json({status:0,mensaje:'Bienvendido a la API'})
})

router.get('/usuario',usuarios.bienvenida)

module.exports = router