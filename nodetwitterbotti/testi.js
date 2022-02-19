import { TwitterApi } from 'twitter-api-v2';

// Instanciate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAANWLZQEAAAAA8TKKqwVuLejRG9j2U46KF%2BgWwTQ%3DwHhWHY2xqtMM5CJSnyVv3az9rB4QdIq98zxx0jxh51hlnq0rd9');

// Tell typescript it's a readonly app

await twitterClient.v2.tweet('Hello, this is a test.');