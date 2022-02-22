// index.js
let data = './json/rannat.json';
let websiteCore = document.body.innerHTML = '<header><h1>otsikkopohja</h1> </header><nav> </a> |<a href="/css/">CSS</a> |<a href="/js/">JavaScript</a> |<a href="/json/">json</a> |</nav> <main><article ><p id="demo"></p><p id="tulos"></p><p id=twitterbot></p><br></article><aside ></aside></main><footer id="footerid"></footer>'
let twitterBot = document.getElementById('twitterbot').innerHTML = '<a class="twitter-timeline" data-width="220" data-height="400" data-theme="light" href="https://twitter.com/rantavahtipksr8?ref_src=twsrc%5Etfw">Meidän twitterbotti</a> '
function urlrandomizer(data1) {
  fetch(data).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw 'HTTP ERROR';
    }
  }).then((jsonData) => {

    let datarandomurl = jsonData.data[getRandomIntInclusive(0, 14)].url;

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    searchf(datarandomurl);
  }).catch((error) => {
    console.log('error');
  });
}

function searchf(data1) {

  fetch(data1).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw 'HTTP ERROR';
    }
  }).then((jsonData) => {
    let laskejsondata = jsonData.data.length - 1;

    let lat = jsonData.meta.lat;
    let lon = jsonData.meta.lon;
    let minuslat = (lat - 0.09);
    let minuslon = (lon - 0.09);

    let latplus = (lat + 0.09);
    let lonplus = (lon + 0.09);
    let bbox = minuslon.toFixed(3) + ',' + minuslat.toFixed(3) + ',' +
        lonplus.toFixed(3) + ',' + latplus.toFixed(3) + ',';

    console.log(bbox);

    let paikannimi = jsonData.meta.name;
    let aikajsondata = jsonData.data[laskejsondata].time;
    let vedenlampotiladata = jsonData.data[laskejsondata].temp_water;
    let ilmalampotiladata = jsonData.data[laskejsondata].temp_air;

    let last = document.getElementById('demo').innerHTML = '<h1>' + paikannimi +
        '</h1>' + '<p>Vedenlämpötila: ' + vedenlampotiladata + '</p>' +
        '<p> Ilmanlämpötila: ' + ilmalampotiladata + '</p>';
    nouda(bbox);

  }).catch((error) => {
    console.log('error');
  });
}

function nouda(query) {

  let arvo = `https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::timevaluepair&bbox=${query}epsg::4326&parameters=t2m,ws_10min&crs=EPSG::3067&`;

  console.log(arvo);
  fetch(arvo).then(response => response.text()).then((xml) => {
    console.log(xml);
    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xml, 'application/xml');
    let mittaussarja2 = xmlDOM.querySelector('MeasurementTimeseries').
        querySelectorAll('value');
    let vahenna2 = mittaussarja2.length - 1;
    let aikasarja2 = xmlDOM.querySelector('MeasurementTimeseries').
        querySelectorAll('time');
    let vahennaaika2 = aikasarja2.length - 1;
    let paikka3 = xmlDOM.querySelectorAll('name');
    console.log(paikka3[1].childNodes[0]);
    console.log(mittaussarja2);
    console.log(vahenna2);
    console.log(mittaussarja2[vahenna2]);
    console.log(aikasarja2[vahennaaika2]);

    let tulos = document.getElementById('tulos').innerText = 'sijainnissa: ' +
        paikka3[1].childNodes[0].textContent + ' on lämpötila ' +
        mittaussarja2[vahenna2].textContent + ' celsiusta' +
        ' kello oli järjestelmän mukaan: ' +
        aikasarja2[vahennaaika2].textContent;
    console.log(tulos);
  });
}

