"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5609],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8128:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],s={sidebar_label:"Introduction to Go",title:""},l=void 0,p={unversionedId:"writing-policies/go/intro-go",id:"writing-policies/go/intro-go",title:"",description:"Go's support for WebAssembly is fast evolving. The contents",source:"@site/docs/writing-policies/go/01-intro-go.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/intro-go",permalink:"/writing-policies/go/intro-go",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/01-intro-go.md",tags:[],version:"current",lastUpdatedAt:1666093881,formattedLastUpdatedAt:"Oct 18, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction to Go",title:""},sidebar:"docs",previous:{title:"Building & Distributing Policies",permalink:"/writing-policies/rust/build-and-distribute"},next:{title:"Create a New Policy",permalink:"/writing-policies/go/scaffold"}},u={},c=[{value:"Limitations",id:"limitations",level:2},{value:"Tooling",id:"tooling",level:2},{value:"Getting TinyGo dependencies",id:"getting-tinygo-dependencies",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Go's support for WebAssembly is fast evolving. The contents\nof this page were written during April 2021, hence they could be outdated.")),(0,o.kt)("h1",{id:"go"},"Go"),(0,o.kt)("p",null,"Currently the official Go compiler cannot produce WebAssembly binaries\nthat can be run ",(0,o.kt)("strong",{parentName:"p"},"outside")," of the browser.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/issues/31105"},"This upstream issue")," is tracking\nthe evolution of this topic.\nDue to that, it's not possible to use the Go compiler to write Kubewarden policies."),(0,o.kt)("p",null,"Luckily there's another Go compiler that is capable of building WebAssembly\nbinaries that can be used by Kubewarden. This compiler is called ",(0,o.kt)("a",{parentName:"p",href:"https://tinygo.org/"},"TinyGo"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TinyGo is a project to bring the Go programming language to microcontrollers\nand modern web browsers by creating a new compiler based on LLVM."),(0,o.kt)("p",{parentName:"blockquote"},"You can compile and run TinyGo programs on many different microcontroller\nboards such as the BBC micro:bit and the Arduino Uno."),(0,o.kt)("p",{parentName:"blockquote"},"TinyGo can also be used to produce WebAssembly (Wasm) code which is very\ncompact in size.")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"TinyGo doesn't yet support all the Go features (see ",(0,o.kt)("a",{parentName:"p",href:"https://tinygo.org/lang-support/"},"here"),"\nto see the current project status). Currently its biggest limitation\nis the lack of a fully supported ",(0,o.kt)("inlineCode",{parentName:"p"},"reflect")," package. That leads to the inability to use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"encoding/json")," package against structures and user defined types."),(0,o.kt)("p",null,"Kubewarden policies need to process JSON data like the policy settings and\nthe actual request received by Kubernetes."),(0,o.kt)("p",null,"Despite TinyGo's current limitations, it's still easy and doable to write\nKubewarden validation policies with it."),(0,o.kt)("h2",{id:"tooling"},"Tooling"),(0,o.kt)("p",null,"Writing Kubewarden policies requires a version of TinyGo greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"0.23.0"),"."),(0,o.kt)("p",null,"These Go libraries are extremely useful when writing a Kubewarden policy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/policy-sdk-go"},"Kubewarden Go SDK"),": provides a series of\nstructures and functions that reduce the amount of code to write. It also provides test helpers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/k8s-objects"},"Kubernetes Go types"),": The\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/staging/src/k8s.io"},"official Kubernetes Go Types"),"\ncannot be used with TinyGo. This module provides all the\nKubernetes Types in a TinyGo-friendly way."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mailru/easyjson/"},"easyjson"),": This provides a way to marshal and unmarshal\nGo types without using reflection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tidwall/gjson"},"gjson"),": It provides a powerful query language that allows\nquick navigation of JSON documents and data retrieval. This library doesn't use the\n",(0,o.kt)("inlineCode",{parentName:"li"},"encoding/json")," package provided by Go's stdlib, hence it's usable with TinyGo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/deckarep/golang-set"},"mapset"),": provides a Go implementation of the\n",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)"},"Set"),"\ndata structure. This library significantly reduces the amount of code to be written,\nthat's because operations like Set ",(0,o.kt)("inlineCode",{parentName:"li"},"union"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"intersection"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"difference")," are pretty frequent inside\nof policies.")),(0,o.kt)("p",null,"Last but not least, the Kubewarden project provides a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/go-policy-template"},"template Go policy project"),"\nthat can be used to quickly create Kubewarden policies written in Go."),(0,o.kt)("h2",{id:"getting-tinygo-dependencies"},"Getting TinyGo dependencies"),(0,o.kt)("p",null,"The easiest way to get TinyGo is by using the upstream container images.\nOfficial releases can be found ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tinygo/tinygo"},"here"),", while\nbuilds from the development branch are automatically pushed\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tinygo/tinygo-dev"},"here"),"."),(0,o.kt)("p",null,"If needed, checkout TinyGo's ",(0,o.kt)("a",{parentName:"p",href:"https://tinygo.org/getting-started/"},"getting started")," page for\nmore information."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Kubewarden is compatible with all versions of ",(0,o.kt)("strong",{parentName:"p"},"TinyGo")," after and including 0.23.")))}m.isMDXComponent=!0}}]);