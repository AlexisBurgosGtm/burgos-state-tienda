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