"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5908],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(3117),i=(t(7294),t(3905));const r={sidebar_label:"Using Pod Security Admission with Kubewarden",title:""},o="Using Pod Security Admission with Kubewarden",s={unversionedId:"tasksDir/pod-security-admission-with-kubewarden",id:"tasksDir/pod-security-admission-with-kubewarden",title:"",description:"Starting from Kubernetes 1.25 release, the Pod Security Policies have been removed",source:"@site/docs/tasksDir/pod-security-admission-with-kubewarden.md",sourceDirName:"tasksDir",slug:"/tasksDir/pod-security-admission-with-kubewarden",permalink:"/tasksDir/pod-security-admission-with-kubewarden",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/tasksDir/pod-security-admission-with-kubewarden.md",tags:[],version:"current",lastUpdatedAt:1674225242,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{sidebar_label:"Using Pod Security Admission with Kubewarden",title:""},sidebar:"docs",previous:{title:"PSP Migration",permalink:"/tasksDir/psp-migration"},next:{title:"Architecture",permalink:"/architecture"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-pod-security-admission-with-kubewarden"},"Using Pod Security Admission with Kubewarden"),(0,i.kt)("p",null,"Starting from Kubernetes 1.25 release, the Pod Security Policies have been removed\nand have been replaced by ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security Admission"),",\nalso known as ",(0,i.kt)("em",{parentName:"p"},'"PSA"'),"."),(0,i.kt)("p",null,"Pod Security Admission has been created to simplify the process of securing Pods\ndefined inside of Kubernetes clusters. Because of that it doesn't expose the\nsame amount of configuration knobs provided by Pod Security Policies."),(0,i.kt)("p",null,"Pod Security Admission works at the Namespace level and provides three profiles\nthat can be applied: ",(0,i.kt)("inlineCode",{parentName:"p"},"privileged"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"baseline")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"restricted"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"privileged")," profile has few limitations, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"restricted")," one is the\none that tightens Pod permissions."),(0,i.kt)("p",null,"In addition to choosing the profile to be used, the Kubernetes operators can decide\nwhat kind of action is going to be performed by Pod Security Admission controller\nonce a violation is detected. The possible actions are: ",(0,i.kt)("inlineCode",{parentName:"p"},"enforce"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"audit")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"warn"),"."),(0,i.kt)("p",null,"Pod Security Admission is not a full replacement for the old Pod Security Policies.\nCurrently, with the Kubernetes 1.25 release, it suffers the following limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No mutation capabilities"),(0,i.kt)("li",{parentName:"ul"},"Higher level objects (like ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Job"),") are evaluated only when the\n",(0,i.kt)("inlineCode",{parentName:"li"},"audit")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"warn")," modes are enabled")),(0,i.kt)("p",null,"A solution like Kubewarden can be used to ",(0,i.kt)("strong",{parentName:"p"},"integrate")," a Pod Security Admission\nprofile to workaround these limitations."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Kubewarden can be used to replace all the previous Pod Security Policies\nas shown ",(0,i.kt)("a",{parentName:"p",href:"/tasksDir/psp-migration"},"here"),".\nHowever, the goal of this article is to demonstrate how Kubewarden can complement\nthe new Pod Security Admission.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Now let's take a look in the example creating a Namespace where the most restrictive Pod Security Admission policies are enforced:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: my-namespace\n  labels:\n    pod-security.kubernetes.io/enforce: restricted\n    pod-security.kubernetes.io/enforce-version: v1.25\nEOF\n")),(0,i.kt)("p",null,"This PSA profile does not allow the creation of containers that run their\napplication as root user.\nIn other words, when defining a container, the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsNonRoot")," attribute must be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\nand the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," one cannot be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("p",null,"Therefore, the following resource will not reach its desired state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n          runAsUser: 0\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n        ports:\n        - containerPort: 80\nEOF\n')),(0,i.kt)("p",null,"If we check the Deployment, we can see the Pod Security Admission is preventing\nits Pod from being created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl get deploy -n my-namespace nginx-deployment -o json | jq ".status.conditions[] | select(.reason == \\"FailedCreate\\")"\n{\n  "lastTransitionTime": "2022-10-28T19:09:56Z",\n  "lastUpdateTime": "2022-10-28T19:09:56Z",\n  "message": "pods \\"nginx-deployment-5f98b4db8c-2m96l\\" is forbidden: violates PodSecurity \\"restricted:v1.25\\": runAsUser=0 (container \\"nginx\\" must not set runAsUser=0)",\n  "reason": "FailedCreate",\n  "status": "True",\n  "type": "ReplicaFailure"\n}\n')),(0,i.kt)("p",null,"The user can fix this issue removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," from the container definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n\n        ports:\n        - containerPort: 80\nEOF\n')),(0,i.kt)("p",null,"This time the Pod Security Admission will allow the Pod to be created, but the Pod creation will still fail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods -n my-namespace\nNAME                                READY   STATUS                       RESTARTS   AGE\nnginx-deployment-57d8568bbb-h4bx7   0/1     CreateContainerConfigError   0          47s\n\n")),(0,i.kt)("p",null,"That's happening because the container definition didn't specify which user should\nbe used when starting a program inside of the container. That results with the\nthe root user (",(0,i.kt)("inlineCode",{parentName:"p"},"0"),") being used, which is not allowed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsNonRoot")," directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl get pods -n my-namespace nginx-deployment-57d8568bbb-h4bx7 -o json | jq ".status.containerStatuses"\n[\n  {\n    "image": "nginx:1.14.2",\n    "imageID": "",\n    "lastState": {},\n    "name": "nginx",\n    "ready": false,\n    "restartCount": 0,\n    "started": false,\n    "state": {\n      "waiting": {\n        "message": "container has runAsNonRoot and image will run as root (pod: \\"nginx-deployment-57d8568bbb-8mvkc_my-namespace(add7bcc5-3d23-43d0-94e9-6e78f887a53f)\\", container: nginx)",\n        "reason": "CreateContainerConfigError"\n      }\n    }\n  }\n]\n')),(0,i.kt)("p",null,"This is where Kubewarden can help. In this case the\n","[",(0,i.kt)("inlineCode",{parentName:"p"},"user-group-policy"),"]","\n(",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/kubewarden/user-group-psp/user-group-psp"},"https://artifacthub.io/packages/kubewarden/user-group-psp/user-group-psp"),")\npolicy can be used to mutate the Deployment definition, configuring a default\nuser to be used to all the containers that omit this information.\nOr even enforcing a user ID range. Let's apply the policy:\nThe policy even allows to set a user ID range:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This example assumes the Kubewarden stack is already installed inside of your\nKubernetes cluster.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"/quick-start"},"QuickStart")," article\nfor more details.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: user-group-psp\nspec:\n  policyServer: default\n  module: registry://ghcr.io/kubewarden/policies/user-group-psp:latest\n  rules:\n  - apiGroups: ["", "apps"]\n    apiVersions: ["v1"]\n    resources: ["pods", "deployments"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      overwrite: false\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 4000\n          max: 5000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny"\nEOF\n')),(0,i.kt)("p",null,"Before moving forward, we have to wait for the policy to be active. This can be\nchecked with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get clusteradmissionpolicy.policies.kubewarden.io/user-group-psp\n")),(0,i.kt)("p",null,"Once the policy is active, we can re-create the Deployment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl delete deployment -n my-namespace nginx-deployment && \\\nkubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n\n        ports:\n        - containerPort: 80\nEOF\n')),(0,i.kt)("p",null,"This time the Deployment definition is mutated by Kubewarden's policy, allowing\nthe Pod to be started.\nThe container defined inside of the Pod will have a default ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl get pods -n my-namespace nginx-deployment-57d8568bbb-nv8fj -o json | jq ".spec.containers[].securityContext"\n{\n  "allowPrivilegeEscalation": false,\n  "capabilities": {\n    "drop": [\n      "ALL"\n    ]\n  },\n  "runAsNonRoot": true,\n  "runAsUser": 1000,\n  "seccompProfile": {\n    "type": "RuntimeDefault"\n  }\n}\n')),(0,i.kt)("p",null,"The Kubewarden integration can do even more in this scenario: it can\nvalidate the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," provided by the users."),(0,i.kt)("p",null,"For example, the following resource will be reject by the Kubewarden policy\nwe previously enforced:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment2\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n          runAsUser: 7000\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n        ports:\n        - containerPort: 80\nEOF\n')),(0,i.kt)("p",null,"The rejection happens because the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," value is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"7000"),",\nwhich is outside of the ranges allowed by the policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl get deploy -n my-namespace nginx-deployment -o json | jq ".status.conditions[] | select(.reason == \\"FailedCreate\\")"\n{\n  "lastTransitionTime": "2022-10-28T19:22:04Z",\n  "lastUpdateTime": "2022-10-28T19:22:04Z",\n  "message": "admission webhook \\"clusterwide-user-group-psp.kubewarden.admission\\" denied the request: User ID outside defined ranges",\n  "reason": "FailedCreate",\n  "status": "True",\n  "type": "ReplicaFailure"\n}\n')),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Pod Security Admission provide an easy way to secure Kubernetes clusters.\nThe main goal of PSA is simplicity, because of that they do not offer all the\npower and flexibility of the previous Pod Security Policies."),(0,i.kt)("p",null,"Kubewarden can be used together with Pod Security Admission to fill this gap."))}u.isMDXComponent=!0}}]);