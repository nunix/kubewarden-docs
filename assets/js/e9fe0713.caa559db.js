"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6042],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return f}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=s(i),f=n,d=h["".concat(l,".").concat(f)]||h[f]||c[f]||o;return i?r.createElement(d,a(a({ref:t},u),{},{components:i})):r.createElement(d,a({ref:t},u))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<o;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},3836:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=i(3117),n=i(102),o=(i(7294),i(3905)),a=["components"],p={sidebar_label:"Publish to Artifact Hub",title:""},l="Publish Policies to Artifact Hub",s={unversionedId:"distributing-policies/publish-policy-to-artifact-hub",id:"distributing-policies/publish-policy-to-artifact-hub",title:"",description:"Artifact Hub is a website where users can find,",source:"@site/docs/distributing-policies/publish-policy-to-artifact-hub.md",sourceDirName:"distributing-policies",slug:"/distributing-policies/publish-policy-to-artifact-hub",permalink:"/distributing-policies/publish-policy-to-artifact-hub",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies/publish-policy-to-artifact-hub.md",tags:[],version:"current",lastUpdatedAt:1666093881,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{sidebar_label:"Publish to Artifact Hub",title:""},sidebar:"docs",previous:{title:"OCI Registries Support",permalink:"/distributing-policies/oci-registries-support"},next:{title:"Custom Certificate Authorities",permalink:"/distributing-policies/custom-certificate-authorities"}},u={},c=[{value:"Prepare your Git repository",id:"prepare-your-git-repository",level:2},{value:"Publishing Steps",id:"publishing-steps",level:2},{value:"Keeping Artifact Hub in Sync",id:"keeping-artifact-hub-in-sync",level:2}],h={toc:c};function f(e){var t=e.components,i=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"publish-policies-to-artifact-hub"},"Publish Policies to Artifact Hub"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"Artifact Hub")," is a website where users can find,\ninstall, and publish packages and configurations for ",(0,o.kt)("a",{parentName:"p",href:"https://cncf.io"},"CNCF")," projects."),(0,o.kt)("p",null,"Kubewarden policies can be published on Artifact Hub and made\ndiscoverable to the wide audience of CNCF users."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Artifact Hub is a content aggregation platform and doesn't actually host the\nartifacts that are published on it."),(0,o.kt)("p",{parentName:"admonition"},"Artifact Hub requires you to physically host container image repositories on a container\nregistry or a web server.\nRefer to the ",(0,o.kt)("em",{parentName:"p"},'"',(0,o.kt)("a",{parentName:"em",href:"../distributing-policies"},"distributing policies"),'"')," section for more information on how to\nhost your policies.")),(0,o.kt)("p",null,"This document focuses on the steps required to make a Kubewarden policy\ndiscoverable on Artifact Hub."),(0,o.kt)("h2",{id:"prepare-your-git-repository"},"Prepare your Git repository"),(0,o.kt)("p",null,"Artifact Hub crawls Git repositories looking for special metadata files."),(0,o.kt)("p",null,"There are different kind of layouts the Git repository can have. They\nare all documented in depth in the ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/docs/topics/repositories/#kubewarden-policies-repositories"},"official Artifact Hub documentation"),"."),(0,o.kt)("p",null,"Artifact Hub is pretty flexible and allows you to organize your code in these ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Have a Git repository dedicated to Artifact Hub: this repository will not contain\nany policy source code. It will be a collection of the YAML files required by\nArtifact Hub."),(0,o.kt)("li",{parentName:"ul"},"Add a Artifact Hub directory inside of the Git repository that holds the source\nof your policy. This is an iteration of the previous approach, the only difference\nis that it focuses just on one policy: the one defined inside of the Git repository.\nThis approach allows to keep multiple versions of the policy published on Artifact Hub."),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"artifacthub-pkg.yml")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"artifacthub-repo.yml")," files to the root\nof the Git repository that holds the policy source code. This approach is the\nsimplest one. The only limitation is that only the latest version of the policy\nwill be visible on Artifact Hub.")),(0,o.kt)("p",null,"The last approach is what we used inside of our official policy templates.\nThe Git repository that is scaffolded includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-pkg.yml"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-repo.yml")," files."),(0,o.kt)("h2",{id:"publishing-steps"},"Publishing Steps"),(0,o.kt)("p",null,"Before publishing a policy to Artifact Hub, you must create an account on\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"website"),"."),(0,o.kt)("p",null,"Before publishing the policy, ensure your Git repository has the proper layout."),(0,o.kt)("p",null,"If you created the policy using one of our templates, ensure the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-pkg.yml")," file\nhas correct data inside of it.\nThe format of the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-pkg.yml")," is described ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/artifacthub/hub/blob/master/docs/metadata/artifacthub-pkg.yml"},"here"),"."),(0,o.kt)("p",null,"Finally, ensure your policy is published inside of a container registry or on a\nweb server."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Right now the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-repo.yml")," file are not relevant.")),(0,o.kt)("p",null,"Once everything is in place, log into Artifact Hub and go to your\n",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/control-panel/repositories?page=1"},"control plane"),"."),(0,o.kt)("p",null,"Decide whether you want to publish the policy as a user or under an Artifact Hub\norganization you belong to. This is done by choosing the correct ",(0,o.kt)("em",{parentName:"p"},'"control panel context"'),"."),(0,o.kt)("p",null,"Then press the ",(0,o.kt)("em",{parentName:"p"},'"Add"')," button and fill the form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("em",{parentName:"li"},'"Kubewarden policies"')," as kind."),(0,o.kt)("li",{parentName:"ul"},"Enter a ",(0,o.kt)("em",{parentName:"li"},'"Name"')," and ",(0,o.kt)("em",{parentName:"li"},'"Display name"')," of your choice."),(0,o.kt)("li",{parentName:"ul"},"Enter the URL to your Git repository.")),(0,o.kt)("p",null,"Finally, press the ",(0,o.kt)("em",{parentName:"p"},'"Add"')," button. This will bring you back to the ",(0,o.kt)("em",{parentName:"p"},'"Repositories"'),"\npage, where you will see your freshly created repository."),(0,o.kt)("p",null,"Each repository has several information fields. Find the ",(0,o.kt)("em",{parentName:"p"},'"ID"')," property of the\nrepository you just created and copy it."),(0,o.kt)("p",null,"Go back to your Git repository and edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-repo.yml"),". Ensure the\n",(0,o.kt)("inlineCode",{parentName:"p"},"repositoryID")," key found inside of the document has the value you just copied from the\nArtifact Hub web page."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The format of the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-repo.yml")," file is defined\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/artifacthub/hub/blob/master/docs/metadata/artifacthub-repo.yml"},"here"),"."),(0,o.kt)("p",{parentName:"admonition"},"Now it's a good time to do some further customizations to this file.")),(0,o.kt)("p",null,"Once you are done with the changes, commit the updated ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-repo.yml"),"\nfile and push it. During the next scan, Artifact Hub will find this file and\nit will add the\n",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/docs/topics/repositories/#verified-publisher"},(0,o.kt)("em",{parentName:"a"},'"Verified Publisher"')," badge"),"\nto you Artifact Hub repository."),(0,o.kt)("h2",{id:"keeping-artifact-hub-in-sync"},"Keeping Artifact Hub in Sync"),(0,o.kt)("p",null,"Do not forget to update the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-pkg.yml")," file\nevery time you release a new version of your policy."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacthub-repo.yml")," file do not need to be changed.")))}f.isMDXComponent=!0}}]);