let root_datos_proyecto = document.getElementById('root_datos_proyecto');

function get_detalles_proyecto(data){

    get_tab('tres');

    
    root_datos_proyecto.innerHTML = card_proyecto(`${data.CODIGO}`,`${data.NOMBRE}`,`${data.DIRECCION}`,`${data.MUNICIPIO}`,`${data.LATITUD}`,`${data.LONGITUD}`,`${data.DESDE}`,`${data.AREA}`,`${data.FOTO_LOGO}`,`${data.FOTO_PORTADA}`,`${data.FOTO_UNO}`,`${data.FOTO_DOS}`,`${data.FOTO_VIDEO}`,`${data.TIPOPAGO}`,`${data.DETALLES}`);

    document.getElementById('btnAtrasUno').style="visibility:hidden";
    document.getElementById('btnAtrasDos').style="visibility:visible";

    location.hash = "#card_detalle";
    location.hash = '';
    
 
    F.initHeroSlides();
    

};

function get_detalles_proyecto_card(codigo,nombre,direccion,municipio,latitud,longitud,desde,area,foto_logo,foto_portada,foto_uno,foto_dos,foto_video,tipopago,detalles){

    get_tab('tres');

    let card = card_proyecto(codigo,nombre,direccion,municipio,latitud,longitud,desde,area,foto_logo,foto_portada,foto_uno,foto_dos,foto_video,tipopago,detalles)
    root_datos_proyecto.innerHTML = card;

    document.getElementById('btnAtrasUno').style="visibility:visible";
    document.getElementById('btnAtrasDos').style="visibility:hidden";

    location.hash = "#card_detalle";
    location.hash = '';

    
    
    F.initHeroSlides();

};




function card_proyecto(codigo,nombre,direccion,municipio,latitud,longitud,desde,area,foto_logo,foto_portada,foto_uno,foto_dos,foto_video,tipopago,detalles){

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
                    <div class="row">
                        <div class="col-6">
                            <a class="animate__animated animate__zoomInLeft btn btn-danger hand col-12" href="https://api.whatsapp.com/send/?phone=50239160727&text=Hola+Burgos+State+%21%21+quisiera+informaci%C3%B3n+sobre+${nombre}%21%21&type=phone_number&app_absent=0" target="_blank">
                                <i class="lni lni-whatsapp"></i> Escríbenos para una visita guiada!!
                            </a>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-primary hand shadow" onclick="F.shareProperty('${codigo}')">
                                <i class="lni lni-checkmark-circle"></i>Compárteme a un amigo
                            </button>
                        </div>
                    </div>
                </div>
                 
        
                <!-- Product Specification-->
                <div class="p-specification bg-white mb-3 py-3">
                    <div class="container">
                        <h6>Especificaciones</h6>
                        <p>
                          ${detalles}
                        </p>
                        <ul class="mb-3 ps-3">
                            <li><i class="lni lni-checkmark-circle negrita text-danger"> </i> ${tipopago}</li>
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



