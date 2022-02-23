let map = L.map('map').setView([60.247757713113934, 24.833770383021534], 10);
let beachesData =[];

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
        for (let i=0; i<beaches.data.length; i++) { //length =14
            beachesData[i]=beaches.data[i].url;
        }
        console.log(beaches.data.length);
        console.log(beaches.data[0].url);
        console.log(beachesData[7]);
        for (let i=0; i<beachesData.length; i++) {
            try {
                const vastaus2 = await fetch(beachesData[i]);              // Käynnistetään haku
                const beaches2 = await vastaus2.json();
                console.log(beaches2.meta.name);
                let lat = beaches2.meta.lat
                let lon = beaches2.meta.lon
                let marker = L.marker([lat, lon]).addTo(map);
                marker.bindPopup(`<b>${beaches2.meta.name}<b><br><b>Ilman lampotila: ${beaches2.data[beaches2.data.length-1].temp_air}\xB0C<br><b>Veden lampotila: ${beaches2.data[beaches2.data.length-1].temp_water}\xB0C`);
            }
            catch (error) {                                          // Otetaan heitetty virheilmoitus kiinni
                console.log(error)
            }
        }

    } catch (error) {                                          // Otetaan heitetty virheilmoitus kiinni
        console.log(error)
    }
}
addMarkers();

