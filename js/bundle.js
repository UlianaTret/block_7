!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";o.r(t);o(2);function n(){document.querySelector(".full-menu").style.display="none"}function c(){document.querySelector(".feedback").style.display="unset",document.querySelector(".callback").style.display="none"}function l(){document.querySelector(".feedback").style.display="none"}function r(){document.querySelector(".callback").style.display="unset",document.querySelector(".feedback").style.display="none"}function u(){document.querySelector(".callback").style.display="none"}document.querySelector(".show-full-menu").addEventListener("click",(function(){document.querySelector(".full-menu").style.display="unset"})),document.querySelector(".menu-opacity").addEventListener("click",n),document.querySelector(".close-full-menu").addEventListener("click",n),document.querySelector(".chat").addEventListener("click",c),document.querySelector(".additional-list__chat").addEventListener("click",c),document.querySelector(".close-feedback").addEventListener("click",l),document.querySelector(".feedback-opacity").addEventListener("click",l),document.querySelector(".call").addEventListener("click",r),document.querySelector(".additional-list__call").addEventListener("click",r),document.querySelector(".close-callback").addEventListener("click",u),document.querySelector(".callback-opacity").addEventListener("click",u),document.querySelector(".read-more").addEventListener("click",(function(e){document.querySelector(".block__infoCPS").style.overflow="visible",document.querySelector(".block__infoCPS").style.height="auto",document.querySelector(".read-more").style.display="none",document.querySelector(".read-less").style.display="unset"})),document.querySelector(".read-less").addEventListener("click",(function(e){document.querySelector(".block__infoCPS").style.overflow="",document.querySelector(".block__infoCPS").style.height="",document.querySelector(".read-more").style.display="unset",document.querySelector(".read-less").style.display="none"})),document.querySelector(".show-more").addEventListener("click",(function(e){document.querySelector(".list-logo").style.overflow="visible",document.querySelector(".list-logo").style.height="100%",document.querySelector(".show-more").style.display="none",document.querySelector(".show-less").style.display="unset"})),document.querySelector(".show-less").addEventListener("click",(function(e){document.querySelector(".list-logo").style.overflow="",document.querySelector(".list-logo").style.height="",document.querySelector(".show-more").style.display="unset",document.querySelector(".show-less").style.display="none"})),document.querySelector(".btn-more-services").addEventListener("click",(function(e){document.querySelector(".list-services").style.overflow="visible",document.querySelector(".list-services").style.height="100%",document.querySelector(".btn-more-services").style.display="none",document.querySelector(".btn-less-services").style.display="unset"})),document.querySelector(".btn-less-services").addEventListener("click",(function(e){document.querySelector(".list-services").style.overflow="",document.querySelector(".list-services").style.height="",document.querySelector(".btn-more-services").style.display="unset",document.querySelector(".btn-less-services").style.display="none"}));new Swiper(".swiper-container",{loop:!1,pagination:{el:".swiper-pagination",clickable:!0},scrollbar:!1,spaceBetween:10,speed:800,width:250})},function(e,t,o){}]);
//# sourceMappingURL=bundle.js.map