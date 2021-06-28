const db = require('../config/conexion')

exports.crearCategoria = async (req, res) => {
    try {
        const {
            categoria
        } = req.body

        db.connection.query(
            `insert into Categoria (categoria)
            values ('${categoria}')`,
            (err, result) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se ha podido crear la categoria.', data:err})
                }

                res.status(200).json({status:1, mensaje:'Categoría añadida', data:result})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido crear la categoria.', data:error})
    }
}

exports.verCategorias = async (req, res) => {
    try {
        db.connection.query(
            `select * from Categoria`,
            (err, result) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'Error al ver categoría', data:error})
                }

                res.status(200).json({status:1, mensaje:'Categoría añadida', data:result})
            }
        )
    } catch (error) {
        console.log(error);
        res.send(400).json({status:0, mensaje:'Error al ver categoria.', data:error})
    }
}

exports.verCategoria = async (req, res) => {
    try {
        const {idCategoria} = req.query
        db.connection.query(
            `select * from Categoria where idCategoria=${idCategoria}`,
            (err, result) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se ha podido ver la cateoria.', data:err})
                }

                res.status(200).json({status:1, mensaje:'Categoría añadida', data:result})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido ver la categoria.', data:error})
    }
}

exports.editarCategoria = async (req, res) => {
    try {
        const {
            idCategoria,
            categoria
        } = req.body
        db.connection.query(
            `update Categoria set categoria = '${categoria}' where idCategoria=${idCategoria}`,
            (err, result) =>{
                if (err){
                    console.log(err)
                    res.status(400).json({status:0, mensaje:'No se ha podido editar la categoría', data:err})
                } 
                res.status(400).json({status:1, mensaje:'', data:result})
            }
        )
    } catch (error) {
        res.status(400).json({status:0, mensaje:'No se ha podido editar la categoría', data:error})
    }
}

exports.eliminarCategoria = async (req, res) => {
    try {
        const {idCategoria} = req.query
        db.connection.query(
            `delete from Categoria where idCategoria = ${idCategoria}`,
            (err, rest) => {
                if (err){
                    console.log(err);
                    res.status(400).json({status:0, mensaje:'No se puede eliminar la categoria', data:err})
                }
                res.status(200).json({status:1, mensaje:'', data:rest})
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({status:0, mensaje:'No se ha podido eliminar la categoria.', data:err})
    }
}