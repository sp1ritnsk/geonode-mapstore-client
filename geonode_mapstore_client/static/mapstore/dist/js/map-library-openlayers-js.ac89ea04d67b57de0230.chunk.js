(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16037,7654],{921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>s,e8:()=>f,E0:()=>l,F9:()=>p,X_:()=>d,pb:()=>m,qb:()=>y,Re:()=>v,ih:()=>E,xy:()=>h,jL:()=>b,oz:()=>_,ph:()=>I,lF:()=>O,gG:()=>g,cb:()=>T,GI:()=>q,B1:()=>N,fv:()=>R,gc:()=>F,zX:()=>P,ZF:()=>S,Zb:()=>A,DW:()=>M,Xp:()=>w,Fm:()=>C,sV:()=>D,Mn:()=>j,LU:()=>G,XP:()=>k,WU:()=>L,JB:()=>U,g:()=>x,ws:()=>Y,HP:()=>Z,aN:()=>H,Pg:()=>W,u0:()=>X,TM:()=>K,PM:()=>Q,lK:()=>V,sv:()=>z,MO:()=>J,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ie,Y$:()=>ue,Qu:()=>ae,kT:()=>ce});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",m="HIDE_REVERSE_GEOCODE",y="GET_VECTOR_INFO",v="NO_QUERYABLE_LAYERS",E="CLEAR_WARNING",h="FEATURE_INFO_CLICK",b="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",_="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",I="TOGGLE_MAPINFO_STATE",O="UPDATE_CENTER_TO_MARKER",g="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",q="IDENTIFY:CHANGE_FORMAT",N="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",R="IDENTIFY:EDIT_LAYER_FEATURES",F="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",P="IDENTIFY:SET_MAP_TRIGGER",S="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",A="IDENTIFY:SET_SHOW_IN_MAP_POPUP",M="IDENTIFY:IDENTIFY_IS_MOUNTED",w="IDENTIFY:INIT_PLUGIN";function C(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function D(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function j(e,t,n,r){return{type:u,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function G(){return{type:v}}function k(){return{type:E}}function L(e,t){return{type:c,reqId:e,request:t}}function U(e,t,n,r){return{type:y,layer:e,request:t,metadata:n,queryableLayers:r}}function x(){return{type:s}}function Y(e){return{type:f,infoFormat:e}}function Z(){return{type:l}}function H(){return{type:p}}function B(e){return{type:d,reverseGeocodeData:e.data}}function W(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(B(e))})).catch((function(e){t(B(e))}))}}function X(){return{type:m}}function K(){return{type:I}}function Q(e){return{type:O,status:e}}function V(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:h,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function z(e){return{type:b,point:e}}function J(e){return{type:_,enabled:e}}function $(e){return{type:g,index:e}}var ee=function(){return{type:T}},te=function(e){return{type:q,format:e}},ne=function(e){return{type:N,showCoordinateEditor:e}},re=function(e){return{type:R,layer:e}},oe=function(e){return{type:F,query:e}},ie=function(e){return{type:P,trigger:e}},ue=function(e){return{type:A,value:e}},ae=function(e){return{type:M,isMounted:e}},ce=function(e){return{type:w,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(375875),o=n.n(r),i=n(472500),u=n.n(i),a=n(727418),c=n.n(a),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(e,t){var n=c()({q:e},s,t||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},s),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},615402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(675263),o=n.n(r),i=n(124852),u=n.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function l(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function d(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var y=n(868195).FormattedHTMLMessage,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(){return c(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){return this.context.intl?u().createElement(y,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u().Component);d(v,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),d(v,"contextTypes",{intl:o().object});const E=v},434637:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(){return n(103498).default,{Map:n(790596).Z,Layer:n(145697).Z,Feature:n(130072).Z,MeasurementSupport:n(505904).Z,Overview:n(722404).Z,ScaleBar:n(809056).Z,DrawSupport:n(706909).Z,PopupSupport:n(126105).Z,BoxSelectionSupport:n(389912).Z}}},38560:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(480681),o=n(124852),i=n.n(o),u=n(294184),a=n.n(u),c=["disabled","className","onClick"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const f=(l=r.Button,i().forwardRef((function(e,t){var n=e.disabled,r=e.className,o=e.onClick,u=void 0===o?function(){}:o,f=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,c);return i().createElement(l,s({ref:t,className:n?a()("disabled",r):r,onClick:function(){n||u.apply(void 0,arguments)}},f),f.children)})));var l},808797:(e,t,n)=>{"use strict";n.d(t,{rp:()=>c,Ov:()=>f,wd:()=>l,L0:()=>p}),n(701469);var r=n(91175),o=n.n(r),i=n(807654),u=n.n(i);function a(e){var t=Math.floor(e),n=60*(e-t),r=Math.floor(n),o=60*(n-r);return t+"° "+r+"' "+Math.floor(o)+"'' "}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.measureTrueBearing,r=void 0!==n&&n,o=t.fractionDigits,i=void 0===o?0:o,u="";if(r){var c="";e>=0&&e<10?c="00":e>10&&e<100&&(c="0");var s=i>0?e.toFixed(i):Math.floor(e);u=c+s+"°"}else e>=0&&e<90?u="N "+a(e)+"E":e>90&&e<=180?u="S "+a(180-e)+"E":e>180&&e<270?u="S "+a(e-180)+"W":e>=270&&e<=360&&(u="N "+a(360-e)+"W");return u}var s={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return s[t]&&s[t][n]?e*s[t][n]:e}var l=function(e){return!u()(parseFloat(e[0]))&&!u()(parseFloat(e[1]))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,n=e.type,r=t;if("LineString"===n){if((r=t.filter(l)).length<2)return[]}else if("Polygon"===n){if((r=o()(t).filter(l)).length<3)return[[]];r=[r.concat([o()(r)])]}return r}},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},580760:(e,t,n)=>{var r=n(989881);e.exports=function(e,t){var n=[];return r(e,(function(e,r,o){t(e,r,o)&&n.push(e)})),n}},763105:(e,t,n)=>{var r=n(234963),o=n(580760),i=n(267206),u=n(701469);e.exports=function(e,t){return(u(e)?r:o)(e,i(t,3))}},807654:(e,t,n)=>{var r=n(281763);e.exports=function(e){return r(e)&&e!=+e}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},410240:(e,t,n)=>{var r=n(829750),o=n(880531),i=n(640554),u=n(479833);e.exports=function(e,t,n){return e=u(e),n=null==n?0:r(i(n),0,e.length),t=o(t),e.slice(n,n+t.length)==t}},893379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function u(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],s=n[c]||0,f="".concat(c," ").concat(s);n[c]=s+1;var l=u(f),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:y(p,t),references:1}),r.push(f)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var u=o(e.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function l(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,m=0;function y(e,t){var n,r,o;if(t.singleton){var i=m++;n=d||(d=c(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=u(n[r]);i[o].references--}for(var c=a(e,t),s=0;s<n.length;s++){var f=u(n[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=c}}}}}]);