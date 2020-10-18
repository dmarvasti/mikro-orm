(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{345:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(6),o=(t(0),t(385)),i={title:"Result cache"},c={unversionedId:"caching",id:"version-4.2/caching",isDocsHomePage:!1,title:"Result cache",description:"MikroORM have simple result caching mechanism. It works with those methods of",source:"@site/versioned_docs/version-4.2/caching.md",slug:"/caching",permalink:"/docs/caching",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/caching.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1603052115,sidebar:"version-4.2/docs",previous:{title:"Using Query Builder",permalink:"/docs/query-builder"},next:{title:"Logging",permalink:"/docs/debugging"}},l=[],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MikroORM have simple result caching mechanism. It works with those methods of\n",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager"),": ",Object(o.b)("inlineCode",{parentName:"p"},"find()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"findOne()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"findAndCount()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"findOneOrFail()"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"count()"),", as well as with ",Object(o.b)("inlineCode",{parentName:"p"},"QueryBuilder")," result methods (including ",Object(o.b)("inlineCode",{parentName:"p"},"execute"),"). "),Object(o.b)("p",null,"By default, in memory cache is used, that is shared for the whole ",Object(o.b)("inlineCode",{parentName:"p"},"MikroORM"),"\ninstance. Default expiration is 1 second."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const res = await em.find(Book, { author: { name: 'Jon Snow' } }, {\n  populate: ['author', 'tags'], \n  cache: 50, // set expiration to 50ms\n  // cache: ['cache-id', 50], // set custom cache id and expiration\n  // cache: true, // use default cache id and expiration\n});\n")),Object(o.b)("p",null,"Or with query builder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const res = await em.createQueryBuilder(Book)\n  .where({ author: { name: 'Jon Snow' } })\n  .cache()\n  .getResultList();\n")),Object(o.b)("p",null,"We can change the default expiration as well as provide custom cache adapter in\nthe ORM configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const orm = await MikroORM.init({\n  resultCache: {\n    adapter: MemoryCacheAdapter,\n    expiration: 1000, // 1s\n    options: {},\n  },\n  // ...\n});\n")),Object(o.b)("p",null,"Custom cache adapters need to implement ",Object(o.b)("inlineCode",{parentName:"p"},"CacheAdapter")," interface. "))}s.isMDXComponent=!0},385:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);