

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

  let datarandomurl = jsonData.data[getRandomIntInclusive(0,29)].url
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  console.log(datarandomurl)
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
        console.log(laskejsondata);
      let paikannimi = jsonData.meta.name;
      let aikajsondata = jsonData.data[laskejsondata].time;
      let vedenlampotiladata = jsonData.data[laskejsondata].temp_water;
      let ilmalampotiladata = jsonData.data[laskejsondata].temp_air;
      console.log(paikannimi)
      console.log(aikajsondata)
      console.log(vedenlampotiladata)
      console.log(ilmalampotiladata)
     let last = document.getElementById("demo").innerHTML  = "<h1>" + paikannimi + "</h1>" +"<p>Vedenlämpötila: "+ vedenlampotiladata+"</p>"+  "<p> Ilmanlämpötila: "+ ilmalampotiladata+"</p>"
    

  }).catch((error) => {
   console.log("error")
  });
}
window.onload = () => {
urlrandomizer(data);

}