/*! For license information please see module.js.LICENSE.txt */
define(["react","d3","emotion","@grafana/data","@grafana/ui"],(function(e,t,n,a,r){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t);var a=n(3);function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,l=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)o.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return o}function l(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var o,i,s,c,u,f,d,m=n(0),g=n.n(m),p=n(2),b=n(4),h=n(1),v=function(e){var t=[];switch(e){case"plasma":t=["#0d0887","#5302a3","#8b0aa5","#b83289","#db5c68","#f48849","#febd2a","#f0f921"];break;case"turbo":t=["#23171b","#4076f5","#26d0cd","#5ffc73","#cbe839","#ff9b21","#d6390f","#900c00"];break;case"warm":t=["#6e40aa","#a83cb3","#df40a1","#ff507a","#ff704e","#f89b31","#d2c934","#aff05b"];break;case"spectral":t=["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"]}return t},x=function(e,t){return 0===e&&"logarithmic"===t?1e-6:e},w=function(e){return"linear"===e?h.scaleLinear:h.scaleLog},y=function(e,t,n){var a;return a="bottom"===e?h.axisBottom(t):h.axisLeft(t),"logarithmic"===n&&(a=a.ticks(10,"~s")),a},j=function(e){var t=[],n=[];return e.forEach((function(e){var r=e.fields.find((function(e){return e.type===a.FieldType.number})),l=e.fields.find((function(e){return e.type===a.FieldType.time}));r&&l&&(t.push(r.values.toArray()),n.push(l.values.toArray()))})),[t,n]},O=Object(b.stylesFactory)((function(){return{wrapper:Object(p.css)(i||(i=l(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(p.css)(s||(s=l(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),legend:Object(p.css)(c||(c=l(["\n      height: 80%;\n      position: absolute;\n      right: 20px;\n      width: 12px;\n    "],["\n      height: 80%;\n      position: absolute;\n      right: 20px;\n      width: 12px;\n    "]))),legendLabel:Object(p.css)(u||(u=l(["\n      writing-mode: tb-rl;\n      transform: rotate(-180deg);\n      position: absolute;\n      left: 12px;\n      font-size: 0.8em;\n      height: 100%;\n    "],["\n      writing-mode: tb-rl;\n      transform: rotate(-180deg);\n      position: absolute;\n      left: 12px;\n      font-size: 0.8em;\n      height: 100%;\n    "]))),legendLabelFrom:Object(p.css)(f||(f=l(["\n      position: absolute;\n      text-align: start;\n      height: 100%;\n    "],["\n      position: absolute;\n      text-align: start;\n      height: 100%;\n    "]))),legendLabelTo:Object(p.css)(d||(d=l(["\n      position: absolute;\n      text-align: end;\n      height: 100%;\n    "],["\n      position: absolute;\n      text-align: end;\n      height: 100%;\n    "])))}}));n.d(t,"plugin",(function(){return L}));var L=new a.PanelPlugin((function(e){var t,n,a=e.options,i=e.data,s=e.width,c=e.height,u=O(),f=a.circleRadius,d=[];t=r(j(i.series),2),d=t[0],n=t[1];var m=50,b=30,L=50,E=s-(m+30),M=c-(b+L),S=d.length>1?h.min(d[0]):0,P=d.length>1?h.max(d[0]):100,R=w(a.scaleModeX)().domain([x(S,a.scaleModeX),P]).range([0,E]).clamp(!0).nice(),N=y("bottom",R,a.scaleModeX),k=d.length>1?h.min(d[1]):0,Y=d.length>1?h.max(d[1]):100,T=w(a.scaleModeY)().domain([x(k,a.scaleModeY),Y]).range([M,0]).clamp(!0),X=y("left",T,a.scaleModeY),_=n.length>1?h.min(n[0]):0,F=n.length>1?h.max(n[0]):100,V=h.scaleQuantize().range(v(a.colorRange)).domain([_,F]),A={background:"linear-gradient(to top,"+v(a.colorRange).join(",")+")"},H=d.length>1&&n.length>1;return console.log(i),g.a.createElement("div",{className:Object(p.cx)(u.wrapper,Object(p.css)(o||(o=l(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),s,c))},g.a.createElement("svg",{className:u.svg,width:s,height:c,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 "+s+" "+c},g.a.createElement("g",{transform:"translate("+m+", "+b+")"},g.a.createElement("g",null,H?d[0].map((function(e,t){return g.a.createElement("circle",{key:"circle-"+t,transform:"translate("+R(e)+", "+T(d[1][t])+")",style:{fill:""+V(n[0][t])},"data-values":e+", "+d[1][t],r:f},g.a.createElement("title",null,"X: ",""+e,", Y: ",""+d[1][t]))})):g.a.createElement("text",{transform:"translate("+(E/2-20)+", "+(M/2-20)+")"},"No data")),g.a.createElement("g",{transform:"translate(0, "+M+")",ref:function(e){h.select(e).call(N)}}),g.a.createElement("text",{className:"axisLabel",transform:"translate("+E/2+", "+(M+L-10)+")"},i.series.length>1?i.series[0].name:""),g.a.createElement("g",{ref:function(e){h.select(e).call(X)}}),g.a.createElement("text",{className:"axisLabel",transform:"rotate(-90), translate("+-M/2+", "+-(m-10)+")"},i.series.length>1?i.series[1].name:""))),a.showLegend?g.a.createElement("div",{className:u.legend,style:A},g.a.createElement("div",{className:u.legendLabel},g.a.createElement("div",{className:u.legendLabelFrom},i.timeRange.from.format("Y-M-D HH:mm:ss")),g.a.createElement("div",{className:u.legendLabelTo},i.timeRange.to.format("Y-M-D HH:mm:ss")))):g.a.createElement("div",null))})).setPanelOptions((function(e){return e.addSelect({path:"colorRange",defaultValue:"warm",name:"Color Range",settings:{options:[{value:"plasma",label:"Plasma"},{value:"spectral",label:"Spectral"},{value:"turbo",label:"Turbo"},{value:"warm",label:"Warm"}]}}).addSelect({path:"circleRadius",defaultValue:"1",name:"Circle Radius",settings:{options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]}}).addRadio({path:"scaleModeX",defaultValue:"linear",name:"X-Axis: Scale Mode",settings:{options:[{value:"linear",label:"Linear"},{value:"logarithmic",label:"Logarithmic"}]}}).addRadio({path:"scaleModeY",defaultValue:"linear",name:"Y-Axis: Scale Mode",settings:{options:[{value:"linear",label:"Linear"},{value:"logarithmic",label:"Logarithmic"}]}}).addBooleanSwitch({path:"showLegend",defaultValue:!0,name:"Show Legend"})}))}])}));
//# sourceMappingURL=module.js.map