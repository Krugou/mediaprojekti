import 'dotenv/config';
import { TwitterApi } from 'twitter-api-v2';

import fetch from 'node-fetch';

let data="https://users.metropolia.fi/~aleksino/mediaprojekti/json/rannat.json";
const userClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
const tweet = async () => {
    
    const response = await fetch(data);
const fetchDataJson = await response.json();
var mainTempdata = [];
var mainplacedata = [];
var mainilmalampotiladata = [];
for (let i = 0; i < 14; i++) {
    const response = await fetch(fetchDataJson.data[i].url);
    const fetchDataJson2 = await response.json();
    let laskejsondata = fetchDataJson2.data.length - 1
    console.log(laskejsondata)
    let paikannimi = fetchDataJson2.meta.name;
    console.log(paikannimi)
    let aikajsondata = fetchDataJson2.data[laskejsondata].time;
    let vedenlampotiladata = fetchDataJson2.data[laskejsondata].temp_water;
    console.log(vedenlampotiladata)
    let ilmalampotiladata = fetchDataJson2.data[laskejsondata].temp_air;
    console.log(ilmalampotiladata)
    mainTempdata.push(vedenlampotiladata)
    mainplacedata.push(paikannimi)
    mainilmalampotiladata.push(ilmalampotiladata)
    
  }
const max = Math.max(...mainTempdata);
console.log(max)
const index = mainTempdata.indexOf(max);
console.log(index)

    let paikka = mainplacedata[index]
    let vedenlampotila = mainTempdata[index]
    let ilmalampotila = mainilmalampotiladata[index]
    console.log(paikka)
    console.log(vedenlampotila)
    console.log(ilmalampotila)
    try {
       await userClient.v2.tweet('Tän hetken kuumin rantalämpötila on paikassa: ' + paikka + ' ja siellä on ' + vedenlampotila+ ' celsiusta '+ 'Ilmalämpötila on '+ilmalampotila+ ' celsius')
        console.log("tweettaus onnistui")
     } catch (e) {
         console.error(e)
     }
}
tweet()
setInterval(tweet,3600000)