let GlobalLoader = `<div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>`;

F.instalationHandlers('btnInstall');
F.slideAnimationTabs();


cargar_proyectos()


function get_tab(nombre){
    
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro= document.getElementById('cuatro');
    
    switch (nombre) {
        case 'uno':
            uno.classList.add('show');
            dos.classList.remove('show');
            tres.classList.remove('show');
            cuatro.classList.remove('show');

            uno.classList.add('active');
            dos.classList.remove('active');
            tres.classList.remove('active');
            cuatro.classList.remove('active');
            
            break;
        case 'dos':
            uno.classList.remove('show');
            dos.classList.add('show');
            tres.classList.remove('show');
            cuatro.classList.remove('show');
            
            uno.classList.remove('active');
            dos.classList.add('active');
            tres.classList.remove('active');
            cuatro.classList.remove('show');
            
            break;
        case 'tres':
            uno.classList.remove('show');
            dos.classList.remove('show');
            tres.classList.add('show');
            cuatro.classList.remove('show');
            
            uno.classList.remove('active');
            dos.classList.remove('active');
            tres.classList.add('active');
            cuatro.classList.remove('active');
            
            break;
        case 'cuatro':
            uno.classList.remove('show');
            dos.classList.remove('show');
            tres.classList.remove('show');
            cuatro.classList.add('show');
            
            uno.classList.remove('active');
            dos.classList.remove('active');
            tres.classList.remove('active');
            cuatro.classList.add('active');
            
            break;
    }

    
       
}


F.animateCSS('btnContactoW','bounceInUp')
F.animateCSS('btnContactoT','animate__fadeInUp')

function verificar_proyecto_compartido(){

    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    if(hash){
        get_data_location_code(hash)
        .then((datos)=>{
            let data = datos.recordset[0];

            get_tab('tres');

    
            root_datos_proyecto.innerHTML = card_proyecto(`${data.CODIGO}`,`${data.NOMBRE}`,`${data.DIRECCION}`,`${data.MUNICIPIO}`,`${data.LATITUD}`,`${data.LONGITUD}`,`${data.DESDE}`,`${data.AREA}`,`${data.FOTO_LOGO}`,`${data.FOTO_PORTADA}`,`${data.FOTO_UNO}`,`${data.FOTO_DOS}`,`${data.FOTO_TRES}`,`${data.FOTO_VIDEO}`,`${data.TIPOPAGO}`,`${data.DETALLES}`);
        
            document.getElementById('btnAtrasUno').style="visibility:hidden";
            document.getElementById('btnAtrasDos').style="visibility:visible";
        
            location.hash = "#card_detalle";
            location.hash = '';
            
        
            F.initHeroSlides();
        })
        

    }else{
        console.log('---')
    }

};

verificar_proyecto_compartido();
