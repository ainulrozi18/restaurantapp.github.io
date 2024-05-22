/*! For license information please see sw.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,e={110:(t,e,r)=>{r(452);const n={BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:{SMALL:"https://restaurant-api.dicoding.dev/images/small/",MEDIUM:"https://restaurant-api.dicoding.dev/images/medium/",LARGE:"https://restaurant-api.dicoding.dev/images/large/"},DEFAULT_LANGUAGE:"en-us",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"restaurant-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:{restaurant:"restaurant",commentUser:"comment-user"}};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new G(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var v="suspendedStart",d="suspendedYield",y="executing",g="completed",m={};function w(){}function x(){}function b(){}var E={};h(E,u,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(T([])));_&&_!==r&&n.call(_,u)&&(E=_);var O=b.prototype=w.prototype=Object.create(E);function A(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,i,c,u){var s=p(t[a],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==o(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,r,n){var o=v;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return x.prototype=b,i(O,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:x,configurable:!0}),x.displayName=h(b,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,f,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},A(k.prototype),h(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},A(O),h(O,f,"Generator"),h(O,u,(function(){return this})),h(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}const u={cachingAppShell:function(t){var e=this;return c(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._openCache();case 2:r.sent.addAll(t);case 4:case"end":return r.stop()}}),r)})))()},deleteOldCache:function(){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:t.sent.filter((function(t){return t!==n.CACHE_NAME})).map((function(t){return caches.delete(t)}));case 4:case"end":return t.stop()}}),t)})))()},revalidateCache:function(t){var e=this;return c(a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,caches.match(t);case 2:if(!(n=r.sent)){r.next=6;break}return e._fetchRequest(t),r.abrupt("return",n);case 6:return r.abrupt("return",e._fetchRequest(t));case 7:case"end":return r.stop()}}),r)})))()},_openCache:function(){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",caches.open(n.CACHE_NAME));case 1:case"end":return t.stop()}}),t)})))()},_fetchRequest:function(t){var e=this;return c(a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(t);case 2:if((n=r.sent)&&200===n.status){r.next=5;break}return r.abrupt("return",n);case 5:return r.next=7,e._addCache(t);case 7:return r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))()},_addCache:function(t){var e=this;return c(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._openCache();case 2:r.sent.add(t);case 4:case"end":return r.stop()}}),r)})))()}};var s=["./","./icons/icon-72x72.png","./icons/icon-96x96.png","./icons/icon-128x128.png","./icons/icon-144x144.png","./icons/icon-152x152.png","./icons/icon-192x192.png","./icons/icon-384x384.png","./icons/icon-512x512.png","./images/hero-image.jpg","./index.html","./favicon.png","./logo.png","./app.bundle.js","./app.webmanifest","./sw.bundle.js"];self.addEventListener("install",(function(t){t.waitUntil(u.cachingAppShell([].concat(s)))})),self.addEventListener("activate",(function(t){t.waitUntil(u.deleteOldCache())})),self.addEventListener("fetch",(function(t){t.respondWith(u.revalidateCache(t.request))}))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(f=0;f<t.length;f++){for(var[r,o,a]=t[f],c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[r,o,a]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={725:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[i,c,u]=r,s=0;if(i.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(f)},r=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[452],(()=>n(110)));o=n.O(o)})();
//# sourceMappingURL=sw.bundle.js.map