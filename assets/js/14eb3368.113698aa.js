"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9576],{94556:(e,t,n)=>{n.d(t,{c:()=>g});n(11504);var s=n(65456),i=n(45864),r=n(35492),a=n(13376),c=n(10867),l=n(84357),o=n(70964),d=n(17624);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,o.c)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.c,{"aria-label":(0,l.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(c.c,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function p(e){let{children:t,active:n,index:i,addMicrodata:r}=e;return(0,d.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.c)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function g(){const e=(0,r.js)(),t=(0,a.Y5)();return e?(0,d.jsx)("nav",{className:(0,s.c)(i.W.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,l.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},76248:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});n(11504);var s=n(68900),i=n(35492),r=n(70964),a=n(65456),c=n(10867),l=n(95944),o=n(18136),d=n(84357),u=n(56448);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(17624);function b(e){let{href:t,children:n}=e;return(0,h.jsx)(c.c,{href:t,className:(0,a.c)("card padding--lg",m.cardContainer),children:n})}function x(e){let{href:t,icon:n,title:s,description:i}=e;return(0,h.jsxs)(b,{href:t,children:[(0,h.jsxs)(u.c,{as:"h2",className:(0,a.c)("text--truncate",m.cardTitle),title:s,children:[n," ",s]}),i&&(0,h.jsx)("p",{className:(0,a.c)("text--truncate",m.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,i.Gw)(t),s=function(){const{selectMessage:e}=(0,l.A)();return t=>e(t,(0,d.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(x,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,o.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i._4)(t.docId??void 0);return(0,h.jsx)(x,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(g,{item:t});case"category":return(0,h.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.wt)();return(0,h.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(f,{...e});const s=(0,i.ML)(t);return(0,h.jsx)("section",{className:(0,a.c)("row",n),children:s.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(v,{item:e})},t)))})}var N=n(34948),L=n(2136),_=n(68092),k=n(94556);const T={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function w(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(s.U7,{title:t.title,description:t.description,keywords:t.keywords,image:(0,r.c)(t.image)})}function y(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.wt)();return(0,h.jsxs)("div",{className:T.generatedIndexPage,children:[(0,h.jsx)(L.c,{}),(0,h.jsx)(k.c,{}),(0,h.jsx)(_.c,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(u.c,{as:"h1",className:T.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(j,{items:n.items,className:T.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(N.c,{previous:t.navigation.previous,next:t.navigation.next})})]})}function I(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(w,{...e}),(0,h.jsx)(y,{...e})]})}},34948:(e,t,n)=>{n.d(t,{c:()=>a});n(11504);var s=n(84357),i=n(70308),r=n(17624);function a(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(i.c,{...t,subLabel:(0,r.jsx)(s.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(i.c,{...n,subLabel:(0,r.jsx)(s.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},68092:(e,t,n)=>{n.d(t,{c:()=>l});n(11504);var s=n(65456),i=n(84357),r=n(45864),a=n(69920),c=n(17624);function l(e){let{className:t}=e;const n=(0,a.E)();return n.badge?(0,c.jsx)("span",{className:(0,s.c)(t,r.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(i.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},2136:(e,t,n)=>{n.d(t,{c:()=>p});n(11504);var s=n(65456),i=n(28264),r=n(10867),a=n(84357),c=n(15172),l=n(45864),o=n(94592),d=n(69920),u=n(17624);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(a.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(r.c,{to:n,onClick:s,children:(0,u.jsx)(a.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,i.c)(),{pluginId:a}=(0,c.UF)({failfast:!0}),{savePreferredVersionName:d}=(0,o.iy)(a),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,c.i8)(a),p=m??(g=x).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.c)(t,l.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(x,{className:t,versionMetadata:n}):null}},70308:(e,t,n)=>{n.d(t,{c:()=>a});n(11504);var s=n(65456),i=n(10867),r=n(17624);function a(e){const{permalink:t,title:n,subLabel:a,isNext:c}=e;return(0,r.jsxs)(i.c,{className:(0,s.c)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},95944:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(11504),i=n(28264);const r=["zero","one","two","few","many","other"];function a(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.c)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(n,t,e)}}}}]);