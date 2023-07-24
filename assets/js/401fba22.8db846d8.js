"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"writing-policies/dsl",id:"writing-policies/dsl",title:"dsl",description:"WARNING: not yet done, WIP",source:"@site/docs/writing-policies/dsl.md",sourceDirName:"writing-policies",slug:"/writing-policies/dsl",permalink:"/writing-policies/dsl",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/dsl.md",tags:[],version:"current",lastUpdatedAt:1688574838,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{}},c={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"WARNING:")," not yet done, WIP")),(0,a.kt)("h1",{id:"domain-specific-language"},"Domain Specific Language"),(0,a.kt)("p",null,"Being able to write Kubewarden policies using regular programming languages provides\nmany advantages, however in certain cases this could be a bit of an overkill.\nSimple policies could be written in an easier way using a domain-specific\nlanguage."),(0,a.kt)("p",null,"This is an extract from the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"Wikipedia page"),"\nabout domain-specific languages:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A domain-specific language (DSL) is a computer language specialized to a\nparticular application domain.")),(0,a.kt)("p",null,"We plan to provide a simple DSL that can be built as a Wasm module.\nThis would allow the Kubewarden admission controller to use policies written\nusing regular programming languages ",(0,a.kt)("strong",{parentName:"p"},"and")," policies written a simpler DSL\nlanguage."))}d.isMDXComponent=!0}}]);