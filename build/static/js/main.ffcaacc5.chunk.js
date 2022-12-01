/*! For license information please see main.ffcaacc5.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-clone"]=this["webpackJsonpreact-clone"]||[]).push([[0],{19:function(e,t,r){e.exports=r(33)},24:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(17),i=r.n(a),c=(r(24),r(18)),l=r(2),u=r(3),s=(r(25),function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>=100?a(!1):a(!0)}))}),[]),o.a.createElement("div",{className:"NavBar",style:r?{}:{backgroundColor:"#333"}},o.a.createElement("a",{href:"/"},"Movie App"),o.a.createElement("a",{href:"/search"},o.a.createElement("span",null,o.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16",fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))))}),h=(r(26),function(){var e=Object(n.useRef)({}),t=Object(n.useState)({}),r=Object(u.a)(t,2),a=r[0],i=r[1],c=Object(n.useCallback)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=9d7b2325092f152dc0037a909884bcfb&with_network=123").then((function(e){return e.json()})).then((function(t){var r=t.results;e.current=r[Math.floor(Math.random()*r.length-1)],i({id:e.current.id||"This movie have no Id.",name:e.current.name,bannerImg:"https://image.tmdb.org/t/p/original"+e.current.backdrop_path,detail:e.current.overview||"This movie have no description."})})).catch((function(e){console.log(e)}))}),[]);return Object(n.useEffect)((function(){c()}),[c]),o.a.createElement("div",{className:"banner",style:{backgroundImage:"url('".concat(a.bannerImg,"')"),backgroundSize:"cover",height:"50rem"}},o.a.createElement("div",null,o.a.createElement("h1",null,a.name),o.a.createElement("div",null,o.a.createElement("button",null,"Play"),o.a.createElement("button",null,"My List"),o.a.createElement("p",null,a.detail))))}),f=r(4);r(27);function v(){v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:L(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==t&&r.call(y,a)&&(m=y);var w=d.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function L(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var p=Object(n.memo)((function(e){var t,r=e.movieId,a="https://image.tmdb.org/t/p/original"+e.movieImg,i=Object(n.useState)([]),c=Object(u.a)(i,2),l=c[0],s=c[1],h="https://api.themoviedb.org/3//movie/".concat(r,"/videos?api_key=9d7b2325092f152dc0037a909884bcfb"),p=Object(n.useCallback)(Object(f.a)(v().mark((function e(){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,t.json();case 8:return r=e.sent,s(r.results),e.abrupt("return",r.results);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[h]);return Object(n.useEffect)((function(){p()}),[p]),0!==l.length&&l.forEach((function(e){"YouTube"!==e.site||"Trailer"!==e.type&&"Teaser"!==e.type||(t="https://www.youtube.com/embed/"+e.key)})),o.a.createElement("div",{className:"movieDetail"},o.a.createElement("div",{className:"detailContent"},o.a.createElement("h2",null,e.movieName),o.a.createElement("p",null,"Release Date: ",e.releaseDate),o.a.createElement("p",null,"Vote: ",e.vote," / 10"),o.a.createElement("p",null,e.details)),o.a.createElement("div",{className:"detailVideo"},0===l.length?o.a.createElement("img",{className:"detailImage",style:{maxWidth:"600px"},src:a,alt:e.movieName}):o.a.createElement("div",null,o.a.createElement("iframe",{title:e.movieName,width:"100%",height:"400",src:t}))))}));function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:L(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var h={};function f(){}function v(){}function p(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==t&&r.call(y,a)&&(m=y);var w=p.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function L(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=p,n(w,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:v,configurable:!0}),v.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var m=function(e,t){var r="https://api.themoviedb.org/3".concat(e),o=Object(n.useCallback)(Object(f.a)(d().mark((function e(){var n,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(r));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!!!");case 6:return e.next=8,n.json();case 8:return o=e.sent,t(o.results),e.abrupt("return",o.results);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[r]);Object(n.useEffect)((function(){o()}),[o])},g=(r(28),function(e){var t=Object(n.useState)([]),r=Object(u.a)(t,2),a=r[0],i=r[1],c=Object(n.useState)(!1),l=Object(u.a)(c,2),s=l[0],h=l[1],f=Object(n.useState)({}),v=Object(u.a)(f,2),d=v[0],g=v[1],y=Object(n.useState)(0),w=Object(u.a)(y,2),b=w[0],E=w[1];m(e.ListType,(function(e){i(e)}));var L="https://image.tmdb.org/t/p/original";return o.a.createElement("div",null,o.a.createElement("div",{className:"MovieSection"},"Original"!==e.ListName?o.a.createElement("h2",null,e.ListName):o.a.createElement(o.a.Fragment,null),o.a.createElement("div",{className:"MovieList"},a.map((function(t){return o.a.createElement("img",{className:"imgItem",key:t.id,src:"Original"!==e.ListName?L+(t.backdrop_path||t.poster_path):L+t.poster_path,alt:t.name,onClick:function(){g({movieId:t.id,movieName:t.title||t.name,img:t.backdrop_path||t.poster_path,releaseDate:t.release_date||t.first_air_date,vote:t.vote_average,details:t.overview||"This movie have no description."}),b===t.id?h(!s):h(!0),E(t.id)}})})))),s&&o.a.createElement(p,{movieId:d.movieId,movieName:d.movieName,movieImg:d.img,releaseDate:d.releaseDate,vote:d.vote,details:d.details}))});r(29);var y=function(){var e="9d7b2325092f152dc0037a909884bcfb",t={fetchTrending:"/trending/all/week?api_key=".concat(e,"&language=en-US"),fetchNetflixOriginals:"/discover/movie?api_key=".concat(e,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(e,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(e,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(e,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(e,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(e,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(e,"&with_genres=99"),fetchSearch:"/search/movie?api_key=".concat(e,"&language=en-US")};return o.a.createElement("div",{className:"app"},o.a.createElement(s,null),o.a.createElement(h,null),o.a.createElement("div",{className:"content"},o.a.createElement(g,{ListType:t.fetchNetflixOriginals,ListName:"Original"}),o.a.createElement(g,{ListType:t.fetchTrending,ListName:"Xu h\u01b0\u1edbng"}),o.a.createElement(g,{ListType:t.fetchTopRated,ListName:"X\u1ebfp h\u1ea1ng cao"}),o.a.createElement(g,{ListType:t.fetchActionMovies,ListName:"Phim h\xe0nh \u0111\u1ed9ng"}),o.a.createElement(g,{ListType:t.fetchComedyMovies,ListName:"Phim h\xe0i"}),o.a.createElement(g,{ListType:t.fetchHorrorMovies,ListName:"Phim kinh d\u1ecb"}),o.a.createElement(g,{ListType:t.fetchRomanceMovies,ListName:"Phim l\xe3ng m\u1ea1n"}),o.a.createElement(g,{ListType:t.fetchDocumentaries,ListName:"Phim t\xe0i li\u1ec7u"})))},w=(r(30),function(e){var t=Object(n.useState)(""),r=Object(u.a)(t,2),a=r[0],i=r[1];return o.a.createElement("div",{className:"searchForm"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("form",null,o.a.createElement("div",{className:"topForm"},o.a.createElement("input",{placeholder:"Input your keyword",onChange:function(e){i(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&(t.preventDefault(),e.getInputData(a))},value:a}),o.a.createElement("span",null,o.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16",fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))),o.a.createElement("div",{className:"botForm"},o.a.createElement("button",{className:"resetBtn",onClick:function(e){e.preventDefault(),i("")}},"Reset"),o.a.createElement("button",{className:"searchBtn",onClick:function(t){t.preventDefault(),e.getInputData(a)}},"Search")))))});r(31);function b(){b=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:L(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var h={};function f(){}function v(){}function p(){}var d={};l(d,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==t&&r.call(g,a)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function L(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:v,configurable:!0}),v.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var E=function(e){var t=e.input||"",r="https://api.themoviedb.org/3/search/movie?api_key=9d7b2325092f152dc0037a909884bcfb&language=en-US&page=1&query="+t,a=Object(n.useState)([]),i=Object(u.a)(a,2),c=i[0],l=i[1],s=Object(n.useState)(!1),h=Object(u.a)(s,2),v=h[0],d=h[1],m=Object(n.useState)({}),g=Object(u.a)(m,2),y=g[0],w=g[1],E=Object(n.useState)(0),L=Object(u.a)(E,2),x=L[0],O=L[1],j=Object(n.useCallback)(Object(f.a)(b().mark((function e(){var n,o;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,fetch(r);case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,l(o.results);case 8:case"end":return e.stop()}}),e)}))),[t,r]);return Object(n.useEffect)((function(){j()}),[j]),o.a.createElement("div",{className:"searchResult"},o.a.createElement("h3",null,"Search Result"),o.a.createElement("div",{className:"resultList"},c.length>0?c.map((function(e){return e.poster_path&&o.a.createElement("img",{className:"imgItem",key:e.title+e.id,src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:e.title,onClick:function(){w({movieId:e.id,movieName:e.title,img:e.backdrop_path,releaseDate:e.release_date||e.first_air_date,vote:e.vote_average,details:e.overview||"This movie have no description."}),d(!v),x===e.id?d(!v):d(!0),O(e.id)}})})):o.a.createElement("div",null,"No Result")),(!t||""===t.trim())&&o.a.createElement("p",{style:{color:"red"}},"Please insert your keyword"),v&&o.a.createElement(p,{movieId:y.movieId,movieName:y.movieName,movieImg:y.img,releaseDate:y.releaseDate,vote:y.vote,details:y.details}))},L=(r(32),function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),r=t[0],a=t[1];return o.a.createElement("div",{className:"app"},o.a.createElement(s,null),o.a.createElement(w,{getInputData:function(e){a(e)}}),o.a.createElement(E,{input:r===!r?"":r}))});var x=function(){return o.a.createElement(c.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",element:o.a.createElement(y,null)}),o.a.createElement(l.a,{path:"/search",element:o.a.createElement(L,null)})))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.ffcaacc5.chunk.js.map