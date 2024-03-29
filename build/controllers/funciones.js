let F = {
    shareProperty:async(codigo)=>{
        const shareData = {
            title: 'BURGOS STATE',
            text: `Asesores en Bienes Inmuebles`,
            url: window.location.origin + "#" + codigo.toString()
          }
  
          try {
              await navigator.share(shareData)
              //resultPara.textContent = 'MDN shared successfully'
          } catch(err) {
              //resultPara.textContent = 'Error: ' + err
              console.log('Error al compartir: ' + err);
          }
    },
    getIp:()=>{
        return new Promise((resolve,reject)=>{
            try {
                axios.get('https://api.ipify.org?format=json')
                .then((response)=>{
                    let ip = response.data.ip
                    console.log(ip);
                    resolve(ip)
                })
                .catch((error)=>{
                    reject();
                })
                
              } catch (error) {
                console.error(error);
                reject();
              }
        })
    },
    registrar_visita:(ip)=>{
        return new Promise((resolve,reject)=>{
            try {
                axios.get(`/api/visita?ip=${ip.toString()}&fecha=${F.getFecha()}&hora=${F.getHora()}`)
                .then((response)=>{
                    resolve()
                })
                .catch((error)=>{
                    reject();
                })
                
              } catch (error) {
                console.error(error);
                reject();
              }
        })
    },
    
    //fullscreen scroll
    expandir:(idcontainer)=>{
  
        element = document.getElementById(idcontainer);
        element.requestFullscreen();
    
        //element.style = "overflow:scroll";
        //element.style = "overflow:hidden";
        //return;
    
      if (
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
        ) {
          element.style = "overflow:visible";
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          element.style = "overflow:scroll";
          //element.style = "overflow:hidden";
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
          }
        }
  
  
        
    },
    phone_call: (telefono)=>{
      
        let llamar = telefono.replace(" ","");
        llamar = llamar.replace("-","");
        llamar = llamar.replace("/","");
        llamar = llamar.replace("*","");
        llamar = llamar.replace("$","");
        llamar = llamar.replace("&","");
        llamar = llamar.replace("'","");
        llamar = llamar.replace('"',"");
  
        window.location.href = 'tel:' + llamar;
        
    },
    shareApp:async()=>{
        const shareData = {
          title: 'BURGOS STATE',
          text: `Asesores en Bienes Inmuebles`,
          url: window.location.origin
        }

        try {
            await navigator.share(shareData)
            //resultPara.textContent = 'MDN shared successfully'
        } catch(err) {
            //resultPara.textContent = 'Error: ' + err
            console.log('Error al compartir: ' + err);
        }
    },
    ajustarMapa:()=>{

        //RE-AJUSTA EL MAPA A LA PANTALLA
        setTimeout(function () {
            try {
                map.invalidateSize();    
            } catch (error) {
                
            }
        }, 500);

    },
    showLocation:()=>{
        return new Promise((resolve,reject)=>{
              try {
                  navigator.geolocation.getCurrentPosition(function (location) {
                      console.log(location);
                      resolve(location);
                  })
              } catch (error) {
                  reject();
              }
        })
    },
    Lmap: (lat,long)=>{
      //INICIALIZACION DEL MAPA            
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
        map = L.map('mapcontainer').setView([lat, long], 7).addLayer(osm);
  
        var userIcon = L.icon({
          iconUrl: '../img/userIcon.png',
          shadowUrl: '../img/marker-shadow.png',
      
          iconSize:     [30, 45], // size of the icon
          shadowSize:   [50, 64], // size of the shadow
          iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
  
  
        //L.marker([lat, long],{icon:userIcon})
          //.addTo(map)
          //.bindPopup('Mi Ubicación', {closeOnClick: true, autoClose: false})   
          //.openPopup()
                  
        return map;
    },
    limpiarUrlYoutube:(url)=>{
      let urlFinal = url.replace('watch?v=','embed/');
      urlFinal = urlFinal.replace('shorts/','embed/');
      
      return urlFinal;
    },
    detectarPc:()=>{
        let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            //console.log("Estás usando un dispositivo móvil!!");
          return 'TEL';
        } else {
            //console.log("No estás usando un móvil");
          return 'PC';
        }
    },
    setMoneda: function(num,signo) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num)) num = "0";
        let sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        let cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        let resultado = ((((sign) ? '' : '-') + signo + ' ' + num + ((cents == "00") ? '' : '.' + cents)).toString());
        
        if(resultado.includes('.')){}else{resultado = resultado + ".00"}
        
        return resultado.replace('-','');

    },
    setMoneda2:(number)=>{
        let valor = new Intl.NumberFormat('en-GB', { style:'currency', currency:'GTQ' }).format(number);
        return valor;
    },
    convertDateNormal(date) {
        const [yy, mm, dd] = date.split(/-/g);
        return `${dd}/${mm}/${yy}`.replace('T00:00:00.000Z', '');
    },
    imprimirSelec:(nombreDiv)=>{
        var contenido= document.getElementById(nombreDiv).innerHTML;
        var contenidoOriginal= document.body.innerHTML;
   
        document.body.innerHTML = contenido;
   
        window.print();
   
        document.body.innerHTML = contenidoOriginal;
    },
    animateCSS: (element, animation) =>
        
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            let prefix = 'animate__';
            animation = animation.replace('animate__','');
            const animationName = `${prefix}${animation}`;
            const node = document.getElementById(element);

            node.classList.add(`${prefix}animated`, animationName);

          // When the animation ends, we clean the classes and resolve the Promise
          function handleAnimationEnd(event) {
              event.stopPropagation();
              node.classList.remove(`${prefix}animated`, animationName);
              resolve('Animation ended');
          }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    }),
    loadScript: function(url, idContainer) {
        return new Promise((resolve, reject) => {
          var script = document.createElement('script');
          script.src = url;
    
          script.onload = resolve;
          script.onerror = reject;
             
          document.getElementById(idContainer).appendChild(script)
        });
    },
    hablar: function(msn){
        var utterance = new SpeechSynthesisUtterance(msn);
        return window.speechSynthesis.speak(utterance); 
    },
    getFecha(){
        let fecha
        let f = new Date(); 
        let d = f.getDate(); 
        let m = f.getUTCMonth()+1; 
  
        switch (d.toString()) {
          case '30':
            m = f.getMonth()+1; 
            break;
          case '31':
            m = f.getMonth()+1; 
              break;
        
          default:
  
            break;
        }
  
        
        let y = f.getFullYear();
       
        di = d;
        var D = '0' + di;
        let DDI 
        if(D.length==3){DDI=di}else{DDI=D}
        
        ma = m;
        var MA = '0' + ma;
        let DDM 
        if(MA.length==3){DDM=ma}else{DDM=MA}
  
  
        fecha = y + '-' + DDM + '-' + DDI;
        return fecha;
    },
    limpiarTexto: (texto) =>{
        var ignorarMayMin = true;
        var reemplazarCon = " pulg";
        var reemplazarQue = '"';
        reemplazarQue = reemplazarQue.replace(/[\\^$.|?*+()[{]/g, "\\$&"),
        reemplazarCon = reemplazarCon.replace(/\$(?=[$&`"'\d])/g, "$$$$"),
        modif = "g" + (ignorarMayMin ? "i" : ""),
        regex = new RegExp(reemplazarQue, modif);
        return texto.replace(regex,reemplazarCon);
    },
    slideAnimationTabs: ()=>{
        //inicializa el slide de las tabs en censo
        $('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
            var $old_tab = $($(e.target).attr("href"));
            var $new_tab = $($(e.relatedTarget).attr("href"));
    
            if($new_tab.index() < $old_tab.index()){
                $old_tab.css('position', 'relative').css("right", "0").show();
                $old_tab.animate({"right":"-100%"}, 300, function () {
                    $old_tab.css("right", 0).removeAttr("style");
                });
            }
            else {
                $old_tab.css('position', 'relative').css("left", "0").show();
                $old_tab.animate({"left":"-100%"}, 300, function () {
                    $old_tab.css("left", 0).removeAttr("style");
                });
            }
        });
    
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
            var $new_tab = $($(e.target).attr("href"));
            var $old_tab = $($(e.relatedTarget).attr("href"));
    
            if($new_tab.index() > $old_tab.index()){
                $new_tab.css('position', 'relative').css("right", "-2500px");
                $new_tab.animate({"right":"0"}, 500);
            }
            else {
                $new_tab.css('position', 'relative').css("left", "-2500px");
                $new_tab.animate({"left":"0"}, 500);
            }
        });
    
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            // your code on active tab shown
        });
    },
    getHora:()=>{
        let hoy = new Date();
        let hora = hoy.getHours();
        let minuto = hoy.getMinutes();
        return `${hora.toString()}:${minuto.toString()}`;
    },
    gotoGoogleMaps:(lat,long)=>{
        window.open(`https://www.google.com/maps?q=${lat},${long}`);
    },
    gotoWaze:(lat,long)=>{
        window.open(`https://www.waze.com/ul?ll=${lat}%2C${long}&navigate=yes&zoom=17`)
    },
    instalationHandlers: (idBtnInstall)=>{
        //INSTALACION APP
        let btnInstalarApp = document.getElementById(idBtnInstall);
        btnInstalarApp.hidden = true;
  
        let capturedInstallEvent;
        window.addEventListener('beforeinstallprompt',(e)=>{
          e.preventDefault();
          btnInstalarApp.hidden = false;
          capturedInstallEvent = e;
        });
        btnInstalarApp.addEventListener('click',(e)=>{
          capturedInstallEvent.prompt();
        capturedInstallEvent.userChoice.then((choice)=>{
            //solicita al usuario confirmacion para instalar
        })
      })
      //INSTALACION APP
    },
    initHeroSlides:()=>{
      try {
  
            // :: Hero Slides
            if ($.fn.owlCarousel) {
                var welcomeSlider = $('.hero-slides');
                welcomeSlider.owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    dots: true,
                    center: true,
                    margin: 0,
                    animateIn: 'fadeIn',
                    animateOut: 'fadeOut'
                })
        
                welcomeSlider.on('translate.owl.carousel', function () {
                    var layer = $("[data-animation]");
                    layer.each(function () {
                        var anim_name = $(this).data('animation');
                        $(this).removeClass('animated ' + anim_name).css('opacity', '0');
                    });
                });
        
                $("[data-delay]").each(function () {
                    var anim_del = $(this).data('delay');
                    $(this).css('animation-delay', anim_del);
                });
        
                $("[data-duration]").each(function () {
                    var anim_dur = $(this).data('duration');
                    $(this).css('animation-duration', anim_dur);
                });
        
                welcomeSlider.on('translated.owl.carousel', function () {
                    var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
                    layer.each(function () {
                        var anim_name = $(this).data('animation');
                        $(this).addClass('animated ' + anim_name).css('opacity', '1');
                    });
                });
            }
        
            // :: Flash Sale Slides
            if ($.fn.owlCarousel) {
                var flashSlide = $('.flash-sale-slide');
                flashSlide.owlCarousel({
                    items: 3,
                    margin: 16,
                    loop: true,
                    autoplay: true,
                    smartSpeed: 800,
                    dots: false,
                    nav: false,
                    responsive: {
                        1400: {
                            items: 5,
                        },
                        992: {
                            items: 5,
                        },
                        768: {
                            items: 4,
                        },
                        480: {
                            items: 4,
                        },
                    },
                })
            }
        
            // :: Collection Slides
            if ($.fn.owlCarousel) {
                var collectionSlide = $('.collection-slide');
                collectionSlide.owlCarousel({
                    items: 2,
                    margin: 16,
                    loop: true,
                    autoplay: true,
                    smartSpeed: 800,
                    dots: false,
                    nav: false,
                    responsive: {
                        1400: {
                            items: 6,
                        },
                        992: {
                            items: 5,
                        },
                        768: {
                            items: 4,
                        },
                        480: {
                            items: 3,
                        },
                    },
                })
            }
        
            // :: Products Slides
            if ($.fn.owlCarousel) {
                var productslides = $('.product-slides');
                productslides.owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    dots: false,
                    nav: true,
                    navText: [('<i class="lni lni-chevron-left"></i>'), ('<i class="lni lni-chevron-right"></i>')]
                })
            }
        
            // :: Related Products Slides
            if ($.fn.owlCarousel) {
                var relProductSlide = $('.related-product-slide');
                relProductSlide.owlCarousel({
                    items: 2,
                    margin: 16,
                    loop: true,
                    autoplay: true,
                    smartSpeed: 800,
                    dots: false,
                    nav: false,
                    responsive: {
                        1400: {
                            items: 6,
                        },
                        992: {
                            items: 5,
                        },
                        768: {
                            items: 4,
                        },
                        480: {
                            items: 3,
                        },
                    },
                })
            }
        
      
      } catch (error) {
          console.log(error);
      }
  }
}