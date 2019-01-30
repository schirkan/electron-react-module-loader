(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){},180:function(e,t,n){},183:function(e,t,n){},185:function(e,t,n){},187:function(e,t,n){},189:function(e,t,n){},193:function(e,t,n){},195:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var o,r,a,i=n(0),s=n.n(i),c=n(26),l=n(7),u=n.n(l),p=n(13),m=n(2),d=n(3),h=n(6),f=n(4),v=n(5),b=n(12),y=n(16),C=n(18),g=n.n(C),w=n(27),O=n.n(w),j=n(56),N=n(57),x=n(43),k={},S=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,o,r,a,i,s,c,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.moduleName+"."+t.serviceName+"."+t.methodName,o=n.replace("/","@"),r=A.inernalModuleContext.moduleApiPath+"/service/rpc/"+o,a={method:"POST",body:t&&JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8"}},i=void 0,s=void 0,e.prev=6,e.next=9,fetch(r,a);case 9:return l=e.sent,e.next=12,l.text();case 12:i=e.sent,l.status.toString().startsWith("2")?(s=i?JSON.parse(i):void 0)&&s.error&&(c=new Error(s.error)):c=new Error(i),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),c=e.t0;case 19:if(!c){e.next=24;break}throw s?console.error("RPC "+n,{args:t.args,result:s}):console.error("RPC "+n,{args:t.args,result:i,error:c&&c.message||c}),c;case 24:return console.log("RPC "+n,{args:t.args,result:s}),e.abrupt("return",s&&s.result);case 26:case"end":return e.stop()}},e,this,[[6,16]])}));return function(t){return e.apply(this,arguments)}}(),E=function(e,t){return new Proxy({},{get:function(n,o){return"then"===o?null:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i={serviceName:e,moduleName:t,methodName:o,args:r};return function(e,t){var n=Date.now(),o=n-5e3;return k[e]&&k[e].timestamp<o&&delete k[e],k[e]?console.log("RPC cache hit",e):k[e]={timestamp:n,result:t()},k[e].result}(JSON.stringify(i),function(){return S(i)})}}})},T=new(function(){function e(){var t=this;Object(m.a)(this,e),this.moduleController=E("ModuleController","reactron"),this.appController=E("AppController","reactron"),this.logController=E("LogController","reactron"),this.serviceController=E("ServiceController","reactron"),this.webComponentController=E("WebComponentController","reactron"),this.webPageController=E("WebPageController","reactron"),this._modulesCache=void 0,this._settingsCache=void 0,this._servicesCache=void 0,this._serviceOptionsCache={},this._pagesCache=void 0,this._componentsCache=void 0,this.modules={getModules:function(){return t._modulesCache||(t._modulesCache=t.moduleController.getModules())},addModule:function(e){return delete t._modulesCache,t.moduleController.addModule(e)},deleteModule:function(e){return delete t._modulesCache,t.moduleController.deleteModule(e)},updateModule:function(e){return delete t._modulesCache,t.moduleController.updateModule(e)},checkUpdates:this.moduleController.checkUpdates,rebuildModule:this.moduleController.rebuildModule},this.application={getServerInfo:this.appController.getServerInfo,exitApplication:this.appController.exitApplication,restartApplication:this.appController.restartApplication,shutdownSystem:this.appController.shutdownSystem,rebootSystem:this.appController.rebootSystem,resetApplication:this.appController.resetApplication,getSettings:function(){return t._settingsCache||(t._settingsCache=t.appController.getSettings())},setSettings:function(e){return t._settingsCache=e,t.appController.setSettings(e)}},this.log={getLogEntries:this.logController.getLogEntries},this.services={getAllServices:function(){return t._servicesCache||(t._servicesCache=t.serviceController.getAllServices())},getServiceOptions:function(e,n){var o=e+"."+n;return t._serviceOptionsCache[o]||(t._serviceOptionsCache[o]=t.serviceController.getServiceOptions(e,n))},setServiceOptions:function(e,n,o){var r=e+"."+n;return t._serviceOptionsCache[r]=o,t.serviceController.setServiceOptions(e,n,o)}},this.components={getWebComponentOptions:function(){return t._componentsCache||(t._componentsCache=t.webComponentController.getWebComponentOptions())},setWebComponentOptions:function(e){return delete t._componentsCache,t.webComponentController.setWebComponentOptions(e)},deleteWebComponentOptions:function(e){return delete t._componentsCache,t.webComponentController.deleteWebComponentOptions(e)}},this.pages={getWebPages:function(){return t._pagesCache||(t._pagesCache=t.webPageController.getWebPages())},setWebPage:function(e){return delete t._pagesCache,t.webPageController.setWebPage(e)},deleteWebPage:function(e){return delete t._pagesCache,t.webPageController.deleteWebPage(e)}}}return Object(d.a)(e,[{key:"clearCache",value:function(){delete this._modulesCache,delete this._settingsCache,delete this._servicesCache,this._serviceOptionsCache={},delete this._pagesCache,delete this._componentsCache}}]),e}()),M={clearAllSubscriptions:function(){},once:function(){},publish:function(){},subscribe:function(){},unsubscribe:function(){}},A=function(){function e(t){Object(m.a)(this,e),this.moduleName=t,this.services=T,this.moduleApiPath=void 0;var n=(t||"").replace("/","@");this.moduleApiPath="/api/modules/"+n}return Object(d.a)(e,[{key:"getService",value:function(){var t=Object(p.a)(u.a.mark(function t(n,o){var r,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=o||this.moduleName,a=n+"."+r,e.serviceCache[a]||(e.serviceCache[a]=E(n,r)),t.abrupt("return",Promise.resolve(e.serviceCache[a]));case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"electron",get:function(){return o}},{key:"topics",get:function(){return M}},{key:"settings",get:function(){return r}},{key:"moduleStorage",get:function(){var t="module."+this.moduleName;return a&&!e.moduleStoreCache[t]&&(e.moduleStoreCache[t]=new a({name:t})),e.moduleStoreCache[t]}}],[{key:"init",value:function(){var t=Object(p.a)(u.a.mark(function t(){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!o&&window.require&&(o=window.require("electron"),n=o.remote.require("./dist/server/BackendService").BackendService.instance,M=n.topics,a=o.remote.require("electron-store"),M.subscribe(y.topicNames.systemSettingsUpdated,function(e,t){r=t})),e.inernalModuleContext=new e("reactron"),r){t.next=6;break}return t.next=5,T.application.getSettings();case 5:r=t.sent;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}();A.inernalModuleContext=void 0,A.moduleStoreCache={},A.serviceCache={};var L=n(29),_=n(58),P=n(59),I=n(14),W=n(15),D=n(60),V=n.n(D),F=n(32),R=n(61),z=(n(84),n(86),{component:function(e){function t(){var e,n;Object(m.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).context=void 0,n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.createElement("section",{className:"CarouselLayout",style:this.props.style},i.createElement(R.Carousel,Object.assign({autoPlay:!0,infiniteLoop:!0,showThumbs:!1,showArrows:!1,showStatus:!1},this.props.options),this.props.items.map(function(t){return e.context.renderComponent({id:t})})))}}]),t}(i.Component),description:"Carousel Layout",displayName:"Carousel Layout",name:"CarouselLayout",type:"layout",fields:[{displayName:"Options",name:"options",valueType:"object",fields:[{displayName:"Interval in ms",name:"interval",valueType:"number",defaultValue:5e3,minValue:1e3,stepSize:50},{displayName:"Transition Time in ms",name:"transitionTime",valueType:"number",defaultValue:500,minValue:100,stepSize:50},{displayName:"Show Indicators",name:"showIndicators",valueType:"boolean",defaultValue:!0},{displayName:"Show Arrows",name:"showArrows",valueType:"boolean",defaultValue:!1},{displayName:"Show Status",name:"showStatus",valueType:"boolean",defaultValue:!1},{displayName:"Center Mode",name:"centerMode",valueType:"boolean",defaultValue:!1},{displayName:"Center Slide Percentage",name:"centerSlidePercentage",valueType:"number",defaultValue:70,minValue:1,maxValue:100,stepSize:1},{displayName:"Axis",name:"axis",valueType:"boolean",defaultValue:"horizontal",values:[{value:"horizontal",text:"horizontal"},{value:"vertical",text:"vertical"}]}],inputControl:function(e){var t=e.value&&e.value.interval;return i.createElement("span",null,"interval ",t," ms")}},{displayName:"Content",name:"items",valueType:"webComponent",isArray:!0},{displayName:"Carousel Style",name:"style",valueType:"style"}]}),U=n(23),G=(n(88),{component:function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).context=void 0,n.renderTile=n.renderTile.bind(Object(b.a)(Object(b.a)(n))),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"renderTile",value:function(e,t){var n=Object(U.a)({},this.props.tileStyle,e.style);return n.gridColumn=e.col.toString(),e.colspan>1&&(n.gridColumn+=" / span "+e.colspan),n.gridRow=e.row.toString(),e.rowspan>1&&(n.gridRow+=" / span "+e.rowspan),i.createElement("div",{className:"GridTile",key:t,style:n},this.context.renderComponent({id:e.content}))}},{key:"render",value:function(){return i.createElement("section",{className:"GridLayout",style:this.props.gridStyle},this.props.tiles.map(this.renderTile))}}]),t}(i.Component),description:"Grid Layout",displayName:"Grid Layout",name:"GridLayout",type:"layout",fields:[{displayName:"Grid Style",name:"gridStyle",valueType:"style"},{displayName:"Tile Style",name:"tileStyle",valueType:"style"},{displayName:"Grid tiles",name:"tiles",valueType:"object",isArray:!0,fields:[{displayName:"Row",name:"row",valueType:"number",defaultValue:1,stepSize:1,minValue:1,maxValue:20},{displayName:"Column",name:"col",valueType:"number",defaultValue:1,stepSize:1,minValue:1,maxValue:20},{displayName:"Row span",name:"rowspan",valueType:"number",defaultValue:1,stepSize:1,minValue:1,maxValue:20},{displayName:"Column span",name:"colspan",valueType:"number",defaultValue:1,stepSize:1,minValue:1,maxValue:20},{displayName:"Content",name:"content",valueType:"webComponent"},{displayName:"Style",name:"style",valueType:"style"}],inputControl:function(e){var t=e.value||{},n=e.getDefaultInputControl({displayName:"Content",name:"content",valueType:"webComponent"});return i.createElement("div",{style:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"}},"[ ",t.row," | ",t.col," | ",i.createElement(n,Object.assign({},e,{value:t.content}))," ]")}}]}),K=(n(90),{component:function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.createElement("iframe",{className:"ui-iframe",src:this.props.url})}}]),t}(i.Component),description:"IFrame Component",displayName:"IFrame",name:"IFrame",fields:[{displayName:"URL",name:"url",valueType:"string"}]}),q=(n(92),{component:function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).context=void 0,n.renderListItem=n.renderListItem.bind(Object(b.a)(Object(b.a)(n))),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"renderListItem",value:function(e,t){var n=Object(U.a)({},this.props.itemStyle,e.style);return i.createElement("div",{className:"ListItem",key:t,style:n},this.context.renderComponent({id:e.content}))}},{key:"render",value:function(){return i.createElement("section",{className:"ListLayout"},this.props.items.map(this.renderListItem))}}]),t}(i.Component),description:"List Layout",displayName:"List Layout",name:"ListLayout",type:"layout",fields:[{displayName:"List Style",name:"listStyle",valueType:"style"},{displayName:"Item Style",name:"itemStyle",valueType:"style"},{displayName:"List items",name:"items",valueType:"object",isArray:!0,fields:[{displayName:"Content",name:"content",valueType:"webComponent"},{displayName:"Style",name:"style",valueType:"style"}],inputControl:function(e){var t=e.value||{},n=e.getDefaultInputControl({displayName:"Content",name:"content",valueType:"webComponent"});return i.createElement(n,Object.assign({},e,{value:t.content}))}}]}),B=n(62),J=n.n(B),H=(n(174),{component:function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.createElement("section",{className:"MarkDown",style:this.props.style},i.createElement(J.a,{source:this.props.text}))}}]),t}(i.Component),description:"MarkDown Component",displayName:"MarkDown",name:"MarkDown",fields:[{displayName:"Text",name:"text",valueType:"string",textRows:10},{displayName:"Style",name:"style",valueType:"style"}]}),Q=(n(176),{component:function(e){function t(e){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).call(this,e))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.createElement("section",{className:"Notifications"},"Notifications")}}]),t}(i.Component),description:"Notifications",displayName:"Notifications",name:"Notifications",fields:[]}),X=n(42),Y=(n(178),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.createElement(X.a,{className:"RoundButton",to:this.props.to,role:"button"},this.props.children)}}]),t}(i.Component)),Z=n(63),$=n.n(Z),ee=(n(180),[q,z,G,{component:function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.application.getServerInfo().then(function(t){e.setState({info:t})})}},{key:"render",value:function(){var e;return this.state.info&&(e=i.createElement("div",{className:"info"},"To edit this page click Admin-Button or visit",i.createElement("br",null),i.createElement("br",null),i.createElement("i",null,"http://",this.state.info.ip,":3000/admin"))),i.createElement("section",{className:"Welcome"},i.createElement(Y,{to:"/admin"},i.createElement(W.FontAwesomeIcon,{icon:I.faCog}),"Admin"),i.createElement("img",{src:$.a,className:"logo",alt:"logo"}),i.createElement("div",{className:"title"},"Welcome to Reactron"),e)}}]),t}(i.Component),description:"Welcome Component",displayName:"Welcome",name:"Welcome",fields:[]},H,Q,K]),te=window.System,ne={};ne.react=i,ne["react-dom"]=c,ne["react-router-dom"]=F,ne.numeral={default:O.a},ne.moment={default:g.a},ne["moment-timezone"]={default:V.a},ne["@fortawesome/fontawesome-svg-core"]=L,ne["@fortawesome/free-solid-svg-icons"]=I,ne["@fortawesome/free-regular-svg-icons"]=P,ne["@fortawesome/free-brands-svg-icons"]=_,ne["@fortawesome/react-fontawesome"]=W,ne["@schirkan/reactron-interfaces"]=y,window.require&&(ne.electron=window.require("electron")),Object.keys(ne).forEach(function(e){var t=ne[e];te.register(e,[],function(e){return{execute:function(){return e(t)}}})});var oe=new(function(){function e(){Object(m.a)(this,e),this.allComponentsLoaded=!1,this.moduleComponents={reactron:ee}}return Object(d.a)(e,[{key:"getModuleComponents",value:function(){var e=Object(p.a)(u.a.mark(function e(t){var n,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.moduleComponents[t]){e.next=10;break}return e.next=3,T.modules.getModules();case 3:if(n=e.sent,o=n.find(function(e){return e.name===t})){e.next=8;break}return console.error("Module not found: "+t),e.abrupt("return");case 8:return e.next=10,this.registerModuleComponents(o);case 10:return e.abrupt("return",this.moduleComponents[t]);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"registerModuleComponents",value:function(){var e=Object(p.a)(u.a.mark(function e(t){var n,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.browserFile){e.next=3;break}return console.log("Module has no browserFile: "+t.name),e.abrupt("return");case 3:if(!this.moduleComponents[t.name]){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,console.log(t.browserFile),e.next=9,te.import("\\"+t.browserFile);case 9:n=e.sent,(o=n.components)&&"object"===typeof o&&Array.isArray(o)&&(this.moduleComponents[t.name]=o),console.log("Components loaded for module: "+t.name),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error("Error loading components for module: "+t.name,e.t0);case 18:case"end":return e.stop()}},e,this,[[5,15]])}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllComponents",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t,n,o,r,a,i,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.allComponentsLoaded){e.next=2;break}return e.abrupt("return",this.moduleComponents);case 2:return e.next=4,T.modules.getModules();case 4:t=e.sent,n=!0,o=!1,r=void 0,e.prev=8,a=t[Symbol.iterator]();case 10:if(n=(i=a.next()).done){e.next=17;break}return s=i.value,e.next=14,this.registerModuleComponents(s);case 14:n=!0,e.next=10;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(8),o=!0,r=e.t0;case 23:e.prev=23,e.prev=24,n||null==a.return||a.return();case 26:if(e.prev=26,!o){e.next=29;break}throw r;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return this.allComponentsLoaded=!0,e.abrupt("return",this.moduleComponents);case 33:case"end":return e.stop()}},e,this,[[8,19,23,31],[24,,26,30]])}));return function(){return e.apply(this,arguments)}}()}]),e}()),re=n(28),ae=n.n(re),ie=(n(183),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.createElement("section",{className:ae()("Loading",{center:this.props.center})},i.createElement(W.FontAwesomeIcon,{icon:I.faSpinner,size:this.props.iconSize,spin:!0}),this.props.text&&i.createElement("div",{className:"text"},this.props.text))}}]),t}(i.Component));ie.defaultProps={iconSize:"4x"};n(185);var se=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.createElement("div",{className:"PageNotFound"},i.createElement("h1",null,i.createElement(W.FontAwesomeIcon,{icon:I.faQuestionCircle})," 404"),i.createElement("h2",null,"No page defined for path: ",this.props.location.pathname),i.createElement(Y,{to:"/admin"},i.createElement(W.FontAwesomeIcon,{icon:I.faCog})," Admin"),i.createElement(Y,{to:"/"},i.createElement(W.FontAwesomeIcon,{icon:I.faHome})," Home"))}}]),t}(i.Component),ce=function(){function e(t,n){Object(m.a)(this,e),this.topics=t,this.source=n}return Object(d.a)(e,[{key:"log",value:function(e,t,n){this.topics&&this.topics.publish(y.topicNames.log,{source:this.source,severity:e,message:t,data:n})}},{key:"error",value:function(t,n){this.log("error",t,e.prepareData(n))}},{key:"warning",value:function(t,n){this.log("warning",t,e.prepareData(n))}},{key:"info",value:function(t,n){this.log("information",t,e.prepareData(n))}},{key:"debug",value:function(t,n){this.log("debug",t,e.prepareData(n))}}],[{key:"prepareData",value:function(e){return e instanceof Error?Object(U.a)({},e,{name:e.name,message:e.message,stack:e.stack}):e}}]),e}(),le=function(e){function t(e){var n;Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e.moduleName))).renderLoading=void 0,n.renderComponent=void 0,n.componentLoader=oe,n.log=void 0,n.componentName=void 0;var o=e.id||e.moduleName+"."+e.componentName;return n.log=new ce(n.topics,o),n.componentName=e.componentName,n.renderComponent=function(e){var t=e.id+"."+e.moduleName+"."+e.componentName;return s.a.createElement(de,Object.assign({},e,{key:t}))},n.renderLoading=function(e,t){return s.a.createElement(ie,{text:e,iconSize:t})},n}return Object(v.a)(t,e),t}(A),ue=s.a.createContext(new le({moduleName:"",parentId:"",componentName:"",id:""})),pe=(n(187),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=[];return this.props.id&&e.push("Id: "+this.props.id),this.props.componentName&&e.push("Component: "+this.props.componentName),this.props.moduleName&&e.push("Module: "+this.props.moduleName),i.createElement("section",{className:"ComponentNotFound"},i.createElement(W.FontAwesomeIcon,{icon:I.faExclamationTriangle,size:this.props.iconSize}),i.createElement("div",{className:"text"},"Component not found: ",e.join(" | ")),i.createElement(Y,{to:"/admin"},i.createElement(W.FontAwesomeIcon,{icon:I.faCog})," Admin"))}}]),t}(i.Component));pe.defaultProps={iconSize:"4x"};var me=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={error:null},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e),console.log(t),this.setState({error:e})}},{key:"render",value:function(){return this.state.error?i.createElement("span",{style:{color:"red"}},"Something went wrong."):this.props.children}}]),t}(i.Component),de=(n(189),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.id===e.id&&this.props.moduleName===e.moduleName&&this.props.componentName===e.componentName&&this.props.options===e.options||this.loadComponent()}},{key:"componentDidMount",value:function(){this.loadComponent()}},{key:"loadComponent",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t,n,o,r,a,i=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.props.id){e.next=8;break}return e.next=4,T.components.getWebComponentOptions();case 4:n=e.sent,t=n.find(function(e){return e.id===i.props.id}),e.next=9;break;case 8:this.props.moduleName&&this.props.componentName&&(t={id:"",parentId:"",moduleName:this.props.moduleName,componentName:this.props.componentName,options:this.props.options});case 9:if(t){e.next=12;break}return this.setState({componentFound:!1}),e.abrupt("return");case 12:return e.next=14,oe.getModuleComponents(t.moduleName);case 14:if(o=e.sent){e.next=18;break}return this.setState({componentFound:!1}),e.abrupt("return");case 18:if(r=t.componentName,(a=o.find(function(e){return e.name===r}))&&a.component){e.next=23;break}return this.setState({componentFound:!1}),e.abrupt("return");case 23:this.setState({componentContext:new le(t),componentDefinition:a,componentOptions:t,componentFound:!0}),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0),this.setState({componentFound:!1});case 30:case"end":return e.stop()}},e,this,[[0,26]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=i.createElement(ie,{center:!0});if(!1===this.state.componentFound&&(e=i.createElement(pe,this.props)),this.state.componentDefinition&&this.state.componentDefinition.component&&this.state.componentContext){var t=this.state.componentDefinition.component;t.contextType||(t.contextType=ue);var n=this.state.componentOptions&&this.state.componentOptions.options||{};e=i.createElement(ue.Provider,{value:this.state.componentContext},i.createElement(t,n))}var o=ae()("WebComponent",this.props.className);return i.createElement("section",{className:o,style:this.props.style},i.createElement(me,null,e))}}]),t}(i.Component)),he=(n(191),n(192),n(193),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).reloadTimer=void 0,n.reloadWait=2e3,n.state={},n.reload=n.reload.bind(Object(b.a)(Object(b.a)(n))),n.triggerReload=n.triggerReload.bind(Object(b.a)(Object(b.a)(n))),n.onKeyDown=n.onKeyDown.bind(Object(b.a)(Object(b.a)(n))),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:this.subscribeTopics(),document.addEventListener("keydown",this.onKeyDown);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.unsubscribeTopics(),document.removeEventListener("keydown",this.onKeyDown)}},{key:"onKeyDown",value:function(e){var t=window.event?window.event:e;65===t.keyCode&&t.ctrlKey&&t.altKey&&(window.location.href="/admin")}},{key:"subscribeTopics",value:function(){A.inernalModuleContext.topics&&(A.inernalModuleContext.topics.subscribe(y.topicNames.pagesUpdated,this.triggerReload),A.inernalModuleContext.topics.subscribe(y.topicNames.componentsUpdated,this.triggerReload),A.inernalModuleContext.topics.subscribe(y.topicNames.systemSettingsUpdated,this.triggerReload))}},{key:"unsubscribeTopics",value:function(){A.inernalModuleContext.topics&&(A.inernalModuleContext.topics.unsubscribe(y.topicNames.pagesUpdated,this.triggerReload),A.inernalModuleContext.topics.unsubscribe(y.topicNames.componentsUpdated,this.triggerReload),A.inernalModuleContext.topics.unsubscribe(y.topicNames.systemSettingsUpdated,this.triggerReload))}},{key:"init",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.init();case 2:return g.a.locale(A.inernalModuleContext.settings.lang),O.a.locale(A.inernalModuleContext.settings.lang),e.next=6,oe.getAllComponents();case 6:return e.next=8,T.pages.getWebPages();case 8:return t=e.sent,e.abrupt("return",this.setState({pages:t}));case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"triggerReload",value:function(){window.clearTimeout(this.reloadTimer),this.reloadTimer=window.setTimeout(this.reload,this.reloadWait)}},{key:"reload",value:function(){console.log("reload"),T.clearCache(),this.init()}},{key:"renderPage",value:function(e,t){return function(){return i.createElement("section",{className:"WebPage",style:t},i.createElement(de,{id:e}))}}},{key:"render",value:function(){var e=this,t=i.createElement(ie,{text:"Loading Reactron...",center:!0});return this.state.pages&&(t=i.createElement(j.a,null,i.createElement(N.a,null,this.state.pages.map(function(t){return i.createElement(x.a,{key:t.path,path:t.path,exact:"/"===t.path,component:e.renderPage(t.webComponentId,t.style)})}),i.createElement(x.a,{component:se})))),i.createElement("section",{className:"App"},t)}}]),t}(i.Component));n(195);c.render(i.createElement(me,null,i.createElement(he,null)),document.getElementById("root"))},63:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},65:function(e,t,n){e.exports=n(197)},86:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){}},[[65,2,1]]]);
//# sourceMappingURL=main.039bdeba.chunk.js.map