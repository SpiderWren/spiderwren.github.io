(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{105:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},107:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(103),o=a(3),s=a(101),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=d({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=d({},a,{backgroundColor:null}),l};function b(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var y=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=d({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?d({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(s))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,o=d({},b(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?d({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),m(this,"tokenize",(function(e,t,a,n){var l={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,o=0,s=[],c=[s];o>-1;){for(;(r=n[o]++)<l[o];){var i=void 0,m=t[o],d=a[o][r];if("string"==typeof d?(m=o>0?m:["plain"],i=d):(m=g(m,d.type),d.alias&&(m=g(m,d.alias)),i=d.content),"string"==typeof i){var h=i.split(p),b=h.length;s.push({types:m,content:h[0]});for(var y=1;y<b;y++)u(s),c.push(s=[]),s.push({types:m,content:h[y]})}else o++,t.push(m),a.push(i),n.push(0),l.push(i.length)}o--,t.pop(),a.pop(),n.pop(),l.pop()}return u(s),c}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var v=a(105),f=a.n(v),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=a(109),N=a(100);var j=()=>{const{prism:e}=Object(N.useThemeConfig)(),{isDarkTheme:t}=Object(k.a)(),a=e.theme||E,n=e.darkTheme||a;return t?n:a},_=a(102),O=a(57),T=a.n(O);const x=/{([\d,-]+)}/,C=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)};function w({children:e,className:t,metastring:a,title:r}){const{prism:c}=Object(N.useThemeConfig)(),[m,d]=Object(n.useState)(!1),[p,u]=Object(n.useState)(!1);Object(n.useEffect)((()=>{u(!0)}),[]);const g=Object(N.parseCodeBlockTitle)(a)||r,h=Object(n.useRef)(null);let b=[];const v=j(),E=Array.isArray(e)?e.join(""):e;if(a&&x.test(a)){const e=a.match(x)[1];b=f()(e).filter((e=>e>0))}let k=t&&t.replace(/language-/,"");!k&&c.defaultLanguage&&(k=c.defaultLanguage);let O=E.replace(/\n$/,"");if(0===b.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(k),a=E.replace(/\n$/,"").split("\n");let n;for(let l=0;l<a.length;){const r=l+1,o=a[l].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":n=r;break;case"highlight-end":e+=`${n}-${r-1},`}a.splice(l,1)}else l+=1}b=f()(e),O=a.join("\n")}const w=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),n&&n.focus()}(O),d(!0),setTimeout((()=>d(!1)),2e3)};return l.a.createElement(y,Object(o.a)({},i,{key:String(p),theme:v,code:O,language:k}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:r})=>l.a.createElement("div",{className:T.a.codeBlockContainer},g&&l.a.createElement("div",{style:t,className:T.a.codeBlockTitle},g),l.a.createElement("div",{className:Object(s.a)(T.a.codeBlockContent,k)},l.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:g})},l.a.createElement("div",{className:T.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return b.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(o.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(o.a)({key:t},r({token:e,key:t}))))))})))),l.a.createElement("button",{ref:h,type:"button","aria-label":Object(_.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(T.a.copyButton),onClick:w},m?l.a.createElement(_.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.a.createElement(_.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(58);var L=a(59),P=a.n(L);var B=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(N.useThemeConfig)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[P.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(_.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.a.createElement(e,a)};const I={code:e=>{const{children:t}=e;return Object(n.isValidElement)(t)?t:t.includes("\n")?l.a.createElement(w,e):l.a.createElement("code",e)},a:e=>l.a.createElement(r.a,e),pre:e=>{var t;const{children:a}=e;return Object(n.isValidElement)(null==a||null===(t=a.props)||void 0===t?void 0:t.children)?null==a?void 0:a.props.children:l.a.createElement(w,Object(n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")};t.a=I},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),l=a.n(n),r=a(101),o=a(103),s=a(60),c=a.n(s);function i({sidebar:e}){return 0===e.items.length?null:l.a.createElement("div",{className:Object(r.a)(c.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),l.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(o.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},115:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(101),o=a(104),s=a(102),c=a(103),i=a(107),m=a(114),d=a(62),p=a.n(d),u=a(100);t.a=function(e){const t=function(){const{selectMessage:e}=Object(u.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:n,metadata:d,truncated:g,isBlogPostPage:h=!1}=e,{date:b,formattedDate:y,permalink:v,tags:f,readingTime:E}=d,{author:k,title:N,image:j,keywords:_}=n,O=n.author_url||n.authorURL,T=n.author_title||n.authorTitle,x=n.author_image_url||n.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{keywords:_,image:j}),l.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2";return l.a.createElement("header",null,l.a.createElement(e,{className:Object(r.a)("margin-bottom--sm",p.a.blogPostTitle)},h?N:l.a.createElement(c.a,{to:v},N)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:b,className:p.a.blogPostDate},y,E&&l.a.createElement(l.a.Fragment,null," \xb7 ",t(E)))),l.a.createElement("div",{className:"avatar margin-vert--md"},x&&l.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:O},l.a.createElement("img",{src:x,alt:k})),l.a.createElement("div",{className:"avatar__intro"},k&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(c.a,{href:O},k)),l.a.createElement("small",{className:"avatar__subtitle"},T)))))})(),l.a.createElement("div",{className:"markdown"},l.a.createElement(o.a,{components:i.a},a)),(f.length>0||g)&&l.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),f.map((({label:e,permalink:t})=>l.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},e)))),g&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(c.a,{to:d.permalink,"aria-label":`Read more about ${N}`},l.a.createElement("strong",null,l.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},116:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(101);var o=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,o=!1;const s=document.getElementsByClassName(e);for(;a<s.length&&!o;){const e=s[a],{href:c}=e,i=decodeURIComponent(c.substring(c.indexOf("#")+1));n.id===i&&(l&&l.classList.remove(t),e.classList.add(t),r(e),o=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=a(61),c=a.n(s);const i="table-of-contents__link";function m({toc:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return o(i,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(c.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{toc:e}))}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),l=a.n(n),r=a(102),o=a(3),s=a(101),c=a(63),i=a.n(c);var m=({className:e,...t})=>l.a.createElement("svg",Object(o.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(s.a)(i.a.iconEdit,e),"aria-label":"Edit page"},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function d({editUrl:e}){return l.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(m,null),l.a.createElement(r.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},99:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(106),o=a(115),s=a(102),c=a(103);var i=function(e){const{nextItem:t,prevItem:a}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(s.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(s.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(s.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(110),d=a(116),p=a(118),u=a(100);t.default=function(e){const{content:t,sidebar:a}=e,{frontMatter:n,metadata:s}=t,{title:c,description:g,nextItem:h,prevItem:b,editUrl:y}=s,{hide_table_of_contents:v}=n;return l.a.createElement(r.a,{title:c,description:g,wrapperClassName:u.ThemeClassNames.wrapper.blogPages,pageClassName:u.ThemeClassNames.page.blogPostPage},t&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(m.a,{sidebar:a})),l.a.createElement("main",{className:"col col--7"},l.a.createElement(o.a,{frontMatter:n,metadata:s,isBlogPostPage:!0},l.a.createElement(t,null)),l.a.createElement("div",null,y&&l.a.createElement(p.a,{editUrl:y})),(h||b)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(i,{nextItem:h,prevItem:b}))),!v&&t.toc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(d.a,{toc:t.toc})))))}}}]);