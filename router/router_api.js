const execute = require('./connection');
const express = require('express');
const router = express.Router();

router.get('/visita', async function(req,res){

    const {ip,fecha,hora} = req.query;

    let qry = '';

        qry = `INSERT INTO VISITORS
                (FECHA,IP,HORA) 
            VALUES 
                ('${fecha}','${ip}','${hora}');`
            
     execute.Query(res,qry);
    
});



router.post('/select_locations', async function(req,res){

    //const {empresas, anio, mes} = req.body;

    let qry = '';

        qry = `
        SELECT IDLOCATION AS CODIGO,TIPO,NOMBRE,DIRECCION,MUNICIPIO,
                DEPARTAMENTO,DESCRIPCION,LATITUD,LONGITUD,ACTIVO,
                DESDE,AREA,FOTO_LOGO,FOTO_PORTADA,FOTO_UNO,FOTO_DOS,FOTO_TRES,
                FOTO_VIDEO,TIPOPAGO,DETALLES 
        FROM LOCATIONS
        WHERE ACTIVO='SI'
        ORDER BY ORDENAMIENTO
        `
            
     execute.Query(res,qry);
    
});

router.post('/select_location', async function(req,res){

    const {codigo} = req.body;

    let qry = '';

        qry = `
        SELECT TIPO,IDLOCATION AS CODIGO,NOMBRE,DIRECCION,MUNICIPIO,
                DEPARTAMENTO,DESCRIPCION,LATITUD,LONGITUD,ACTIVO,
                TIPOPAGO, DETALLES,
                DESDE,AREA,FOTO_LOGO,FOTO_PORTADA,FOTO_UNO,FOTO_DOS,FOTO_TRES,FOTO_VIDEO 
        FROM LOCATIONS
        WHERE ACTIVO='SI' AND IDLOCATION=${codigo}
        ORDER BY ORDENAMIENTO
        `
            
     execute.Query(res,qry);
    
});




module.exports = router;

