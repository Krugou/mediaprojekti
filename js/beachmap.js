let map = L.map('map').setView([60.247757713113934, 24.833770383021534], 10);
let beachesData =[];
/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet turpis sed tortor congue euismod. Proin orci leo, rutrum at laoreet vel, finibus at mi. Pellentesque sodales ultrices sem in rutrum. Fusce vel nulla et ipsum pretium sodales vitae nec orci. Nam rhoncus convallis mauris eget efficitur. Aenean vel enim ultrices, pulvinar metus quis, consequat massa.
 Cras varius nulla at varius euismod. Sed ligula arcu, placerat in commodo finibus,
 tristique id sapien. Nullam lobortis tortor arcu, cursus efficitur magna pharetra eu. Phasellus mollis, libero ac tempus ultrices, diam quam vestibulum nisi,
 a aliquam augue massa vel elit. Quisque porta justo eleifend ex dapibus ultricies. Duis vestibulum mollis eros ac tristique. In hac habitasse platea dictumst.
  Maecenas luctus erat ac rutrum dignissim. Nulla a ex libero. Pellentesque vel massa consequat, commodo nisl ut, viverra orci.

*/
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
    //    console.log(beaches.beaches.length);
    //    console.log(beaches.beaches[0].url);
    //    console.log(beachesData[7]);
        for (let i=0; i<beachesData.length; i++) {
            try {
                const vastaus2 = await fetch(beachesData[i]);              // Käynnistetään haku
                const beaches2 = await vastaus2.json();
    //            console.log(beaches2.meta.name);
                let lat = beaches2.meta.lat
                let lon = beaches2.meta.lon
                let marker = L.marker([lat, lon]).addTo(map);
                if (beaches2.data[beaches2.data.length-1].temp_water >= -50) {
                    marker.bindPopup(`<b>${beaches2.meta.name}<b><br><b>Ilman lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_air}\xB0C<br><b>Veden lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_water}\xB0C`);
                }
                else if (beaches2.data[beaches2.data.length-1].temp_water <= -50) {
                    marker.bindPopup(`<b>${beaches2.meta.name}<b><br><b>Ilman lämpotila: ${beaches2.data[beaches2.data.length - 1].temp_air}\xB0C<br><b>Veden lämpotila: Tuntematon`);
                }
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

