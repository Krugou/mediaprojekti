/*
     __ __           __  __        __                   ___          ____              
   / //_/___ ______/ /_/ /_____ _/ /______  ____  ____/ (_)  ____ _/ / /______ _____ _
  / ,< / __ `/ ___/ __/ __/ __ `/ //_/ __ \/ __ \/ __  / /  / __ `/ / //_/ __ `/ __ `/
 / /| / /_/ / /  / /_/ /_/ /_/ / ,< / /_/ / /_/ / /_/ / /  / /_/ / / ,< / /_/ / /_/ / 
/_/ |_\__,_/_/   \__/\__/\__,_/_/|_|\____/\____/\__,_/_/   \__,_/_/_/|_|\__,_/\__,_/ 


*/ 


let map = L.map('map',{ scrollWheelZoom: true}).setView([60.247757713113934, 24.833770383021534], 10);
let beachesData =[];
let popupButtons = 0;
let popupLon=[];
let popupLat=[];
function addMap() {
    let tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);
}
//Funktio lisää karttaan markkerit & popupit
   async function addMarkers() {
        try {
            const vastaus = await fetch(data);              // Käynnistetään haku paikallisesta beaches.json - tiedostosta
            if (!vastaus.ok) throw new Error('jokin meni pieleen'); // Jos tapahtuu virhe, heitetään ilmoitus
            const beaches = await vastaus.json();// muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi
            for (let i = 0; i < beaches.beaches.length; i++) { // JSONIN URL:it lisätään taulukkoon
                beachesData[i] = "https://iot.fvh.fi/opendata/uiras/" + beaches.beaches[i].url + ".json";
            }
            // console.log(beaches.beaches.length);
            // console.log(beaches.beaches[0].url);
            // console.log(beachesData[7]);
            for (let i = 0; i < beachesData.length; i++) {
                try {
                    const vastaus2 = await fetch(beachesData[i]); // Käynnistetään Haku Uiraksen API:sta.
                    const beaches2 = await vastaus2.json();
                    //console.log(beaches2.meta.name);
                    popupButtons++;
                    let lat = beaches.beaches[i].lat;
                    let lon = beaches.beaches[i].lon;
                    popupLat[i] = lat; //Syötetään globaaleihin taulukkomuuttujiin rantojen sijainnit
                    popupLon[i] = lon;
                    let date = new Date(beaches2.data[beaches2.data.length - 1].time).toLocaleString('fi'); // Muutetaan aika suomalaiseen formaattiin.
                    let marker = L.marker([lat, lon]).addTo(map); // Lisätään Leaflet karttaan markkerit
                    // Lisätään karttaan popupit käyttäen Uiraksen API dataa. (nimi, sijainti, lämpötila, mittausaika & nappi reititykselle)
                    if (beaches2.data[beaches2.data.length - 1].temp_water >= -50) {
                        //  console.log("normaali tulos")
                        marker.bindPopup(`<b>${beaches2.meta.name}<br>Ilman lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_air}\xB0C<br>Veden lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_water}\xB0C<br> Aikana: ${date}<br><button class="myButton" id="route${i}">Hae reitti</button>`);
                    } else if (beaches2.data[beaches2.data.length - 1].temp_water <= -50) {
                        // console.log("tuntematon")
                        marker.bindPopup(`<b>${beaches2.meta.name}<br>Ilman lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_air}\xB0C<br>Veden lämpotila: Tuntematon <br> Aikana: ${date}<br><button class="myButton" id="route${i}">Hae reitti</button>`);
                    }
                }
                    //Jos Uiraksen API:in ei saada yhteyttä, lisätään popuppeihin (nimi,sijainti, reititys nappi) paikallisesta JSONista
                catch (error) {                 // Otetaan heitetty virheilmoitus kiinni
                    console.log(error)
                    alert(`Rannan ${beaches.beaches[i].name} säätietoja ei löydetty.`);
                    try {
                        popupButtons++;
                        console.log(beaches.beaches[i].name)
                        let lat = beaches.beaches[i].lat;
                        let lon = beaches.beaches[i].lon;
                        popupLat[i] = lat; //Syötetään globaaleihin taulukkomuuttujiin rantojen sijainnit
                        popupLon[i] = lon;
                        let marker = L.marker([lat, lon]).addTo(map);
                        marker.bindPopup(`<b>${beaches.beaches[i].name}<br> Ilman lämpötila: Tuntematon <br> Veden lämpötila: Tuntematon<br><button class="myButton" id="route${i}">Hae reitti</button>`)
                    } catch (error) {
                    //    alert(`Rannan ${beaches.beaches[i].name} sijaintitietoja ei löydetty.`); // EI PITÄISI KOSKAAN TAPAHTUA
                    }
                }
            }

        } catch (error) {                                          // Otetaan heitetty virheilmoitus kiinni
            console.log(error);
        }
    }
