let root_datos_proyecto = document.getElementById('root_datos_proyecto');

function get_detalles_proyecto(data){

    get_tab('tres');

    
    root_datos_proyecto.innerHTML = card_proyecto(`${data.NOMBRE}`,`${data.DIRECCION}`,`${data.MUNICIPIO}`,`${data.LATITUD}`,`${data.LONGITUD}`);

    document.getElementById('btnAtrasUno').style="visibility:hidden";
    document.getElementById('btnAtrasDos').style="visibility:visible";

    location.hash = "#card_detalle";
    location.hash = '';
}

function get_detalles_proyecto_card(nombre,direccion,municipio,latitud,longitud){

    get_tab('tres');

    let card = card_proyecto(nombre,direccion,municipio,latitud,longitud)
    root_datos_proyecto.innerHTML = card;

    document.getElementById('btnAtrasUno').style="visibility:visible";
    document.getElementById('btnAtrasDos').style="visibility:hidden";

    location.hash = "#card_detalle";
    location.hash = '';
}


function card_proyecto(nombre,direccion,municipio,latitud,longitud){

    let card = '';
    card = `
    <div class="card card-rounded shadow p-4" id="card_detalle">
        <div class="card-header bg-white text-center">
            <h4>${nombre}</h4>
            <small class="text-secondary">${direccion}, ${municipio}</small>
            <br>
            <div class="row">
                <div class="col-6">
                    <button class="btn btn-success hand" onclick="F.gotoGoogleMaps('${latitud}','${longitud}')">
                        <i class="lni lni-map-marker"></i> Ver en Google Maps
                    </button>
                </div>
                <div class="col-6">
                    <button class="btn btn-info hand" onclick="F.gotoWaze('${latitud}','${longitud}')">
                        <i class="lni lni-map-marker"></i> Ver en WAZE
                    </button>
                </div>
            </div>
            
        </div>
        <div class="card-body">
            <img src="./img/proyectos/001.png">
            <img src="./img/proyectos/001.png">
            <img src="./img/proyectos/001.png">
        </div>
    </div>
    `

    return card;

};
