"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={id:"rover-init",sidebar_position:4},i="Rover Init",l={unversionedId:"rover/rover-init",id:"rover/rover-init",title:"Rover Init",description:"Introduction to rover init",source:"@site/docs/rover/init.md",sourceDirName:"rover",slug:"/rover/rover-init",permalink:"/documentation/docs/next/rover/rover-init",draft:!1,editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/rover/init.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rover-init",sidebar_position:4},sidebar:"cafSidebar",previous:{title:"Rover commands",permalink:"/documentation/docs/next/rover/rover-commands"},next:{title:"Rover Ignite",permalink:"/documentation/docs/next/rover/rover-ignite"}},s={},c=[{value:"Introduction to rover init",id:"introduction-to-rover-init",level:2},{value:"Minimal version of rover",id:"minimal-version-of-rover",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rover-init"},"Rover Init"),(0,a.kt)("h2",{id:"introduction-to-rover-init"},"Introduction to rover init"),(0,a.kt)("p",null,"Rover ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," allows you to deploy a mini launchpad to support a development environment with remote state on Azure storage accounts. "),(0,a.kt)("p",null,"This includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A keyvault to store secrets and variables."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"level 0")," storage account to store state files.")),(0,a.kt)("p",null,"This is not meant for production use and should be used for development environments only. It allows you to test simple cross landing-zones state files composition."),(0,a.kt)("p",null,"To run ",(0,a.kt)("inlineCode",{parentName:"p"},"rover init"),", you can use your interactive login principal or a service principal. Rover init does not require owner permissions on the subscription."),(0,a.kt)("h2",{id:"minimal-version-of-rover"},"Minimal version of rover"),(0,a.kt)("p",null,"Rover init has been released in rover version 2211, you can get it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull aztfmod/rover:1.3.4-2211.0822\n")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The following arguments and commands are available with ",(0,a.kt)("inlineCode",{parentName:"p"},"rover init"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"\xdf Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-env"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the development environment."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-env contoso-sandpit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-location"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"australiaeast"),(0,a.kt)("td",{parentName:"tr",align:null},"Azure region where to deploy the mini launchpad."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-location southeastasia"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--clean"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"The command purges the resources related to the specified environment."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-env contoso-sandpit --clean"))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login to rover")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rover login\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create the mini launchpad")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rover init -env mydeenv -location southeastasia\n")),(0,a.kt)("p",null,"A typical output will look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@calling process_actions\nCreating resource group: mydeenv-launchpad\n/subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad\n  ...created\nCreating storage account: stmydeenv4bcbeaa59ecfbb7\n/subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad/providers/Microsoft.Storage/storageAccounts/stmydeenv4bcbeaa59ecfbb7\nstg created\n"/subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad/providers/Microsoft.Storage/storageAccounts/stmydeenv4bcbeaa59ecfbb7/providers/Microsoft.Authorization/roleAssignments/358edcb8-02da-4217-b5d0-e78256fd9e61"\nrole\ntrue\nCreating keyvault: kvmydeenv0b7dd4b74870e27\n"/subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad/providers/Microsoft.KeyVault/vaults/kvmydeenv0b7dd4b74870e27"\n"https://kvmydeenv0b7dd4b74870e27.vault.azure.net/secrets/subscription-id/4a959bb9b35b4b9a912a3dc253999d30"\n"https://kvmydeenv0b7dd4b74870e27.vault.azure.net/secrets/tenant-id/84862b8c1c6f46dab3e74d13cb1746f4"\n  ...created\n\nYou can deploy a landingzone with the rover by running:\n  rover -lz [landingzone_folder_name] -a [plan|apply|destroy|validate|refresh|graph|import|output|taint|untaint|\'state list\'|\'state rm\'|\'state show\']\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Use the mini launchpad to deploy your test resources")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," rover -lz /tf/caf/landingzones/caf_solution -level level0 \\\n  -var-folder /tf/caf/configuration/hub \\\n  -env mydeenv \\\n  -tfstate mydeenv-test1.tfstate \\\n  -a plan  \n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Cleanup the dev environment (optional)")),(0,a.kt)("p",null,"You can cleanup your development environment after use or keep it running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rover init -env mydeenv --clean\n")),(0,a.kt)("p",null,"You can verify that an environment has been correctly deleted by reviewing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"@calling process_actions\nDeleting launchpad caf_environment=mydeenv and caf_tfstate=level0 in /subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad\nLaunchpad caf_environment=mydeenv and caf_tfstate=level0 in mydeenv-launchpad destroyed.\n\u279c  caf git:(main) \n")))}u.isMDXComponent=!0}}]);