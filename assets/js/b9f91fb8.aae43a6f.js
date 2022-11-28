"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5349],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(o),p=n,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9203:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=o(3117),n=(o(7294),o(3905));const i={id:"module-intro",sidebar_position:2},a="Introduction to the CAF super-module",l={unversionedId:"module/module-intro",id:"module/module-intro",title:"Introduction to the CAF super-module",description:"What is CAF module?",source:"@site/docs/module/intro.md",sourceDirName:"module",slug:"/module/module-intro",permalink:"/documentation/docs/next/module/module-intro",draft:!1,editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/module/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"module-intro",sidebar_position:2},sidebar:"cafSidebar",previous:{title:"Code-less composition across state files",permalink:"/documentation/docs/next/fundamentals/lz-composition"},next:{title:"Introduction to CAF Terraform provider",permalink:"/documentation/docs/next/provider/provider-intro"}},u={},s=[{value:"What is CAF module?",id:"what-is-caf-module",level:2},{value:"Why using CAF module?",id:"why-using-caf-module",level:2},{value:"Where to find CAF module?",id:"where-to-find-caf-module",level:2},{value:"How to use CAF module?",id:"how-to-use-caf-module",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction-to-the-caf-super-module"},"Introduction to the CAF super-module"),(0,n.kt)("h2",{id:"what-is-caf-module"},"What is CAF module?"),(0,n.kt)("p",null,"We have seen numerous customers spending much time creating their own Terraform modules in their own private repositories, and while it's hard to find the right balance of what components should be inside a single module, it is a very time consuming task. As part of our engagements with customers we took an approach enabled by Terraform 0.13 to develop the concept of a super-module, similar to the concept of superapp, allowing you to create configurations files for any Azure components while focusing on one tested logic. The advantage of having one module is to be able to easily compose across all components inside the module: i.e., you can describe a virtual machine, how it is linked to a virtual network, a Key Vault etc."),(0,n.kt)("p",null,"The core concept of the module is to compose an environment based on Terraform configuration files instead of writing ad-hoc code for each component."),(0,n.kt)("p",null,'We want to promote "',(0,n.kt)("strong",{parentName:"p"},"infrastructure-as-data"),'" in favor of ad-hoc "infrastructure-as-code", in order to make composition more accessible and rely on a strong community to write code.'),(0,n.kt)("h2",{id:"why-using-caf-module"},"Why using CAF module?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Accelerate innovation with the community: many users use and contribute to the module across the world, have tested it and are using it in production, enabling your DevOps teams to focus on delivering value instead of coding and testing a module."),(0,n.kt)("li",{parentName:"ul"},"Composition across all Azure components enables you to create new architectures with unprecendented speed.")),(0,n.kt)("h2",{id:"where-to-find-caf-module"},"Where to find CAF module?"),(0,n.kt)("p",null,"The CAF Terraform module is verified by Hashicorp and is present in the ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/aztfmod"},"Hashicorp Terraform registry here")," and you can contribute to the module ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aztfmod/terraform-azurerm-caf"},"on GitHub.")),(0,n.kt)("h2",{id:"how-to-use-caf-module"},"How to use CAF module?"),(0,n.kt)("p",null,"It is important to note that although the module is part of the CAF landing zones solution, it can be used similarly to any other standalone module, directly from the Terraform registry or from pipelines.   This is demonstrated in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.hashicorp.com/blog/go-big-or-go-small-building-in-azure-caf-with-terraform-cloud"},"Hashicorp blog post"),"."),(0,n.kt)("p",null,"Just invoke the module using the following call:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-terraform"},'module "caf" {\n  source  = "aztfmod/caf/azurerm"\n  version = "~>5.5.0"\n\n  #feed me with variables!\n}\n')),(0,n.kt)("img",{src:"https://aztfmod.azureedge.net/media/standalone.gif",width:"720"})," ",(0,n.kt)("br",null)," ",(0,n.kt)("br",null))}d.isMDXComponent=!0}}]);