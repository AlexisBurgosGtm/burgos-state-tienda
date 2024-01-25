const execute = require('./connection');
const express = require('express');
const router = express.Router();



router.post('/select_locations', async function(req,res){

    //const {empresas, anio, mes} = req.body;

    let qry = '';

        qry = `
        SELECT IDLOCATION,TIPO,CODIGO,NOMBRE,DIRECCION,MUNICIPIO,
                DEPARTAMENTO,DESCRIPCION,LATITUD,LONGITUD,ACTIVO,
                DESDE,AREA,FOTO_LOGO,FOTO_PORTADA,FOTO_UNO,FOTO_DOS,FOTO_VIDEO 
        FROM LOCATIONS
        WHERE ACTIVO='SI'
        `
            
     execute.Query(res,qry);
    
});




module.exports = router;

