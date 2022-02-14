

// index.js
let data="./json/rannat.json";
function urlrandomizer(data1) {
fetch(data).then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw 'HTTP ERROR';
  }
}).then((jsonData) => { 

  let datarandomurl = jsonData.data[getRandomIntInclusive(0,14)].url
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  searchf(datarandomurl);
}).catch((error) => {
  console.log("error")
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
      let laskejsondata = jsonData.data.length - 1
       
      let lat = jsonData.meta.lat;
      let lon = jsonData.meta.lon;
      let minuslat = (lat - 0.08)
      let minuslon = (lon - 0.08)
     
      let latplus = (lat + 0.08)
      let lonplus = (lon + 0.08)
      let bbox = minuslon.toFixed(3)+"," +minuslat.toFixed(3) +","+ lonplus.toFixed(3)+"," + latplus.toFixed(3) + ","
      
      console.log(bbox)
     

      let paikannimi = jsonData.meta.name;
      let aikajsondata = jsonData.data[laskejsondata].time;
      let vedenlampotiladata = jsonData.data[laskejsondata].temp_water;
      let ilmalampotiladata = jsonData.data[laskejsondata].temp_air;


     let last = document.getElementById("demo").innerHTML  = "<h1>" + paikannimi + "</h1>" +"<p>Vedenlämpötila: "+ vedenlampotiladata+"</p>"+  "<p> Ilmanlämpötila: "+ ilmalampotiladata+"</p>"
    nouda(bbox)

  }).catch((error) => {
   console.log("error")
  });
}

function nouda(query){
    
    let arvo = `https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::timevaluepair&bbox=${query}epsg::4326&parameters=ws_10min,t2m&crs=EPSG::3067&`


console.log(arvo)
    fetch(arvo)
  .then(response => response.text())
  .then((xml) => {
    console.log(xml)
    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xml, "application/xml");
    let mittaussarja2 = xmlDOM.querySelector('MeasurementTimeseries').querySelectorAll('value'); 
    let vahenna2 = mittaussarja2.length - 1
    let aikasarja2 = xmlDOM.querySelector('MeasurementTimeseries').querySelectorAll('time'); 
    let vahennaaika2 = aikasarja2.length - 1
    let paikka3 = xmlDOM.querySelectorAll('name');
    console.log(paikka3[1].childNodes[0])
    console.log(mittaussarja2)
    console.log(vahenna2)
    console.log(mittaussarja2[vahenna2])
    console.log(aikasarja2[vahennaaika2])
  
    let tulos = document.getElementById("tulos").innerText = "sijainnissa: " + paikka3[1].childNodes[0].textContent + " on lämpötila " + mittaussarja2[vahenna2].textContent + " celsiusta" + " kello oli järjestelmän mukaan: " + aikasarja2[vahennaaika2].textContent
    console.log(tulos)
})
}
window.onload = () => {
urlrandomizer(data);

}