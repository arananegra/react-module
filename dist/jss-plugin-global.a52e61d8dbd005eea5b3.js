(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{iVe3:function(t,e,s){"use strict";var n=s("Fcif"),i=s("iBBK"),r="@global",o="@global ",u=function(){function t(t,e,s){for(var o in this.type="global",this.at=r,this.rules=void 0,this.options=void 0,this.key=void 0,this.isProcessed=!1,this.key=t,this.options=s,this.rules=new i.a(Object(n.a)({},s,{parent:this})),e)this.rules.add(o,e[o]);this.rules.process()}var e=t.prototype;return e.getRule=function(t){return this.rules.get(t)},e.addRule=function(t,e,s){var n=this.rules.add(t,e,s);return this.options.jss.plugins.onProcessRule(n),n},e.indexOf=function(t){return this.rules.indexOf(t)},e.toString=function(){return this.rules.toString()},t}(),l=function(){function t(t,e,s){this.type="global",this.at=r,this.options=void 0,this.rule=void 0,this.isProcessed=!1,this.key=void 0,this.key=t,this.options=s;var i=t.substr(o.length);this.rule=s.jss.createRule(i,e,Object(n.a)({},s,{parent:this}))}return t.prototype.toString=function(t){return this.rule?this.rule.toString(t):""},t}(),a=/\s*,\s*/g;function c(t,e){for(var s=t.split(a),n="",i=0;i<s.length;i++)n+=e+" "+s[i].trim(),s[i+1]&&(n+=", ");return n}e.a=function(){return{onCreateRule:function(t,e,s){if(!t)return null;if(t===r)return new u(t,e,s);if("@"===t[0]&&t.substr(0,o.length)===o)return new l(t,e,s);var n=s.parent;return n&&("global"===n.type||n.options.parent&&"global"===n.options.parent.type)&&(s.scoped=!1),!1===s.scoped&&(s.selector=t),null},onProcessRule:function(t){"style"===t.type&&(function(t){var e=t.options,s=t.style,i=s?s[r]:null;if(i){for(var o in i)e.sheet.addRule(o,i[o],Object(n.a)({},e,{selector:c(o,t.selector)}));delete s[r]}}(t),function(t){var e=t.options,s=t.style;for(var i in s)if("@"===i[0]&&i.substr(0,r.length)===r){var o=c(i.substr(r.length),t.selector);e.sheet.addRule(o,s[i],Object(n.a)({},e,{selector:o})),delete s[i]}}(t))}}}}}]);
//# sourceMappingURL=jss-plugin-global.a52e61d8dbd005eea5b3.js.map