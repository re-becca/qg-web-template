/*! SWE 4.0.0 20200602T1222 */
!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e){/*!
 * Stickyfill -- `position: sticky` polyfill
 * v. 1.1.1 | https://github.com/wilddeer/stickyfill
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */
t.exports=function(t,e){function o(){W=k=T=O=E=B=z}function n(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])}function i(t){return parseFloat(t)||0}function r(){F={top:e.pageYOffset,left:e.pageXOffset}}function a(){if(e.pageXOffset!=F.left)return r(),void T();e.pageYOffset!=F.top&&(r(),d())}function f(t){setTimeout(function(){e.pageYOffset!=F.top&&(F.top=e.pageYOffset,d())},0)}function d(){for(var t=S.length-1;t>=0;t--)s(S[t])}function s(t){if(t.inited){var e=F.top<=t.limit.start?0:F.top>=t.limit.end?2:1;t.mode!=e&&m(t,e)}}function p(){for(var t=S.length-1;t>=0;t--)if(S[t].inited){var e=Math.abs(w(S[t].clone)-S[t].docOffsetTop),o=Math.abs(S[t].parent.node.offsetHeight-S[t].parent.height);if(e>=2||o>=2)return!1}return!0}function c(t){isNaN(parseFloat(t.computed.top))||t.isCell||(t.inited=!0,t.clone||h(t),"absolute"!=t.parent.computed.position&&"relative"!=t.parent.computed.position&&(t.parent.node.style.position="relative"),s(t),t.parent.height=t.parent.node.offsetHeight,t.docOffsetTop=w(t.clone))}function l(t){var e=!0;t.clone&&v(t),n(t.node.style,t.css);for(var o=S.length-1;o>=0;o--)if(S[o].node!==t.node&&S[o].parent.node===t.parent.node){e=!1;break}e&&(t.parent.node.style.position=t.parent.css.position),t.mode=-1}function g(){for(var t=S.length-1;t>=0;t--)c(S[t])}function u(){for(var t=S.length-1;t>=0;t--)l(S[t])}function m(t,e){var o=t.node.style;switch(e){case 0:o.position="absolute",o.left=t.offset.left+"px",o.right=t.offset.right+"px",o.top=t.offset.top+"px",o.bottom="auto",o.width="auto",o.marginLeft=0,o.marginRight=0,o.marginTop=0;break;case 1:o.position="fixed",o.left=t.box.left+"px",o.right=t.box.right+"px",o.top=t.css.top,o.bottom="auto",o.width="auto",o.marginLeft=0,o.marginRight=0,o.marginTop=0;break;case 2:o.position="absolute",o.left=t.offset.left+"px",o.right=t.offset.right+"px",o.top="auto",o.bottom=0,o.width="auto",o.marginLeft=0,o.marginRight=0}t.mode=e}function h(t){t.clone=document.createElement("div");var e=t.node.nextSibling||t.node,o=t.clone.style;o.height=t.height+"px",o.width=t.width+"px",o.marginTop=t.computed.marginTop,o.marginBottom=t.computed.marginBottom,o.marginLeft=t.computed.marginLeft,o.marginRight=t.computed.marginRight,o.padding=o.border=o.borderSpacing=0,o.fontSize="1em",o.position="static",o.cssFloat=t.computed.cssFloat,t.node.parentNode.insertBefore(t.clone,e)}function v(t){t.clone.parentNode.removeChild(t.clone),t.clone=void 0}function b(t){var e=getComputedStyle(t),o=t.parentNode,n=getComputedStyle(o),r=t.style.position;t.style.position="relative";var a={top:e.top,marginTop:e.marginTop,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginRight:e.marginRight,cssFloat:e.cssFloat},f={top:i(e.top),marginBottom:i(e.marginBottom),paddingLeft:i(e.paddingLeft),paddingRight:i(e.paddingRight),borderLeftWidth:i(e.borderLeftWidth),borderRightWidth:i(e.borderRightWidth)};t.style.position=r;var d={position:t.style.position,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight},s=y(t),p=y(o),c={node:o,css:{position:o.style.position},computed:{position:n.position},numeric:{borderLeftWidth:i(n.borderLeftWidth),borderRightWidth:i(n.borderRightWidth),borderTopWidth:i(n.borderTopWidth),borderBottomWidth:i(n.borderBottomWidth)}};return{node:t,box:{left:s.win.left,right:Y.clientWidth-s.win.right},offset:{top:s.win.top-p.win.top-c.numeric.borderTopWidth,left:s.win.left-p.win.left-c.numeric.borderLeftWidth,right:-s.win.right+p.win.right-c.numeric.borderRightWidth},css:d,isCell:"table-cell"==e.display,computed:a,numeric:f,width:s.win.right-s.win.left,height:s.win.bottom-s.win.top,mode:-1,inited:!1,parent:c,limit:{start:s.doc.top-f.top,end:p.doc.top+o.offsetHeight-c.numeric.borderBottomWidth-t.offsetHeight-f.top-f.marginBottom}}}function w(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}function y(t){var o=t.getBoundingClientRect();return{doc:{top:o.top+e.pageYOffset,left:o.left+e.pageXOffset},win:o}}function L(){H=setInterval(function(){!p()&&T()},500)}function x(){clearInterval(H)}function R(){N&&(document[P]?x():L())}function W(){N||(r(),g(),e.addEventListener("scroll",a),e.addEventListener("wheel",f),e.addEventListener("resize",T),e.addEventListener("orientationchange",T),t.addEventListener(M,R),L(),N=!0)}function T(){if(N){u();for(var t=S.length-1;t>=0;t--)S[t]=b(S[t].node);g()}}function O(){e.removeEventListener("scroll",a),e.removeEventListener("wheel",f),e.removeEventListener("resize",T),e.removeEventListener("orientationchange",T),t.removeEventListener(M,R),x(),N=!1}function E(){O(),u()}function B(){for(E();S.length;)S.pop()}function k(t){for(var e=S.length-1;e>=0;e--)if(S[e].node===t)return;var o=b(t);S.push(o),N?c(o):W()}function C(t){for(var e=S.length-1;e>=0;e--)S[e].node===t&&(l(S[e]),S.splice(e,1))}t||(t=document),e||(e=window);var F,H,S=[],N=!1,Y=t.documentElement,z=function(){},P="hidden",M="visibilitychange";void 0!==t.webkitHidden&&(P="webkitHidden",M="webkitvisibilitychange"),e.getComputedStyle||o();for(var X=["","-webkit-","-moz-","-ms-"],j=document.createElement("div"),I=X.length-1;I>=0;I--){try{j.style.position=X[I]+"sticky"}catch(t){}""!=j.style.position&&o()}return r(),{stickies:S,add:k,remove:C,init:W,rebuild:T,pause:O,stop:E,kill:B}}}]);