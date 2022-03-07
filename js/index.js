"use strict";
// index.js
const data = './json/beaches.json';
const nimipaivat = './json/nimipaivat.json';

/*let websiteCore = document.body.innerHTML = '<header><h1>otsikkopohja</h1> </header><nav> </a> |<a href="/css/">CSS</a> |<a href="/js/">JavaScript</a> |<a href="/json/">json</a> |</nav><main ><article ><p id="demo"></p><p id="tulos"></p><button onclick="getLocation()">Hae sijaintisi</button><p id="sijainti"></p><br><p id=saatulos></p></article><section id=socialmap><p id=twitterbot></p><div id="map"></div></section><aside ></aside></main><p id="palaute"></p><footer id="footerid"></footer>'
let twitterBot = document.getElementById('twitterbot').innerHTML = '<a class="twitter-timeline" data-width="100vw" data-height="400" data-theme="light" href="https://twitter.com/rantavahtipksr8?ref_src=twsrc%5Etfw">Meidän twitterbotti</a> '
let footerEnd = document.getElementById('footerid').innerHTML = '<div><h3>Tekijät:</h3><p>Tor-Erik</p><p>Joonas</p><p>Aleksi</p></div><div><h3>social</h3><a href="https://twitter.com/rantavahtipksr8">Twitterbotti</a></div><div><h3>sivukartta</h3><p>sivu 2</p><p>sivu 3</p><button onclick="palauteLomake()">palautelomake</button></div>'
*/
nameDaySearch()

// nimipäivä haku muodossa "P.K"
function nameDaySearch(){
  fetch(nimipaivat).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw 'HTTP ERROR';
    }
  }).then((jsonData) => {
    let today = new Date();
    let currentDayMonth=today.getUTCDate()+'.'+(today.getUTCMonth()+1);
   // console.log(currentDayMonth)
    for (let i = 0; i < jsonData.suominimipaivat.length; i++){
      if (currentDayMonth === jsonData.suominimipaivat[i].date){
        //console.log(jsonData.suominimipaivat[i].name)
        document.getElementById('nimipaivasankari').innerHTML = ' Nimipäivää juhlii tänään: '+jsonData.suominimipaivat[i].name+' ';
      }
    
    
  }
  })
}
function palauteLomake () {
    document.getElementById('palaute').innerHTML = '<form action=".php"> <fieldset><legend>Palautelomake</legend><label for="fname">Etunimi:</label><br> <input type="text" id="fname" name="fname" placeholder="Matti"><br>  <label for="lname">Sukunimi:</label><br>  <input type="text" id="lname" name="lname" placeholder="Meikäläinen"><br> <label for="email">Sähköposti:</label><br><input type="email" id="email" name="email" placeholder="mattimeikalainen@hel.fi"> <br><br><label for="feedback">Palaute:</label><br><textarea id="feedback" placeholder="Palautteesi"></textarea><br><input type="submit" value="Submit"><input type="reset"></fieldset></form>';

}
// Sekalaisen rannan hakufunktio
/*
function urlRandomizer(data1) {
  fetch(data).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw 'HTTP ERROR';
    }
  }).then((jsonData) => {

    let dataRandomUrl = "https://iot.fvh.fi/opendata/uiras/"+jsonData.beaches[getRandomIntInclusive(0, jsonData.length)].url+".json";

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    searchFunctionFmi(dataRandomUrl);
  }).catch((error) => {
    console.log('error');
  });
}*/
/*
function searchFunctionFmi(data1) {

  fetch(data1).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw 'HTTP ERROR';
    }
  }).then((jsonData) => {
    let indexOfData = jsonData.beaches.length - 1;

    let lat = jsonData.meta.lat;
    let lon = jsonData.meta.lon;
    let minuslat = (lat - 0.09);
    let minuslon = (lon - 0.09);

    let latplus = (lat + 0.09);
    let lonplus = (lon + 0.09);
    let bbox = minuslon.toFixed(3) + ',' + minuslat.toFixed(3) + ',' +
        lonplus.toFixed(3) + ',' + latplus.toFixed(3) + ',';

 //   console.log(bbox);

    let placeName = jsonData.meta.name;
    let timeTaken = jsonData.data[indexOfData].time;
    let waterTemperatureData = jsonData.data[indexOfData].temp_water;
    let airTemperatureData = jsonData.data[indexOfData].temp_air;

    document.getElementById('demo').innerHTML = '<h1>' + placeName +
        '</h1>' + '<p>Vedenlämpötila: ' + waterTemperatureData + '</p>' +
        '<p> Ilmanlämpötila: ' + airTemperatureData + '</p>';
    fetchWeatherTemperatureData(bbox);
    fetchWeatherSymbolData(bbox);
  }).catch((error) => {
    console.log('error');
  });
}*/
/*
function fetchWeatherHourForecastTemperatureDataBoundingBox(query){
  let arvo = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::hourly::simple&bbox=${query}&parameters=TA_PT1H_AVG`
  //  console.log(arvo);
  fetch(arvo).then(response => response.text()).then((xml) => {
    // console.log(xml);
     let parser = new DOMParser();
     let xmlDOM = parser.parseFromString(xml, 'application/xml');
     let bsWfsElement = xmlDOM.querySelectorAll('BsWfsElement')
     let timeSeriesMeasurementData = bsWfsElement[bsWfsElement.length - 1].querySelector('ParameterValue');
     let getTimeAnomalyData = bsWfsElement[bsWfsElement.length - 1].querySelector('Time');

     
 //console.log(timeSeriesMeasurementData.textContent);
   // console.log(getTimeAnomalyData);
    //console.log(timeSeriesMeasurementData[0]);
  // console.log(getTimeAnomalyData[0]);
       document.getElementById("saatulos").innerText = '<p>Lämpötila ' + timeSeriesMeasurementData.textContent + ' celsiusta' +
          ' kello oli järjestelmän mukaan: ' +
          getTimeAnomalyData.textContent + '</p>';
         //console.log(saatulos)
    // console.log(saatulos);
    
   });
}*/

