!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),g=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(N,t),s?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function N(){var e=p();if(j(e))return I(e);f=setTimeout(N,function(e){var n=t-(e-l);return d?v(n,a-(e-c)):n}(e))}function I(e){return f=void 0,g&&r?b(e):(r=i=void 0,u)}function T(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(N,t),b(l)}return void 0===f&&(f=setTimeout(N,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:I(p())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O="feedback-form-state",j={},N=document.querySelector(".feedback-form");N.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(j))}),500)),N.addEventListener("submit",(function(e){e.preventDefault(),localStorage.getItem(O)&&console.log(JSON.parse(localStorage.getItem(O)));e.currentTarget.reset(),localStorage.removeItem(O)})),function(){if(!JSON.parse(localStorage.getItem(O)))return;JSON.parse(localStorage.getItem(O)).email&&(N.email.value=JSON.parse(localStorage.getItem(O)).email);JSON.parse(localStorage.getItem(O)).message&&(N.message.value=JSON.parse(localStorage.getItem(O)).message)}()}();
//# sourceMappingURL=03-feedback.94991bb3.js.map
