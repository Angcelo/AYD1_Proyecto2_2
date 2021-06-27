const db = require('../config/conexion')

exports.bienvenida = async(req,res) =>
{
  res.status(200).json({status:1,mensaje:'Seccion Usuario'})
}