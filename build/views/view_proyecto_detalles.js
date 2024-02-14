let root_datos_proyecto = document.getElementById('root_datos_proyecto');

function get_detalles_proyecto(data){

    get_tab('tres');

    
    root_datos_proyecto.innerHTML = card_proyecto(`${data.CODIGO}`,`${data.NOMBRE}`,`${data.DIRECCION}`,`${data.MUNICIPIO}`,`${data.LATITUD}`,`${data.LONGITUD}`,`${data.DESDE}`,`${data.AREA}`,`${data.FOTO_LOGO}`,`${data.FOTO_PORTADA}`,`${data.FOTO_UNO}`,`${data.FOTO_DOS}`,`${data.FOTO_VIDEO}`);

    document.getElementById('btnAtrasUno').style="visibility:hidden";
    document.getElementById('btnAtrasDos').style="visibility:visible";

    location.hash = "#card_detalle";
    location.hash = '';
    
 
    F.initHeroSlides();
    

};

function get_detalles_proyecto_card(codigo,nombre,direccion,municipio,latitud,longitud,desde,area,foto_logo,foto_portada,foto_uno,foto_dos,foto_video){

    get_tab('tres');

    let card = card_proyecto(codigo,nombre,direccion,municipio,latitud,longitud,desde,area,foto_logo,foto_portada,foto_uno,foto_dos,foto_video)
    root_datos_proyecto.innerHTML = card;

    document.getElementById('btnAtrasUno').style="visibility:visible";
    document.getElementById('btnAtrasDos').style="visibility:hidden";

    location.hash = "#card_detalle";
    location.hash = '';

    
    
    F.initHeroSlides();

};



function BACKUP_card_proyecto(codigo,nombre,direccion,municipio,latitud,longitud,desde,area,foto_logo,foto_portada,foto_uno,foto_dos,foto_video){

    let card = '';

    let tipodispositivo = F.detectarPc();
    
    console.log('dispositivo:')
    console.log(tipodispositivo)

    if(tipodispositivo=='PC'){
        card = `
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="card card-rounded border-especial shadow p-2" id="card_detalle">
                <div class="card-body bg-white text-center">
                    
                    <div class="row">
                        <div class="col-3">
                            <img src="${foto_logo}" width="110px" height="85px">
                        </div>
                        <div class="col-9">
                            <h4 class="text-danger">${nombre}</h4>
                            <small class="text-secondary">${direccion}, ${municipio}</small>
                            <br>
                            <small class="text-info negrita">Precios desde ${F.setMoneda(desde,'Q')}</small>
                        </div>
                    </div>
                    <div class="row">
                        <br>
                        <small class="text-danger negrita">Agenda tu visita, será un enorme gusto llevarte personalmente a conocer la mejor opción para ti!!</small>
                    </div>
                    
                    
                    <hr class="solid">
                    <div class="row">
                        <div class="col-12">
                            <a class="animate__animated animate__zoomInLeft btn btn-danger hand col-12" href="https://api.whatsapp.com/send/?phone=50239160727&text=Hola+Burgos+State+%21%21+quisiera+informaci%C3%B3n+sobre+${nombre}%21%21&type=phone_number&app_absent=0" target="_blank">
                                <i class="lni lni-whatsapp"></i> Escríbenos para una visita guiada!!
                            </a>
                        </div>
                    </div>
                    <br><br>
                    <div class="row">
                        <iframe width="560" height="315" 
                        src="${F.limpiarUrlYoutube(foto_video)}" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="card card-rounded border-especial shadow p-2" id="card_detalle2">
                
                <div class="card-body">
                    <div class="row">
                        <div class="col-12" id="cp_intro" >
                            <img width="100%" height="100%" class="card-rounded shadow" 
                            src="${foto_portada}">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12" id="cp_intro" >
                            <img width="100%" height="100%" class="card-rounded shadow" 
                            src="${foto_uno}">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12" id="cp_intro" >
                            <img width="100%" height="100%" class="card-rounded shadow" 
                            src="${foto_dos}">
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>

    
        `;
    }else{
        card = `
        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-especial shadow p-2" id="card_detalle">
                <div class="card-body bg-white text-center">
                    <img src="${foto_logo}" width="60px" height="45px">
                    <h4 class="text-danger">${nombre}</h4>
                    <small class="text-secondary">${direccion}, ${municipio}</small>
                    <br>
                    <small class="text-info">Precios desde ${F.setMoneda(desde,'Q')}</small>
                    <hr class="solid">
                    <div class="row">
                        <div class="col-12">
                            <a class="animate__animated animate__zoomInLeft btn btn-danger hand col-12" href="https://api.whatsapp.com/send/?phone=50239160727&text=Hola+Burgos+State+%21%21+quisiera+informaci%C3%B3n+sobre+${nombre}%21%21&type=phone_number&app_absent=0" target="_blank">
                                <i class="lni lni-whatsapp"></i> Escríbenos para una visita guiada!!
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div class="card card-rounded border-especial shadow p-2" id="card_detalle2">
                
                <div class="card-body">
                   
                    <div class="row">
                        <div class="col-12" id="cp_intro" >
                            <img width="100%" height="100%" class="card-rounded shadow" 
                            src="${foto_portada}">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12" id="cp_intro" >
                            <img width="100%" height="100%" class="card-rounded shadow" 
                            src="${foto_uno}">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12" id="cp_intro" >
                            <img width="100%" height="100%" class="card-rounded shadow" 
                            src="${foto_dos}">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <iframe width="560" height="315" 
                        src="${F.limpiarUrlYoutube(foto_video)}" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    </div>
                    
                </div>
            </div>
        </div>
        `;
    }
    
    return card;



};

