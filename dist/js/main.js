(()=>{"use strict";(()=>{const e=document.querySelectorAll(".header-link");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),s=()=>{const{timeRemaining:r,hours:c,minutes:i,seconds:a}=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(),l=e=>{let t;return t=e.toString().length<2?`0${e}`:e,t};t.textContent=l(c),n.textContent=l(i),o.textContent=l(a);let d=setInterval(s,1e3);r<0&&(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(d))};s()})("20 june 2022"),(()=>{const e=document.querySelector(".reviews-slider"),t=document.querySelectorAll(".reviews-item"),n=document.querySelector(".reviews-slider-ellipse");let o,s=0;for(let e=0;e<t.length;e++){const e=document.createElement("li");e.classList.add("dot"),n.append(e)}const r=document.querySelectorAll(".dot"),c=(e,t,n)=>{e[t].classList.remove(n)},i=(e,t,n)=>{e[t].classList.add(n)},a=()=>{c(t,s,"reviews-item-active"),c(r,s,"dot-active"),s++,s>=t.length&&(s=0),i(t,s,"reviews-item-active"),i(r,s,"dot-active")},l=(e=1500)=>{o=setInterval(a,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot")&&(c(t,s,"reviews-item-active"),c(r,s,"dot-active"),e.target.classList.contains("dot")&&r.forEach(((t,n)=>{e.target===t&&(s=n)})),s>=t.length&&(s=0),s<0&&(s=t.length-1),i(t,s,"reviews-item-active"),i(r,s,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(o)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&l(3e3)}),!0),l(3e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelectorAll(".header-menu>.header-item>a");document.addEventListener("click",(t=>{t.target.closest(".menu-burger")||t.target.closest("menu")?(t.preventDefault(),e.classList.add("active-menu")):e.classList.remove("active-menu"),(t.target.closest(".close-btn")||t.target.matches(".header-menu>.header-item>a"))&&(t.preventDefault(),e.classList.remove("active-menu"))}));for(let e of t)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".specialisation-service"),t=document.querySelectorAll(".specialisation-service-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".specialisation-service-tab")){const o=e.target.closest(".specialisation-service-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),n[t].classList.remove("service-tab-d-none")):(e.classList.remove("active"),n[t].classList.add("service-tab-d-none"))}))}}))})()})();