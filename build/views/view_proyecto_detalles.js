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
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="card card-rounded border-especial shadow p-4" id="card_detalle">
                <div class="card-body bg-white text-center">
                    <h4 class="text-danger">${nombre}</h4>
                    <small class="text-secondary">${direccion}, ${municipio}</small>
                    <hr class="solid">
                    <div class="row">
                        <div class="col-4">
                            <button class="btn btn-success hand col-12" onclick="F.gotoGoogleMaps('${latitud}','${longitud}')">
                                <i class="lni lni-map-marker"></i> Google Maps
                            </button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-info hand col-12" onclick="F.gotoWaze('${latitud}','${longitud}')">
                                <i class="lni lni-map-marker"></i> WAZE
                            </button>
                        </div>
                        <div class="col-4">
                            <a class="btn btn-danger hand col-12" href="https://api.whatsapp.com/send/?phone=50257255092&text=Hola+Burgos+State+%21%21+quisiera+informaci%C3%B3n+sobre+${nombre}%21%21&type=phone_number&app_absent=0" target="_blank">
                                <i class="lni lni-whatsapp"></i> Más información
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="card card-rounded border-especial shadow p-4" id="card_detalle2">
                
                <div class="card-body">
                    <div class="row p-2">
                        <div class="col-12" id="cp_intro">
                            <img class="card-rounded shadow" src="./img/proyectos/001.png" onclick="F.expandir('cp_intro')">
                        </div>
                    </div>

                    <div class="row p-2">
                        <div class="col-6" id="cp_1">
                            <img class="card-rounded shadow" src="./img/proyectos/001.png" onclick="F.expandir('cp_1')">
                        </div>
                        <div class="col-6" id="cp_2">
                            <img class="card-rounded shadow" src="./img/proyectos/001.png" onclick="F.expandir('cp_2')">
                        </div>
                    </div>

                    <div class="row">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/sK9PKwGqp5A?si=0hvdoXLqV160mdcK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    
                </div>
            </div>
        </div>
    `

    return card;

};
