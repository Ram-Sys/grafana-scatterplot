/*! For license information please see module.js.LICENSE.txt */
define(["react","d3","emotion","@grafana/data","@grafana/ui"],(function(e,t,n,a,l){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=l},function(e,t,n){"use strict";n.r(t);var a=n(3);function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,l,r=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=r.next()).done;)o.push(a.value)}catch(e){l={error:e}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(l)throw l.error}}return o}function r(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var o,i,s,c,u,d,f,m,b,p=n(0),g=n.n(p),h=n(2),v=n(4),x=n(1),y=function(e,t,n){var a;return a="bottom"===e?x.axisBottom(t):x.axisLeft(t),"logarithmic"===n&&(a=a.ticks(10,"~s")),a},w=function(e){var t=[];switch(e){case"plasma":t=["#0d0887","#5302a3","#8b0aa5","#b83289","#db5c68","#f48849","#febd2a","#f0f921"];break;case"turbo":t=["#23171b","#4076f5","#26d0cd","#5ffc73","#cbe839","#ff9b21","#d6390f","#900c00"];break;case"warm":t=["#6e40aa","#a83cb3","#df40a1","#ff507a","#ff704e","#f89b31","#d2c934","#aff05b"];break;case"spectral":t=["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"]}return t},O=function(e,t){return 0===e&&"logarithmic"===t?1e-6:e},j=function(e){return"linear"===e?x.scaleLinear:x.scaleLog},M=function(e,t){return"logarithmic"===e&&x.min(t)<0},E=Object(v.stylesFactory)((function(){return{wrapper:Object(h.css)(o||(o=r(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(h.css)(i||(i=r(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),legend:Object(h.css)(s||(s=r(["\n      height: 80%;\n      position: absolute;\n      right: 20px;\n      width: 12px;\n    "],["\n      height: 80%;\n      position: absolute;\n      right: 20px;\n      width: 12px;\n    "]))),legendLabel:Object(h.css)(c||(c=r(["\n      writing-mode: tb-rl;\n      transform: rotate(-180deg);\n      position: absolute;\n      left: 12px;\n      font-size: 0.8em;\n      height: 100%;\n    "],["\n      writing-mode: tb-rl;\n      transform: rotate(-180deg);\n      position: absolute;\n      left: 12px;\n      font-size: 0.8em;\n      height: 100%;\n    "]))),legendLabelFrom:Object(h.css)(u||(u=r(["\n      position: absolute;\n      text-align: start;\n      height: 100%;\n    "],["\n      position: absolute;\n      text-align: start;\n      height: 100%;\n    "]))),legendLabelTo:Object(h.css)(d||(d=r(["\n      position: absolute;\n      text-align: end;\n      height: 100%;\n    "],["\n      position: absolute;\n      text-align: end;\n      height: 100%;\n    "]))),btnModalClose:Object(h.css)(f||(f=r(["\n      margin-top: 20px;\n    "],["\n      margin-top: 20px;\n    "]))),bottomXaxisLabel:Object(h.css)(m||(m=r(["\n      font-size: 12px;\n      position: absolute;\n      bottom: 8px;\n      width: 100%;\n      text-align: center;\n    "],["\n      font-size: 12px;\n      position: absolute;\n      bottom: 8px;\n      width: 100%;\n      text-align: center;\n    "])))}})),L=function(e){var t=[],n=[];return e.forEach((function(e){var l=e.fields.find((function(e){return e.type===a.FieldType.number})),r=e.fields.find((function(e){return e.type===a.FieldType.time}));l&&r&&(t.push(l.values.toArray()),n.push(r.values.toArray()))})),[t,n]};n.d(t,"plugin",(function(){return S}));var S=new a.PanelPlugin((function(e){var t,n,a=e.options,o=e.data,i=e.width,s=e.height,c=E(),u=a.circleRadius,d=[];t=l(L(o.series),2),d=t[0],n=t[1];var f,m=50,S=30,P=i-(m+30),N=s-(S+50),R=d.length>1?x.min(d[0]):0,X=d.length>1?x.max(d[0]):100,k=j(a.scaleModeX)().domain([O(R,a.scaleModeX),X]).range([0,P]).clamp(!0).nice(),Y=y("bottom",k,a.scaleModeX),T=d.length>1?x.min(d[1]):0,C=d.length>1?x.max(d[1]):100,_=j(a.scaleModeY)().domain([O(T,a.scaleModeY),C]).range([N,0]).clamp(!0),z=y("left",_,a.scaleModeY),F=n.length>1?x.min(n[0]):0,V=n.length>1?x.max(n[0]):100,A=x.scaleQuantize().range(w(a.colorRange)).domain([F,V]),B={background:"linear-gradient(to top,"+w(a.colorRange).join(",")+")"},H=M(a.scaleModeX,d[0])||M(a.scaleModeY,d[1]),D=l(Object(p.useState)(H),2),W=D[0],Q=D[1],q=function(){Q(!1)};return g.a.createElement("div",{className:Object(h.cx)(c.wrapper,Object(h.css)(b||(b=r(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),i,s))},g.a.createElement(v.Modal,{className:"modal",title:"Warning",isOpen:W,onDismiss:q},"One of your time series contains negative values and can't be displayed on a logarithmic scale. Please select a linear scale.",g.a.createElement("div",null,g.a.createElement(v.Button,{className:c.btnModalClose,variant:"primary",onClick:q},"Close"))),g.a.createElement("svg",{className:c.svg,width:i,height:s,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 "+i+" "+s},g.a.createElement("g",{transform:"translate("+m+", "+S+")"},g.a.createElement("g",null,(f=n,d.length>1&&f.length>1?d[0].map((function(e,t){return g.a.createElement("circle",{key:"circle-"+t,transform:"translate("+k(e)+", "+_(d[1][t])+")",style:{fill:""+A(n[0][t])},"data-values":e+", "+d[1][t],r:u},g.a.createElement("title",null,"X: ",""+e,", Y: ",""+d[1][t]))})):g.a.createElement("text",{transform:"translate("+(P/2-20)+", "+(N/2-20)+")"},"No data"))),g.a.createElement("g",{transform:"translate(0, "+N+")",ref:function(e){x.select(e).call(Y)}}),g.a.createElement("g",{ref:function(e){x.select(e).call(z)}}))),g.a.createElement("div",{className:"axisLabel left-yaxis-label"},o.series.length>1?o.series[0].name:""),g.a.createElement("div",{className:c.bottomXaxisLabel},o.series.length>1?o.series[1].name:""),a.showLegend?g.a.createElement("div",{className:c.legend,style:B},g.a.createElement("div",{className:c.legendLabel},g.a.createElement("div",{className:c.legendLabelFrom},o.timeRange.from.format("Y-M-D HH:mm:ss")),g.a.createElement("div",{className:c.legendLabelTo},o.timeRange.to.format("Y-M-D HH:mm:ss")))):g.a.createElement("div",null))})).setPanelOptions((function(e){return e.addSelect({path:"colorRange",defaultValue:"warm",name:"Color Range",settings:{options:[{value:"plasma",label:"Plasma"},{value:"spectral",label:"Spectral"},{value:"turbo",label:"Turbo"},{value:"warm",label:"Warm"}]}}).addSelect({path:"circleRadius",defaultValue:"1",name:"Circle Radius",settings:{options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]}}).addRadio({path:"scaleModeX",defaultValue:"linear",name:"X-Axis: Scale Mode",settings:{options:[{value:"linear",label:"Linear"},{value:"logarithmic",label:"Logarithmic"}]}}).addRadio({path:"scaleModeY",defaultValue:"linear",name:"Y-Axis: Scale Mode",settings:{options:[{value:"linear",label:"Linear"},{value:"logarithmic",label:"Logarithmic"}]}}).addBooleanSwitch({path:"showLegend",defaultValue:!0,name:"Show Legend"})}))}])}));
//# sourceMappingURL=module.js.map