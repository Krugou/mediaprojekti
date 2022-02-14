

// index.js
function searchf() {
let data="https://iot.fvh.fi/opendata/uiras/70B3D57050004E0E_v1.json";

fetch(data).then(response => {
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
      console.log(jsonData.meta.name)
      console.log(aikajsondata)
      console.log(vedenlampotiladata)
      console.log(ilmalampotiladata)
      
    

  }).catch((error) => {
   console.log("error")
  });
}
window.onload = () => {
searchf();

}