let Navegar = {
    inicio:()=>{
        F.loadScript('../views/view_inicio.js','root')
        .then(()=>{
            initView();
        })
    },
    get_cards_proyectos:(idcontainer)=>{
        let cards = `
                        <div class="col-12 col-md-6">
                            <div class="card horizontal-product-card border-warning shadow">
                                <div class="card-body d-flex align-items-center">
                                  <div class="product-thumbnail-side">
                                      <a class="product-thumbnail d-block" href="#">
                                        <img src="img/proyectos/001.png" alt="">
                                      </a>
                                  </div>
                                  <div class="product-description">
                                      <a class="product-title d-block text-danger" href="#">Residenciales Ciudad Palmeras</a>
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

        let container = document.getElementById(idcontainer);
        container.innerHTML = '';
        container.innerHTML = cards + cards + cards + cards + cards;
        
    },
    get_mapa_lotes:()=>{
        
       
        
    },
    get_mapa_propiedades:()=>{
        F.loadScript('../views/view_mapa_terrenos.js','dos')
        .then(()=>{
            initView();
        })
    }
}