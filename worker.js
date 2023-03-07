var umd;(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,o=new Map([["proxy",{canHandle:e=>s(e)&&e[t],serialize(e){const{port1:t,port2:n}=new MessageChannel;return i(e,t),[n,[n]]},deserialize:e=>(e.start(),l(e,[],undefined))}],["throw",{canHandle:e=>s(e)&&a in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function i(e,n=self){n.addEventListener("message",(function r(s){if(!s||!s.data)return;const{id:o,type:u,path:l}=Object.assign({path:[]},s.data),p=(s.data.argumentList||[]).map(h);let y;try{const n=l.slice(0,-1).reduce(((e,t)=>e[t]),e),r=l.reduce(((e,t)=>e[t]),e);switch(u){case"GET":y=r;break;case"SET":n[l.slice(-1)[0]]=h(s.data.value),y=!0;break;case"APPLY":y=r.apply(n,p);break;case"CONSTRUCT":y=function(e){return Object.assign(e,{[t]:!0})}(new r(...p));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;i(e,n),y=function(e,t){return d.set(e,t),e}(t,[t])}break;case"RELEASE":y=void 0;break;default:return}}catch(e){y={value:e,[a]:0}}Promise.resolve(y).catch((e=>({value:e,[a]:0}))).then((e=>{const[t,a]=m(e);n.postMessage(Object.assign(Object.assign({},t),{id:o}),a),"RELEASE"===u&&(n.removeEventListener("message",r),c(n))}))})),n.start&&n.start()}function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function l(e,t=[],a=function(){}){let s=!1;const o=new Proxy(a,{get(n,a){if(u(s),a===r)return()=>y(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{c(e),s=!0}));if("then"===a){if(0===t.length)return{then:()=>o};const n=y(e,{type:"GET",path:t.map((e=>e.toString()))}).then(h);return n.then.bind(n)}return l(e,[...t,a])},set(n,r,a){u(s);const[o,i]=m(a);return y(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:o},i).then(h)},apply(r,a,o){u(s);const i=t[t.length-1];if(i===n)return y(e,{type:"ENDPOINT"}).then(h);if("bind"===i)return l(e,t.slice(0,-1));const[c,d]=p(o);return y(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},d).then(h)},construct(n,r){u(s);const[a,o]=p(r);return y(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:a},o).then(h)}});return o}function p(e){const t=e.map(m);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const d=new WeakMap;function m(e){for(const[t,n]of o)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},d.get(e)||[]]}function h(e){switch(e.type){case"HANDLER":return o.get(e.name).deserialize(e.value);case"RAW":return e.value}}function y(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}importScripts("http://cdn.jsdelivr.net/gh/hexaeight/session-js-spa-1.6.801/dotnet.js");const f={isready:!1,user:dotnet,httpclient:null,ready(){return this.isready}};(async()=>{await f.user.boot(),f.isready=!0,i(f)})(),umd=e})();