let map;
let mapa;

function get_data_locations(){
    return new Promise((resolve,reject)=>{

        axios.post('/api/select_locations')
        .then((response) => {
            
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data);
            }else{
                reject();
            };
        }, (error) => {
            console.log(error);
            reject();
        });

    })
};

function get_data_location_code(codigo){
    return new Promise((resolve,reject)=>{

        axios.post('/api/select_location',{codigo:codigo})
        .then((response) => {
            
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data);
            }else{
                reject();
            };
        }, (error) => {
            console.log(error);
            reject();
        });

    })
};

function showUbicacion(){
    //let lat ='0'; let longg = '0';
    return new Promise((resolve,reject)=>{

        resolve();
        /*
        try {
            navigator.geolocation.getCurrentPosition(function (location) {
                //lat = location.coords.latitude.toString();
                //longg = location.coords.longitude.toString();
                resolve(location);
                //map = Lmap(Number(lat),Number(long));
            })
        } catch (error) {
            reject();
        }
        */
    })

};

function Lmap(lat,long){

        //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      mapa = L.map('mapcontainer').setView([lat, long], 10).addLayer(osm);
     
      /*
      L.marker([lat, long])
            .addTo(mapa)
            .bindPopup(`Usted está aqui!!`, {closeOnClick: false, autoClose: false})
            .openPopup()
            .on("click",function(e) {
                this.openPopup();
                //var position = e.target._latlng;
            });
        */
    
    
  
};

function cargar_mapa(data){

    showUbicacion()
    .then((location)=>{
            //UBICACION INICIAL RETALHULEU: '14.5307286', '-91.67556300000001'
            let lat = '14.5307286' //location.coords.latitude.toString();
            let longg = '-91.67556300000001' //location.coords.longitude.toString();
            map = Lmap(Number(lat),Number(longg));

            data.recordset.map((r)=>{
                let lat = r.LATITUD;
                let long = r.LONGITUD;
                L.marker([lat, long])
                    .addTo(mapa)
                    .bindPopup(`${r.NOMBRE}`, {closeOnClick: false, autoClose: false})
                    .on("click",function(e) {
                          this.openPopup();
                          get_detalles_proyecto(r)
                          var position = e.target._latlng;
                    })
                    .on("mouseover",function(e) {
                        this.openPopup();
                    })
                    .on("mouseout",function(e) {
                        this.closePopup();
                    })
            })
              
          
    });

};

function cargar_lotes(){
    
    get_tab('dos');

    try {
        map.invalidateSize();    
    } catch (error) {
        
    }
    try {
        mapa.invalidateSize();    
    } catch (error) {
        
    }

};

function backup_cargar_proyectos(){
    let container = document.getElementById('root_proyectos');
    container.innerHTML = GlobalLoader;

    get_data_locations()
    .then((data)=>{
        let cards = '';
        data.recordset.map((r)=>{
            
            cards += `
            <div class="col-12 col-md-6">
                <section onclick="get_detalles_proyecto_card('${r.CODIGO}','${r.NOMBRE}','${r.DIRECCION}','${r.MUNICIPIO}','${r.LATITUD}','${r.LONGITUD}','${r.DESDE}','${r.AREA}','${r.FOTO_LOGO}','${r.FOTO_PORTADA}','${r.FOTO_UNO}','${r.FOTO_DOS}','${r.FOTO_VIDEO}')" 
                class="card card-rounded border-especial horizontal-product-card shadow-especial hand">
                    <div class="card-body d-flex align-items-center">
                      <div class="product-thumbnail-side">
                          <a class="product-thumbnail d-block" href="#">
                            <img src="${r.FOTO_LOGO}" alt="">
                          </a>
                      </div>
                      
                      <div class="product-description">
                            <a class="product-title d-block text-danger">${r.NOMBRE}</a>
                            <small class="text-secondary">* Agua potable / Drenajes</small><br>
                            <small class="text-secondary">* Calles pavimentadas</small><br>
                            <small class="text-secondary">* ${r.AREA}</small><br>
                            <small class="text-danger">* Precios desde ${F.setMoneda(Number(r.DESDE),'Q')}</small><br>
                          
                            <hr class="solid">

                            <button class="btn btn-danger btn-sm col-12">
                                <i class="me-1 lni lni-cart"></i> Ver proyecto
                            </button>
                           

                      </div>
                  </div>
                </section>
            </div>
            `   
        })
        container.innerHTML = cards;
        cargar_mapa(data);
     })



};

function cargar_proyectos(){
    let container = document.getElementById('root_proyectos');
    container.innerHTML = GlobalLoader;

    get_data_locations()
    .then((data)=>{
        let cards = '';
        data.recordset.map((r)=>{
            
            cards += `
            <div class="col-12 col-md-6">
                <section onclick="get_detalles_proyecto_card('${r.CODIGO}','${r.NOMBRE}','${r.DIRECCION}','${r.MUNICIPIO}','${r.LATITUD}','${r.LONGITUD}','${r.DESDE}','${r.AREA}','${r.FOTO_LOGO}','${r.FOTO_PORTADA}','${r.FOTO_UNO}','${r.FOTO_DOS}','${r.FOTO_VIDEO}')" 
                class="card col-12 card-rounded border-primary horizontal-product-card hand">
                    
                    <div class="card-body">
                        <div class="product-thumbnail-side col-12">
                          <a class="product-thumbnail d-block text-center" href="#">
                            <img class=" text-center" src="${r.FOTO_LOGO}" alt="">
                          </a>
                        </div>
                        <div class="row">
                            <b><a class="text-center text-primary negrita">${r.NOMBRE}</a></b>
                        </div>
                        <div class="row">
                            <small class="text-secondary">* Agua potable / Drenajes</small><br>
                            <small class="text-secondary">* Calles pavimentadas</small><br>
                            <small class="text-secondary">* ${r.MUNICIPIO}</small><br>
                            <small class="text-danger">* Precios desde ${F.setMoneda(Number(r.DESDE),'Q')}</small><br>    
                        </div>
                    </div>
                </section>
            </div>
            `   
        })
        container.innerHTML = cards;
        cargar_mapa(data);
     })



};

