const db = require('../config/conexion')
const fs = require('fs')

exports.crearProducto = async (req, res) => {
    try {
        const {
            descripcion,
            precioVenta,
            rutaFoto,
            idCategoria
        } = req.body
        db.connection.query(
            `insert into Producto (descripcion, precioVenta, rutaFoto, idCategoria)
            values ('${descripcion}', ${precioVenta}, '${rutaFoto}', ${idCategoria})`,
            (err, result) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se ha podido crear el producto', data:err})
                }
                res.status(200).json({status:1, mensaje:'', data:result})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido crear el producto.', data:error})
    }
}

exports.verProductos = async (req, res) => {
    try {
        db.connection.query(
            `select * from Producto`,
            (err, rest) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se puede mostrar los productos', data:err})
                }
                res.status(200).json({status:1, mensaje:'', data:rest})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido crear el producto.', data:error})
    }
}

exports.verProductosPorCat = async (req, res) => {
    try {
        const {idCategoria} = req.query
        db.connection.query(
            `select * from Producto where idCategoria = ${idCategoria}`,
            (err, rest) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se puede mostrar los productos', data:err})
                }
                res.status(200).json({status:1, mensaje:'', data:rest})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido mostrar el producto.', data:error})
    }
}

exports.verProductosPorDesc = async (req, res) => {
    try {
        const {descripcion} = req.query
        db.connection.query(
            `select * from Producto where descripcion like '%${descripcion}%'`,
            (err, rest) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se puede mostrar los productos', data:err})
                }
                res.status(200).json({status:1, mensaje:'', data:rest})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido mostrar el producto.', data:error})
    }
}

exports.verProducto = async (req, res) => {
    try {
        const {idProducto} = req.query
        db.connection.query(
            `select * from Producto where idProducto = ${idProducto}`,
            (err, rest) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se puede mostrar los productos', data:err})
                }
                res.status(200).json({status:1, mensaje:'', data:rest})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido crear el producto.', data:error})
    }
}

exports.editarProducto = async (req, res) => {
    try {
        const {
            idProducto,
            descripcion,
            precioVenta,
            rutaFoto,
            idCategoria
        } = req.body
        db.connection.query(
            `update Producto
            set descripcion = '${descripcion}', precioVenta=${precioVenta}, idCategoria = ${idCategoria}
            where idProducto = ${idProducto}`,
            (err, result) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se ha podido editar el producto', data:err})
                }
                res.status(200).json({status:1, mensaje:'', data:result})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido editar el producto.', data:error})
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        const {idProducto} = req.query
        db.connection.query(
            `delete from Producto where idProducto = ${idProducto}`,
            (err, rest) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se puede eliminar los productos', data:err})
                }
                res.status(200).json({status:1, mensaje:'', data:rest})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido eliminar el producto.', data:error})
    }
}

exports.getImagen = async (req, res) => {
    const {idImagen} = req.query
    var url = ""
    switch(idImagen)
    {
        case '1':
        case 1:
            url = "./img/tv.txt"
            break;
        case '2':
        case 2:
            url = "./img/proyector.txt"
            break;
        case '3':
        case 3:
            url = "./img/camara.txt"
            break;
        case '4':
        case 4:
            url = "./img/reproductor.txt"
            break;
        case '5':
        case 5:
            url = "./img/bocina.txt"
            break;
        case '6':
        case 6:
            url = "./img/cine.txt"
            break;
        case '7':
        case 7:
            url = "./img/pastilla.txt"
            break;
        case '8':
        case 8:
            url = "./img/audifonos.txt"
            break;
        case '9':
        case 9:
            url = "./img/carroaudio.txt"
            break;
        case '10':
        case 10:
            url = "./img/Cseguridad.txt"
            break;
        case '11':
        case 11:
            url = "./img/alarmacarro.txt"
            break;
        case '12':
        case 12:
            url = "./img/alarmacasa.txt"
            break;
        case '13':
        case 13:
            url = "./img/cerraduraI.txt"
            break;
        case '14':
        case 14:
            url = "./img/cerradura.txt"
            break;
        case '15':
        case 15:
            url = "./img/laptop.txt"
            break;
        case '16':
        case 16:
            url = "./img/computadora.txt"
            break;
        case '17':
        case 17:
            url = "./img/servidor.txt"
            break;
        case '18':
        case 18:
            url = "./img/mouse.txt"
            break;
    }
    if(url != "")
    {
        try {   
            var archivo = fs.readFileSync(url)
            res.status(200).json({status:1,mensaje:"ok",data:archivo.toString()})
        } catch (error) {
            res.status(400).json({status:0,mensaje:"Error de ruta",data:{}})
        }
    }
    else
    {
        res.status(400).json({status:0,mensaje:"Error de ruta",data:{}})
    }
}