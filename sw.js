if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const d={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return d;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./sw.js",["./workbox-42d1e43d"],(function(e){"use strict";e.setCacheNameDetails({prefix:"flex"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/10.js",revision:"d9238a02daae5f210f2a5fa600e571b9"},{url:"/11.js",revision:"4ec8bf1383fe90ae69dab36d2248e7ba"},{url:"/12.js",revision:"35c98ef70b53a1a833e6a6480e600510"},{url:"/9.js",revision:"282f05620c2e2f8567f1233dd0219393"},{url:"/CNAME",revision:"e695895f4e71f4773aa66a469a7add96"},{url:"/contact.html",revision:"f73be5ba756204354e8150a6bc1b8ccb"},{url:"/contact.js",revision:"3fe299bd97b1245af7265f92f9f354d0"},{url:"/en/contact.html",revision:"cacc6620d166babf81204b4bb00679d6"},{url:"/en/contact.js",revision:"5e8e55e9f71650f9e84a8a4d8683a2eb"},{url:"/en/index.html",revision:"400893990e14d3495b7eb25663cdac21"},{url:"/en/index.js",revision:"925ee913525fec02042ed108ff055659"},{url:"/en/privacy.html",revision:"342d697af2faa0c97da9142f4f4b9aca"},{url:"/en/privacy.js",revision:"9cbbe39d6aa2404fc610b8a68fd542a4"},{url:"/en/terms.html",revision:"3ce541f42c992e643da779c1b3403e77"},{url:"/en/terms.js",revision:"099abe54d2f42c8e186270be8561f0cc"},{url:"/favicon.ico",revision:"3d295a03bf48057efe6cd64de5155604"},{url:"/image/favicon.ico",revision:"3d295a03bf48057efe6cd64de5155604"},{url:"/image/logo144.png",revision:"71e9e252f07942a97e9dd40e341bab89"},{url:"/image/logo16.png",revision:"638bb8df8be3fe54a3ab64f9d6e0df7f"},{url:"/image/logo192.png",revision:"636e2d85b596914975d7daf983c92196"},{url:"/image/logo24.png",revision:"7f84011ec1183b502ca700b5b85897c5"},{url:"/image/logo32.png",revision:"489f302a508e6de67fb0b3d99cfa4d32"},{url:"/image/logo48.png",revision:"776d2e25887adda3da1c4277d5c1e000"},{url:"/image/logo512.png",revision:"ceed892c20b3372c3f1b116de06256ba"},{url:"/image/logo96.png",revision:"383a5e318abb5fb21d9bd992794fae24"},{url:"/image/ogp.png",revision:"5966027f514d1c9a76d4dd901b6eb1bb"},{url:"/image/title.png",revision:"bf04fc831a4e8d7e76f52d7fee446652"},{url:"/index.html",revision:"1d1d28a4c44ee45b8b29a1992297a7a5"},{url:"/index.js",revision:"b34ce836f5c3e3a1c14e0fbabf68c35b"},{url:"/privacy.html",revision:"d46172047ebeb962edd60779b5c5aeff"},{url:"/privacy.js",revision:"9e8bfa647989c7e97dd05eb84c50c6b0"},{url:"/robots.txt",revision:"6ad9d085d3635127f15c5bf91c28e03c"},{url:"/sitemap.xml",revision:"ae12fdd3cc73343d7562ac2fcd5ed301"},{url:"/terms.html",revision:"5b3502bfdf1d3e0e9d9c693c9c6190a9"},{url:"/terms.js",revision:"bd515eb078a7affb4811aa93f00951e5"},{url:"/vendor.js",revision:"76a76af4bebf130f522a4e6b8a61d502"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.+(\/|.html)$/,new e.NetworkFirst({cacheName:"flex-html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.+\.(js|css|png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"flex-dependent",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET")}));
