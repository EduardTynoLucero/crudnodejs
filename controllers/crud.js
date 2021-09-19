//Invocamos a la conexion de la DB
const conexion = require('../database/db');

//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const logro = req.body.logro;
    const titulo = req.body.titulo;
    const institucion = req.body.institucion;
    const anio = req.body.anio;
    const area = req.body.area;
    conexion.query('INSERT INTO logroacademico SET ?',{logro:logro, titulo:titulo, institucion:institucion, anio:anio, area:area}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};

//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const logro = req.body.logro;
    const titulo = req.body.titulo;
    const institucion = req.body.institucion;
    const anio = req.body.anio;
    const area = req.body.area;
    conexion.query('UPDATE logroacademico SET ? WHERE id = ?',[{logro:logro, titulo:titulo, institucion:institucion, anio:anio, area:area}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});

//ELIMINAR un REGISTRO

exports.delete = (req, res)=>{
    console.log(req.params.id)    ;
    console.log('LLEGAMOS A ELIMINAR');
    const id = req.body.id;
    conexion.query('DELETE FROM logroacademico WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    }) 
}
};