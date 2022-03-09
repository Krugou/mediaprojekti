"use strict";
// index.js
const data = './json/beaches.json';
const nimipaivat = './json/nimipaivat.json';

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
    for (let i = 0; i < jsonData.suominimipaivat.length; i++){
      if (currentDayMonth === jsonData.suominimipaivat[i].date){
        document.getElementById('nimipaivasankari').innerHTML = ' Nimipäivää juhlii tänään: '+jsonData.suominimipaivat[i].name+' ';
      }
    
    
  }
  })
}
let firstclick = true;

function palauteLomake () {
  
  if (firstclick === true) {
    document.getElementById('palaute').innerHTML = '<form id="palaute2" action=".php"> <fieldset><legend>Palautelomake</legend><label for="fname">Etunimi:</label><br> <input type="text" id="fname" name="fname" placeholder="Matti"><br>  <label for="lname">Sukunimi:</label><br>  <input type="text" id="lname" name="lname" placeholder="Meikäläinen"><br> <label for="email">Sähköposti:</label><br><input type="email" id="email" name="email" placeholder="mattimeikalainen@hel.fi"> <br><br><label for="feedback">Palaute:</label><br><textarea id="feedback" placeholder="Palautteesi"></textarea><br><input type="submit" value="Submit"><input type="reset"></fieldset></form>';
    firstclick = false; 
  } else if(firstclick === false)  {
    
    document.getElementById('palaute2').remove()
    firstclick = true;
    
  }
}

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

  fetch(arvo).then(response => response.text()).then((xml) => {

     let parser = new DOMParser();
     let xmlDOM = parser.parseFromString(xml, 'application/xml');

     let bsWfsElement = xmlDOM.querySelectorAll('BsWfsElement');

     let WS_PT1H_AVGParameterValue = bsWfsElement[bsWfsElement.length - 3].querySelector('ParameterValue');
     let PRA_PT1H_ACCParameterValue = bsWfsElement[bsWfsElement.length -2].querySelector('ParameterValue');
     let WAWA_PT1H_RANKParameterValue = bsWfsElement[bsWfsElement.length - 1].querySelector('ParameterValue');

     let wind = windDescription(parseInt(WS_PT1H_AVGParameterValue.textContent));

     if (PRA_PT1H_ACCParameterValue.textContent === 0){

     }else if(PRA_PT1H_ACCParameterValue.textContent >0){
      document.getElementById('tulos').innerHTML += ' ' + 'sadetta:' +PRA_PT1H_ACCParameterValue.textContent + ' mm';

     }
      document.getElementById('tulos').innerHTML += wind + ' ' + WS_PT1H_AVGParameterValue.textContent + 'm/s<br>';
     // Alla oleva funktio sijaitsee imgPrints.js tiedostussa.
      let img = document.createElement('img');

     let kuvaData = printSymbols(parseInt(WAWA_PT1H_RANKParameterValue.textContent));
     img.src = kuvaData[0];
     img.alt = kuvaData[1];
      document.getElementById('tulos').appendChild(img);
      document.getElementById('tulos').innerHTML += '<br>';
      document.getElementById('tulos').innerHTML += kuvaData[2];
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

            let article = document.getElementById('saaTiedot');

            document.getElementById('saaTiedot').innerHTML = '<h2>Huomisen sää</h2>';
            try {
                console.log(tomorrowTemp + ' ' + tomorrowWind +' '+ tomorrowSymb);
                document.getElementById('saaTiedot').innerHTML += 'Lämmintä ' + tomorrowTemp + ' °C<br>';
                document.getElementById('saaTiedot').innerHTML += windDescription(tomorrowWind) + ' ' + tomorrowWind + ' m/s<br>';


            } catch (error) {
                article.innerHTML = 'Rannan ennusteen haussa tapahtui tuntematon virhe';
                console.log('Rannan ennusteen haussa tapahtui virhe');
            }
            let img = document.createElement('img');
            let kuvaData = printSymbols(tomorrowSymb);
            img.src = kuvaData[0];
            img.alt = kuvaData[1];
            document.getElementById('saaTiedot').appendChild(img);
            article.innerHTML += '<br>' + kuvaData[2]+ '<br>';

        });
    } catch(e){
        console.log('Tulevan sään hakeminen epäonnistui '+e)
    }
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

// Funktio rantojen tietojen hakemiseen
// Ranta on rannan datan sijainti(beaches.url). Jos ranta on tyhjä, palauttaa beaches.jsonin
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
    // Haetaan rantadata hakufunktiolla
    let data = await haeRanta();
    // Näistä löytyy rantojen nimi ja datan sijainti
    let rantaNimi = [];
    let rantaData = [];

    // select
    let select = document.createElement('select');
    select.name = 'rannat';
    select.id = 'rannat';

    // Loopataan data läpi ja luodaan valintapalkkiin vaihtoehdot
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
    // Valintapalkin asetus
    let label = document.createElement('label');
    label.innerHTML = 'Valitse rantasi: ';
    label.htmlFor = 'rannat';
    document.getElementById('rannanTiedot').appendChild(label).appendChild(select);

    // Hae rannan tiedot -button
    let nappi = document.createElement('button');
    nappi.name = 'hakunappi';
    nappi.id = 'hakunappi';
    nappi.innerHTML = 'Hae rannan tiedot!';
    document.getElementById("rannanTiedot").appendChild(nappi);
    nappi.addEventListener('click', haeValittuRanta, false);

    //Koska tämä funktio ajettiin heti sivun latauduttua, haetaan nyt saman tien ekan rannan tiedot.
    haeValittuRanta();
}

