(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[31956],{53001:(e,t,r)=>{"use strict";r.d(t,{xT:()=>n,H_:()=>o,Wv:()=>u,gC:()=>a,dG:()=>i,oQ:()=>c,Q2:()=>l,R3:()=>s,Zr:()=>f,Op:()=>p,l$:()=>E,uL:()=>m,zg:()=>d,M3:()=>O,st:()=>y,US:()=>v,$c:()=>A,pW:()=>R,$D:()=>T,ke:()=>g,vw:()=>S,r5:()=>C,X1:()=>_,V3:()=>h,p2:()=>G});var n="BACKGROUND_SELECTOR:ADD_BACKGROUND",o="BACKGROUND_SELECTOR:REMOVE_BACKGROUND",u="BACKGROUND_SELECTOR:SET_CURRENT_BACKGROUND_LAYER",a="BACKGROUND_SELECTOR:BACKGROUND_ADDED",i="BACKGROUND_SELECTOR:BACKGROUND_EDITED",c="BACKGROUND_SELECTOR:ADD_BACKGROUND_PROPERTIES",l="BACKGROUND_SELECTOR:SET_BACKGROUND_MODAL_PARAMS",s="BACKGROUND_SELECTOR:UPDATE_BACKGROUND_THUMBNAIL",f="BACKGROUND_SELECTOR:BACKGROUNDS_CLEAR",p="BACKGROUND_SELECTOR:CREATE_BACKGROUNDS_LIST",E="BACKGROUND_SELECTOR:CLEAR_MODAL_PARAMETERS",m="BACKGROUND_SELECTOR:CONFIRM_DELETE_BACKGROUND_MODAL",d="BACKGROUND_SELECTOR:ALLOW_BACKGROUNDS_DELETION";function O(e){return{type:p,backgrounds:e}}function y(e){return{type:n,source:e}}function v(e){return{type:c,modalParams:e}}function A(e){return{type:l,modalParams:e}}function R(e){return{type:a,layerId:e}}function T(e){return{type:i,layerId:e}}function g(e){return{type:u,layerId:e}}function S(e){return{type:d,allow:e}}function C(e,t){return{type:s,thumbnailData:e,id:t}}function _(e){return{type:o,backgroundId:e}}function h(){return{type:E}}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:m,show:e,layerTitle:t,layerId:r}}},931273:(e,t,r)=>{"use strict";r.d(t,{WX:()=>c,r7:()=>l,V3:()=>s,HR:()=>f,xi:()=>p,ur:()=>E,vK:()=>m,nm:()=>d,QF:()=>O,zZ:()=>y,uN:()=>v,Bz:()=>A,im:()=>R,CO:()=>T,$X:()=>g,Mt:()=>S,Oq:()=>C,YO:()=>_,PR:()=>h,wI:()=>G,bv:()=>b,mh:()=>I,$Y:()=>L,eA:()=>D,UT:()=>P,cS:()=>N,l3:()=>w,Kz:()=>M,vg:()=>x,xM:()=>U,do:()=>F,lb:()=>B,yu:()=>k,tt:()=>j,nX:()=>K,BG:()=>Y,Rc:()=>H,K4:()=>W,Dw:()=>q,dL:()=>V,In:()=>X,r1:()=>Z,XW:()=>$,L8:()=>z,i3:()=>Q,XM:()=>J,X7:()=>ee,M3:()=>te,N3:()=>re,SU:()=>ne,wo:()=>oe,ye:()=>ue,m:()=>ae,wl:()=>ie,bu:()=>ce,A4:()=>le,vG:()=>se,ky:()=>fe,Wf:()=>pe,Ts:()=>Ee,IT:()=>me,XS:()=>de,tx:()=>Oe,We:()=>ye,nx:()=>ve,E9:()=>Ae,zX:()=>Re});var n=r(659551),o=r(501157),u=r(603475),a=r(932354),i=r(197395),c=(n.ZP,o.ZP,u.Z,a.Z,"CATALOG:ADD_LAYERS_FROM_CATALOGS"),l="CATALOG:ADD_LAYER_AND_DESCRIBE",s="CATALOG:TEXT_SEARCH",f="CATALOG:RECORD_LIST_LOADED",p="CATALOG:RESET_CATALOG",E="CATALOG:CATALOG_CLOSE",m="CATALOG:RECORD_LIST_LOAD_ERROR",d="CATALOG:CHANGE_CATALOG_FORMAT",O="CATALOG:ADD_LAYER_ERROR",y="CATALOG:CHANGE_SELECTED_SERVICE",v="CATALOG:CHANGE_CATALOG_MODE",A="CATALOG:CHANGE_METADATA_TEMPLATE",R="CATALOG:CHANGE_TITLE",T="CATALOG:CHANGE_TEXT",g="CATALOG:CHANGE_TYPE",S="CATALOG:CHANGE_SERVICE_PROPERTY",C="CATALOG:CHANGE_SERVICE_FORMAT",_="CATALOG:FOCUS_SERVICES_LIST",h="CATALOG:CHANGE_URL",G="CATALOG:ADD_CATALOG_SERVICE",b="CATALOG:DELETE_CATALOG_SERVICE",I="CATALOG:ADD_SERVICE",L="CATALOG:DELETE_SERVICE",D="CATALOG:SAVING_SERVICE",P="CATALOG:GET_METADATA_RECORD_BY_ID",N="CATALOG:SET_LOADING",w="CATALOG:TOGGLE_TEMPLATE",M="CATALOG:TOGGLE_THUMBNAIL",x="CATALOG:TOGGLE_ADVANCED_SETTINGS",U="CATALOG:FORMAT_OPTIONS_FETCH",F="CATALOG:FORMAT_OPTIONS_LOADING",B="CATALOG:SET_FORMAT_OPTIONS",k="CATALOG:NEW_SERVICE_STATUS";function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.format,r=e.url,n=e.startPosition,o=e.maxRecords,u=e.text,a=e.options,i=void 0===a?{}:a;return{type:s,format:t,url:r,startPosition:n,maxRecords:o,text:u,options:i}}function K(e,t){return{type:f,searchOptions:e,result:t}}function Y(e){return{type:d,format:e}}function H(e){return{type:D,status:e}}function W(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:N,loading:e}}function q(e){return{type:y,service:e}}function V(e){return{type:_,status:e}}function X(e,t){return{type:v,mode:e,isNew:t}}function Z(e){return{type:R,title:e}}function $(e){return{type:T,text:e}}function z(e,t){return{type:S,property:e,value:t}}function Q(e){return{type:C,format:e}}function J(e){return{type:g,newType:e}}function ee(e){return{type:h,url:e}}function te(){return{type:I}}function re(e){return{type:G,service:e}}function ne(e){return{type:b,service:e}}function oe(){return{type:L}}function ue(){return{type:p}}function ae(e){return{type:m,error:e}}function ie(){return{type:E}}function ce(e,t){return{type:"CATALOG:DESCRIBE_ERROR",layer:e,error:t}}var le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.zoomToLayer,n=void 0!==r&&r;return{type:l,layer:e,zoomToLayer:n}};function se(e){return{type:O,error:e}}function fe(e){return{type:P,metadataOptions:e}}var pe=function(e){return{type:A,metadataTemplate:e}},Ee=function(){return{type:x}},me=function(){return{type:w}},de=function(){return{type:M}},Oe=function(e){return{type:U,url:e}},ye=function(e){return{type:F,loading:e}},ve=function(e,t){return{type:B,formats:e,url:t}};function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,i.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:e}})}var Re=function(e){return{type:k,status:e}}},921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>u,Ih:()=>a,Xw:()=>i,Pn:()=>c,DZ:()=>l,e8:()=>s,E0:()=>f,F9:()=>p,X_:()=>E,pb:()=>m,qb:()=>d,Re:()=>O,ih:()=>y,xy:()=>v,jL:()=>A,oz:()=>R,ph:()=>T,lF:()=>g,gG:()=>S,cb:()=>C,GI:()=>_,B1:()=>h,fv:()=>G,gc:()=>b,zX:()=>I,ZF:()=>L,Zb:()=>D,DW:()=>P,Xp:()=>N,Fm:()=>w,sV:()=>M,Mn:()=>x,LU:()=>U,XP:()=>F,WU:()=>B,JB:()=>k,g:()=>j,ws:()=>K,HP:()=>Y,aN:()=>H,Pg:()=>q,u0:()=>V,TM:()=>X,PM:()=>Z,lK:()=>$,sv:()=>z,MO:()=>Q,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ue,Y$:()=>ae,Qu:()=>ie,kT:()=>ce});var n=r(647310),o="LOAD_FEATURE_INFO",u="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",i="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",E="SHOW_REVERSE_GEOCODE",m="HIDE_REVERSE_GEOCODE",d="GET_VECTOR_INFO",O="NO_QUERYABLE_LAYERS",y="CLEAR_WARNING",v="FEATURE_INFO_CLICK",A="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",R="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",T="TOGGLE_MAPINFO_STATE",g="UPDATE_CENTER_TO_MARKER",S="IDENTIFY:CHANGE_PAGE",C="IDENTIFY:CLOSE_IDENTIFY",_="IDENTIFY:CHANGE_FORMAT",h="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",G="IDENTIFY:EDIT_LAYER_FEATURES",b="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",I="IDENTIFY:SET_MAP_TRIGGER",L="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP",P="IDENTIFY:IDENTIFY_IS_MOUNTED",N="IDENTIFY:INIT_PLUGIN";function w(e,t,r,n,u){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:u}}function M(e,t,r,n){return{type:u,error:t,reqId:e,requestParams:r,layerMetadata:n}}function x(e,t,r,n){return{type:a,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function U(){return{type:O}}function F(){return{type:y}}function B(e,t){return{type:c,reqId:e,request:t}}function k(e,t,r,n){return{type:d,layer:e,request:t,metadata:r,queryableLayers:n}}function j(){return{type:l}}function K(e){return{type:s,infoFormat:e}}function Y(){return{type:f}}function H(){return{type:p}}function W(e){return{type:E,reverseGeocodeData:e.data}}function q(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(W(e))})).catch((function(e){t(W(e))}))}}function V(){return{type:m}}function X(){return{type:T}}function Z(e){return{type:g,status:e}}function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:v,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function z(e){return{type:A,point:e}}function Q(e){return{type:R,enabled:e}}function J(e){return{type:S,index:e}}var ee=function(){return{type:C}},te=function(e){return{type:_,format:e}},re=function(e){return{type:h,showCoordinateEditor:e}},ne=function(e){return{type:G,layer:e}},oe=function(e){return{type:b,query:e}},ue=function(e){return{type:I,trigger:e}},ae=function(e){return{type:D,value:e}},ie=function(e){return{type:P,isMounted:e}},ce=function(e){return{type:N,cfg:e}}},659551:(e,t,r)=>{"use strict";r.d(t,{_b:()=>M,kv:()=>j,ZP:()=>H});var n=r(472500),o=r.n(n),u=r(227361),a=r.n(u),i=r(91175),c=r.n(i),l=r(610928),s=r.n(l),f=r(941106),p=r.n(f),E=r(414293),m=r.n(E),d=r(984596),O=r.n(d),y=r(441609),v=r.n(y),A=r(727418),R=r.n(A),T=r(375875),g=r.n(T),S=r(737275),C=r(986267),_=r(501157);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],c=!0,l=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=function(e){var t=o().parse(e,!0);return o().format(R()({},t,{search:null},{query:R()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},N="<ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n       </ogc:Or>",w="<ogc:PropertyIsLike wildCard='%' singleChar='_' escapeChar='\\'><ogc:PropertyName>csw:AnyText</ogc:PropertyName> <ogc:Literal>%${searchText}%</ogc:Literal> </ogc:PropertyIsLike> ",M='<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmi="http://www.isotc211.org/2005/gmi" xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="${startPosition}" maxRecords="${maxRecords}"> <csw:Query typeNames="csw:Record"> <csw:ElementSetName>full</csw:ElementSetName> <csw:Constraint version="1.1.0"> <ogc:Filter> ${filterXml} </ogc:Filter> </csw:Constraint> </csw:Query> </csw:GetRecords>',x=function(e){var t=new Map(Array.from(new URLSearchParams(e.value)).map((function(e){var t=L(e,2),r=t[0],n=t[1];return[r.toLowerCase(),n]}))),r=t.get("layers"),n=t.get("version");return!!r&&b(b({},e),{},{protocol:"OGC:WMS",name:r,value:"".concat(e.value.match(/[^\?]+[\?]+/g),"SERVICE=WMS").concat(n&&"&VERSION=".concat(n))})},U=function(e,t,r){if(!t.name)return null;switch(e){case"wms":var n=0!==t.value.indexOf("http")?(r&&r.catalogURL||"")+"/"+t.value:t.value;return{type:t.protocol||t.scheme,url:n,SRS:[],params:{name:t.name}};case"arcgis":return{type:"arcgis",url:t.value,SRS:[],params:{name:t.name}};default:return null}},F=[/^OGC:WMS-(.*)-http-get-map/g,/^OGC:WMS/g],B=/serviceType\/ogc\/wms/g,k=F.concat(B),j=function(e,t){var r,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],u=(null==e?void 0:e.URI)&&O()(e.URI);if(u){var a=c()(u.map((function(e){if(e.protocol){if(F.some((function(t){return e.protocol.match(t)})))return e;if(e.protocol.match(B))return x(e)}return!1})).filter((function(e){return e})));if(a)return U("wms",a,t)}if(null!=e&&null!==(r=e.references)&&void 0!==r&&r.length){var i=O()(e.references),l=c()(i.filter((function(e){return e.scheme&&F.some((function(t){return e.scheme.match(t)}))})));if(l){var s=o().parse(l.value,!0),f=s.query&&s.query.layers||e.alternative;return U("wms",b(b({},l),{},{name:f}),t)}if(n){var p=c()(i.filter((function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})));if(p)return U("arcgis",b(b({},p),{},{name:e.alternative}),t)}}return null},K={},Y={parseUrl:P,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(99942),r.e(66372)]).then(function(){t(g().get(e).then((function(e){if(e){var t=r(566372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var o={references:[]},u=0;u<n.length;u++){var a=n[u],i=a.name.localPart,c={};c="references"===i&&a.value?{value:a.value.content&&(0,S.$F)(a.value.content[0])||a.value.content||a.value,scheme:a.value.scheme}:a.value.content&&a.value.content[0]||a.value.content||a.value,o[i]&&Array.isArray(o[i])?o[i].push(c):o[i]?o[i]=[o[i],c]:o[i]=c}return{dc:o}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,o,u){return new Promise((function(i){Promise.all([r.e(99942),r.e(1269)]).then(function(){var l=r(566372),f=l.CSW,E=l.marshaller,d=l.unmarshaller,y=E.marshalString({name:"csw:GetRecords",value:f.getRecords(t,n,"string"!=typeof o&&o)});o&&"string"!=typeof o||(y=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.filter,u=(null==o?void 0:o.staticFilter)||N,a="<ogc:And>\n        ".concat(p()((null==o?void 0:o.dynamicFilter)||w)({searchText:r}),"\n        ").concat(u,"\n    </ogc:And>");return p()(M)({filterXml:r?a:u,startPosition:e,maxRecords:t})}(t,n,o,u)),i(g().post(P(e),y,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=d.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r,n=t.value,o=n.searchResults.abstractRecord||n.searchResults.any,i={numberOfRecordsMatched:n.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:n.searchResults.numberOfRecordsReturned,nextRecord:n.searchResults.nextRecord},l=[];if(o)for(var f=0;f<o.length;f++){var p=o[f].value,E={dateStamp:p.dateStamp&&p.dateStamp.date,fileIdentifier:p.fileIdentifier&&p.fileIdentifier.characterString&&p.fileIdentifier.characterString.value,identificationInfo:p.abstractMDIdentification&&p.abstractMDIdentification.value};if(p.boundingBox){var y,A=void 0;if((y=Array.isArray(p.boundingBox)?c()(p.boundingBox):p.boundingBox)&&y.value){var R,T,g,h,G=null!==(R=null===(T=y.value)||void 0===T?void 0:T.crs)&&void 0!==R?R:"",I=null===(g=G.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===g?void 0:g[0],D=(0,C.makeNumericEPSG)(null===(h=G.match(/EPSG:[0-9]+/))||void 0===h?void 0:h[0]),P=y.value.lowerCorner,N=y.value.upperCorner,w=D||(0,C.extractCrsFromURN)(I)||s()(G.split(":"));"EPSG:4326"===(w?"EPSG:"===w.slice(0,5)?(0,C.makeNumericEPSG)(w):(0,C.makeNumericEPSG)("EPSG:".concat(w)):"EPSG:4326")&&"CRS84"!==w&&"OGC:CRS84"!==w&&(P=[P[1],P[0]],N=[N[1],N[0]]),A=(0,C.makeBboxFromOWS)(P,N)}E.boundingBox={extent:A,crs:"EPSG:4326"}}var M=p.dcElement;if(M){for(var x={references:[]},U=0;U<M.length;U++){var F=M[U],B=F.name.localPart,Y={};Y="references"===B&&F.value?{value:F.value.content&&(0,S.$F)(F.value.content[0])||F.value.content||F.value,scheme:F.value.scheme}:F.value.content&&F.value.content[0]||F.value.content||F.value,x[B]&&Array.isArray(x[B])?x[B].push(Y):x[B]?x[B]=[x[B],Y]:x[B]=Y}var H=O()(x.references.length>0?x.references:x.URI);r=r?r.concat(H):H,E.dc=x}l.push(E)}return i.records=l,function(e,t,r){if(!a()(r,"options.service.autoSetVisibilityLimits",!1))return t;var n=((null==e?void 0:e.find((function(e){return k.some((function(t){var r,n;return(null==e||null===(r=e.scheme)||void 0===r?void 0:r.match(t))||(null==e||null===(n=e.protocol)||void 0===n?void 0:n.match(t))}))})))||{}).value,o=L(n&&n.split("?")||[],1)[0];if(!o)return b({},t);var u=K[o],i=!v()(u);return Promise.resolve(i?u:_.ZP.getCapabilities(o+"?version=").then((function(e){return a()(e,"capability.layer.layer",[])})).catch((function(){return[]}))).then((function(e){var r;return i||(K[o]=e),b(b({},t),{},{records:null==t||null===(r=t.records)||void 0===r?void 0:r.map((function(t){var r=a()(j(null==t?void 0:t.dc,null,!1),"params.name",""),n=e.find((function(e){return e.name===r}))||{},o=n.minScaleDenominator,u=n.maxScaleDenominator;return b(b({},t),(!m()(o)||!m()(u))&&{capabilities:{MaxScaleDenominator:u,MinScaleDenominator:o}})}))})}))}(r,i,u)}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,r,n,o){return new Promise((function(u){u(Y.getRecords(e,t,r,n,o))}))},workspaceSearch:function(e,t,n,o,u){return new Promise((function(a){Promise.all([r.e(99942),r.e(1269)]).then(function(){var i=r(484454).Filter,c=u||"%",l=o&&"%"+o+"%"||"%",s=i.propertyIsLike("dc:identifier",c+":"+l),f=i.filter(s);a(Y.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const H=Y},603475:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var n=r(375875),o=r.n(n),u=r(737275),a=r(472500),i=r.n(a),c=r(727418),l=r.n(c),s=r(505055),f=r.n(s),p=r(984596),E=r.n(p),m=r(986267),d=r(707294),O={},y=function(e){var t=i().parse(e,!0);return i().format(l()({},t,{search:null},{query:l()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},v=function(e,t,r,n,o){for(var u=e.Capabilities.Contents,a=(0,d.G6)(e),i=(0,d.s5)(e),c=u.TileMatrixSet&&E()(u.TileMatrixSet)||[],s=[],f=c.length,p=0;p<f;p++)s.push((0,m.getEPSGCode)(c[p]["ows:SupportedCRS"]));var O=u.Layer,y=E()(O).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:y.length,numberOfRecordsReturned:Math.min(r,y.length),nextRecord:t+Math.min(r,y.length)+1,records:y.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return l()({},e,{SRS:s,TileMatrixSet:c,queryable:!!(0,d.b4)(a,"GetFeatureInfo","KVP"),requestEncoding:i,style:(0,d.EN)(e),format:(0,d.JY)(e),GetTileURL:(0,d.b4)(a,"GetTile",i),capabilitiesURL:o})}))}},A={parseUrl:y,getRecords:function(e,t,r,n){var a=O[e];return a&&(new Date).getTime()<a.timestamp+1e3*((0,u.u8)("cacheExpire")||60)?new Promise((function(o){o(v(a.data,t,r,n,e))})):o().get(y(e)).then((function(o){var u;return f().parseString(o.data,{explicitArray:!1},(function(e,t){u=t})),O[e]={timestamp:(new Date).getTime(),data:u},v(u,t,r,n,e)}))},getCapabilities:function(e){var t=O[e];return t&&(new Date).getTime()<t.timestamp+1e3*((0,u.u8)("cacheExpire")||60)?new Promise((function(e){e(t.data)})):o().get(y(e)).then((function(t){var r;return f().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),O[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return A.getRecords(e,t,r,n)},reset:function(){Object.keys(O).forEach((function(e){delete O[e]}))}};const R=A},932354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(227361),o=r.n(n),u=r(737275),a=function(e,t,r,n){var a=o()(u.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!n||e.title.indexOf(n)>-1})),i=a.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:a.length,numberOfRecordsReturned:i.length,records:i,service:{Name:"Background Provider"}})}))};const i={getRecords:a,reset:function(){},textSearch:function(e,t,r,n){return a(0,t,r,n)}}},993451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(86638),o=r(675263),u=r.n(o),a=r(984596),i=r.n(a),c=r(701469),l=r.n(c),s=r(414293),f=r.n(s),p=r(747037),E=r.n(p),m=r(867076),d=["messages"];function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===O(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(l()(t))return t.map((function(o){var u=(0,n.S$)(e,o[r]||E()(o)&&o||"");return A(A({},o),{},R({},r,f()(u)?t:u))}));var o=(0,n.S$)(e,t);return f()(o)?t:o},g=function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return A(A({},n),{},R({},o,e[o]&&T(t,e[o],r)))}};const S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,m.compose)((0,m.getContext)({messages:u().object}),(0,m.mapProps)((function(r){var n=r.messages,o=y(r,d);return A(A({},o),i()(e).reduce(g(o,n,t),{}))})))}},31935:(e,t,r)=>{"use strict";r.d(t,{YL:()=>i,B0:()=>c,Mz:()=>l,TC:()=>s,qS:()=>f,Pe:()=>p,TP:()=>E});var n=r(22222),o=r(675110),u=r(93152),a=r(624262),i=function(e){return e.backgroundSelector&&e.backgroundSelector.source},c=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},l=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},s=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},f=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},p=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},E=(0,n.P1)(o.l2,u.$v,u.lh,(function(e,t,r){var n=e.filter((function(e){return e&&"background"===e.group}));return r&&r[t]?n.map((function(e){return(0,a.kf)(e,t)}))||[]:n}))}}]);