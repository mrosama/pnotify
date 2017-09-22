"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},PNotify=function(){function t(t,e,i,n){(n||"text"in e&&d(t.text,i.text)||"insert_brs"in e&&d(t.insert_brs,i.insert_brs))&&(t._text_processed=e._text_processed=M.computed._text_processed(t.text,t.insert_brs)),(n||"styling"in e&&d(t.styling,i.styling))&&(t._styles=e._styles=M.computed._styles(t.styling))}function e(t){p(t,"svelte-1191067480","")}function i(){var t=m("style");t.id="svelte-1191067480-style",t.textContent='[svelte-1191067480].ui-pnotify,[svelte-1191067480] .ui-pnotify{top:36px;right:36px;position:absolute;height:auto;z-index:2;display:none}body[svelte-1191067480] > .ui-pnotify,[svelte-1191067480] body > .ui-pnotify{position:fixed;z-index:100040}[svelte-1191067480].ui-pnotify.ui-pnotify-in,[svelte-1191067480] .ui-pnotify.ui-pnotify-in{display:block}[svelte-1191067480].ui-pnotify.ui-pnotify-move,[svelte-1191067480] .ui-pnotify.ui-pnotify-move{transition:left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}[svelte-1191067480].ui-pnotify.ui-pnotify-fade-slow,[svelte-1191067480] .ui-pnotify.ui-pnotify-fade-slow{transition:opacity .4s linear;opacity:0}[svelte-1191067480].ui-pnotify.ui-pnotify-fade-slow.ui-pnotify.ui-pnotify-move,[svelte-1191067480] .ui-pnotify.ui-pnotify-fade-slow.ui-pnotify.ui-pnotify-move{transition:opacity .4s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}[svelte-1191067480].ui-pnotify.ui-pnotify-fade-normal,[svelte-1191067480] .ui-pnotify.ui-pnotify-fade-normal{transition:opacity .25s linear;opacity:0}[svelte-1191067480].ui-pnotify.ui-pnotify-fade-normal.ui-pnotify.ui-pnotify-move,[svelte-1191067480] .ui-pnotify.ui-pnotify-fade-normal.ui-pnotify.ui-pnotify-move{transition:opacity .25s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}[svelte-1191067480].ui-pnotify.ui-pnotify-fade-fast,[svelte-1191067480] .ui-pnotify.ui-pnotify-fade-fast{transition:opacity .1s linear;opacity:0}[svelte-1191067480].ui-pnotify.ui-pnotify-fade-fast.ui-pnotify.ui-pnotify-move,[svelte-1191067480] .ui-pnotify.ui-pnotify-fade-fast.ui-pnotify.ui-pnotify-move{transition:opacity .1s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}[svelte-1191067480].ui-pnotify.ui-pnotify-fade-in,[svelte-1191067480] .ui-pnotify.ui-pnotify-fade-in{opacity:1}[svelte-1191067480].ui-pnotify .ui-pnotify-shadow,[svelte-1191067480] .ui-pnotify .ui-pnotify-shadow{-webkit-box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1);-moz-box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1);box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1)}[svelte-1191067480].ui-pnotify-container,[svelte-1191067480] .ui-pnotify-container{background-position:0 0;padding:.8em;height:100%;margin:0}[svelte-1191067480].ui-pnotify-container:after,[svelte-1191067480] .ui-pnotify-container:after{content:" ";visibility:hidden;display:block;height:0;clear:both}[svelte-1191067480].ui-pnotify-container.ui-pnotify-sharp,[svelte-1191067480] .ui-pnotify-container.ui-pnotify-sharp{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}[svelte-1191067480].ui-pnotify-title,[svelte-1191067480] .ui-pnotify-title{display:block;margin-bottom:.4em;margin-top:0}[svelte-1191067480].ui-pnotify-text,[svelte-1191067480] .ui-pnotify-text{display:block}[svelte-1191067480].ui-pnotify-icon,[svelte-1191067480] .ui-pnotify-icon,[svelte-1191067480].ui-pnotify-icon span,[svelte-1191067480] .ui-pnotify-icon span{display:block;float:left;margin-right:.2em}[svelte-1191067480].ui-pnotify.stack-topleft,[svelte-1191067480] .ui-pnotify.stack-topleft,[svelte-1191067480].ui-pnotify.stack-bottomleft,[svelte-1191067480] .ui-pnotify.stack-bottomleft{left:25px;right:auto}[svelte-1191067480].ui-pnotify.stack-bottomright,[svelte-1191067480] .ui-pnotify.stack-bottomright,[svelte-1191067480].ui-pnotify.stack-bottomleft,[svelte-1191067480] .ui-pnotify.stack-bottomleft{bottom:25px;top:auto}[svelte-1191067480].ui-pnotify.stack-modal,[svelte-1191067480] .ui-pnotify.stack-modal{left:50%;right:auto;margin-left:-150px}[svelte-1191067480].ui-pnotify-modal-overlay,[svelte-1191067480] .ui-pnotify-modal-overlay{background-color:rgba(0, 0, 0, .4);top:0;left:0;position:absolute;height:100%;width:100%;z-index:1}body[svelte-1191067480] > .ui-pnotify-modal-overlay,[svelte-1191067480] body > .ui-pnotify-modal-overlay{position:fixed;z-index:100039}[svelte-1191067480].ui-pnotify-modal-overlay-hidden,[svelte-1191067480] .ui-pnotify-modal-overlay-hidden{display:none}',h(t,document.head)}function n(t,i){function n(t){i.mouseenter(t)}function s(t){i.mouseleave(t)}var a,r,u,f,d,x,w,k,T,C,N,L=!1!==t.icon&&o(t,i),O=l(t),j=O(t,i),E=c(t),M=E(t,i);return{create:function(){a=m("div"),f=m("div"),L&&L.create(),x=y("\n    "),w=m("h4"),j.create(),T=y("\n    "),C=m("div"),M.create(),this.hydrate()},hydrate:function(i){e(a),a.className=r="ui-pnotify "+t.addclass+" "+t._animatingClass+" "+t._moveClass+" "+("fade"===t.animation?"ui-pnotify-fade-"+t.animate_speed:""),a.style.cssText=u="\n      "+("string"==typeof t.width?"width: "+t.width+";":"")+"\n      "+("string"==typeof t.min_height?"min-height: "+t.min_height+";":"")+"\n    ",p(a,"aria-live","assertive"),p(a,"aria-role","alertdialog"),v(a,"mouseenter",n),v(a,"mouseleave",s),f.className=d="ui-pnotify-container "+t._styles.container+" "+t._styles[t.type]+" "+t.cornerclass+" "+(t.shadow?"ui-pnotify-shadow":""),p(f,"role","alert"),w.className="ui-pnotify-title",w.style.cssText=k="display: "+(!1===t.title?"none":"block"),C.className="ui-pnotify-text",C.style.cssText=N="display: "+(!1===t.text?"none":"block"),p(C,"aria-role","alert")},mount:function(t,e){g(a,t,e),i.refs.elem=a,h(f,a),i.refs.container=f,L&&L.mount(f,null),h(x,f),h(w,f),i.refs.titleContainer=w,j.mount(w,null),h(T,f),h(C,f),i.refs.textContainer=C,M.mount(C,null)},update:function(t,e){r!==(r="ui-pnotify "+e.addclass+" "+e._animatingClass+" "+e._moveClass+" "+("fade"===e.animation?"ui-pnotify-fade-"+e.animate_speed:""))&&(a.className=r),u!==(u="\n      "+("string"==typeof e.width?"width: "+e.width+";":"")+"\n      "+("string"==typeof e.min_height?"min-height: "+e.min_height+";":"")+"\n    ")&&(a.style.cssText=u),d!==(d="ui-pnotify-container "+e._styles.container+" "+e._styles[e.type]+" "+e.cornerclass+" "+(e.shadow?"ui-pnotify-shadow":""))&&(f.className=d),!1!==e.icon?L?L.update(t,e):(L=o(e,i),L.create(),L.mount(f,x)):L&&(L.unmount(),L.destroy(),L=null),k!==(k="display: "+(!1===e.title?"none":"block"))&&(w.style.cssText=k),O===(O=l(e))&&j?j.update(t,e):(j.unmount(),j.destroy(),j=O(e,i),j.create(),j.mount(w,null)),N!==(N="display: "+(!1===e.text?"none":"block"))&&(C.style.cssText=N),E===(E=c(e))&&M?M.update(t,e):(M.unmount(),M.destroy(),M=E(e,i),M.create(),M.mount(C,null))},unmount:function(){_(a),L&&L.unmount(),j.unmount(),M.unmount()},destroy:function(){b(a,"mouseenter",n),b(a,"mouseleave",s),i.refs.elem===a&&(i.refs.elem=null),i.refs.container===f&&(i.refs.container=null),L&&L.destroy(),i.refs.titleContainer===w&&(i.refs.titleContainer=null),j.destroy(),i.refs.textContainer===C&&(i.refs.textContainer=null),M.destroy()}}}function o(t,e){var i,n,o;return{create:function(){i=m("div"),n=m("span"),this.hydrate()},hydrate:function(e){i.className="ui-pnotify-icon",n.className=o=!0===t.icon?t._styles[t.type+"_icon"]:t.icon},mount:function(t,e){g(i,t,e),h(n,i)},update:function(t,e){o!==(o=!0===e.icon?e._styles[e.type+"_icon"]:e.icon)&&(n.className=o)},unmount:function(){_(i)},destroy:x}}function s(t,e){var i,n;return{create:function(){n=y(i=t.title)},mount:function(t,e){g(n,t,e)},update:function(t,e){i!==(i=e.title)&&(n.data=i)},unmount:function(){_(n)},destroy:x}}function a(t,e){var i,n,o;return{create:function(){n=m("noscript"),o=m("noscript")},mount:function(e,s){g(n,e,s),g(o,e,s),n.insertAdjacentHTML("afterend",i=t.title)},update:function(t,e){i!==(i=e.title)&&(w(n,o),n.insertAdjacentHTML("afterend",i=e.title))},unmount:function(){w(n,o),_(n),_(o)},destroy:x}}function r(t,e){var i,n;return{create:function(){n=y(i=t.text)},mount:function(t,e){g(n,t,e)},update:function(t,e){i!==(i=e.text)&&(n.data=i)},unmount:function(){_(n)},destroy:x}}function u(t,e){var i,n,o;return{create:function(){n=m("noscript"),o=m("noscript")},mount:function(e,s){g(n,e,s),g(o,e,s),n.insertAdjacentHTML("afterend",i=t._text_processed)},update:function(t,e){i!==(i=e._text_processed)&&(w(n,o),n.insertAdjacentHTML("afterend",i=e._text_processed))},unmount:function(){w(n,o),_(n),_(o)},destroy:x}}function l(t){return t.title_escape?s:a}function c(t){return t.text_escape?r:u}function f(e){e=e||{},this.refs={},this._state=k(M.data(),e.data),t(this._state,this._state,{},!0),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=e._root||this,this._yield=e._yield,this._destroyed=!1,document.getElementById("svelte-1191067480-style")||i();var o=M.oncreate.bind(this);e._root?this._root._oncreate.push(o):this._oncreate=[o],this._fragment=n(this._state,this),e.target&&(this._fragment.create(),this._fragment.mount(e.target,null)),e._root||T(this._oncreate)}function d(t,e){return t!==e||t&&"object"===(void 0===t?"undefined":_typeof(t))||"function"==typeof t}function p(t,e,i){t.setAttribute(e,i)}function m(t){return document.createElement(t)}function h(t,e){e.appendChild(t)}function y(t){return document.createTextNode(t)}function v(t,e,i){t.addEventListener(e,i,!1)}function g(t,e,i){e.insertBefore(t,i)}function _(t){t.parentNode.removeChild(t)}function b(t,e,i){t.removeEventListener(e,i,!1)}function x(){}function w(t,e){for(;t.nextSibling&&t.nextSibling!==e;)t.parentNode.removeChild(t.nextSibling)}function k(t){for(var e,i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(e in i)t[e]=i[e]}return t}function T(t){for(;t&&t.length;)t.pop()()}function C(t){return t?this._state[t]:this._state}function N(t,e){var i=t in this._handlers&&this._handlers[t].slice();if(i)for(var n=0;n<i.length;n+=1)i[n].call(this,e)}function L(t,e,i){var n=i&&i.defer?this._observers.post:this._observers.pre;return(n[t]||(n[t]=[])).push(e),i&&!1===i.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var i=n[t].indexOf(e);~i&&n[t].splice(i,1)}}}function O(t,e){if("teardown"===t)return this.on("destroy",e);var i=this._handlers[t]||(this._handlers[t]=[]);return i.push(e),{cancel:function(){var t=i.indexOf(e);~t&&i.splice(t,1)}}}function j(t){this._set(k({},t)),this._root._lock||(this._root._lock=!0,T(this._root._beforecreate),T(this._root._oncreate),T(this._root._aftercreate),this._root._lock=!1)}function E(t,e,i,n){for(var o in e)if(o in i){var s=i[o],a=n[o];if(d(s,a)){var r=e[o];if(!r)continue;for(var u=0;u<r.length;u+=1){var l=r[u];l.__calling||(l.__calling=!0,l.call(t,s,a),l.__calling=!1)}}}}var M=function(){var t=void 0,e={dir1:"down",dir2:"left",push:"bottom",spacing1:36,spacing2:36,context:window&&document.body,modal:!1},i=void 0,n=function(){e.context=document.body,window.addEventListener("resize",function(){i&&clearTimeout(i),i=setTimeout(function(){t.positionAll(!0)},10)})},o=function(e){var i=document.createElement("div");return i.classList.add("ui-pnotify-modal-overlay"),e.context.prependChild(i),i.addEventListener("click",function(){e.overlay_close&&t.removeStack(e)}),i};return{setup:function(o){t=o,t.VERSION="4.0.0",t.defaults={title:!1,title_escape:!1,text:!1,text_escape:!1,styling:"brighttheme",addclass:"",cornerclass:"",auto_display:!0,width:"300px",min_height:"16px",type:"info",icon:!0,animation:"fade",animate_speed:"normal",shadow:!0,hide:!0,delay:8e3,mouse_reset:!0,remove:!0,insert_brs:!0,destroy:!0,stack:e},t.notices=[],t.modules={},t.alert=function(e){return new t({target:document.body,data:e})},t.notice=function(e){return e.type="notice",new t({target:document.body,data:e})},t.info=function(e){return e.type="info",new t({target:document.body,data:e})},t.success=function(e){return e.type="success",new t({target:document.body,data:e})},t.error=function(e){return e.type="error",new t({target:document.body,data:e})},t.removeAll=function(){for(var e=0;e<t.notices.length;e++)t.notices[e].remove&&t.notices[e].remove(!1)},t.removeStack=function(e){for(var i=0;i<t.notices.length;i++)t.notices[i].remove&&t.notices[i].get("stack")===e&&t.notices[i].remove(!1)},t.positionAll=function(n){if(i&&clearTimeout(i),i=null,t.notices.length>0){for(var o=0;o<t.notices.length;o++){var s=t.notices[o],a=s.get("stack");if(!a)return;a.overlay&&a.overlay.classList.add("ui-pnotify-modal-overlay-hidden"),a.nextpos1=a.firstpos1,a.nextpos2=a.firstpos2,a.addpos2=0,a.animation=n}for(var r=0;r<t.notices.length;r++)t.notices[r].position()}else delete e.nextpos1,delete e.nextpos2},t.styling={brighttheme:{container:"brighttheme",notice:"brighttheme-notice",notice_icon:"brighttheme-icon-notice",info:"brighttheme-info",info_icon:"brighttheme-icon-info",success:"brighttheme-success",success_icon:"brighttheme-icon-success",error:"brighttheme-error",error_icon:"brighttheme-icon-error"},bootstrap3:{container:"alert",notice:"alert-warning",notice_icon:"glyphicon glyphicon-exclamation-sign",info:"alert-info",info_icon:"glyphicon glyphicon-info-sign",success:"alert-success",success_icon:"glyphicon glyphicon-ok-sign",error:"alert-danger",error_icon:"glyphicon glyphicon-warning-sign"}},t.styling.fontawesome=_extends({},t.styling.bootstrap3),_extends(t.styling.fontawesome,{notice_icon:"fa fa-exclamation-circle",info_icon:"fa fa-info",success_icon:"fa fa-check",error_icon:"fa fa-warning"}),window&&document.body?n():document.addEventListener("DOMContentLoaded",n)},oncreate:function(){var e={};for(var i in t.modules)e[i]=_extends({},t.modules[i]);this.set({_modules:e}),"top"===this.get("stack").push?(t.notices.splice(0,0,this),this.queuePosition(!1,1)):t.notices.push(this),this.get("stack").animation=!1,this.runModules("init"),this.set({_state:"closed"}),this.get("auto_display")&&this.open()},data:function(){return _extends({_state:"initializing",_timer:null,_animTimer:null,_animating:!1,_animatingClass:"",_moveClass:"",_timerHide:!1},t.defaults)},computed:{_text_processed:function(t,e){return e?String(t).replace(/\n/g,"<br />"):t},_styles:function(e){return"object"===(void 0===e?"undefined":_typeof(e))?e:t.styling[e]}},methods:{runModules:function(t,e){var i=this.get("_modules");for(var n in i){var o="object"===(void 0===e?"undefined":_typeof(e))&&n in e?e[n]:e;"function"==typeof i[n][t]&&(i[n].notice=this,i[n].options="object"===_typeof(this.get("modules")[n])?this.get("modules")[n]:{},i[n][t](this,"object"===_typeof(this.get("modules")[n])?this.get("modules")[n]:{},o))}},update:function(t){var e=this.get("hide");return this.runModules("update",t),this.set(t),this.get("hide")?e||this.queueRemove():this.cancelRemove(),this.queuePosition(!0),this},mouseenter:function(t){if(this.get("mouse_reset")&&"out"===this.get("_animating")){if(!this.get("_timerHide"))return;this.cancelRemove()}this.get("hide")&&this.get("mouse_reset")&&this.cancelRemove()},mouseleave:function(e){this.get("hide")&&this.get("mouse_reset")&&"out"!==this.get("_animating")&&this.queueRemove(),t.positionAll()},open:function(){var t=this;this.set({_state:"opening"}),this.runModules("beforeOpen");var e=this.get("stack");if(!this.refs.elem.parentNode)if(e.context)e.context.appendChild(this.refs.elem);else{if(!document.body)throw new Error("No context to open this notice in.");document.body.appendChild(this.refs.elem)}return"top"!==e.push&&this.position(!0),this.animateIn(function(){t.queuePosition(!0),t.get("hide")&&t.queueRemove(),t.set({_state:"open"}),t.runModules("afterOpen")}),this},remove:function(e){var i=this;return this.set({_state:"closing",_timerHide:!!e}),this.runModules("beforeClose"),this.get("_timer")&&clearTimeout&&(clearTimeout(this.get("_timer")),this.set({_timer:null})),this.animateOut(function(){if(i.set({_state:"closed"}),i.runModules("afterClose"),i.queuePosition(!0),i.get("remove")&&i.refs.elem.parentNode.removeChild(i.refs.elem),i.runModules("beforeDestroy"),i.get("destroy")&&null!==t.notices){var e=t.notices.indexOf(i);-1!==e&&t.notices.splice(e,1)}i.runModules("afterDestroy")}),this},animateIn:function(t){var e=this;this.set({_animating:"in"});var i=function i(){if(e.refs.elem.removeEventListener("transitionend",i),e.get("_animTimer")&&clearTimeout(e.get("_animTimer")),"in"===e.get("_animating")){var n=!1,o=e.refs.elem.getBoundingClientRect();for(var s in o)if(o[s]>0){n=!0;break}n?(t&&t.call(),e.set({_animating:!1})):e.set({_animTimer:setTimeout(i,40)})}};"fade"===this.get("animation")?(this.refs.elem.addEventListener("transitionend",i),this.set({_animatingClass:"ui-pnotify-in"}),this.refs.elem.style.opacity,this.set({_animatingClass:"ui-pnotify-in ui-pnotify-fade-in"}),this.set({_animTimer:setTimeout(i,650)})):(this.set({_animatingClass:"ui-pnotify-in"}),i())},animateOut:function(e){var i=this;this.set({_animating:"out"});var n=function n(){if(i.refs.elem.removeEventListener("transitionend",n),i.get("_animTimer")&&clearTimeout(i.get("_animTimer")),"out"===i.get("_animating")){var o=!1,s=i.refs.elem.getBoundingClientRect();for(var a in s)if(s[a]>0){o=!0;break}if("0"!=i.refs.elem.style.opacity&&o)i.set({_animTimer:setTimeout(n,40)});else{i.set({_animatingClass:""});var r=i.get("stack");if(r.overlay){for(var u=!1,l=0;l<t.notices.length;l++){var c=t.notices[l];if(c!=i&&c.get("stack")===r&&"closed"!==c.get("_state")){u=!0;break}}u||r.overlay.classList.add("ui-pnotify-modal-overlay-hidden")}e&&e.call(),i.set({_animating:!1})}}};"fade"===this.get("animation")?(this.refs.elem.addEventListener("transitionend",n),this.set({_animatingClass:"ui-pnotify-in"}),this.set({_animTimer:setTimeout(n,650)})):(this.set({_animatingClass:""}),n())},position:function(t){var e=this.get("stack"),i=this.refs.elem;if(e){e.context||(e.context=document.body),"number"!=typeof e.nextpos1&&(e.nextpos1=e.firstpos1),"number"!=typeof e.nextpos2&&(e.nextpos2=e.firstpos2),"number"!=typeof e.addpos2&&(e.addpos2=0);var n=!i.classList.contains("ui-pnotify-in");if(!n||t){e.modal&&(e.overlay?e.overlay.classList.remove("ui-pnotify-modal-overlay-hidden"):e.overlay=o(e)),this.set({_moveClass:"ui-pnotify-move"});var s=void 0,a=void 0,r=void 0;switch(e.dir1){case"down":r="top";break;case"up":r="bottom";break;case"left":r="right";break;case"right":r="left"}s=parseInt(i.style[r].replace(/(?:\..*|[^0-9.])/g,"")),isNaN(s)&&(s=0),void 0!==e.firstpos1||n||(e.firstpos1=s,e.nextpos1=e.firstpos1);var u=void 0;switch(e.dir2){case"down":u="top";break;case"up":u="bottom";break;case"left":u="right";break;case"right":u="left"}a=parseInt(i.style[u].replace(/(?:\..*|[^0-9.])/g,"")),isNaN(a)&&(a=0),void 0!==e.firstpos2||n||(e.firstpos2=a,e.nextpos2=e.firstpos2);var l=i.getBoundingClientRect();switch(("down"===e.dir1&&e.nextpos1+l.height>(e.context===document.body?window.innerHeight:e.context.scrollHeight)||"up"===e.dir1&&e.nextpos1+l.height>(e.context===document.body?window.innerHeight:e.context.scrollHeight)||"left"===e.dir1&&e.nextpos1+l.width>(e.context===document.body?window.innerWidth:e.context.scrollWidth)||"right"===e.dir1&&e.nextpos1+l.width>(e.context===document.body?window.innerWidth:e.context.scrollWidth))&&(e.nextpos1=e.firstpos1,e.nextpos2+=e.addpos2+(void 0===e.spacing2?25:e.spacing2),e.addpos2=0),"number"==typeof e.nextpos2&&(e.animation?i.style[u]=e.nextpos2+"px":(this.set({_moveClass:""}),i.style[u]=e.nextpos2+"px",i.style[u],this.set({_moveClass:"ui-pnotify-move"}))),e.dir2){case"down":case"up":i.offsetHeight+parseFloat(i.style.marginTop,10)+parseFloat(i.style.marginBottom,10)>e.addpos2&&(e.addpos2=l.height);break;case"left":case"right":i.offsetWidth+parseFloat(i.style.marginLeft,10)+parseFloat(i.style.marginRight,10)>e.addpos2&&(e.addpos2=l.width)}switch("number"==typeof e.nextpos1&&(e.animation?i.style[r]=e.nextpos1+"px":(this.set({_moveClass:""}),i.style[r]=e.nextpos1+"px",i.style[r],this.set({_moveClass:"ui-pnotify-move"}))),e.dir1){case"down":case"up":e.nextpos1+=l.height+(void 0===e.spacing1?25:e.spacing1);break;case"left":case"right":e.nextpos1+=l.width+(void 0===e.spacing1?25:e.spacing1)}}return this}},queuePosition:function(e,n){return i&&clearTimeout(i),n||(n=10),i=setTimeout(function(){t.positionAll(e)},n),this},cancelRemove:function(){return this.get("_timer")&&clearTimeout(this.get("_timer")),this.get("_animTimer")&&clearTimeout(this.get("_animTimer")),"closing"===this.get("_state")&&this.set({_state:"open",_animating:!1,_animatingClass:"fade"===this.get("animation")?"ui-pnotify-in ui-pnotify-fade-in":"ui-pnotify-in"}),this},queueRemove:function(){var t=this;return this.cancelRemove(),this.set({_timer:setTimeout(function(){return t.remove(!0)},isNaN(this.get("delay"))?0:this.get("delay"))}),this}}}}();return k(f.prototype,M.methods,{get:C,fire:N,observe:L,on:O,set:j}),f.prototype._set=function(e){var i=this._state;this._state=k({},i,e),t(this._state,e,i,!1),E(this,this._observers.pre,e,i),this._fragment.update(e,this._state),E(this,this._observers.post,e,i)},f.prototype.teardown=f.prototype.destroy=function(t){this._destroyed||(this.fire("destroy"),!1!==t&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=null,this._state={},this._destroyed=!0)},M.setup(f),f}();
//# sourceMappingURL=PNotify.js.map