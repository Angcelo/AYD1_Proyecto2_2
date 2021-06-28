const express = require('express')
var catprod = express.Router()
const categorias = require('../controllers/categorias.controller')
const productos = require('../controllers/productos.controller')

catprod.get('/categorias', categorias.verCategorias)
catprod.get('/categoria',  categorias.verCategoria)
catprod.post('/categoria', categorias.crearCategoria)
catprod.put('/categoria', categorias.editarCategoria)
catprod.delete('/categoria', categorias.eliminarCategoria)

catprod.get('/productos', productos.verProductos)
catprod.get('/productoscategoria', productos.verProductosPorCat)
catprod.get('/productosdescripcion', productos.verProductosPorDesc)
catprod.get('/producto',  productos.verProducto)
catprod.post('/producto', productos.crearProducto)
catprod.put('/producto', productos.editarProducto)
catprod.delete('/producto', productos.eliminarProducto)

module.exports = catprod