function windDescription(windSpeed){
    if (windSpeed >= 1 && windSpeed <=3){
        return 'Tyyntä';
    } else if (windSpeed >=4 && windSpeed <=7 ){
        return 'Heikkoa tuulta';
    } else if (windSpeed >=8 && windSpeed <=13){
        return 'Kohtalaista tuulta';
    } else if (windSpeed >=14 && windSpeed <=20){
        return 'Navakkaa tuulta';
    } else if (windSpeed >=21 && windSpeed <=32){
        return 'Myrskyä';
    } else if (windSpeed >=33){
        return 'Hirmumyrskyä';
    } else{
        return 'Tyyntä';
    }
}

// keskimääräinen tuulennopeus,viimeisen tunnin sateenmäärä ja sääsymboli haku
function fetchWeatherHourForecastWeatherSymbolDataPlace(query){
  let arvo = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::hourly::simple&place=${query}&parameters=WS_PT1H_AVG,PRA_PT1H_ACC,WAWA_PT1H_RANK`;
  //  console.log(arvo);
  fetch(arvo).then(response => response.text()).then((xml) => {
    // console.log(xml);
     let parser = new DOMParser();
     let xmlDOM = parser.parseFromString(xml, 'application/xml');
    // PRA_PT1H_ACC on sateenmäärä
     // WAWA_PT1H_RANK on sääsymbolinumero
     // WS_PT1H_AVG on keskimääräinen tuulennopeus
     let bsWfsElement = xmlDOM.querySelectorAll('BsWfsElement');

     //let WS_PT1H_AVGTime = bsWfsElement[bsWfsElement.length - 3].querySelector('Time');
     let WS_PT1H_AVGParameterValue = bsWfsElement[bsWfsElement.length - 3].querySelector('ParameterValue');
     //let PRA_PT1H_ACCTime = bsWfsElement[bsWfsElement.length - 2].querySelector('Time');
     let PRA_PT1H_ACCParameterValue = bsWfsElement[bsWfsElement.length -2].querySelector('ParameterValue');
     //let WAWA_PT1H_RANKTime = bsWfsElement[bsWfsElement.length - 1].querySelector('Time');
     let WAWA_PT1H_RANKParameterValue = bsWfsElement[bsWfsElement.length - 1].querySelector('ParameterValue');

     let wind = windDescription(parseInt(WS_PT1H_AVGParameterValue.textContent));
     document.getElementById('tulostusAlue').innerHTML += wind + ' ' + WS_PT1H_AVGParameterValue.textContent + 'm/s';



     //

    //document.getElementById('tulostusalue').innerHTML += 'Sadetta ' + PRA_PT1H_ACCParameterValue.textContent + ' mm';
     if (PRA_PT1H_ACCParameterValue.textContent === 0){

     }else if(PRA_PT1H_ACCParameterValue.textContent >0){
      document.getElementById('tulostusAlue').innerHTML += ' ' + 'sateenmäärä viimeisen tunnin aikana:' +PRA_PT1H_ACCParameterValue.textContent + ' mm';

     }

     // Alla oleva funktio sijaitsee imgPrints.js tiedostussa.
      let img = document.createElement('img');
     let kuvaData = printSymbols(parseInt(WAWA_PT1H_RANKParameterValue.textContent));
     img.src = kuvaData[0];
     img.alt = kuvaData[1];
      document.getElementById('tulostusAlue').appendChild(img);
      document.getElementById('tulostusAlue').innerHTML += kuvaData[2];
    //console.log(WAWA_PT1H_RANKParameterValue.textContent);
    //console.log(WS_PT1H_AVGParameterValue.textContent+' '+WS_PT1H_AVGTime.textContent)
    //console.log(PRA_PT1H_ACCParameterValue.textContent+' '+PRA_PT1H_ACCTime.textContent)
    //console.log(WAWA_PT1H_RANKParameterValue.textContent+' '+WAWA_PT1H_RANKTime.textContent)

   });
}

// Funktio hakee ja tulostaa 24h päästä olevan lämpötilan. Ehkä käytännöllisempää olisi kertoa huomisen lämpötila klo 12 päivällä, mutta en jaksa säätää
async function fetchTomorrowWeather(lat, lon) {
    let arvo = 'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::simple&latlon=' + lat + ',' + lon+ '&parameters=temperature,windSpeedMS,WeatherSymbol3';
    try {
        await fetch(arvo).then(response => response.text()).then((xml) => {

            const parser = new DOMParser();
            const xmlDOM = parser.parseFromString(xml, 'application/xml');

            let tomorrowTemp = parseFloat(xmlDOM.querySelector('[*|id="BsWfsElement.1.25.1"]').querySelector('ParameterValue').textContent);
            let tomorrowWind = parseFloat(xmlDOM.querySelector('[*|id="BsWfsElement.1.25.2"]').querySelector('ParameterValue').textContent);
            let tomorrowSymb = parseInt(xmlDOM.querySelector('[*|id="BsWfsElement.1.25.3"]').querySelector('ParameterValue').textContent);

            let article = document.createElement('div');
            article.id = 'ennuste';
            article.innerHTML = '<h1>Huomisen sää</h1>';
            try {

                article.innerHTML += 'Lämmintä ' + tomorrowTemp + ' °C<br>';
                article.innerHTML += windDescription(tomorrowWind) + ' ' + tomorrowWind + ' m/s<br>';


            } catch (error) {
                article.innerText = 'Rannan ennusteen haussa tapahtui tuntematon virhe';
                console.log('Rannan ennusteen haussa tapahtui virhe');
            }
            document.getElementById('tulostusAlue').appendChild(article);
            let img = document.createElement('img');
            let kuvaData = printSymbols(tomorrowSymb);
            img.src = kuvaData[0];
            img.alt = kuvaData[1];
            //article.innerHTML += kuvaData[2]+ '<br>';
            document.getElementById('tulostusAlue').appendChild(article);
            document.getElementById('ennuste').appendChild(img);
            article.innerHTML += '<br>' + kuvaData[2] + '<br>';

            document.getElementById('tulostusAlue').appendChild(article);
        });
    } catch(e){
        console.log('Tulevan sään hakeminen epäonnistui')
    }
}

function fetchWeatherTemperatureData(query) {

  let arvo = `https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::timevaluepair&bbox=${query}epsg::4326&parameters=t2m,ws_10min&crs=EPSG::3067&`;

//  console.log(arvo);
  fetch(arvo).then(response => response.text()).then((xml) => {
   // console.log(xml);
    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xml, 'application/xml');
    let timeSeriesMeasurementData = xmlDOM.querySelector('MeasurementTimeseries').
        querySelectorAll('value');
    let getLatestAnomalyData = timeSeriesMeasurementData.length - 1;
    let getTimeAnomalyData = xmlDOM.querySelector('MeasurementTimeseries').
        querySelectorAll('time');
    let getTimeLatestAnomalyData = getTimeAnomalyData.length - 1;
    let getNameAnomalyData = xmlDOM.querySelectorAll('name');
  //  console.log(getNameAnomalyData[1].childNodes[0]);
  //  console.log(timeSeriesMeasurementData);
  // console.log(getLatestAnomalyData);
  // console.log(timeSeriesMeasurementData[getLatestAnomalyData]);
  //  console.log(getTimeAnomalyData[getTimeLatestAnomalyData]);

     document.getElementById('saatulos').innerText = 'sijainnissa: ' +
        getNameAnomalyData[1].childNodes[0].textContent + ' on lämpötila ' +
        timeSeriesMeasurementData[getLatestAnomalyData].textContent + ' celsiusta' +
        ' kello oli järjestelmän mukaan: ' +
        getTimeAnomalyData[getTimeLatestAnomalyData].textContent;
   // console.log(saatulos);
  });
}
function fetchWeatherSymbolData(query) {

  let arvo = `https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::timevaluepair&bbox=${query}epsg::4326&parameters=wawa&crs=EPSG::3067&`;

//  console.log(arvo);
  fetch(arvo).then(response => response.text()).then((xml) => {
   // console.log(xml);
    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xml, 'application/xml');
    let timeSeriesMeasurementData = xmlDOM.querySelector('MeasurementTimeseries').
        querySelectorAll('value');
    let getLatestAnomalyData = timeSeriesMeasurementData.length - 1;
    let getTimeAnomalyData = xmlDOM.querySelector('MeasurementTimeseries').
        querySelectorAll('time');
    let getTimeLatestAnomalyData = getTimeAnomalyData.length - 1;
    let getNameAnomalyData = xmlDOM.querySelectorAll('name');
  //  console.log(getNameAnomalyData[1].childNodes[0]);
  //  console.log(timeSeriesMeasurementData);
  // console.log(getLatestAnomalyData);
  // console.log(timeSeriesMeasurementData[getLatestAnomalyData]);
  //  console.log(getTimeAnomalyData[getTimeLatestAnomalyData]);

    document.getElementById('saasymboli').innerText = 'sijainnissa: ' +
        getNameAnomalyData[1].childNodes[0].textContent + ' on sääsymboli ' +
        timeSeriesMeasurementData[getLatestAnomalyData].textContent + ' tunnus ' +
        ' kello oli järjestelmän mukaan: ' +
        getTimeAnomalyData[getTimeLatestAnomalyData].textContent;
   // console.log(saatulos);
  });
}
//käyttäjän sijainnin hakeminen
let sijainti = document.getElementById('sijainti');
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    sijainti.innerHTML = 'Selaimesi ei tue geopaikannusta.';
  }
}
// auringon nouse ja lasku ajat funktiolla.

function sunriseSunsetTimes(lat,lon){
  let times = SunCalc.getTimes(new Date(),lat,lon);
  document.getElementById('sunrisesunset').innerHTML ='<img id="sunrisesunsetimg" alt="aurinko nousee" src="images/weathersymbols/sunrise.png">'+times.sunrise.toLocaleTimeString('fi-FI')+' <img id="sunrisesunsetimg" alt="aurinko laskee" src="images/weathersymbols/sundown.png">'+times.sunset.toLocaleTimeString('fi-FI');
  console.log('aurinko nousee: '+times.sunrise.toLocaleTimeString('fi-FI')+' aurinko laskee:'+times.sunset.toLocaleTimeString('fi-FI'));
}
// Näytä sijaintikoordinaatit + lisää oman sijainnin kartalle + hakee bounding boxilla lähimmän säähavaintoaseman sen hetken lämpötilan
function showPosition(position) {
    map.setView([position.coords.latitude, position.coords.longitude], 11);
    let minuslat = (position.coords.latitude - 0.15);
  let minuslon = (position.coords.longitude - 0.15);

  let latplus = (position.coords.latitude + 0.15);
  let lonplus = (position.coords.longitude + 0.15);
  let bbox = minuslon.toFixed(3) + ',' + minuslat.toFixed(3) + ',' +
        lonplus.toFixed(3) + ',' + latplus.toFixed(3) + ',';
        let arvo = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::hourly::simple&bbox=${bbox}&parameters=TA_PT1H_AVG`;
        console.log(arvo);
        fetch(arvo).then(response => response.text()).then((xml) => {
          // console.log(xml);
           let parser = new DOMParser();
           let xmlDOM = parser.parseFromString(xml, 'application/xml');
           let bsWfsElement = xmlDOM.querySelectorAll('BsWfsElement');
           let timeSeriesMeasurementData = bsWfsElement[bsWfsElement.length - 1].querySelector('ParameterValue');
           let getTimeAnomalyData = bsWfsElement[bsWfsElement.length - 1].querySelector('Time');
          let correctTimeTaken= new Date(getTimeAnomalyData.textContent);
          // console.log(correctTimeTaken)
    let marker =L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    marker.bindPopup('Oman sijainnin tiedot <br>'+ '<p>Lämpötila: ' + timeSeriesMeasurementData.textContent + '\xB0C<br>' +
    'Kello:' +
    correctTimeTaken.toLocaleTimeString('fi-FI') + '</p>'+ '' + "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude+ ' <a href="https://www.google.fi/maps/search/'+position.coords.latitude+','+position.coords.longitude+
    '/">https://www.google.fi/maps/search/'+position.coords.latitude+','+position.coords.longitude+'/</a>');
    
  });
}
      
  
 //fetchWeatherTemperatureData(bbox);
 //fetchWeatherSymbolData(bbox);

 


