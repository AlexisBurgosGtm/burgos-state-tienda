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
                          var position = e.target._latlng;
                    });
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

function cargar_proyectos(){
    let container = document.getElementById('root_proyectos');
    container.innerHTML = GlobalLoader;

    get_data_locations()
    .then((data)=>{
        let cards = '';
        data.recordset.map((r)=>{
            cards += `
            <div class="col-12 col-md-6">
                <div class="card horizontal-product-card border-warning shadow">
                    <div class="card-body d-flex align-items-center">
                      <div class="product-thumbnail-side">
                          <a class="product-thumbnail d-block" href="#">
                            <img src="img/proyectos/${r.CODIGO}.png" alt="">
                          </a>
                      </div>
                      <div class="product-description">
                          <a class="product-title d-block text-danger" href="#">${r.NOMBRE}</a>
                          <small class="text-secondary">Garita</small><br>
                          <small class="text-secondary">Casa Club / Piscina</small><br>
                          <small class="text-secondary">Agua potable</small><br>
                          <small class="text-secondary">Drenajes</small><br>
                          <div class="product-rating">
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                          </div>
                          <!-- Buy Now Button -->
                          <a class="btn btn-danger btn-sm" href="#"><i class="me-1 lni lni-cart"></i>Ver proyecto</a>
                      </div>
                  </div>
                </div>
            </div>
            `   
        })
        container.innerHTML = cards;
        cargar_mapa(data);
     })



}