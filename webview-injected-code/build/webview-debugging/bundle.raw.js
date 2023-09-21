(()=>{"use strict";var r={593:(r,o)=>{o.__esModule=!0,o.logToBridge=void 0,o.logToBridge=function(r,o){var t;null===(t=window.ReactNativeWebView)||void 0===t||t.postMessage(JSON.stringify({source:"MobileApp",type:"CONSOLE",data:{type:r,log:o}}))}},15:function(r,o,t){var e=this&&this.__assign||function(){return e=Object.assign||function(r){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n]);return r},e.apply(this,arguments)},n=this&&this.__spreadArray||function(r,o,t){if(t||2===arguments.length)for(var e,n=0,i=o.length;n<i;n++)!e&&n in o||(e||(e=Array.prototype.slice.call(o,0,n)),e[n]=o[n]);return r.concat(e||Array.prototype.slice.call(o))};o.__esModule=!0;var i=t(593);try{(0,i.logToBridge)("log",["Patching console with bridge events"]);var a=console,l=function(r){for(var o=[],t=1;t<arguments.length;t++)o[t-1]=arguments[t];Array.isArray(o)&&0!==o.length&&(a[r].apply(a,o),(0,i.logToBridge)(r,o))};console=e(e({},a),{log:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return l.apply(void 0,n(["log"],r,!1))},debug:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return l.apply(void 0,n(["debug"],r,!1))},info:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return l.apply(void 0,n(["info"],r,!1))},warn:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return l.apply(void 0,n(["warn"],r,!1))},error:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return l.apply(void 0,n(["error"],r,!1))}})}catch(r){(0,i.logToBridge)("error",["Patching console log failed",JSON.stringify(r)])}}},o={};!function t(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return r[e].call(i.exports,i,i.exports,t),i.exports}(15)})();