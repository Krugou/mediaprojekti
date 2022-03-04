
// index.js
let data = './json/beaches.json';

/*let websiteCore = document.body.innerHTML = '<header><h1>otsikkopohja</h1> </header><nav> </a> |<a href="/css/">CSS</a> |<a href="/js/">JavaScript</a> |<a href="/json/">json</a> |</nav><main ><article ><p id="demo"></p><p id="tulos"></p><button onclick="getLocation()">Hae sijaintisi</button><p id="sijainti"></p><br><p id=saatulos></p></article><section id=socialmap><p id=twitterbot></p><div id="map"></div></section><aside ></aside></main><p id="palaute"></p><footer id="footerid"></footer>'
let twitterBot = document.getElementById('twitterbot').innerHTML = '<a class="twitter-timeline" data-width="100vw" data-height="400" data-theme="light" href="https://twitter.com/rantavahtipksr8?ref_src=twsrc%5Etfw">Meidän twitterbotti</a> '
let footerEnd = document.getElementById('footerid').innerHTML = '<div><h3>Tekijät:</h3><p>Tor-Erik</p><p>Joonas</p><p>Aleksi</p></div><div><h3>social</h3><a href="https://twitter.com/rantavahtipksr8">Twitterbotti</a></div><div><h3>sivukartta</h3><p>sivu 2</p><p>sivu 3</p><button onclick="palauteLomake()">palautelomake</button></div>'
*/
function palauteLomake () {
let palauteLomake = document.getElementById("palaute").innerHTML = '<form action=".php"> <fieldset><legend>Palautelomake</legend><label for="fname">Etunimi:</label><br> <input type="text" id="fname" name="fname" placeholder="Matti"><br>  <label for="lname">Sukunimi:</label><br>  <input type="text" id="lname" name="lname" placeholder="Meikäläinen"><br> <label for="email">Sähköposti:</label><br><input type="email" id="email" name="email" placeholder="mattimeikalainen@hel.fi"> <br><br><label for="feedback">Palaute:</label><br><textarea id="feedback" placeholder="Palautteesi"></textarea><br><input type="submit" value="Submit"><input type="reset"></fieldset></form>'

}
// Sekalaisen rannan hakufunktio
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
}

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

    let last = document.getElementById('demo').innerHTML = '<h1>' + placeName +
        '</h1>' + '<p>Vedenlämpötila: ' + waterTemperatureData + '</p>' +
        '<p> Ilmanlämpötila: ' + airTemperatureData + '</p>';
    fetchWeatherTemperatureData(bbox);
    fetchWeatherSymbolData(bbox);
  }).catch((error) => {
    console.log('error');
  });
}
function fetchWeatherHourForecastTemperatureDataBoundingBox(query){
  let arvo = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::hourly::simple&bbox=${query}&parameters=TA_PT1H_AVG`
  //  console.log(arvo);
  fetch(arvo).then(response => response.text()).then((xml) => {
    // console.log(xml);
     let parser = new DOMParser();
     let xmlDOM = parser.parseFromString(xml, 'application/xml');
     let timeSeriesMeasurementData = xmlDOM.querySelector('BsWfsElement').
         querySelectorAll('ParameterValue');
     let getLatestAnomalyData = timeSeriesMeasurementData[0];
     let getTimeAnomalyData = xmlDOM.querySelector('BsWfsElement').
            querySelectorAll('Time');
     
  
     
  // console.log(timeSeriesMeasurementData);
  //  console.log(getLatestAnomalyData);
  //  console.log(timeSeriesMeasurementData[0]);
  //   console.log(getTimeAnomalyData[0]);
     let saatulos = document.getElementById('saatulos').innerText = 'sijainnissa: ' +
         query + ' on lämpötila ' +
         timeSeriesMeasurementData[0].textContent + ' celsiusta' +
         ' kello oli järjestelmän mukaan: ' +
         getTimeAnomalyData[0].textContent;
    // console.log(saatulos);
   });
}
// keskimääräinen tuulennopeus,viimeisen tunnin sateenmäärä ja sääsymboli haku
function fetchWeatherHourForecastWeatherSymbolDataPlace(query){
  let arvo = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::hourly::simple&place=${query}&parameters=WS_PT1H_AVG,PRA_PT1H_ACC,WAWA_PT1H_RANK`
  //  console.log(arvo);
  fetch(arvo).then(response => response.text()).then((xml) => {
    // console.log(xml);
     let parser = new DOMParser();
     let xmlDOM = parser.parseFromString(xml, 'application/xml');
    // PRA_PT1H_ACC on sateenmäärä
     // WAWA_PT1H_RANK on sääsymbolinumero
     // WS_PT1H_AVG on keskimääräinen tuulennopeus
     let bsWfsElement = xmlDOM.querySelectorAll('BsWfsElement')

     let WS_PT1H_AVGTime = bsWfsElement[bsWfsElement.length - 3].querySelector('Time');
     let WS_PT1H_AVGParameterValue = bsWfsElement[bsWfsElement.length - 3].querySelector('ParameterValue');
     let PRA_PT1H_ACCTime = bsWfsElement[bsWfsElement.length - 2].querySelector('Time');
     let PRA_PT1H_ACCParameterValue = bsWfsElement[bsWfsElement.length -2].querySelector('ParameterValue');
     let WAWA_PT1H_RANKTime = bsWfsElement[bsWfsElement.length - 1].querySelector('Time');
     let WAWA_PT1H_RANKParameterValue = bsWfsElement[bsWfsElement.length - 1].querySelector('ParameterValue'); 
     let windSpeed = document.getElementById("tuulenNopeus").innerHTML= 'tuulen nopeus nyt: '+ WS_PT1H_AVGParameterValue.textContent + 'm/s'
      if (PRA_PT1H_ACCParameterValue.textContent == 0){
        
      }else if(PRA_PT1H_ACCParameterValue.textContent >0){
        document.getElementById("sateenmaara").innerHTML= ' ' + 'sateenmäärä viimeisen tunnin aikana:' +PRA_PT1H_ACCParameterValue.textContent + ' mm' 
      }
      


      if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 0){
          let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/sun.png">'

          console.log('Ei merkittäviä sääilmiöitä (minkään alla olevan WaWa-koodin ehdot eivät täyty)')
         }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 4){ 
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/sun.png">'
 console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys vähintään 1 km')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 5){ 
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
 console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys alle 1 km')
   }
 
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 10){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Utua')
   }
 
 
 
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 20){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Sumua')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 21){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Sadetta (olomuoto on määrittelemätön)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 22){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Tihkusadetta (ei jäätävää) tai lumijyväsiä')
 }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 23){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Vesisadetta (ei jäätävää)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 24){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/snow.png">'
  console.log('Lumisadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 25){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/snowcloud.png">'
  console.log('Jäätävää vesisadetta tai jäätävää tihkua')
   }
 
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 30){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('– SUMUA')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 31){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Sumua tai jääsumua erillisinä hattaroina')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 32){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Sumua tai jääsumua, joka on ohentunut edellisen tunnin aikana')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 33){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Sumua tai jääsumua, jonka tiheydessä ei ole tapahtunut merkittäviä muutoksia edellisen tunnin aikana')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 34){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Sumua tai jääsumua, joka on muodostunut tai tullut sakeammaksi edellisen tunnin aikana')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 40){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('SADETTA (olomuoto on määrittelemätön)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 41){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Heikkoa tai kohtalaista sadetta (olomuoto on määrittelemätön)') 
  }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 42){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kovaa sadetta (olomuoto on määrittelemätön)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 50){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('TIHKUSADETTA (heikkoa, ei jäätävää)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 51){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Heikkoa tihkua, joka ei ole jäätävää')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 52){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Kohtalaista tihkua, joka ei ole jäätävää')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 53){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Kovaa tihkua, joka ei ole jäätävää')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 54){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Jäätävää heikkoa tihkua')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 55){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Jäätävää kohtalaista tihkua')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 56){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Jäätävää kovaa tihkua')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 60){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('VESISADETTA (heikkoa, ei jäätävää)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 61){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Heikkoa vesisadetta, joka ei ole jäätävää')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 62){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Kohtalaista vesisadetta, joka ei ole jäätävää')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 63){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Kovaa vesisadetta, joka ei ole jäätävää')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 64){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Jäätävää heikkoa vesisadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 65){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">'
  console.log('Jäätävää kohtalaista vesisadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 66){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Jäätävää kovaa vesisadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 67){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/snowcloud.png">'
  console.log('Heikkoa lumensekaista vesisadetta tai tihkua (räntää)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 68){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kohtalaista tai kovaa lumensekaista vesisadetta tai tihkua (räntää)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 70){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('LUMISADETTA')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 71){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Heikkoa lumisadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 72){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kohtalaista lumisadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 73){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Tiheää lumisadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 74){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Heikkoa jääjyvässadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 75){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kohtalaista jääjyväsadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 76){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kovaa jääjyväsadetta')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 77){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Lumijyväsiä')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 78){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Jääkiteitä')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 80){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('KUUROJA TAI AJOITTAISTA SADETTA (heikkoja)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 81){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Heikkoja vesikuuroja')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 82){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kohtalaisia vesikuuroja')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 83){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kovia vesikuuroja')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 84){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Ankaria vesikuuroja (>32 mm/h)')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 85){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Heikkoja lumikuuroja')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 86){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kohtalaisia lumikuuroja')
   }
 else if(parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 87){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Kovia lumikuuroja')
   }
 else if (parseInt(WAWA_PT1H_RANKParameterValue.textContent) == 89){
    let saakuva = document.getElementById("saakuva").innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">'
  console.log('Raekuuroja mahdollisesti yhdessä vesi- tai räntäsateen kanssa')
   }

    //console.log(WS_PT1H_AVGParameterValue.textContent+' '+WS_PT1H_AVGTime.textContent)
    //console.log(PRA_PT1H_ACCParameterValue.textContent+' '+PRA_PT1H_ACCTime.textContent)
    //console.log(WAWA_PT1H_RANKParameterValue.textContent+' '+WAWA_PT1H_RANKTime.textContent)
         
    

  
     
   });
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

    let saatulos = document.getElementById('saatulos').innerText = 'sijainnissa: ' +
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

    let weatherSymbol3 = document.getElementById('saasymboli').innerText = 'sijainnissa: ' +
        getNameAnomalyData[1].childNodes[0].textContent + ' on sääsymboli ' +
        timeSeriesMeasurementData[getLatestAnomalyData].textContent + ' tunnus ' +
        ' kello oli järjestelmän mukaan: ' +
        getTimeAnomalyData[getTimeLatestAnomalyData].textContent;
   // console.log(saatulos);
  });
}
//käyttäjän sijainnin hakeminen
let sijainti = document.getElementById("sijainti");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    sijainti.innerHTML = "Selaimesi ei tue geopaikannusta.";
  }
}
// Näytä sijaintikoordinaatit + lisää oman sijainnin kartalle + hakee bounding boxilla lähimmän säähavaintoaseman sen hetken lämpötilan
function showPosition(position) {
    map.setView([position.coords.latitude, position.coords.longitude], 11);
    
    let marker =L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    marker.bindPopup('Oma sijainti');
    let times = SunCalc.getTimes(new Date(),position.coords.latitude,position.coords.longitude);
  sijainti.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude+ ' <a href="https://www.google.fi/maps/search/'+position.coords.latitude+','+position.coords.longitude+
  '/">https://www.google.fi/maps/search/'+position.coords.latitude+','+position.coords.longitude+'/</a>' + '<br> aurinko nousee: '+times.sunrise.getHours()+':' + times.sunrise.getMinutes()+' aurinko laskee:'+times.sunset.getHours()+':' + times.sunset.getMinutes();
  let minuslat = (position.coords.latitude - 0.15);
  let minuslon = (position.coords.longitude - 0.15);

  let latplus = (position.coords.latitude + 0.15);
  let lonplus = (position.coords.longitude + 0.15);
  let bbox = minuslon.toFixed(3) + ',' + minuslat.toFixed(3) + ',' +
        lonplus.toFixed(3) + ',' + latplus.toFixed(3) + ',';
 //fetchWeatherTemperatureData(bbox);
 //fetchWeatherSymbolData(bbox);
 fetchWeatherHourForecastTemperatureDataBoundingBox(bbox)
} 
let times = SunCalc.getTimes(new Date(),)
// TORIN KOODI ALKAA //

