if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,d)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=d(...e);return i.default||(i.default=r),i}))})))}}define("./sw.js",["./workbox-42d1e43d"],(function(e){"use strict";e.setCacheNameDetails({prefix:"flex"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/10.js",revision:"2b8e2a2b037c28accb68b8e621dd992d"},{url:"/11.js",revision:"11e21d141e76ff3f7686fc2b67c81c80"},{url:"/12.js",revision:"75386a44abda64d8d5dc2994ab18d9d6"},{url:"/9.js",revision:"7260a4df99174bd12a1a51f4749b9811"},{url:"/CNAME",revision:"e695895f4e71f4773aa66a469a7add96"},{url:"/contact.html",revision:"f73be5ba756204354e8150a6bc1b8ccb"},{url:"/contact.js",revision:"c2b90bfa4b4fe6e9737ddac8cfe225a7"},{url:"/en/contact.html",revision:"cacc6620d166babf81204b4bb00679d6"},{url:"/en/contact.js",revision:"58f8ab3448d5c64b704b00f176a83b86"},{url:"/en/index.html",revision:"d479933a9977db25d5bc890bca183160"},{url:"/en/index.js",revision:"d4f4dc073273d64b884c6ea071f8ca00"},{url:"/en/privacy.html",revision:"342d697af2faa0c97da9142f4f4b9aca"},{url:"/en/privacy.js",revision:"b7cc07a82144803e66fda528675db23f"},{url:"/en/terms.html",revision:"3ce541f42c992e643da779c1b3403e77"},{url:"/en/terms.js",revision:"7b4d55fabfb3b3f1cae12e7cc5c62b15"},{url:"/favicon.ico",revision:"3d295a03bf48057efe6cd64de5155604"},{url:"/image/favicon.ico",revision:"3d295a03bf48057efe6cd64de5155604"},{url:"/image/logo144.png",revision:"71e9e252f07942a97e9dd40e341bab89"},{url:"/image/logo16.png",revision:"638bb8df8be3fe54a3ab64f9d6e0df7f"},{url:"/image/logo192.png",revision:"636e2d85b596914975d7daf983c92196"},{url:"/image/logo24.png",revision:"7f84011ec1183b502ca700b5b85897c5"},{url:"/image/logo32.png",revision:"489f302a508e6de67fb0b3d99cfa4d32"},{url:"/image/logo48.png",revision:"776d2e25887adda3da1c4277d5c1e000"},{url:"/image/logo512.png",revision:"ceed892c20b3372c3f1b116de06256ba"},{url:"/image/logo96.png",revision:"383a5e318abb5fb21d9bd992794fae24"},{url:"/image/ogp.png",revision:"5966027f514d1c9a76d4dd901b6eb1bb"},{url:"/image/title.png",revision:"bf04fc831a4e8d7e76f52d7fee446652"},{url:"/index.html",revision:"eebed92b0b2056f93ff87343ee0d3661"},{url:"/index.js",revision:"112c290761db8e4ec76e3aea22114be7"},{url:"/privacy.html",revision:"d46172047ebeb962edd60779b5c5aeff"},{url:"/privacy.js",revision:"3e656c9fad19b629beeaa3755c646faa"},{url:"/robots.txt",revision:"6ad9d085d3635127f15c5bf91c28e03c"},{url:"/sitemap.xml",revision:"ae12fdd3cc73343d7562ac2fcd5ed301"},{url:"/terms.html",revision:"5b3502bfdf1d3e0e9d9c693c9c6190a9"},{url:"/terms.js",revision:"619634cb52a9d67d3fb6749313586913"},{url:"/vendor.js",revision:"61e1e2fcef6ab04c20d4c2564326d562"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.+(\/|.html)$/,new e.NetworkFirst({cacheName:"flex-html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.+\.(js|css|png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"flex-dependent",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET")}));
