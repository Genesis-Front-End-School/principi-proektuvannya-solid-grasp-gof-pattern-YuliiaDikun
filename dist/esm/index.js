import*as e from"react";import t from"react";import n from"styled-components";function r(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var a,i;function c(e,t){if(!1===e||null==e)throw new Error(t)}function s(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function l(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function u(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function p(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function f(e,t,n,r){let a;void 0===r&&(r=!1),"string"==typeof e?a=l(e):(a=o({},e),c(!a.pathname||!a.pathname.includes("?"),u("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),u("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),u("#","search","hash",a)));let i,s=""===e||""===a.pathname,p=s?"/":a.pathname;if(r||null==p)i=n;else{let e=t.length-1;if(p.startsWith("..")){let t=p.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let f=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?l(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:d(r),hash:m(o)}}(a,i),h=p&&"/"!==p&&p.endsWith("/"),v=(s||"."===p)&&n.endsWith("/");return f.pathname.endsWith("/")||!h&&!v||(f.pathname+="/"),f}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={})),function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(i||(i={}));const h=e=>e.join("/").replace(/\/\/+/g,"/"),d=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",m=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const v="function"==typeof Object.is?Object.is:
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:g,useEffect:y,useLayoutEffect:w,useDebugValue:E}=e;let b=!1,N=!1;function O(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!v(n,e)}catch(e){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;"useSyncExternalStore"in e&&e.useSyncExternalStore;const x=e.createContext(null);"production"!==process.env.NODE_ENV&&(x.displayName="DataRouter");const C=e.createContext(null);"production"!==process.env.NODE_ENV&&(C.displayName="DataRouterState");const R=e.createContext(null);"production"!==process.env.NODE_ENV&&(R.displayName="Await");const D=e.createContext(null);"production"!==process.env.NODE_ENV&&(D.displayName="Navigation");const S=e.createContext(null);"production"!==process.env.NODE_ENV&&(S.displayName="Location");const L=e.createContext({outlet:null,matches:[]});"production"!==process.env.NODE_ENV&&(L.displayName="Route");const k=e.createContext(null);function _(){return null!=e.useContext(S)}function j(){return _()||("production"!==process.env.NODE_ENV?c(!1,"useLocation() may be used only in the context of a <Router> component."):c(!1)),e.useContext(S).location}function A(){_()||("production"!==process.env.NODE_ENV?c(!1,"useNavigate() may be used only in the context of a <Router> component."):c(!1));let{basename:t,navigator:n}=e.useContext(D),{matches:r}=e.useContext(L),{pathname:o}=j(),a=JSON.stringify(p(r).map((e=>e.pathnameBase))),i=e.useRef(!1);return e.useEffect((()=>{i.current=!0})),e.useCallback((function(e,r){if(void 0===r&&(r={}),"production"!==process.env.NODE_ENV&&function(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}(i.current,"You should call navigate() in a React.useEffect(), not when your component is first rendered."),!i.current)return;if("number"==typeof e)return void n.go(e);let c=f(e,JSON.parse(a),o,"path"===r.relative);"/"!==t&&(c.pathname="/"===c.pathname?t:h([t,c.pathname])),(r.replace?n.replace:n.push)(c,r.state,r)}),[t,n,a,o])}function P(t,n){let{relative:r}=void 0===n?{}:n,{matches:o}=e.useContext(L),{pathname:a}=j(),i=JSON.stringify(p(o).map((e=>e.pathnameBase)));return e.useMemo((()=>f(t,JSON.parse(i),a,"path"===r)),[t,i,a,r])}var U,V,z;
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}"production"!==process.env.NODE_ENV&&(k.displayName="RouteError"),function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(U||(U={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(V||(V={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(z||(z={})),new Promise((()=>{}));const M="get",B="application/x-www-form-urlencoded";function T(e){return null!=e&&"string"==typeof e.tagName}function I(e,t,n){let r,o,a,i;if(T(c=e)&&"form"===c.tagName.toLowerCase()){let c=n.submissionTrigger;r=n.method||e.getAttribute("method")||M,o=n.action||e.getAttribute("action")||t,a=n.encType||e.getAttribute("enctype")||B,i=new FormData(e),c&&c.name&&i.append(c.name,c.value)}else if(function(e){return T(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return T(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let c=e.form;if(null==c)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');r=n.method||e.getAttribute("formmethod")||c.getAttribute("method")||M,o=n.action||e.getAttribute("formaction")||c.getAttribute("action")||t,a=n.encType||e.getAttribute("formenctype")||c.getAttribute("enctype")||B,i=new FormData(c),e.name&&i.append(e.name,e.value)}else{if(T(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(r=n.method||M,o=n.action||t,a=n.encType||B,e instanceof FormData)i=e;else if(i=new FormData,e instanceof URLSearchParams)for(let[t,n]of e)i.append(t,n);else if(null!=e)for(let t of Object.keys(e))i.append(t,e[t])}var c;let{protocol:s,host:l}=window.location;return{url:new URL(o,s+"//"+l),method:r.toLowerCase(),encType:a,formData:i}}const J=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],K=["aria-current","caseSensitive","className","end","style","to","children"],H=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];process.env.NODE_ENV;const Y="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q=e.forwardRef((function(t,n){let r,{onClick:o,relative:a,reloadDocument:i,replace:l,state:u,target:p,to:f,preventScrollReset:d}=t,m=F(t,J),{basename:v}=e.useContext(D),g=!1;if("string"==typeof f&&$.test(f)&&(r=f,Y)){let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=function(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}(t.pathname,v);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:g=!0}let y=function(t,n){let{relative:r}=void 0===n?{}:n;_()||("production"!==process.env.NODE_ENV?c(!1,"useHref() may be used only in the context of a <Router> component."):c(!1));let{basename:o,navigator:a}=e.useContext(D),{hash:i,pathname:s,search:l}=P(t,{relative:r}),u=s;return"/"!==o&&(u="/"===s?o:h([o,s])),a.createHref({pathname:u,search:l,hash:i})}(f,{relative:a}),w=function(t,n){let{target:r,replace:o,state:a,preventScrollReset:i,relative:c}=void 0===n?{}:n,l=A(),u=j(),p=P(t,{relative:c});return e.useCallback((e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,r)){e.preventDefault();let n=void 0!==o?o:s(u)===s(p);l(t,{replace:n,state:a,preventScrollReset:i,relative:c})}}),[u,l,p,o,a,r,t,i,c])}(f,{replace:l,state:u,target:p,preventScrollReset:d,relative:a});return e.createElement("a",W({},m,{href:r||y,onClick:g||i?o:function(e){o&&o(e),e.defaultPrevented||w(e)},ref:n,target:p}))}));"production"!==process.env.NODE_ENV&&(q.displayName="Link");const G=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:a="",end:i=!1,style:c,to:s,children:l}=t,u=F(t,K),p=P(s,{relative:u.relative}),f=j(),h=e.useContext(C),{navigator:d}=e.useContext(D),m=d.encodeLocation?d.encodeLocation(p).pathname:p.pathname,v=f.pathname,g=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;o||(v=v.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase());let y,w=v===m||!i&&v.startsWith(m)&&"/"===v.charAt(m.length),E=null!=g&&(g===m||!i&&g.startsWith(m)&&"/"===g.charAt(m.length)),b=w?r:void 0;y="function"==typeof a?a({isActive:w,isPending:E}):[a,w?"active":null,E?"pending":null].filter(Boolean).join(" ");let N="function"==typeof c?c({isActive:w,isPending:E}):c;return e.createElement(q,W({},u,{"aria-current":b,className:y,ref:n,style:N,to:s}),"function"==typeof l?l({isActive:w,isPending:E}):l)}));"production"!==process.env.NODE_ENV&&(G.displayName="NavLink");const Q=e.forwardRef(((t,n)=>e.createElement(X,W({},t,{ref:n}))));"production"!==process.env.NODE_ENV&&(Q.displayName="Form");const X=e.forwardRef(((t,n)=>{let{reloadDocument:r,replace:o,method:a=M,action:i,onSubmit:s,fetcherKey:l,routeId:u,relative:p,preventScrollReset:f}=t,h=F(t,H),d=function(t,n){let{router:r}=function(t){let n=e.useContext(x);return n||("production"!==process.env.NODE_ENV?c(!1,function(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}(t)):c(!1)),n}(Z.UseSubmitImpl),o=ne();return e.useCallback((function(e,a){if(void 0===a&&(a={}),"undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{method:i,encType:s,formData:l,url:u}=I(e,o,a),p=u.pathname+u.search,f={replace:a.replace,preventScrollReset:a.preventScrollReset,formData:l,formMethod:i,formEncType:s};t?(null==n&&("production"!==process.env.NODE_ENV?c(!1,"No routeId available for useFetcher()"):c(!1)),r.fetch(t,n,p,f)):r.navigate(p,f)}),[o,r,t,n])}(l,u),m="get"===a.toLowerCase()?"get":"post",v=ne(i,{relative:p});return e.createElement("form",W({ref:n,method:m,action:v,onSubmit:r?s:e=>{if(s&&s(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=(null==t?void 0:t.getAttribute("formmethod"))||a;d(t||e.currentTarget,{method:n,replace:o,relative:p,preventScrollReset:f})}},h))}));var Z,ee,te;function ne(t,n){let{relative:r}=void 0===n?{}:n,{basename:o}=e.useContext(D),a=e.useContext(L);a||("production"!==process.env.NODE_ENV?c(!1,"useFormAction must be used inside a RouteContext"):c(!1));let[i]=a.matches.slice(-1),l=W({},P(t||".",{relative:r})),u=j();if(null==t&&(l.search=u.search,l.hash=u.hash,i.route.index)){let e=new URLSearchParams(l.search);e.delete("index"),l.search=e.toString()?"?"+e.toString():""}return t&&"."!==t||!i.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),"/"!==o&&(l.pathname="/"===l.pathname?o:h([o,l.pathname])),s(l)}"production"!==process.env.NODE_ENV&&(X.displayName="FormImpl"),process.env.NODE_ENV,function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(Z||(Z={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ee||(ee={})),n(q)(te||(te=r(["\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n  span {\n    color: ",";\n    text-transform: uppercase;\n  }\n"],["\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n  span {\n    color: ",";\n    text-transform: uppercase;\n  }\n"])),(function(e){return e.theme.fontSizes.large}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.accent}));var re={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oe=t.createContext&&t.createContext(re),ae=function(){return ae=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ae.apply(this,arguments)},ie=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function ce(e){return e&&e.map((function(e,n){return t.createElement(e.tag,ae({key:n},e.attr),ce(e.child))}))}function se(e){return function(n){return t.createElement(le,ae({attr:ae({},e.attr)},n),ce(e.child))}}function le(e){var n=function(n){var r,o=e.attr,a=e.size,i=e.title,c=ie(e,["attr","size","title"]),s=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",ae({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,c,{className:r,style:ae(ae({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==oe?t.createElement(oe.Consumer,null,(function(e){return n(e)})):n(re)}function ue(e){return se({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"}}]})(e)}function pe(e){return se({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"}}]})(e)}function fe(e){return se({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"}}]})(e)}var he,de=n.div(he||(he=r(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n \n  a {\n    color: ",";\n    transition: color 0.3s;\n    &:hover {\n      color: ",";\n    }\n  }  \n"],["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n \n  a {\n    color: ",";\n    transition: color 0.3s;\n    &:hover {\n      color: ",";\n    }\n  }  \n"])),(function(e){return e.theme.spacing(5)}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.accent})),me=function(){return t.createElement(de,{"data-testid":"footer-social"},t.createElement("a",{"data-testid":"linkedin",href:"https://www.linkedin.com/in/yuliia-dikun/",target:"_blank",rel:"noreferrer"},t.createElement(fe,{size:35})),t.createElement("a",{"data-testid":"github",href:"https://github.com/YuliiaDikun",target:"_blank",rel:"noreferrer"},t.createElement(pe,{size:35})),t.createElement("a",{"data-testid":"twitter",href:"https://twitter.com/Midnight_Jul",target:"_blank",rel:"noreferrer"},t.createElement(ue,{size:35})))};export{de as SocialLinksWrapper,me as SocialMedia};
//# sourceMappingURL=index.js.map
