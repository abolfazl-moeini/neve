!function(){"use strict";var p=function(e){return"object"==typeof e?null!==e:"function"==typeof e},n={}.toString,v=function(e){return n.call(e).slice(8,-1)};function e(e,n){return e(n={exports:{}},n.exports),n.exports}var c,t,r,g=e(function(e){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)}),h=(g.version,e(function(e){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)})),o=e(function(e){var n="__core-js_shared__",t=h[n]||(h[n]={});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:g.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),i=0,u=Math.random(),a=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++i+u).toString(36))},s=e(function(e){var n=o("wks"),t=h.Symbol,r="function"==typeof t;(e.exports=function(e){return n[e]||(n[e]=r&&t[e]||(r?t:a)("Symbol."+e))}).store=n}),m=s("match"),q=function(e){if(!p(e))throw TypeError(e+" is not an object!");return e},N=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_=s("species"),l=Math.ceil,f=Math.floor,k=function(e){return isNaN(e=+e)?0:(0<e?f:l)(e)},d=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},M=(c=!0,function(e,n){var t,r,o=String(d(e)),i=k(n),u=o.length;return i<0||u<=i?c?"":void 0:(t=o.charCodeAt(i))<55296||56319<t||i+1===u||(r=o.charCodeAt(i+1))<56320||57343<r?c?o.charAt(i):t:c?o.slice(i,i+2):r-56320+(t-55296<<10)+65536}),P=Math.min,y=s("toStringTag"),b="Arguments"==v(function(){return arguments}()),w=RegExp.prototype.exec,A=function(e,n){var t,r,o,i,u=e.exec;if("function"==typeof u){var c=u.call(e,n);if("object"!=typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==(void 0===(t=e)?"Undefined":null===t?"Null":"string"==typeof(o=function(e,n){try{return e[n]}catch(e){}}(r=Object(t),y))?o:b?v(r):"Object"==(i=v(r))&&"function"==typeof r.callee?"Arguments":i))throw new TypeError("RegExp#exec called on incompatible receiver");return w.call(e,n)},S=RegExp.prototype.exec,x=String.prototype.replace,E=S,L="lastIndex",O=(t=/a/,r=/b*/g,S.call(t,"a"),S.call(r,"a"),0!==t[L]||0!==r[L]),C=void 0!==/()??/.exec("")[1];(O||C)&&(E=function(e){var n,t,r,o,i=this;return C&&(t=new RegExp("^"+i.source+"$(?!\\s)",function(){var e=q(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}.call(i))),O&&(n=i[L]),r=S.call(i,e),O&&r&&(i[L]=i.global?r.index+r[0].length:n),C&&r&&1<r.length&&x.call(r[0],t,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});var R=E,T=function(e){try{return!!e()}catch(e){return!0}},j=!T(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),z=h.document,F=p(z)&&p(z.createElement),I=!j&&!T(function(){return 7!=Object.defineProperty((e="div",F?z.createElement(e):{}),"a",{get:function(){return 7}}).a;var e}),D=Object.defineProperty,H={f:j?Object.defineProperty:function(e,n,t){if(q(e),n=function(e,n){if(!p(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!p(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!p(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!p(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(n,!0),q(t),I)try{return D(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},U=j?function(e,n,t){return H.f(e,n,{enumerable:!((r=1)&r),configurable:!(2&r),writable:!(4&r),value:t});var r}:function(e,n,t){return e[n]=t,e},B={}.hasOwnProperty,G=function(e,n){return B.call(e,n)},W=o("native-function-to-string",Function.toString),X=e(function(e){var i=a("src"),n="toString",u=(""+W).split(n);g.inspectSource=function(e){return W.call(e)},(e.exports=function(e,n,t,r){var o="function"==typeof t;o&&(G(t,"name")||U(t,"name",n)),e[n]!==t&&(o&&(G(t,i)||U(t,i,e[n]?""+e[n]:u.join(String(n)))),e===h?e[n]=t:r?e[n]?e[n]=t:U(e,n,t):(delete e[n],U(e,n,t)))})(Function.prototype,n,function(){return"function"==typeof this&&this[i]||W.call(this)})}),$=function(r,o,e){if(N(r),void 0===o)return r;switch(e){case 1:return function(e){return r.call(o,e)};case 2:return function(e,n){return r.call(o,e,n)};case 3:return function(e,n,t){return r.call(o,e,n,t)}}return function(){return r.apply(o,arguments)}},J="prototype",Q=function(e,n,t){var r,o,i,u,c=e&Q.F,a=e&Q.G,l=e&Q.S,s=e&Q.P,f=e&Q.B,d=a?h:l?h[n]||(h[n]={}):(h[n]||{})[J],p=a?g:g[n]||(g[n]={}),v=p[J]||(p[J]={});for(r in a&&(t=n),t)i=((o=!c&&d&&void 0!==d[r])?d:t)[r],u=f&&o?$(i,h):s&&"function"==typeof i?$(Function.call,i):i,d&&X(d,r,i,e&Q.U),p[r]!=i&&U(p,r,u),s&&v[r]!=i&&(v[r]=i)};h.core=g,Q.F=1,Q.G=2,Q.S=4,Q.P=8,Q.B=16,Q.W=32,Q.U=64,Q.R=128,Q({target:"RegExp",proto:!0,forced:R!==/./.exec},{exec:R});var K=s("species"),V=!T(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),Y=function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2===t.length&&"a"===t[0]&&"b"===t[1]}(),Z=Math.min,ee=[].push,ne="split",te="length",re="lastIndex",oe=4294967295,ie=!T(function(){RegExp(oe,"y")});!function(t,e,n){var r=s(t),i=!T(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)}),o=i?!T(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[K]=function(){return n}),n[r](""),!e}):void 0;if(!i||!o||"replace"===t&&!V||"split"===t&&!Y){var u=/./[r],c=n(d,r,""[t],function(e,n,t,r,o){return n.exec===R?i&&!o?{done:!0,value:u.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),a=c[0],l=c[1];X(String.prototype,t,a),U(RegExp.prototype,r,2==e?function(e,n){return l.call(e,this,n)}:function(e){return l.call(e,this)})}}("split",2,function(o,i,x,E){var L;return L="c"=="abbc"[ne](/(b)*/)[1]||4!="test"[ne](/(?:)/,-1)[te]||2!="ab"[ne](/(?:ab)*/)[te]||4!="."[ne](/(.?)(.?)/)[te]||1<"."[ne](/()()/)[te]||""[ne](/.?/)[te]?function(e,n){var t,r,o=String(this);if(void 0===e&&0===n)return[];if(!p(t=e)||(void 0!==(r=t[m])?!r:"RegExp"!=v(t)))return x.call(o,e,n);for(var i,u,c,a=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),s=0,f=void 0===n?oe:n>>>0,d=new RegExp(e.source,l+"g");(i=R.call(d,o))&&!(s<(u=d[re])&&(a.push(o.slice(s,i.index)),1<i[te]&&i.index<o[te]&&ee.apply(a,i.slice(1)),c=i[0][te],s=u,a[te]>=f));)d[re]===i.index&&d[re]++;return s===o[te]?!c&&d.test("")||a.push(""):a.push(o.slice(s)),a[te]>f?a.slice(0,f):a}:"0"[ne](void 0,0)[te]?function(e,n){return void 0===e&&0===n?[]:x.call(this,e,n)}:x,[function(e,n){var t=o(this),r=null==e?void 0:e[i];return void 0!==r?r.call(e,t,n):L.call(String(t),e,n)},function(e,n){var t=E(L,e,this,n,L!==x);if(t.done)return t.value;var r,o,i,u=q(e),c=String(this),a=(r=RegExp,void 0===(i=q(u).constructor)||null==(o=q(i)[_])?r:N(o)),l=u.unicode,s=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(ie?"y":"g"),f=new a(ie?u:"^(?:"+u.source+")",s),d=void 0===n?oe:n>>>0;if(0===d)return[];if(0===c.length)return null===A(f,c)?[c]:[];for(var p,v,g,h=0,m=0,y=[];m<c.length;){f.lastIndex=ie?m:0;var b,w=A(f,ie?c:c.slice(m));if(null===w||(b=Z(0<(g=f.lastIndex+(ie?0:m))?P(k(g),9007199254740991):0,c.length))===h)p=c,m=(v=m)+(l?M(p,v).length:1);else{if(y.push(c.slice(h,m)),y.length===d)return y;for(var S=1;S<=w.length-1;S++)if(y.push(w[S]),y.length===d)return y;m=h=b}}return y.push(c.slice(h)),y}]});var ue,ce=function(){return window.innerWidth<=960},ae=function(e,n){for(var t=0;t<e.length;t++)n(e[t])},le=function(e){return-1<e.indexOf("#")&&(e=e.substr(0,e.lastIndexOf("#"))),"/"===e.substr(-1)&&(e=e.substring(0,e.length-1)),e},se=function(e,n,t){if(e instanceof NodeList)for(var r=0;r<e.length;r++)e[r].addEventListener(n,t);else(e instanceof Node||e instanceof Element)&&e.addEventListener(n,t)},fe=function(e,n){if(e instanceof NodeList)for(var t=0;t<e.length;t++)e[t].classList.toggle(n);else(e instanceof Node||e instanceof Element)&&e.classList.toggle(n)},de=function(e,n){if(e instanceof NodeList)for(var t=0;t<e.length;t++)e[t].classList.add(n);else(e instanceof Node||e instanceof Element)&&e.classList.add(n)},pe=function(e,n){var t=n.split(" ");if(e instanceof NodeList)for(var r=0;r<e.length;r++)for(var o=0;o<t.length;o++)e[r].classList.remove(t[o]);else if(e instanceof Node||e instanceof Element)for(var i=0;i<t.length;i++)e.classList.remove(t[i])},ve=null,ge=null,he=2,me=function(){if("enabled"!==NeveProperties.masonry||NeveProperties.masonryColumns<2)return!1;ge=document.querySelector(".nv-index-posts .posts-wrapper"),imagesLoaded(ge,function(){ve=new Masonry(ge,{itemSelector:"article.layout-grid",columnWidth:"article.layout-grid",percentPosition:!0})})},ye=function(){if("enabled"!==NeveProperties.infiniteScroll)return!1;!function(e,n){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:.5;new IntersectionObserver(function(e){e[0].intersectionRatio<=t||n()}).observe(e)}(document.querySelector(".infinite-scroll-trigger"),function(){if(void 0!==parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(function(){be()}),!1;be()})},be=function(){var e=document.querySelector(".infinite-scroll-trigger");if(null===e)return!1;if(document.querySelector(".nv-loader").style.display="block",he>NeveProperties.infiniteScrollMaxPages)return e.parentNode.removeChild(e),!(document.querySelector(".nv-loader").style.display="none");var n,t,r,o,i=document.querySelector(".nv-index-posts .posts-wrapper"),u=Se(NeveProperties.infiniteScrollEndpoint+he);he++,n=u,t=function(e){i.innerHTML+=JSON.parse(e),we()},r=NeveProperties.infiniteScrollQuery,(o=new XMLHttpRequest).onload=function(){4===o.readyState&&200===o.status&&t(o.response)},o.onerror=function(e){console.error(e)},o.open("POST",n,!0),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.send(r)},we=function(){null!==ve&&imagesLoaded(ge).on("progress",function(e){ve.layout(),ve.reloadItems()})},Se=function(e){return void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview)},xe=function(){var e,n,t,r,o,i,u,c,a,l;ue=window.location.href,Ee(),function(){var e=document.querySelectorAll(".nv-nav-wrap a");if(0===e.length)return;ae(e,function(e){e.addEventListener("click",function(e){var n=e.target.getAttribute("href");if(null===n)return!1;le(n)===le(ue)&&window.HFG.toggleMenuSidebar(!1)})})}(),e=document.querySelectorAll(".caret-wrap"),ae(e,function(t){t.addEventListener("click",function(e){e.preventDefault();var n=t.parentNode.parentNode.querySelector(".sub-menu");fe(t,"dropdown-open"),fe(n,"dropdown-open")})}),n=document.querySelectorAll(".nv-nav-search"),t=document.querySelectorAll(".menu-item-nav-search"),r=document.querySelectorAll(".close-responsive-search"),o=document.querySelector("html"),ae(t,function(n){n.addEventListener("click",function(e){e.stopPropagation(),fe(n,"active"),n.querySelector(".search-field").focus(),de(o,"menu-opened"),ce()||function(e,n){var t=document.querySelector(".nav-clickaway-overlay");if(null===t){t=document.createElement("div"),de(t,"nav-clickaway-overlay");var r=document.querySelector("header.header");r.parentNode.insertBefore(t,r),t.addEventListener("click",function(){pe(e,n),t.parentNode.removeChild(t)})}}(n,"active")})}),ae(n,function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),ae(r,function(e){e.addEventListener("click",function(e){e.preventDefault(),ae(t,function(e){pe(e,"active")});var n=document.querySelector(".nav-clickaway-overlay");null!==n&&(n.parentNode.removeChild(n),pe(o,"menu-opened"))})}),!0==(u=window.navigator.userAgent,c=u.indexOf("MSIE "),a=u.indexOf("Edge/"),l=u.indexOf("Trident/"),0<c||0<l||0<a)&&(i=document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu'),ae(i,function(e){var n=e.parentNode;n.addEventListener("mouseenter",function(){de(e,"dropdown-open")}),n.addEventListener("mouseleave",function(){pe(e,"dropdown-open")})}))},Ee=function(){if(ce())return!1;var e=document.querySelectorAll(".sub-menu .sub-menu");if(0===e.length)return!1;var r=window.innerWidth;ae(e,function(e){var n=e.getBoundingClientRect(),t=n.left;/webkit.*mobile/i.test(navigator.userAgent)&&(n-=window.scrollX),t+n.width>=r&&(e.style.right="100%",e.style.left="auto")})};var Le,qe=function(){this.options={menuToggleDuration:300},this.init()};function Ne(){window.HFG=new qe,function(){if(null===document.querySelector(".blog.nv-index-posts"))return;me(),ye()}(),xe()}function _e(){Ee()}qe.prototype.init=function(){var e=".menu-mobile-toggle";!1===(0<arguments.length&&void 0!==arguments[0]&&arguments[0])&&(e+=", #header-menu-sidebar .close-panel, .close-sidebar-panel");var n=document.querySelectorAll(e),t=function(e){e.preventDefault(),this.toggleMenuSidebar()};ae(n,function(e){e.removeEventListener("click",t.bind(this))}.bind(this)),se(n,"click",t.bind(this));var r=document.querySelector(".header-menu-sidebar-overlay");se(r,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},qe.prototype.toggleMenuSidebar=function(e){var n=document.querySelectorAll(".menu-mobile-toggle");pe(document.body,"hiding-header-menu-sidebar"),void 0===e&&(fe(document.body,"is-menu-sidebar"),fe(n,"is-active")),!0===e&&(de(document.body,"is-menu-sidebar"),de(n,"is-active")),!1===e&&(de(document.body,"hiding-header-menu-sidebar"),pe(document.body,"is-menu-sidebar"),pe(n,"is-active"),setTimeout(function(){pe(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3))},window.addEventListener("DOMContentLoaded",function(){Ne()}),window.addEventListener("resize",function(){clearTimeout(Le),Le=setTimeout(_e,500)})}();
