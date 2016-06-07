/*! alertifyjs - v1.7.0 - Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) */
!function(a){"use strict";function b(a,b){a.className+=" "+b}function c(a,b){for(var c=a.className.split(" "),d=b.split(" "),e=0;e<d.length;e+=1){var f=c.indexOf(d[e]);f>-1&&c.splice(f,1)}a.className=c.join(" ")}function d(){return"rtl"===a.getComputedStyle(document.body).direction}function e(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function f(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function g(a){for(;a.lastChild;)a.removeChild(a.lastChild)}function h(a){if(null===a)return a;var b;if(Array.isArray(a)){b=[];for(var c=0;c<a.length;c+=1)b.push(h(a[c]));return b}if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return b=new RegExp(a.source),b.global=a.global,b.ignoreCase=a.ignoreCase,b.multiline=a.multiline,b.lastIndex=a.lastIndex,b;if("object"==typeof a){b={};for(var d in a)a.hasOwnProperty(d)&&(b[d]=h(a[d]));return b}return a}function i(a,b){var c=a.elements.root;c.parentNode.removeChild(c),delete a.elements,a.settings=h(a.__settings),a.__init=b,delete a.__internal}function j(a,b){return function(){if(arguments.length>0){for(var c=[],d=0;d<arguments.length;d+=1)c.push(arguments[d]);return c.push(a),b.apply(a,c)}return b.apply(a,[null,a])}}function k(a,b){return{index:a,button:b,cancel:!1}}function l(a,b){"function"==typeof b.get(a)&&b.get(a).call(b)}function m(){function a(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function b(a){var b=d[a].dialog;return b&&"function"==typeof b.__init&&b.__init(b),b}function c(b,c,e,f){var g={dialog:null,factory:c};return void 0!==f&&(g.factory=function(){return a(new d[f].factory,new c)}),e||(g.dialog=a(new g.factory,t)),d[b]=g}var d={};return{defaults:o,dialog:function(d,e,f,g){if("function"!=typeof e)return b(d);if(this.hasOwnProperty(d))throw new Error("alertify.dialog: name already exists");var h=c(d,e,f,g);f?this[d]=function(){if(0===arguments.length)return h.dialog;var b=a(new h.factory,t);return b&&"function"==typeof b.__init&&b.__init(b),b.main.apply(b,arguments),b.show.apply(b)}:this[d]=function(){if(h.dialog&&"function"==typeof h.dialog.__init&&h.dialog.__init(h.dialog),0===arguments.length)return h.dialog;var a=h.dialog;return a.main.apply(h.dialog,arguments),a.show.apply(h.dialog)}},closeAll:function(a){for(var b=p.slice(0),c=0;c<b.length;c+=1){var d=b[c];(void 0===a||a!==d)&&d.close()}},setting:function(a,c,d){if("notifier"===a)return u.setting(c,d);var e=b(a);return e?e.setting(c,d):void 0},set:function(a,b,c){return this.setting(a,b,c)},get:function(a,b){return this.setting(a,b)},notify:function(a,b,c,d){return u.create(b,d).push(a,c)},message:function(a,b,c){return u.create(null,c).push(a,b)},success:function(a,b,c){return u.create("success",c).push(a,b)},error:function(a,b,c){return u.create("error",c).push(a,b)},warning:function(a,b,c){return u.create("warning",c).push(a,b)},dismissAll:function(){u.dismissAll()}}}var n={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39},o={modal:!0,basic:!1,frameless:!1,movable:!0,moveBounded:!1,resizable:!0,closable:!0,closableByDimmer:!0,maximizable:!0,startMaximized:!1,pinnable:!0,pinned:!0,padding:!0,overflow:!0,maintainFocus:!0,transition:"pulse",autoReset:!0,notifier:{delay:5,position:"bottom-right"},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"}},p=[],q=function(){return document.addEventListener?function(a,b,c,d){a.addEventListener(b,c,d===!0)}:document.attachEvent?function(a,b,c){a.attachEvent("on"+b,c)}:void 0}(),r=function(){return document.removeEventListener?function(a,b,c,d){a.removeEventListener(b,c,d===!0)}:document.detachEvent?function(a,b,c){a.detachEvent("on"+b,c)}:void 0}(),s=function(){var a,b,c=!1,d={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(a in d)if(void 0!==document.documentElement.style[a]){b=d[a],c=!0;break}return{type:b,supported:c}}(),t=function(){function m(a){if(!a.__internal){delete a.__init,a.__settings||(a.__settings=h(a.settings)),null===ya&&document.body.setAttribute("tabindex","0");var c;"function"==typeof a.setup?(c=a.setup(),c.options=c.options||{},c.focus=c.focus||{}):c={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof a.hooks&&(a.hooks={});var d=[];if(Array.isArray(c.buttons))for(var e=0;e<c.buttons.length;e+=1){var f=c.buttons[e],g={};for(var i in f)f.hasOwnProperty(i)&&(g[i]=f[i]);d.push(g)}var k=a.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:d,focus:c.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},l={};l.root=document.createElement("div"),l.root.className=Ba.base+" "+Ba.hidden+" ",l.root.innerHTML=Aa.dimmer+Aa.modal,l.dimmer=l.root.firstChild,l.modal=l.root.lastChild,l.modal.innerHTML=Aa.dialog,l.dialog=l.modal.firstChild,l.dialog.innerHTML=Aa.reset+Aa.commands+Aa.header+Aa.body+Aa.footer+Aa.resizeHandle+Aa.reset,l.reset=[],l.reset.push(l.dialog.firstChild),l.reset.push(l.dialog.lastChild),l.commands={},l.commands.container=l.reset[0].nextSibling,l.commands.pin=l.commands.container.firstChild,l.commands.maximize=l.commands.pin.nextSibling,l.commands.close=l.commands.maximize.nextSibling,l.header=l.commands.container.nextSibling,l.body=l.header.nextSibling,l.body.innerHTML=Aa.content,l.content=l.body.firstChild,l.footer=l.body.nextSibling,l.footer.innerHTML=Aa.buttons.auxiliary+Aa.buttons.primary,l.resizeHandle=l.footer.nextSibling,l.buttons={},l.buttons.auxiliary=l.footer.firstChild,l.buttons.primary=l.buttons.auxiliary.nextSibling,l.buttons.primary.innerHTML=Aa.button,l.buttonTemplate=l.buttons.primary.firstChild,l.buttons.primary.removeChild(l.buttonTemplate);for(var m=0;m<a.__internal.buttons.length;m+=1){var n=a.__internal.buttons[m];xa.indexOf(n.key)<0&&xa.push(n.key),n.element=l.buttonTemplate.cloneNode(),n.element.innerHTML=n.text,"string"==typeof n.className&&""!==n.className&&b(n.element,n.className);for(var o in n.attrs)"className"!==o&&n.attrs.hasOwnProperty(o)&&n.element.setAttribute(o,n.attrs[o]);"auxiliary"===n.scope?l.buttons.auxiliary.appendChild(n.element):l.buttons.primary.appendChild(n.element)}a.elements=l,k.resetHandler=j(a,W),k.beginMoveHandler=j(a,_),k.beginResizeHandler=j(a,fa),k.bringToFrontHandler=j(a,A),k.modalClickHandler=j(a,Q),k.buttonsClickHandler=j(a,S),k.commandsClickHandler=j(a,E),k.transitionInHandler=j(a,X),k.transitionOutHandler=j(a,Y),a.set("title",void 0===c.options.title?v.defaults.glossary.title:c.options.title),a.set("modal",void 0===c.options.modal?v.defaults.modal:c.options.modal),a.set("basic",void 0===c.options.basic?v.defaults.basic:c.options.basic),a.set("frameless",void 0===c.options.frameless?v.defaults.frameless:c.options.frameless),a.set("movable",void 0===c.options.movable?v.defaults.movable:c.options.movable),a.set("moveBounded",void 0===c.options.moveBounded?v.defaults.moveBounded:c.options.moveBounded),a.set("resizable",void 0===c.options.resizable?v.defaults.resizable:c.options.resizable),a.set("autoReset",void 0===c.options.autoReset?v.defaults.autoReset:c.options.autoReset),a.set("closable",void 0===c.options.closable?v.defaults.closable:c.options.closable),a.set("closableByDimmer",void 0===c.options.closableByDimmer?v.defaults.closableByDimmer:c.options.closableByDimmer),a.set("maximizable",void 0===c.options.maximizable?v.defaults.maximizable:c.options.maximizable),a.set("startMaximized",void 0===c.options.startMaximized?v.defaults.startMaximized:c.options.startMaximized),a.set("pinnable",void 0===c.options.pinnable?v.defaults.pinnable:c.options.pinnable),a.set("pinned",void 0===c.options.pinned?v.defaults.pinned:c.options.pinned),a.set("transition",void 0===c.options.transition?v.defaults.transition:c.options.transition),a.set("padding",void 0===c.options.padding?v.defaults.padding:c.options.padding),a.set("overflow",void 0===c.options.overflow?v.defaults.overflow:c.options.overflow),"function"==typeof a.build&&a.build()}document.body.appendChild(a.elements.root)}function o(){va=f(),wa=e()}function t(){a.scrollTo(va,wa)}function u(){for(var a=0,d=0;d<p.length;d+=1){var e=p[d];(e.isModal()||e.isMaximized())&&(a+=1)}0===a?c(document.body,Ba.noOverflow):a>0&&document.body.className.indexOf(Ba.noOverflow)<0&&b(document.body,Ba.noOverflow)}function w(a,d,e){"string"==typeof e&&c(a.elements.root,Ba.prefix+e),b(a.elements.root,Ba.prefix+d),ya=a.elements.root.offsetWidth}function x(a){a.get("modal")?(c(a.elements.root,Ba.modeless),a.isOpen()&&(oa(a),M(a),u())):(b(a.elements.root,Ba.modeless),a.isOpen()&&(na(a),M(a),u()))}function y(a){a.get("basic")?b(a.elements.root,Ba.basic):c(a.elements.root,Ba.basic)}function z(a){a.get("frameless")?b(a.elements.root,Ba.frameless):c(a.elements.root,Ba.frameless)}function A(a,b){for(var c=p.indexOf(b),d=c+1;d<p.length;d+=1)if(p[d].isModal())return;return document.body.lastChild!==b.elements.root&&(document.body.appendChild(b.elements.root),p.splice(p.indexOf(b),1),p.push(b),V(b)),!1}function B(a,d,e,f){switch(d){case"title":a.setHeader(f);break;case"modal":x(a);break;case"basic":y(a);break;case"frameless":z(a);break;case"pinned":N(a);break;case"closable":P(a);break;case"maximizable":O(a);break;case"pinnable":J(a);break;case"movable":da(a);break;case"resizable":ja(a);break;case"transition":w(a,f,e);break;case"padding":f?c(a.elements.root,Ba.noPadding):a.elements.root.className.indexOf(Ba.noPadding)<0&&b(a.elements.root,Ba.noPadding);break;case"overflow":f?c(a.elements.root,Ba.noOverflow):a.elements.root.className.indexOf(Ba.noOverflow)<0&&b(a.elements.root,Ba.noOverflow);break;case"transition":w(a,f,e)}"function"==typeof a.hooks.onupdate&&a.hooks.onupdate.call(a,d,e,f)}function C(a,b,c,d,e){var f={op:void 0,items:[]};if("undefined"==typeof e&&"string"==typeof d)f.op="get",b.hasOwnProperty(d)?(f.found=!0,f.value=b[d]):(f.found=!1,f.value=void 0);else{var g;if(f.op="set","object"==typeof d){var h=d;for(var i in h)b.hasOwnProperty(i)?(b[i]!==h[i]&&(g=b[i],b[i]=h[i],c.call(a,i,g,h[i])),f.items.push({key:i,value:h[i],found:!0})):f.items.push({key:i,value:h[i],found:!1})}else{if("string"!=typeof d)throw new Error("args must be a string or object");b.hasOwnProperty(d)?(b[d]!==e&&(g=b[d],b[d]=e,c.call(a,d,g,e)),f.items.push({key:d,value:e,found:!0})):f.items.push({key:d,value:e,found:!1})}}return f}function D(a){var b;R(a,function(a){return b=a.invokeOnClose===!0}),!b&&a.isOpen()&&a.close()}function E(a,b){var c=a.srcElement||a.target;switch(c){case b.elements.commands.pin:b.isPinned()?G(b):F(b);break;case b.elements.commands.maximize:b.isMaximized()?I(b):H(b);break;case b.elements.commands.close:D(b)}return!1}function F(a){a.set("pinned",!0)}function G(a){a.set("pinned",!1)}function H(a){l("onmaximize",a),b(a.elements.root,Ba.maximized),a.isOpen()&&u(),l("onmaximized",a)}function I(a){l("onrestore",a),c(a.elements.root,Ba.maximized),a.isOpen()&&u(),l("onrestored",a)}function J(a){a.get("pinnable")?b(a.elements.root,Ba.pinnable):c(a.elements.root,Ba.pinnable)}function K(a){var b=f();a.elements.modal.style.marginTop=e()+"px",a.elements.modal.style.marginLeft=b+"px",a.elements.modal.style.marginRight=-b+"px"}function L(a){var b=parseInt(a.elements.modal.style.marginTop,10),c=parseInt(a.elements.modal.style.marginLeft,10);if(a.elements.modal.style.marginTop="",a.elements.modal.style.marginLeft="",a.elements.modal.style.marginRight="",a.isOpen()){var d=0,g=0;""!==a.elements.dialog.style.top&&(d=parseInt(a.elements.dialog.style.top,10)),a.elements.dialog.style.top=d+(b-e())+"px",""!==a.elements.dialog.style.left&&(g=parseInt(a.elements.dialog.style.left,10)),a.elements.dialog.style.left=g+(c-f())+"px"}}function M(a){a.get("modal")||a.get("pinned")?L(a):K(a)}function N(a){a.get("pinned")?(c(a.elements.root,Ba.unpinned),a.isOpen()&&L(a)):(b(a.elements.root,Ba.unpinned),a.isOpen()&&!a.isModal()&&K(a))}function O(a){a.get("maximizable")?b(a.elements.root,Ba.maximizable):c(a.elements.root,Ba.maximizable)}function P(a){a.get("closable")?(b(a.elements.root,Ba.closable),ta(a)):(c(a.elements.root,Ba.closable),ua(a))}function Q(a,b){var c=a.srcElement||a.target;return Ca||c!==b.elements.modal||b.get("closableByDimmer")!==!0||D(b),Ca=!1,!1}function R(a,b){for(var c=0;c<a.__internal.buttons.length;c+=1){var d=a.__internal.buttons[c];if(!d.element.disabled&&b(d)){var e=k(c,d);"function"==typeof a.callback&&a.callback.apply(a,[e]),e.cancel===!1&&a.close();break}}}function S(a,b){var c=a.srcElement||a.target;R(b,function(a){return a.element===c&&(Da=!0)})}function T(a){if(Da)return void(Da=!1);var b=p[p.length-1],c=a.keyCode;return 0===b.__internal.buttons.length&&c===n.ESC&&b.get("closable")===!0?(D(b),!1):xa.indexOf(c)>-1?(R(b,function(a){return a.key===c}),!1):void 0}function U(a){var b=p[p.length-1],c=a.keyCode;if(c===n.LEFT||c===n.RIGHT){for(var d=b.__internal.buttons,e=0;e<d.length;e+=1)if(document.activeElement===d[e].element)switch(c){case n.LEFT:return void d[(e||d.length)-1].element.focus();case n.RIGHT:return void d[(e+1)%d.length].element.focus()}}else if(c<n.F12+1&&c>n.F1-1&&xa.indexOf(c)>-1)return a.preventDefault(),a.stopPropagation(),R(b,function(a){return a.key===c}),!1}function V(a,b){if(b)b.focus();else{var c=a.__internal.focus,d=c.element;switch(typeof c.element){case"number":a.__internal.buttons.length>c.element&&(d=a.get("basic")===!0?a.elements.reset[0]:a.__internal.buttons[c.element].element);break;case"string":d=a.elements.body.querySelector(c.element);break;case"function":d=c.element.call(a)}"undefined"!=typeof d&&null!==d||0!==a.__internal.buttons.length||(d=a.elements.reset[0]),d&&d.focus&&(d.focus(),c.select&&d.select&&d.select())}}function W(a,b){if(!b)for(var c=p.length-1;c>-1;c-=1)if(p[c].isModal()){b=p[c];break}if(b&&b.isModal()){var d,e=a.srcElement||a.target,f=e===b.elements.reset[1]||0===b.__internal.buttons.length&&e===document.body;f&&(b.get("maximizable")?d=b.elements.commands.maximize:b.get("closable")&&(d=b.elements.commands.close)),void 0===d&&("number"==typeof b.__internal.focus.element?e===b.elements.reset[0]?d=b.elements.buttons.auxiliary.firstChild||b.elements.buttons.primary.firstChild:f&&(d=b.elements.reset[0]):e===b.elements.reset[0]&&(d=b.elements.buttons.primary.lastChild||b.elements.buttons.auxiliary.lastChild)),V(b,d)}}function X(a,b){clearTimeout(b.__internal.timerIn),V(b),t(),Da=!1,l("onfocus",b),r(b.elements.dialog,s.type,b.__internal.transitionInHandler),c(b.elements.root,Ba.animationIn)}function Y(a,b){clearTimeout(b.__internal.timerOut),r(b.elements.dialog,s.type,b.__internal.transitionOutHandler),ca(b),ia(b),b.isMaximized()&&!b.get("startMaximized")&&I(b),v.defaults.maintainFocus&&b.__internal.activeElement&&(b.__internal.activeElement.focus(),b.__internal.activeElement=null),"function"==typeof b.__internal.destroy&&b.__internal.destroy.apply(b)}function Z(a,b){var c=a[Ha]-Fa,d=a[Ia]-Ga;Ka&&(d-=document.body.scrollTop),b.style.left=c+"px",b.style.top=d+"px"}function $(a,b){var c=a[Ha]-Fa,d=a[Ia]-Ga;Ka&&(d-=document.body.scrollTop),b.style.left=Math.min(Ja.maxLeft,Math.max(Ja.minLeft,c))+"px",Ka?b.style.top=Math.min(Ja.maxTop,Math.max(Ja.minTop,d))+"px":b.style.top=Math.max(Ja.minTop,d)+"px"}function _(a,c){if(null===Ma&&!c.isMaximized()&&c.get("movable")){var d,e=0,f=0;if("touchstart"===a.type?(a.preventDefault(),d=a.targetTouches[0],Ha="clientX",Ia="clientY"):0===a.button&&(d=a),d){var g=c.elements.dialog;if(b(g,Ba.capture),g.style.left&&(e=parseInt(g.style.left,10)),g.style.top&&(f=parseInt(g.style.top,10)),Fa=d[Ha]-e,Ga=d[Ia]-f,c.isModal()?Ga+=c.elements.modal.scrollTop:c.isPinned()&&(Ga-=document.body.scrollTop),c.get("moveBounded")){var h=g,i=-e,j=-f;do i+=h.offsetLeft,j+=h.offsetTop;while(h=h.offsetParent);Ja={maxLeft:i,minLeft:-i,maxTop:document.documentElement.clientHeight-g.clientHeight-j,minTop:-j},La=$}else Ja=null,La=Z;return l("onmove",c),Ka=!c.isModal()&&c.isPinned(),Ea=c,La(d,g),b(document.body,Ba.noSelection),!1}}}function aa(a){if(Ea){var b;"touchmove"===a.type?(a.preventDefault(),b=a.targetTouches[0]):0===a.button&&(b=a),b&&La(b,Ea.elements.dialog)}}function ba(){if(Ea){var a=Ea;Ea=Ja=null,c(document.body,Ba.noSelection),c(a.elements.dialog,Ba.capture),l("onmoved",a)}}function ca(a){Ea=null;var b=a.elements.dialog;b.style.left=b.style.top=""}function da(a){a.get("movable")?(b(a.elements.root,Ba.movable),a.isOpen()&&pa(a)):(ca(a),c(a.elements.root,Ba.movable),a.isOpen()&&qa(a))}function ea(a,b,c){var e=b,f=0,g=0;do f+=e.offsetLeft,g+=e.offsetTop;while(e=e.offsetParent);var h,i;c===!0?(h=a.pageX,i=a.pageY):(h=a.clientX,i=a.clientY);var j=d();if(j&&(h=document.body.offsetWidth-h,isNaN(Na)||(f=document.body.offsetWidth-f-b.offsetWidth)),b.style.height=i-g+Qa+"px",b.style.width=h-f+Qa+"px",!isNaN(Na)){var k=.5*Math.abs(b.offsetWidth-Oa);j&&(k*=-1),b.offsetWidth>Oa?b.style.left=Na+k+"px":b.offsetWidth>=Pa&&(b.style.left=Na-k+"px")}}function fa(a,c){if(!c.isMaximized()){var d;if("touchstart"===a.type?(a.preventDefault(),d=a.targetTouches[0]):0===a.button&&(d=a),d){l("onresize",c),Ma=c,Qa=c.elements.resizeHandle.offsetHeight/2;var e=c.elements.dialog;return b(e,Ba.capture),Na=parseInt(e.style.left,10),e.style.height=e.offsetHeight+"px",e.style.minHeight=c.elements.header.offsetHeight+c.elements.footer.offsetHeight+"px",e.style.width=(Oa=e.offsetWidth)+"px","none"!==e.style.maxWidth&&(e.style.minWidth=(Pa=e.offsetWidth)+"px"),e.style.maxWidth="none",b(document.body,Ba.noSelection),!1}}}function ga(a){if(Ma){var b;"touchmove"===a.type?(a.preventDefault(),b=a.targetTouches[0]):0===a.button&&(b=a),b&&ea(b,Ma.elements.dialog,!Ma.get("modal")&&!Ma.get("pinned"))}}function ha(){if(Ma){var a=Ma;Ma=null,c(document.body,Ba.noSelection),c(a.elements.dialog,Ba.capture),Ca=!0,l("onresized",a)}}function ia(a){Ma=null;var b=a.elements.dialog;"none"===b.style.maxWidth&&(b.style.maxWidth=b.style.minWidth=b.style.width=b.style.height=b.style.minHeight=b.style.left="",Na=Number.Nan,Oa=Pa=Qa=0)}function ja(a){a.get("resizable")?(b(a.elements.root,Ba.resizable),a.isOpen()&&ra(a)):(ia(a),c(a.elements.root,Ba.resizable),a.isOpen()&&sa(a))}function ka(){for(var a=0;a<p.length;a+=1){var b=p[a];b.get("autoReset")&&(ca(b),ia(b))}}function la(b){1===p.length&&(q(a,"resize",ka),q(document.body,"keyup",T),q(document.body,"keydown",U),q(document.body,"focus",W),q(document.documentElement,"mousemove",aa),q(document.documentElement,"touchmove",aa),q(document.documentElement,"mouseup",ba),q(document.documentElement,"touchend",ba),q(document.documentElement,"mousemove",ga),q(document.documentElement,"touchmove",ga),q(document.documentElement,"mouseup",ha),q(document.documentElement,"touchend",ha)),q(b.elements.commands.container,"click",b.__internal.commandsClickHandler),q(b.elements.footer,"click",b.__internal.buttonsClickHandler),q(b.elements.reset[0],"focus",b.__internal.resetHandler),q(b.elements.reset[1],"focus",b.__internal.resetHandler),Da=!0,q(b.elements.dialog,s.type,b.__internal.transitionInHandler),b.get("modal")||na(b),b.get("resizable")&&ra(b),b.get("movable")&&pa(b)}function ma(b){1===p.length&&(r(a,"resize",ka),r(document.body,"keyup",T),r(document.body,"keydown",U),r(document.body,"focus",W),r(document.documentElement,"mousemove",aa),r(document.documentElement,"mouseup",ba),r(document.documentElement,"mousemove",ga),r(document.documentElement,"mouseup",ha)),r(b.elements.commands.container,"click",b.__internal.commandsClickHandler),r(b.elements.footer,"click",b.__internal.buttonsClickHandler),r(b.elements.reset[0],"focus",b.__internal.resetHandler),r(b.elements.reset[1],"focus",b.__internal.resetHandler),q(b.elements.dialog,s.type,b.__internal.transitionOutHandler),b.get("modal")||oa(b),b.get("movable")&&qa(b),b.get("resizable")&&sa(b)}function na(a){q(a.elements.dialog,"focus",a.__internal.bringToFrontHandler,!0)}function oa(a){r(a.elements.dialog,"focus",a.__internal.bringToFrontHandler,!0)}function pa(a){q(a.elements.header,"mousedown",a.__internal.beginMoveHandler),q(a.elements.header,"touchstart",a.__internal.beginMoveHandler)}function qa(a){r(a.elements.header,"mousedown",a.__internal.beginMoveHandler),r(a.elements.header,"touchstart",a.__internal.beginMoveHandler)}function ra(a){q(a.elements.resizeHandle,"mousedown",a.__internal.beginResizeHandler),q(a.elements.resizeHandle,"touchstart",a.__internal.beginResizeHandler)}function sa(a){r(a.elements.resizeHandle,"mousedown",a.__internal.beginResizeHandler),r(a.elements.resizeHandle,"touchstart",a.__internal.beginResizeHandler)}function ta(a){q(a.elements.modal,"click",a.__internal.modalClickHandler)}function ua(a){r(a.elements.modal,"click",a.__internal.modalClickHandler)}var va,wa,xa=[],ya=null,za=a.navigator.userAgent.indexOf("Safari")>-1&&a.navigator.userAgent.indexOf("Chrome")<0,Aa={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},Ba={base:"alertify",prefix:"ajs-",hidden:"ajs-hidden",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",modeless:"ajs-modeless",movable:"ajs-movable",resizable:"ajs-resizable",capture:"ajs-capture",fixed:"ajs-fixed",closable:"ajs-closable",maximizable:"ajs-maximizable",maximize:"ajs-maximize",restore:"ajs-restore",pinnable:"ajs-pinnable",unpinned:"ajs-unpinned",pin:"ajs-pin",maximized:"ajs-maximized",animationIn:"ajs-in",animationOut:"ajs-out",shake:"ajs-shake",basic:"ajs-basic",frameless:"ajs-frameless"},Ca=!1,Da=!1,Ea=null,Fa=0,Ga=0,Ha="pageX",Ia="pageY",Ja=null,Ka=!1,La=null,Ma=null,Na=Number.Nan,Oa=0,Pa=0,Qa=0;return{__init:m,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(Ba.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(Ba.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(Ba.unpinned)<0},maximize:function(){return this.isMaximized()||H(this),this},restore:function(){return this.isMaximized()&&I(this),this},pin:function(){return this.isPinned()||F(this),this},unpin:function(){return this.isPinned()&&G(this),this},bringToFront:function(){return A(null,this),this},moveTo:function(a,b){if(!isNaN(a)&&!isNaN(b)){l("onmove",this);var c=this.elements.dialog,e=c,f=0,g=0;c.style.left&&(f-=parseInt(c.style.left,10)),c.style.top&&(g-=parseInt(c.style.top,10));do f+=e.offsetLeft,g+=e.offsetTop;while(e=e.offsetParent);var h=a-f,i=b-g;d()&&(h*=-1),c.style.left=h+"px",c.style.top=i+"px",l("onmoved",this)}return this},resizeTo:function(a,b){var c=parseFloat(a),d=parseFloat(b),e=/(\d*\.\d+|\d+)%/;if(!isNaN(c)&&!isNaN(d)&&this.get("resizable")===!0){l("onresize",this),(""+a).match(e)&&(c=c/100*document.documentElement.clientWidth),(""+b).match(e)&&(d=d/100*document.documentElement.clientHeight);var f=this.elements.dialog;"none"!==f.style.maxWidth&&(f.style.minWidth=(Pa=f.offsetWidth)+"px"),f.style.maxWidth="none",f.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",f.style.width=c+"px",f.style.height=d+"px",l("onresized",this)}return this},setting:function(a,b){var c=this,d=C(this,this.__internal.options,function(a,b,d){B(c,a,b,d)},a,b);if("get"===d.op)return d.found?d.value:"undefined"!=typeof this.settings?C(this,this.settings,this.settingUpdated||function(){},a,b).value:void 0;if("set"===d.op){if(d.items.length>0)for(var e=this.settingUpdated||function(){},f=0;f<d.items.length;f+=1){var g=d.items[f];g.found||"undefined"==typeof this.settings||C(this,this.settings,e,g.key,g.value)}return this}},set:function(a,b){return this.setting(a,b),this},get:function(a){return this.setting(a)},setHeader:function(b){return"string"==typeof b?(g(this.elements.header),this.elements.header.innerHTML=b):b instanceof a.HTMLElement&&this.elements.header.firstChild!==b&&(g(this.elements.header),this.elements.header.appendChild(b)),this},setContent:function(b){return"string"==typeof b?(g(this.elements.content),this.elements.content.innerHTML=b):b instanceof a.HTMLElement&&this.elements.content.firstChild!==b&&(g(this.elements.content),this.elements.content.appendChild(b)),this},showModal:function(a){return this.show(!0,a)},show:function(a,d){if(m(this),this.__internal.isOpen){ca(this),ia(this),b(this.elements.dialog,Ba.shake);var e=this;setTimeout(function(){c(e.elements.dialog,Ba.shake)},200)}else{if(this.__internal.isOpen=!0,p.push(this),v.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),"function"==typeof this.prepare&&this.prepare(),la(this),void 0!==a&&this.set("modal",a),o(),u(),"string"==typeof d&&""!==d&&(this.__internal.className=d,b(this.elements.root,d)),this.get("startMaximized")?this.maximize():this.isMaximized()&&I(this),M(this),c(this.elements.root,Ba.animationOut),b(this.elements.root,Ba.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,s.supported?1e3:100),za){var f=this.elements.root;f.style.display="none",setTimeout(function(){f.style.display="block"},0)}ya=this.elements.root.offsetWidth,c(this.elements.root,Ba.hidden),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),l("onshow",this)}return this},close:function(){return this.__internal.isOpen&&(ma(this),c(this.elements.root,Ba.animationIn),b(this.elements.root,Ba.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,s.supported?1e3:100),b(this.elements.root,Ba.hidden),ya=this.elements.modal.offsetWidth,"undefined"!=typeof this.__internal.className&&""!==this.__internal.className&&c(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),l("onclose",this),p.splice(p.indexOf(this),1),this.__internal.isOpen=!1,u()),this},closeOthers:function(){return v.closeAll(this),this},destroy:function(){return this.__internal.isOpen?(this.__internal.destroy=function(){i(this,m)},this.close()):i(this,m),this}}}(),u=function(){function d(a){a.__internal||(a.__internal={position:v.defaults.notifier.position,delay:v.defaults.notifier.delay},l=document.createElement("DIV"),h(a)),l.parentNode!==document.body&&document.body.appendChild(l)}function e(a){a.__internal.pushed=!0,m.push(a)}function f(a){m.splice(m.indexOf(a),1),a.__internal.pushed=!1}function h(a){switch(l.className=n.base,a.__internal.position){case"top-right":b(l,n.top+" "+n.right);break;case"top-left":b(l,n.top+" "+n.left);break;case"bottom-left":b(l,n.bottom+" "+n.left);break;default:case"bottom-right":b(l,n.bottom+" "+n.right)}}function i(d,h){function i(a,b){b.dismiss(!0)}function m(a,b){r(b.element,s.type,m),l.removeChild(b.element)}function o(a){return a.__internal||(a.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},a.__internal.clickHandler=j(a,i),a.__internal.transitionEndHandler=j(a,m)),a}function p(a){clearTimeout(a.__internal.timer),clearTimeout(a.__internal.transitionTimeout)}return o({element:d,push:function(a,c){if(!this.__internal.pushed){e(this),p(this);var d,f;switch(arguments.length){case 0:f=this.__internal.delay;break;case 1:"number"==typeof a?f=a:(d=a,f=this.__internal.delay);break;case 2:d=a,f=c}return"undefined"!=typeof d&&this.setContent(d),u.__internal.position.indexOf("top")<0?l.appendChild(this.element):l.insertBefore(this.element,l.firstChild),k=this.element.offsetWidth,b(this.element,n.visible),q(this.element,"click",this.__internal.clickHandler),this.delay(f)}return this},ondismiss:function(){},callback:h,dismiss:function(a){return this.__internal.pushed&&(p(this),("function"!=typeof this.ondismiss||this.ondismiss.call(this)!==!1)&&(r(this.element,"click",this.__internal.clickHandler),"undefined"!=typeof this.element&&this.element.parentNode===l&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,s.supported?1e3:100),c(this.element,n.visible),"function"==typeof this.callback&&this.callback.call(this,a)),f(this))),this},delay:function(a){if(p(this),this.__internal.delay="undefined"==typeof a||isNaN(+a)?u.__internal.delay:+a,this.__internal.delay>0){var b=this;this.__internal.timer=setTimeout(function(){b.dismiss()},1e3*this.__internal.delay)}return this},setContent:function(b){return"string"==typeof b?(g(this.element),this.element.innerHTML=b):b instanceof a.HTMLElement&&this.element.firstChild!==b&&(g(this.element),this.element.appendChild(b)),this},dismissOthers:function(){return u.dismissAll(this),this}})}var k,l,m=[],n={base:"alertify-notifier",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",visible:"ajs-visible",hidden:"ajs-hidden"};return{setting:function(a,b){if(d(this),"undefined"==typeof b)return this.__internal[a];switch(a){case"position":this.__internal.position=b,h(this);break;case"delay":this.__internal.delay=b}return this},set:function(a,b){return this.setting(a,b),this},get:function(a){return this.setting(a)},create:function(a,b){d(this);var c=document.createElement("div");return c.className=n.message+("string"==typeof a&&""!==a?" ajs-"+a:""),i(c,b)},dismissAll:function(a){for(var b=m.slice(0),c=0;c<b.length;c+=1){var d=b[c];(void 0===a||a!==d)&&d.dismiss()}}}}(),v=new m;v.dialog("alert",function(){return{main:function(a,b,c){var d,e,f;switch(arguments.length){case 1:e=a;break;case 2:"function"==typeof b?(e=a,f=b):(d=a,e=b);break;case 3:d=a,e=b,f=c}return this.set("title",d),this.set("message",e),this.set("onok",f),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(a){this.setContent(a)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(a,b,c){switch(a){case"message":this.setMessage(c);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=c)}},callback:function(a){if("function"==typeof this.get("onok")){var b=this.get("onok").call(this,a);"undefined"!=typeof b&&(a.cancel=!b)}}}}),v.dialog("confirm",function(){function a(a){null!==c.timer&&(clearInterval(c.timer),c.timer=null,a.__internal.buttons[c.index].element.innerHTML=c.text)}function b(b,d,e){a(b),c.duration=e,c.index=d,c.text=b.__internal.buttons[d].element.innerHTML,c.timer=setInterval(j(b,c.task),1e3),c.task(null,b)}var c={timer:null,index:null,text:null,duration:null,task:function(b,d){if(d.isOpen()){if(d.__internal.buttons[c.index].element.innerHTML=c.text+" (&#8207;"+c.duration+"&#8207;) ",c.duration-=1,
-1===c.duration){a(d);var e=d.__internal.buttons[c.index],f=k(c.index,e);"function"==typeof d.callback&&d.callback.apply(d,[f]),f.close!==!1&&d.close()}}else a(d)}};return{main:function(a,b,c,d){var e,f,g,h;switch(arguments.length){case 1:f=a;break;case 2:f=a,g=b;break;case 3:f=a,g=b,h=c;break;case 4:e=a,f=b,g=c,h=d}return this.set("title",e),this.set("message",f),this.set("onok",g),this.set("oncancel",h),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(a){this.setContent(a)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(a,b,c){switch(a){case"message":this.setMessage(c);break;case"labels":"ok"in c&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=c.ok,this.__internal.buttons[0].element.innerHTML=c.ok),"cancel"in c&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=c.cancel,this.__internal.buttons[1].element.innerHTML=c.cancel);break;case"reverseButtons":c===!0?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element="ok"===c?0:1}},callback:function(b){a(this);var c;switch(b.index){case 0:"function"==typeof this.get("onok")&&(c=this.get("onok").call(this,b),"undefined"!=typeof c&&(b.cancel=!c));break;case 1:"function"==typeof this.get("oncancel")&&(c=this.get("oncancel").call(this,b),"undefined"!=typeof c&&(b.cancel=!c))}},autoOk:function(a){return b(this,0,a),this},autoCancel:function(a){return b(this,1,a),this}}}),v.dialog("prompt",function(){var b=document.createElement("INPUT"),c=document.createElement("P");return{main:function(a,b,c,d,e){var f,g,h,i,j;switch(arguments.length){case 1:g=a;break;case 2:g=a,h=b;break;case 3:g=a,h=b,i=c;break;case 4:g=a,h=b,i=c,j=d;break;case 5:f=a,g=b,h=c,i=d,j=e}return this.set("title",f),this.set("message",g),this.set("value",h),this.set("onok",i),this.set("oncancel",j),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:b,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){b.className=v.defaults.theme.input,b.setAttribute("type","text"),b.value=this.get("value"),this.elements.content.appendChild(c),this.elements.content.appendChild(b)},prepare:function(){},setMessage:function(b){"string"==typeof b?(g(c),c.innerHTML=b):b instanceof a.HTMLElement&&c.firstChild!==b&&(g(c),c.appendChild(b))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(a,c,d){switch(a){case"message":this.setMessage(d);break;case"value":b.value=d;break;case"type":switch(d){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":b.type=d;break;default:b.type="text"}break;case"labels":d.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=d.ok),d.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=d.cancel);break;case"reverseButtons":d===!0?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}},callback:function(a){var c;switch(a.index){case 0:this.settings.value=b.value,"function"==typeof this.get("onok")&&(c=this.get("onok").call(this,a,this.settings.value),"undefined"!=typeof c&&(a.cancel=!c));break;case 1:"function"==typeof this.get("oncancel")&&(c=this.get("oncancel").call(this,a),"undefined"!=typeof c&&(a.cancel=!c))}}}}),"object"==typeof module&&"object"==typeof module.exports?module.exports=v:"function"==typeof define&&define.amd?define([],function(){return v}):a.alertify||(a.alertify=v)}("undefined"!=typeof window?window:this);