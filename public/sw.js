if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const d=e=>t(e,i),u={module:{uri:i},exports:c,require:d};s[i]=Promise.all(a.map((e=>u[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/DQ96dREdT7BFvtHukYm0l/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/DQ96dREdT7BFvtHukYm0l/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e762574-92634f56e026f64d.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/1173-e1f568fceb6ba3c1.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/1374-34b5cb77ff0ddb9c.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/1760-6488449e74df1f54.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/2012-0e06c2ba12c17478.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/209-837900a7a6d299b4.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/231-37e8cda440732173.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/2447-a88428ec4c67c32c.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/2880-c91f9737953b3115.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/323-dbf90f704b607359.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/3323-7f76499e8907930d.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/360-e440da8e264eca0c.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/3950-464db8a86d277804.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/3d47b92a-ff323da7269bd047.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/457b8330-446b8b1b45e600a6.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/479ba886-697cb780ffd6da40.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/4868-8effbd09abea9928.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/5190-ea311186c1967200.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/5396-2608747ea96ef401.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/5638-0df53a2ced8dec30.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/59650de3-40f40dd547703c96.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/5987-b49a8b2420ce7088.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/5e22fd23-a632a20a2ad7bab7.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/6374-9906805c90cfd2e2.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/6890-3db198ed825eb83c.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/7042-bcd0f335d43306e8.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/795d4814-146b3aa2266f3302.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/8173-30d7c38033f47a3e.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/8718-b5cba95ff075bc6e.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/8726-b2c552865f7df60e.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/94730671-277b4a3205cacfaf.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/9957-2a5239a2d64489dc.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/998-130c81e79ee7a4ec.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(community)/community/page-d0544385d894aa64.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(community)/layout-da1bcb2e9eafd973.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(community)/polls/%5BpollId%5D/page-f38f08f82a594203.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(community)/polls/page-666a054a5076e935.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/classroom-availability/page-c790f0dc5d994d33.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/cr/layout-49b6e27f719deabf.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/cr/page-eb0c735c5615f1d0.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/cr/schedules/%5Bdepartment_code%5D/%5Byear%5D/%5Bsemester%5D/page-fbd0e01d7de4a99d.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/cr/schedules/create/page-e71e938057db0749.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/layout-703e1c6e7c9dcc7e.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/page-d13ffaf400b67fb5.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/results/%5BrollNo%5D/loading-44b0763ca7df1280.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/results/%5BrollNo%5D/page-3bb315d4266cf878.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/results/page-5a5b49bfded87b7c.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/schedules/%5Bdepartment_code%5D/%5Byear%5D/%5Bsemester%5D/page-249cbe5e44182f0b.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/schedules/page-79acc2f78060de15.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/student/layout-4e19e3327f4ce255.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/student/page-e826aa1bcd8769bf.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/syllabus/%5Bcode%5D/loading-fae68480ed2135eb.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/syllabus/%5Bcode%5D/page-5efa8eadbbab9562.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/(dashboard)/syllabus/page-d20a4814f12fe662.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/_not-found/page-d5fde258903b69f1.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/layout-e6dadc7cf49a004e.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/loading-a8bdcb896ea1a435.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/login/page-3c7d0e10ca99e78b.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/app/not-found-468d9509e4576b17.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/b563f954-3097e71f36a48589.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/ee560e2c-eed716c0641874ce.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/f8025e75-da41a97a91a68c7a.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/fc2f6fa8-37dd54aa83623506.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/fd9d1056-a38cca0e973e68f2.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/main-3083a3d796abc484.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/main-app-a221ae5c1571b7c7.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d5cf26bdf59dc25a.js",revision:"DQ96dREdT7BFvtHukYm0l"},{url:"/_next/static/css/1956af0d2385773f.css",revision:"1956af0d2385773f"},{url:"/_next/static/css/28007dd098b6306c.css",revision:"28007dd098b6306c"},{url:"/_next/static/css/85e7614757399ca5.css",revision:"85e7614757399ca5"},{url:"/_next/static/css/9646ef1c759cca68.css",revision:"9646ef1c759cca68"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/book.a3ffb16e.png",revision:"46b04558860b86b6b4086b4051120d18"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/drive.bdfaf525.svg",revision:"5963156039dd02ee1947b3b37af7e665"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/others.a69121d7.png",revision:"f0d439b770ae171850195444eefbb135"},{url:"/_next/static/media/reference.25d240f9.png",revision:"15bce2147239b54176bda7efc572ef8f"},{url:"/_next/static/media/youtube.3ae91afc.png",revision:"9cd0ecd1a618f1de0ce343369674a105"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
