(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/rW5":function(e,t,r){var n;!function(a){"use strict";function l(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(e,t,r,n,a,o){return l((u=l(l(t,e),l(n,o)))<<(c=a)|u>>>32-c,r);var u,c}function u(e,t,r,n,a,l,u){return o(t&r|~t&n,e,t,a,l,u)}function c(e,t,r,n,a,l,u){return o(t&n|r&~n,e,t,a,l,u)}function f(e,t,r,n,a,l,u){return o(t^r^n,e,t,a,l,u)}function i(e,t,r,n,a,l,u){return o(r^(t|~n),e,t,a,l,u)}function d(e,t){var r,n,a,o,d;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var s=1732584193,m=-271733879,p=-1732584194,v=271733878;for(r=0;r<e.length;r+=16)n=s,a=m,o=p,d=v,s=u(s,m,p,v,e[r],7,-680876936),v=u(v,s,m,p,e[r+1],12,-389564586),p=u(p,v,s,m,e[r+2],17,606105819),m=u(m,p,v,s,e[r+3],22,-1044525330),s=u(s,m,p,v,e[r+4],7,-176418897),v=u(v,s,m,p,e[r+5],12,1200080426),p=u(p,v,s,m,e[r+6],17,-1473231341),m=u(m,p,v,s,e[r+7],22,-45705983),s=u(s,m,p,v,e[r+8],7,1770035416),v=u(v,s,m,p,e[r+9],12,-1958414417),p=u(p,v,s,m,e[r+10],17,-42063),m=u(m,p,v,s,e[r+11],22,-1990404162),s=u(s,m,p,v,e[r+12],7,1804603682),v=u(v,s,m,p,e[r+13],12,-40341101),p=u(p,v,s,m,e[r+14],17,-1502002290),s=c(s,m=u(m,p,v,s,e[r+15],22,1236535329),p,v,e[r+1],5,-165796510),v=c(v,s,m,p,e[r+6],9,-1069501632),p=c(p,v,s,m,e[r+11],14,643717713),m=c(m,p,v,s,e[r],20,-373897302),s=c(s,m,p,v,e[r+5],5,-701558691),v=c(v,s,m,p,e[r+10],9,38016083),p=c(p,v,s,m,e[r+15],14,-660478335),m=c(m,p,v,s,e[r+4],20,-405537848),s=c(s,m,p,v,e[r+9],5,568446438),v=c(v,s,m,p,e[r+14],9,-1019803690),p=c(p,v,s,m,e[r+3],14,-187363961),m=c(m,p,v,s,e[r+8],20,1163531501),s=c(s,m,p,v,e[r+13],5,-1444681467),v=c(v,s,m,p,e[r+2],9,-51403784),p=c(p,v,s,m,e[r+7],14,1735328473),s=f(s,m=c(m,p,v,s,e[r+12],20,-1926607734),p,v,e[r+5],4,-378558),v=f(v,s,m,p,e[r+8],11,-2022574463),p=f(p,v,s,m,e[r+11],16,1839030562),m=f(m,p,v,s,e[r+14],23,-35309556),s=f(s,m,p,v,e[r+1],4,-1530992060),v=f(v,s,m,p,e[r+4],11,1272893353),p=f(p,v,s,m,e[r+7],16,-155497632),m=f(m,p,v,s,e[r+10],23,-1094730640),s=f(s,m,p,v,e[r+13],4,681279174),v=f(v,s,m,p,e[r],11,-358537222),p=f(p,v,s,m,e[r+3],16,-722521979),m=f(m,p,v,s,e[r+6],23,76029189),s=f(s,m,p,v,e[r+9],4,-640364487),v=f(v,s,m,p,e[r+12],11,-421815835),p=f(p,v,s,m,e[r+15],16,530742520),s=i(s,m=f(m,p,v,s,e[r+2],23,-995338651),p,v,e[r],6,-198630844),v=i(v,s,m,p,e[r+7],10,1126891415),p=i(p,v,s,m,e[r+14],15,-1416354905),m=i(m,p,v,s,e[r+5],21,-57434055),s=i(s,m,p,v,e[r+12],6,1700485571),v=i(v,s,m,p,e[r+3],10,-1894986606),p=i(p,v,s,m,e[r+10],15,-1051523),m=i(m,p,v,s,e[r+1],21,-2054922799),s=i(s,m,p,v,e[r+8],6,1873313359),v=i(v,s,m,p,e[r+15],10,-30611744),p=i(p,v,s,m,e[r+6],15,-1560198380),m=i(m,p,v,s,e[r+13],21,1309151649),s=i(s,m,p,v,e[r+4],6,-145523070),v=i(v,s,m,p,e[r+11],10,-1120210379),p=i(p,v,s,m,e[r+2],15,718787259),m=i(m,p,v,s,e[r+9],21,-343485551),s=l(s,n),m=l(m,a),p=l(p,o),v=l(v,d);return[s,m,p,v]}function s(e){var t,r="",n=32*e.length;for(t=0;t<n;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function m(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var n=8*e.length;for(t=0;t<n;t+=8)r[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return r}function p(e){var t,r,n="0123456789abcdef",a="";for(r=0;r<e.length;r+=1)t=e.charCodeAt(r),a+=n.charAt(t>>>4&15)+n.charAt(15&t);return a}function v(e){return unescape(encodeURIComponent(e))}function g(e){return function(e){return s(d(m(e),8*e.length))}(v(e))}function h(e,t){return function(e,t){var r,n,a=m(e),l=[],o=[];for(l[15]=o[15]=void 0,a.length>16&&(a=d(a,8*e.length)),r=0;r<16;r+=1)l[r]=909522486^a[r],o[r]=1549556828^a[r];return n=d(l.concat(m(t)),512+8*t.length),s(d(o.concat(n),640))}(v(e),v(t))}function b(e,t,r){return t?r?h(t,e):p(h(t,e)):r?g(e):p(g(e))}void 0===(n=function(){return b}.call(t,r,t,e))||(e.exports=n)}()},"0oBi":function(e,t,r){"use strict";var n=r("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=l.default.useState(!1),t=(0,a.default)(e,2),r=t[0],n=t[1];return(0,o.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),r};var a=n(r("nxTg")),l=n(r("mXGw")),o=n(r("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,r){"use strict";var n=r("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("RiSW")),l=n(r("mXGw")),o=n(r("pWCa")),u=r("I08b"),c=r("GDok"),f=r("nZpd"),i=r("AFBu"),d=r("0oBi"),s=function(e){var t=e.children,r=(0,a.default)(e,["children"]),n=l.default.useState(!1);l.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var s=(0,d.useDarkMode)();return l.default.createElement(f.MobileMenuContext.Provider,{value:r.menuState||n},l.default.createElement(o.default,null,l.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,i.formatPath)(s?"favicon-dark.png":"favicon.png")})),l.default.createElement(u.SkipNavLink,null),l.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},l.default.createElement(c.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),t))};t.default=s},AFBu:function(e,t,r){"use strict";var n=r("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return a.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e;if(a.default.basename(e).includes("#"))return e.replace("#",".html#");return"".concat(e,".html")};var a=n(r("O2/E"))},GDok:function(e,t,r){"use strict";var n=r("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var a=n(r("nxTg")),l=n(r("8VmE")),o=n(r("RiSW")),u=n(r("mXGw")),c=n(r("5dyF")),f=r("V5Fo"),i=r("/FXl"),d=n(r("PDtE")),s=r("nZpd"),m=r("AFBu"),p=function(e){var t=e.className,r=(0,o.default)(e,["className"]);return u.default.createElement("svg",(0,l.default)({className:(0,d.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r),u.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},v=function(){var e=(0,i.useMDXComponents)().SearchInput;return u.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},u.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,r=e.hasHomePage,n=u.default.useContext(s.MobileMenuContext),l=(0,a.default)(n,2),o=l[0],d=l[1],g=(0,i.useMDXComponents)(),h=g.Logo,b=g.NavBarWrapper,w=g.NavBar,E=g.NavBarItem,x=g.MobileMenuButton;return u.default.createElement(u.default.Fragment,null,u.default.createElement(b,null,u.default.createElement(w,null,r?u.default.createElement(c.default,{passHref:!0,href:(0,m.postFixHTML)("/index")},u.default.createElement(h,null)):u.default.createElement(h,null),u.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},u.default.createElement(v,null),u.default.createElement(x,{open:o,setOpen:d,className:"lg:hidden"}),u.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return u.default.createElement(c.default,{passHref:!0,key:e,href:(0,m.postFixHTML)("/".concat(e))},u.default.createElement(E,null,(0,f.titleCase)(e)))})),u.default.createElement(E,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},u.default.createElement(p,null)))))),o&&u.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return u.default.createElement(c.default,{passHref:!0,key:e,href:(0,m.postFixHTML)("/".concat(e))},u.default.createElement(E,null,(0,f.titleCase)(e)))})),u.default.createElement(E,{href:"https://github.com/intuit/auto",target:"_blank"},u.default.createElement(p,{className:"mr-2"}),"Open on GitHub")))}},MNOf:function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,l){t=t||"&",r=r||"=";var o={};if("string"!==typeof e||0===e.length)return o;var u=/\+/g;e=e.split(t);var c=1e3;l&&"number"===typeof l.maxKeys&&(c=l.maxKeys);var f=e.length;c>0&&f>c&&(f=c);for(var i=0;i<f;++i){var d,s,m,p,v=e[i].replace(u,"%20"),g=v.indexOf(r);g>=0?(d=v.substr(0,g),s=v.substr(g+1)):(d=v,s=""),m=decodeURIComponent(d),p=decodeURIComponent(s),n(o,m)?a(o[m])?o[m].push(p):o[m]=[o[m],p]:o[m]=p}return o};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},THQi:function(e,t,r){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,u){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?l(o(e),(function(o){var u=encodeURIComponent(n(o))+r;return a(e[o])?l(e[o],(function(e){return u+encodeURIComponent(n(e))})).join(t):u+encodeURIComponent(n(e[o]))})).join(t):u?encodeURIComponent(n(u))+r+encodeURIComponent(n(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function l(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var o=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},UKnr:function(e,t,r){"use strict";t.decode=t.parse=r("MNOf"),t.encode=t.stringify=r("THQi")},"WJ/f":function(e,t,r){e.exports=r("kbhq")},kbhq:function(e,t,r){var n=r("/rW5"),a=r("UKnr"),l=/^[0-9a-f]{32}$/;function o(e,t){if(e)return"boolean"===typeof e.protocol?e.protocol:"http"!==e.protocol&&("https"===e.protocol||void 0)}function u(e){return(e="string"===typeof e?e.trim().toLowerCase():"unspecified").match(l)?e:n(e)}function c(e){var t=a.stringify(function(e){var t={},r={protocol:1,format:1};for(var n in e)r[n]||(t[n]=e[n]);return t}(e));return t&&"?"+t||""}e.exports={url:function(e,t,r){var n="//www.gravatar.com/avatar/";t&&t.cdn?(n=t.cdn+"/avatar/",delete t.cdn):(t&&t.protocol&&(r=o(t)),"undefined"!==typeof r&&(n=r?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var a=c(t);return n+u(e)+a},profile_url:function(e,t,r){var n=void 0!=t&&void 0!=t.format?String(t.format):"json";if(t&&t.cdn)a=t.cdn+"/",delete t.cdn;else{t&&t.protocol&&(r=o(t));var a=r?"https://secure.gravatar.com/":"http://www.gravatar.com/"}var l=c(t);return a+u(e)+"."+n+l}}},nZpd:function(e,t,r){"use strict";var n=r("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var a=n(r("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=a},sQxV:function(e,t,r){"use strict";var n=r("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("mXGw")),l=n(r("PDtE")),o=n(r("pWCa")),u=r("I08b"),c=n(r("6f/q")),f=n(r("wIRL")),i=new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"numeric"}),d=function(e){var t=e.children,r=e.frontMatter,n=r.color||"primary";return a.default.createElement(c.default,null,a.default.createElement(o.default,null,a.default.createElement("title",null,r.title.replace(/\\`/g,"`")),a.default.createElement("meta",{property:"og:type",content:"article"})),a.default.createElement(u.SkipNavContent,null),r.image?a.default.createElement("div",{className:"bg-".concat(n,"-500 bg-cover bg-no-repeat bg-center h-screen"),style:{maxHeight:"30vh",minHeight:315,backgroundImage:"url(".concat(r.image,")")}}):a.default.createElement("div",{className:"bg-".concat(n,"-600 h-48")}),a.default.createElement("article",{className:(0,l.default)("DocSearch-content blog-post","pt-6 pb-12 px-6 mx-4 rounded-xl -mt-10 mb-16 bg-white shadow-md text-gray-800","lg:max-w-screen-md lg:mx-auto lg:w-full","dark:bg-gray-900 border dark:border-gray-500")},a.default.createElement("div",{className:"mx-auto text-center flex flex-col items-center"},a.default.createElement(f.default,{email:r.email,className:"-mt-12 mb-4"}),a.default.createElement("h1",{className:(0,l.default)("lvl1 text-3xl font-light mb-2 lg:mb-4","dark:text-gray-200")},r.title),a.default.createElement("p",{className:"mb-6"},a.default.createElement("span",{className:"dark:text-gray-300"},r.author)," ",a.default.createElement("time",{className:"text-gray-600 dark:text-gray-500",dateTime:r.date},"on ",i.format(new Date(r.date))))),t),a.default.createElement("div",{id:"disqus_thread",className:"px-6 lg:max-w-screen-md lg:mx-auto w-full mb-16 lg:mb-28"}))};t.default=d},wIRL:function(e,t,r){"use strict";var n=r("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("mXGw")),l=n(r("WJ/f")),o=n(r("PDtE")),u=function(e){var t=e.email,r=e.className,n=e.size,u=void 0===n?12:n;return t?a.default.createElement("img",{src:l.default.url(t),className:(0,o.default)("rounded-full border-2 border-gray-200","dark:border-gray-900","w-".concat(u," h-").concat(u),r)}):null};t.default=u}}]);