// TORIN KOODI ALKAA //

// Funktio rantojen tietojen hakemiseen
// Ranta on rannan datan sijainti ilman ilman. Jos ranta on tyhjä, palauttaa beaches.jsonin
async function haeRanta(ranta){
    let vastaus;
    if (ranta === undefined){
        vastaus = await fetch('./json/beaches.json');
    } else{
        vastaus = await fetch('https://iot.fvh.fi/opendata/uiras/'+ranta+'.json');
    }
    // Jos tapahtuu virhe, heitetään ilmoitus
    if (!vastaus.ok) throw new Error('Jokin meni pieleen');
    // Muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi.

    const data = await vastaus.json();

    // Logataan vastaus
    // console.log(data);

    //Tarkistetaan onhan rannan lämpötiladata varmasti olemassa
    try{
        parseFloat(data[0]);
    } catch (error) {
        !alert ('Rannan lämpötiladatan hakeminen epäonnistui');
    }

    return data;
}

async function haeRantalista() {

    let data = await haeRanta();
    //Näistä löytyy rantojen nimi ja datan sijainti
    let rantaNimi = [];
    let rantaData = [];

    let select = document.createElement('select');
    select.name = 'rannat';
    select.id = 'rannat';

    for (let i = 0; i < data.beaches.length; i++) {

        try {
            rantaNimi.push(data.beaches[i].name);
        } catch (error){
            console.log('Rannalla ' + i + ' ei ole nimeä');
        }
        try{
            rantaData.push(data.beaches[i].url);
        } catch (error){
            console.log('Rannalla ' + i + ' ei ole datan sijaintia');
        }
        let option = document.createElement('option');
        option.value = rantaData[i];
        option.text = rantaNimi[i];
        select.appendChild(option);
    }
    let label = document.createElement('label');
    label.innerHTML = 'Valitse rantasi: ';
    label.htmlFor = 'rannat';
    document.getElementById('rannanTiedot').appendChild(label).appendChild(select);

    let nappi = document.createElement('button');
    nappi.name = 'hakunappi';
    nappi.id = 'hakunappi';
    
    nappi.innerHTML = 'Hae rannan tiedot!';
    document.getElementById("rannanTiedot").appendChild(nappi);
    nappi.addEventListener('click', haeValittuRanta, false);

    let tulostusAlue = document.createElement('div');
    tulostusAlue.name = 'tulostusAlue';
    tulostusAlue.id = 'tulostusAlue';
    document.getElementById('tulos').appendChild(tulostusAlue);

    haeValittuRanta();
    //console.log(Math.floor(Math.random() * data.beaches.length));
}

