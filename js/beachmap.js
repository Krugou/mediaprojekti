let map = L.map('map',{ scrollWheelZoom: true}).setView([60.247757713113934, 24.833770383021534], 10);
let beachesData =[];
let reititysNapit = 0;
let popupLon=[];
let popupLat=[];

let tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
async function addMarkers() {
    try{
        const vastaus = await fetch(data);              // Käynnistetään haku.
        if (!vastaus.ok) throw new Error('jokin meni pieleen'); // Jos tapahtuu virhe, heitetään ilmoitus
        const beaches = await vastaus.json();// muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi
        for (let i=0; i<beaches.beaches.length; i++) { //length =14
            beachesData[i]="https://iot.fvh.fi/opendata/uiras/"+beaches.beaches[i].url+".json";
        }
       // console.log(beaches.beaches.length);
       // console.log(beaches.beaches[0].url);
       // console.log(beachesData[7]);
        for (let i=0; i<beachesData.length; i++) {
            try {
                const vastaus2 = await fetch(beachesData[i]);              // Käynnistetään haku
                const beaches2 = await vastaus2.json();
                //console.log(beaches2.meta.name);
                reititysNapit++;
                let lat = beaches2.meta.lat;
                let lon = beaches2.meta.lon;
                popupLat[i]=lat;
                popupLon[i]=lon;
                let date = new Date(beaches2.data[beaches2.data.length - 1].time).toLocaleString('fi'); // Muutetaan aika suomalaiseen formaattiin.
                let marker = L.marker([lat, lon]).addTo(map);
                if (beaches2.data[beaches2.data.length-1].temp_water >= -50) {
                  //  console.log("normaali tulos")
                    marker.bindPopup(`<b>${beaches2.meta.name}<br>Ilman lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_air}\xB0C<br>Veden lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_water}\xB0C<br> Aikana: ${date}<br><button id="route${i}">Hae reitti</button>`);                }
                else if (beaches2.data[beaches2.data.length-1].temp_water <= -50) {
                   // console.log("tuntematon")
                    marker.bindPopup(`<b>${beaches2.meta.name}<br>Ilman lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_air}\xB0C<br>Veden lämpotila: Tuntematon <br> Aikana: ${date}<br><button id="route${i}">Hae reitti</button>`);                }
                }
                catch (error) {                                          // Otetaan heitetty virheilmoitus kiinni
                console.log(error)
                alert(`Rannan ${beaches.beaches[i].name} säätietoja ei löydetty.`);
                try {
                    let lat = beaches.beaches[i].lat;
                    let lon = beaches.beaches[i].lon;
                    popupLat[i]=lat;
                    popupLon[i]=lon;
                    let marker = L.marker([lat, lon]).addTo(map);
                    marker.bindPopup(`<b>${beaches.beaches[i].name}<br> Ilman lämpötila: Tuntematon <br> Veden lämpötila: Tuntematon<br><button id="route${i}">Hae reitti</button>`)
                }
                catch (error){
                    alert(`Rannan ${beaches.beaches[i].name} sijaintitietoja ei löydetty.`); // EI PITÄISI KOSKAAN TAPAHTUA
                }
            }
        }

    } catch (error) {                                          // Otetaan heitetty virheilmoitus kiinni
        console.log(error);
    }
}
addMarkers();

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    let crd = pos.coords;
    posLat=crd.latitude;
    posLon=crd.longitude;
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

addButtonEvent()

let rNum
let eventHandlerAssigned = false;
let dir = 0;
function addButtonEvent(){map.on('popupopen', function(){
    for (let i = 0; i < reititysNapit; i++) {

        if (!eventHandlerAssigned && document.querySelector('#route' + i)) {
            
            const nappi = document.querySelector('#route' + i);
            console.log(nappi);
            rNum=i;
            nappi.addEventListener('click', newMapRouting)
            eventHandlerAssigned = true;
        }
    }
});
}
function reloadMap (){
    map.remove()
    map = L.map('map',{ scrollWheelZoom: true}).setView([60.247757713113934, 24.833770383021534], 10);
    eventHandlerAssigned = false;
    addButtonEvent()
    navigator.geolocation.getCurrentPosition(success, error, options);
    tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
    addMarkers();
    routing()
}
function newMapRouting(){
    
    if(dir == 0) {
        routing()

    } else {
        reloadMap()
         
}
}
map.on('popupclose', function(){
    eventHandlerAssigned = false;
})
function routing() {
    
    dir = MQ.routing.directions()
    dir.optimizedRoute({
        locations: [
            {latLng: {lat: posLat, lng: posLon}}
            ,
            {latLng: {lat: popupLat[rNum], lng: popupLon[rNum]}}]
    });
    
   
    map.addLayer(MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true
    }));
}
