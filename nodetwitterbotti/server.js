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
var mainaikajsondata = [];
for (let i = 0; i < 14; i++) {
    const response = await fetch(fetchDataJson.data[i].url);
    const fetchDataJson2 = await response.json();
    let laskejsondata = fetchDataJson2.data.length - 1
    let paikannimi = fetchDataJson2.meta.name;
    let aikajsondata = fetchDataJson2.data[laskejsondata].time;
    let vedenlampotiladata = fetchDataJson2.data[laskejsondata].temp_water;
    let ilmalampotiladata = fetchDataJson2.data[laskejsondata].temp_air;
    mainTempdata.push(vedenlampotiladata)
    mainplacedata.push(paikannimi)
    mainilmalampotiladata.push(ilmalampotiladata)
    mainaikajsondata.push(aikajsondata)
    console.log(paikannimi)
    console.log(aikajsondata)
    console.log(vedenlampotiladata)
    console.log(ilmalampotiladata )
  }
const max = Math.max(...mainTempdata);
const index = mainTempdata.indexOf(max);
    let paikka = mainplacedata[index]
    let vedenlampotila = mainTempdata[index]
    let ilmalampotila = mainilmalampotiladata[index]
    let aika =new Date(mainaikajsondata[index]).valueOf();
    console.log(paikka)
    console.log(vedenlampotila)
    console.log(ilmalampotila)
    console.log(aika)
    try {
       await userClient.v2.tweet('Kuumin uimaveden lämpötila on paikassa: ' + paikka + ' asteita on ' + vedenlampotila+ ' \xB0C  ja '+ 'Ilman lämpötila on '+ilmalampotila+ ' \xB0C ')
        console.log('tweettaus onnistui '+ 'twiitti: Kuumin uimaveden lämpötila on paikassa: ' + paikka + ' asteita on ' + vedenlampotila+ ' \xB0C  ja '+ 'Ilman lämpötila on '+ilmalampotila+ ' \xB0C ')
     } catch (e) {
         console.error(e)
     }
}
tweet()
//setInterval(tweet,1800000)