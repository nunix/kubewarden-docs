"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?i.createElement(g,a(a({ref:t},c),{},{components:r})):i.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_label:"Introduction",title:""},a="Gatekeeper",p={unversionedId:"writing-policies/rego/gatekeeper/intro",id:"writing-policies/rego/gatekeeper/intro",title:"",description:"Gatekeeper support has been introduced starting from these releases:",source:"@site/docs/writing-policies/rego/gatekeeper/01-intro.md",sourceDirName:"writing-policies/rego/gatekeeper",slug:"/writing-policies/rego/gatekeeper/intro",permalink:"/writing-policies/rego/gatekeeper/intro",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/gatekeeper/01-intro.md",tags:[],version:"current",lastUpdatedAt:1688574838,formattedLastUpdatedAt:"Jul 5, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",title:""},sidebar:"docs",previous:{title:"Distribute",permalink:"/writing-policies/rego/open-policy-agent/distribute"},next:{title:"Create a New Policy",permalink:"/writing-policies/rego/gatekeeper/create-policy"}},l={},s=[{value:"Compatibility with existing policies",id:"compatibility-with-existing-policies",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gatekeeper"},"Gatekeeper"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Gatekeeper support has been introduced starting from these releases:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"kwctl: v0.2.0"),(0,n.kt)("li",{parentName:"ul"},"policy-server: v0.2.0"))),(0,n.kt)("p",null,"Gatekeeper is a project targeting Kubernetes, and as such, has some\nfeatures that are thought out of the box for being integrated with it."),(0,n.kt)("h2",{id:"compatibility-with-existing-policies"},"Compatibility with existing policies"),(0,n.kt)("p",null,"All the existing Gatekeeper policies should be compatible with\nKubewarden as we will explain during this chapter."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If this is not the case, please report it to us and we\nwill do our best to make sure your policy runs flawlessly with\nKubewarden.")),(0,n.kt)("p",null,"Policies have to be compiled with the ",(0,n.kt)("inlineCode",{parentName:"p"},"opa")," CLI to the ",(0,n.kt)("inlineCode",{parentName:"p"},"wasm")," target."),(0,n.kt)("p",null,"In terms of policy execution, you can read more about the ",(0,n.kt)("a",{parentName:"p",href:"/writing-policies/rego/builtin-support"},"Open Policy\nAgent built-in support that is implemented in\nKubewarden"),"."))}d.isMDXComponent=!0}}]);