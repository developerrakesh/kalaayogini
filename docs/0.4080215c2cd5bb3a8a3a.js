(self.webpackChunkkalaayogini=self.webpackChunkkalaayogini||[]).push([[0],[(e,n,o)=>{"use strict";function a(e,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}o.r(n),o.d(n,{default:()=>s});const s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.insertMsg()}var n,o,s;return n=e,(o=[{key:"closeMsgModal",value:function(){document.querySelector(".msg-modal").classList.remove("msg-modal--show")}},{key:"insertMsg",value:function(){document.body.insertAdjacentHTML("afterend",'\n            <div class="msg-modal" aria-labelledby="popMsg">\n                <h2 id="popMsg" class="msg-modal__title">Buying Options Coming Soon!!</h2>\n                <button class="msg-modal__close">X</button>\n            </div>\n        '),document.querySelector(".msg-modal__close").addEventListener("click",this.closeMsgModal)}}])&&a(n.prototype,o),s&&a(n,s),e}()}]]);