(()=>{var e,t,n={90:e=>{!function(t,n){var r=function(e,t,n){"use strict";var r,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var i=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,h=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],m={},g=Array.prototype.forEach,p=function(e,t){return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e[l]("class")||"")&&m[t]},y=function(e,t){p(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=p(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},_=function(e,t,n){var r=n?s:"removeEventListener";n&&_(e,t),v.forEach((function(n){e[r](n,t)}))},w=function(e,n,a,i,o){var s=t.createEvent("Event");return a||(a={}),a.instance=r,s.initEvent(n,!i,!o),s.detail=a,e.dispatchEvent(s),s},z=function(t,n){var r;!o&&(r=e.picturefill||a.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},N=(ye=[],be=[],_e=ye,we=function(){var e=_e;for(_e=ye.length?be:ye,ge=!0,pe=!1;e.length;)e.shift()();ge=!1},ze=function(e,n){ge&&!n?e.apply(this,arguments):(_e.push(e),pe||(pe=!0,(t.hidden?u:d)(we)))},ze._lsFlush=we,ze),A=function(e,t){return t?function(){N(e)}:function(){var t=this,n=arguments;N((function(){e.apply(t,n)}))}},k=function(e){var t,r=0,i=a.throttleDelay,o=a.ricTimeout,s=function(){t=!1,r=n.now(),e()},l=f&&o>49?function(){f(s,{timeout:o}),o!==a.ricTimeout&&(o=a.ricTimeout)}:A((function(){u(s)}),!0);return function(e){var a;(e=!0===e)&&(o=33),t||(t=!0,(a=i-(n.now()-r))<0&&(a=0),e||a<9?l():u(l,a))}},x=function(e){var t,r,a=99,i=function(){t=null,e()},o=function(){var e=n.now()-r;e<a?u(o,a-e):(f||i)(i)};return function(){r=n.now(),t||(t=u(o,a))}},L=(K=/^img$/i,Q=/^iframe$/i,V="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),X=0,Y=0,Z=0,ee=-1,te=function(e){Z--,(!e||Z<0||!e.target)&&(Z=0)},ne=function(e){return null==J&&(J="hidden"==C(t.body,"visibility")),J||!("hidden"==C(e.parentNode,"visibility")&&"hidden"==C(e,"visibility"))},re=function(e,n){var r,a=e,o=ne(e);for(I-=n,G+=n,R-=n,U+=n;o&&(a=a.offsetParent)&&a!=t.body&&a!=i;)(o=(C(a,"opacity")||1)>0)&&"visible"!=C(a,"overflow")&&(r=a.getBoundingClientRect(),o=U>r.left&&R<r.right&&G>r.top-1&&I<r.bottom+1);return o},ae=function(){var e,n,o,s,c,u,d,f,h,v,m,g,p=r.elements;if((q=a.loadMode)&&Z<8&&(e=p.length)){for(n=0,ee++;n<e;n++)if(p[n]&&!p[n]._lazyRace)if(!V||r.prematureUnveil&&r.prematureUnveil(p[n]))fe(p[n]);else if((f=p[n][l]("data-expand"))&&(u=1*f)||(u=Y),v||(v=!a.expand||a.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:a.expand,r._defEx=v,m=v*a.expFactor,g=a.hFac,J=null,Y<m&&Z<1&&ee>2&&q>2&&!t.hidden?(Y=m,ee=0):Y=q>1&&ee>1&&Z<6?v:X),h!==u&&(H=innerWidth+u*g,D=innerHeight+u,d=-1*u,h=u),o=p[n].getBoundingClientRect(),(G=o.bottom)>=d&&(I=o.top)<=D&&(U=o.right)>=d*g&&(R=o.left)<=H&&(G||U||R||I)&&(a.loadHidden||ne(p[n]))&&(W&&Z<3&&!f&&(q<3||ee<4)||re(p[n],u))){if(fe(p[n]),c=!0,Z>9)break}else!c&&W&&!s&&Z<4&&ee<4&&q>2&&(B[0]||a.preloadAfterLoad)&&(B[0]||!f&&(G||U||R||I||"auto"!=p[n][l](a.sizesAttr)))&&(s=B[0]||p[n]);s&&!c&&fe(s)}},ie=k(ae),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),y(t,a.loadedClass),b(t,a.loadingClass),_(t,le),w(t,"lazyloaded"))},se=A(oe),le=function(e){se({target:e.target})},ce=function(e,t){var n=e.getAttribute("data-load-mode")||a.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},ue=function(e){var t,n=e[l](a.srcsetAttr);(t=a.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},de=A((function(e,t,n,r,i){var o,s,c,d,f,v;(f=w(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?y(e,a.autosizesClass):e.setAttribute("sizes",r)),s=e[l](a.srcsetAttr),o=e[l](a.srcAttr),i&&(d=(c=e.parentNode)&&h.test(c.nodeName||"")),v=t.firesLoad||"src"in e&&(s||o||d),f={target:e},y(e,a.loadingClass),v&&(clearTimeout($),$=u(te,2500),_(e,le,!0)),d&&g.call(c.getElementsByTagName("source"),ue),s?e.setAttribute("srcset",s):o&&!d&&(Q.test(e.nodeName)?ce(e,o):e.src=o),i&&(s||d)&&z(e,{src:o})),e._lazyRace&&delete e._lazyRace,b(e,a.lazyClass),N((function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&y(e,a.fastLoadedClass),oe(f),e._lazyCache=!0,u((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Z--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=K.test(e.nodeName),r=n&&(e[l](a.sizesAttr)||e[l]("sizes")),i="auto"==r;(!i&&W||!n||!e[l]("src")&&!e.srcset||e.complete||p(e,a.errorClass)||!p(e,a.lazyClass))&&(t=w(e,"lazyunveilread").detail,i&&S.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Z++,de(e,t,i,r,n))}},he=x((function(){a.loadMode=3,ie()})),ve=function(){3==a.loadMode&&(a.loadMode=2),he()},me=function(){W||(n.now()-F<999?u(me,999):(W=!0,a.loadMode=3,ie(),c("scroll",ve,!0)))},{_:function(){F=n.now(),r.elements=t.getElementsByClassName(a.lazyClass),B=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),c("scroll",ie,!0),c("resize",ie,!0),c("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+a.loadingClass);n.length&&n.forEach&&d((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(ie).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[s]("DOMNodeInserted",ie,!0),i[s]("DOMAttrModified",ie,!0),setInterval(ie,999)),c("hashchange",ie,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,ie,!0)})),/d$|^c/.test(t.readyState)?me():(c("load",me),t[s]("DOMContentLoaded",ie),u(me,2e4)),r.elements.length?(ae(),N._lsFlush()):ie()},checkElems:ie,unveil:fe,_aLSL:ve}),S=(j=A((function(e,t,n,r){var a,i,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),h.test(t.nodeName||""))for(i=0,o=(a=t.getElementsByTagName("source")).length;i<o;i++)a[i].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)})),O=function(e,t,n){var r,a=e.parentNode;a&&(n=E(e,a,n),(r=w(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&j(e,a,r,n))},P=x((function(){var e,t=M.length;if(t)for(e=0;e<t;e++)O(M[e])})),{_:function(){M=t.getElementsByClassName(a.autosizesClass),c("resize",P)},checkElems:P,updateElem:O}),T=function(){!T.i&&t.getElementsByClassName&&(T.i=!0,S._(),L._())};var M,j,O,P;var B,W,$,q,F,H,D,I,R,U,G,J,K,Q,V,X,Y,Z,ee,te,ne,re,ae,ie,oe,se,le,ce,ue,de,fe,he,ve,me;var ge,pe,ye,be,_e,we,ze;return u((function(){a.init&&T()})),r={cfg:a,autoSizer:S,loader:L,init:T,uP:z,aC:y,rC:b,hC:p,fire:w,gW:E,rAF:N}}(t,t.document,Date);t.lazySizes=r,e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},705:(e,t,n)=>{var r=n(639).Symbol;e.exports=r},239:(e,t,n)=>{var r=n(705),a=n(607),i=n(333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):i(e)}},957:(e,t,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},607:(e,t,n)=>{var r=n(705),a=Object.prototype,i=a.hasOwnProperty,o=a.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=o.call(e);return r&&(t?e[s]=n:delete e[s]),a}},333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},639:(e,t,n)=>{var r=n(957),a="object"==typeof self&&self&&self.Object===Object&&self,i=r||a||Function("return this")();e.exports=i},279:(e,t,n)=>{var r=n(218),a=n(771),i=n(841),o=Math.max,s=Math.min;e.exports=function(e,t,n){var l,c,u,d,f,h,v=0,m=!1,g=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=l,r=c;return l=c=void 0,v=t,d=e.apply(r,n)}function b(e){return v=e,f=setTimeout(w,t),m?y(e):d}function _(e){var n=e-h;return void 0===h||n>=t||n<0||g&&e-v>=u}function w(){var e=a();if(_(e))return z(e);f=setTimeout(w,function(e){var n=t-(e-h);return g?s(n,u-(e-v)):n}(e))}function z(e){return f=void 0,p&&l?y(e):(l=c=void 0,d)}function C(){var e=a(),n=_(e);if(l=arguments,c=this,h=e,n){if(void 0===f)return b(h);if(g)return clearTimeout(f),f=setTimeout(w,t),y(h)}return void 0===f&&(f=setTimeout(w,t)),d}return t=i(t)||0,r(n)&&(m=!!n.leading,u=(g="maxWait"in n)?o(i(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),C.cancel=function(){void 0!==f&&clearTimeout(f),v=0,l=h=c=f=void 0},C.flush=function(){return void 0===f?d:z(a())},C}},218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},448:(e,t,n)=>{var r=n(239),a=n(5);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},771:(e,t,n)=>{var r=n(639);e.exports=function(){return r.Date.now()}},841:(e,t,n)=>{var r=n(218),a=n(448),i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}}},r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,a),t.exports}a.m=n,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+".860a86fa7450b89ca1ba.js",a.miniCssF=e=>(179===e?"main":e)+"."+{483:"860a86fa7450b89ca1ba"}[e]+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="kalaayogini:",a.l=(n,r,i)=>{if(e[n])e[n].push(r);else{var o,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){o=u;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+i),o.src=n),e[n]=[r];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(f);var a=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),s&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,a)=>{r=e[t]=[n,a]}));n.push(r[2]=i);var o=a.p+a.u(t),s=new Error;a.l(o,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}}),"chunk-"+t)}};var t=(t,n)=>{for(var r,i,[o,s,l]=n,c=0,u=[];c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&u.push(e[i][0]),e[i]=0;for(r in s)a.o(s,r)&&(a.m[r]=s[r]);for(l&&l(a),t&&t(n);u.length;)u.shift()()},n=self.webpackChunkkalaayogini=self.webpackChunkkalaayogini||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";a(90);var e=a(279),t=a.n(e);function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.mainNav=document.querySelector(".site-header__nav"),this.header=document.querySelector(".site-header"),this.browserHeight=window.innerHeight,this.events()}var r,a,i;return r=e,(a=[{key:"showNav",value:function(){this.mainNav.classList.toggle("site-header__nav--show"),this.menuIcon.classList.toggle("site-header__menu-icon--close")}},{key:"closeNav",value:function(){this.mainNav.classList.remove("site-header__nav--show"),this.menuIcon.classList.remove("site-header__menu-icon--close")}},{key:"changeNavPosition",value:function(){this.browserHeight<400?this.header.classList.add("site-header--small-height-screen"):this.header.classList.remove("site-header--small-height-screen")}},{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){e.showNav()})),this.changeNavPosition(),document.addEventListener("click",(function(t){t.target.matches(".site-header__menu-icon")||t.target.matches(".site-header__nav")||t.target.matches(".site-header__nav ul")||t.target.matches(".site-header__nav li")||t.target.matches(".site-header__nav a")||t.target.matches(".site-header__nav__toggle-btn")||e.closeNav()})),window.addEventListener("keyup",(function(t){27==t.keyCode&&e.closeNav()})),window.addEventListener("resize",t()((function(){e.browserHeight=window.innerHeight,e.changeNavPosition()}),300))}}])&&n(r.prototype,a),i&&n(r,i),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.toggleBtn=document.querySelector(".site-header__nav__toggle-btn"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.toggleBtn.addEventListener("click",(function(){e.toggleBtn.classList.toggle("site-header__nav__toggle-btn--on"),e.toggleBtn.classList.contains("site-header__nav__toggle-btn--on")?document.querySelector("html").classList.add("change-hue"):document.querySelector("html").classList.remove("change-hue")}))}}])&&i(t.prototype,n),r&&i(t,r),e}();new r,new o;var s,l=document.querySelectorAll(".contact-btn"),c=setTimeout((function(){a.e(483).then(a.bind(a,483)).then((function(e){s=new e.default})).catch((function(){return console.log("Error in loading Modal")}))}),500);l.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===s?a.e(483).then(a.bind(a,483)).then((function(e){clearTimeout(c),s=new e.default,setTimeout((function(){s.openModal()}),50)})).catch((function(){return console.log("Error in loading Modal")})):s.openModal()}))}))})()})();