(self.webpackChunkmdoc=self.webpackChunkmdoc||[]).push([[3042],{351:function(e,t,n){"use strict";n.r(t);var l=n(7294),r=n(2263),a=n(6742),o=n(2611),c=n(6730);t.default=function(){var e=(0,r.default)().siteConfig,t=(0,c.useVersions)(),n=(0,c.useLatestVersion)(),m=t.find((function(e){return"current"===e.name})),u=t.filter((function(e){return e!==n&&"current"!==e.name})),i=u.shift(),s=e.url?e.url:"https://github.com/"+e.organizationName+"/"+e.projectName;e.customFields&&e.customFields.repoUrl&&(s=e.customFields.repoUrl);var d=function(e){return e+"/overview"};return l.createElement(o.Z,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},l.createElement("main",{className:"container margin-vert--lg"},l.createElement("h1",null,"Docusaurus documentation versions"),i&&l.createElement("div",{className:"margin-bottom--lg"},l.createElement("h3",{id:"next"},"Current version (Stable)"),l.createElement("p",null,"Here you can find the documentation for current released version."),l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",null,i.name),l.createElement("td",null,l.createElement(a.Z,{to:""+d(i.path)},"Documentation")))))),l.createElement("div",{className:"margin-bottom--lg"},l.createElement("h3",{id:"latest"},"Next version (Unreleased)"),l.createElement("p",null,"Here you can find the documentation for work-in-process unreleased version."),l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",null,n.label),l.createElement("td",null,l.createElement(a.Z,{to:""+d(n.path)},"Documentation")))))),m!==n&&l.createElement("div",{className:"margin-bottom--lg"},l.createElement("h3",{id:"next"},"Next version (Unreleased)"),l.createElement("p",null,"Here you can find the documentation for unreleased version."),l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",null,"master"),l.createElement("td",null,l.createElement(a.Z,{to:""+d(m.path)},"Documentation")),l.createElement("td",null,l.createElement("a",{href:s},"Source Code")))))),u.length>0&&l.createElement("div",{className:"margin-bottom--lg"},l.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),l.createElement("p",null,"Here you can find documentation for previous versions of Docusaurus."),l.createElement("table",null,l.createElement("tbody",null,u.map((function(e){return l.createElement("tr",{key:e.name},l.createElement("th",null,e.label),l.createElement("td",null,l.createElement(a.Z,{to:""+d(e.path)},"Documentation")),l.createElement("td",null,l.createElement("a",{href:s+"/releases/tag/v"+e.name},"Release Notes")))})))))))}}}]);