addMap();
addMarkers();

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    let crd = pos.coords;
    posLat=crd.latitude; // Tallennetaan käyttäjän leveys ja pituusasteet globaaleihin muuttujiin
    posLon=crd.longitude;
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
//Haetaan käyttäjän sijainti, vaihtoehdollisesti ajetaan 3 funktiota
navigator.geolocation.getCurrentPosition(success, error, options);

addButtonEvent()

let rNum
let dir = 0;
//Kun jokin popup avataan, tarkistetan, minkä rannan nappi on olemassa nappien Idllä: route+napin numero
function addButtonEvent(){map.on('popupopen', function(){
    for (let i = 0; i < popupButtons; i++) {
        if (document.querySelector('#route' + i)) {
            const nappi = document.querySelector('#route' + i);
            rNum=i; //Rannan numero tallennetaan globaaliin muuttujaan
            nappi.addEventListener('click', newMapRouting) // Nappia painaessa ajetaan funktio: newMapRouting()
        }
    }
});
}
//Funktio poistaa vanhan kartan, jossa oli vanha reitti ja tekee uudelle reitille puhtaan kartan.
function reloadMap (){
    map.remove();
    map = L.map('map',{ scrollWheelZoom: true}).setView([popupLat[rNum], popupLon[rNum]], 10);
    addButtonEvent();
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
    routing();
}
function newMapRouting(){
    // Jos on olemassa vanha reitti:dir!=0, kartta uudelleenladataan: reloadMap()
    if(dir == 0) {
        routing();

    } else {
        reloadMap();
         
}
}
//Funktio lisää karttaan reitin käyttäjän sijainnin, sekä rannan sijainnin välille.
function routing() {
    
    dir = MQ.routing.directions()
    dir.optimizedRoute({
        locations: [
            {latLng: {lat: posLat, lng: posLon}} //A Pisteenä:Käyttäjän sijainti
            ,
            {latLng: {lat: popupLat[rNum], lng: popupLon[rNum]}}] //B Pisteenä: Rannan sijainti. Haetaan globaalista taulukkomuuttujasta rannan numeron avulla
    });
   
    map.addLayer(MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true
    }));
}

/*


    __ __           __  __        __                   ___    __                             
   / //_/___ ______/ /_/ /_____ _/ /______  ____  ____/ (_)  / /___  ____  ____  __  ____  __
  / ,< / __ `/ ___/ __/ __/ __ `/ //_/ __ \/ __ \/ __  / /  / / __ \/ __ \/ __ \/ / / / / / /
 / /| / /_/ / /  / /_/ /_/ /_/ / ,< / /_/ / /_/ / /_/ / /  / / /_/ / /_/ / /_/ / /_/ / /_/ / 
/_/ |_\__,_/_/   \__/\__/\__,_/_/|_|\____/\____/\__,_/_/  /_/\____/ .___/ .___/\__,_/\__,_/  

*/