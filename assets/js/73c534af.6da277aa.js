"use strict";(self.webpackChunkmdoc=self.webpackChunkmdoc||[]).push([[4746],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2071:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"prepare-environment",title:"\u51c6\u5907\u73af\u5883",sidebar_label:"\u51c6\u5907\u73af\u5883"},l=void 0,c={unversionedId:"prepare-environment",id:"version-0.4.0/prepare-environment",isDocsHomePage:!1,title:"\u51c6\u5907\u73af\u5883",description:"\u5728 Linux \u4e0a\u6784\u5efa Crystal MD \u4e4b\u524d\uff0c\u8bf7\u5728\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4ee5\u4e0b\u6784\u5efa\u5de5\u5177\uff1a",source:"@site/versioned_docs/version-0.4.0/prepare-environment.md",sourceDirName:".",slug:"/prepare-environment",permalink:"/MDoc/docs/0.4.0/prepare-environment",editUrl:"https://github.com/misa-md/MDoc/blob/master/versioned_docs/version-0.4.0/prepare-environment.md",tags:[],version:"0.4.0",lastUpdatedBy:"genshen",lastUpdatedAt:1609984025,formattedLastUpdatedAt:"1/7/2021",frontMatter:{id:"prepare-environment",title:"\u51c6\u5907\u73af\u5883",sidebar_label:"\u51c6\u5907\u73af\u5883"},sidebar:"version-0.4.0/docs",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/MDoc/docs/0.4.0/getting-started"},next:{title:"\u83b7\u53d6\u6e90\u4ee3\u7801",permalink:"/MDoc/docs/0.4.0/get-source-code"}},u=[{value:"CMake",id:"cmake",children:[]},{value:"c++\u7f16\u8bd1\u5668",id:"c\u7f16\u8bd1\u5668",children:[]},{value:"MPI\u73af\u5883",id:"mpi\u73af\u5883",children:[]},{value:"pkg",id:"pkg",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Linux \u4e0a\u6784\u5efa Crystal MD \u4e4b\u524d\uff0c\u8bf7\u5728\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4ee5\u4e0b\u6784\u5efa\u5de5\u5177\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://cmake.org"},"CMake"),", 3.15 \u53ca\u4ee5\u4e0a\u7248\u672c;"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301C++11\u7279\u6027\u7684C++\u7f16\u8bd1\u5668;"),(0,o.kt)("li",{parentName:"ul"},"MPI\u73af\u5883;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/genshen/pkg"},"pkg")," c/c++\u4f9d\u8d56\u7ba1\u7406\u5de5\u5177;")),(0,o.kt)("h2",{id:"cmake"},"CMake"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7cfb\u7edf\u4e2d\u672a\u5b89\u88c5CMake\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167",(0,o.kt)("a",{parentName:"p",href:"https://cmake.org/"},"\u76f8\u5173\u6587\u6863"),"\u8fdb\u884c\u4e0b\u8f7d\u5b89\u88c5\u3002"),(0,o.kt)("h2",{id:"c\u7f16\u8bd1\u5668"},"c++\u7f16\u8bd1\u5668"),(0,o.kt)("p",null,"\u4e3a\u4e86\u7f16\u8bd1Crystal MD\u7a0b\u5e8f\uff0c\u8981\u6c42\u4f60\u7684\u7cfb\u7edf\u4e0a\u8981\u5df2\u7ecf\u5b89\u88c5\u4e86\u76f8\u5173\u7684C++\u7f16\u8bd1\u5668\u3002\n\u5404\u7c7b\u7f16\u8bd1\u5668\u5bf9c++11\u7279\u6027\u7684\u652f\u6301\u60c5\u51b5\u53ef\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"http://zh.cppreference.com/w/cpp/compiler_support#cpp11%7D"},"\u76f8\u5173\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u6d4b\u8bd5\u8fc7\u4ee5\u4e0b\u7f16\u8bd1\u5668\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GUN g++ 5.1\u53ca\u4ee5\u540e\u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},"LLVM Clang++ 3.3\u53ca\u4ee5\u4e0a\u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},"Intel icc 2017")),(0,o.kt)("h2",{id:"mpi\u73af\u5883"},"MPI\u73af\u5883"),(0,o.kt)("p",null,"\u8981\u6c42\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4e86\u652f\u6301MPI 2.0\u53ca\u4ee5\u540e\u6807\u51c6\u7684MPI\u73af\u5883\u3002"),(0,o.kt)("h2",{id:"pkg"},"pkg"),(0,o.kt)("p",null,"\u8fdb\u5165",(0,o.kt)("a",{parentName:"p",href:"https://github.com/genshen/pkg/releases"},"https://github.com/genshen/pkg/releases"),"\uff0c\n\u4e0b\u8f7d\u5bf9\u5e94\u67b6\u6784\uff0c\u5bf9\u5e94\u7248\u672c(\u4e00\u822c\u4e3a\u6700\u65b0\u7248\u672c\u5373\u53ef)\u7684pkg\u6587\u4ef6\u5230\u7cfb\u7edf\u4e2d\uff0c\u5e76\u786e\u4fddpkg\u53ef\u6267\u884c\u7a0b\u5e8f\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982, \u5bf9\u4e8e64\u4f4damd64\u67b6\u6784\u7684Linux\u64cd\u4f5c\u7cfb\u7edf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.local/bin\nwget https://github.com/genshen/pkg/releases/download/v0.4.1/pkg-linux-amd64 -O ~/.local/bin/pkg\nchmod +x ~/.local/bin/pkg\nexport PATH=~/.local/bin:$PATH\n")))}m.isMDXComponent=!0}}]);