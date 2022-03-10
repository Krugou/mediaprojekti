import 'dotenv/config';
import {TwitterApi} from 'twitter-api-v2';
import fetch from 'node-fetch';

let data = 'https://users.metropolia.fi/~aleksino/mediaprojekti/json/beaches.json';
// .env tiedostosta haetaan avaimet twitteriin
const userClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
// tweettaus Funktio
const tweet = async () => {

  const response = await fetch(data);
  const fetchDataJson = await response.json();
  let temperatureData = [];
  let placeNameData = [];
  let airTemperatureData = [];
  let timeTakenData = [];
  let currentDate = new Date();
 // console.log(currentDate.getTime());
 // säädatan haku
  for (let i = 0; i < fetchDataJson.beaches.length; i++) { 
    const response = await fetch("https://iot.fvh.fi/opendata/uiras/"+fetchDataJson.beaches[i].url+".json");
    const fetchDataJson2 = await response.json();
    const laskejsondata = fetchDataJson2.data.length - 1;
    const jsonaika = new Date(fetchDataJson2.data[laskejsondata].time)
    console.log("jsonaika: "+jsonaika.getTime())
    console.log("nykyinen aika - 7200000: "+(currentDate.getTime() - 7200000))
    console.log("nykyinen aika: "+currentDate.getTime())
    if ( jsonaika.getTime() > (currentDate.getTime() - 7200000) && jsonaika.getTime() < currentDate.getTime() ) {
    let paikannimi = fetchDataJson2.meta.name;
    let aikajsondata = fetchDataJson2.data[laskejsondata].time;
    let waterTemperaturedata = fetchDataJson2.data[laskejsondata].temp_water;
    let airTemperaturedata = fetchDataJson2.data[laskejsondata].temp_air;
   
    temperatureData.push(waterTemperaturedata);
    placeNameData.push(paikannimi);
    airTemperatureData.push(airTemperaturedata);
    timeTakenData.push(aikajsondata);
    console.log(paikannimi);
    console.log(aikajsondata);
    console.log(waterTemperaturedata);
    console.log(airTemperaturedata);
  } else {
    continue;
    
  }
  }
  const max = Math.max(...temperatureData);
  const index = temperatureData.indexOf(max);
  let placeName = placeNameData[index];
  let waterTemperature = temperatureData[index];
  let airTemperature = airTemperatureData[index];
  let timeTaken = new Date(timeTakenData[index]);
  console.log(placeName);
  console.log(waterTemperature);
  console.log(airTemperature);
  console.log(timeTaken.toLocaleTimeString('fi-FI'));
  //tweetataan
  try {
   await userClient.v2.tweet(
       'Kuumin uimaveden lämpötila on paikassa: ' + placeName + ' asteita on ' +
        waterTemperature + ' \xB0C  ja ' + 'Ilman lämpötila on ' + airTemperature +
        ' \xB0C ' + 'kello: ' + timeTaken.toLocaleTimeString('fi-FI'));
   console.log('tweettaus onnistui ' +
       'twiitti: Kuumin uimaveden lämpötila on paikassa: ' + placeName +
      ' asteita on ' + waterTemperature + ' \xB0C  ja ' +
     'Ilman lämpötila on ' + airTemperature + ' \xB0C ' + 'kello: ' +
     timeTaken.toLocaleTimeString('fi-FI'));
  } catch (e) {
    console.error(e);
  }
};
tweet();
// tweettauksen yritys joka 15min koska data muuttuu vaan 30min välein botti onnistuu tweettauksessa vaan 30min välein
setInterval(tweet, 900000);