const db = require('../config/conexion')
const bcryptjs = require('bcryptjs')

exports.bienvenida = async(req,res) =>
{
  res.status(200).json({status:1,mensaje:'Seccion Usuario'})
}

exports.login = async (req,res) =>
{
  const { correoElectronico,contrasena } = req.body
  try {
    await db.connection.query
    (
      `SELECT * FROM Usuario WHERE correoElectronico='${correoElectronico.toLowerCase()}'`,
      function(error,result)
      {
        if(error) res.status(200).json({status:0,mensaje:error,data:{}})
        if(result.length==0) res.status(200).json({status:0,mensaje:"Usuario no existe"})
        if(bcryptjs.compareSync(contrasena,result[0].contrasena))
        {
          res.status(200).json({status:1,mensaje:"Ingresado con exito",data:result[0]})
        }
        else
        {
          res.status(200).json({status:0,mensaje:"Contraseña no coincide",data:{}})
        }
      }
    )
  } catch (error) {
    res.status(400).json({status:0,mensaje:error,data:{}})
  }
}

exports.register = async (req,res) =>
{
  const { nombre, apellido, dpi, correoElectronico, contrasena, direccion } = req.body
  try {
    await db.connection.query(
      `SELECT COUNT(correoElectronico) AS dupli FROM Usuario WHERE correoElectronico="${correoElectronico.toLowerCase()}"`,
      function(err,results)
      {
        if(err) res.status(400).json({status:0,mensaje:err,data:{}})
        if(results[0].dupli==0){
          contraHash = bcryptjs.hashSync(contrasena,8)
          const sql2 = `insert into Usuario (nombre, apellido, dpi, correoElectronico, contrasena, direccion) 
          values ('${nombre}','${apellido}','${dpi}','${correoElectronico.toLowerCase()}','${contraHash}','${direccion}');`
          db.connection.query(sql2, function (error, results) {
              if (error) res.status(400).json({status:0,mensaje:error,data:{}})
              res.status(200).json({status:1,mensaje:"Registado con exito",data:{}});
          })
        }else{
            res.status(200).json({status:0,mensaje:"Correo Electronico ya registrado",data:{}})
        }
      }
    )
  } catch (error) {
    res.status(400).json({status:0,mensaje:error,data:{}})
  }
}

exports.añadirCarrito = async (req,res) =>
{
  const { idUsuario,idProducto } = req.body
  try {
    db.connection.query(
      `INSERT INTO DetalleCarrito ( idUsuario,idProducto,cantidad,montoUnidad,subTotal,descuento )
      VALUES(
          ${idUsuario},
          ${idProducto},
          1,
          (SELECT precioVenta FROM Producto Where idProducto=${idProducto}),
          (SELECT precioVenta*1 FROM Producto Where idProducto=${idProducto}),
          (SELECT descuentoActual FROM Usuario Where idUsuario=${idUsuario})
      )`,
      function(err,result)
      {
        if(err) res.status(400).json({status:0,mensaje:err,data:{}})
        res.status(200).json({status:1,mensaje:"Añadido al carrito",data:{}})
      }
    )
  } catch (error) {
    res.status(400).json({status:0,mensaje:error,data:{}})
  }
}

exports.quitarCarrito = async (req,res) =>
{
  const idUsuario = req.query.idUsuario
  const idProducto = req.query.idProducto
  try {
    db.connection.query(
      `DELETE FROM DetalleCarrito WHERE idUsuario=${idUsuario} AND idProducto=${idProducto}`,
      function(err,result)
      {
        if(err) res.status(400).json({status:0,mensaje:err,data:{}})
        res.status(200).json({status:1,mensaje:"Eliminado del carrito",data:{}})
      }
    )
  } catch (error) {
    res.status(400).json({status:0,mensaje:error,data:{}})
  }
}

exports.cantidadCarrito = async (req,res) =>
{
  const { idUsuario,idProducto,cantidad } = req.body
  try {
    db.connection.query(
      `UPDATE DetalleCarrito
      SET
        cantidad = ${cantidad},
        montoUnidad = (SELECT precioVenta FROM Producto Where idProducto=${idProducto}),
        subTotal = (SELECT precioVenta*${cantidad} FROM Producto Where idProducto=${idProducto})
      where idUsuario = ${idUsuario} and idProducto = ${idProducto}`,
      function(err,result)
      {
        if(err) res.status(400).json({status:0,mensaje:err,data:{}})
        res.status(200).json({status:1,mensaje:"Cantidad actualizada",data:{}})
      }
    )
  } catch (error) {
    res.status(400).json({status:0,mensaje:error,data:{}})
  }
}

exports.Carrito = async (req,res) =>
{
  const idUsuario = req.query.idUsuario
  try {
    db.connection.query(
      `SELECT * FROM DetalleCarrito
      WHERE idUsuario = ${idUsuario}`,
      function(err,result)
      {
        if(err) res.status(400).json({status:0,mensaje:err,data:{}})
        res.status(200).json({status:1,mensaje:"ok",data:result})
      }
    )
  } catch (error) {
    res.status(400).json({status:0,mensaje:error,data:{}})
  }
}

exports.Comprar = async (req,res) =>
{
  const {idUsuario,nombre,nit,telefono,formaPago,correoConfirmacion} = req.body
  try {
    db.connection.query(
      `CALL Comprar(${idUsuario},'${nombre}','${nit}','${telefono}','${formaPago}','${correoConfirmacion}')`,
      function(err,result)
      {
        if(err) res.status(400).json({status:0,mensaje:err,data:{}})
        res.status(200).json({status:1,mensaje:"ok",data:result})
      }
    )
  } catch (error) {
    res.status(400).json({status:0,mensaje:error,data:{}})
  }
} 