import 'dotenv/config';
import {TwitterApi} from 'twitter-api-v2';

import fetch from 'node-fetch';

let data = 'https://users.metropolia.fi/~aleksino/mediaprojekti/json/beaches.json';
const userClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
const tweet = async () => {

  const response = await fetch(data);
  const fetchDataJson = await response.json();
  let mainTempdata = [];
  let mainplacedata = [];
  let mainilmalampotiladata = [];
  let mainaikajsondata = [];
  let currentdate = new Date();
 // console.log(currentdate.getTime());
  for (let i = 0; i < fetchDataJson.beaches.length; i++) { 
    const response = await fetch("https://iot.fvh.fi/opendata/uiras/"+fetchDataJson.beaches[i].url+".json");
    const fetchDataJson2 = await response.json();
    const laskejsondata = fetchDataJson2.data.length - 1;
    const jsonaika = new Date(fetchDataJson2.data[laskejsondata].time)
    console.log("jsonaika: "+jsonaika.getTime())
    console.log("nykyinen aika - 7200000: "+(currentdate.getTime() - 7200000))
    console.log("nykyinen aika: "+currentdate.getTime())
    if ( jsonaika.getTime() > (currentdate.getTime() - 7200000) && jsonaika.getTime() < currentdate.getTime() ) {
    let paikannimi = fetchDataJson2.meta.name;
    let aikajsondata = fetchDataJson2.data[laskejsondata].time;
    let vedenlampotiladata = fetchDataJson2.data[laskejsondata].temp_water;
    let ilmalampotiladata = fetchDataJson2.data[laskejsondata].temp_air;
   
    mainTempdata.push(vedenlampotiladata);
    mainplacedata.push(paikannimi);
    mainilmalampotiladata.push(ilmalampotiladata);
    mainaikajsondata.push(aikajsondata);
    console.log(paikannimi);
    console.log(aikajsondata);
    console.log(vedenlampotiladata);
    console.log(ilmalampotiladata);
  } else {
    continue;
    
  }
  }
  const max = Math.max(...mainTempdata);
  const index = mainTempdata.indexOf(max);
  let paikka = mainplacedata[index];
  let vedenlampotila = mainTempdata[index];
  let ilmalampotila = mainilmalampotiladata[index];
  let aika = new Date(mainaikajsondata[index]);
  console.log(paikka);
  console.log(vedenlampotila);
  console.log(ilmalampotila);
  console.log(aika.toString());
  try {
   await userClient.v2.tweet(
       'Kuumin uimaveden lämpötila on paikassa: ' + paikka + ' asteita on ' +
        vedenlampotila + ' \xB0C  ja ' + 'Ilman lämpötila on ' + ilmalampotila +
        ' \xB0C ' + 'kello: ' + aika.toLocaleTimeString('fi-FI'));
   console.log('tweettaus onnistui ' +
       'twiitti: Kuumin uimaveden lämpötila on paikassa: ' + paikka +
      ' asteita on ' + vedenlampotila + ' \xB0C  ja ' +
     'Ilman lämpötila on ' + ilmalampotila + ' \xB0C ' + 'kello: ' +
     aika.toLocaleTimeString('fi-FI'));
  } catch (e) {
    console.error(e);
  }
};
tweet();
setInterval(tweet, 900000);