// Funktio katsoo hakuvalikossa olevan valinnan ja tulostaa sen rannan tiedot
async function haeValittuRanta(evt){
    // Haetaan rannan tiedot
    let data = await haeRanta(document.getElementById('rannat').value);

    //Tarkistetaan onhan rannan lämpötiladata varmasti olemassa
    try{
        parseFloat(data[0]);
    } catch (error) {
        !alert ('Rannan lämpötiladatan hakeminen epäonnistui');
    }
    // Haetaan rannan tiedot
    let jsonData = await haeRanta();
    // Rannan nimi
    try{
        document.getElementById('tulos').innerHTML = '<h1>' + data.meta.name + '</h1>';
    } catch(error){
        console.log(error);
        console.log('Rannan nimen haku epäonnistui.');
    }
    // Väliotsikko
        document.getElementById('tulos').innerHTML += '<h2>Rannan tiedot:</h2>';
    // Veden lämpötila
    try {
        document.getElementById('tulos').innerHTML += 'Veden lämpötila: ' + data.data[data.data.length - 1].temp_water +
            '°C<br>';
    } catch (error) {
        document.getElementById('tulos').innerHTML += 'Veden lämpötila: tuntematon <br>';
        console.log('Valitun rannan veden lämpötilaa ei löytynyt');
    }
    // Ilman lämpötila
    try {
        document.getElementById('tulos').innerHTML += 'Ilman lämpötila: ' + data.data[data.data.length - 1].temp_air + '°C<br>';
    } catch (error) {
        document.getElementById('tulos').innerHTML += 'Ilman lämpötila: tuntematon';
        console.log('Valitun rannan ilman lämpötilaa ei löytynyt');
    }
    // Rantadatan mittausajankohta
    try {
        let date = new Date(data.data[data.data.length - 1].time).toLocaleString('fi');
        document.getElementById('tulos').innerHTML += 'Mitattu ' + date + '<br>';
    } catch(error) {
        document.getElementById('tulos').innerHTML += 'Mitattu ajassa tuntematon aika<br>';
        console.log('Valitun rannan aikaa ei löytynyt');
    }
    // Rannan kuva paikoileen. Käyttäen fiksua koodaamista, kuvan nimi on sen jsondatan tiedoston nimi.
    // Selain ensin kokeilee olisiko .jpg muotoista kuvaa ja jos ei ole, kokeilee se .png muotoista kuvaa.
    // Jokaiselle rannalle löytyy varmuuden vuoksi PNG-muotoinen väliaikaiskuva.
    try {
        document.getElementById('rantakuva').src = 'images/beaches/' + document.getElementById('rannat').value + '.jpg';
        document.getElementById('rantakuva').onerror = function() {
            document.getElementById('rantakuva').src = 'images/beaches/' + document.getElementById('rannat').value + '.png';
        }
    } catch(error) {
        console.log('Virhe rannan kuvan kanssa.');
        }
        // Rannan osoite paikoilleen.
    try{
        // Poistetaan rannan vanha osoite. Koska elementti on aina samalla ID:llä ei ole väliä onko kyseessä
        // <p> vai <a> elementti.
        document.getElementById('rannanOsoite').remove();
        // Mikäli rannalla ei ole nettisivuja, tehdään sivulle siitä ilmoitus
        if(data.meta.site_url === ""){
            let beachLink = document.createElement('p');
            beachLink.id = 'rannanOsoite';
            beachLink.innerHTML = 'Rannalla ' + data.meta.name + ' ei ole kotisivuja.';
            document.getElementById('rantaKuvaus').appendChild(beachLink);
            // Mikäli rannalla on nettisivut, kerrotaan ne ja asetetaan oikeaan paikkaan
        }else {
            let beachLink = document.createElement('a');
            beachLink.href = data.meta.site_url;
            beachLink.id = 'rannanOsoite';
            beachLink.innerText = 'Linkki rannan kotisivuille'
            document.getElementById('rantaKuvaus').appendChild(beachLink);
        }

        } catch(error) {
        console.log('Virhe rannan linkin kanssa.');
    }
    //Haetaan ilmatieteenlaitokselta saatava data ja asetetaan se paikoilleen
    try {
        fetchWeatherHourForecastWeatherSymbolDataPlace(jsonData.beaches[document.getElementById("rannat").selectedIndex].location);
    } catch(error){
        console.log('Rannan lämpötilasymbolin haku epäonnistui');
    }
    //Haetaan huomisen säätiedot paikalleen. Oikeasti ne on 24h tunnin päähän tulevaisuuteen...
    fetchTomorrowWeather(jsonData.beaches[document.getElementById('rannat').selectedIndex].lat, jsonData.beaches[document.getElementById('rannat').selectedIndex].lon);
}

window.onload = () => {
    haeRantalista();
}
