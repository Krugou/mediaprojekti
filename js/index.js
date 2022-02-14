

// index.js
let data="https://iot.fvh.fi/opendata/uiras/70B3D57050004E0E_v1.json";
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
      
    

  }).catch((error) => {
   console.log("error")
  });
}
window.onload = () => {
searchf(data);

}