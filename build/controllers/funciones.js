let F = {
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
    animateCSS: (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
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
}