window.onload = () => {
  urlrandomizer(data);

};
// TORIN KOODI ALKAA //
//funktio rantojen tietojen hakemiseen.
async function haeRantalista() {

    const vastaus = await fetch("./json/beaches.json");
    // Jos tapahtuu virhe, heitetään ilmoitus
    if (!vastaus.ok) throw new Error("Jokin meni pieleen");
    // Muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi.

    const data = await vastaus.json();

    // Tallennetaan logiin vastaus vastaus
    // console.log(data);

    //Tarkistetaan onhan rantalista olemassa
    try{
        let kokeilu = data.beaches[0];
    } catch (error) {
        !alert ("Tiedostoa, josta lista rannoista ja niiden datan sijainnista, ei ole olemassa.");
    }

    //Näistä löytyy rantojen nimi ja datan sijainti
    let rantaNimi = [];
    let rantaData = [];

    let select = document.createElement("select");
    select.name = "rannat";
    select.id = "rannat";

    for (let i = 0; i < data.beaches.length; i++) {

        try {
            rantaNimi.push(data.beaches[i].name);
            //console.log("lol" + data.beaches[i].name);
        } catch (error){
            console.log("Rannalla " + i + " ei ole nimeä");
        }
        try{
            rantaData.push(data.beaches[i].url);
        } catch (error){
            console.log("Rannalla " + i + " ei ole datan sijaintia");
        }
        let option = document.createElement("option");
        option.value = rantaData[i];
        option.text = rantaNimi[i];
        select.appendChild(option);
    }
    let label = document.createElement("label");
    label.innerHTML = "Valitse rantasi: ";
    label.htmlFor = "rannat";
    document.getElementById("demo").appendChild(label).appendChild(select);

    let nappi = document.createElement("button");
    nappi.name = "hakunappi";
    nappi.id = "hakunappi";
    nappi.innerHTML = "Hae rannan tiedot!";
    document.getElementById("demo").appendChild(nappi);
    nappi.addEventListener('click', haeValittuRanta, false);

    let tulostusAlue = document.createElement("div");
    tulostusAlue.name = "tulostusAlue";
    tulostusAlue.id = "tulostusAlue";
    document.getElementById("tulos").appendChild(tulostusAlue);

    haeValittuRanta(rantaData[0]);
}

// Funktio joka tyhjentää vanhat hakutulokset
function tyhjenna(){
    try{
        // Poistetaan sarjojen elementti, eli tyhjennetään sivu vanhoista hakutuloksista
        document.getElementById("tulostusAlue").remove();
        // Luodaan uusi elementti sarjojen uudelle olemassaololle
        let uusiElementti = document.createElement("div");
        uusiElementti.id += "tulostusAlue";
        uusiElementti.className += "tulostusAlue";
        document.getElementById("tulos").appendChild(uusiElementti);

    }catch (error){
        // Tämän errorin ei pitäisi koskaan tapahtua
        console.log("Ruudun siistiminen epäonnistui!");
    }
}


async function haeValittuRanta(evt){
    //Tyhjennetään vanhat hakutulokset
    tyhjenna();

    const url = document.getElementById("rannat").value;
    const vastaus = await fetch("https://iot.fvh.fi/opendata/uiras/"+url+".json");
    // Jos tapahtuu virhe, heitetään ilmoitus
    if (!vastaus.ok) throw new Error("Jokin meni pieleen");
    // Muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi.

    const data = await vastaus.json();

    // Logataan vastaus
    console.log(data);

    //Tarkistetaan onhan rannan lämpötiladata varmasti olemassa
    try{
        let kokeilu = data[0];
    } catch (error) {
        !alert ("Rannan lämpötiladatan hakeminen epäonnistui");
    }
    try {
        document.getElementById("tulostusAlue").innerHTML += data.meta.name + " tiedot:<br>";
    } catch(error) {
        console.log("Valitun rannan nimeä ei löytynyt");
    }
    try {
        document.getElementById("tulostusAlue").innerHTML += "Veden lämpötila on " + data.data[data.data.length - 1].temp_water +
            "°C<br>";
    } catch (error) {
        console.log("Valitun rannan veden lämpötilaa ei löytynyt");
    }
    try {
        document.getElementById("tulostusAlue").innerHTML += "Ilman lämpötila on " + data.data[data.data.length - 1].temp_air + "°C<br>";
    } catch (error) {
        console.log("Valitun rannan ilman lämpötilaa ei löytynyt");
    }
    try {
        document.getElementById("tulostusAlue").innerHTML += "Mitattu ajassa " + data.data[data.data.length - 1].time + "<br>";
    } catch(error) {
        console.log("Valitun rannan aikaa ei löytynyt");
    }
}
window.onload = () => {
    haeRantalista();
}
