let root_datos_proyecto = document.getElementById('root_datos_proyecto');

function get_detalles_proyecto(data){

    get_tab('tres');

    let card_proyecto = `
    <div class="card card-rounded shadow p-4">
        <div class="card-header bg-white text-center">
            <h4>${data.NOMBRE}</h4>
            <small class="text-secondary">${data.DIRECCION},${data.MUNICIPIO}</small>
            <button class="btn btn-info hand" onclick="F.gotoGoogleMaps('${data.LATITUD}','${data.LONGITUD}')">
                <i class="lni lni-map-marker"></i> Ver en Google Maps
            </button>
        </div>
        <div class="card-body">
            <img src="./img/proyectos/001.png">
            <img src="./img/proyectos/001.png">
            <img src="./img/proyectos/001.png">
        </div>
    </div>
    `

    root_datos_proyecto.innerHTML = card_proyecto;

}

function get_data_proyecto(data){


  

};