// Funktio rantojen tietojen hakemiseen
// Ranta on rannan datan sijainti ilman ilman. Jos ranta on tyhjä, palauttaa beaches.jsonin
async function haeRanta(ranta){
    let vastaus;
    if (ranta === undefined){
        vastaus = await fetch("./json/beaches.json");
    } else{
        vastaus = await fetch("https://iot.fvh.fi/opendata/uiras/"+ranta+".json");
    }
    // Jos tapahtuu virhe, heitetään ilmoitus
    if (!vastaus.ok) throw new Error("Jokin meni pieleen");
    // Muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi.

    const data = await vastaus.json();

    // Logataan vastaus
    // console.log(data);

    //Tarkistetaan onhan rannan lämpötiladata varmasti olemassa
    try{
        let kokeilu = data[0];
    } catch (error) {
        !alert ("Rannan lämpötiladatan hakeminen epäonnistui");
    }

    return data;
}

async function haeRantalista() {

    let data = await haeRanta();
    //Näistä löytyy rantojen nimi ja datan sijainti
    let rantaNimi = [];
    let rantaData = [];

    let select = document.createElement("select");
    select.name = "rannat";
    select.id = "rannat";

    for (let i = 0; i < data.beaches.length; i++) {

        try {
            rantaNimi.push(data.beaches[i].name);
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
// Funktio katsoo hakuvalikossa olevan valinnan ja tulostaa sen rannan tiedot

async function haeValittuRanta(evt){
    // Tyhjennetään vanhat hakutulokset
    tyhjenna();

    //const url = document.getElementById("rannat").value;
    let data = await haeRanta(document.getElementById("rannat").value);

    //Tarkistetaan onhan rannan lämpötiladata varmasti olemassa
    try{
        let kokeilu = data[0];
    } catch (error) {
        !alert ("Rannan lämpötiladatan hakeminen epäonnistui");
    }

    let jsonData = await haeRanta();
    fetchWeatherHourForecastWeatherSymbolDataPlace(jsonData.beaches[document.getElementById("rannat").selectedIndex].location);

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
    try {
        document.getElementById("rantakuva").src = "images/beaches/" + document.getElementById("rannat").value + ".png";
    } catch(error) {
        console.log("Virhe rannan kuvan kanssa.");
        document.getElementById("rantakuva").src = "images/placeholder.png";
    }
}
window.onload = () => {
    haeRantalista();
    
}
