"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4378],{86135:function(e,t,r){r.d(t,{t0:function(){return M},zv:function(){return j},uA:function(){return L},uc:function(){return X},jb:function(){return Z},zb:function(){return P},AV:function(){return W},Ic:function(){return ea},Vs:function(){return ec}});let s=Symbol(),n=Symbol(),o=(e,t)=>new Proxy(e,t),l=Object.getPrototypeOf,a=new WeakMap,i=e=>e&&(a.has(e)?a.get(e):l(e)===Object.prototype||l(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,d=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(l(e),t)},u=e=>e[n]||e,p=(e,t,r,l)=>{if(!i(e))return e;let a=l&&l.get(e);if(!a){let t=u(e);a=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,d(t)]:[t],null==l||l.set(e,a)}let[c,f]=a,g=r&&r.get(c);return g&&!!f===g[1].f||((g=((e,t)=>{let r={f:t},o=!1,l=(t,s)=>{if(!o){let n=r.a.get(e);if(n||(n={},r.a.set(e,n)),"w"===t)n.w=!0;else{let e=n[t];e||(e=new Set,n[t]=e),e.add(s)}}},a={get:(t,s)=>s===n?e:(l("k",s),p(Reflect.get(t,s),r.a,r.c,r.t)),has:(t,n)=>n===s?(o=!0,r.a.delete(e),!0):(l("h",n),Reflect.has(t,n)),getOwnPropertyDescriptor:(e,t)=>(l("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(l("w"),Reflect.ownKeys(e))};return t&&(a.set=a.deleteProperty=()=>!1),[a,r]})(c,!!f))[1].p=o(f||c,g[0]),r&&r.set(c,g)),g[1].a=t,g[1].c=r,g[1].t=l,g[1].p},f=(e,t,r,s)=>{if(Object.is(e,t))return!1;if(!c(e)||!c(t))return!0;let n=r.get(u(e));if(!n)return!0;if(s){let r=s.get(e);if(r&&r.n===t)return r.g;s.set(e,{n:t,g:!1})}let o=null;try{for(let r of n.h||[])if(o=Reflect.has(e,r)!==Reflect.has(t,r))return o;if(!0===n.w){if(o=((e,t)=>{let r=Reflect.ownKeys(e),s=Reflect.ownKeys(t);return r.length!==s.length||r.some((e,t)=>e!==s[t])})(e,t))return o}else for(let r of n.o||[])if(o=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r))return o;for(let l of n.k||[])if(o=f(e[l],t[l],r,s))return o;return null===o&&(o=!0),o}finally{s&&s.set(e,{n:t,g:o})}},g=e=>i(e)&&e[n]||null,h=(e,t=!0)=>{a.set(e,t)},m=e=>"object"==typeof e&&null!==e,b=new WeakMap,y=new WeakSet,w=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>m(e)&&!y.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),s=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,o=(e,t,r=s)=>{let l=n.get(e);if((null==l?void 0:l[0])===t)return l[1];let a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return h(a,!0),n.set(e,[t,a]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(a,t))return;let s=Reflect.get(e,t),n={value:s,enumerable:!0,configurable:!0};if(y.has(s))h(s,!1);else if(s instanceof Promise)delete n.value,n.get=()=>r(s);else if(b.has(s)){let[e,t]=b.get(s);n.value=o(e,t(),r)}Object.defineProperty(a,t,n)}),Object.preventExtensions(a)},l=new WeakMap,a=[1,1],i=s=>{if(!m(s))throw Error("object required");let n=l.get(s);if(n)return n;let c=a[0],d=new Set,u=(e,t=++a[0])=>{c!==t&&(c=t,d.forEach(r=>r(e,t)))},p=a[1],f=(e=++a[1])=>(p===e||d.size||(p=e,w.forEach(([t])=>{let r=t[1](e);r>c&&(c=r)})),c),h=e=>(t,r)=>{let s=[...t];s[1]=[e,...s[1]],u(s,r)},w=new Map,v=(e,t)=>{if(w.has(e))throw Error("prop listener already exists");if(d.size){let r=t[3](h(e));w.set(e,[t,r])}else w.set(e,[t])},I=e=>{var t;let r=w.get(e);r&&(w.delete(e),null==(t=r[1])||t.call(r))},O=e=>{d.add(e),1===d.size&&w.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let s=e[3](h(r));w.set(r,[e,s])});let t=()=>{d.delete(e),0===d.size&&w.forEach(([e,t],r)=>{t&&(t(),w.set(r,[e]))})};return t},C=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),W={deleteProperty(e,t){let r=Reflect.get(e,t);I(t);let s=Reflect.deleteProperty(e,t);return s&&u(["delete",[t],r]),s},set(t,s,n,o){let a=Reflect.has(t,s),c=Reflect.get(t,s,o);if(a&&(e(c,n)||l.has(n)&&e(c,l.get(n))))return!0;I(s),m(n)&&(n=g(n)||n);let d=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,u(["resolve",[s],e])}).catch(e=>{n.status="rejected",n.reason=e,u(["reject",[s],e])});else{!b.has(n)&&r(n)&&(d=i(n));let e=!y.has(d)&&b.get(d);e&&v(s,e)}return Reflect.set(t,s,d,o),u(["set",[s],n,c]),!0}},j=t(C,W);l.set(s,j);let E=[C,f,o,O];return b.set(j,E),Reflect.ownKeys(s).forEach(e=>{let t=Object.getOwnPropertyDescriptor(s,e);"value"in t&&(j[e]=s[e],delete t.value,delete t.writable),Object.defineProperty(C,e,t)}),j})=>[i,b,y,e,t,r,s,n,o,l,a],[v]=w();function I(e={}){return v(e)}function O(e,t,r){let s;let n=b.get(e);n||console.warn("Please use proxy object");let o=[],l=n[3],a=!1,i=e=>{if(o.push(e),r){t(o.splice(0));return}s||(s=Promise.resolve().then(()=>{s=void 0,a&&t(o.splice(0))}))},c=l(i);return a=!0,()=>{a=!1,c()}}let C=I({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),W={state:C,subscribe:e=>O(C,()=>e(C)),push(e,t){e!==C.view&&(C.view=e,t&&(C.data=t),C.history.push(e))},reset(e){C.view=e,C.history=[e]},replace(e){C.history.length>1&&(C.history[C.history.length-1]=e,C.view=e)},goBack(){if(C.history.length>1){C.history.pop();let[e]=C.history.slice(-1);C.view=e}},setData(e){C.data=e}},j={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>j.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return j.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,r){if(j.isHttpUrl(e))return this.formatUniversalUrl(e,t,r);let s=e;s.includes("://")||(s=`${s=e.replaceAll("/","").replaceAll(":","")}://`),s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,r);let n=encodeURIComponent(t);return`${s}wc?uri=${n}`},formatUniversalUrl(e,t,r){if(!j.isHttpUrl(e))return this.formatNativeUrl(e,t,r);let s=e;s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,r);let n=encodeURIComponent(t);return`${s}wc?uri=${n}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(j.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(j.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(j.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"u">typeof localStorage&&localStorage.setItem(j.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=W.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},E="u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),A=I({enabled:E,userSessionId:"",events:[],connectedWalletId:void 0}),L={state:A,subscribe:e=>O(A.events,()=>e(function(e,t){let r=b.get(e);r||console.warn("Please use proxy object");let[s,n,o]=r;return o(s,n(),void 0)}(A.events[A.events.length-1]))),initialize(){A.enabled&&"u">typeof(null==crypto?void 0:crypto.randomUUID)&&(A.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){A.connectedWalletId=e},click(e){if(A.enabled){let t={type:"CLICK",name:e.name,userSessionId:A.userSessionId,timestamp:Date.now(),data:e};A.events.push(t)}},track(e){if(A.enabled){let t={type:"TRACK",name:e.name,userSessionId:A.userSessionId,timestamp:Date.now(),data:e};A.events.push(t)}},view(e){if(A.enabled){let t={type:"VIEW",name:e.name,userSessionId:A.userSessionId,timestamp:Date.now(),data:e};A.events.push(t)}}},k=I({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),P={state:k,subscribe:e=>O(k,()=>e(k)),setChains(e){k.chains=e},setWalletConnectUri(e){k.walletConnectUri=e},setIsCustomDesktop(e){k.isCustomDesktop=e},setIsCustomMobile(e){k.isCustomMobile=e},setIsDataLoaded(e){k.isDataLoaded=e},setIsUiLoaded(e){k.isUiLoaded=e},setIsAuth(e){k.isAuth=e}},D=I({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),M={state:D,subscribe:e=>O(D,()=>e(D)),setConfig(e){var t,r;L.initialize(),P.setChains(e.chains),P.setIsAuth(!!e.enableAuthMode),P.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),P.setIsCustomDesktop(!!(null==(r=e.desktopWallets)?void 0:r.length)),j.setModalVersionInStorage(),Object.assign(D,e)}};var U=Object.defineProperty,S=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))R.call(t,r)&&x(e,r,t[r]);if(S)for(var r of S(t))N.call(t,r)&&x(e,r,t[r]);return e};let _="https://explorer-api.walletconnect.com",$="js-2.6.2";async function K(e,t){let r=T({sdkType:"wcm",sdkVersion:$},t),s=new URL(e,_);return s.searchParams.append("projectId",M.state.projectId),Object.entries(r).forEach(([e,t])=>{t&&s.searchParams.append(e,String(t))}),(await fetch(s)).json()}let V={getDesktopListings:async e=>K("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>K("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>K("/w3m/v1/getInjectedListings",e),getAllListings:async e=>K("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${_}/w3m/v1/getWalletImage/${e}?projectId=${M.state.projectId}&sdkType=wcm&sdkVersion=${$}`,getAssetImageUrl:e=>`${_}/w3m/v1/getAssetImage/${e}?projectId=${M.state.projectId}&sdkType=wcm&sdkVersion=${$}`};var z=Object.defineProperty,H=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&q(e,r,t[r]);if(H)for(var r of H(t))J.call(t,r)&&q(e,r,t[r]);return e};let G=j.isMobile(),Q=I({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),X={state:Q,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=M.state;if("NONE"===e||"ALL"===t&&!e)return Q.recomendedWallets;if(j.isArray(e)){let t={recommendedIds:e.join(",")},{listings:r}=await V.getAllListings(t),s=Object.values(r);s.sort((t,r)=>{let s=e.indexOf(t.id),n=e.indexOf(r.id);return s-n}),Q.recomendedWallets=s}else{let{chains:e,isAuth:r}=P.state,s=e?.join(","),n=j.isArray(t),o={page:1,sdks:r?"auth_v1":void 0,entries:j.RECOMMENDED_WALLET_AMOUNT,chains:s,version:2,excludedIds:n?t.join(","):void 0},{listings:l}=G?await V.getMobileListings(o):await V.getDesktopListings(o);Q.recomendedWallets=Object.values(l)}return Q.recomendedWallets},async getWallets(e){let t=F({},e),{explorerRecommendedWalletIds:r,explorerExcludedWalletIds:s}=M.state,{recomendedWallets:n}=Q;if("ALL"===s)return Q.wallets;n.length?t.excludedIds=n.map(e=>e.id).join(","):j.isArray(r)&&(t.excludedIds=r.join(",")),j.isArray(s)&&(t.excludedIds=[t.excludedIds,s].filter(Boolean).join(",")),P.state.isAuth&&(t.sdks="auth_v1");let{page:o,search:l}=e,{listings:a,total:i}=G?await V.getMobileListings(t):await V.getDesktopListings(t),c=Object.values(a),d=l?"search":"wallets";return Q[d]={listings:[...Q[d].listings,...c],total:i,page:o??1},{listings:c,total:i}},getWalletImageUrl:e=>V.getWalletImageUrl(e),getAssetImageUrl:e=>V.getAssetImageUrl(e),resetSearch(){Q.search={listings:[],total:0,page:1}}},Y=I({open:!1}),Z={state:Y,subscribe:e=>O(Y,()=>e(Y)),open:async e=>new Promise(t=>{let{isUiLoaded:r,isDataLoaded:s}=P.state;if(j.removeWalletConnectDeepLink(),P.setWalletConnectUri(e?.uri),P.setChains(e?.chains),W.reset("ConnectWallet"),r&&s)Y.open=!0,t();else{let e=setInterval(()=>{let r=P.state;r.isUiLoaded&&r.isDataLoaded&&(clearInterval(e),Y.open=!0,t())},200)}}),close(){Y.open=!1}};var ee=Object.defineProperty,et=Object.getOwnPropertySymbols,er=Object.prototype.hasOwnProperty,es=Object.prototype.propertyIsEnumerable,en=(e,t,r)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eo=(e,t)=>{for(var r in t||(t={}))er.call(t,r)&&en(e,r,t[r]);if(et)for(var r of et(t))es.call(t,r)&&en(e,r,t[r]);return e};let el=I({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),ea={state:el,subscribe:e=>O(el,()=>e(el)),setThemeConfig(e){let{themeMode:t,themeVariables:r}=e;t&&(el.themeMode=t),r&&(el.themeVariables=eo({},r))}},ei=I({open:!1,message:"",variant:"success"}),ec={state:ei,subscribe:e=>O(ei,()=>e(ei)),openToast(e,t){ei.open=!0,ei.message=e,ei.variant=t},closeToast(){ei.open=!1}}},24378:function(e,t,r){r.r(t),r.d(t,{WalletConnectModal:function(){return n}});var s=r(86135);class n{constructor(e){this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.Ic.setThemeConfig,s.Ic.setThemeConfig(e),s.t0.setConfig(e),this.initUi()}async initUi(){if("u">typeof window){await Promise.all([r.e(4061),r.e(7976)]).then(r.bind(r,17976));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),s.zb.setIsUiLoaded(!0)}}}}}]);