function card_proyecto(codigo,nombre,direccion,municipio,latitud,longitud,desde,area,foto_logo,foto_portada,foto_uno,foto_dos,foto_video){

    let card = '';

    let tipodispositivo = F.detectarPc();


        card = `
        <div class="product-slide-wrapper">
            <div class="product-slides owl-carousel">
                <div class="single-product-slide" style="background-image: url('${foto_portada}')"></div>
                <div class="single-product-slide" style="background-image: url('${foto_uno}')"></div>
                <div class="single-product-slide" style="background-image: url('${foto_dos}')"></div>
            </div>
        </div>
        <div class="product-description pb-3">
            <!-- Product Title & Meta Data-->
            <div class="product-title-meta-data bg-white mb-3 py-3">
                <div class="container d-flex justify-content-between">
                    <div class="p-title-price">
                        <h6 class="text-danger mb-1">${nombre}</h6>
                        <p class="sale-price mb-0 text-info">Desde: ${F.setMoneda(desde,'Q')}</p>
                    </div>
                </div>
                 
        
                <!-- Product Specification-->
                <div class="p-specification bg-white mb-3 py-3">
                    <div class="container">
                        <h6>Especificaciones</h6>
                        <p>
                          Oportunidad de inversión !!... llámanos o escríbenos por whatsapp para que podamos llevarte sin compromiso de compra, a conocer esta propiedad.
                        </p>
                        <ul class="mb-3 ps-3">
                            <li><i class="lni lni-checkmark-circle"> </i> Escritura registrada</li>
                            <li><i class="lni lni-checkmark-circle"> </i> Municipio: ${municipio}</li>
                            <li> <i class="lni lni-checkmark-circle"> </i> ${area}</li>
                        </ul>
                    </div>
                </div>
        
                <!-- Product Video 
                <div class="bg-img" style="background-image: url('${foto_portada}')">
                    <div class="container">
                        <div class="video-cta-content d-flex align-items-center justify-content-center">
                            <div class="video-text text-center">
                                <h4 class="mb-4">Video promocional</h4>
                                <a class="btn btn-primary rounded-circle" id="videoButton" href="${foto_video}" target="_blank">
                                    <i class="lni lni-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                -->

                <div class="text-center">
                                <iframe width="560" height="315" 
                                src="${F.limpiarUrlYoutube(foto_video)}" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; 
                                encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen></iframe>
                </div>
                
                


            </div>
        </div>
            `;
    
    return card;



};