// Funktio joka tyhjentää vanhat hakutulokset
function tyhjenna(){
    try{
        // Poistetaan rantadatan elementti, eli tyhjennetään sivu vanhoista rantadatan hakutuloksista
        document.getElementById('tulostusAlue').remove();
        // Luodaan uusi elementti rantadatan uudelle olemassaololle
        let uusiElementti = document.createElement('div');
        uusiElementti.id += 'tulostusAlue';
        uusiElementti.className += 'tulostusAlue';
        document.getElementById('tulos').appendChild(uusiElementti);

    }catch (error){
        // Tämän errorin ei pitäisi koskaan tapahtua
        console.log('Ruudun siistiminen epäonnistui!');
    }
}

// Funktio katsoo hakuvalikossa olevan valinnan ja tulostaa sen rannan tiedot
async function haeValittuRanta(evt){
    // Tyhjennetään vanhat hakutulokset
    tyhjenna();

    //const url = document.getElementById("rannat").value;
    let data = await haeRanta(document.getElementById('rannat').value);

    //Tarkistetaan onhan rannan lämpötiladata varmasti olemassa
    try{
        parseFloat(data[0]);
    } catch (error) {
        !alert ('Rannan lämpötiladatan hakeminen epäonnistui');
    }

    let jsonData = await haeRanta();
    try {
        fetchWeatherHourForecastWeatherSymbolDataPlace(jsonData.beaches[document.getElementById("rannat").selectedIndex].location);
    } catch(error){
        console.log('Rannan lämpötilasymbolin haku epäonnistui');
    }
    try{
        document.getElementById('rannanNimi').innerHTML = data.meta.name;
    } catch(error){
        document.getElementById('rannanNimi').innerText = "Tuntematon Ranta";
        console.log('Rannan nimen haku epäonnistui.');
    }
        document.getElementById('tulostusAlue').innerHTML += '<h2>Rannan tiedot:</h2>';

    try {
        document.getElementById('tulostusAlue').innerHTML += 'Veden lämpötila: ' + data.data[data.data.length - 1].temp_water +
            '°C<br>';
    } catch (error) {
        document.getElementById('tulostusAlue').innerHTML += 'Veden lämpötila: tuntematon <br>';
        console.log('Valitun rannan veden lämpötilaa ei löytynyt');
    }
    try {
        document.getElementById('tulostusAlue').innerHTML += 'Ilman lämpötila: ' + data.data[data.data.length - 1].temp_air + '°C<br>';
    } catch (error) {
        document.getElementById('tulostusAlue').innerHTML += 'Ilman lämpötila: tuntematon';
        console.log('Valitun rannan ilman lämpötilaa ei löytynyt');
    }
    try {
        document.getElementById('tulostusAlue').innerHTML += 'Mitattu ajassa ' + data.data[data.data.length - 1].time + '<br>';
    } catch(error) {
        document.getElementById('tulostusAlue').innerHTML += 'Mitattu ajassa tuntematon aika<br>';
        console.log('Valitun rannan aikaa ei löytynyt');
    } 
    try {
        document.getElementById('rantakuva').src = 'images/beaches/' + document.getElementById('rannat').value + '.png';
    } catch(error) {
        console.log('Virhe rannan kuvan kanssa.');
        document.getElementById('rantakuva').src = 'images/placeholder.png';
    }
    fetchTomorrowWeather(jsonData.beaches[document.getElementById('rannat').selectedIndex].lat, jsonData.beaches[document.getElementById('rannat').selectedIndex].lon);

}
window.onload = () => {
    haeRantalista();
    //const palauteNappi = document.getElementById('palauteLomake'),


}
