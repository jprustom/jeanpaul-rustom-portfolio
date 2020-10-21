(()=>{"use strict";const e=document.getElementById("navbar"),t=document.getElementById("hamburger"),n=document.getElementById("mobile-nav__modal"),o=Array.from(n.querySelectorAll("li")),i=(Array.from(document.querySelectorAll("#nav-links__list>li>a")),e.querySelector("h1")),s=document.querySelector(".text-type"),r=Array.from(document.getElementsByClassName("slider__slide")),l=document.getElementById("next-slide-arrow"),a=document.getElementById("previous-slide-arrow"),d=Array.from(document.getElementsByClassName("slider__slide__content")),c=(document.getElementById("about"),document.querySelector("#about>div>p")),u=document.querySelector("#about>div>img"),m=document.getElementById("skills"),f=document.getElementById("skills").querySelector("h1"),h=document.getElementById("skills-container"),v=Array.from(document.getElementsByClassName("skill-box"));var y=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((o=o.apply(e,t||[])).next())}))};class g{constructor(e){this.typeSpeed=400,this.typedTextContainer=e,this.wordsToType=JSON.parse(e.dataset.words),this.timeToWaitBeforeDelete=parseInt(e.dataset.waitBeforeDelete),this.typedTextContainer.style.borderRight="1px solid #777"}typeWord(e){return new Promise(((t,n)=>y(this,void 0,void 0,(function*(){for(let t of e)yield this.typeCharacter(t);t()}))))}typeCharacter(e){return new Promise(((t,n)=>{e.length>1&&n("typeCharacter should be called with a single character!"),setTimeout((()=>{this.typedTextContainer.textContent+=e,t()}),this.typeSpeed)}))}deleteWord(e){return new Promise(((t,n)=>{setTimeout((()=>y(this,void 0,void 0,(function*(){for(let t of e)yield this.deleteCharacter();t()}))),this.timeToWaitBeforeDelete)}))}deleteCharacter(){return new Promise(((e,t)=>{setTimeout((()=>{const t=this.typedTextContainer.textContent;this.typedTextContainer.textContent=t.slice(0,t.length-1),e()}),this.typeSpeed/10)}))}type(){return y(this,void 0,void 0,(function*(){for(;this;)for(let e of this.wordsToType)yield this.typeWord(e),yield this.deleteWord(e)}))}}function p(e,t=!1){const n=document.documentElement.scrollTop,o=n+window.innerHeight,i=e.getBoundingClientRect(),s=i.top+n,r=t?i.bottom+n/2:i.bottom+n;return s>=n&&r<=o}let L=!0;function b(){L=!1}function w(){L=!0}function E(){for(var e=0;e<r.length;e++){const t=r[e];if(!t.classList.contains("slider__slide--current"))continue;let n;if(t.classList.remove("slider__slide--current"),this==l)n=r[(e+1)%r.length];else{if(this!=a)throw new Error("changeSlideHandler should only be called with next slide and previous slide buttons!");n=e-1>=0?r[e-1]:r[r.length-1]}return void n.classList.add("slider__slide--current")}}window.addEventListener("scroll",(function(){if(0==document.documentElement.scrollTop)return e.classList.remove("display-navbar__background"),void e.querySelector("h1").classList.remove("display-navbar__heading");e.classList.contains("display-navbar__background")||e.classList.add("display-navbar__background"),!i.classList.contains("display-navbar__heading")&&p(c,!0)&&i.classList.add("display-navbar__heading")})),t.addEventListener("click",(function(){e.classList.toggle("remove-shadow"),e.querySelector("h1").classList.toggle("remove"),n.classList.contains("open-mobile-nav__modal")?n.classList.remove("open-mobile-nav__modal"):n.classList.add("open-mobile-nav__modal"),o.forEach((e=>{e.classList.toggle("fade")}))})),o.forEach((e=>{e.addEventListener("click",(()=>{t.click()}))})),l.addEventListener("click",E.bind(l)),a.addEventListener("click",E.bind(a)),d.forEach((e=>{e.addEventListener("mouseenter",b),e.addEventListener("mouseleave",w)})),window.addEventListener("scroll",(function(){c.classList.contains("render-about-p")&&u.classList.contains("render-about-img")||p(c,!0)&&(c.classList.add("render-about-p"),u.classList.add("render-about-img"))})),window.addEventListener("scroll",(function(){p(m)&&m.classList.add("render-skills"),document.removeEventListener("scroll",this)})),f.addEventListener("click",(function(){h.scrollTo({left:0,behavior:"smooth"})}));const _={isMouseDown:!1,mouseInitialX:void 0,initialScrollLeft:void 0};h.addEventListener("mousedown",function(e,t){e.isMouseDown=!0,e.mouseInitialX=t.pageX-h.offsetLeft,e.initialScrollLeft=h.scrollLeft}.bind(null,_)),h.addEventListener("mouseleave",function(e,t){e.isMouseDown=!1}.bind(null,_)),h.addEventListener("mousemove",function(e,t){const{isMouseDown:n,mouseInitialX:o,initialScrollLeft:i}=e;if(!n)return;t.preventDefault();const s=t.pageX-h.offsetLeft-o;h.scrollLeft=i-s,m.classList.add("dragging"),v.forEach((e=>{e.classList.add("skill-box--dragging")}))}.bind(null,_)),h.addEventListener("mouseup",function(e,t){e.isMouseDown=!1,m.classList.remove("dragging"),v.forEach((e=>{e.classList.remove("skill-box--dragging")}))}.bind(null,_)),setInterval((()=>{L&&l.click()}),5e3),function(){const e=new g(s);window.onload=()=>{return t=this,n=void 0,i=function*(){yield e.type()},new((o=void 0)||(o=Promise))((function(e,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,l)}a((i=i.apply(t,n||[])).next())}));var t,n,o,i}}()})();