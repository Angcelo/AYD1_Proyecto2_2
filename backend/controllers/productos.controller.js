const db = require('../config/conexion')

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