_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=r.default.useState(!1),t=(0,c.default)(e,2),a=t[0],n=t[1];return(0,d.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var c=n(a("nxTg")),r=n(a("mXGw")),d=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("RiSW")),r=n(a("mXGw")),d=n(a("pWCa")),o=a("I08b"),s=a("GDok"),m=a("nZpd"),l=a("AFBu"),i=a("0oBi"),u=function(e){var t=e.children,a=(0,c.default)(e,["children"]),n=r.default.useState(!1);r.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var u=(0,i.useDarkMode)();return r.default.createElement(m.MobileMenuContext.Provider,{value:a.menuState||n},r.default.createElement(d.default,null,r.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,l.formatPath)(u?"favicon-dark.png":"favicon.png")})),r.default.createElement(o.SkipNavLink,null),r.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},r.default.createElement(s.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),t))};t.default=u},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return c.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e;if(c.default.basename(e).includes("#"))return e.replace("#",".html#");return"".concat(e,".html")};var c=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var c=n(a("OvAC")),r=n(a("RiSW")),d=n(a("nxTg")),o=n(a("mXGw")),s=n(a("5dyF")),m=n(a("pWCa")),l=n(a("O2/E")),i=n(a("PDtE")),u=a("/FXl"),p=a("dAGg"),b=a("nZpd"),x=a("AFBu");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){(0,c.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=o.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=O;var N=function(e){var t=e.href,a=e.children,n=o.default.useContext(O),c=(0,u.useMDXComponents)().SidebarLink,r=l.default.join(n.sidebarFileLocation,t),d=t;return n.sidebarFileLocation&&((d=r).endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),o.default.createElement(s.default,{passHref:!0,href:(0,x.postFixHTML)(d)},o.default.createElement(c,{isActive:n.pathname.replace("/index","")===(0,x.formatPath)(d)},a))};t.Sidebar=function(t){var n=t.links,c=t.folder,s=o.default.useContext(b.MobileMenuContext),f=(0,d.default)(s,1)[0],g="/".concat(c),h=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(g),v=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?l.default.relative("/auto",a.pathname):l.default.relative("/",a.pathname),c=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return c||(c=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:c.title||"auto",pathname:(0,x.formatPath)(c.__resourcePath)}}(n),k=(0,u.useMDXComponents)(),E=k.SidebarItemWrapper,y=(k.SidebarLink,k.SidebarTitle),w=k.SidebarDivider,C=k.SidebarList,_=k.Sidebar,M=(0,r.default)(k,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return o.default.createElement(O.Provider,{value:j(j({},v),{},{sidebarFileLocation:h?g:""})},o.default.createElement(u.MDXProvider,{components:j(j({},M),{},{li:E,ul:C,a:N,p:y,hr:w})},o.default.createElement(m.default,null,o.default.createElement("title",null,v.title.replace(/\\`/g,"`"))),o.default.createElement(_,{className:(0,i.default)(!f&&"hidden","lg:block")},h?o.default.createElement(h,null):o.default.createElement(C,null,n.map((function(e){return o.default.createElement(E,{key:e.__resourcePath},o.default.createElement(N,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},Dkfm:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/magic-zero",function(){return a("R/zR")}])},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var c=n(a("nxTg")),r=n(a("8VmE")),d=n(a("RiSW")),o=n(a("mXGw")),s=n(a("5dyF")),m=a("V5Fo"),l=a("/FXl"),i=n(a("PDtE")),u=a("nZpd"),p=a("AFBu"),b=function(e){var t=e.className,a=(0,d.default)(e,["className"]);return o.default.createElement("svg",(0,r.default)({className:(0,i.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),o.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},x=function(){var e=(0,l.useMDXComponents)().SearchInput;return o.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},o.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=o.default.useContext(u.MobileMenuContext),r=(0,c.default)(n,2),d=r[0],i=r[1],f=(0,l.useMDXComponents)(),j=f.Logo,O=f.NavBarWrapper,N=f.NavBar,g=f.NavBarItem,h=f.MobileMenuButton;return o.default.createElement(o.default.Fragment,null,o.default.createElement(O,null,o.default.createElement(N,null,a?o.default.createElement(s.default,{passHref:!0,href:(0,p.postFixHTML)("/index")},o.default.createElement(j,null)):o.default.createElement(j,null),o.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},o.default.createElement(x,null),o.default.createElement(h,{open:d,setOpen:i,className:"lg:hidden"}),o.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return o.default.createElement(s.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},o.default.createElement(g,null,(0,m.titleCase)(e)))})),o.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},o.default.createElement(b,null)))))),d&&o.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return o.default.createElement(s.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},o.default.createElement(g,null,(0,m.titleCase)(e)))})),o.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank"},o.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},"R/zR":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),c=a("dV/x"),r=a("mXGw"),d=a.n(r),o=a("/FXl"),s=a("pu0P"),m=a.n(s),l=(d.a.createElement,{title:"Magic-Zero Plugin",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/magic-zero.mdx",__scans:{}}),i={frontMatter:l},u=m.a;function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.mdx)(u,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A plugin that closely adheres to semver versioning for 0.0.x and 0.x.y releases."),Object(o.mdx)("p",null,"In the default ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," experience the ",Object(o.mdx)("inlineCode",{parentName:"p"},"patch"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"minor"),", and ",Object(o.mdx)("inlineCode",{parentName:"p"},"major")," only increment the corresponding digit in the version.\nThe rules for incrementing version ",Object(o.mdx)("inlineCode",{parentName:"p"},"< 1.0.0")," are not as intuitive or ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/semver/semver/issues/221"}),"agreed upon"),".\nThis plugin adds a new label (",Object(o.mdx)("inlineCode",{parentName:"p"},"graduate"),") and changes ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto"),"'s behavior to do the following:"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"0.0.x:")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Starting version:")," ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.0.1")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"patch")," => ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.0.2"),Object(o.mdx)("br",{parentName:"p"}),"\n",Object(o.mdx)("inlineCode",{parentName:"p"},"minor")," => ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.0.2"),Object(o.mdx)("br",{parentName:"p"}),"\n",Object(o.mdx)("inlineCode",{parentName:"p"},"major")," => ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.0.2"),Object(o.mdx)("br",{parentName:"p"}),"\n",Object(o.mdx)("inlineCode",{parentName:"p"},"graduate")," => ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.1.0"),"  "),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"0.x.y:")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Starting version:")," ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.1.0")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"patch")," => ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.1.1"),Object(o.mdx)("br",{parentName:"p"}),"\n",Object(o.mdx)("inlineCode",{parentName:"p"},"minor")," => ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.1.1"),Object(o.mdx)("br",{parentName:"p"}),"\n",Object(o.mdx)("inlineCode",{parentName:"p"},"major")," => ",Object(o.mdx)("inlineCode",{parentName:"p"},"0.2.0"),Object(o.mdx)("br",{parentName:"p"}),"\n",Object(o.mdx)("inlineCode",{parentName:"p"},"graduate")," => ",Object(o.mdx)("inlineCode",{parentName:"p"},"1.0.0"),"  "),Object(o.mdx)("p",null,"Once you're project is ",Object(o.mdx)("inlineCode",{parentName:"p"},">= 1.0.0")," this plugin effectively does nothing."),Object(o.mdx)("h2",{id:"installation"},Object(o.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(o.mdx)("p",null,"This plugin is not included with the ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(o.mdx)("pre",{className:"language-bash"},Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," i --save-dev @auto-it/magic-zero\n",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# or"),"\n",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"yarn")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"add")," -D @auto-it/magic-zero\n")),Object(o.mdx)("h2",{id:"usage"},Object(o.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(o.mdx)("pre",{className:"language-json"},Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"magic-zero"'),"\n    ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// other plugins"),"\n  ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(o.mdx)("h2",{id:"options"},Object(o.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#options"}),"Options")),Object(o.mdx)("h3",{id:"label"},Object(o.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#label"}),Object(o.mdx)("inlineCode",{parentName:"a"},"label"))),Object(o.mdx)("p",null,"The label to graduate a version to the next left 0 digit."),Object(o.mdx)("pre",{className:"language-json"},Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"magic-zero"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"label"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"super major"')," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// other plugins"),"\n  ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(o.mdx)("p",null,"If you want to customize the label color/description you must define the label in your ",Object(o.mdx)("inlineCode",{parentName:"p"},".autorc"),"."),Object(o.mdx)("pre",{className:"language-json"},Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"magic-zero"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"label"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"super major"')," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// other plugins"),"\n  ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"labels"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"name"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"super major"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"description"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Graduate a version to the next left 0 digit"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"releaseType"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"major"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"color"'),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"#000"'),"\n    ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(o.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var c=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=c},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("nxTg")),r=n(a("mXGw")),d=n(a("O2/E")),o=a("/FXl"),s=n(a("PDtE")),m=a("I08b"),l=a("C3pV"),i=n(a("6f/q")),u=n(a("x3GE")),p=/([^`]*)`([^`]*)`(.*)/m;var b=function(e){var t=e.children,a=e.frontMatter,n=r.default.useState(!1),b=(0,c.default)(n,2),x=b[0],f=b[1],j=(0,o.useMDXComponents)(),O=a.__resourcePath.split("/")[0],N=(0,u.default)(),g=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((function(e){return d.default.relative("./",e)})).filter((function(e){return e.startsWith(O)})).map((function(e){return N.find((function(t){return t.__resourcePath===e}))}));return r.default.createElement(i.default,{menuState:[x,f]},r.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},r.default.createElement(l.Sidebar,{links:g,folder:O}),r.default.createElement(m.SkipNavContent,null),r.default.createElement("main",{className:(0,s.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",x&&"hidden")},a.title&&r.default.createElement(j.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");p.test(n);){var d=n.match(p),o=(0,c.default)(d,4),s=o[1],m=o[2],l=o[3];a.push(s),a.push(r.default.createElement(e.inlineCode,null,m)),n=l}return a.push(n),r.default.createElement("div",null,a)}}(j,a.title)),t)))};t.default=b},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[];try{var c=a("jmz1");n=c.keys().map(c)}catch(d){}var r=function(){try{return n}catch(d){return[]}};t.default=r}},[["Dkfm",0,1,2,3,4]]]);