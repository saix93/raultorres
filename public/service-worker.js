"use strict";var precacheConfig=[["/index.html","db925baab16dd7a0910a158faa702022"],["/static/css/main.ac646566.css","986999f6fbaeaf6f4bec30f2a8ce314f"],["/static/js/main.c4ba59ba.js","cbb73e7ae840213055511447561363f1"],["/static/media/AboutMeRaul.29c660a2.jpg","29c660a29d593c25ab6cdc838bcc59ea"],["/static/media/DSPBot.53787efc.jpg","53787efc2363e36acc2659821ed7eea3"],["/static/media/HomeRaul.1ada4dd3.jpg","1ada4dd3182347548bf535d5dec1d066"],["/static/media/Krosus.b68c3dc6.jpg","b68c3dc6c65f27a01fcb003588e1590a"],["/static/media/PS4Controller.96df8c03.jpg","96df8c03ae68407d1bc295483176b91b"],["/static/media/angularjs.39a41ecc.jpg","39a41ecc975dd1ab004429086cf4605c"],["/static/media/comeround.10604f63.jpg","10604f6378892f34df1fee16cacc7db2"],["/static/media/icon_0.7b0835ad.jpg","7b0835ad63b8083e6068ed104b43a641"],["/static/media/icon_1.f9bae4ac.jpg","f9bae4ac026c197b0792d2f83588acf8"],["/static/media/icon_3.7c84ce3d.jpg","7c84ce3d82fd52b08429959e75bf2ca3"],["/static/media/maya.d5c8c012.jpg","d5c8c012ade4c2d8c3d03c8d85df2416"],["/static/media/myroom.2891b0de.jpg","2891b0de5ce3912e8aebdfebb85ffc37"],["/static/media/nodejs.a75b91fc.jpg","a75b91fc4dd2a78fff85d3a8ac5c1ecc"],["/static/media/picamera.9363cb5a.jpg","9363cb5a70cb5b658396c0d037326651"],["/static/media/pintamonas.8c5956ac.jpg","8c5956ac5a38b5d53aedbd3a8c06e2e3"],["/static/media/reactjs.a5d63e30.jpg","a5d63e30e7703e7be70299425feb5d04"],["/static/media/splintercice.89af46ab.jpg","89af46abbc10348bd5af93df694fc312"],["/static/media/ue4.a3af68df.jpg","a3af68df097b18a759fa39230a610dba"],["/static/media/unity.3d7c84d7.jpg","3d7c84d71630eb0eafefb5471662caf0"],["/static/media/videoconferencia.02d69c1f.jpg","02d69c1ff987656998be2bb1b0f56622"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});