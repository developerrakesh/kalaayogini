(self.webpackChunkkalaayogini=self.webpackChunkkalaayogini||[]).push([[433],{433:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>i});var l=o(279),t=o.n(l);function n(e,a){for(var o=0;o<a.length;o++){var l=a[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}const i=function(){function e(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.insertModal(),this.browserHeight=window.innerHeight,this.browserWidth=window.innerWidth}var a,o,l;return a=e,(o=[{key:"insertModal",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="modal wrapper wrapper--center-children" aria-labelledby="contactTitle">\n            <form class="modal__form">\n                <div class="modal__close" role="button" aria-label="close modal button">X</div>\n                <h2 class="modal__title" id="contactTitle">Contact Us</h2>\n                <p class="modal__msg">Please leave us a message and we will reach out to you.</p>\n                <fieldset class="modal__user-input">\n                    <input type="text" name="name" id="name" required placeholder="Name" aria-label="name">\n                    <input type="email" name="email" id="email" required placeholder="Email" aria-label="email">\n                    <input type="tel" name="phone" id="phone" placeholder="Phone No." aria-label="phone number">\n                    <textarea name="msg" id="msg" cols="30" rows="7" placeholder="Message" aria-label="message"></textarea>\n                </fieldset>\n                <button class="btn modal__btn submit-btn">Submit</button>\n            </form>\n        </div>\n        <div class="modal-overlay"></div>\n        ')}},{key:"changeModalPosition",value:function(){this.browserWidth<678?this.browserHeight<480?document.querySelector(".modal").classList.add("modal--small-height-screen"):document.querySelector(".modal").classList.remove("modal--small-height-screen"):this.browserHeight<556?document.querySelector(".modal").classList.add("modal--small-height-screen"):document.querySelector(".modal").classList.remove("modal--small-height-screen")}},{key:"closeModal",value:function(){document.querySelector(".modal").classList.remove("modal--show"),document.querySelector(".modal-overlay").classList.remove("modal-overlay--show")}},{key:"openModal",value:function(){var e=this;document.querySelector(".modal").classList.add("modal--show"),document.querySelector(".modal-overlay").classList.add("modal-overlay--show"),this.changeModalPosition(),document.querySelector(".modal__close").addEventListener("click",(function(){e.closeModal()})),document.querySelector(".modal").addEventListener("click",(function(a){a.target.matches(".modal")&&e.closeModal()})),window.addEventListener("keyup",(function(a){27==a.keyCode&&e.closeModal()})),window.addEventListener("resize",t()((function(){e.browserHeight=window.innerHeight,e.browserWidth=window.innerWidth,e.changeModalPosition()}),300))}}])&&n(a.prototype,o),l&&n(a,l),e}()}}]);