(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hf={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(r){(function(e,t){r.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Xd,function(e,t){var n=[],i=Object.getPrototypeOf,s=n.slice,o=n.flat?function(a){return n.flat.call(a)}:function(a){return n.concat.apply([],a)},l=n.push,u=n.indexOf,f={},h=f.toString,p=f.hasOwnProperty,g=p.toString,y=g.call(Object),S={},E=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},x=function(c){return c!=null&&c===c.window},v=e.document,I={type:!0,src:!0,nonce:!0,noModule:!0};function R(a,c,m){m=m||v;var _,b,M=m.createElement("script");if(M.text=a,c)for(_ in I)b=c[_]||c.getAttribute&&c.getAttribute(_),b&&M.setAttribute(_,b);m.head.appendChild(M).parentNode.removeChild(M)}function N(a){return a==null?a+"":typeof a=="object"||typeof a=="function"?f[h.call(a)]||"object":typeof a}var X="3.7.1",B=/HTML$/i,d=function(a,c){return new d.fn.init(a,c)};d.fn=d.prototype={jquery:X,constructor:d,length:0,toArray:function(){return s.call(this)},get:function(a){return a==null?s.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var c=d.merge(this.constructor(),a);return c.prevObject=this,c},each:function(a){return d.each(this,a)},map:function(a){return this.pushStack(d.map(this,function(c,m){return a.call(c,m,c)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(a,c){return(c+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(a,c){return c%2}))},eq:function(a){var c=this.length,m=+a+(a<0?c:0);return this.pushStack(m>=0&&m<c?[this[m]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},d.extend=d.fn.extend=function(){var a,c,m,_,b,M,A=arguments[0]||{},F=1,U=arguments.length,G=!1;for(typeof A=="boolean"&&(G=A,A=arguments[F]||{},F++),typeof A!="object"&&!E(A)&&(A={}),F===U&&(A=this,F--);F<U;F++)if((a=arguments[F])!=null)for(c in a)_=a[c],!(c==="__proto__"||A===_)&&(G&&_&&(d.isPlainObject(_)||(b=Array.isArray(_)))?(m=A[c],b&&!Array.isArray(m)?M=[]:!b&&!d.isPlainObject(m)?M={}:M=m,b=!1,A[c]=d.extend(G,M,_)):_!==void 0&&(A[c]=_));return A},d.extend({expando:"jQuery"+(X+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var c,m;return!a||h.call(a)!=="[object Object]"?!1:(c=i(a),c?(m=p.call(c,"constructor")&&c.constructor,typeof m=="function"&&g.call(m)===y):!0)},isEmptyObject:function(a){var c;for(c in a)return!1;return!0},globalEval:function(a,c,m){R(a,{nonce:c&&c.nonce},m)},each:function(a,c){var m,_=0;if(Y(a))for(m=a.length;_<m&&c.call(a[_],_,a[_])!==!1;_++);else for(_ in a)if(c.call(a[_],_,a[_])===!1)break;return a},text:function(a){var c,m="",_=0,b=a.nodeType;if(!b)for(;c=a[_++];)m+=d.text(c);return b===1||b===11?a.textContent:b===9?a.documentElement.textContent:b===3||b===4?a.nodeValue:m},makeArray:function(a,c){var m=c||[];return a!=null&&(Y(Object(a))?d.merge(m,typeof a=="string"?[a]:a):l.call(m,a)),m},inArray:function(a,c,m){return c==null?-1:u.call(c,a,m)},isXMLDoc:function(a){var c=a&&a.namespaceURI,m=a&&(a.ownerDocument||a).documentElement;return!B.test(c||m&&m.nodeName||"HTML")},merge:function(a,c){for(var m=+c.length,_=0,b=a.length;_<m;_++)a[b++]=c[_];return a.length=b,a},grep:function(a,c,m){for(var _,b=[],M=0,A=a.length,F=!m;M<A;M++)_=!c(a[M],M),_!==F&&b.push(a[M]);return b},map:function(a,c,m){var _,b,M=0,A=[];if(Y(a))for(_=a.length;M<_;M++)b=c(a[M],M,m),b!=null&&A.push(b);else for(M in a)b=c(a[M],M,m),b!=null&&A.push(b);return o(A)},guid:1,support:S}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=n[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,c){f["[object "+c+"]"]=c.toLowerCase()});function Y(a){var c=!!a&&"length"in a&&a.length,m=N(a);return E(a)||x(a)?!1:m==="array"||c===0||typeof c=="number"&&c>0&&c-1 in a}function L(a,c){return a.nodeName&&a.nodeName.toLowerCase()===c.toLowerCase()}var P=n.pop,z=n.sort,ce=n.splice,j="[\\x20\\t\\r\\n\\f]",pe=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g");d.contains=function(a,c){var m=c&&c.parentNode;return a===m||!!(m&&m.nodeType===1&&(a.contains?a.contains(m):a.compareDocumentPosition&&a.compareDocumentPosition(m)&16))};var me=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ue(a,c){return c?a==="\0"?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a}d.escapeSelector=function(a){return(a+"").replace(me,ue)};var oe=v,Q=l;(function(){var a,c,m,_,b,M=Q,A,F,U,G,le,de=d.expando,J=0,ye=0,nt=na(),Ct=na(),pt=na(),cn=na(),en=function(D,k){return D===k&&(b=!0),0},Qn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ei="(?:\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Mt="\\["+j+"*("+ei+")(?:"+j+"*([*^$|!~]?=)"+j+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ei+"))|)"+j+"*\\]",ar=":("+ei+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Mt+")*)|.*)\\)|)",Pt=new RegExp(j+"+","g"),Kt=new RegExp("^"+j+"*,"+j+"*"),ys=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),fo=new RegExp(j+"|>"),ti=new RegExp(ar),Ss=new RegExp("^"+ei+"$"),ni={ID:new RegExp("^#("+ei+")"),CLASS:new RegExp("^\\.("+ei+")"),TAG:new RegExp("^("+ei+"|[*])"),ATTR:new RegExp("^"+Mt),PSEUDO:new RegExp("^"+ar),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+Qn+")$","i"),needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},Di=/^(?:input|select|textarea|button)$/i,Ii=/^h\d$/i,Un=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ho=/[+~]/,gi=new RegExp("\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\([^\\r\\n\\f])","g"),_i=function(D,k){var K="0x"+D.slice(1)-65536;return k||(K<0?String.fromCharCode(K+65536):String.fromCharCode(K>>10|55296,K&1023|56320))},Bd=function(){Ni()},kd=ra(function(D){return D.disabled===!0&&L(D,"fieldset")},{dir:"parentNode",next:"legend"});function Hd(){try{return A.activeElement}catch{}}try{M.apply(n=s.call(oe.childNodes),oe.childNodes),n[oe.childNodes.length].nodeType}catch{M={apply:function(k,K){Q.apply(k,s.call(K))},call:function(k){Q.apply(k,s.call(arguments,1))}}}function Ut(D,k,K,re){var fe,Te,Ie,ze,Ne,yt,Je,rt=k&&k.ownerDocument,St=k?k.nodeType:9;if(K=K||[],typeof D!="string"||!D||St!==1&&St!==9&&St!==11)return K;if(!re&&(Ni(k),k=k||A,U)){if(St!==11&&(Ne=Un.exec(D)))if(fe=Ne[1]){if(St===9)if(Ie=k.getElementById(fe)){if(Ie.id===fe)return M.call(K,Ie),K}else return K;else if(rt&&(Ie=rt.getElementById(fe))&&Ut.contains(k,Ie)&&Ie.id===fe)return M.call(K,Ie),K}else{if(Ne[2])return M.apply(K,k.getElementsByTagName(D)),K;if((fe=Ne[3])&&k.getElementsByClassName)return M.apply(K,k.getElementsByClassName(fe)),K}if(!cn[D+" "]&&(!G||!G.test(D))){if(Je=D,rt=k,St===1&&(fo.test(D)||ys.test(D))){for(rt=ho.test(D)&&po(k.parentNode)||k,(rt!=k||!S.scope)&&((ze=k.getAttribute("id"))?ze=d.escapeSelector(ze):k.setAttribute("id",ze=de)),yt=bs(D),Te=yt.length;Te--;)yt[Te]=(ze?"#"+ze:":scope")+" "+ia(yt[Te]);Je=yt.join(",")}try{return M.apply(K,rt.querySelectorAll(Je)),K}catch{cn(D,!0)}finally{ze===de&&k.removeAttribute("id")}}}return Ql(D.replace(pe,"$1"),k,K,re)}function na(){var D=[];function k(K,re){return D.push(K+" ")>c.cacheLength&&delete k[D.shift()],k[K+" "]=re}return k}function zn(D){return D[de]=!0,D}function Er(D){var k=A.createElement("fieldset");try{return!!D(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function zd(D){return function(k){return L(k,"input")&&k.type===D}}function Vd(D){return function(k){return(L(k,"input")||L(k,"button"))&&k.type===D}}function Zl(D){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===D:k.disabled===D:k.isDisabled===D||k.isDisabled!==!D&&kd(k)===D:k.disabled===D:"label"in k?k.disabled===D:!1}}function or(D){return zn(function(k){return k=+k,zn(function(K,re){for(var fe,Te=D([],K.length,k),Ie=Te.length;Ie--;)K[fe=Te[Ie]]&&(K[fe]=!(re[fe]=K[fe]))})})}function po(D){return D&&typeof D.getElementsByTagName<"u"&&D}function Ni(D){var k,K=D?D.ownerDocument||D:oe;return K==A||K.nodeType!==9||!K.documentElement||(A=K,F=A.documentElement,U=!d.isXMLDoc(A),le=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&oe!=A&&(k=A.defaultView)&&k.top!==k&&k.addEventListener("unload",Bd),S.getById=Er(function(re){return F.appendChild(re).id=d.expando,!A.getElementsByName||!A.getElementsByName(d.expando).length}),S.disconnectedMatch=Er(function(re){return le.call(re,"*")}),S.scope=Er(function(){return A.querySelectorAll(":scope")}),S.cssHas=Er(function(){try{return A.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),S.getById?(c.filter.ID=function(re){var fe=re.replace(gi,_i);return function(Te){return Te.getAttribute("id")===fe}},c.find.ID=function(re,fe){if(typeof fe.getElementById<"u"&&U){var Te=fe.getElementById(re);return Te?[Te]:[]}}):(c.filter.ID=function(re){var fe=re.replace(gi,_i);return function(Te){var Ie=typeof Te.getAttributeNode<"u"&&Te.getAttributeNode("id");return Ie&&Ie.value===fe}},c.find.ID=function(re,fe){if(typeof fe.getElementById<"u"&&U){var Te,Ie,ze,Ne=fe.getElementById(re);if(Ne){if(Te=Ne.getAttributeNode("id"),Te&&Te.value===re)return[Ne];for(ze=fe.getElementsByName(re),Ie=0;Ne=ze[Ie++];)if(Te=Ne.getAttributeNode("id"),Te&&Te.value===re)return[Ne]}return[]}}),c.find.TAG=function(re,fe){return typeof fe.getElementsByTagName<"u"?fe.getElementsByTagName(re):fe.querySelectorAll(re)},c.find.CLASS=function(re,fe){if(typeof fe.getElementsByClassName<"u"&&U)return fe.getElementsByClassName(re)},G=[],Er(function(re){var fe;F.appendChild(re).innerHTML="<a id='"+de+"' href='' disabled='disabled'></a><select id='"+de+"-\r\\' disabled='disabled'><option selected=''></option></select>",re.querySelectorAll("[selected]").length||G.push("\\["+j+"*(?:value|"+Qn+")"),re.querySelectorAll("[id~="+de+"-]").length||G.push("~="),re.querySelectorAll("a#"+de+"+*").length||G.push(".#.+[+~]"),re.querySelectorAll(":checked").length||G.push(":checked"),fe=A.createElement("input"),fe.setAttribute("type","hidden"),re.appendChild(fe).setAttribute("name","D"),F.appendChild(re).disabled=!0,re.querySelectorAll(":disabled").length!==2&&G.push(":enabled",":disabled"),fe=A.createElement("input"),fe.setAttribute("name",""),re.appendChild(fe),re.querySelectorAll("[name='']").length||G.push("\\["+j+"*name"+j+"*="+j+`*(?:''|"")`)}),S.cssHas||G.push(":has"),G=G.length&&new RegExp(G.join("|")),en=function(re,fe){if(re===fe)return b=!0,0;var Te=!re.compareDocumentPosition-!fe.compareDocumentPosition;return Te||(Te=(re.ownerDocument||re)==(fe.ownerDocument||fe)?re.compareDocumentPosition(fe):1,Te&1||!S.sortDetached&&fe.compareDocumentPosition(re)===Te?re===A||re.ownerDocument==oe&&Ut.contains(oe,re)?-1:fe===A||fe.ownerDocument==oe&&Ut.contains(oe,fe)?1:_?u.call(_,re)-u.call(_,fe):0:Te&4?-1:1)}),A}Ut.matches=function(D,k){return Ut(D,null,null,k)},Ut.matchesSelector=function(D,k){if(Ni(D),U&&!cn[k+" "]&&(!G||!G.test(k)))try{var K=le.call(D,k);if(K||S.disconnectedMatch||D.document&&D.document.nodeType!==11)return K}catch{cn(k,!0)}return Ut(k,A,null,[D]).length>0},Ut.contains=function(D,k){return(D.ownerDocument||D)!=A&&Ni(D),d.contains(D,k)},Ut.attr=function(D,k){(D.ownerDocument||D)!=A&&Ni(D);var K=c.attrHandle[k.toLowerCase()],re=K&&p.call(c.attrHandle,k.toLowerCase())?K(D,k,!U):void 0;return re!==void 0?re:D.getAttribute(k)},Ut.error=function(D){throw new Error("Syntax error, unrecognized expression: "+D)},d.uniqueSort=function(D){var k,K=[],re=0,fe=0;if(b=!S.sortStable,_=!S.sortStable&&s.call(D,0),z.call(D,en),b){for(;k=D[fe++];)k===D[fe]&&(re=K.push(fe));for(;re--;)ce.call(D,K[re],1)}return _=null,D},d.fn.uniqueSort=function(){return this.pushStack(d.uniqueSort(s.apply(this)))},c=d.expr={cacheLength:50,createPseudo:zn,match:ni,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(D){return D[1]=D[1].replace(gi,_i),D[3]=(D[3]||D[4]||D[5]||"").replace(gi,_i),D[2]==="~="&&(D[3]=" "+D[3]+" "),D.slice(0,4)},CHILD:function(D){return D[1]=D[1].toLowerCase(),D[1].slice(0,3)==="nth"?(D[3]||Ut.error(D[0]),D[4]=+(D[4]?D[5]+(D[6]||1):2*(D[3]==="even"||D[3]==="odd")),D[5]=+(D[7]+D[8]||D[3]==="odd")):D[3]&&Ut.error(D[0]),D},PSEUDO:function(D){var k,K=!D[6]&&D[2];return ni.CHILD.test(D[0])?null:(D[3]?D[2]=D[4]||D[5]||"":K&&ti.test(K)&&(k=bs(K,!0))&&(k=K.indexOf(")",K.length-k)-K.length)&&(D[0]=D[0].slice(0,k),D[2]=K.slice(0,k)),D.slice(0,3))}},filter:{TAG:function(D){var k=D.replace(gi,_i).toLowerCase();return D==="*"?function(){return!0}:function(K){return L(K,k)}},CLASS:function(D){var k=nt[D+" "];return k||(k=new RegExp("(^|"+j+")"+D+"("+j+"|$)"))&&nt(D,function(K){return k.test(typeof K.className=="string"&&K.className||typeof K.getAttribute<"u"&&K.getAttribute("class")||"")})},ATTR:function(D,k,K){return function(re){var fe=Ut.attr(re,D);return fe==null?k==="!=":k?(fe+="",k==="="?fe===K:k==="!="?fe!==K:k==="^="?K&&fe.indexOf(K)===0:k==="*="?K&&fe.indexOf(K)>-1:k==="$="?K&&fe.slice(-K.length)===K:k==="~="?(" "+fe.replace(Pt," ")+" ").indexOf(K)>-1:k==="|="?fe===K||fe.slice(0,K.length+1)===K+"-":!1):!0}},CHILD:function(D,k,K,re,fe){var Te=D.slice(0,3)!=="nth",Ie=D.slice(-4)!=="last",ze=k==="of-type";return re===1&&fe===0?function(Ne){return!!Ne.parentNode}:function(Ne,yt,Je){var rt,St,Ye,zt,wn,hn=Te!==Ie?"nextSibling":"previousSibling",On=Ne.parentNode,ii=ze&&Ne.nodeName.toLowerCase(),Tr=!Je&&!ze,yn=!1;if(On){if(Te){for(;hn;){for(Ye=Ne;Ye=Ye[hn];)if(ze?L(Ye,ii):Ye.nodeType===1)return!1;wn=hn=D==="only"&&!wn&&"nextSibling"}return!0}if(wn=[Ie?On.firstChild:On.lastChild],Ie&&Tr){for(St=On[de]||(On[de]={}),rt=St[D]||[],zt=rt[0]===J&&rt[1],yn=zt&&rt[2],Ye=zt&&On.childNodes[zt];Ye=++zt&&Ye&&Ye[hn]||(yn=zt=0)||wn.pop();)if(Ye.nodeType===1&&++yn&&Ye===Ne){St[D]=[J,zt,yn];break}}else if(Tr&&(St=Ne[de]||(Ne[de]={}),rt=St[D]||[],zt=rt[0]===J&&rt[1],yn=zt),yn===!1)for(;(Ye=++zt&&Ye&&Ye[hn]||(yn=zt=0)||wn.pop())&&!((ze?L(Ye,ii):Ye.nodeType===1)&&++yn&&(Tr&&(St=Ye[de]||(Ye[de]={}),St[D]=[J,yn]),Ye===Ne)););return yn-=fe,yn===re||yn%re===0&&yn/re>=0}}},PSEUDO:function(D,k){var K,re=c.pseudos[D]||c.setFilters[D.toLowerCase()]||Ut.error("unsupported pseudo: "+D);return re[de]?re(k):re.length>1?(K=[D,D,"",k],c.setFilters.hasOwnProperty(D.toLowerCase())?zn(function(fe,Te){for(var Ie,ze=re(fe,k),Ne=ze.length;Ne--;)Ie=u.call(fe,ze[Ne]),fe[Ie]=!(Te[Ie]=ze[Ne])}):function(fe){return re(fe,0,K)}):re}},pseudos:{not:zn(function(D){var k=[],K=[],re=vo(D.replace(pe,"$1"));return re[de]?zn(function(fe,Te,Ie,ze){for(var Ne,yt=re(fe,null,ze,[]),Je=fe.length;Je--;)(Ne=yt[Je])&&(fe[Je]=!(Te[Je]=Ne))}):function(fe,Te,Ie){return k[0]=fe,re(k,null,Ie,K),k[0]=null,!K.pop()}}),has:zn(function(D){return function(k){return Ut(D,k).length>0}}),contains:zn(function(D){return D=D.replace(gi,_i),function(k){return(k.textContent||d.text(k)).indexOf(D)>-1}}),lang:zn(function(D){return Ss.test(D||"")||Ut.error("unsupported lang: "+D),D=D.replace(gi,_i).toLowerCase(),function(k){var K;do if(K=U?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return K=K.toLowerCase(),K===D||K.indexOf(D+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(D){var k=e.location&&e.location.hash;return k&&k.slice(1)===D.id},root:function(D){return D===F},focus:function(D){return D===Hd()&&A.hasFocus()&&!!(D.type||D.href||~D.tabIndex)},enabled:Zl(!1),disabled:Zl(!0),checked:function(D){return L(D,"input")&&!!D.checked||L(D,"option")&&!!D.selected},selected:function(D){return D.parentNode&&D.parentNode.selectedIndex,D.selected===!0},empty:function(D){for(D=D.firstChild;D;D=D.nextSibling)if(D.nodeType<6)return!1;return!0},parent:function(D){return!c.pseudos.empty(D)},header:function(D){return Ii.test(D.nodeName)},input:function(D){return Di.test(D.nodeName)},button:function(D){return L(D,"input")&&D.type==="button"||L(D,"button")},text:function(D){var k;return L(D,"input")&&D.type==="text"&&((k=D.getAttribute("type"))==null||k.toLowerCase()==="text")},first:or(function(){return[0]}),last:or(function(D,k){return[k-1]}),eq:or(function(D,k,K){return[K<0?K+k:K]}),even:or(function(D,k){for(var K=0;K<k;K+=2)D.push(K);return D}),odd:or(function(D,k){for(var K=1;K<k;K+=2)D.push(K);return D}),lt:or(function(D,k,K){var re;for(K<0?re=K+k:K>k?re=k:re=K;--re>=0;)D.push(re);return D}),gt:or(function(D,k,K){for(var re=K<0?K+k:K;++re<k;)D.push(re);return D})}},c.pseudos.nth=c.pseudos.eq;for(a in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[a]=zd(a);for(a in{submit:!0,reset:!0})c.pseudos[a]=Vd(a);function Jl(){}Jl.prototype=c.filters=c.pseudos,c.setFilters=new Jl;function bs(D,k){var K,re,fe,Te,Ie,ze,Ne,yt=Ct[D+" "];if(yt)return k?0:yt.slice(0);for(Ie=D,ze=[],Ne=c.preFilter;Ie;){(!K||(re=Kt.exec(Ie)))&&(re&&(Ie=Ie.slice(re[0].length)||Ie),ze.push(fe=[])),K=!1,(re=ys.exec(Ie))&&(K=re.shift(),fe.push({value:K,type:re[0].replace(pe," ")}),Ie=Ie.slice(K.length));for(Te in c.filter)(re=ni[Te].exec(Ie))&&(!Ne[Te]||(re=Ne[Te](re)))&&(K=re.shift(),fe.push({value:K,type:Te,matches:re}),Ie=Ie.slice(K.length));if(!K)break}return k?Ie.length:Ie?Ut.error(D):Ct(D,ze).slice(0)}function ia(D){for(var k=0,K=D.length,re="";k<K;k++)re+=D[k].value;return re}function ra(D,k,K){var re=k.dir,fe=k.next,Te=fe||re,Ie=K&&Te==="parentNode",ze=ye++;return k.first?function(Ne,yt,Je){for(;Ne=Ne[re];)if(Ne.nodeType===1||Ie)return D(Ne,yt,Je);return!1}:function(Ne,yt,Je){var rt,St,Ye=[J,ze];if(Je){for(;Ne=Ne[re];)if((Ne.nodeType===1||Ie)&&D(Ne,yt,Je))return!0}else for(;Ne=Ne[re];)if(Ne.nodeType===1||Ie)if(St=Ne[de]||(Ne[de]={}),fe&&L(Ne,fe))Ne=Ne[re]||Ne;else{if((rt=St[Te])&&rt[0]===J&&rt[1]===ze)return Ye[2]=rt[2];if(St[Te]=Ye,Ye[2]=D(Ne,yt,Je))return!0}return!1}}function mo(D){return D.length>1?function(k,K,re){for(var fe=D.length;fe--;)if(!D[fe](k,K,re))return!1;return!0}:D[0]}function Gd(D,k,K){for(var re=0,fe=k.length;re<fe;re++)Ut(D,k[re],K);return K}function sa(D,k,K,re,fe){for(var Te,Ie=[],ze=0,Ne=D.length,yt=k!=null;ze<Ne;ze++)(Te=D[ze])&&(!K||K(Te,re,fe))&&(Ie.push(Te),yt&&k.push(ze));return Ie}function go(D,k,K,re,fe,Te){return re&&!re[de]&&(re=go(re)),fe&&!fe[de]&&(fe=go(fe,Te)),zn(function(Ie,ze,Ne,yt){var Je,rt,St,Ye,zt=[],wn=[],hn=ze.length,On=Ie||Gd(k||"*",Ne.nodeType?[Ne]:Ne,[]),ii=D&&(Ie||!k)?sa(On,zt,D,Ne,yt):On;if(K?(Ye=fe||(Ie?D:hn||re)?[]:ze,K(ii,Ye,Ne,yt)):Ye=ii,re)for(Je=sa(Ye,wn),re(Je,[],Ne,yt),rt=Je.length;rt--;)(St=Je[rt])&&(Ye[wn[rt]]=!(ii[wn[rt]]=St));if(Ie){if(fe||D){if(fe){for(Je=[],rt=Ye.length;rt--;)(St=Ye[rt])&&Je.push(ii[rt]=St);fe(null,Ye=[],Je,yt)}for(rt=Ye.length;rt--;)(St=Ye[rt])&&(Je=fe?u.call(Ie,St):zt[rt])>-1&&(Ie[Je]=!(ze[Je]=St))}}else Ye=sa(Ye===ze?Ye.splice(hn,Ye.length):Ye),fe?fe(null,ze,Ye,yt):M.apply(ze,Ye)})}function _o(D){for(var k,K,re,fe=D.length,Te=c.relative[D[0].type],Ie=Te||c.relative[" "],ze=Te?1:0,Ne=ra(function(rt){return rt===k},Ie,!0),yt=ra(function(rt){return u.call(k,rt)>-1},Ie,!0),Je=[function(rt,St,Ye){var zt=!Te&&(Ye||St!=m)||((k=St).nodeType?Ne(rt,St,Ye):yt(rt,St,Ye));return k=null,zt}];ze<fe;ze++)if(K=c.relative[D[ze].type])Je=[ra(mo(Je),K)];else{if(K=c.filter[D[ze].type].apply(null,D[ze].matches),K[de]){for(re=++ze;re<fe&&!c.relative[D[re].type];re++);return go(ze>1&&mo(Je),ze>1&&ia(D.slice(0,ze-1).concat({value:D[ze-2].type===" "?"*":""})).replace(pe,"$1"),K,ze<re&&_o(D.slice(ze,re)),re<fe&&_o(D=D.slice(re)),re<fe&&ia(D))}Je.push(K)}return mo(Je)}function Wd(D,k){var K=k.length>0,re=D.length>0,fe=function(Te,Ie,ze,Ne,yt){var Je,rt,St,Ye=0,zt="0",wn=Te&&[],hn=[],On=m,ii=Te||re&&c.find.TAG("*",yt),Tr=J+=On==null?1:Math.random()||.1,yn=ii.length;for(yt&&(m=Ie==A||Ie||yt);zt!==yn&&(Je=ii[zt])!=null;zt++){if(re&&Je){for(rt=0,!Ie&&Je.ownerDocument!=A&&(Ni(Je),ze=!U);St=D[rt++];)if(St(Je,Ie||A,ze)){M.call(Ne,Je);break}yt&&(J=Tr)}K&&((Je=!St&&Je)&&Ye--,Te&&wn.push(Je))}if(Ye+=zt,K&&zt!==Ye){for(rt=0;St=k[rt++];)St(wn,hn,Ie,ze);if(Te){if(Ye>0)for(;zt--;)wn[zt]||hn[zt]||(hn[zt]=P.call(Ne));hn=sa(hn)}M.apply(Ne,hn),yt&&!Te&&hn.length>0&&Ye+k.length>1&&d.uniqueSort(Ne)}return yt&&(J=Tr,m=On),wn};return K?zn(fe):fe}function vo(D,k){var K,re=[],fe=[],Te=pt[D+" "];if(!Te){for(k||(k=bs(D)),K=k.length;K--;)Te=_o(k[K]),Te[de]?re.push(Te):fe.push(Te);Te=pt(D,Wd(fe,re)),Te.selector=D}return Te}function Ql(D,k,K,re){var fe,Te,Ie,ze,Ne,yt=typeof D=="function"&&D,Je=!re&&bs(D=yt.selector||D);if(K=K||[],Je.length===1){if(Te=Je[0]=Je[0].slice(0),Te.length>2&&(Ie=Te[0]).type==="ID"&&k.nodeType===9&&U&&c.relative[Te[1].type]){if(k=(c.find.ID(Ie.matches[0].replace(gi,_i),k)||[])[0],k)yt&&(k=k.parentNode);else return K;D=D.slice(Te.shift().value.length)}for(fe=ni.needsContext.test(D)?0:Te.length;fe--&&(Ie=Te[fe],!c.relative[ze=Ie.type]);)if((Ne=c.find[ze])&&(re=Ne(Ie.matches[0].replace(gi,_i),ho.test(Te[0].type)&&po(k.parentNode)||k))){if(Te.splice(fe,1),D=re.length&&ia(Te),!D)return M.apply(K,re),K;break}}return(yt||vo(D,Je))(re,k,!U,K,!k||ho.test(D)&&po(k.parentNode)||k),K}S.sortStable=de.split("").sort(en).join("")===de,Ni(),S.sortDetached=Er(function(D){return D.compareDocumentPosition(A.createElement("fieldset"))&1}),d.find=Ut,d.expr[":"]=d.expr.pseudos,d.unique=d.uniqueSort,Ut.compile=vo,Ut.select=Ql,Ut.setDocument=Ni,Ut.tokenize=bs,Ut.escape=d.escapeSelector,Ut.getText=d.text,Ut.isXML=d.isXMLDoc,Ut.selectors=d.expr,Ut.support=d.support,Ut.uniqueSort=d.uniqueSort})();var Se=function(a,c,m){for(var _=[],b=m!==void 0;(a=a[c])&&a.nodeType!==9;)if(a.nodeType===1){if(b&&d(a).is(m))break;_.push(a)}return _},Ae=function(a,c){for(var m=[];a;a=a.nextSibling)a.nodeType===1&&a!==c&&m.push(a);return m},Oe=d.expr.match.needsContext,vt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Et(a,c,m){return E(c)?d.grep(a,function(_,b){return!!c.call(_,b,_)!==m}):c.nodeType?d.grep(a,function(_){return _===c!==m}):typeof c!="string"?d.grep(a,function(_){return u.call(c,_)>-1!==m}):d.filter(c,a,m)}d.filter=function(a,c,m){var _=c[0];return m&&(a=":not("+a+")"),c.length===1&&_.nodeType===1?d.find.matchesSelector(_,a)?[_]:[]:d.find.matches(a,d.grep(c,function(b){return b.nodeType===1}))},d.fn.extend({find:function(a){var c,m,_=this.length,b=this;if(typeof a!="string")return this.pushStack(d(a).filter(function(){for(c=0;c<_;c++)if(d.contains(b[c],this))return!0}));for(m=this.pushStack([]),c=0;c<_;c++)d.find(a,b[c],m);return _>1?d.uniqueSort(m):m},filter:function(a){return this.pushStack(Et(this,a||[],!1))},not:function(a){return this.pushStack(Et(this,a||[],!0))},is:function(a){return!!Et(this,typeof a=="string"&&Oe.test(a)?d(a):a||[],!1).length}});var he,be=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Fe=d.fn.init=function(a,c,m){var _,b;if(!a)return this;if(m=m||he,typeof a=="string")if(a[0]==="<"&&a[a.length-1]===">"&&a.length>=3?_=[null,a,null]:_=be.exec(a),_&&(_[1]||!c))if(_[1]){if(c=c instanceof d?c[0]:c,d.merge(this,d.parseHTML(_[1],c&&c.nodeType?c.ownerDocument||c:v,!0)),vt.test(_[1])&&d.isPlainObject(c))for(_ in c)E(this[_])?this[_](c[_]):this.attr(_,c[_]);return this}else return b=v.getElementById(_[2]),b&&(this[0]=b,this.length=1),this;else return!c||c.jquery?(c||m).find(a):this.constructor(c).find(a);else{if(a.nodeType)return this[0]=a,this.length=1,this;if(E(a))return m.ready!==void 0?m.ready(a):a(d)}return d.makeArray(a,this)};Fe.prototype=d.fn,he=d(v);var Pe=/^(?:parents|prev(?:Until|All))/,ht={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({has:function(a){var c=d(a,this),m=c.length;return this.filter(function(){for(var _=0;_<m;_++)if(d.contains(this,c[_]))return!0})},closest:function(a,c){var m,_=0,b=this.length,M=[],A=typeof a!="string"&&d(a);if(!Oe.test(a)){for(;_<b;_++)for(m=this[_];m&&m!==c;m=m.parentNode)if(m.nodeType<11&&(A?A.index(m)>-1:m.nodeType===1&&d.find.matchesSelector(m,a))){M.push(m);break}}return this.pushStack(M.length>1?d.uniqueSort(M):M)},index:function(a){return a?typeof a=="string"?u.call(d(a),this[0]):u.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,c){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(a,c))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function it(a,c){for(;(a=a[c])&&a.nodeType!==1;);return a}d.each({parent:function(a){var c=a.parentNode;return c&&c.nodeType!==11?c:null},parents:function(a){return Se(a,"parentNode")},parentsUntil:function(a,c,m){return Se(a,"parentNode",m)},next:function(a){return it(a,"nextSibling")},prev:function(a){return it(a,"previousSibling")},nextAll:function(a){return Se(a,"nextSibling")},prevAll:function(a){return Se(a,"previousSibling")},nextUntil:function(a,c,m){return Se(a,"nextSibling",m)},prevUntil:function(a,c,m){return Se(a,"previousSibling",m)},siblings:function(a){return Ae((a.parentNode||{}).firstChild,a)},children:function(a){return Ae(a.firstChild)},contents:function(a){return a.contentDocument!=null&&i(a.contentDocument)?a.contentDocument:(L(a,"template")&&(a=a.content||a),d.merge([],a.childNodes))}},function(a,c){d.fn[a]=function(m,_){var b=d.map(this,c,m);return a.slice(-5)!=="Until"&&(_=m),_&&typeof _=="string"&&(b=d.filter(_,b)),this.length>1&&(ht[a]||d.uniqueSort(b),Pe.test(a)&&b.reverse()),this.pushStack(b)}});var et=/[^\x20\t\r\n\f]+/g;function H(a){var c={};return d.each(a.match(et)||[],function(m,_){c[_]=!0}),c}d.Callbacks=function(a){a=typeof a=="string"?H(a):d.extend({},a);var c,m,_,b,M=[],A=[],F=-1,U=function(){for(b=b||a.once,_=c=!0;A.length;F=-1)for(m=A.shift();++F<M.length;)M[F].apply(m[0],m[1])===!1&&a.stopOnFalse&&(F=M.length,m=!1);a.memory||(m=!1),c=!1,b&&(m?M=[]:M="")},G={add:function(){return M&&(m&&!c&&(F=M.length-1,A.push(m)),function le(de){d.each(de,function(J,ye){E(ye)?(!a.unique||!G.has(ye))&&M.push(ye):ye&&ye.length&&N(ye)!=="string"&&le(ye)})}(arguments),m&&!c&&U()),this},remove:function(){return d.each(arguments,function(le,de){for(var J;(J=d.inArray(de,M,J))>-1;)M.splice(J,1),J<=F&&F--}),this},has:function(le){return le?d.inArray(le,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return b=A=[],M=m="",this},disabled:function(){return!M},lock:function(){return b=A=[],!m&&!c&&(M=m=""),this},locked:function(){return!!b},fireWith:function(le,de){return b||(de=de||[],de=[le,de.slice?de.slice():de],A.push(de),c||U()),this},fire:function(){return G.fireWith(this,arguments),this},fired:function(){return!!_}};return G};function ft(a){return a}function dt(a){throw a}function Nt(a,c,m,_){var b;try{a&&E(b=a.promise)?b.call(a).done(c).fail(m):a&&E(b=a.then)?b.call(a,c,m):c.apply(void 0,[a].slice(_))}catch(M){m.apply(void 0,[M])}}d.extend({Deferred:function(a){var c=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],m="pending",_={state:function(){return m},always:function(){return b.done(arguments).fail(arguments),this},catch:function(M){return _.then(null,M)},pipe:function(){var M=arguments;return d.Deferred(function(A){d.each(c,function(F,U){var G=E(M[U[4]])&&M[U[4]];b[U[1]](function(){var le=G&&G.apply(this,arguments);le&&E(le.promise)?le.promise().progress(A.notify).done(A.resolve).fail(A.reject):A[U[0]+"With"](this,G?[le]:arguments)})}),M=null}).promise()},then:function(M,A,F){var U=0;function G(le,de,J,ye){return function(){var nt=this,Ct=arguments,pt=function(){var en,Qn;if(!(le<U)){if(en=J.apply(nt,Ct),en===de.promise())throw new TypeError("Thenable self-resolution");Qn=en&&(typeof en=="object"||typeof en=="function")&&en.then,E(Qn)?ye?Qn.call(en,G(U,de,ft,ye),G(U,de,dt,ye)):(U++,Qn.call(en,G(U,de,ft,ye),G(U,de,dt,ye),G(U,de,ft,de.notifyWith))):(J!==ft&&(nt=void 0,Ct=[en]),(ye||de.resolveWith)(nt,Ct))}},cn=ye?pt:function(){try{pt()}catch(en){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(en,cn.error),le+1>=U&&(J!==dt&&(nt=void 0,Ct=[en]),de.rejectWith(nt,Ct))}};le?cn():(d.Deferred.getErrorHook?cn.error=d.Deferred.getErrorHook():d.Deferred.getStackHook&&(cn.error=d.Deferred.getStackHook()),e.setTimeout(cn))}}return d.Deferred(function(le){c[0][3].add(G(0,le,E(F)?F:ft,le.notifyWith)),c[1][3].add(G(0,le,E(M)?M:ft)),c[2][3].add(G(0,le,E(A)?A:dt))}).promise()},promise:function(M){return M!=null?d.extend(M,_):_}},b={};return d.each(c,function(M,A){var F=A[2],U=A[5];_[A[1]]=F.add,U&&F.add(function(){m=U},c[3-M][2].disable,c[3-M][3].disable,c[0][2].lock,c[0][3].lock),F.add(A[3].fire),b[A[0]]=function(){return b[A[0]+"With"](this===b?void 0:this,arguments),this},b[A[0]+"With"]=F.fireWith}),_.promise(b),a&&a.call(b,b),b},when:function(a){var c=arguments.length,m=c,_=Array(m),b=s.call(arguments),M=d.Deferred(),A=function(F){return function(U){_[F]=this,b[F]=arguments.length>1?s.call(arguments):U,--c||M.resolveWith(_,b)}};if(c<=1&&(Nt(a,M.done(A(m)).resolve,M.reject,!c),M.state()==="pending"||E(b[m]&&b[m].then)))return M.then();for(;m--;)Nt(b[m],A(m),M.reject);return M.promise()}});var Xe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(a,c){e.console&&e.console.warn&&a&&Xe.test(a.name)&&e.console.warn("jQuery.Deferred exception: "+a.message,a.stack,c)},d.readyException=function(a){e.setTimeout(function(){throw a})};var xt=d.Deferred();d.fn.ready=function(a){return xt.then(a).catch(function(c){d.readyException(c)}),this},d.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--d.readyWait:d.isReady)||(d.isReady=!0,!(a!==!0&&--d.readyWait>0)&&xt.resolveWith(v,[d]))}}),d.ready.then=xt.then;function st(){v.removeEventListener("DOMContentLoaded",st),e.removeEventListener("load",st),d.ready()}v.readyState==="complete"||v.readyState!=="loading"&&!v.documentElement.doScroll?e.setTimeout(d.ready):(v.addEventListener("DOMContentLoaded",st),e.addEventListener("load",st));var qe=function(a,c,m,_,b,M,A){var F=0,U=a.length,G=m==null;if(N(m)==="object"){b=!0;for(F in m)qe(a,c,F,m[F],!0,M,A)}else if(_!==void 0&&(b=!0,E(_)||(A=!0),G&&(A?(c.call(a,_),c=null):(G=c,c=function(le,de,J){return G.call(d(le),J)})),c))for(;F<U;F++)c(a[F],m,A?_:_.call(a[F],F,c(a[F],m)));return b?a:G?c.call(a):U?c(a[0],m):M},Gt=/^-ms-/,O=/-([a-z])/g;function w(a,c){return c.toUpperCase()}function te(a){return a.replace(Gt,"ms-").replace(O,w)}var _e=function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType};function xe(){this.expando=d.expando+xe.uid++}xe.uid=1,xe.prototype={cache:function(a){var c=a[this.expando];return c||(c={},_e(a)&&(a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,configurable:!0}))),c},set:function(a,c,m){var _,b=this.cache(a);if(typeof c=="string")b[te(c)]=m;else for(_ in c)b[te(_)]=c[_];return b},get:function(a,c){return c===void 0?this.cache(a):a[this.expando]&&a[this.expando][te(c)]},access:function(a,c,m){return c===void 0||c&&typeof c=="string"&&m===void 0?this.get(a,c):(this.set(a,c,m),m!==void 0?m:c)},remove:function(a,c){var m,_=a[this.expando];if(_!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(te):(c=te(c),c=c in _?[c]:c.match(et)||[]),m=c.length;m--;)delete _[c[m]];(c===void 0||d.isEmptyObject(_))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var c=a[this.expando];return c!==void 0&&!d.isEmptyObject(c)}};var Z=new xe,Ue=new xe,Re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ce=/[A-Z]/g;function at(a){return a==="true"?!0:a==="false"?!1:a==="null"?null:a===+a+""?+a:Re.test(a)?JSON.parse(a):a}function Me(a,c,m){var _;if(m===void 0&&a.nodeType===1)if(_="data-"+c.replace(Ce,"-$&").toLowerCase(),m=a.getAttribute(_),typeof m=="string"){try{m=at(m)}catch{}Ue.set(a,c,m)}else m=void 0;return m}d.extend({hasData:function(a){return Ue.hasData(a)||Z.hasData(a)},data:function(a,c,m){return Ue.access(a,c,m)},removeData:function(a,c){Ue.remove(a,c)},_data:function(a,c,m){return Z.access(a,c,m)},_removeData:function(a,c){Z.remove(a,c)}}),d.fn.extend({data:function(a,c){var m,_,b,M=this[0],A=M&&M.attributes;if(a===void 0){if(this.length&&(b=Ue.get(M),M.nodeType===1&&!Z.get(M,"hasDataAttrs"))){for(m=A.length;m--;)A[m]&&(_=A[m].name,_.indexOf("data-")===0&&(_=te(_.slice(5)),Me(M,_,b[_])));Z.set(M,"hasDataAttrs",!0)}return b}return typeof a=="object"?this.each(function(){Ue.set(this,a)}):qe(this,function(F){var U;if(M&&F===void 0)return U=Ue.get(M,a),U!==void 0||(U=Me(M,a),U!==void 0)?U:void 0;this.each(function(){Ue.set(this,a,F)})},null,c,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){Ue.remove(this,a)})}}),d.extend({queue:function(a,c,m){var _;if(a)return c=(c||"fx")+"queue",_=Z.get(a,c),m&&(!_||Array.isArray(m)?_=Z.access(a,c,d.makeArray(m)):_.push(m)),_||[]},dequeue:function(a,c){c=c||"fx";var m=d.queue(a,c),_=m.length,b=m.shift(),M=d._queueHooks(a,c),A=function(){d.dequeue(a,c)};b==="inprogress"&&(b=m.shift(),_--),b&&(c==="fx"&&m.unshift("inprogress"),delete M.stop,b.call(a,A,M)),!_&&M&&M.empty.fire()},_queueHooks:function(a,c){var m=c+"queueHooks";return Z.get(a,m)||Z.access(a,m,{empty:d.Callbacks("once memory").add(function(){Z.remove(a,[c+"queue",m])})})}}),d.fn.extend({queue:function(a,c){var m=2;return typeof a!="string"&&(c=a,a="fx",m--),arguments.length<m?d.queue(this[0],a):c===void 0?this:this.each(function(){var _=d.queue(this,a,c);d._queueHooks(this,a),a==="fx"&&_[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var m,_=1,b=d.Deferred(),M=this,A=this.length,F=function(){--_||b.resolveWith(M,[M])};for(typeof a!="string"&&(c=a,a=void 0),a=a||"fx";A--;)m=Z.get(M[A],a+"queueHooks"),m&&m.empty&&(_++,m.empty.add(F));return F(),b.promise(c)}});var He=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ot=new RegExp("^(?:([+-])=|)("+He+")([a-z%]*)$","i"),Ve=["Top","Right","Bottom","Left"],we=v.documentElement,$e=function(a){return d.contains(a.ownerDocument,a)},lt={composed:!0};we.getRootNode&&($e=function(a){return d.contains(a.ownerDocument,a)||a.getRootNode(lt)===a.ownerDocument});var Bt=function(a,c){return a=c||a,a.style.display==="none"||a.style.display===""&&$e(a)&&d.css(a,"display")==="none"};function T(a,c,m,_){var b,M,A=20,F=_?function(){return _.cur()}:function(){return d.css(a,c,"")},U=F(),G=m&&m[3]||(d.cssNumber[c]?"":"px"),le=a.nodeType&&(d.cssNumber[c]||G!=="px"&&+U)&&ot.exec(d.css(a,c));if(le&&le[3]!==G){for(U=U/2,G=G||le[3],le=+U||1;A--;)d.style(a,c,le+G),(1-M)*(1-(M=F()/U||.5))<=0&&(A=0),le=le/M;le=le*2,d.style(a,c,le+G),m=m||[]}return m&&(le=+le||+U||0,b=m[1]?le+(m[1]+1)*m[2]:+m[2],_&&(_.unit=G,_.start=le,_.end=b)),b}var se={};function $(a){var c,m=a.ownerDocument,_=a.nodeName,b=se[_];return b||(c=m.body.appendChild(m.createElement(_)),b=d.css(c,"display"),c.parentNode.removeChild(c),b==="none"&&(b="block"),se[_]=b,b)}function ae(a,c){for(var m,_,b=[],M=0,A=a.length;M<A;M++)_=a[M],_.style&&(m=_.style.display,c?(m==="none"&&(b[M]=Z.get(_,"display")||null,b[M]||(_.style.display="")),_.style.display===""&&Bt(_)&&(b[M]=$(_))):m!=="none"&&(b[M]="none",Z.set(_,"display",m)));for(M=0;M<A;M++)b[M]!=null&&(a[M].style.display=b[M]);return a}d.fn.extend({show:function(){return ae(this,!0)},hide:function(){return ae(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){Bt(this)?d(this).show():d(this).hide()})}});var ve=/^(?:checkbox|radio)$/i,Ge=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var a=v.createDocumentFragment(),c=a.appendChild(v.createElement("div")),m=v.createElement("input");m.setAttribute("type","radio"),m.setAttribute("checked","checked"),m.setAttribute("name","t"),c.appendChild(m),S.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",S.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",S.option=!!c.lastChild})();var Tt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Tt.tbody=Tt.tfoot=Tt.colgroup=Tt.caption=Tt.thead,Tt.th=Tt.td,S.option||(Tt.optgroup=Tt.option=[1,"<select multiple='multiple'>","</select>"]);function At(a,c){var m;return typeof a.getElementsByTagName<"u"?m=a.getElementsByTagName(c||"*"):typeof a.querySelectorAll<"u"?m=a.querySelectorAll(c||"*"):m=[],c===void 0||c&&L(a,c)?d.merge([a],m):m}function wt(a,c){for(var m=0,_=a.length;m<_;m++)Z.set(a[m],"globalEval",!c||Z.get(c[m],"globalEval"))}var Yt=/<|&#?\w+;/;function jt(a,c,m,_,b){for(var M,A,F,U,G,le,de=c.createDocumentFragment(),J=[],ye=0,nt=a.length;ye<nt;ye++)if(M=a[ye],M||M===0)if(N(M)==="object")d.merge(J,M.nodeType?[M]:M);else if(!Yt.test(M))J.push(c.createTextNode(M));else{for(A=A||de.appendChild(c.createElement("div")),F=(Ge.exec(M)||["",""])[1].toLowerCase(),U=Tt[F]||Tt._default,A.innerHTML=U[1]+d.htmlPrefilter(M)+U[2],le=U[0];le--;)A=A.lastChild;d.merge(J,A.childNodes),A=de.firstChild,A.textContent=""}for(de.textContent="",ye=0;M=J[ye++];){if(_&&d.inArray(M,_)>-1){b&&b.push(M);continue}if(G=$e(M),A=At(de.appendChild(M),"script"),G&&wt(A),m)for(le=0;M=A[le++];)tt.test(M.type||"")&&m.push(M)}return de}var dn=/^([^.]*)(?:\.(.+)|)/;function $t(){return!0}function _n(){return!1}function kn(a,c,m,_,b,M){var A,F;if(typeof c=="object"){typeof m!="string"&&(_=_||m,m=void 0);for(F in c)kn(a,F,m,_,c[F],M);return a}if(_==null&&b==null?(b=m,_=m=void 0):b==null&&(typeof m=="string"?(b=_,_=void 0):(b=_,_=m,m=void 0)),b===!1)b=_n;else if(!b)return a;return M===1&&(A=b,b=function(U){return d().off(U),A.apply(this,arguments)},b.guid=A.guid||(A.guid=d.guid++)),a.each(function(){d.event.add(this,c,b,_,m)})}d.event={global:{},add:function(a,c,m,_,b){var M,A,F,U,G,le,de,J,ye,nt,Ct,pt=Z.get(a);if(_e(a))for(m.handler&&(M=m,m=M.handler,b=M.selector),b&&d.find.matchesSelector(we,b),m.guid||(m.guid=d.guid++),(U=pt.events)||(U=pt.events=Object.create(null)),(A=pt.handle)||(A=pt.handle=function(cn){return typeof d<"u"&&d.event.triggered!==cn.type?d.event.dispatch.apply(a,arguments):void 0}),c=(c||"").match(et)||[""],G=c.length;G--;)F=dn.exec(c[G])||[],ye=Ct=F[1],nt=(F[2]||"").split(".").sort(),ye&&(de=d.event.special[ye]||{},ye=(b?de.delegateType:de.bindType)||ye,de=d.event.special[ye]||{},le=d.extend({type:ye,origType:Ct,data:_,handler:m,guid:m.guid,selector:b,needsContext:b&&d.expr.match.needsContext.test(b),namespace:nt.join(".")},M),(J=U[ye])||(J=U[ye]=[],J.delegateCount=0,(!de.setup||de.setup.call(a,_,nt,A)===!1)&&a.addEventListener&&a.addEventListener(ye,A)),de.add&&(de.add.call(a,le),le.handler.guid||(le.handler.guid=m.guid)),b?J.splice(J.delegateCount++,0,le):J.push(le),d.event.global[ye]=!0)},remove:function(a,c,m,_,b){var M,A,F,U,G,le,de,J,ye,nt,Ct,pt=Z.hasData(a)&&Z.get(a);if(!(!pt||!(U=pt.events))){for(c=(c||"").match(et)||[""],G=c.length;G--;){if(F=dn.exec(c[G])||[],ye=Ct=F[1],nt=(F[2]||"").split(".").sort(),!ye){for(ye in U)d.event.remove(a,ye+c[G],m,_,!0);continue}for(de=d.event.special[ye]||{},ye=(_?de.delegateType:de.bindType)||ye,J=U[ye]||[],F=F[2]&&new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"),A=M=J.length;M--;)le=J[M],(b||Ct===le.origType)&&(!m||m.guid===le.guid)&&(!F||F.test(le.namespace))&&(!_||_===le.selector||_==="**"&&le.selector)&&(J.splice(M,1),le.selector&&J.delegateCount--,de.remove&&de.remove.call(a,le));A&&!J.length&&((!de.teardown||de.teardown.call(a,nt,pt.handle)===!1)&&d.removeEvent(a,ye,pt.handle),delete U[ye])}d.isEmptyObject(U)&&Z.remove(a,"handle events")}},dispatch:function(a){var c,m,_,b,M,A,F=new Array(arguments.length),U=d.event.fix(a),G=(Z.get(this,"events")||Object.create(null))[U.type]||[],le=d.event.special[U.type]||{};for(F[0]=U,c=1;c<arguments.length;c++)F[c]=arguments[c];if(U.delegateTarget=this,!(le.preDispatch&&le.preDispatch.call(this,U)===!1)){for(A=d.event.handlers.call(this,U,G),c=0;(b=A[c++])&&!U.isPropagationStopped();)for(U.currentTarget=b.elem,m=0;(M=b.handlers[m++])&&!U.isImmediatePropagationStopped();)(!U.rnamespace||M.namespace===!1||U.rnamespace.test(M.namespace))&&(U.handleObj=M,U.data=M.data,_=((d.event.special[M.origType]||{}).handle||M.handler).apply(b.elem,F),_!==void 0&&(U.result=_)===!1&&(U.preventDefault(),U.stopPropagation()));return le.postDispatch&&le.postDispatch.call(this,U),U.result}},handlers:function(a,c){var m,_,b,M,A,F=[],U=c.delegateCount,G=a.target;if(U&&G.nodeType&&!(a.type==="click"&&a.button>=1)){for(;G!==this;G=G.parentNode||this)if(G.nodeType===1&&!(a.type==="click"&&G.disabled===!0)){for(M=[],A={},m=0;m<U;m++)_=c[m],b=_.selector+" ",A[b]===void 0&&(A[b]=_.needsContext?d(b,this).index(G)>-1:d.find(b,this,null,[G]).length),A[b]&&M.push(_);M.length&&F.push({elem:G,handlers:M})}}return G=this,U<c.length&&F.push({elem:G,handlers:c.slice(U)}),F},addProp:function(a,c){Object.defineProperty(d.Event.prototype,a,{enumerable:!0,configurable:!0,get:E(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(m){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:m})}})},fix:function(a){return a[d.expando]?a:new d.Event(a)},special:{load:{noBubble:!0},click:{setup:function(a){var c=this||a;return ve.test(c.type)&&c.click&&L(c,"input")&&In(c,"click",!0),!1},trigger:function(a){var c=this||a;return ve.test(c.type)&&c.click&&L(c,"input")&&In(c,"click"),!0},_default:function(a){var c=a.target;return ve.test(c.type)&&c.click&&L(c,"input")&&Z.get(c,"click")||L(c,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}};function In(a,c,m){if(!m){Z.get(a,c)===void 0&&d.event.add(a,c,$t);return}Z.set(a,c,!1),d.event.add(a,c,{namespace:!1,handler:function(_){var b,M=Z.get(this,c);if(_.isTrigger&1&&this[c]){if(M)(d.event.special[c]||{}).delegateType&&_.stopPropagation();else if(M=s.call(arguments),Z.set(this,c,M),this[c](),b=Z.get(this,c),Z.set(this,c,!1),M!==b)return _.stopImmediatePropagation(),_.preventDefault(),b}else M&&(Z.set(this,c,d.event.trigger(M[0],M.slice(1),this)),_.stopPropagation(),_.isImmediatePropagationStopped=$t)}})}d.removeEvent=function(a,c,m){a.removeEventListener&&a.removeEventListener(c,m)},d.Event=function(a,c){if(!(this instanceof d.Event))return new d.Event(a,c);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===void 0&&a.returnValue===!1?$t:_n,this.target=a.target&&a.target.nodeType===3?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,c&&d.extend(this,c),this.timeStamp=a&&a.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:_n,isPropagationStopped:_n,isImmediatePropagationStopped:_n,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=$t,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=$t,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=$t,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(a,c){function m(_){if(v.documentMode){var b=Z.get(this,"handle"),M=d.event.fix(_);M.type=_.type==="focusin"?"focus":"blur",M.isSimulated=!0,b(_),M.target===M.currentTarget&&b(M)}else d.event.simulate(c,_.target,d.event.fix(_))}d.event.special[a]={setup:function(){var _;if(In(this,a,!0),v.documentMode)_=Z.get(this,c),_||this.addEventListener(c,m),Z.set(this,c,(_||0)+1);else return!1},trigger:function(){return In(this,a),!0},teardown:function(){var _;if(v.documentMode)_=Z.get(this,c)-1,_?Z.set(this,c,_):(this.removeEventListener(c,m),Z.remove(this,c));else return!1},_default:function(_){return Z.get(_.target,a)},delegateType:c},d.event.special[c]={setup:function(){var _=this.ownerDocument||this.document||this,b=v.documentMode?this:_,M=Z.get(b,c);M||(v.documentMode?this.addEventListener(c,m):_.addEventListener(a,m,!0)),Z.set(b,c,(M||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,b=v.documentMode?this:_,M=Z.get(b,c)-1;M?Z.set(b,c,M):(v.documentMode?this.removeEventListener(c,m):_.removeEventListener(a,m,!0),Z.remove(b,c))}}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,c){d.event.special[a]={delegateType:c,bindType:c,handle:function(m){var _,b=this,M=m.relatedTarget,A=m.handleObj;return(!M||M!==b&&!d.contains(b,M))&&(m.type=A.origType,_=A.handler.apply(this,arguments),m.type=c),_}}}),d.fn.extend({on:function(a,c,m,_){return kn(this,a,c,m,_)},one:function(a,c,m,_){return kn(this,a,c,m,_,1)},off:function(a,c,m){var _,b;if(a&&a.preventDefault&&a.handleObj)return _=a.handleObj,d(a.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof a=="object"){for(b in a)this.off(b,c,a[b]);return this}return(c===!1||typeof c=="function")&&(m=c,c=void 0),m===!1&&(m=_n),this.each(function(){d.event.remove(this,a,m,c)})}});var Zs=/<script|<style|<link/i,Mr=/checked\s*(?:[^=]|=\s*.checked.)/i,Js=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function gs(a,c){return L(a,"table")&&L(c.nodeType!==11?c:c.firstChild,"tr")&&d(a).children("tbody")[0]||a}function no(a){return a.type=(a.getAttribute("type")!==null)+"/"+a.type,a}function io(a){return(a.type||"").slice(0,5)==="true/"?a.type=a.type.slice(5):a.removeAttribute("type"),a}function Qs(a,c){var m,_,b,M,A,F,U;if(c.nodeType===1){if(Z.hasData(a)&&(M=Z.get(a),U=M.events,U)){Z.remove(c,"handle events");for(b in U)for(m=0,_=U[b].length;m<_;m++)d.event.add(c,b,U[b][m])}Ue.hasData(a)&&(A=Ue.access(a),F=d.extend({},A),Ue.set(c,F))}}function C(a,c){var m=c.nodeName.toLowerCase();m==="input"&&ve.test(a.type)?c.checked=a.checked:(m==="input"||m==="textarea")&&(c.defaultValue=a.defaultValue)}function W(a,c,m,_){c=o(c);var b,M,A,F,U,G,le=0,de=a.length,J=de-1,ye=c[0],nt=E(ye);if(nt||de>1&&typeof ye=="string"&&!S.checkClone&&Mr.test(ye))return a.each(function(Ct){var pt=a.eq(Ct);nt&&(c[0]=ye.call(this,Ct,pt.html())),W(pt,c,m,_)});if(de&&(b=jt(c,a[0].ownerDocument,!1,a,_),M=b.firstChild,b.childNodes.length===1&&(b=M),M||_)){for(A=d.map(At(b,"script"),no),F=A.length;le<de;le++)U=b,le!==J&&(U=d.clone(U,!0,!0),F&&d.merge(A,At(U,"script"))),m.call(a[le],U,le);if(F)for(G=A[A.length-1].ownerDocument,d.map(A,io),le=0;le<F;le++)U=A[le],tt.test(U.type||"")&&!Z.access(U,"globalEval")&&d.contains(G,U)&&(U.src&&(U.type||"").toLowerCase()!=="module"?d._evalUrl&&!U.noModule&&d._evalUrl(U.src,{nonce:U.nonce||U.getAttribute("nonce")},G):R(U.textContent.replace(Js,""),U,G))}return a}function ee(a,c,m){for(var _,b=c?d.filter(c,a):a,M=0;(_=b[M])!=null;M++)!m&&_.nodeType===1&&d.cleanData(At(_)),_.parentNode&&(m&&$e(_)&&wt(At(_,"script")),_.parentNode.removeChild(_));return a}d.extend({htmlPrefilter:function(a){return a},clone:function(a,c,m){var _,b,M,A,F=a.cloneNode(!0),U=$e(a);if(!S.noCloneChecked&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a))for(A=At(F),M=At(a),_=0,b=M.length;_<b;_++)C(M[_],A[_]);if(c)if(m)for(M=M||At(a),A=A||At(F),_=0,b=M.length;_<b;_++)Qs(M[_],A[_]);else Qs(a,F);return A=At(F,"script"),A.length>0&&wt(A,!U&&At(a,"script")),F},cleanData:function(a){for(var c,m,_,b=d.event.special,M=0;(m=a[M])!==void 0;M++)if(_e(m)){if(c=m[Z.expando]){if(c.events)for(_ in c.events)b[_]?d.event.remove(m,_):d.removeEvent(m,_,c.handle);m[Z.expando]=void 0}m[Ue.expando]&&(m[Ue.expando]=void 0)}}}),d.fn.extend({detach:function(a){return ee(this,a,!0)},remove:function(a){return ee(this,a)},text:function(a){return qe(this,function(c){return c===void 0?d.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,a,arguments.length)},append:function(){return W(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=gs(this,a);c.appendChild(a)}})},prepend:function(){return W(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=gs(this,a);c.insertBefore(a,c.firstChild)}})},before:function(){return W(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return W(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,c=0;(a=this[c])!=null;c++)a.nodeType===1&&(d.cleanData(At(a,!1)),a.textContent="");return this},clone:function(a,c){return a=a??!1,c=c??a,this.map(function(){return d.clone(this,a,c)})},html:function(a){return qe(this,function(c){var m=this[0]||{},_=0,b=this.length;if(c===void 0&&m.nodeType===1)return m.innerHTML;if(typeof c=="string"&&!Zs.test(c)&&!Tt[(Ge.exec(c)||["",""])[1].toLowerCase()]){c=d.htmlPrefilter(c);try{for(;_<b;_++)m=this[_]||{},m.nodeType===1&&(d.cleanData(At(m,!1)),m.innerHTML=c);m=0}catch{}}m&&this.empty().append(c)},null,a,arguments.length)},replaceWith:function(){var a=[];return W(this,arguments,function(c){var m=this.parentNode;d.inArray(this,a)<0&&(d.cleanData(At(this)),m&&m.replaceChild(c,this))},a)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,c){d.fn[a]=function(m){for(var _,b=[],M=d(m),A=M.length-1,F=0;F<=A;F++)_=F===A?this:this.clone(!0),d(M[F])[c](_),l.apply(b,_.get());return this.pushStack(b)}});var ne=new RegExp("^("+He+")(?!px)[a-z%]+$","i"),q=/^--/,Ee=function(a){var c=a.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(a)},De=function(a,c,m){var _,b,M={};for(b in c)M[b]=a.style[b],a.style[b]=c[b];_=m.call(a);for(b in c)a.style[b]=M[b];return _},Be=new RegExp(Ve.join("|"),"i");(function(){function a(){if(G){U.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",G.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",we.appendChild(U).appendChild(G);var le=e.getComputedStyle(G);m=le.top!=="1%",F=c(le.marginLeft)===12,G.style.right="60%",M=c(le.right)===36,_=c(le.width)===36,G.style.position="absolute",b=c(G.offsetWidth/3)===12,we.removeChild(U),G=null}}function c(le){return Math.round(parseFloat(le))}var m,_,b,M,A,F,U=v.createElement("div"),G=v.createElement("div");G.style&&(G.style.backgroundClip="content-box",G.cloneNode(!0).style.backgroundClip="",S.clearCloneStyle=G.style.backgroundClip==="content-box",d.extend(S,{boxSizingReliable:function(){return a(),_},pixelBoxStyles:function(){return a(),M},pixelPosition:function(){return a(),m},reliableMarginLeft:function(){return a(),F},scrollboxSize:function(){return a(),b},reliableTrDimensions:function(){var le,de,J,ye;return A==null&&(le=v.createElement("table"),de=v.createElement("tr"),J=v.createElement("div"),le.style.cssText="position:absolute;left:-11111px;border-collapse:separate",de.style.cssText="box-sizing:content-box;border:1px solid",de.style.height="1px",J.style.height="9px",J.style.display="block",we.appendChild(le).appendChild(de).appendChild(J),ye=e.getComputedStyle(de),A=parseInt(ye.height,10)+parseInt(ye.borderTopWidth,10)+parseInt(ye.borderBottomWidth,10)===de.offsetHeight,we.removeChild(le)),A}}))})();function ke(a,c,m){var _,b,M,A,F=q.test(c),U=a.style;return m=m||Ee(a),m&&(A=m.getPropertyValue(c)||m[c],F&&A&&(A=A.replace(pe,"$1")||void 0),A===""&&!$e(a)&&(A=d.style(a,c)),!S.pixelBoxStyles()&&ne.test(A)&&Be.test(c)&&(_=U.width,b=U.minWidth,M=U.maxWidth,U.minWidth=U.maxWidth=U.width=A,A=m.width,U.width=_,U.minWidth=b,U.maxWidth=M)),A!==void 0?A+"":A}function Ke(a,c){return{get:function(){if(a()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var Ze=["Webkit","Moz","ms"],je=v.createElement("div").style,Rt={};function Xt(a){for(var c=a[0].toUpperCase()+a.slice(1),m=Ze.length;m--;)if(a=Ze[m]+c,a in je)return a}function Ht(a){var c=d.cssProps[a]||Rt[a];return c||(a in je?a:Rt[a]=Xt(a)||a)}var vn=/^(none|table(?!-c[ea]).+)/,Dt={position:"absolute",visibility:"hidden",display:"block"},We={letterSpacing:"0",fontWeight:"400"};function sn(a,c,m){var _=ot.exec(c);return _?Math.max(0,_[2]-(m||0))+(_[3]||"px"):c}function Lt(a,c,m,_,b,M){var A=c==="width"?1:0,F=0,U=0,G=0;if(m===(_?"border":"content"))return 0;for(;A<4;A+=2)m==="margin"&&(G+=d.css(a,m+Ve[A],!0,b)),_?(m==="content"&&(U-=d.css(a,"padding"+Ve[A],!0,b)),m!=="margin"&&(U-=d.css(a,"border"+Ve[A]+"Width",!0,b))):(U+=d.css(a,"padding"+Ve[A],!0,b),m!=="padding"?U+=d.css(a,"border"+Ve[A]+"Width",!0,b):F+=d.css(a,"border"+Ve[A]+"Width",!0,b));return!_&&M>=0&&(U+=Math.max(0,Math.ceil(a["offset"+c[0].toUpperCase()+c.slice(1)]-M-U-F-.5))||0),U+G}function Nn(a,c,m){var _=Ee(a),b=!S.boxSizingReliable()||m,M=b&&d.css(a,"boxSizing",!1,_)==="border-box",A=M,F=ke(a,c,_),U="offset"+c[0].toUpperCase()+c.slice(1);if(ne.test(F)){if(!m)return F;F="auto"}return(!S.boxSizingReliable()&&M||!S.reliableTrDimensions()&&L(a,"tr")||F==="auto"||!parseFloat(F)&&d.css(a,"display",!1,_)==="inline")&&a.getClientRects().length&&(M=d.css(a,"boxSizing",!1,_)==="border-box",A=U in a,A&&(F=a[U])),F=parseFloat(F)||0,F+Lt(a,c,m||(M?"border":"content"),A,_,F)+"px"}d.extend({cssHooks:{opacity:{get:function(a,c){if(c){var m=ke(a,"opacity");return m===""?"1":m}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(a,c,m,_){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var b,M,A,F=te(c),U=q.test(c),G=a.style;if(U||(c=Ht(F)),A=d.cssHooks[c]||d.cssHooks[F],m!==void 0){if(M=typeof m,M==="string"&&(b=ot.exec(m))&&b[1]&&(m=T(a,c,b),M="number"),m==null||m!==m)return;M==="number"&&!U&&(m+=b&&b[3]||(d.cssNumber[F]?"":"px")),!S.clearCloneStyle&&m===""&&c.indexOf("background")===0&&(G[c]="inherit"),(!A||!("set"in A)||(m=A.set(a,m,_))!==void 0)&&(U?G.setProperty(c,m):G[c]=m)}else return A&&"get"in A&&(b=A.get(a,!1,_))!==void 0?b:G[c]}},css:function(a,c,m,_){var b,M,A,F=te(c),U=q.test(c);return U||(c=Ht(F)),A=d.cssHooks[c]||d.cssHooks[F],A&&"get"in A&&(b=A.get(a,!0,m)),b===void 0&&(b=ke(a,c,_)),b==="normal"&&c in We&&(b=We[c]),m===""||m?(M=parseFloat(b),m===!0||isFinite(M)?M||0:b):b}}),d.each(["height","width"],function(a,c){d.cssHooks[c]={get:function(m,_,b){if(_)return vn.test(d.css(m,"display"))&&(!m.getClientRects().length||!m.getBoundingClientRect().width)?De(m,Dt,function(){return Nn(m,c,b)}):Nn(m,c,b)},set:function(m,_,b){var M,A=Ee(m),F=!S.scrollboxSize()&&A.position==="absolute",U=F||b,G=U&&d.css(m,"boxSizing",!1,A)==="border-box",le=b?Lt(m,c,b,G,A):0;return G&&F&&(le-=Math.ceil(m["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(A[c])-Lt(m,c,"border",!1,A)-.5)),le&&(M=ot.exec(_))&&(M[3]||"px")!=="px"&&(m.style[c]=_,_=d.css(m,c)),sn(m,_,le)}}}),d.cssHooks.marginLeft=Ke(S.reliableMarginLeft,function(a,c){if(c)return(parseFloat(ke(a,"marginLeft"))||a.getBoundingClientRect().left-De(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(a,c){d.cssHooks[a+c]={expand:function(m){for(var _=0,b={},M=typeof m=="string"?m.split(" "):[m];_<4;_++)b[a+Ve[_]+c]=M[_]||M[_-2]||M[0];return b}},a!=="margin"&&(d.cssHooks[a+c].set=sn)}),d.fn.extend({css:function(a,c){return qe(this,function(m,_,b){var M,A,F={},U=0;if(Array.isArray(_)){for(M=Ee(m),A=_.length;U<A;U++)F[_[U]]=d.css(m,_[U],!1,M);return F}return b!==void 0?d.style(m,_,b):d.css(m,_)},a,c,arguments.length>1)}});function Qt(a,c,m,_,b){return new Qt.prototype.init(a,c,m,_,b)}d.Tween=Qt,Qt.prototype={constructor:Qt,init:function(a,c,m,_,b,M){this.elem=a,this.prop=m,this.easing=b||d.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=_,this.unit=M||(d.cssNumber[m]?"":"px")},cur:function(){var a=Qt.propHooks[this.prop];return a&&a.get?a.get(this):Qt.propHooks._default.get(this)},run:function(a){var c,m=Qt.propHooks[this.prop];return this.options.duration?this.pos=c=d.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=c=a,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),m&&m.set?m.set(this):Qt.propHooks._default.set(this),this}},Qt.prototype.init.prototype=Qt.prototype,Qt.propHooks={_default:{get:function(a){var c;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(c=d.css(a.elem,a.prop,""),!c||c==="auto"?0:c)},set:function(a){d.fx.step[a.prop]?d.fx.step[a.prop](a):a.elem.nodeType===1&&(d.cssHooks[a.prop]||a.elem.style[Ht(a.prop)]!=null)?d.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Qt.propHooks.scrollTop=Qt.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},d.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},d.fx=Qt.prototype.init,d.fx.step={};var An,Pi,Zt=/^(?:toggle|show|hide)$/,Jn=/queueHooks$/;function ir(){Pi&&(v.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(ir):e.setTimeout(ir,d.fx.interval),d.fx.tick())}function xn(){return e.setTimeout(function(){An=void 0}),An=Date.now()}function Li(a,c){var m,_=0,b={height:a};for(c=c?1:0;_<4;_+=2-c)m=Ve[_],b["margin"+m]=b["padding"+m]=a;return c&&(b.opacity=b.width=a),b}function ea(a,c,m){for(var _,b=(Hn.tweeners[c]||[]).concat(Hn.tweeners["*"]),M=0,A=b.length;M<A;M++)if(_=b[M].call(m,c,a))return _}function ta(a,c,m){var _,b,M,A,F,U,G,le,de="width"in c||"height"in c,J=this,ye={},nt=a.style,Ct=a.nodeType&&Bt(a),pt=Z.get(a,"fxshow");m.queue||(A=d._queueHooks(a,"fx"),A.unqueued==null&&(A.unqueued=0,F=A.empty.fire,A.empty.fire=function(){A.unqueued||F()}),A.unqueued++,J.always(function(){J.always(function(){A.unqueued--,d.queue(a,"fx").length||A.empty.fire()})}));for(_ in c)if(b=c[_],Zt.test(b)){if(delete c[_],M=M||b==="toggle",b===(Ct?"hide":"show"))if(b==="show"&&pt&&pt[_]!==void 0)Ct=!0;else continue;ye[_]=pt&&pt[_]||d.style(a,_)}if(U=!d.isEmptyObject(c),!(!U&&d.isEmptyObject(ye))){de&&a.nodeType===1&&(m.overflow=[nt.overflow,nt.overflowX,nt.overflowY],G=pt&&pt.display,G==null&&(G=Z.get(a,"display")),le=d.css(a,"display"),le==="none"&&(G?le=G:(ae([a],!0),G=a.style.display||G,le=d.css(a,"display"),ae([a]))),(le==="inline"||le==="inline-block"&&G!=null)&&d.css(a,"float")==="none"&&(U||(J.done(function(){nt.display=G}),G==null&&(le=nt.display,G=le==="none"?"":le)),nt.display="inline-block")),m.overflow&&(nt.overflow="hidden",J.always(function(){nt.overflow=m.overflow[0],nt.overflowX=m.overflow[1],nt.overflowY=m.overflow[2]})),U=!1;for(_ in ye)U||(pt?"hidden"in pt&&(Ct=pt.hidden):pt=Z.access(a,"fxshow",{display:G}),M&&(pt.hidden=!Ct),Ct&&ae([a],!0),J.done(function(){Ct||ae([a]),Z.remove(a,"fxshow");for(_ in ye)d.style(a,_,ye[_])})),U=ea(Ct?pt[_]:0,_,J),_ in pt||(pt[_]=U.start,Ct&&(U.end=U.start,U.start=0))}}function vd(a,c){var m,_,b,M,A;for(m in a)if(_=te(m),b=c[_],M=a[m],Array.isArray(M)&&(b=M[1],M=a[m]=M[0]),m!==_&&(a[_]=M,delete a[m]),A=d.cssHooks[_],A&&"expand"in A){M=A.expand(M),delete a[_];for(m in M)m in a||(a[m]=M[m],c[m]=b)}else c[_]=b}function Hn(a,c,m){var _,b,M=0,A=Hn.prefilters.length,F=d.Deferred().always(function(){delete U.elem}),U=function(){if(b)return!1;for(var de=An||xn(),J=Math.max(0,G.startTime+G.duration-de),ye=J/G.duration||0,nt=1-ye,Ct=0,pt=G.tweens.length;Ct<pt;Ct++)G.tweens[Ct].run(nt);return F.notifyWith(a,[G,nt,J]),nt<1&&pt?J:(pt||F.notifyWith(a,[G,1,0]),F.resolveWith(a,[G]),!1)},G=F.promise({elem:a,props:d.extend({},c),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},m),originalProperties:c,originalOptions:m,startTime:An||xn(),duration:m.duration,tweens:[],createTween:function(de,J){var ye=d.Tween(a,G.opts,de,J,G.opts.specialEasing[de]||G.opts.easing);return G.tweens.push(ye),ye},stop:function(de){var J=0,ye=de?G.tweens.length:0;if(b)return this;for(b=!0;J<ye;J++)G.tweens[J].run(1);return de?(F.notifyWith(a,[G,1,0]),F.resolveWith(a,[G,de])):F.rejectWith(a,[G,de]),this}}),le=G.props;for(vd(le,G.opts.specialEasing);M<A;M++)if(_=Hn.prefilters[M].call(G,a,le,G.opts),_)return E(_.stop)&&(d._queueHooks(G.elem,G.opts.queue).stop=_.stop.bind(_)),_;return d.map(le,ea,G),E(G.opts.start)&&G.opts.start.call(a,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),d.fx.timer(d.extend(U,{elem:a,anim:G,queue:G.opts.queue})),G}d.Animation=d.extend(Hn,{tweeners:{"*":[function(a,c){var m=this.createTween(a,c);return T(m.elem,a,ot.exec(c),m),m}]},tweener:function(a,c){E(a)?(c=a,a=["*"]):a=a.match(et);for(var m,_=0,b=a.length;_<b;_++)m=a[_],Hn.tweeners[m]=Hn.tweeners[m]||[],Hn.tweeners[m].unshift(c)},prefilters:[ta],prefilter:function(a,c){c?Hn.prefilters.unshift(a):Hn.prefilters.push(a)}}),d.speed=function(a,c,m){var _=a&&typeof a=="object"?d.extend({},a):{complete:m||!m&&c||E(a)&&a,duration:a,easing:m&&c||c&&!E(c)&&c};return d.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in d.fx.speeds?_.duration=d.fx.speeds[_.duration]:_.duration=d.fx.speeds._default),(_.queue==null||_.queue===!0)&&(_.queue="fx"),_.old=_.complete,_.complete=function(){E(_.old)&&_.old.call(this),_.queue&&d.dequeue(this,_.queue)},_},d.fn.extend({fadeTo:function(a,c,m,_){return this.filter(Bt).css("opacity",0).show().end().animate({opacity:c},a,m,_)},animate:function(a,c,m,_){var b=d.isEmptyObject(a),M=d.speed(c,m,_),A=function(){var F=Hn(this,d.extend({},a),M);(b||Z.get(this,"finish"))&&F.stop(!0)};return A.finish=A,b||M.queue===!1?this.each(A):this.queue(M.queue,A)},stop:function(a,c,m){var _=function(b){var M=b.stop;delete b.stop,M(m)};return typeof a!="string"&&(m=c,c=a,a=void 0),c&&this.queue(a||"fx",[]),this.each(function(){var b=!0,M=a!=null&&a+"queueHooks",A=d.timers,F=Z.get(this);if(M)F[M]&&F[M].stop&&_(F[M]);else for(M in F)F[M]&&F[M].stop&&Jn.test(M)&&_(F[M]);for(M=A.length;M--;)A[M].elem===this&&(a==null||A[M].queue===a)&&(A[M].anim.stop(m),b=!1,A.splice(M,1));(b||!m)&&d.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var c,m=Z.get(this),_=m[a+"queue"],b=m[a+"queueHooks"],M=d.timers,A=_?_.length:0;for(m.finish=!0,d.queue(this,a,[]),b&&b.stop&&b.stop.call(this,!0),c=M.length;c--;)M[c].elem===this&&M[c].queue===a&&(M[c].anim.stop(!0),M.splice(c,1));for(c=0;c<A;c++)_[c]&&_[c].finish&&_[c].finish.call(this);delete m.finish})}}),d.each(["toggle","show","hide"],function(a,c){var m=d.fn[c];d.fn[c]=function(_,b,M){return _==null||typeof _=="boolean"?m.apply(this,arguments):this.animate(Li(c,!0),_,b,M)}}),d.each({slideDown:Li("show"),slideUp:Li("hide"),slideToggle:Li("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,c){d.fn[a]=function(m,_,b){return this.animate(c,m,_,b)}}),d.timers=[],d.fx.tick=function(){var a,c=0,m=d.timers;for(An=Date.now();c<m.length;c++)a=m[c],!a()&&m[c]===a&&m.splice(c--,1);m.length||d.fx.stop(),An=void 0},d.fx.timer=function(a){d.timers.push(a),d.fx.start()},d.fx.interval=13,d.fx.start=function(){Pi||(Pi=!0,ir())},d.fx.stop=function(){Pi=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(a,c){return a=d.fx&&d.fx.speeds[a]||a,c=c||"fx",this.queue(c,function(m,_){var b=e.setTimeout(m,a);_.stop=function(){e.clearTimeout(b)}})},function(){var a=v.createElement("input"),c=v.createElement("select"),m=c.appendChild(v.createElement("option"));a.type="checkbox",S.checkOn=a.value!=="",S.optSelected=m.selected,a=v.createElement("input"),a.value="t",a.type="radio",S.radioValue=a.value==="t"}();var zl,_s=d.expr.attrHandle;d.fn.extend({attr:function(a,c){return qe(this,d.attr,a,c,arguments.length>1)},removeAttr:function(a){return this.each(function(){d.removeAttr(this,a)})}}),d.extend({attr:function(a,c,m){var _,b,M=a.nodeType;if(!(M===3||M===8||M===2)){if(typeof a.getAttribute>"u")return d.prop(a,c,m);if((M!==1||!d.isXMLDoc(a))&&(b=d.attrHooks[c.toLowerCase()]||(d.expr.match.bool.test(c)?zl:void 0)),m!==void 0){if(m===null){d.removeAttr(a,c);return}return b&&"set"in b&&(_=b.set(a,m,c))!==void 0?_:(a.setAttribute(c,m+""),m)}return b&&"get"in b&&(_=b.get(a,c))!==null?_:(_=d.find.attr(a,c),_??void 0)}},attrHooks:{type:{set:function(a,c){if(!S.radioValue&&c==="radio"&&L(a,"input")){var m=a.value;return a.setAttribute("type",c),m&&(a.value=m),c}}}},removeAttr:function(a,c){var m,_=0,b=c&&c.match(et);if(b&&a.nodeType===1)for(;m=b[_++];)a.removeAttribute(m)}}),zl={set:function(a,c,m){return c===!1?d.removeAttr(a,m):a.setAttribute(m,m),m}},d.each(d.expr.match.bool.source.match(/\w+/g),function(a,c){var m=_s[c]||d.find.attr;_s[c]=function(_,b,M){var A,F,U=b.toLowerCase();return M||(F=_s[U],_s[U]=A,A=m(_,b,M)!=null?U:null,_s[U]=F),A}});var xd=/^(?:input|select|textarea|button)$/i,yd=/^(?:a|area)$/i;d.fn.extend({prop:function(a,c){return qe(this,d.prop,a,c,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[d.propFix[a]||a]})}}),d.extend({prop:function(a,c,m){var _,b,M=a.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!d.isXMLDoc(a))&&(c=d.propFix[c]||c,b=d.propHooks[c]),m!==void 0?b&&"set"in b&&(_=b.set(a,m,c))!==void 0?_:a[c]=m:b&&"get"in b&&(_=b.get(a,c))!==null?_:a[c]},propHooks:{tabIndex:{get:function(a){var c=d.find.attr(a,"tabindex");return c?parseInt(c,10):xd.test(a.nodeName)||yd.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),S.optSelected||(d.propHooks.selected={get:function(a){var c=a.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(a){var c=a.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this});function rr(a){var c=a.match(et)||[];return c.join(" ")}function sr(a){return a.getAttribute&&a.getAttribute("class")||""}function ro(a){return Array.isArray(a)?a:typeof a=="string"?a.match(et)||[]:[]}d.fn.extend({addClass:function(a){var c,m,_,b,M,A;return E(a)?this.each(function(F){d(this).addClass(a.call(this,F,sr(this)))}):(c=ro(a),c.length?this.each(function(){if(_=sr(this),m=this.nodeType===1&&" "+rr(_)+" ",m){for(M=0;M<c.length;M++)b=c[M],m.indexOf(" "+b+" ")<0&&(m+=b+" ");A=rr(m),_!==A&&this.setAttribute("class",A)}}):this)},removeClass:function(a){var c,m,_,b,M,A;return E(a)?this.each(function(F){d(this).removeClass(a.call(this,F,sr(this)))}):arguments.length?(c=ro(a),c.length?this.each(function(){if(_=sr(this),m=this.nodeType===1&&" "+rr(_)+" ",m){for(M=0;M<c.length;M++)for(b=c[M];m.indexOf(" "+b+" ")>-1;)m=m.replace(" "+b+" "," ");A=rr(m),_!==A&&this.setAttribute("class",A)}}):this):this.attr("class","")},toggleClass:function(a,c){var m,_,b,M,A=typeof a,F=A==="string"||Array.isArray(a);return E(a)?this.each(function(U){d(this).toggleClass(a.call(this,U,sr(this),c),c)}):typeof c=="boolean"&&F?c?this.addClass(a):this.removeClass(a):(m=ro(a),this.each(function(){if(F)for(M=d(this),b=0;b<m.length;b++)_=m[b],M.hasClass(_)?M.removeClass(_):M.addClass(_);else(a===void 0||A==="boolean")&&(_=sr(this),_&&Z.set(this,"__className__",_),this.setAttribute&&this.setAttribute("class",_||a===!1?"":Z.get(this,"__className__")||""))}))},hasClass:function(a){var c,m,_=0;for(c=" "+a+" ";m=this[_++];)if(m.nodeType===1&&(" "+rr(sr(m))+" ").indexOf(c)>-1)return!0;return!1}});var Sd=/\r/g;d.fn.extend({val:function(a){var c,m,_,b=this[0];return arguments.length?(_=E(a),this.each(function(M){var A;this.nodeType===1&&(_?A=a.call(this,M,d(this).val()):A=a,A==null?A="":typeof A=="number"?A+="":Array.isArray(A)&&(A=d.map(A,function(F){return F==null?"":F+""})),c=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,A,"value")===void 0)&&(this.value=A))})):b?(c=d.valHooks[b.type]||d.valHooks[b.nodeName.toLowerCase()],c&&"get"in c&&(m=c.get(b,"value"))!==void 0?m:(m=b.value,typeof m=="string"?m.replace(Sd,""):m??"")):void 0}}),d.extend({valHooks:{option:{get:function(a){var c=d.find.attr(a,"value");return c??rr(d.text(a))}},select:{get:function(a){var c,m,_,b=a.options,M=a.selectedIndex,A=a.type==="select-one",F=A?null:[],U=A?M+1:b.length;for(M<0?_=U:_=A?M:0;_<U;_++)if(m=b[_],(m.selected||_===M)&&!m.disabled&&(!m.parentNode.disabled||!L(m.parentNode,"optgroup"))){if(c=d(m).val(),A)return c;F.push(c)}return F},set:function(a,c){for(var m,_,b=a.options,M=d.makeArray(c),A=b.length;A--;)_=b[A],(_.selected=d.inArray(d.valHooks.option.get(_),M)>-1)&&(m=!0);return m||(a.selectedIndex=-1),M}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(a,c){if(Array.isArray(c))return a.checked=d.inArray(d(a).val(),c)>-1}},S.checkOn||(d.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value})});var vs=e.location,Vl={guid:Date.now()},so=/\?/;d.parseXML=function(a){var c,m;if(!a||typeof a!="string")return null;try{c=new e.DOMParser().parseFromString(a,"text/xml")}catch{}return m=c&&c.getElementsByTagName("parsererror")[0],(!c||m)&&d.error("Invalid XML: "+(m?d.map(m.childNodes,function(_){return _.textContent}).join(`
`):a)),c};var Gl=/^(?:focusinfocus|focusoutblur)$/,Wl=function(a){a.stopPropagation()};d.extend(d.event,{trigger:function(a,c,m,_){var b,M,A,F,U,G,le,de,J=[m||v],ye=p.call(a,"type")?a.type:a,nt=p.call(a,"namespace")?a.namespace.split("."):[];if(M=de=A=m=m||v,!(m.nodeType===3||m.nodeType===8)&&!Gl.test(ye+d.event.triggered)&&(ye.indexOf(".")>-1&&(nt=ye.split("."),ye=nt.shift(),nt.sort()),U=ye.indexOf(":")<0&&"on"+ye,a=a[d.expando]?a:new d.Event(ye,typeof a=="object"&&a),a.isTrigger=_?2:3,a.namespace=nt.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=m),c=c==null?[a]:d.makeArray(c,[a]),le=d.event.special[ye]||{},!(!_&&le.trigger&&le.trigger.apply(m,c)===!1))){if(!_&&!le.noBubble&&!x(m)){for(F=le.delegateType||ye,Gl.test(F+ye)||(M=M.parentNode);M;M=M.parentNode)J.push(M),A=M;A===(m.ownerDocument||v)&&J.push(A.defaultView||A.parentWindow||e)}for(b=0;(M=J[b++])&&!a.isPropagationStopped();)de=M,a.type=b>1?F:le.bindType||ye,G=(Z.get(M,"events")||Object.create(null))[a.type]&&Z.get(M,"handle"),G&&G.apply(M,c),G=U&&M[U],G&&G.apply&&_e(M)&&(a.result=G.apply(M,c),a.result===!1&&a.preventDefault());return a.type=ye,!_&&!a.isDefaultPrevented()&&(!le._default||le._default.apply(J.pop(),c)===!1)&&_e(m)&&U&&E(m[ye])&&!x(m)&&(A=m[U],A&&(m[U]=null),d.event.triggered=ye,a.isPropagationStopped()&&de.addEventListener(ye,Wl),m[ye](),a.isPropagationStopped()&&de.removeEventListener(ye,Wl),d.event.triggered=void 0,A&&(m[U]=A)),a.result}},simulate:function(a,c,m){var _=d.extend(new d.Event,m,{type:a,isSimulated:!0});d.event.trigger(_,null,c)}}),d.fn.extend({trigger:function(a,c){return this.each(function(){d.event.trigger(a,c,this)})},triggerHandler:function(a,c){var m=this[0];if(m)return d.event.trigger(a,c,m,!0)}});var bd=/\[\]$/,Xl=/\r?\n/g,Md=/^(?:submit|button|image|reset|file)$/i,Ed=/^(?:input|select|textarea|keygen)/i;function ao(a,c,m,_){var b;if(Array.isArray(c))d.each(c,function(M,A){m||bd.test(a)?_(a,A):ao(a+"["+(typeof A=="object"&&A!=null?M:"")+"]",A,m,_)});else if(!m&&N(c)==="object")for(b in c)ao(a+"["+b+"]",c[b],m,_);else _(a,c)}d.param=function(a,c){var m,_=[],b=function(M,A){var F=E(A)?A():A;_[_.length]=encodeURIComponent(M)+"="+encodeURIComponent(F??"")};if(a==null)return"";if(Array.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){b(this.name,this.value)});else for(m in a)ao(m,a[m],c,b);return _.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=d.prop(this,"elements");return a?d.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!d(this).is(":disabled")&&Ed.test(this.nodeName)&&!Md.test(a)&&(this.checked||!ve.test(a))}).map(function(a,c){var m=d(this).val();return m==null?null:Array.isArray(m)?d.map(m,function(_){return{name:c.name,value:_.replace(Xl,`\r
`)}}):{name:c.name,value:m.replace(Xl,`\r
`)}}).get()}});var Td=/%20/g,Ad=/#.*$/,wd=/([?&])_=[^&]*/,Cd=/^(.*?):[ \t]*([^\r\n]*)$/mg,Rd=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Pd=/^(?:GET|HEAD)$/,Ld=/^\/\//,jl={},oo={},ql="*/".concat("*"),lo=v.createElement("a");lo.href=vs.href;function Yl(a){return function(c,m){typeof c!="string"&&(m=c,c="*");var _,b=0,M=c.toLowerCase().match(et)||[];if(E(m))for(;_=M[b++];)_[0]==="+"?(_=_.slice(1)||"*",(a[_]=a[_]||[]).unshift(m)):(a[_]=a[_]||[]).push(m)}}function Kl(a,c,m,_){var b={},M=a===oo;function A(F){var U;return b[F]=!0,d.each(a[F]||[],function(G,le){var de=le(c,m,_);if(typeof de=="string"&&!M&&!b[de])return c.dataTypes.unshift(de),A(de),!1;if(M)return!(U=de)}),U}return A(c.dataTypes[0])||!b["*"]&&A("*")}function co(a,c){var m,_,b=d.ajaxSettings.flatOptions||{};for(m in c)c[m]!==void 0&&((b[m]?a:_||(_={}))[m]=c[m]);return _&&d.extend(!0,a,_),a}function Dd(a,c,m){for(var _,b,M,A,F=a.contents,U=a.dataTypes;U[0]==="*";)U.shift(),_===void 0&&(_=a.mimeType||c.getResponseHeader("Content-Type"));if(_){for(b in F)if(F[b]&&F[b].test(_)){U.unshift(b);break}}if(U[0]in m)M=U[0];else{for(b in m){if(!U[0]||a.converters[b+" "+U[0]]){M=b;break}A||(A=b)}M=M||A}if(M)return M!==U[0]&&U.unshift(M),m[M]}function Id(a,c,m,_){var b,M,A,F,U,G={},le=a.dataTypes.slice();if(le[1])for(A in a.converters)G[A.toLowerCase()]=a.converters[A];for(M=le.shift();M;)if(a.responseFields[M]&&(m[a.responseFields[M]]=c),!U&&_&&a.dataFilter&&(c=a.dataFilter(c,a.dataType)),U=M,M=le.shift(),M){if(M==="*")M=U;else if(U!=="*"&&U!==M){if(A=G[U+" "+M]||G["* "+M],!A){for(b in G)if(F=b.split(" "),F[1]===M&&(A=G[U+" "+F[0]]||G["* "+F[0]],A)){A===!0?A=G[b]:G[b]!==!0&&(M=F[0],le.unshift(F[1]));break}}if(A!==!0)if(A&&a.throws)c=A(c);else try{c=A(c)}catch(de){return{state:"parsererror",error:A?de:"No conversion from "+U+" to "+M}}}}return{state:"success",data:c}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vs.href,type:"GET",isLocal:Rd.test(vs.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ql,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,c){return c?co(co(a,d.ajaxSettings),c):co(d.ajaxSettings,a)},ajaxPrefilter:Yl(jl),ajaxTransport:Yl(oo),ajax:function(a,c){typeof a=="object"&&(c=a,a=void 0),c=c||{};var m,_,b,M,A,F,U,G,le,de,J=d.ajaxSetup({},c),ye=J.context||J,nt=J.context&&(ye.nodeType||ye.jquery)?d(ye):d.event,Ct=d.Deferred(),pt=d.Callbacks("once memory"),cn=J.statusCode||{},en={},Qn={},ei="canceled",Mt={readyState:0,getResponseHeader:function(Pt){var Kt;if(U){if(!M)for(M={};Kt=Cd.exec(b);)M[Kt[1].toLowerCase()+" "]=(M[Kt[1].toLowerCase()+" "]||[]).concat(Kt[2]);Kt=M[Pt.toLowerCase()+" "]}return Kt==null?null:Kt.join(", ")},getAllResponseHeaders:function(){return U?b:null},setRequestHeader:function(Pt,Kt){return U==null&&(Pt=Qn[Pt.toLowerCase()]=Qn[Pt.toLowerCase()]||Pt,en[Pt]=Kt),this},overrideMimeType:function(Pt){return U==null&&(J.mimeType=Pt),this},statusCode:function(Pt){var Kt;if(Pt)if(U)Mt.always(Pt[Mt.status]);else for(Kt in Pt)cn[Kt]=[cn[Kt],Pt[Kt]];return this},abort:function(Pt){var Kt=Pt||ei;return m&&m.abort(Kt),ar(0,Kt),this}};if(Ct.promise(Mt),J.url=((a||J.url||vs.href)+"").replace(Ld,vs.protocol+"//"),J.type=c.method||c.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(et)||[""],J.crossDomain==null){F=v.createElement("a");try{F.href=J.url,F.href=F.href,J.crossDomain=lo.protocol+"//"+lo.host!=F.protocol+"//"+F.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=d.param(J.data,J.traditional)),Kl(jl,J,c,Mt),U)return Mt;G=d.event&&J.global,G&&d.active++===0&&d.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!Pd.test(J.type),_=J.url.replace(Ad,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(Td,"+")):(de=J.url.slice(_.length),J.data&&(J.processData||typeof J.data=="string")&&(_+=(so.test(_)?"&":"?")+J.data,delete J.data),J.cache===!1&&(_=_.replace(wd,"$1"),de=(so.test(_)?"&":"?")+"_="+Vl.guid+++de),J.url=_+de),J.ifModified&&(d.lastModified[_]&&Mt.setRequestHeader("If-Modified-Since",d.lastModified[_]),d.etag[_]&&Mt.setRequestHeader("If-None-Match",d.etag[_])),(J.data&&J.hasContent&&J.contentType!==!1||c.contentType)&&Mt.setRequestHeader("Content-Type",J.contentType),Mt.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+ql+"; q=0.01":""):J.accepts["*"]);for(le in J.headers)Mt.setRequestHeader(le,J.headers[le]);if(J.beforeSend&&(J.beforeSend.call(ye,Mt,J)===!1||U))return Mt.abort();if(ei="abort",pt.add(J.complete),Mt.done(J.success),Mt.fail(J.error),m=Kl(oo,J,c,Mt),!m)ar(-1,"No Transport");else{if(Mt.readyState=1,G&&nt.trigger("ajaxSend",[Mt,J]),U)return Mt;J.async&&J.timeout>0&&(A=e.setTimeout(function(){Mt.abort("timeout")},J.timeout));try{U=!1,m.send(en,ar)}catch(Pt){if(U)throw Pt;ar(-1,Pt)}}function ar(Pt,Kt,ys,fo){var ti,Ss,ni,Di,Ii,Un=Kt;U||(U=!0,A&&e.clearTimeout(A),m=void 0,b=fo||"",Mt.readyState=Pt>0?4:0,ti=Pt>=200&&Pt<300||Pt===304,ys&&(Di=Dd(J,Mt,ys)),!ti&&d.inArray("script",J.dataTypes)>-1&&d.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),Di=Id(J,Di,Mt,ti),ti?(J.ifModified&&(Ii=Mt.getResponseHeader("Last-Modified"),Ii&&(d.lastModified[_]=Ii),Ii=Mt.getResponseHeader("etag"),Ii&&(d.etag[_]=Ii)),Pt===204||J.type==="HEAD"?Un="nocontent":Pt===304?Un="notmodified":(Un=Di.state,Ss=Di.data,ni=Di.error,ti=!ni)):(ni=Un,(Pt||!Un)&&(Un="error",Pt<0&&(Pt=0))),Mt.status=Pt,Mt.statusText=(Kt||Un)+"",ti?Ct.resolveWith(ye,[Ss,Un,Mt]):Ct.rejectWith(ye,[Mt,Un,ni]),Mt.statusCode(cn),cn=void 0,G&&nt.trigger(ti?"ajaxSuccess":"ajaxError",[Mt,J,ti?Ss:ni]),pt.fireWith(ye,[Mt,Un]),G&&(nt.trigger("ajaxComplete",[Mt,J]),--d.active||d.event.trigger("ajaxStop")))}return Mt},getJSON:function(a,c,m){return d.get(a,c,m,"json")},getScript:function(a,c){return d.get(a,void 0,c,"script")}}),d.each(["get","post"],function(a,c){d[c]=function(m,_,b,M){return E(_)&&(M=M||b,b=_,_=void 0),d.ajax(d.extend({url:m,type:c,dataType:M,data:_,success:b},d.isPlainObject(m)&&m))}}),d.ajaxPrefilter(function(a){var c;for(c in a.headers)c.toLowerCase()==="content-type"&&(a.contentType=a.headers[c]||"")}),d._evalUrl=function(a,c,m){return d.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){d.globalEval(_,c,m)}})},d.fn.extend({wrapAll:function(a){var c;return this[0]&&(E(a)&&(a=a.call(this[0])),c=d(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var m=this;m.firstElementChild;)m=m.firstElementChild;return m}).append(this)),this},wrapInner:function(a){return E(a)?this.each(function(c){d(this).wrapInner(a.call(this,c))}):this.each(function(){var c=d(this),m=c.contents();m.length?m.wrapAll(a):c.append(a)})},wrap:function(a){var c=E(a);return this.each(function(m){d(this).wrapAll(c?a.call(this,m):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(a){return!d.expr.pseudos.visible(a)},d.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},d.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Nd={0:200,1223:204},xs=d.ajaxSettings.xhr();S.cors=!!xs&&"withCredentials"in xs,S.ajax=xs=!!xs,d.ajaxTransport(function(a){var c,m;if(S.cors||xs&&!a.crossDomain)return{send:function(_,b){var M,A=a.xhr();if(A.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(M in a.xhrFields)A[M]=a.xhrFields[M];a.mimeType&&A.overrideMimeType&&A.overrideMimeType(a.mimeType),!a.crossDomain&&!_["X-Requested-With"]&&(_["X-Requested-With"]="XMLHttpRequest");for(M in _)A.setRequestHeader(M,_[M]);c=function(F){return function(){c&&(c=m=A.onload=A.onerror=A.onabort=A.ontimeout=A.onreadystatechange=null,F==="abort"?A.abort():F==="error"?typeof A.status!="number"?b(0,"error"):b(A.status,A.statusText):b(Nd[A.status]||A.status,A.statusText,(A.responseType||"text")!=="text"||typeof A.responseText!="string"?{binary:A.response}:{text:A.responseText},A.getAllResponseHeaders()))}},A.onload=c(),m=A.onerror=A.ontimeout=c("error"),A.onabort!==void 0?A.onabort=m:A.onreadystatechange=function(){A.readyState===4&&e.setTimeout(function(){c&&m()})},c=c("abort");try{A.send(a.hasContent&&a.data||null)}catch(F){if(c)throw F}},abort:function(){c&&c()}}}),d.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return d.globalEval(a),a}}}),d.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),d.ajaxTransport("script",function(a){if(a.crossDomain||a.scriptAttrs){var c,m;return{send:function(_,b){c=d("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",m=function(M){c.remove(),m=null,M&&b(M.type==="error"?404:200,M.type)}),v.head.appendChild(c[0])},abort:function(){m&&m()}}}});var $l=[],uo=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=$l.pop()||d.expando+"_"+Vl.guid++;return this[a]=!0,a}}),d.ajaxPrefilter("json jsonp",function(a,c,m){var _,b,M,A=a.jsonp!==!1&&(uo.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&uo.test(a.data)&&"data");if(A||a.dataTypes[0]==="jsonp")return _=a.jsonpCallback=E(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,A?a[A]=a[A].replace(uo,"$1"+_):a.jsonp!==!1&&(a.url+=(so.test(a.url)?"&":"?")+a.jsonp+"="+_),a.converters["script json"]=function(){return M||d.error(_+" was not called"),M[0]},a.dataTypes[0]="json",b=e[_],e[_]=function(){M=arguments},m.always(function(){b===void 0?d(e).removeProp(_):e[_]=b,a[_]&&(a.jsonpCallback=c.jsonpCallback,$l.push(_)),M&&E(b)&&b(M[0]),M=b=void 0}),"script"}),S.createHTMLDocument=function(){var a=v.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",a.childNodes.length===2}(),d.parseHTML=function(a,c,m){if(typeof a!="string")return[];typeof c=="boolean"&&(m=c,c=!1);var _,b,M;return c||(S.createHTMLDocument?(c=v.implementation.createHTMLDocument(""),_=c.createElement("base"),_.href=v.location.href,c.head.appendChild(_)):c=v),b=vt.exec(a),M=!m&&[],b?[c.createElement(b[1])]:(b=jt([a],c,M),M&&M.length&&d(M).remove(),d.merge([],b.childNodes))},d.fn.load=function(a,c,m){var _,b,M,A=this,F=a.indexOf(" ");return F>-1&&(_=rr(a.slice(F)),a=a.slice(0,F)),E(c)?(m=c,c=void 0):c&&typeof c=="object"&&(b="POST"),A.length>0&&d.ajax({url:a,type:b||"GET",dataType:"html",data:c}).done(function(U){M=arguments,A.html(_?d("<div>").append(d.parseHTML(U)).find(_):U)}).always(m&&function(U,G){A.each(function(){m.apply(this,M||[U.responseText,G,U])})}),this},d.expr.pseudos.animated=function(a){return d.grep(d.timers,function(c){return a===c.elem}).length},d.offset={setOffset:function(a,c,m){var _,b,M,A,F,U,G,le=d.css(a,"position"),de=d(a),J={};le==="static"&&(a.style.position="relative"),F=de.offset(),M=d.css(a,"top"),U=d.css(a,"left"),G=(le==="absolute"||le==="fixed")&&(M+U).indexOf("auto")>-1,G?(_=de.position(),A=_.top,b=_.left):(A=parseFloat(M)||0,b=parseFloat(U)||0),E(c)&&(c=c.call(a,m,d.extend({},F))),c.top!=null&&(J.top=c.top-F.top+A),c.left!=null&&(J.left=c.left-F.left+b),"using"in c?c.using.call(a,J):de.css(J)}},d.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(b){d.offset.setOffset(this,a,b)});var c,m,_=this[0];if(_)return _.getClientRects().length?(c=_.getBoundingClientRect(),m=_.ownerDocument.defaultView,{top:c.top+m.pageYOffset,left:c.left+m.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,c,m,_=this[0],b={top:0,left:0};if(d.css(_,"position")==="fixed")c=_.getBoundingClientRect();else{for(c=this.offset(),m=_.ownerDocument,a=_.offsetParent||m.documentElement;a&&(a===m.body||a===m.documentElement)&&d.css(a,"position")==="static";)a=a.parentNode;a&&a!==_&&a.nodeType===1&&(b=d(a).offset(),b.top+=d.css(a,"borderTopWidth",!0),b.left+=d.css(a,"borderLeftWidth",!0))}return{top:c.top-b.top-d.css(_,"marginTop",!0),left:c.left-b.left-d.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&d.css(a,"position")==="static";)a=a.offsetParent;return a||we})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var m=c==="pageYOffset";d.fn[a]=function(_){return qe(this,function(b,M,A){var F;if(x(b)?F=b:b.nodeType===9&&(F=b.defaultView),A===void 0)return F?F[c]:b[M];F?F.scrollTo(m?F.pageXOffset:A,m?A:F.pageYOffset):b[M]=A},a,_,arguments.length)}}),d.each(["top","left"],function(a,c){d.cssHooks[c]=Ke(S.pixelPosition,function(m,_){if(_)return _=ke(m,c),ne.test(_)?d(m).position()[c]+"px":_})}),d.each({Height:"height",Width:"width"},function(a,c){d.each({padding:"inner"+a,content:c,"":"outer"+a},function(m,_){d.fn[_]=function(b,M){var A=arguments.length&&(m||typeof b!="boolean"),F=m||(b===!0||M===!0?"margin":"border");return qe(this,function(U,G,le){var de;return x(U)?_.indexOf("outer")===0?U["inner"+a]:U.document.documentElement["client"+a]:U.nodeType===9?(de=U.documentElement,Math.max(U.body["scroll"+a],de["scroll"+a],U.body["offset"+a],de["offset"+a],de["client"+a])):le===void 0?d.css(U,G,F):d.style(U,G,le,F)},c,A?b:void 0,A)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,c){d.fn[c]=function(m){return this.on(c,m)}}),d.fn.extend({bind:function(a,c,m){return this.on(a,null,c,m)},unbind:function(a,c){return this.off(a,null,c)},delegate:function(a,c,m,_){return this.on(c,a,m,_)},undelegate:function(a,c,m){return arguments.length===1?this.off(a,"**"):this.off(c,a||"**",m)},hover:function(a,c){return this.on("mouseenter",a).on("mouseleave",c||a)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,c){d.fn[c]=function(m,_){return arguments.length>0?this.on(c,null,m,_):this.trigger(c)}});var Ud=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;d.proxy=function(a,c){var m,_,b;if(typeof c=="string"&&(m=a[c],c=a,a=m),!!E(a))return _=s.call(arguments,2),b=function(){return a.apply(c||this,_.concat(s.call(arguments)))},b.guid=a.guid=a.guid||d.guid++,b},d.holdReady=function(a){a?d.readyWait++:d.ready(!0)},d.isArray=Array.isArray,d.parseJSON=JSON.parse,d.nodeName=L,d.isFunction=E,d.isWindow=x,d.camelCase=te,d.type=N,d.now=Date.now,d.isNumeric=function(a){var c=d.type(a);return(c==="number"||c==="string")&&!isNaN(a-parseFloat(a))},d.trim=function(a){return a==null?"":(a+"").replace(Ud,"$1")};var Od=e.jQuery,Fd=e.$;return d.noConflict=function(a){return e.$===d&&(e.$=Fd),a&&e.jQuery===d&&(e.jQuery=Od),d},typeof t>"u"&&(e.jQuery=e.$=d),d})})(hf);var qd=hf.exports;const ct=jd(qd);(function(r,e,t){var n="particleground";function i(o){o=o||{};for(var l=1;l<arguments.length;l++){var u=arguments[l];if(u)for(var f in u)u.hasOwnProperty(f)&&(typeof u[f]=="object"?o[f]=i(o[f],u[f]):o[f]=u[f])}return o}function s(o,l){var u=!!t.createElement("canvas").getContext,f,h,p=[],g=0,y=0,S,E,x=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),v=!!e.DeviceOrientationEvent,I=0,R,N,X=0,B=!1;l=i({},e[n].defaults,l);function d(){if(u){f=t.createElement("canvas"),f.className="pg-canvas",f.style.display="block",o.insertBefore(f,o.firstChild),h=f.getContext("2d"),Y();for(var oe=Math.round(f.width*f.height/l.density),Q=0;Q<oe;Q++){var Se=new j;Se.setStackPos(Q),p.push(Se)}e.addEventListener("resize",function(){P()},!1),t.addEventListener("mousemove",function(Ae){g=Ae.pageX,y=Ae.pageY},!1),v&&!x&&e.addEventListener("deviceorientation",function(Ae){X=Math.min(Math.max(-Ae.beta,-30),30),I=Math.min(Math.max(-Ae.gamma,-30),30)},!0),L(),ue("onInit")}}function Y(){f.width=o.offsetWidth,f.height=o.offsetHeight,h.fillStyle=l.dotColor,h.strokeStyle=l.lineColor,h.lineWidth=l.lineWidth}function L(){if(u){S=e.innerWidth,E=e.innerHeight,h.clearRect(0,0,f.width,f.height);for(var oe=0;oe<p.length;oe++)p[oe].updatePosition();for(var oe=0;oe<p.length;oe++)p[oe].draw();B||requestAnimationFrame(L)}}function P(){Y();for(var oe=o.offsetWidth,Q=o.offsetHeight,Se=p.length-1;Se>=0;Se--)(p[Se].position.x>oe||p[Se].position.y>Q)&&p.splice(Se,1);var Ae=Math.round(f.width*f.height/l.density);if(Ae>p.length)for(;Ae>p.length;){var Oe=new j;p.push(Oe)}else Ae<p.length&&p.splice(Ae);for(Se=p.length-1;Se>=0;Se--)p[Se].setStackPos(Se)}function z(){B=!0}function ce(){B=!1,L()}function j(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(Math.random()*3),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*f.width),y:Math.ceil(Math.random()*f.height)},this.speed={},l.directionX){case"left":this.speed.x=+(-l.maxSpeedX+Math.random()*l.maxSpeedX-l.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*l.maxSpeedX+l.minSpeedX).toFixed(2);break;default:this.speed.x=+(-l.maxSpeedX/2+Math.random()*l.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?l.minSpeedX:-l.minSpeedX;break}switch(l.directionY){case"up":this.speed.y=+(-l.maxSpeedY+Math.random()*l.maxSpeedY-l.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*l.maxSpeedY+l.minSpeedY).toFixed(2);break;default:this.speed.y=+(-l.maxSpeedY/2+Math.random()*l.maxSpeedY).toFixed(2),this.speed.y+=this.speed.y>0?l.minSpeedY:-l.minSpeedY;break}}j.prototype.draw=function(){h.beginPath(),h.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,l.particleRadius/2,0,Math.PI*2,!0),h.closePath(),h.fill(),h.beginPath();for(var oe=p.length-1;oe>this.stackPos;oe--){var Q=p[oe],Se=this.position.x-Q.position.x,Ae=this.position.y-Q.position.y,Oe=Math.sqrt(Se*Se+Ae*Ae).toFixed(2);Oe<l.proximity&&(h.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),l.curvedLines?h.quadraticCurveTo(Math.max(Q.position.x,Q.position.x),Math.min(Q.position.y,Q.position.y),Q.position.x+Q.parallaxOffsetX,Q.position.y+Q.parallaxOffsetY):h.lineTo(Q.position.x+Q.parallaxOffsetX,Q.position.y+Q.parallaxOffsetY))}h.stroke(),h.closePath()},j.prototype.updatePosition=function(){if(l.parallax){if(v&&!x){var oe=(S-0)/60;R=(I- -30)*oe+0;var Q=(E-0)/60;N=(X- -30)*Q+0}else R=g,N=y;this.parallaxTargX=(R-S/2)/(l.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(N-E/2)/(l.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}switch(l.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=f.width-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>f.width&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>f.width||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x);break}switch(l.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=f.height-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>f.height&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>f.height||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y);break}this.position.x+=this.speed.x,this.position.y+=this.speed.y},j.prototype.setStackPos=function(oe){this.stackPos=oe};function pe(oe,Q){if(Q)l[oe]=Q;else return l[oe]}function me(){console.log("destroy"),f.parentNode.removeChild(f),ue("onDestroy"),r&&r(o).removeData("plugin_"+n)}function ue(oe){l[oe]!==void 0&&l[oe].call(o)}return d(),{option:pe,destroy:me,start:ce,pause:z}}e[n]=function(o,l){for(var u=[],f=0;f<o.length;f++)typeof l=="object"||!l?o[f].plugin_particleground||(o[f].plugin_particleground=new s(o[f],l)):o[f].plugin_particleground[l]&&u.push(o[f].plugin_particleground[l].apply(o[f].plugin_particleground,Array.prototype.slice.call(arguments,2)));return u},e[n].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},r&&(r.fn[n]=function(o){if(typeof arguments[0]=="string"){var l=arguments[0],u=Array.prototype.slice.call(arguments,1),f;return this.each(function(){r.data(this,"plugin_"+n)&&typeof r.data(this,"plugin_"+n)[l]=="function"&&(f=r.data(this,"plugin_"+n)[l].apply(this,u))}),f!==void 0?f:this}else if(typeof o=="object"||!o)return this.each(function(){r.data(this,"plugin_"+n)||r.data(this,"plugin_"+n,new s(this,o))})})})(ct,window,document);ct.fn.particleground;ct(document).ready(function(){ct("#particles").particleground({dotColor:"rgba(255, 255, 255, 0.3)",lineColor:"rgba(255, 255, 255, 0.5)",density:5e3})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="165",Ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yd=0,ec=1,Kd=2,pf=1,mf=2,Ei=3,Ci=0,Rn=1,Xn=2,Yi=0,$r=1,tc=2,nc=3,ic=4,$d=5,gr=100,Zd=101,Jd=102,Qd=103,eh=104,th=200,nh=201,ih=202,rh=203,al=204,ol=205,sh=206,ah=207,oh=208,lh=209,ch=210,uh=211,fh=212,dh=213,hh=214,ph=0,mh=1,gh=2,ka=3,_h=4,vh=5,xh=6,yh=7,gf=0,Sh=1,bh=2,Ki=0,Mh=1,Eh=2,Th=3,Ah=4,wh=5,Ch=6,Rh=7,rc="attached",Ph="detached",_f=300,es=301,ts=302,ll=303,cl=304,Za=306,ns=1e3,Wi=1001,Ha=1002,En=1003,vf=1004,Ns=1005,Dn=1006,Fa=1007,Ai=1008,$i=1009,Lh=1010,Dh=1011,za=1012,xf=1013,is=1014,li=1015,Ja=1016,yf=1017,Sf=1018,rs=1020,Ih=35902,Nh=1021,Uh=1022,qn=1023,Oh=1024,Fh=1025,Zr=1026,ss=1027,bf=1028,Mf=1029,Bh=1030,Ef=1031,Tf=1033,xo=33776,yo=33777,So=33778,bo=33779,sc=35840,ac=35841,oc=35842,lc=35843,cc=36196,uc=37492,fc=37496,dc=37808,hc=37809,pc=37810,mc=37811,gc=37812,_c=37813,vc=37814,xc=37815,yc=37816,Sc=37817,bc=37818,Mc=37819,Ec=37820,Tc=37821,Mo=36492,Ac=36494,wc=36495,kh=36283,Cc=36284,Rc=36285,Pc=36286,Gs=2300,Ws=2301,Eo=2302,Lc=2400,Dc=2401,Ic=2402,Hh=2500,zh=0,Af=1,ul=2,Vh=3200,Gh=3201,wf=0,Wh=1,Gi="",gn="srgb",fn="srgb-linear",El="display-p3",Qa="display-p3-linear",Va="linear",Wt="srgb",Ga="rec709",Wa="p3",Cr=7680,Nc=519,Xh=512,jh=513,qh=514,Cf=515,Yh=516,Kh=517,$h=518,Zh=519,fl=35044,Uc="300 es",wi=2e3,Xa=2001;class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const Bs=Math.PI/180,as=180/Math.PI;function Yn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function un(r,e,t){return Math.max(e,Math.min(t,r))}function Tl(r,e){return(r%e+e)%e}function Jh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Qh(r,e,t){return r!==e?(t-r)/(e-r):0}function ks(r,e,t){return(1-t)*r+t*e}function ep(r,e,t,n){return ks(r,e,1-Math.exp(-t*n))}function tp(r,e=1){return e-Math.abs(Tl(r,e*2)-e)}function np(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ip(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function rp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sp(r,e){return r+Math.random()*(e-r)}function ap(r){return r*(.5-Math.random())}function op(r){r!==void 0&&(Oc=r);let e=Oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lp(r){return r*Bs}function cp(r){return r*as}function up(r){return(r&r-1)===0&&r!==0}function fp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hp(r,e,t,n,i){const s=Math.cos,o=Math.sin,l=s(t/2),u=o(t/2),f=s((e+n)/2),h=o((e+n)/2),p=s((e-n)/2),g=o((e-n)/2),y=s((n-e)/2),S=o((n-e)/2);switch(i){case"XYX":r.set(l*h,u*p,u*g,l*f);break;case"YZY":r.set(u*g,l*h,u*p,l*f);break;case"ZXZ":r.set(u*p,u*g,l*h,l*f);break;case"XZX":r.set(l*h,u*S,u*y,l*f);break;case"YXY":r.set(u*y,l*h,u*S,l*f);break;case"ZYZ":r.set(u*S,u*y,l*h,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rf={DEG2RAD:Bs,RAD2DEG:as,generateUUID:Yn,clamp:un,euclideanModulo:Tl,mapLinear:Jh,inverseLerp:Qh,lerp:ks,damp:ep,pingpong:tp,smoothstep:np,smootherstep:ip,randInt:rp,randFloat:sp,randFloatSpread:ap,seededRandom:op,degToRad:lp,radToDeg:cp,isPowerOfTwo:up,ceilPowerOfTwo:fp,floorPowerOfTwo:dp,setQuaternionFromProperEuler:hp,normalize:Ot,denormalize:jn};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,n,i,s,o,l,u,f){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,u,f)}set(e,t,n,i,s,o,l,u,f){const h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=t,h[4]=s,h[5]=u,h[6]=n,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],u=n[6],f=n[1],h=n[4],p=n[7],g=n[2],y=n[5],S=n[8],E=i[0],x=i[3],v=i[6],I=i[1],R=i[4],N=i[7],X=i[2],B=i[5],d=i[8];return s[0]=o*E+l*I+u*X,s[3]=o*x+l*R+u*B,s[6]=o*v+l*N+u*d,s[1]=f*E+h*I+p*X,s[4]=f*x+h*R+p*B,s[7]=f*v+h*N+p*d,s[2]=g*E+y*I+S*X,s[5]=g*x+y*R+S*B,s[8]=g*v+y*N+S*d,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8];return t*o*h-t*l*f-n*s*h+n*l*u+i*s*f-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8],p=h*o-l*f,g=l*u-h*s,y=f*s-o*u,S=t*p+n*g+i*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(i*f-h*n)*E,e[2]=(l*n-i*o)*E,e[3]=g*E,e[4]=(h*t-i*u)*E,e[5]=(i*s-l*t)*E,e[6]=y*E,e[7]=(n*u-f*t)*E,e[8]=(o*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*o+f*l)+o+e,-i*f,i*u,-i*(-f*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new gt;function Pf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pp(){const r=Xs("canvas");return r.style.display="block",r}const Fc={};function Al(r){r in Fc||(Fc[r]=!0,console.warn(r))}function mp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Bc=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kc=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[fn]:{transfer:Va,primaries:Ga,toReference:r=>r,fromReference:r=>r},[gn]:{transfer:Wt,primaries:Ga,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qa]:{transfer:Va,primaries:Wa,toReference:r=>r.applyMatrix3(kc),fromReference:r=>r.applyMatrix3(Bc)},[El]:{transfer:Wt,primaries:Wa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(kc),fromReference:r=>r.applyMatrix3(Bc).convertLinearToSRGB()}},gp=new Set([fn,Qa]),It={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!gp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=aa[e].toReference,i=aa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return aa[r].primaries},getTransfer:function(r){return r===Gi?Va:aa[r].transfer}};function Jr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class _p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=Xs("canvas")),Rr.width=e.width,Rr.height=e.height;const n=Rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vp=0;class Lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(wo(i[o].image)):s.push(wo(i[o]))}else s=wo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function wo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_p.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xp=0;class on extends yr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Wi,i=Wi,s=Dn,o=Ai,l=qn,u=$i,f=on.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Yn(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=_f;on.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,i=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,f=u[0],h=u[4],p=u[8],g=u[1],y=u[5],S=u[9],E=u[2],x=u[6],v=u[10];if(Math.abs(h-g)<.01&&Math.abs(p-E)<.01&&Math.abs(S-x)<.01){if(Math.abs(h+g)<.1&&Math.abs(p+E)<.1&&Math.abs(S+x)<.1&&Math.abs(f+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(f+1)/2,N=(y+1)/2,X=(v+1)/2,B=(h+g)/4,d=(p+E)/4,Y=(S+x)/4;return R>N&&R>X?R<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(R),i=B/n,s=d/n):N>X?N<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(N),n=B/i,s=Y/i):X<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(X),n=d/s,i=Y/s),this.set(n,i,s,t),this}let I=Math.sqrt((x-S)*(x-S)+(p-E)*(p-E)+(g-h)*(g-h));return Math.abs(I)<.001&&(I=1),this.x=(x-S)/I,this.y=(p-E)/I,this.z=(g-h)/I,this.w=Math.acos((f+y+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yp extends yr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends yp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Df extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sp extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let u=n[i+0],f=n[i+1],h=n[i+2],p=n[i+3];const g=s[o+0],y=s[o+1],S=s[o+2],E=s[o+3];if(l===0){e[t+0]=u,e[t+1]=f,e[t+2]=h,e[t+3]=p;return}if(l===1){e[t+0]=g,e[t+1]=y,e[t+2]=S,e[t+3]=E;return}if(p!==E||u!==g||f!==y||h!==S){let x=1-l;const v=u*g+f*y+h*S+p*E,I=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const X=Math.sqrt(R),B=Math.atan2(X,v*I);x=Math.sin(x*B)/X,l=Math.sin(l*B)/X}const N=l*I;if(u=u*x+g*N,f=f*x+y*N,h=h*x+S*N,p=p*x+E*N,x===1-l){const X=1/Math.sqrt(u*u+f*f+h*h+p*p);u*=X,f*=X,h*=X,p*=X}}e[t]=u,e[t+1]=f,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],u=n[i+1],f=n[i+2],h=n[i+3],p=s[o],g=s[o+1],y=s[o+2],S=s[o+3];return e[t]=l*S+h*p+u*y-f*g,e[t+1]=u*S+h*g+f*p-l*y,e[t+2]=f*S+h*y+l*g-u*p,e[t+3]=h*S-l*p-u*g-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,f=l(n/2),h=l(i/2),p=l(s/2),g=u(n/2),y=u(i/2),S=u(s/2);switch(o){case"XYZ":this._x=g*h*p+f*y*S,this._y=f*y*p-g*h*S,this._z=f*h*S+g*y*p,this._w=f*h*p-g*y*S;break;case"YXZ":this._x=g*h*p+f*y*S,this._y=f*y*p-g*h*S,this._z=f*h*S-g*y*p,this._w=f*h*p+g*y*S;break;case"ZXY":this._x=g*h*p-f*y*S,this._y=f*y*p+g*h*S,this._z=f*h*S+g*y*p,this._w=f*h*p-g*y*S;break;case"ZYX":this._x=g*h*p-f*y*S,this._y=f*y*p+g*h*S,this._z=f*h*S-g*y*p,this._w=f*h*p+g*y*S;break;case"YZX":this._x=g*h*p+f*y*S,this._y=f*y*p+g*h*S,this._z=f*h*S-g*y*p,this._w=f*h*p-g*y*S;break;case"XZY":this._x=g*h*p-f*y*S,this._y=f*y*p-g*h*S,this._z=f*h*S+g*y*p,this._w=f*h*p+g*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],u=t[9],f=t[2],h=t[6],p=t[10],g=n+l+p;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(h-u)*y,this._y=(s-f)*y,this._z=(o-i)*y}else if(n>l&&n>p){const y=2*Math.sqrt(1+n-l-p);this._w=(h-u)/y,this._x=.25*y,this._y=(i+o)/y,this._z=(s+f)/y}else if(l>p){const y=2*Math.sqrt(1+l-n-p);this._w=(s-f)/y,this._x=(i+o)/y,this._y=.25*y,this._z=(u+h)/y}else{const y=2*Math.sqrt(1+p-n-l);this._w=(o-i)/y,this._x=(s+f)/y,this._y=(u+h)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,u=t._y,f=t._z,h=t._w;return this._x=n*h+o*l+i*f-s*u,this._y=i*h+o*u+s*l-n*f,this._z=s*h+o*f+n*u-i*l,this._w=o*h-n*l-i*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const y=1-t;return this._w=y*o+t*this._w,this._x=y*n+t*this._x,this._y=y*i+t*this._y,this._z=y*s+t*this._z,this.normalize(),this}const f=Math.sqrt(u),h=Math.atan2(f,l),p=Math.sin((1-t)*h)/f,g=Math.sin(t*h)/f;return this._w=o*p+this._w*g,this._x=n*p+this._x*g,this._y=i*p+this._y*g,this._z=s*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,u=e.w,f=2*(o*i-l*n),h=2*(l*t-s*i),p=2*(s*n-o*t);return this.x=t+u*f+o*p-l*h,this.y=n+u*h+l*f-s*p,this.z=i+u*p+s*h-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=i*u-s*l,this.y=s*o-n*u,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new V,Hc=new fi;class Ri{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),la.subVectors(this.max,Ms),Pr.subVectors(e.a,Ms),Lr.subVectors(e.b,Ms),Dr.subVectors(e.c,Ms),Ui.subVectors(Lr,Pr),Oi.subVectors(Dr,Lr),lr.subVectors(Pr,Dr);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-lr.z,lr.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,lr.z,0,-lr.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-lr.y,lr.x,0];return!Ro(t,Pr,Lr,Dr,la)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Pr,Lr,Dr,la))?!1:(ca.crossVectors(Ui,Oi),t=[ca.x,ca.y,ca.z],Ro(t,Pr,Lr,Dr,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new V,new V,new V,new V,new V,new V,new V,new V],Vn=new V,oa=new Ri,Pr=new V,Lr=new V,Dr=new V,Ui=new V,Oi=new V,lr=new V,Ms=new V,la=new V,ca=new V,cr=new V;function Ro(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){cr.fromArray(r,s);const l=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),u=e.dot(cr),f=t.dot(cr),h=n.dot(cr);if(Math.max(-Math.max(u,f,h),Math.min(u,f,h))>l)return!1}return!0}const bp=new Ri,Es=new V,Po=new V;class hi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Po)),this.expandByPoint(Es.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new V,Lo=new V,ua=new V,Fi=new V,Do=new V,fa=new V,Io=new V;class qs{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lo.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Lo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ua),l=Fi.dot(this.direction),u=-Fi.dot(ua),f=Fi.lengthSq(),h=Math.abs(1-o*o);let p,g,y,S;if(h>0)if(p=o*u-l,g=o*l-u,S=s*h,p>=0)if(g>=-S)if(g<=S){const E=1/h;p*=E,g*=E,y=p*(p+o*g+2*l)+g*(o*p+g+2*u)+f}else g=s,p=Math.max(0,-(o*g+l)),y=-p*p+g*(g+2*u)+f;else g=-s,p=Math.max(0,-(o*g+l)),y=-p*p+g*(g+2*u)+f;else g<=-S?(p=Math.max(0,-(-o*s+l)),g=p>0?-s:Math.min(Math.max(-s,-u),s),y=-p*p+g*(g+2*u)+f):g<=S?(p=0,g=Math.min(Math.max(-s,-u),s),y=g*(g+2*u)+f):(p=Math.max(0,-(o*s+l)),g=p>0?s:Math.min(Math.max(-s,-u),s),y=-p*p+g*(g+2*u)+f);else g=o>0?-s:s,p=Math.max(0,-(o*g+l)),y=-p*p+g*(g+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Lo).addScaledVector(ua,g),y}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,u;const f=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,g=this.origin;return f>=0?(n=(e.min.x-g.x)*f,i=(e.max.x-g.x)*f):(n=(e.max.x-g.x)*f,i=(e.min.x-g.x)*f),h>=0?(s=(e.min.y-g.y)*h,o=(e.max.y-g.y)*h):(s=(e.max.y-g.y)*h,o=(e.min.y-g.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),p>=0?(l=(e.min.z-g.z)*p,u=(e.max.z-g.z)*p):(l=(e.max.z-g.z)*p,u=(e.min.z-g.z)*p),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,i,s){Do.subVectors(t,e),fa.subVectors(n,e),Io.crossVectors(Do,fa);let o=this.direction.dot(Io),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const u=l*this.direction.dot(fa.crossVectors(Fi,fa));if(u<0)return null;const f=l*this.direction.dot(Do.cross(Fi));if(f<0||u+f>o)return null;const h=-l*Fi.dot(Io);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,i,s,o,l,u,f,h,p,g,y,S,E,x){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,u,f,h,p,g,y,S,E,x)}set(e,t,n,i,s,o,l,u,f,h,p,g,y,S,E,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=l,v[13]=u,v[2]=f,v[6]=h,v[10]=p,v[14]=g,v[3]=y,v[7]=S,v[11]=E,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(i),f=Math.sin(i),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const g=o*h,y=o*p,S=l*h,E=l*p;t[0]=u*h,t[4]=-u*p,t[8]=f,t[1]=y+S*f,t[5]=g-E*f,t[9]=-l*u,t[2]=E-g*f,t[6]=S+y*f,t[10]=o*u}else if(e.order==="YXZ"){const g=u*h,y=u*p,S=f*h,E=f*p;t[0]=g+E*l,t[4]=S*l-y,t[8]=o*f,t[1]=o*p,t[5]=o*h,t[9]=-l,t[2]=y*l-S,t[6]=E+g*l,t[10]=o*u}else if(e.order==="ZXY"){const g=u*h,y=u*p,S=f*h,E=f*p;t[0]=g-E*l,t[4]=-o*p,t[8]=S+y*l,t[1]=y+S*l,t[5]=o*h,t[9]=E-g*l,t[2]=-o*f,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const g=o*h,y=o*p,S=l*h,E=l*p;t[0]=u*h,t[4]=S*f-y,t[8]=g*f+E,t[1]=u*p,t[5]=E*f+g,t[9]=y*f-S,t[2]=-f,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const g=o*u,y=o*f,S=l*u,E=l*f;t[0]=u*h,t[4]=E-g*p,t[8]=S*p+y,t[1]=p,t[5]=o*h,t[9]=-l*h,t[2]=-f*h,t[6]=y*p+S,t[10]=g-E*p}else if(e.order==="XZY"){const g=o*u,y=o*f,S=l*u,E=l*f;t[0]=u*h,t[4]=-p,t[8]=f*h,t[1]=g*p+E,t[5]=o*h,t[9]=y*p-S,t[2]=S*p-y,t[6]=l*h,t[10]=E*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,Ep)}lookAt(e,t,n){const i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Bi.crossVectors(n,Pn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Bi.crossVectors(n,Pn)),Bi.normalize(),da.crossVectors(Pn,Bi),i[0]=Bi.x,i[4]=da.x,i[8]=Pn.x,i[1]=Bi.y,i[5]=da.y,i[9]=Pn.y,i[2]=Bi.z,i[6]=da.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],u=n[8],f=n[12],h=n[1],p=n[5],g=n[9],y=n[13],S=n[2],E=n[6],x=n[10],v=n[14],I=n[3],R=n[7],N=n[11],X=n[15],B=i[0],d=i[4],Y=i[8],L=i[12],P=i[1],z=i[5],ce=i[9],j=i[13],pe=i[2],me=i[6],ue=i[10],oe=i[14],Q=i[3],Se=i[7],Ae=i[11],Oe=i[15];return s[0]=o*B+l*P+u*pe+f*Q,s[4]=o*d+l*z+u*me+f*Se,s[8]=o*Y+l*ce+u*ue+f*Ae,s[12]=o*L+l*j+u*oe+f*Oe,s[1]=h*B+p*P+g*pe+y*Q,s[5]=h*d+p*z+g*me+y*Se,s[9]=h*Y+p*ce+g*ue+y*Ae,s[13]=h*L+p*j+g*oe+y*Oe,s[2]=S*B+E*P+x*pe+v*Q,s[6]=S*d+E*z+x*me+v*Se,s[10]=S*Y+E*ce+x*ue+v*Ae,s[14]=S*L+E*j+x*oe+v*Oe,s[3]=I*B+R*P+N*pe+X*Q,s[7]=I*d+R*z+N*me+X*Se,s[11]=I*Y+R*ce+N*ue+X*Ae,s[15]=I*L+R*j+N*oe+X*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],u=e[9],f=e[13],h=e[2],p=e[6],g=e[10],y=e[14],S=e[3],E=e[7],x=e[11],v=e[15];return S*(+s*u*p-i*f*p-s*l*g+n*f*g+i*l*y-n*u*y)+E*(+t*u*y-t*f*g+s*o*g-i*o*y+i*f*h-s*u*h)+x*(+t*f*p-t*l*y-s*o*p+n*o*y+s*l*h-n*f*h)+v*(-i*l*h-t*u*p+t*l*g+i*o*p-n*o*g+n*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8],p=e[9],g=e[10],y=e[11],S=e[12],E=e[13],x=e[14],v=e[15],I=p*x*f-E*g*f+E*u*y-l*x*y-p*u*v+l*g*v,R=S*g*f-h*x*f-S*u*y+o*x*y+h*u*v-o*g*v,N=h*E*f-S*p*f+S*l*y-o*E*y-h*l*v+o*p*v,X=S*p*u-h*E*u-S*l*g+o*E*g+h*l*x-o*p*x,B=t*I+n*R+i*N+s*X;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const d=1/B;return e[0]=I*d,e[1]=(E*g*s-p*x*s-E*i*y+n*x*y+p*i*v-n*g*v)*d,e[2]=(l*x*s-E*u*s+E*i*f-n*x*f-l*i*v+n*u*v)*d,e[3]=(p*u*s-l*g*s-p*i*f+n*g*f+l*i*y-n*u*y)*d,e[4]=R*d,e[5]=(h*x*s-S*g*s+S*i*y-t*x*y-h*i*v+t*g*v)*d,e[6]=(S*u*s-o*x*s-S*i*f+t*x*f+o*i*v-t*u*v)*d,e[7]=(o*g*s-h*u*s+h*i*f-t*g*f-o*i*y+t*u*y)*d,e[8]=N*d,e[9]=(S*p*s-h*E*s-S*n*y+t*E*y+h*n*v-t*p*v)*d,e[10]=(o*E*s-S*l*s+S*n*f-t*E*f-o*n*v+t*l*v)*d,e[11]=(h*l*s-o*p*s-h*n*f+t*p*f+o*n*y-t*l*y)*d,e[12]=X*d,e[13]=(h*E*i-S*p*i+S*n*g-t*E*g-h*n*x+t*p*x)*d,e[14]=(S*l*i-o*E*i-S*n*u+t*E*u+o*n*x-t*l*x)*d,e[15]=(o*p*i-h*l*i+h*n*u-t*p*u-o*n*g+t*l*g)*d,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,u=e.z,f=s*o,h=s*l;return this.set(f*o+n,f*l-i*u,f*u+i*l,0,f*l+i*u,h*l+n,h*u-i*o,0,f*u-i*l,h*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,f=s+s,h=o+o,p=l+l,g=s*f,y=s*h,S=s*p,E=o*h,x=o*p,v=l*p,I=u*f,R=u*h,N=u*p,X=n.x,B=n.y,d=n.z;return i[0]=(1-(E+v))*X,i[1]=(y+N)*X,i[2]=(S-R)*X,i[3]=0,i[4]=(y-N)*B,i[5]=(1-(g+v))*B,i[6]=(x+I)*B,i[7]=0,i[8]=(S+R)*d,i[9]=(x-I)*d,i[10]=(1-(g+E))*d,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ir.set(i[0],i[1],i[2]).length();const o=Ir.set(i[4],i[5],i[6]).length(),l=Ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);const f=1/s,h=1/o,p=1/l;return Gn.elements[0]*=f,Gn.elements[1]*=f,Gn.elements[2]*=f,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=p,Gn.elements[9]*=p,Gn.elements[10]*=p,t.setFromRotationMatrix(Gn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,o,l=wi){const u=this.elements,f=2*s/(t-e),h=2*s/(n-i),p=(t+e)/(t-e),g=(n+i)/(n-i);let y,S;if(l===wi)y=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(l===Xa)y=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=h,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,o,l=wi){const u=this.elements,f=1/(t-e),h=1/(n-i),p=1/(o-s),g=(t+e)*f,y=(n+i)*h;let S,E;if(l===wi)S=(o+s)*p,E=-2*p;else if(l===Xa)S=s*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-g,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-y,u[2]=0,u[6]=0,u[10]=E,u[14]=-S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ir=new V,Gn=new _t,Mp=new V(0,0,0),Ep=new V(1,1,1),Bi=new V,da=new V,Pn=new V,zc=new _t,Vc=new fi;class di{constructor(e=0,t=0,n=0,i=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],u=i[1],f=i[5],h=i[9],p=i[2],g=i[6],y=i[10];switch(t){case"XYZ":this._y=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,y),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,y),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-un(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class If{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tp=0;const Gc=new V,Nr=new fi,yi=new _t,ha=new V,Ts=new V,Ap=new V,wp=new fi,Wc=new V(1,0,0),Xc=new V(0,1,0),jc=new V(0,0,1),qc={type:"added"},Cp={type:"removed"},Ur={type:"childadded",child:null},No={type:"childremoved",child:null};class qt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new V,t=new di,n=new fi,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new gt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new If,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(jc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ts,ha,this.up):yi.lookAt(ha,Ts,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),Nr.setFromRotationMatrix(yi),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const l=i[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,h=u.length;f<h;f++){const p=u[f];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(s(e.materials,this.material[u]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(s(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),f=o(e.textures),h=o(e.images),p=o(e.shapes),g=o(e.skeletons),y=o(e.animations),S=o(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),y.length>0&&(n.animations=y),S.length>0&&(n.nodes=S)}return n.object=i,n;function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new V(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new V,Si=new V,Uo=new V,bi=new V,Or=new V,Fr=new V,Yc=new V,Oo=new V,Fo=new V,Bo=new V;class oi{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wn.subVectors(i,t),Si.subVectors(n,t),Uo.subVectors(e,t);const o=Wn.dot(Wn),l=Wn.dot(Si),u=Wn.dot(Uo),f=Si.dot(Si),h=Si.dot(Uo),p=o*f-l*l;if(p===0)return s.set(0,0,0),null;const g=1/p,y=(f*u-l*h)*g,S=(o*h-l*u)*g;return s.set(1-y-S,S,y)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,i,s,o,l,u){return this.getBarycoord(e,t,n,i,bi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,bi.x),u.addScaledVector(o,bi.y),u.addScaledVector(l,bi.z),u)}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),Si.subVectors(e,t),Wn.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;Or.subVectors(i,n),Fr.subVectors(s,n),Oo.subVectors(e,n);const u=Or.dot(Oo),f=Fr.dot(Oo);if(u<=0&&f<=0)return t.copy(n);Fo.subVectors(e,i);const h=Or.dot(Fo),p=Fr.dot(Fo);if(h>=0&&p<=h)return t.copy(i);const g=u*p-h*f;if(g<=0&&u>=0&&h<=0)return o=u/(u-h),t.copy(n).addScaledVector(Or,o);Bo.subVectors(e,s);const y=Or.dot(Bo),S=Fr.dot(Bo);if(S>=0&&y<=S)return t.copy(s);const E=y*f-u*S;if(E<=0&&f>=0&&S<=0)return l=f/(f-S),t.copy(n).addScaledVector(Fr,l);const x=h*S-y*p;if(x<=0&&p-h>=0&&y-S>=0)return Yc.subVectors(s,i),l=(p-h)/(p-h+(y-S)),t.copy(i).addScaledVector(Yc,l);const v=1/(x+E+g);return o=E*v,l=g*v,t.copy(n).addScaledVector(Or,o).addScaledVector(Fr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},pa={h:0,s:0,l:0};function ko(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let ut=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=It.workingColorSpace){if(e=Tl(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ko(o,s,e+1/3),this.g=ko(o,s,e),this.b=ko(o,s,e-1/3)}return It.toWorkingColorSpace(this,i),this}setStyle(e,t=gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=Nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return It.fromWorkingColorSpace(mn.copy(this),e),Math.round(un(mn.r*255,0,255))*65536+Math.round(un(mn.g*255,0,255))*256+Math.round(un(mn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,s=mn.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let u,f;const h=(l+o)/2;if(l===o)u=0,f=0;else{const p=o-l;switch(f=h<=.5?p/(o+l):p/(2-o-l),o){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=f,e.l=h,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=gn){It.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(pa);const n=ks(ki.h,pa.h,t),i=ks(ki.s,pa.s,t),s=ks(ki.l,pa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const mn=new ut;ut.NAMES=Nf;let Rp=0;class ci extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=$r,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ka&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xi extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new V,ma=new Qe;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Al("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),e}}class Uf extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Of extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ui extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pp=0;const Fn=new _t,Ho=new qt,Br=new V,Ln=new Ri,As=new Ri,an=new V;class Kn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?Of:Uf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new gt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];As.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(Ln.min,As.min),Ln.expandByPoint(an),an.addVectors(Ln.max,As.max),Ln.expandByPoint(an)):(Ln.expandByPoint(As.min),Ln.expandByPoint(As.max))}Ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],u=this.morphTargetsRelative;for(let f=0,h=l.count;f<h;f++)an.fromBufferAttribute(l,f),u&&(Br.fromBufferAttribute(e,f),an.add(Br)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let Y=0;Y<n.count;Y++)l[Y]=new V,u[Y]=new V;const f=new V,h=new V,p=new V,g=new Qe,y=new Qe,S=new Qe,E=new V,x=new V;function v(Y,L,P){f.fromBufferAttribute(n,Y),h.fromBufferAttribute(n,L),p.fromBufferAttribute(n,P),g.fromBufferAttribute(s,Y),y.fromBufferAttribute(s,L),S.fromBufferAttribute(s,P),h.sub(f),p.sub(f),y.sub(g),S.sub(g);const z=1/(y.x*S.y-S.x*y.y);isFinite(z)&&(E.copy(h).multiplyScalar(S.y).addScaledVector(p,-y.y).multiplyScalar(z),x.copy(p).multiplyScalar(y.x).addScaledVector(h,-S.x).multiplyScalar(z),l[Y].add(E),l[L].add(E),l[P].add(E),u[Y].add(x),u[L].add(x),u[P].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Y=0,L=I.length;Y<L;++Y){const P=I[Y],z=P.start,ce=P.count;for(let j=z,pe=z+ce;j<pe;j+=3)v(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const R=new V,N=new V,X=new V,B=new V;function d(Y){X.fromBufferAttribute(i,Y),B.copy(X);const L=l[Y];R.copy(L),R.sub(X.multiplyScalar(X.dot(L))).normalize(),N.crossVectors(B,L);const z=N.dot(u[Y])<0?-1:1;o.setXYZW(Y,R.x,R.y,R.z,z)}for(let Y=0,L=I.length;Y<L;++Y){const P=I[Y],z=P.start,ce=P.count;for(let j=z,pe=z+ce;j<pe;j+=3)d(e.getX(j+0)),d(e.getX(j+1)),d(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,y=n.count;g<y;g++)n.setXYZ(g,0,0,0);const i=new V,s=new V,o=new V,l=new V,u=new V,f=new V,h=new V,p=new V;if(e)for(let g=0,y=e.count;g<y;g+=3){const S=e.getX(g+0),E=e.getX(g+1),x=e.getX(g+2);i.fromBufferAttribute(t,S),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,x),h.subVectors(o,s),p.subVectors(i,s),h.cross(p),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,x),l.add(h),u.add(h),f.add(h),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let g=0,y=t.count;g<y;g+=3)i.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),h.subVectors(o,s),p.subVectors(i,s),h.cross(p),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(l,u){const f=l.array,h=l.itemSize,p=l.normalized,g=new f.constructor(u.length*h);let y=0,S=0;for(let E=0,x=u.length;E<x;E++){l.isInterleavedBufferAttribute?y=u[E]*l.data.stride+l.offset:y=u[E]*h;for(let v=0;v<h;v++)g[S++]=f[y++]}return new Tn(g,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],f=e(u,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++){const g=f[h],y=e(g,n);u.push(y)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],h=[];for(let p=0,g=f.length;p<g;p++){const y=f[p];h.push(y.toJSON(e.data))}h.length>0&&(i[u]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const f in i){const h=i[f];this.setAttribute(f,h.clone(t))}const s=e.morphAttributes;for(const f in s){const h=[],p=s[f];for(let g=0,y=p.length;g<y;g++)h.push(p[g].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,h=o.length;f<h;f++){const p=o[f];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new _t,ur=new qs,ga=new hi,$c=new V,kr=new V,Hr=new V,zr=new V,zo=new V,_a=new V,va=new Qe,xa=new Qe,ya=new Qe,Zc=new V,Jc=new V,Qc=new V,Sa=new V,ba=new V;class Cn extends qt{constructor(e=new Kn,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){_a.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const h=l[u],p=s[u];h!==0&&(zo.fromBufferAttribute(p,e),o?_a.addScaledVector(zo,h):_a.addScaledVector(zo.sub(t),h))}t.add(_a)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(ga.containsPoint(ur.origin)===!1&&(ur.intersectSphere(ga,$c)===null||ur.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(Kc.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,l=s.index,u=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,g=s.groups,y=s.drawRange;if(l!==null)if(Array.isArray(o))for(let S=0,E=g.length;S<E;S++){const x=g[S],v=o[x.materialIndex],I=Math.max(x.start,y.start),R=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let N=I,X=R;N<X;N+=3){const B=l.getX(N),d=l.getX(N+1),Y=l.getX(N+2);i=Ma(this,v,e,n,f,h,p,B,d,Y),i&&(i.faceIndex=Math.floor(N/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const S=Math.max(0,y.start),E=Math.min(l.count,y.start+y.count);for(let x=S,v=E;x<v;x+=3){const I=l.getX(x),R=l.getX(x+1),N=l.getX(x+2);i=Ma(this,o,e,n,f,h,p,I,R,N),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,E=g.length;S<E;S++){const x=g[S],v=o[x.materialIndex],I=Math.max(x.start,y.start),R=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let N=I,X=R;N<X;N+=3){const B=N,d=N+1,Y=N+2;i=Ma(this,v,e,n,f,h,p,B,d,Y),i&&(i.faceIndex=Math.floor(N/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const S=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let x=S,v=E;x<v;x+=3){const I=x,R=x+1,N=x+2;i=Ma(this,o,e,n,f,h,p,I,R,N),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Lp(r,e,t,n,i,s,o,l){let u;if(e.side===Rn?u=n.intersectTriangle(o,s,i,!0,l):u=n.intersectTriangle(i,s,o,e.side===Ci,l),u===null)return null;ba.copy(l),ba.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(ba);return f<t.near||f>t.far?null:{distance:f,point:ba.clone(),object:r}}function Ma(r,e,t,n,i,s,o,l,u,f){r.getVertexPosition(l,kr),r.getVertexPosition(u,Hr),r.getVertexPosition(f,zr);const h=Lp(r,e,t,n,kr,Hr,zr,Sa);if(h){i&&(va.fromBufferAttribute(i,l),xa.fromBufferAttribute(i,u),ya.fromBufferAttribute(i,f),h.uv=oi.getInterpolation(Sa,kr,Hr,zr,va,xa,ya,new Qe)),s&&(va.fromBufferAttribute(s,l),xa.fromBufferAttribute(s,u),ya.fromBufferAttribute(s,f),h.uv1=oi.getInterpolation(Sa,kr,Hr,zr,va,xa,ya,new Qe)),o&&(Zc.fromBufferAttribute(o,l),Jc.fromBufferAttribute(o,u),Qc.fromBufferAttribute(o,f),h.normal=oi.getInterpolation(Sa,kr,Hr,zr,Zc,Jc,Qc,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:u,c:f,normal:new V,materialIndex:0};oi.getNormal(kr,Hr,zr,p.normal),h.face=p}return h}class Ys extends Kn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],f=[],h=[],p=[];let g=0,y=0;S("z","y","x",-1,-1,n,t,e,o,s,0),S("z","y","x",1,-1,n,t,-e,o,s,1),S("x","z","y",1,1,e,n,t,i,o,2),S("x","z","y",1,-1,e,n,-t,i,o,3),S("x","y","z",1,-1,e,t,n,i,s,4),S("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new ui(f,3)),this.setAttribute("normal",new ui(h,3)),this.setAttribute("uv",new ui(p,2));function S(E,x,v,I,R,N,X,B,d,Y,L){const P=N/d,z=X/Y,ce=N/2,j=X/2,pe=B/2,me=d+1,ue=Y+1;let oe=0,Q=0;const Se=new V;for(let Ae=0;Ae<ue;Ae++){const Oe=Ae*z-j;for(let vt=0;vt<me;vt++){const Et=vt*P-ce;Se[E]=Et*I,Se[x]=Oe*R,Se[v]=pe,f.push(Se.x,Se.y,Se.z),Se[E]=0,Se[x]=0,Se[v]=B>0?1:-1,h.push(Se.x,Se.y,Se.z),p.push(vt/d),p.push(1-Ae/Y),oe+=1}}for(let Ae=0;Ae<Y;Ae++)for(let Oe=0;Oe<d;Oe++){const vt=g+Oe+me*Ae,Et=g+Oe+me*(Ae+1),he=g+(Oe+1)+me*(Ae+1),be=g+(Oe+1)+me*Ae;u.push(vt,Et,be),u.push(Et,he,be),Q+=6}l.addGroup(y,Q,L),y+=Q,g+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=os(r[t]);for(const i in n)e[i]=n[i]}return e}function Dp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ff(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const Ip={clone:os,merge:bn};var Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bf extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new V,eu=new Qe,tu=new Qe;class Mn extends Bf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,f=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/f,i*=o.width/u,n*=o.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,Gr=1;class Op extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn(Vr,Gr,e,t);i.layers=this.layers,this.add(i);const s=new Mn(Vr,Gr,e,t);s.layers=this.layers,this.add(s);const o=new Mn(Vr,Gr,e,t);o.layers=this.layers,this.add(o);const l=new Mn(Vr,Gr,e,t);l.layers=this.layers,this.add(l);const u=new Mn(Vr,Gr,e,t);u.layers=this.layers,this.add(u);const f=new Mn(Vr,Gr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,l,u]=t;for(const f of t)this.remove(f);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,f,h]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,f),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(p,g,y),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class kf extends on{constructor(e,t,n,i,s,o,l,u,f,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,s,o,l,u,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fp extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new kf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ys(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Yi});s.uniforms.tEquirect.value=t;const o=new Cn(i,s),l=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Dn),new Op(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Vo=new V,Bp=new V,kp=new gt;class Vi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vo.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kp.getNormalMatrix(e),i=this.coplanarPoint(Vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new hi,Ea=new V;class wl{constructor(e=new Vi,t=new Vi,n=new Vi,i=new Vi,s=new Vi,o=new Vi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){const n=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],u=i[3],f=i[4],h=i[5],p=i[6],g=i[7],y=i[8],S=i[9],E=i[10],x=i[11],v=i[12],I=i[13],R=i[14],N=i[15];if(n[0].setComponents(u-s,g-f,x-y,N-v).normalize(),n[1].setComponents(u+s,g+f,x+y,N+v).normalize(),n[2].setComponents(u+o,g+h,x+S,N+I).normalize(),n[3].setComponents(u-o,g-h,x-S,N-I).normalize(),n[4].setComponents(u-l,g-p,x-E,N-R).normalize(),t===wi)n[5].setComponents(u+l,g+p,x+E,N+R).normalize();else if(t===Xa)n[5].setComponents(l,p,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ea.x=i.normal.x>0?e.max.x:e.min.x,Ea.y=i.normal.y>0?e.max.y:e.min.y,Ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Hp(r){const e=new WeakMap;function t(l,u){const f=l.array,h=l.usage,p=f.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,f,h),l.onUploadCallback();let y;if(f instanceof Float32Array)y=r.FLOAT;else if(f instanceof Uint16Array)l.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=r.SHORT;else if(f instanceof Uint32Array)y=r.UNSIGNED_INT;else if(f instanceof Int32Array)y=r.INT;else if(f instanceof Int8Array)y=r.BYTE;else if(f instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,u,f){const h=u.array,p=u._updateRange,g=u.updateRanges;if(r.bindBuffer(f,l),p.count===-1&&g.length===0&&r.bufferSubData(f,0,h),g.length!==0){for(let y=0,S=g.length;y<S;y++){const E=g[y];r.bufferSubData(f,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}u.clearUpdateRanges()}p.count!==-1&&(r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),u.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(r.deleteBuffer(u.buffer),e.delete(l))}function o(l,u){if(l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=e.get(l);if(f===void 0)e.set(l,t(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,l,u),f.version=l.version}}return{get:i,remove:s,update:o}}class Ks extends Kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),u=Math.floor(i),f=l+1,h=u+1,p=e/l,g=t/u,y=[],S=[],E=[],x=[];for(let v=0;v<h;v++){const I=v*g-o;for(let R=0;R<f;R++){const N=R*p-s;S.push(N,-I,0),E.push(0,0,1),x.push(R/l),x.push(1-v/u)}}for(let v=0;v<u;v++)for(let I=0;I<l;I++){const R=I+f*v,N=I+f*(v+1),X=I+1+f*(v+1),B=I+1+f*v;y.push(R,N,B),y.push(N,X,B)}this.setIndex(y),this.setAttribute("position",new ui(S,3)),this.setAttribute("normal",new ui(E,3)),this.setAttribute("uv",new ui(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Im=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:zp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:jp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Kp,batching_vertex:$p,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:rm,clipping_planes_vertex:sm,color_fragment:am,color_pars_fragment:om,color_pars_vertex:lm,color_vertex:cm,common:um,cube_uv_reflection_fragment:fm,defaultnormal_vertex:dm,displacementmap_pars_vertex:hm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:_m,colorspace_pars_fragment:vm,envmap_fragment:xm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Sm,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Im,envmap_vertex:Mm,fog_vertex:Em,fog_pars_vertex:Tm,fog_fragment:Am,fog_pars_fragment:wm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Rm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Um,lights_phong_fragment:Om,lights_phong_pars_fragment:Fm,lights_physical_fragment:Bm,lights_physical_pars_fragment:km,lights_fragment_begin:Hm,lights_fragment_maps:zm,lights_fragment_end:Vm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:jm,map_fragment:qm,map_pars_fragment:Ym,map_particle_fragment:Km,map_particle_pars_fragment:$m,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Jm,morphinstance_vertex:Qm,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:rg,normal_fragment_maps:sg,normal_pars_fragment:ag,normal_pars_vertex:og,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:dg,iridescence_pars_fragment:hg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:_g,dithering_fragment:vg,dithering_pars_fragment:xg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:Mg,shadowmap_vertex:Eg,shadowmask_pars_fragment:Tg,skinbase_vertex:Ag,skinning_pars_vertex:wg,skinning_vertex:Cg,skinnormal_vertex:Rg,specularmap_fragment:Pg,specularmap_pars_fragment:Lg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ig,transmission_fragment:Ng,transmission_pars_fragment:Ug,uv_pars_fragment:Og,uv_pars_vertex:Fg,uv_vertex:Bg,worldpos_vertex:kg,background_vert:Hg,background_frag:zg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:Xg,depth_vert:jg,depth_frag:qg,distanceRGBA_vert:Yg,distanceRGBA_frag:Kg,equirect_vert:$g,equirect_frag:Zg,linedashed_vert:Jg,linedashed_frag:Qg,meshbasic_vert:e_,meshbasic_frag:t_,meshlambert_vert:n_,meshlambert_frag:i_,meshmatcap_vert:r_,meshmatcap_frag:s_,meshnormal_vert:a_,meshnormal_frag:o_,meshphong_vert:l_,meshphong_frag:c_,meshphysical_vert:u_,meshphysical_frag:f_,meshtoon_vert:d_,meshtoon_frag:h_,points_vert:p_,points_frag:m_,shadow_vert:g_,shadow_frag:__,sprite_vert:v_,sprite_frag:x_},Le={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ai={basic:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:bn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:bn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:bn([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:bn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:bn([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:bn([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:bn([Le.common,Le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:bn([Le.lights,Le.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ai.physical={uniforms:bn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ta={r:0,b:0,g:0},dr=new di,y_=new _t;function S_(r,e,t,n,i,s,o){const l=new ut(0);let u=s===!0?0:1,f,h,p=null,g=0,y=null;function S(I){let R=I.isScene===!0?I.background:null;return R&&R.isTexture&&(R=(I.backgroundBlurriness>0?t:e).get(R)),R}function E(I){let R=!1;const N=S(I);N===null?v(l,u):N&&N.isColor&&(v(N,1),R=!0);const X=r.xr.getEnvironmentBlendMode();X==="additive"?n.buffers.color.setClear(0,0,0,1,o):X==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(I,R){const N=S(R);N&&(N.isCubeTexture||N.mapping===Za)?(h===void 0&&(h=new Cn(new Ys(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:os(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(X,B,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),dr.copy(R.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(dr)),h.material.toneMapped=It.getTransfer(N.colorSpace)!==Wt,(p!==N||g!==N.version||y!==r.toneMapping)&&(h.material.needsUpdate=!0,p=N,g=N.version,y=r.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new Cn(new Ks(2,2),new Zi({name:"BackgroundMaterial",uniforms:os(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=It.getTransfer(N.colorSpace)!==Wt,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(p!==N||g!==N.version||y!==r.toneMapping)&&(f.material.needsUpdate=!0,p=N,g=N.version,y=r.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function v(I,R){I.getRGB(Ta,Ff(r)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,R,o)}return{getClearColor:function(){return l},setClearColor:function(I,R=1){l.set(I),u=R,v(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(I){u=I,v(l,u)},render:E,addToRenderList:x}}function b_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=g(null);let s=i,o=!1;function l(P,z,ce,j,pe){let me=!1;const ue=p(j,ce,z);s!==ue&&(s=ue,f(s.object)),me=y(P,j,ce,pe),me&&S(P,j,ce,pe),pe!==null&&e.update(pe,r.ELEMENT_ARRAY_BUFFER),(me||o)&&(o=!1,N(P,z,ce,j),pe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function u(){return r.createVertexArray()}function f(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function p(P,z,ce){const j=ce.wireframe===!0;let pe=n[P.id];pe===void 0&&(pe={},n[P.id]=pe);let me=pe[z.id];me===void 0&&(me={},pe[z.id]=me);let ue=me[j];return ue===void 0&&(ue=g(u()),me[j]=ue),ue}function g(P){const z=[],ce=[],j=[];for(let pe=0;pe<t;pe++)z[pe]=0,ce[pe]=0,j[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ce,attributeDivisors:j,object:P,attributes:{},index:null}}function y(P,z,ce,j){const pe=s.attributes,me=z.attributes;let ue=0;const oe=ce.getAttributes();for(const Q in oe)if(oe[Q].location>=0){const Ae=pe[Q];let Oe=me[Q];if(Oe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Oe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Oe=P.instanceColor)),Ae===void 0||Ae.attribute!==Oe||Oe&&Ae.data!==Oe.data)return!0;ue++}return s.attributesNum!==ue||s.index!==j}function S(P,z,ce,j){const pe={},me=z.attributes;let ue=0;const oe=ce.getAttributes();for(const Q in oe)if(oe[Q].location>=0){let Ae=me[Q];Ae===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Ae=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Ae=P.instanceColor));const Oe={};Oe.attribute=Ae,Ae&&Ae.data&&(Oe.data=Ae.data),pe[Q]=Oe,ue++}s.attributes=pe,s.attributesNum=ue,s.index=j}function E(){const P=s.newAttributes;for(let z=0,ce=P.length;z<ce;z++)P[z]=0}function x(P){v(P,0)}function v(P,z){const ce=s.newAttributes,j=s.enabledAttributes,pe=s.attributeDivisors;ce[P]=1,j[P]===0&&(r.enableVertexAttribArray(P),j[P]=1),pe[P]!==z&&(r.vertexAttribDivisor(P,z),pe[P]=z)}function I(){const P=s.newAttributes,z=s.enabledAttributes;for(let ce=0,j=z.length;ce<j;ce++)z[ce]!==P[ce]&&(r.disableVertexAttribArray(ce),z[ce]=0)}function R(P,z,ce,j,pe,me,ue){ue===!0?r.vertexAttribIPointer(P,z,ce,pe,me):r.vertexAttribPointer(P,z,ce,j,pe,me)}function N(P,z,ce,j){E();const pe=j.attributes,me=ce.getAttributes(),ue=z.defaultAttributeValues;for(const oe in me){const Q=me[oe];if(Q.location>=0){let Se=pe[oe];if(Se===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor)),Se!==void 0){const Ae=Se.normalized,Oe=Se.itemSize,vt=e.get(Se);if(vt===void 0)continue;const Et=vt.buffer,he=vt.type,be=vt.bytesPerElement,Fe=he===r.INT||he===r.UNSIGNED_INT||Se.gpuType===xf;if(Se.isInterleavedBufferAttribute){const Pe=Se.data,ht=Pe.stride,it=Se.offset;if(Pe.isInstancedInterleavedBuffer){for(let et=0;et<Q.locationSize;et++)v(Q.location+et,Pe.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let et=0;et<Q.locationSize;et++)x(Q.location+et);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let et=0;et<Q.locationSize;et++)R(Q.location+et,Oe/Q.locationSize,he,Ae,ht*be,(it+Oe/Q.locationSize*et)*be,Fe)}else{if(Se.isInstancedBufferAttribute){for(let Pe=0;Pe<Q.locationSize;Pe++)v(Q.location+Pe,Se.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Pe=0;Pe<Q.locationSize;Pe++)x(Q.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Pe=0;Pe<Q.locationSize;Pe++)R(Q.location+Pe,Oe/Q.locationSize,he,Ae,Oe*be,Oe/Q.locationSize*Pe*be,Fe)}}else if(ue!==void 0){const Ae=ue[oe];if(Ae!==void 0)switch(Ae.length){case 2:r.vertexAttrib2fv(Q.location,Ae);break;case 3:r.vertexAttrib3fv(Q.location,Ae);break;case 4:r.vertexAttrib4fv(Q.location,Ae);break;default:r.vertexAttrib1fv(Q.location,Ae)}}}}I()}function X(){Y();for(const P in n){const z=n[P];for(const ce in z){const j=z[ce];for(const pe in j)h(j[pe].object),delete j[pe];delete z[ce]}delete n[P]}}function B(P){if(n[P.id]===void 0)return;const z=n[P.id];for(const ce in z){const j=z[ce];for(const pe in j)h(j[pe].object),delete j[pe];delete z[ce]}delete n[P.id]}function d(P){for(const z in n){const ce=n[z];if(ce[P.id]===void 0)continue;const j=ce[P.id];for(const pe in j)h(j[pe].object),delete j[pe];delete ce[P.id]}}function Y(){L(),o=!0,s!==i&&(s=i,f(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:Y,resetDefaultState:L,dispose:X,releaseStatesOfGeometry:B,releaseStatesOfProgram:d,initAttributes:E,enableAttribute:x,disableUnusedAttributes:I}}function M_(r,e,t){let n;function i(f){n=f}function s(f,h){r.drawArrays(n,f,h),t.update(h,n,1)}function o(f,h,p){p!==0&&(r.drawArraysInstanced(n,f,h,p),t.update(h,n,p))}function l(f,h,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<p;y++)this.render(f[y],h[y]);else{g.multiDrawArraysWEBGL(n,f,0,h,0,p);let y=0;for(let S=0;S<p;S++)y+=h[S];t.update(y,n,1)}}function u(f,h,p,g){if(p===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<f.length;S++)o(f[S],h[S],g[S]);else{y.multiDrawArraysInstancedWEBGL(n,f,0,h,0,g,0,p);let S=0;for(let E=0;E<p;E++)S+=h[E];for(let E=0;E<g.length;E++)t.update(S,n,g[E])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function E_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){return!(B!==qn&&n.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(B){const d=B===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==$i&&n.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==li&&!d)}function u(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const h=u(f);h!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",h,"instead."),f=h);const p=t.logarithmicDepthBuffer===!0,g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=y>0,X=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:f,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:v,maxVaryings:I,maxFragmentUniforms:R,vertexTextures:N,maxSamples:X}}function T_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Vi,l=new gt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const y=p.length!==0||g||n!==0||i;return i=g,n=p.length,y},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){t=h(p,g,0)},this.setState=function(p,g,y){const S=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,v=r.get(p);if(!i||S===null||S.length===0||s&&!x)s?h(null):f();else{const I=s?0:n,R=I*4;let N=v.clippingState||null;u.value=N,N=h(S,g,R,y);for(let X=0;X!==R;++X)N[X]=t[X];v.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,g,y,S){const E=p!==null?p.length:0;let x=null;if(E!==0){if(x=u.value,S!==!0||x===null){const v=y+E*4,I=g.matrixWorldInverse;l.getNormalMatrix(I),(x===null||x.length<v)&&(x=new Float32Array(v));for(let R=0,N=y;R!==E;++R,N+=4)o.copy(p[R]).applyMatrix4(I,l),o.normal.toArray(x,N),x[N+3]=o.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function A_(r){let e=new WeakMap;function t(o,l){return l===ll?o.mapping=es:l===cl&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===ll||l===cl)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const f=new Fp(u.height);return f.fromEquirectangularTexture(r,o),e.set(o,f),o.addEventListener("dispose",i),t(f.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Cl extends Bf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,nu=[.125,.215,.35,.446,.526,.582],_r=20,Go=new Cl,iu=new ut;let Wo=null,Xo=0,jo=0,qo=!1;const mr=(1+Math.sqrt(5))/2,Wr=1/mr,ru=[new V(-mr,Wr,0),new V(mr,Wr,0),new V(-Wr,0,mr),new V(Wr,0,mr),new V(0,mr,-Wr),new V(0,mr,Wr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,jo),this._renderer.xr.enabled=qo,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ja,format:qn,colorSpace:fn,depthBuffer:!1},i=au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w_(s)),this._blurMaterial=C_(s,e,t)}return i}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,n,i){const l=new Mn(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,g=h.toneMapping;h.getClearColor(iu),h.toneMapping=Ki,h.autoClear=!1;const y=new Xi({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),S=new Cn(new Ys,y);let E=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,E=!0):(y.color.copy(iu),E=!0);for(let v=0;v<6;v++){const I=v%3;I===0?(l.up.set(0,u[v],0),l.lookAt(f[v],0,0)):I===1?(l.up.set(0,0,u[v]),l.lookAt(0,f[v],0)):(l.up.set(0,u[v],0),l.lookAt(0,0,f[v]));const R=this._cubeSize;Aa(i,I*R,v>2?R:0,R,R),h.setRenderTarget(i),E&&h.render(S,l),h.render(e,l)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=g,h.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;Aa(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=ru[(i-s-1)%ru.length];this._blur(e,s-1,s,o,l)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const u=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Cn(this._lodPlanes[i],f),g=f.uniforms,y=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*y):2*Math.PI/(2*_r-1),E=s/S,x=isFinite(s)?1+Math.floor(h*E):_r;x>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_r}`);const v=[];let I=0;for(let d=0;d<_r;++d){const Y=d/E,L=Math.exp(-Y*Y/2);v.push(L),d===0?I+=L:d<x&&(I+=2*L)}for(let d=0;d<v.length;d++)v[d]=v[d]/I;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=o==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:R}=this;g.dTheta.value=S,g.mipInt.value=R-n;const N=this._sizeLods[i],X=3*N*(i>R-Yr?i-R+Yr:0),B=4*(this._cubeSize-N);Aa(t,X,B,3*N,2*N),u.setRenderTarget(t),u.render(p,Go)}}function w_(r){const e=[],t=[],n=[];let i=r;const s=r-Yr+1+nu.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);t.push(l);let u=1/l;o>r-Yr?u=nu[o-r+Yr-1]:o===0&&(u=0),n.push(u);const f=1/(l-2),h=-f,p=1+f,g=[h,h,p,h,p,p,h,h,p,p,h,p],y=6,S=6,E=3,x=2,v=1,I=new Float32Array(E*S*y),R=new Float32Array(x*S*y),N=new Float32Array(v*S*y);for(let B=0;B<y;B++){const d=B%3*2/3-1,Y=B>2?0:-1,L=[d,Y,0,d+2/3,Y,0,d+2/3,Y+1,0,d,Y,0,d+2/3,Y+1,0,d,Y+1,0];I.set(L,E*S*B),R.set(g,x*S*B);const P=[B,B,B,B,B,B];N.set(P,v*S*B)}const X=new Kn;X.setAttribute("position",new Tn(I,E)),X.setAttribute("uv",new Tn(R,x)),X.setAttribute("faceIndex",new Tn(N,v)),e.push(X),i>Yr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function au(r,e,t){const n=new vr(r,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function C_(r,e,t){const n=new Float32Array(_r),i=new V(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ou(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function lu(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R_(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,f=u===ll||u===cl,h=u===es||u===ts;if(f||h){let p=e.get(l);const g=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new su(r)),p=f?t.fromEquirectangular(l,p):t.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const y=l.image;return f&&y&&y.height>0||h&&y&&i(y)?(t===null&&(t=new su(r)),p=f?t.fromEquirectangular(l):t.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",s),p.texture):null}}}return l}function i(l){let u=0;const f=6;for(let h=0;h<f;h++)l[h]!==void 0&&u++;return u===f}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function P_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Al("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function L_(r,e,t,n){const i={},s=new WeakMap;function o(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);for(const S in g.morphAttributes){const E=g.morphAttributes[S];for(let x=0,v=E.length;x<v;x++)e.remove(E[x])}g.removeEventListener("dispose",o),delete i[g.id];const y=s.get(g);y&&(e.remove(y),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(p,g){return i[g.id]===!0||(g.addEventListener("dispose",o),i[g.id]=!0,t.memory.geometries++),g}function u(p){const g=p.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER);const y=p.morphAttributes;for(const S in y){const E=y[S];for(let x=0,v=E.length;x<v;x++)e.update(E[x],r.ARRAY_BUFFER)}}function f(p){const g=[],y=p.index,S=p.attributes.position;let E=0;if(y!==null){const I=y.array;E=y.version;for(let R=0,N=I.length;R<N;R+=3){const X=I[R+0],B=I[R+1],d=I[R+2];g.push(X,B,B,d,d,X)}}else if(S!==void 0){const I=S.array;E=S.version;for(let R=0,N=I.length/3-1;R<N;R+=3){const X=R+0,B=R+1,d=R+2;g.push(X,B,B,d,d,X)}}else return;const x=new(Pf(g)?Of:Uf)(g,1);x.version=E;const v=s.get(p);v&&e.remove(v),s.set(p,x)}function h(p){const g=s.get(p);if(g){const y=p.index;y!==null&&g.version<y.version&&f(p)}else f(p);return s.get(p)}return{get:l,update:u,getWireframeAttribute:h}}function D_(r,e,t){let n;function i(g){n=g}let s,o;function l(g){s=g.type,o=g.bytesPerElement}function u(g,y){r.drawElements(n,y,s,g*o),t.update(y,n,1)}function f(g,y,S){S!==0&&(r.drawElementsInstanced(n,y,s,g*o,S),t.update(y,n,S))}function h(g,y,S){if(S===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let x=0;x<S;x++)this.render(g[x]/o,y[x]);else{E.multiDrawElementsWEBGL(n,y,0,s,g,0,S);let x=0;for(let v=0;v<S;v++)x+=y[v];t.update(x,n,1)}}function p(g,y,S,E){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<g.length;v++)f(g[v]/o,y[v],E[v]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,s,g,0,E,0,S);let v=0;for(let I=0;I<S;I++)v+=y[I];for(let I=0;I<E.length;I++)t.update(v,n,E[I])}}this.setMode=i,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function I_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function N_(r,e,t){const n=new WeakMap,i=new kt;function s(o,l,u){const f=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0;let g=n.get(l);if(g===void 0||g.count!==p){let P=function(){Y.dispose(),n.delete(l),l.removeEventListener("dispose",P)};var y=P;g!==void 0&&g.texture.dispose();const S=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,v=l.morphAttributes.position||[],I=l.morphAttributes.normal||[],R=l.morphAttributes.color||[];let N=0;S===!0&&(N=1),E===!0&&(N=2),x===!0&&(N=3);let X=l.attributes.position.count*N,B=1;X>e.maxTextureSize&&(B=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const d=new Float32Array(X*B*4*p),Y=new Df(d,X,B,p);Y.type=li,Y.needsUpdate=!0;const L=N*4;for(let z=0;z<p;z++){const ce=v[z],j=I[z],pe=R[z],me=X*B*4*z;for(let ue=0;ue<ce.count;ue++){const oe=ue*L;S===!0&&(i.fromBufferAttribute(ce,ue),d[me+oe+0]=i.x,d[me+oe+1]=i.y,d[me+oe+2]=i.z,d[me+oe+3]=0),E===!0&&(i.fromBufferAttribute(j,ue),d[me+oe+4]=i.x,d[me+oe+5]=i.y,d[me+oe+6]=i.z,d[me+oe+7]=0),x===!0&&(i.fromBufferAttribute(pe,ue),d[me+oe+8]=i.x,d[me+oe+9]=i.y,d[me+oe+10]=i.z,d[me+oe+11]=pe.itemSize===4?i.w:1)}}g={count:p,texture:Y,size:new Qe(X,B)},n.set(l,g),l.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let S=0;for(let x=0;x<f.length;x++)S+=f[x];const E=l.morphTargetsRelative?1:1-S;u.getUniforms().setValue(r,"morphTargetBaseInfluence",E),u.getUniforms().setValue(r,"morphTargetInfluences",f)}u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:s}}function U_(r,e,t,n){let i=new WeakMap;function s(u){const f=n.render.frame,h=u.geometry,p=e.get(u,h);if(i.get(p)!==f&&(e.update(p),i.set(p,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),i.get(u)!==f&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,f))),u.isSkinnedMesh){const g=u.skeleton;i.get(g)!==f&&(g.update(),i.set(g,f))}return p}function o(){i=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}class zf extends on{constructor(e,t,n,i,s,o,l,u,f,h=Zr){if(h!==Zr&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zr&&(n=is),n===void 0&&h===ss&&(n=rs),super(null,i,s,o,l,u,h,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:En,this.minFilter=u!==void 0?u:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vf=new on,Gf=new zf(1,1);Gf.compareFunction=Cf;const Wf=new Df,Xf=new Sp,jf=new kf,cu=[],uu=[],fu=new Float32Array(16),du=new Float32Array(9),hu=new Float32Array(4);function fs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=cu[i];if(s===void 0&&(s=new Float32Array(i),cu[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function eo(r,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function O_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function F_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function B_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function k_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function H_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;hu.set(n),r.uniformMatrix2fv(this.addr,!1,hu),rn(t,n)}}function z_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;du.set(n),r.uniformMatrix3fv(this.addr,!1,du),rn(t,n)}}function V_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;fu.set(n),r.uniformMatrix4fv(this.addr,!1,fu),rn(t,n)}}function G_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function W_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function X_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function j_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function q_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function K_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function $_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function Z_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Gf:Vf;t.setTexture2D(e||s,i)}function J_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xf,i)}function Q_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jf,i)}function ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wf,i)}function tv(r){switch(r){case 5126:return O_;case 35664:return F_;case 35665:return B_;case 35666:return k_;case 35674:return H_;case 35675:return z_;case 35676:return V_;case 5124:case 35670:return G_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return j_;case 5125:return q_;case 36294:return Y_;case 36295:return K_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ev}}function nv(r,e){r.uniform1fv(this.addr,e)}function iv(r,e){const t=fs(e,this.size,2);r.uniform2fv(this.addr,t)}function rv(r,e){const t=fs(e,this.size,3);r.uniform3fv(this.addr,t)}function sv(r,e){const t=fs(e,this.size,4);r.uniform4fv(this.addr,t)}function av(r,e){const t=fs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ov(r,e){const t=fs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lv(r,e){const t=fs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cv(r,e){r.uniform1iv(this.addr,e)}function uv(r,e){r.uniform2iv(this.addr,e)}function fv(r,e){r.uniform3iv(this.addr,e)}function dv(r,e){r.uniform4iv(this.addr,e)}function hv(r,e){r.uniform1uiv(this.addr,e)}function pv(r,e){r.uniform2uiv(this.addr,e)}function mv(r,e){r.uniform3uiv(this.addr,e)}function gv(r,e){r.uniform4uiv(this.addr,e)}function _v(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Vf,s[o])}function vv(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xf,s[o])}function xv(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||jf,s[o])}function yv(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wf,s[o])}function Sv(r){switch(r){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return sv;case 35674:return av;case 35675:return ov;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return uv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return hv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return yv}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tv(t.type)}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sv(t.type)}}class Ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function pu(r,e){r.seq.push(e),r.map[e.id]=e}function Tv(r,e,t){const n=r.name,i=n.length;for(Yo.lastIndex=0;;){const s=Yo.exec(n),o=Yo.lastIndex;let l=s[1];const u=s[2]==="]",f=s[3];if(u&&(l=l|0),f===void 0||f==="["&&o+2===i){pu(t,f===void 0?new bv(l,r,e):new Mv(l,r,e));break}else{let p=t.map[l];p===void 0&&(p=new Ev(l),pu(t,p)),t=p}}}class Ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Tv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function mu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Av=37297;let wv=0;function Cv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function Rv(r){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(r);let n;switch(e===t?n="":e===Wa&&t===Ga?n="LinearDisplayP3ToLinearSRGB":e===Ga&&t===Wa&&(n="LinearSRGBToLinearDisplayP3"),r){case fn:case Qa:return[n,"LinearTransferOETF"];case gn:case El:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function gu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cv(r.getShaderSource(e),o)}else return i}function Pv(r,e){const t=Rv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lv(r,e){let t;switch(e){case Mh:t="Linear";break;case Eh:t="Reinhard";break;case Th:t="OptimizedCineon";break;case Ah:t="ACESFilmic";break;case Ch:t="AgX";break;case Rh:t="Neutral";break;case wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Iv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function Us(r){return r!==""}function _u(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(r){return r.replace(Uv,Fv)}const Ov=new Map;function Fv(r,e){let t=mt[e];if(t===void 0){const n=Ov.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dl(t)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(r){return r.replace(Bv,kv)}function kv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function zv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Gv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gf:e="ENVMAP_BLENDING_MULTIPLY";break;case Sh:e="ENVMAP_BLENDING_MIX";break;case bh:e="ENVMAP_BLENDING_ADD";break}return e}function Wv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=Hv(t),f=zv(t),h=Vv(t),p=Gv(t),g=Wv(t),y=Dv(t),S=Iv(s),E=i.createProgram();let x,v,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Us).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Us).join(`
`),v.length>0&&(v+=`
`)):(x=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),v=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?Lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Pv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=dl(o),o=_u(o,t),o=vu(o,t),l=dl(l),l=_u(l,t),l=vu(l,t),o=xu(o),l=xu(l),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const R=I+x+o,N=I+v+l,X=mu(i,i.VERTEX_SHADER,R),B=mu(i,i.FRAGMENT_SHADER,N);i.attachShader(E,X),i.attachShader(E,B),t.index0AttributeName!==void 0?i.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(E,0,"position"),i.linkProgram(E);function d(z){if(r.debug.checkShaderErrors){const ce=i.getProgramInfoLog(E).trim(),j=i.getShaderInfoLog(X).trim(),pe=i.getShaderInfoLog(B).trim();let me=!0,ue=!0;if(i.getProgramParameter(E,i.LINK_STATUS)===!1)if(me=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,E,X,B);else{const oe=gu(i,X,"vertex"),Q=gu(i,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(E,i.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ce+`
`+oe+`
`+Q)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(j===""||pe==="")&&(ue=!1);ue&&(z.diagnostics={runnable:me,programLog:ce,vertexShader:{log:j,prefix:x},fragmentShader:{log:pe,prefix:v}})}i.deleteShader(X),i.deleteShader(B),Y=new Ba(i,E),L=Nv(i,E)}let Y;this.getUniforms=function(){return Y===void 0&&d(this),Y};let L;this.getAttributes=function(){return L===void 0&&d(this),L};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(E,Av)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=X,this.fragmentShader=B,this}let jv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yv(e),t.set(e,n)),n}}class Yv{constructor(e){this.id=jv++,this.code=e,this.usedTimes=0}}function Kv(r,e,t,n,i,s,o){const l=new If,u=new qv,f=new Set,h=[],p=i.logarithmicDepthBuffer,g=i.vertexTextures;let y=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return f.add(L),L===0?"uv":`uv${L}`}function x(L,P,z,ce,j){const pe=ce.fog,me=j.geometry,ue=L.isMeshStandardMaterial?ce.environment:null,oe=(L.isMeshStandardMaterial?t:e).get(L.envMap||ue),Q=oe&&oe.mapping===Za?oe.image.height:null,Se=S[L.type];L.precision!==null&&(y=i.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const Ae=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Oe=Ae!==void 0?Ae.length:0;let vt=0;me.morphAttributes.position!==void 0&&(vt=1),me.morphAttributes.normal!==void 0&&(vt=2),me.morphAttributes.color!==void 0&&(vt=3);let Et,he,be,Fe;if(Se){const wt=ai[Se];Et=wt.vertexShader,he=wt.fragmentShader}else Et=L.vertexShader,he=L.fragmentShader,u.update(L),be=u.getVertexShaderID(L),Fe=u.getFragmentShaderID(L);const Pe=r.getRenderTarget(),ht=j.isInstancedMesh===!0,it=j.isBatchedMesh===!0,et=!!L.map,H=!!L.matcap,ft=!!oe,dt=!!L.aoMap,Nt=!!L.lightMap,Xe=!!L.bumpMap,xt=!!L.normalMap,st=!!L.displacementMap,qe=!!L.emissiveMap,Gt=!!L.metalnessMap,O=!!L.roughnessMap,w=L.anisotropy>0,te=L.clearcoat>0,_e=L.dispersion>0,xe=L.iridescence>0,Z=L.sheen>0,Ue=L.transmission>0,Re=w&&!!L.anisotropyMap,Ce=te&&!!L.clearcoatMap,at=te&&!!L.clearcoatNormalMap,Me=te&&!!L.clearcoatRoughnessMap,He=xe&&!!L.iridescenceMap,ot=xe&&!!L.iridescenceThicknessMap,Ve=Z&&!!L.sheenColorMap,we=Z&&!!L.sheenRoughnessMap,$e=!!L.specularMap,lt=!!L.specularColorMap,Bt=!!L.specularIntensityMap,T=Ue&&!!L.transmissionMap,se=Ue&&!!L.thicknessMap,$=!!L.gradientMap,ae=!!L.alphaMap,ve=L.alphaTest>0,Ge=!!L.alphaHash,tt=!!L.extensions;let Tt=Ki;L.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Tt=r.toneMapping);const At={shaderID:Se,shaderType:L.type,shaderName:L.name,vertexShader:Et,fragmentShader:he,defines:L.defines,customVertexShaderID:be,customFragmentShaderID:Fe,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:it,batchingColor:it&&j._colorsTexture!==null,instancing:ht,instancingColor:ht&&j.instanceColor!==null,instancingMorph:ht&&j.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Pe===null?r.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:fn,alphaToCoverage:!!L.alphaToCoverage,map:et,matcap:H,envMap:ft,envMapMode:ft&&oe.mapping,envMapCubeUVHeight:Q,aoMap:dt,lightMap:Nt,bumpMap:Xe,normalMap:xt,displacementMap:g&&st,emissiveMap:qe,normalMapObjectSpace:xt&&L.normalMapType===Wh,normalMapTangentSpace:xt&&L.normalMapType===wf,metalnessMap:Gt,roughnessMap:O,anisotropy:w,anisotropyMap:Re,clearcoat:te,clearcoatMap:Ce,clearcoatNormalMap:at,clearcoatRoughnessMap:Me,dispersion:_e,iridescence:xe,iridescenceMap:He,iridescenceThicknessMap:ot,sheen:Z,sheenColorMap:Ve,sheenRoughnessMap:we,specularMap:$e,specularColorMap:lt,specularIntensityMap:Bt,transmission:Ue,transmissionMap:T,thicknessMap:se,gradientMap:$,opaque:L.transparent===!1&&L.blending===$r&&L.alphaToCoverage===!1,alphaMap:ae,alphaTest:ve,alphaHash:Ge,combine:L.combine,mapUv:et&&E(L.map.channel),aoMapUv:dt&&E(L.aoMap.channel),lightMapUv:Nt&&E(L.lightMap.channel),bumpMapUv:Xe&&E(L.bumpMap.channel),normalMapUv:xt&&E(L.normalMap.channel),displacementMapUv:st&&E(L.displacementMap.channel),emissiveMapUv:qe&&E(L.emissiveMap.channel),metalnessMapUv:Gt&&E(L.metalnessMap.channel),roughnessMapUv:O&&E(L.roughnessMap.channel),anisotropyMapUv:Re&&E(L.anisotropyMap.channel),clearcoatMapUv:Ce&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:at&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:we&&E(L.sheenRoughnessMap.channel),specularMapUv:$e&&E(L.specularMap.channel),specularColorMapUv:lt&&E(L.specularColorMap.channel),specularIntensityMapUv:Bt&&E(L.specularIntensityMap.channel),transmissionMapUv:T&&E(L.transmissionMap.channel),thicknessMapUv:se&&E(L.thicknessMap.channel),alphaMapUv:ae&&E(L.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(xt||w),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!me.attributes.uv&&(et||ae),fog:!!pe,useFog:L.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:j.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:vt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Tt,decodeVideoTexture:et&&L.map.isVideoTexture===!0&&It.getTransfer(L.map.colorSpace)===Wt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Xn,flipSided:L.side===Rn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:tt&&L.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&L.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return At.vertexUv1s=f.has(1),At.vertexUv2s=f.has(2),At.vertexUv3s=f.has(3),f.clear(),At}function v(L){const P=[];if(L.shaderID?P.push(L.shaderID):(P.push(L.customVertexShaderID),P.push(L.customFragmentShaderID)),L.defines!==void 0)for(const z in L.defines)P.push(z),P.push(L.defines[z]);return L.isRawShaderMaterial===!1&&(I(P,L),R(P,L),P.push(r.outputColorSpace)),P.push(L.customProgramCacheKey),P.join()}function I(L,P){L.push(P.precision),L.push(P.outputColorSpace),L.push(P.envMapMode),L.push(P.envMapCubeUVHeight),L.push(P.mapUv),L.push(P.alphaMapUv),L.push(P.lightMapUv),L.push(P.aoMapUv),L.push(P.bumpMapUv),L.push(P.normalMapUv),L.push(P.displacementMapUv),L.push(P.emissiveMapUv),L.push(P.metalnessMapUv),L.push(P.roughnessMapUv),L.push(P.anisotropyMapUv),L.push(P.clearcoatMapUv),L.push(P.clearcoatNormalMapUv),L.push(P.clearcoatRoughnessMapUv),L.push(P.iridescenceMapUv),L.push(P.iridescenceThicknessMapUv),L.push(P.sheenColorMapUv),L.push(P.sheenRoughnessMapUv),L.push(P.specularMapUv),L.push(P.specularColorMapUv),L.push(P.specularIntensityMapUv),L.push(P.transmissionMapUv),L.push(P.thicknessMapUv),L.push(P.combine),L.push(P.fogExp2),L.push(P.sizeAttenuation),L.push(P.morphTargetsCount),L.push(P.morphAttributeCount),L.push(P.numDirLights),L.push(P.numPointLights),L.push(P.numSpotLights),L.push(P.numSpotLightMaps),L.push(P.numHemiLights),L.push(P.numRectAreaLights),L.push(P.numDirLightShadows),L.push(P.numPointLightShadows),L.push(P.numSpotLightShadows),L.push(P.numSpotLightShadowsWithMaps),L.push(P.numLightProbes),L.push(P.shadowMapType),L.push(P.toneMapping),L.push(P.numClippingPlanes),L.push(P.numClipIntersection),L.push(P.depthPacking)}function R(L,P){l.disableAll(),P.supportsVertexTextures&&l.enable(0),P.instancing&&l.enable(1),P.instancingColor&&l.enable(2),P.instancingMorph&&l.enable(3),P.matcap&&l.enable(4),P.envMap&&l.enable(5),P.normalMapObjectSpace&&l.enable(6),P.normalMapTangentSpace&&l.enable(7),P.clearcoat&&l.enable(8),P.iridescence&&l.enable(9),P.alphaTest&&l.enable(10),P.vertexColors&&l.enable(11),P.vertexAlphas&&l.enable(12),P.vertexUv1s&&l.enable(13),P.vertexUv2s&&l.enable(14),P.vertexUv3s&&l.enable(15),P.vertexTangents&&l.enable(16),P.anisotropy&&l.enable(17),P.alphaHash&&l.enable(18),P.batching&&l.enable(19),P.dispersion&&l.enable(20),P.batchingColor&&l.enable(21),L.push(l.mask),l.disableAll(),P.fog&&l.enable(0),P.useFog&&l.enable(1),P.flatShading&&l.enable(2),P.logarithmicDepthBuffer&&l.enable(3),P.skinning&&l.enable(4),P.morphTargets&&l.enable(5),P.morphNormals&&l.enable(6),P.morphColors&&l.enable(7),P.premultipliedAlpha&&l.enable(8),P.shadowMapEnabled&&l.enable(9),P.doubleSided&&l.enable(10),P.flipSided&&l.enable(11),P.useDepthPacking&&l.enable(12),P.dithering&&l.enable(13),P.transmission&&l.enable(14),P.sheen&&l.enable(15),P.opaque&&l.enable(16),P.pointsUvs&&l.enable(17),P.decodeVideoTexture&&l.enable(18),P.alphaToCoverage&&l.enable(19),L.push(l.mask)}function N(L){const P=S[L.type];let z;if(P){const ce=ai[P];z=Ip.clone(ce.uniforms)}else z=L.uniforms;return z}function X(L,P){let z;for(let ce=0,j=h.length;ce<j;ce++){const pe=h[ce];if(pe.cacheKey===P){z=pe,++z.usedTimes;break}}return z===void 0&&(z=new Xv(r,P,L,s),h.push(z)),z}function B(L){if(--L.usedTimes===0){const P=h.indexOf(L);h[P]=h[h.length-1],h.pop(),L.destroy()}}function d(L){u.remove(L)}function Y(){u.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:N,acquireProgram:X,releaseProgram:B,releaseShaderCache:d,programs:h,dispose:Y}}function $v(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Su(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(p,g,y,S,E,x){let v=r[e];return v===void 0?(v={id:p.id,object:p,geometry:g,material:y,groupOrder:S,renderOrder:p.renderOrder,z:E,group:x},r[e]=v):(v.id=p.id,v.object=p,v.geometry=g,v.material=y,v.groupOrder=S,v.renderOrder=p.renderOrder,v.z=E,v.group=x),e++,v}function l(p,g,y,S,E,x){const v=o(p,g,y,S,E,x);y.transmission>0?n.push(v):y.transparent===!0?i.push(v):t.push(v)}function u(p,g,y,S,E,x){const v=o(p,g,y,S,E,x);y.transmission>0?n.unshift(v):y.transparent===!0?i.unshift(v):t.unshift(v)}function f(p,g){t.length>1&&t.sort(p||Zv),n.length>1&&n.sort(g||Su),i.length>1&&i.sort(g||Su)}function h(){for(let p=e,g=r.length;p<g;p++){const y=r[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:h,sort:f}}function Jv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new bu,r.set(n,[o])):i>=s.length?(o=new bu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Qv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ut};break;case"SpotLight":t={position:new V,direction:new V,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function ex(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let tx=0;function nx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ix(r){const e=new Qv,t=ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new V);const i=new V,s=new _t,o=new _t;function l(f){let h=0,p=0,g=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let y=0,S=0,E=0,x=0,v=0,I=0,R=0,N=0,X=0,B=0,d=0;f.sort(nx);for(let L=0,P=f.length;L<P;L++){const z=f[L],ce=z.color,j=z.intensity,pe=z.distance,me=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=ce.r*j,p+=ce.g*j,g+=ce.b*j;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)n.probe[ue].addScaledVector(z.sh.coefficients[ue],j);d++}else if(z.isDirectionalLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const oe=z.shadow,Q=t.get(z);Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,n.directionalShadow[y]=Q,n.directionalShadowMap[y]=me,n.directionalShadowMatrix[y]=z.shadow.matrix,I++}n.directional[y]=ue,y++}else if(z.isSpotLight){const ue=e.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(ce).multiplyScalar(j),ue.distance=pe,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,n.spot[E]=ue;const oe=z.shadow;if(z.map&&(n.spotLightMap[X]=z.map,X++,oe.updateMatrices(z),z.castShadow&&B++),n.spotLightMatrix[E]=oe.matrix,z.castShadow){const Q=t.get(z);Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,n.spotShadow[E]=Q,n.spotShadowMap[E]=me,N++}E++}else if(z.isRectAreaLight){const ue=e.get(z);ue.color.copy(ce).multiplyScalar(j),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),n.rectArea[x]=ue,x++}else if(z.isPointLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const oe=z.shadow,Q=t.get(z);Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,Q.shadowCameraNear=oe.camera.near,Q.shadowCameraFar=oe.camera.far,n.pointShadow[S]=Q,n.pointShadowMap[S]=me,n.pointShadowMatrix[S]=z.shadow.matrix,R++}n.point[S]=ue,S++}else if(z.isHemisphereLight){const ue=e.get(z);ue.skyColor.copy(z.color).multiplyScalar(j),ue.groundColor.copy(z.groundColor).multiplyScalar(j),n.hemi[v]=ue,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=g;const Y=n.hash;(Y.directionalLength!==y||Y.pointLength!==S||Y.spotLength!==E||Y.rectAreaLength!==x||Y.hemiLength!==v||Y.numDirectionalShadows!==I||Y.numPointShadows!==R||Y.numSpotShadows!==N||Y.numSpotMaps!==X||Y.numLightProbes!==d)&&(n.directional.length=y,n.spot.length=E,n.rectArea.length=x,n.point.length=S,n.hemi.length=v,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=N+X-B,n.spotLightMap.length=X,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=d,Y.directionalLength=y,Y.pointLength=S,Y.spotLength=E,Y.rectAreaLength=x,Y.hemiLength=v,Y.numDirectionalShadows=I,Y.numPointShadows=R,Y.numSpotShadows=N,Y.numSpotMaps=X,Y.numLightProbes=d,n.version=tx++)}function u(f,h){let p=0,g=0,y=0,S=0,E=0;const x=h.matrixWorldInverse;for(let v=0,I=f.length;v<I;v++){const R=f[v];if(R.isDirectionalLight){const N=n.directional[p];N.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(i),N.direction.transformDirection(x),p++}else if(R.isSpotLight){const N=n.spot[y];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(i),N.direction.transformDirection(x),y++}else if(R.isRectAreaLight){const N=n.rectArea[S];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),o.identity(),s.copy(R.matrixWorld),s.premultiply(x),o.extractRotation(s),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),S++}else if(R.isPointLight){const N=n.point[g];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),g++}else if(R.isHemisphereLight){const N=n.hemi[E];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(x),E++}}}return{setup:l,setupView:u,state:n}}function Mu(r){const e=new ix(r),t=[],n=[];function i(h){f.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function rx(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let l;return o===void 0?(l=new Mu(r),e.set(i,[l])):s>=o.length?(l=new Mu(r),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class sx extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cx(r,e,t){let n=new wl;const i=new Qe,s=new Qe,o=new kt,l=new sx({depthPacking:Gh}),u=new ax,f={},h=t.maxTextureSize,p={[Ci]:Rn,[Rn]:Ci,[Xn]:Xn},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:ox,fragmentShader:lx}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const S=new Kn;S.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Cn(S,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf;let v=this.type;this.render=function(B,d,Y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const L=r.getRenderTarget(),P=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(Yi),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const j=v!==Ei&&this.type===Ei,pe=v===Ei&&this.type!==Ei;for(let me=0,ue=B.length;me<ue;me++){const oe=B[me],Q=oe.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const Se=Q.getFrameExtents();if(i.multiply(Se),s.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Se.x),i.x=s.x*Se.x,Q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Se.y),i.y=s.y*Se.y,Q.mapSize.y=s.y)),Q.map===null||j===!0||pe===!0){const Oe=this.type!==Ei?{minFilter:En,magFilter:En}:{};Q.map!==null&&Q.map.dispose(),Q.map=new vr(i.x,i.y,Oe),Q.map.texture.name=oe.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const Ae=Q.getViewportCount();for(let Oe=0;Oe<Ae;Oe++){const vt=Q.getViewport(Oe);o.set(s.x*vt.x,s.y*vt.y,s.x*vt.z,s.y*vt.w),ce.viewport(o),Q.updateMatrices(oe,Oe),n=Q.getFrustum(),N(d,Y,Q.camera,oe,this.type)}Q.isPointLightShadow!==!0&&this.type===Ei&&I(Q,Y),Q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(L,P,z)};function I(B,d){const Y=e.update(E);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new vr(i.x,i.y)),g.uniforms.shadow_pass.value=B.map.texture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(d,null,Y,g,E,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(d,null,Y,y,E,null)}function R(B,d,Y,L){let P=null;const z=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)P=z;else if(P=Y.isPointLight===!0?u:l,r.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0){const ce=P.uuid,j=d.uuid;let pe=f[ce];pe===void 0&&(pe={},f[ce]=pe);let me=pe[j];me===void 0&&(me=P.clone(),pe[j]=me,d.addEventListener("dispose",X)),P=me}if(P.visible=d.visible,P.wireframe=d.wireframe,L===Ei?P.side=d.shadowSide!==null?d.shadowSide:d.side:P.side=d.shadowSide!==null?d.shadowSide:p[d.side],P.alphaMap=d.alphaMap,P.alphaTest=d.alphaTest,P.map=d.map,P.clipShadows=d.clipShadows,P.clippingPlanes=d.clippingPlanes,P.clipIntersection=d.clipIntersection,P.displacementMap=d.displacementMap,P.displacementScale=d.displacementScale,P.displacementBias=d.displacementBias,P.wireframeLinewidth=d.wireframeLinewidth,P.linewidth=d.linewidth,Y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ce=r.properties.get(P);ce.light=Y}return P}function N(B,d,Y,L,P){if(B.visible===!1)return;if(B.layers.test(d.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&P===Ei)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const j=e.update(B),pe=B.material;if(Array.isArray(pe)){const me=j.groups;for(let ue=0,oe=me.length;ue<oe;ue++){const Q=me[ue],Se=pe[Q.materialIndex];if(Se&&Se.visible){const Ae=R(B,Se,L,P);B.onBeforeShadow(r,B,d,Y,j,Ae,Q),r.renderBufferDirect(Y,null,j,Ae,B,Q),B.onAfterShadow(r,B,d,Y,j,Ae,Q)}}}else if(pe.visible){const me=R(B,pe,L,P);B.onBeforeShadow(r,B,d,Y,j,me,null),r.renderBufferDirect(Y,null,j,me,B,null),B.onAfterShadow(r,B,d,Y,j,me,null)}}const ce=B.children;for(let j=0,pe=ce.length;j<pe;j++)N(ce[j],d,Y,L,P)}function X(B){B.target.removeEventListener("dispose",X);for(const Y in f){const L=f[Y],P=B.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function ux(r){function e(){let T=!1;const se=new kt;let $=null;const ae=new kt(0,0,0,0);return{setMask:function(ve){$!==ve&&!T&&(r.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){T=ve},setClear:function(ve,Ge,tt,Tt,At){At===!0&&(ve*=Tt,Ge*=Tt,tt*=Tt),se.set(ve,Ge,tt,Tt),ae.equals(se)===!1&&(r.clearColor(ve,Ge,tt,Tt),ae.copy(se))},reset:function(){T=!1,$=null,ae.set(-1,0,0,0)}}}function t(){let T=!1,se=null,$=null,ae=null;return{setTest:function(ve){ve?Fe(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(ve){se!==ve&&!T&&(r.depthMask(ve),se=ve)},setFunc:function(ve){if($!==ve){switch(ve){case ph:r.depthFunc(r.NEVER);break;case mh:r.depthFunc(r.ALWAYS);break;case gh:r.depthFunc(r.LESS);break;case ka:r.depthFunc(r.LEQUAL);break;case _h:r.depthFunc(r.EQUAL);break;case vh:r.depthFunc(r.GEQUAL);break;case xh:r.depthFunc(r.GREATER);break;case yh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=ve}},setLocked:function(ve){T=ve},setClear:function(ve){ae!==ve&&(r.clearDepth(ve),ae=ve)},reset:function(){T=!1,se=null,$=null,ae=null}}}function n(){let T=!1,se=null,$=null,ae=null,ve=null,Ge=null,tt=null,Tt=null,At=null;return{setTest:function(wt){T||(wt?Fe(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(wt){se!==wt&&!T&&(r.stencilMask(wt),se=wt)},setFunc:function(wt,Yt,jt){($!==wt||ae!==Yt||ve!==jt)&&(r.stencilFunc(wt,Yt,jt),$=wt,ae=Yt,ve=jt)},setOp:function(wt,Yt,jt){(Ge!==wt||tt!==Yt||Tt!==jt)&&(r.stencilOp(wt,Yt,jt),Ge=wt,tt=Yt,Tt=jt)},setLocked:function(wt){T=wt},setClear:function(wt){At!==wt&&(r.clearStencil(wt),At=wt)},reset:function(){T=!1,se=null,$=null,ae=null,ve=null,Ge=null,tt=null,Tt=null,At=null}}}const i=new e,s=new t,o=new n,l=new WeakMap,u=new WeakMap;let f={},h={},p=new WeakMap,g=[],y=null,S=!1,E=null,x=null,v=null,I=null,R=null,N=null,X=null,B=new ut(0,0,0),d=0,Y=!1,L=null,P=null,z=null,ce=null,j=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,ue=0;const oe=r.getParameter(r.VERSION);oe.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(oe)[1]),me=ue>=1):oe.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),me=ue>=2);let Q=null,Se={};const Ae=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),vt=new kt().fromArray(Ae),Et=new kt().fromArray(Oe);function he(T,se,$,ae){const ve=new Uint8Array(4),Ge=r.createTexture();r.bindTexture(T,Ge),r.texParameteri(T,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(T,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let tt=0;tt<$;tt++)T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(se+tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return Ge}const be={};be[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Fe(r.DEPTH_TEST),s.setFunc(ka),Xe(!1),xt(ec),Fe(r.CULL_FACE),dt(Yi);function Fe(T){f[T]!==!0&&(r.enable(T),f[T]=!0)}function Pe(T){f[T]!==!1&&(r.disable(T),f[T]=!1)}function ht(T,se){return h[T]!==se?(r.bindFramebuffer(T,se),h[T]=se,T===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=se),T===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=se),!0):!1}function it(T,se){let $=g,ae=!1;if(T){$=p.get(se),$===void 0&&($=[],p.set(se,$));const ve=T.textures;if($.length!==ve.length||$[0]!==r.COLOR_ATTACHMENT0){for(let Ge=0,tt=ve.length;Ge<tt;Ge++)$[Ge]=r.COLOR_ATTACHMENT0+Ge;$.length=ve.length,ae=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,ae=!0);ae&&r.drawBuffers($)}function et(T){return y!==T?(r.useProgram(T),y=T,!0):!1}const H={[gr]:r.FUNC_ADD,[Zd]:r.FUNC_SUBTRACT,[Jd]:r.FUNC_REVERSE_SUBTRACT};H[Qd]=r.MIN,H[eh]=r.MAX;const ft={[th]:r.ZERO,[nh]:r.ONE,[ih]:r.SRC_COLOR,[al]:r.SRC_ALPHA,[ch]:r.SRC_ALPHA_SATURATE,[oh]:r.DST_COLOR,[sh]:r.DST_ALPHA,[rh]:r.ONE_MINUS_SRC_COLOR,[ol]:r.ONE_MINUS_SRC_ALPHA,[lh]:r.ONE_MINUS_DST_COLOR,[ah]:r.ONE_MINUS_DST_ALPHA,[uh]:r.CONSTANT_COLOR,[fh]:r.ONE_MINUS_CONSTANT_COLOR,[dh]:r.CONSTANT_ALPHA,[hh]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(T,se,$,ae,ve,Ge,tt,Tt,At,wt){if(T===Yi){S===!0&&(Pe(r.BLEND),S=!1);return}if(S===!1&&(Fe(r.BLEND),S=!0),T!==$d){if(T!==E||wt!==Y){if((x!==gr||R!==gr)&&(r.blendEquation(r.FUNC_ADD),x=gr,R=gr),wt)switch(T){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tc:r.blendFunc(r.ONE,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ic:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ic:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}v=null,I=null,N=null,X=null,B.set(0,0,0),d=0,E=T,Y=wt}return}ve=ve||se,Ge=Ge||$,tt=tt||ae,(se!==x||ve!==R)&&(r.blendEquationSeparate(H[se],H[ve]),x=se,R=ve),($!==v||ae!==I||Ge!==N||tt!==X)&&(r.blendFuncSeparate(ft[$],ft[ae],ft[Ge],ft[tt]),v=$,I=ae,N=Ge,X=tt),(Tt.equals(B)===!1||At!==d)&&(r.blendColor(Tt.r,Tt.g,Tt.b,At),B.copy(Tt),d=At),E=T,Y=!1}function Nt(T,se){T.side===Xn?Pe(r.CULL_FACE):Fe(r.CULL_FACE);let $=T.side===Rn;se&&($=!$),Xe($),T.blending===$r&&T.transparent===!1?dt(Yi):dt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),i.setMask(T.colorWrite);const ae=T.stencilWrite;o.setTest(ae),ae&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),qe(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Fe(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(T){L!==T&&(T?r.frontFace(r.CW):r.frontFace(r.CCW),L=T)}function xt(T){T!==Yd?(Fe(r.CULL_FACE),T!==P&&(T===ec?r.cullFace(r.BACK):T===Kd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),P=T}function st(T){T!==z&&(me&&r.lineWidth(T),z=T)}function qe(T,se,$){T?(Fe(r.POLYGON_OFFSET_FILL),(ce!==se||j!==$)&&(r.polygonOffset(se,$),ce=se,j=$)):Pe(r.POLYGON_OFFSET_FILL)}function Gt(T){T?Fe(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function O(T){T===void 0&&(T=r.TEXTURE0+pe-1),Q!==T&&(r.activeTexture(T),Q=T)}function w(T,se,$){$===void 0&&(Q===null?$=r.TEXTURE0+pe-1:$=Q);let ae=Se[$];ae===void 0&&(ae={type:void 0,texture:void 0},Se[$]=ae),(ae.type!==T||ae.texture!==se)&&(Q!==$&&(r.activeTexture($),Q=$),r.bindTexture(T,se||be[T]),ae.type=T,ae.texture=se)}function te(){const T=Se[Q];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ue(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function at(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function He(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ve(T){vt.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),vt.copy(T))}function we(T){Et.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),Et.copy(T))}function $e(T,se){let $=u.get(se);$===void 0&&($=new WeakMap,u.set(se,$));let ae=$.get(T);ae===void 0&&(ae=r.getUniformBlockIndex(se,T.name),$.set(T,ae))}function lt(T,se){const ae=u.get(se).get(T);l.get(se)!==ae&&(r.uniformBlockBinding(se,ae,T.__bindingPointIndex),l.set(se,ae))}function Bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Q=null,Se={},h={},p=new WeakMap,g=[],y=null,S=!1,E=null,x=null,v=null,I=null,R=null,N=null,X=null,B=new ut(0,0,0),d=0,Y=!1,L=null,P=null,z=null,ce=null,j=null,vt.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:Fe,disable:Pe,bindFramebuffer:ht,drawBuffers:it,useProgram:et,setBlending:dt,setMaterial:Nt,setFlipSided:Xe,setCullFace:xt,setLineWidth:st,setPolygonOffset:qe,setScissorTest:Gt,activeTexture:O,bindTexture:w,unbindTexture:te,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:He,texImage3D:ot,updateUBOMapping:$e,uniformBlockBinding:lt,texStorage2D:at,texStorage3D:Me,texSubImage2D:Z,texSubImage3D:Ue,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ce,scissor:Ve,viewport:we,reset:Bt}}function fx(r,e,t,n,i,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Qe,h=new WeakMap;let p;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(O,w){return y?new OffscreenCanvas(O,w):Xs("canvas")}function E(O,w,te){let _e=1;const xe=Gt(O);if((xe.width>te||xe.height>te)&&(_e=te/Math.max(xe.width,xe.height)),_e<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Z=Math.floor(_e*xe.width),Ue=Math.floor(_e*xe.height);p===void 0&&(p=S(Z,Ue));const Re=w?S(Z,Ue):p;return Re.width=Z,Re.height=Ue,Re.getContext("2d").drawImage(O,0,0,Z,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Z+"x"+Ue+")."),Re}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),O;return O}function x(O){return O.generateMipmaps&&O.minFilter!==En&&O.minFilter!==Dn}function v(O){r.generateMipmap(O)}function I(O,w,te,_e,xe=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Z=w;if(w===r.RED&&(te===r.FLOAT&&(Z=r.R32F),te===r.HALF_FLOAT&&(Z=r.R16F),te===r.UNSIGNED_BYTE&&(Z=r.R8)),w===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(Z=r.R8UI),te===r.UNSIGNED_SHORT&&(Z=r.R16UI),te===r.UNSIGNED_INT&&(Z=r.R32UI),te===r.BYTE&&(Z=r.R8I),te===r.SHORT&&(Z=r.R16I),te===r.INT&&(Z=r.R32I)),w===r.RG&&(te===r.FLOAT&&(Z=r.RG32F),te===r.HALF_FLOAT&&(Z=r.RG16F),te===r.UNSIGNED_BYTE&&(Z=r.RG8)),w===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(Z=r.RG8UI),te===r.UNSIGNED_SHORT&&(Z=r.RG16UI),te===r.UNSIGNED_INT&&(Z=r.RG32UI),te===r.BYTE&&(Z=r.RG8I),te===r.SHORT&&(Z=r.RG16I),te===r.INT&&(Z=r.RG32I)),w===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),w===r.RGBA){const Ue=xe?Va:It.getTransfer(_e);te===r.FLOAT&&(Z=r.RGBA32F),te===r.HALF_FLOAT&&(Z=r.RGBA16F),te===r.UNSIGNED_BYTE&&(Z=Ue===Wt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function R(O,w){let te;return O?w===null||w===is||w===rs?te=r.DEPTH24_STENCIL8:w===li?te=r.DEPTH32F_STENCIL8:w===za&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===is||w===rs?te=r.DEPTH_COMPONENT24:w===li?te=r.DEPTH_COMPONENT32F:w===za&&(te=r.DEPTH_COMPONENT16),te}function N(O,w){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==En&&O.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function X(O){const w=O.target;w.removeEventListener("dispose",X),d(w),w.isVideoTexture&&h.delete(w)}function B(O){const w=O.target;w.removeEventListener("dispose",B),L(w)}function d(O){const w=n.get(O);if(w.__webglInit===void 0)return;const te=O.source,_e=g.get(te);if(_e){const xe=_e[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&Y(O),Object.keys(_e).length===0&&g.delete(te)}n.remove(O)}function Y(O){const w=n.get(O);r.deleteTexture(w.__webglTexture);const te=O.source,_e=g.get(te);delete _e[w.__cacheKey],o.memory.textures--}function L(O){const w=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(w.__webglFramebuffer[_e]))for(let xe=0;xe<w.__webglFramebuffer[_e].length;xe++)r.deleteFramebuffer(w.__webglFramebuffer[_e][xe]);else r.deleteFramebuffer(w.__webglFramebuffer[_e]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[_e])}else{if(Array.isArray(w.__webglFramebuffer))for(let _e=0;_e<w.__webglFramebuffer.length;_e++)r.deleteFramebuffer(w.__webglFramebuffer[_e]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let _e=0;_e<w.__webglColorRenderbuffer.length;_e++)w.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[_e]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=O.textures;for(let _e=0,xe=te.length;_e<xe;_e++){const Z=n.get(te[_e]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(te[_e])}n.remove(O)}let P=0;function z(){P=0}function ce(){const O=P;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),P+=1,O}function j(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function pe(O,w){const te=n.get(O);if(O.isVideoTexture&&st(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){const _e=O.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(te,O,w);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+w)}function me(O,w){const te=n.get(O);if(O.version>0&&te.__version!==O.version){Et(te,O,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+w)}function ue(O,w){const te=n.get(O);if(O.version>0&&te.__version!==O.version){Et(te,O,w);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+w)}function oe(O,w){const te=n.get(O);if(O.version>0&&te.__version!==O.version){he(te,O,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+w)}const Q={[ns]:r.REPEAT,[Wi]:r.CLAMP_TO_EDGE,[Ha]:r.MIRRORED_REPEAT},Se={[En]:r.NEAREST,[vf]:r.NEAREST_MIPMAP_NEAREST,[Ns]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Fa]:r.LINEAR_MIPMAP_NEAREST,[Ai]:r.LINEAR_MIPMAP_LINEAR},Ae={[Xh]:r.NEVER,[Zh]:r.ALWAYS,[jh]:r.LESS,[Cf]:r.LEQUAL,[qh]:r.EQUAL,[$h]:r.GEQUAL,[Yh]:r.GREATER,[Kh]:r.NOTEQUAL};function Oe(O,w){if(w.type===li&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Dn||w.magFilter===Fa||w.magFilter===Ns||w.magFilter===Ai||w.minFilter===Dn||w.minFilter===Fa||w.minFilter===Ns||w.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Q[w.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Q[w.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Q[w.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Se[w.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,Ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===En||w.minFilter!==Ns&&w.minFilter!==Ai||w.type===li&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function vt(O,w){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",X));const _e=w.source;let xe=g.get(_e);xe===void 0&&(xe={},g.set(_e,xe));const Z=j(w);if(Z!==O.__cacheKey){xe[Z]===void 0&&(xe[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,te=!0),xe[Z].usedTimes++;const Ue=xe[O.__cacheKey];Ue!==void 0&&(xe[O.__cacheKey].usedTimes--,Ue.usedTimes===0&&Y(w)),O.__cacheKey=Z,O.__webglTexture=xe[Z].texture}return te}function Et(O,w,te){let _e=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(_e=r.TEXTURE_3D);const xe=vt(O,w),Z=w.source;t.bindTexture(_e,O.__webglTexture,r.TEXTURE0+te);const Ue=n.get(Z);if(Z.version!==Ue.__version||xe===!0){t.activeTexture(r.TEXTURE0+te);const Re=It.getPrimaries(It.workingColorSpace),Ce=w.colorSpace===Gi?null:It.getPrimaries(w.colorSpace),at=w.colorSpace===Gi||Re===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Me=E(w.image,!1,i.maxTextureSize);Me=qe(w,Me);const He=s.convert(w.format,w.colorSpace),ot=s.convert(w.type);let Ve=I(w.internalFormat,He,ot,w.colorSpace,w.isVideoTexture);Oe(_e,w);let we;const $e=w.mipmaps,lt=w.isVideoTexture!==!0,Bt=Ue.__version===void 0||xe===!0,T=Z.dataReady,se=N(w,Me);if(w.isDepthTexture)Ve=R(w.format===ss,w.type),Bt&&(lt?t.texStorage2D(r.TEXTURE_2D,1,Ve,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Ve,Me.width,Me.height,0,He,ot,null));else if(w.isDataTexture)if($e.length>0){lt&&Bt&&t.texStorage2D(r.TEXTURE_2D,se,Ve,$e[0].width,$e[0].height);for(let $=0,ae=$e.length;$<ae;$++)we=$e[$],lt?T&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,we.width,we.height,He,ot,we.data):t.texImage2D(r.TEXTURE_2D,$,Ve,we.width,we.height,0,He,ot,we.data);w.generateMipmaps=!1}else lt?(Bt&&t.texStorage2D(r.TEXTURE_2D,se,Ve,Me.width,Me.height),T&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,He,ot,Me.data)):t.texImage2D(r.TEXTURE_2D,0,Ve,Me.width,Me.height,0,He,ot,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&Bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Ve,$e[0].width,$e[0].height,Me.depth);for(let $=0,ae=$e.length;$<ae;$++)if(we=$e[$],w.format!==qn)if(He!==null)if(lt){if(T)if(w.layerUpdates.size>0){for(const ve of w.layerUpdates){const Ge=we.width*we.height;t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ve,we.width,we.height,1,He,we.data.slice(Ge*ve,Ge*(ve+1)),0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,we.width,we.height,Me.depth,He,we.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ve,we.width,we.height,Me.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?T&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,we.width,we.height,Me.depth,He,ot,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,Ve,we.width,we.height,Me.depth,0,He,ot,we.data)}else{lt&&Bt&&t.texStorage2D(r.TEXTURE_2D,se,Ve,$e[0].width,$e[0].height);for(let $=0,ae=$e.length;$<ae;$++)we=$e[$],w.format!==qn?He!==null?lt?T&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,we.width,we.height,He,we.data):t.compressedTexImage2D(r.TEXTURE_2D,$,Ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?T&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,we.width,we.height,He,ot,we.data):t.texImage2D(r.TEXTURE_2D,$,Ve,we.width,we.height,0,He,ot,we.data)}else if(w.isDataArrayTexture)if(lt){if(Bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Ve,Me.width,Me.height,Me.depth),T)if(w.layerUpdates.size>0){let $;switch(ot){case r.UNSIGNED_BYTE:switch(He){case r.ALPHA:$=1;break;case r.LUMINANCE:$=1;break;case r.LUMINANCE_ALPHA:$=2;break;case r.RGB:$=3;break;case r.RGBA:$=4;break;default:throw new Error(`Unknown texel size for format ${He}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:$=1;break;default:throw new Error(`Unknown texel size for type ${ot}.`)}const ae=Me.width*Me.height*$;for(const ve of w.layerUpdates)t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,Me.width,Me.height,1,He,ot,Me.data.slice(ae*ve,ae*(ve+1)));w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,He,ot,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,Me.width,Me.height,Me.depth,0,He,ot,Me.data);else if(w.isData3DTexture)lt?(Bt&&t.texStorage3D(r.TEXTURE_3D,se,Ve,Me.width,Me.height,Me.depth),T&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,He,ot,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Ve,Me.width,Me.height,Me.depth,0,He,ot,Me.data);else if(w.isFramebufferTexture){if(Bt)if(lt)t.texStorage2D(r.TEXTURE_2D,se,Ve,Me.width,Me.height);else{let $=Me.width,ae=Me.height;for(let ve=0;ve<se;ve++)t.texImage2D(r.TEXTURE_2D,ve,Ve,$,ae,0,He,ot,null),$>>=1,ae>>=1}}else if($e.length>0){if(lt&&Bt){const $=Gt($e[0]);t.texStorage2D(r.TEXTURE_2D,se,Ve,$.width,$.height)}for(let $=0,ae=$e.length;$<ae;$++)we=$e[$],lt?T&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,He,ot,we):t.texImage2D(r.TEXTURE_2D,$,Ve,He,ot,we);w.generateMipmaps=!1}else if(lt){if(Bt){const $=Gt(Me);t.texStorage2D(r.TEXTURE_2D,se,Ve,$.width,$.height)}T&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,ot,Me)}else t.texImage2D(r.TEXTURE_2D,0,Ve,He,ot,Me);x(w)&&v(_e),Ue.__version=Z.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function he(O,w,te){if(w.image.length!==6)return;const _e=vt(O,w),xe=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+te);const Z=n.get(xe);if(xe.version!==Z.__version||_e===!0){t.activeTexture(r.TEXTURE0+te);const Ue=It.getPrimaries(It.workingColorSpace),Re=w.colorSpace===Gi?null:It.getPrimaries(w.colorSpace),Ce=w.colorSpace===Gi||Ue===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const at=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,He=[];for(let ae=0;ae<6;ae++)!at&&!Me?He[ae]=E(w.image[ae],!0,i.maxCubemapSize):He[ae]=Me?w.image[ae].image:w.image[ae],He[ae]=qe(w,He[ae]);const ot=He[0],Ve=s.convert(w.format,w.colorSpace),we=s.convert(w.type),$e=I(w.internalFormat,Ve,we,w.colorSpace),lt=w.isVideoTexture!==!0,Bt=Z.__version===void 0||_e===!0,T=xe.dataReady;let se=N(w,ot);Oe(r.TEXTURE_CUBE_MAP,w);let $;if(at){lt&&Bt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,se,$e,ot.width,ot.height);for(let ae=0;ae<6;ae++){$=He[ae].mipmaps;for(let ve=0;ve<$.length;ve++){const Ge=$[ve];w.format!==qn?Ve!==null?lt?T&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Ge.width,Ge.height,Ve,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,$e,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Ge.width,Ge.height,Ve,we,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,$e,Ge.width,Ge.height,0,Ve,we,Ge.data)}}}else{if($=w.mipmaps,lt&&Bt){$.length>0&&se++;const ae=Gt(He[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,se,$e,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Me){lt?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,He[ae].width,He[ae].height,Ve,we,He[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,He[ae].width,He[ae].height,0,Ve,we,He[ae].data);for(let ve=0;ve<$.length;ve++){const tt=$[ve].image[ae].image;lt?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,tt.width,tt.height,Ve,we,tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,$e,tt.width,tt.height,0,Ve,we,tt.data)}}else{lt?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ve,we,He[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,Ve,we,He[ae]);for(let ve=0;ve<$.length;ve++){const Ge=$[ve];lt?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,Ve,we,Ge.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,$e,Ve,we,Ge.image[ae])}}}x(w)&&v(r.TEXTURE_CUBE_MAP),Z.__version=xe.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function be(O,w,te,_e,xe,Z){const Ue=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),Ce=I(te.internalFormat,Ue,Re,te.colorSpace);if(!n.get(w).__hasExternalTextures){const Me=Math.max(1,w.width>>Z),He=Math.max(1,w.height>>Z);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,Z,Ce,Me,He,w.depth,0,Ue,Re,null):t.texImage2D(xe,Z,Ce,Me,He,0,Ue,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),xt(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,xe,n.get(te).__webglTexture,0,Xe(w)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,xe,n.get(te).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(O,w,te){if(r.bindRenderbuffer(r.RENDERBUFFER,O),w.depthBuffer){const _e=w.depthTexture,xe=_e&&_e.isDepthTexture?_e.type:null,Z=R(w.stencilBuffer,xe),Ue=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=Xe(w);xt(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,Z,w.width,w.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Z,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Z,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,O)}else{const _e=w.textures;for(let xe=0;xe<_e.length;xe++){const Z=_e[xe],Ue=s.convert(Z.format,Z.colorSpace),Re=s.convert(Z.type),Ce=I(Z.internalFormat,Ue,Re,Z.colorSpace),at=Xe(w);te&&xt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Ce,w.width,w.height):xt(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,Ce,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const _e=n.get(w.depthTexture).__webglTexture,xe=Xe(w);if(w.depthTexture.format===Zr)xt(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(w.depthTexture.format===ss)xt(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ht(O){const w=n.get(O),te=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Pe(w.__webglFramebuffer,O)}else if(te){w.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[_e]),w.__webglDepthbuffer[_e]=r.createRenderbuffer(),Fe(w.__webglDepthbuffer[_e],O,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Fe(w.__webglDepthbuffer,O,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(O,w,te){const _e=n.get(O);w!==void 0&&be(_e.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&ht(O)}function et(O){const w=O.texture,te=n.get(O),_e=n.get(w);O.addEventListener("dispose",B);const xe=O.textures,Z=O.isWebGLCubeRenderTarget===!0,Ue=xe.length>1;if(Ue||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=w.version,o.memory.textures++),Z){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)te.__webglFramebuffer[Re][Ce]=r.createFramebuffer()}else te.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)te.__webglFramebuffer[Re]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let Re=0,Ce=xe.length;Re<Ce;Re++){const at=n.get(xe[Re]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),o.memory.textures++)}if(O.samples>0&&xt(O)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Ce=xe[Re];te.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const at=s.convert(Ce.format,Ce.colorSpace),Me=s.convert(Ce.type),He=I(Ce.internalFormat,at,Me,Ce.colorSpace,O.isXRRenderTarget===!0),ot=Xe(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,He,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(te.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)be(te.__webglFramebuffer[Re][Ce],O,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce);else be(te.__webglFramebuffer[Re],O,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(w)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Re=0,Ce=xe.length;Re<Ce;Re++){const at=xe[Re],Me=n.get(at);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),Oe(r.TEXTURE_2D,at),be(te.__webglFramebuffer,O,at,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),x(at)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,_e.__webglTexture),Oe(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)be(te.__webglFramebuffer[Ce],O,w,r.COLOR_ATTACHMENT0,Re,Ce);else be(te.__webglFramebuffer,O,w,r.COLOR_ATTACHMENT0,Re,0);x(w)&&v(Re),t.unbindTexture()}O.depthBuffer&&ht(O)}function H(O){const w=O.textures;for(let te=0,_e=w.length;te<_e;te++){const xe=w[te];if(x(xe)){const Z=O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ue=n.get(xe).__webglTexture;t.bindTexture(Z,Ue),v(Z),t.unbindTexture()}}}const ft=[],dt=[];function Nt(O){if(O.samples>0){if(xt(O)===!1){const w=O.textures,te=O.width,_e=O.height;let xe=r.COLOR_BUFFER_BIT;const Z=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=n.get(O),Re=w.length>1;if(Re)for(let Ce=0;Ce<w.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ce=0;Ce<w.length;Ce++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const at=n.get(w[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,at,0)}r.blitFramebuffer(0,0,te,_e,0,0,te,_e,xe,r.NEAREST),u===!0&&(ft.length=0,dt.length=0,ft.push(r.COLOR_ATTACHMENT0+Ce),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ft.push(Z),dt.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,dt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let Ce=0;Ce<w.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const at=n.get(w[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,at,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&u){const w=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Xe(O){return Math.min(i.maxSamples,O.samples)}function xt(O){const w=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function st(O){const w=o.render.frame;h.get(O)!==w&&(h.set(O,w),O.update())}function qe(O,w){const te=O.colorSpace,_e=O.format,xe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==fn&&te!==Gi&&(It.getTransfer(te)===Wt?(_e!==qn||xe!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}function Gt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(f.width=O.naturalWidth||O.width,f.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(f.width=O.displayWidth,f.height=O.displayHeight):(f.width=O.width,f.height=O.height),f}this.allocateTextureUnit=ce,this.resetTextureUnits=z,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=ue,this.setTextureCube=oe,this.rebindTextures=it,this.setupRenderTarget=et,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xt}function dx(r,e){function t(n,i=Gi){let s;const o=It.getTransfer(i);if(n===$i)return r.UNSIGNED_BYTE;if(n===yf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return r.BYTE;if(n===Dh)return r.SHORT;if(n===za)return r.UNSIGNED_SHORT;if(n===xf)return r.INT;if(n===is)return r.UNSIGNED_INT;if(n===li)return r.FLOAT;if(n===Ja)return r.HALF_FLOAT;if(n===Nh)return r.ALPHA;if(n===Uh)return r.RGB;if(n===qn)return r.RGBA;if(n===Oh)return r.LUMINANCE;if(n===Fh)return r.LUMINANCE_ALPHA;if(n===Zr)return r.DEPTH_COMPONENT;if(n===ss)return r.DEPTH_STENCIL;if(n===bf)return r.RED;if(n===Mf)return r.RED_INTEGER;if(n===Bh)return r.RG;if(n===Ef)return r.RG_INTEGER;if(n===Tf)return r.RGBA_INTEGER;if(n===xo||n===yo||n===So||n===bo)if(o===Wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===ac||n===oc||n===lc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===uc||n===fc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===cc||n===uc)return o===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dc||n===hc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===Sc||n===bc||n===Mc||n===Ec||n===Tc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===Ac||n===wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Mo)return o===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===Cc||n===Rc||n===Pc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class hx extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const px={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),v=this._getHandJoint(f,E);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const h=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],g=h.position.distanceTo(p.position),y=.02,S=.005;f.inputState.pinching&&g>y+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=y-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(px)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new on,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zi({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class vx extends yr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",u=1,f=null,h=null,p=null,g=null,y=null,S=null;const E=new _x,x=t.getContextAttributes();let v=null,I=null;const R=[],N=[],X=new Qe;let B=null;const d=new Mn;d.layers.enable(1),d.viewport=new kt;const Y=new Mn;Y.layers.enable(2),Y.viewport=new kt;const L=[d,Y],P=new hx;P.layers.enable(1),P.layers.enable(2);let z=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let be=R[he];return be===void 0&&(be=new Ko,R[he]=be),be.getTargetRaySpace()},this.getControllerGrip=function(he){let be=R[he];return be===void 0&&(be=new Ko,R[he]=be),be.getGripSpace()},this.getHand=function(he){let be=R[he];return be===void 0&&(be=new Ko,R[he]=be),be.getHandSpace()};function j(he){const be=N.indexOf(he.inputSource);if(be===-1)return;const Fe=R[be];Fe!==void 0&&(Fe.update(he.inputSource,he.frame,f||o),Fe.dispatchEvent({type:he.type,data:he.inputSource}))}function pe(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",pe),i.removeEventListener("inputsourceschange",me);for(let he=0;he<R.length;he++){const be=N[he];be!==null&&(N[he]=null,R[he].disconnect(be))}z=null,ce=null,E.reset(),e.setRenderTarget(v),y=null,g=null,p=null,i=null,I=null,Et.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(X.width,X.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){l=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(he){f=he},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return p},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(he){if(i=he,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",pe),i.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(X),i.renderState.layers===void 0){const be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};y=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new vr(y.framebufferWidth,y.framebufferHeight,{format:qn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let be=null,Fe=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=x.stencil?ss:Zr,Fe=x.stencil?rs:is);const ht={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};p=new XRWebGLBinding(i,t),g=p.createProjectionLayer(ht),i.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new vr(g.textureWidth,g.textureHeight,{format:qn,type:$i,depthTexture:new zf(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(u),f=null,o=await i.requestReferenceSpace(l),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function me(he){for(let be=0;be<he.removed.length;be++){const Fe=he.removed[be],Pe=N.indexOf(Fe);Pe>=0&&(N[Pe]=null,R[Pe].disconnect(Fe))}for(let be=0;be<he.added.length;be++){const Fe=he.added[be];let Pe=N.indexOf(Fe);if(Pe===-1){for(let it=0;it<R.length;it++)if(it>=N.length){N.push(Fe),Pe=it;break}else if(N[it]===null){N[it]=Fe,Pe=it;break}if(Pe===-1)break}const ht=R[Pe];ht&&ht.connect(Fe)}}const ue=new V,oe=new V;function Q(he,be,Fe){ue.setFromMatrixPosition(be.matrixWorld),oe.setFromMatrixPosition(Fe.matrixWorld);const Pe=ue.distanceTo(oe),ht=be.projectionMatrix.elements,it=Fe.projectionMatrix.elements,et=ht[14]/(ht[10]-1),H=ht[14]/(ht[10]+1),ft=(ht[9]+1)/ht[5],dt=(ht[9]-1)/ht[5],Nt=(ht[8]-1)/ht[0],Xe=(it[8]+1)/it[0],xt=et*Nt,st=et*Xe,qe=Pe/(-Nt+Xe),Gt=qe*-Nt;be.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Gt),he.translateZ(qe),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert();const O=et+qe,w=H+qe,te=xt-Gt,_e=st+(Pe-Gt),xe=ft*H/w*O,Z=dt*H/w*O;he.projectionMatrix.makePerspective(te,_e,xe,Z,O,w),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}function Se(he,be){be===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(be.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(i===null)return;E.texture!==null&&(he.near=E.depthNear,he.far=E.depthFar),P.near=Y.near=d.near=he.near,P.far=Y.far=d.far=he.far,(z!==P.near||ce!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),z=P.near,ce=P.far,d.near=z,d.far=ce,Y.near=z,Y.far=ce,d.updateProjectionMatrix(),Y.updateProjectionMatrix(),he.updateProjectionMatrix());const be=he.parent,Fe=P.cameras;Se(P,be);for(let Pe=0;Pe<Fe.length;Pe++)Se(Fe[Pe],be);Fe.length===2?Q(P,d,Y):P.projectionMatrix.copy(d.projectionMatrix),Ae(he,P,be)};function Ae(he,be,Fe){Fe===null?he.matrix.copy(be.matrixWorld):(he.matrix.copy(Fe.matrixWorld),he.matrix.invert(),he.matrix.multiply(be.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(be.projectionMatrix),he.projectionMatrixInverse.copy(be.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=as*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(g===null&&y===null))return u},this.setFoveation=function(he){u=he,g!==null&&(g.fixedFoveation=he),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=he)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(P)};let Oe=null;function vt(he,be){if(h=be.getViewerPose(f||o),S=be,h!==null){const Fe=h.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let Pe=!1;Fe.length!==P.cameras.length&&(P.cameras.length=0,Pe=!0);for(let it=0;it<Fe.length;it++){const et=Fe[it];let H=null;if(y!==null)H=y.getViewport(et);else{const dt=p.getViewSubImage(g,et);H=dt.viewport,it===0&&(e.setRenderTargetTextures(I,dt.colorTexture,g.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(I))}let ft=L[it];ft===void 0&&(ft=new Mn,ft.layers.enable(it),ft.viewport=new kt,L[it]=ft),ft.matrix.fromArray(et.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(et.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(H.x,H.y,H.width,H.height),it===0&&(P.matrix.copy(ft.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Pe===!0&&P.cameras.push(ft)}const ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const it=p.getDepthInformation(Fe[0]);it&&it.isValid&&it.texture&&E.init(e,it,i.renderState)}}for(let Fe=0;Fe<R.length;Fe++){const Pe=N[Fe],ht=R[Fe];Pe!==null&&ht!==void 0&&ht.update(Pe,be,f||o)}Oe&&Oe(he,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),S=null}const Et=new Hf;Et.setAnimationLoop(vt),this.setAnimationLoop=function(he){Oe=he},this.dispose=function(){}}}const hr=new di,xx=new _t;function yx(r,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,Ff(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function i(x,v,I,R,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(x,v):v.isMeshToonMaterial?(s(x,v),p(x,v)):v.isMeshPhongMaterial?(s(x,v),h(x,v)):v.isMeshStandardMaterial?(s(x,v),g(x,v),v.isMeshPhysicalMaterial&&y(x,v,N)):v.isMeshMatcapMaterial?(s(x,v),S(x,v)):v.isMeshDepthMaterial?s(x,v):v.isMeshDistanceMaterial?(s(x,v),E(x,v)):v.isMeshNormalMaterial?s(x,v):v.isLineBasicMaterial?(o(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?u(x,v,I,R):v.isSpriteMaterial?f(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Rn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Rn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const I=e.get(v),R=I.envMap,N=I.envMapRotation;R&&(x.envMap.value=R,hr.copy(N),hr.x*=-1,hr.y*=-1,hr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),x.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(hr)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function o(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function u(x,v,I,R){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*I,x.scale.value=R*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function p(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,I){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Rn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,v){v.matcap&&(x.matcap.value=v.matcap)}function E(x,v){const I=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sx(r,e,t,n){let i={},s={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(I,R){const N=R.program;n.uniformBlockBinding(I,N)}function f(I,R){let N=i[I.id];N===void 0&&(S(I),N=h(I),i[I.id]=N,I.addEventListener("dispose",x));const X=R.program;n.updateUBOMapping(I,X);const B=e.render.frame;s[I.id]!==B&&(g(I),s[I.id]=B)}function h(I){const R=p();I.__bindingPointIndex=R;const N=r.createBuffer(),X=I.__size,B=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,X,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,N),N}function p(){for(let I=0;I<l;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(I){const R=i[I.id],N=I.uniforms,X=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let B=0,d=N.length;B<d;B++){const Y=Array.isArray(N[B])?N[B]:[N[B]];for(let L=0,P=Y.length;L<P;L++){const z=Y[L];if(y(z,B,L,X)===!0){const ce=z.__offset,j=Array.isArray(z.value)?z.value:[z.value];let pe=0;for(let me=0;me<j.length;me++){const ue=j[me],oe=E(ue);typeof ue=="number"||typeof ue=="boolean"?(z.__data[0]=ue,r.bufferSubData(r.UNIFORM_BUFFER,ce+pe,z.__data)):ue.isMatrix3?(z.__data[0]=ue.elements[0],z.__data[1]=ue.elements[1],z.__data[2]=ue.elements[2],z.__data[3]=0,z.__data[4]=ue.elements[3],z.__data[5]=ue.elements[4],z.__data[6]=ue.elements[5],z.__data[7]=0,z.__data[8]=ue.elements[6],z.__data[9]=ue.elements[7],z.__data[10]=ue.elements[8],z.__data[11]=0):(ue.toArray(z.__data,pe),pe+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(I,R,N,X){const B=I.value,d=R+"_"+N;if(X[d]===void 0)return typeof B=="number"||typeof B=="boolean"?X[d]=B:X[d]=B.clone(),!0;{const Y=X[d];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return X[d]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function S(I){const R=I.uniforms;let N=0;const X=16;for(let d=0,Y=R.length;d<Y;d++){const L=Array.isArray(R[d])?R[d]:[R[d]];for(let P=0,z=L.length;P<z;P++){const ce=L[P],j=Array.isArray(ce.value)?ce.value:[ce.value];for(let pe=0,me=j.length;pe<me;pe++){const ue=j[pe],oe=E(ue),Q=N%X;Q!==0&&X-Q<oe.boundary&&(N+=X-Q),ce.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=N,N+=oe.storage}}}const B=N%X;return B>0&&(N+=X-B),I.__size=N,I.__cache={},this}function E(I){const R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function x(I){const R=I.target;R.removeEventListener("dispose",x);const N=o.indexOf(R.__bindingPointIndex);o.splice(N,1),r.deleteBuffer(i[R.id]),delete i[R.id],delete s[R.id]}function v(){for(const I in i)r.deleteBuffer(i[I]);o=[],i={},s={}}return{bind:u,update:f,dispose:v}}class bx{constructor(e={}){const{canvas:t=pp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const y=new Uint32Array(4),S=new Int32Array(4);let E=null,x=null;const v=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Ki,this.toneMappingExposure=1;const R=this;let N=!1,X=0,B=0,d=null,Y=-1,L=null;const P=new kt,z=new kt;let ce=null;const j=new ut(0);let pe=0,me=t.width,ue=t.height,oe=1,Q=null,Se=null;const Ae=new kt(0,0,me,ue),Oe=new kt(0,0,me,ue);let vt=!1;const Et=new wl;let he=!1,be=!1;const Fe=new _t,Pe=new V,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function et(){return d===null?oe:1}let H=n;function ft(C,W){return t.getContext(C,W)}try{const C={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ae,!1),H===null){const W="webgl2";if(H=ft(W,C),H===null)throw ft(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let dt,Nt,Xe,xt,st,qe,Gt,O,w,te,_e,xe,Z,Ue,Re,Ce,at,Me,He,ot,Ve,we,$e,lt;function Bt(){dt=new P_(H),dt.init(),we=new dx(H,dt),Nt=new E_(H,dt,e,we),Xe=new ux(H),xt=new I_(H),st=new $v,qe=new fx(H,dt,Xe,st,Nt,we,xt),Gt=new A_(R),O=new R_(R),w=new Hp(H),$e=new b_(H,w),te=new L_(H,w,xt,$e),_e=new U_(H,te,w,xt),He=new N_(H,Nt,qe),Ce=new T_(st),xe=new Kv(R,Gt,O,dt,Nt,$e,Ce),Z=new yx(R,st),Ue=new Jv,Re=new rx(dt),Me=new S_(R,Gt,O,Xe,_e,g,u),at=new cx(R,_e,Nt),lt=new Sx(H,xt,Nt,Xe),ot=new M_(H,dt,xt),Ve=new D_(H,dt,xt),xt.programs=xe.programs,R.capabilities=Nt,R.extensions=dt,R.properties=st,R.renderLists=Ue,R.shadowMap=at,R.state=Xe,R.info=xt}Bt();const T=new vx(R,H);this.xr=T,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(me,ue,!1))},this.getSize=function(C){return C.set(me,ue)},this.setSize=function(C,W,ee=!0){if(T.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=C,ue=W,t.width=Math.floor(C*oe),t.height=Math.floor(W*oe),ee===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(me*oe,ue*oe).floor()},this.setDrawingBufferSize=function(C,W,ee){me=C,ue=W,oe=ee,t.width=Math.floor(C*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Ae)},this.setViewport=function(C,W,ee,ne){C.isVector4?Ae.set(C.x,C.y,C.z,C.w):Ae.set(C,W,ee,ne),Xe.viewport(P.copy(Ae).multiplyScalar(oe).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,W,ee,ne){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,W,ee,ne),Xe.scissor(z.copy(Oe).multiplyScalar(oe).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(C){Xe.setScissorTest(vt=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){Se=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(C=!0,W=!0,ee=!0){let ne=0;if(C){let q=!1;if(d!==null){const Ee=d.texture.format;q=Ee===Tf||Ee===Ef||Ee===Mf}if(q){const Ee=d.texture.type,De=Ee===$i||Ee===is||Ee===za||Ee===rs||Ee===yf||Ee===Sf,Be=Me.getClearColor(),ke=Me.getClearAlpha(),Ke=Be.r,Ze=Be.g,je=Be.b;De?(y[0]=Ke,y[1]=Ze,y[2]=je,y[3]=ke,H.clearBufferuiv(H.COLOR,0,y)):(S[0]=Ke,S[1]=Ze,S[2]=je,S[3]=ke,H.clearBufferiv(H.COLOR,0,S))}else ne|=H.COLOR_BUFFER_BIT}W&&(ne|=H.DEPTH_BUFFER_BIT),ee&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ue.dispose(),Re.dispose(),st.dispose(),Gt.dispose(),O.dispose(),_e.dispose(),$e.dispose(),lt.dispose(),xe.dispose(),T.dispose(),T.removeEventListener("sessionstart",Yt),T.removeEventListener("sessionend",jt),dn.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=xt.autoReset,W=at.enabled,ee=at.autoUpdate,ne=at.needsUpdate,q=at.type;Bt(),xt.autoReset=C,at.enabled=W,at.autoUpdate=ee,at.needsUpdate=ne,at.type=q}function ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){const W=C.target;W.removeEventListener("dispose",ve),Ge(W)}function Ge(C){tt(C),st.remove(C)}function tt(C){const W=st.get(C).programs;W!==void 0&&(W.forEach(function(ee){xe.releaseProgram(ee)}),C.isShaderMaterial&&xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ee,ne,q,Ee){W===null&&(W=ht);const De=q.isMesh&&q.matrixWorld.determinant()<0,Be=no(C,W,ee,ne,q);Xe.setMaterial(ne,De);let ke=ee.index,Ke=1;if(ne.wireframe===!0){if(ke=te.getWireframeAttribute(ee),ke===void 0)return;Ke=2}const Ze=ee.drawRange,je=ee.attributes.position;let Rt=Ze.start*Ke,Xt=(Ze.start+Ze.count)*Ke;Ee!==null&&(Rt=Math.max(Rt,Ee.start*Ke),Xt=Math.min(Xt,(Ee.start+Ee.count)*Ke)),ke!==null?(Rt=Math.max(Rt,0),Xt=Math.min(Xt,ke.count)):je!=null&&(Rt=Math.max(Rt,0),Xt=Math.min(Xt,je.count));const Ht=Xt-Rt;if(Ht<0||Ht===1/0)return;$e.setup(q,ne,Be,ee,ke);let vn,Dt=ot;if(ke!==null&&(vn=w.get(ke),Dt=Ve,Dt.setIndex(vn)),q.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*et()),Dt.setMode(H.LINES)):Dt.setMode(H.TRIANGLES);else if(q.isLine){let We=ne.linewidth;We===void 0&&(We=1),Xe.setLineWidth(We*et()),q.isLineSegments?Dt.setMode(H.LINES):q.isLineLoop?Dt.setMode(H.LINE_LOOP):Dt.setMode(H.LINE_STRIP)}else q.isPoints?Dt.setMode(H.POINTS):q.isSprite&&Dt.setMode(H.TRIANGLES);if(q.isBatchedMesh)q._multiDrawInstances!==null?Dt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances):Dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Dt.renderInstances(Rt,Ht,q.count);else if(ee.isInstancedBufferGeometry){const We=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,sn=Math.min(ee.instanceCount,We);Dt.renderInstances(Rt,Ht,sn)}else Dt.render(Rt,Ht)};function Tt(C,W,ee){C.transparent===!0&&C.side===Xn&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,Mr(C,W,ee),C.side=Ci,C.needsUpdate=!0,Mr(C,W,ee),C.side=Xn):Mr(C,W,ee)}this.compile=function(C,W,ee=null){ee===null&&(ee=C),x=Re.get(ee),x.init(W),I.push(x),ee.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),C!==ee&&C.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const ne=new Set;return C.traverse(function(q){const Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Be=Ee[De];Tt(Be,ee,q),ne.add(Be)}else Tt(Ee,ee,q),ne.add(Ee)}),I.pop(),x=null,ne},this.compileAsync=function(C,W,ee=null){const ne=this.compile(C,W,ee);return new Promise(q=>{function Ee(){if(ne.forEach(function(De){st.get(De).currentProgram.isReady()&&ne.delete(De)}),ne.size===0){q(C);return}setTimeout(Ee,10)}dt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let At=null;function wt(C){At&&At(C)}function Yt(){dn.stop()}function jt(){dn.start()}const dn=new Hf;dn.setAnimationLoop(wt),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(C){At=C,T.setAnimationLoop(C),C===null?dn.stop():dn.start()},T.addEventListener("sessionstart",Yt),T.addEventListener("sessionend",jt),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),T.enabled===!0&&T.isPresenting===!0&&(T.cameraAutoUpdate===!0&&T.updateCamera(W),W=T.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,W,d),x=Re.get(C,I.length),x.init(W),I.push(x),Fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Et.setFromProjectionMatrix(Fe),be=this.localClippingEnabled,he=Ce.init(this.clippingPlanes,be),E=Ue.get(C,v.length),E.init(),v.push(E),T.enabled===!0&&T.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&$t(Ee,W,-1/0,R.sortObjects)}$t(C,W,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(Q,Se),it=T.enabled===!1||T.isPresenting===!1||T.hasDepthSensing()===!1,it&&Me.addToRenderList(E,C),this.info.render.frame++,he===!0&&Ce.beginShadows();const ee=x.state.shadowsArray;at.render(ee,C,W),he===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=E.opaque,q=E.transmissive;if(x.setupLights(),W.isArrayCamera){const Ee=W.cameras;if(q.length>0)for(let De=0,Be=Ee.length;De<Be;De++){const ke=Ee[De];kn(ne,q,C,ke)}it&&Me.render(C);for(let De=0,Be=Ee.length;De<Be;De++){const ke=Ee[De];_n(E,C,ke,ke.viewport)}}else q.length>0&&kn(ne,q,C,W),it&&Me.render(C),_n(E,C,W);d!==null&&(qe.updateMultisampleRenderTarget(d),qe.updateRenderTargetMipmap(d)),C.isScene===!0&&C.onAfterRender(R,C,W),$e.resetDefaultState(),Y=-1,L=null,I.pop(),I.length>0?(x=I[I.length-1],he===!0&&Ce.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,v.pop(),v.length>0?E=v[v.length-1]:E=null};function $t(C,W,ee,ne){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Et.intersectsSprite(C)){ne&&Pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Fe);const De=_e.update(C),Be=C.material;Be.visible&&E.push(C,De,Be,ee,Pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Et.intersectsObject(C))){const De=_e.update(C),Be=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Pe.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Pe.copy(De.boundingSphere.center)),Pe.applyMatrix4(C.matrixWorld).applyMatrix4(Fe)),Array.isArray(Be)){const ke=De.groups;for(let Ke=0,Ze=ke.length;Ke<Ze;Ke++){const je=ke[Ke],Rt=Be[je.materialIndex];Rt&&Rt.visible&&E.push(C,De,Rt,ee,Pe.z,je)}}else Be.visible&&E.push(C,De,Be,ee,Pe.z,null)}}const Ee=C.children;for(let De=0,Be=Ee.length;De<Be;De++)$t(Ee[De],W,ee,ne)}function _n(C,W,ee,ne){const q=C.opaque,Ee=C.transmissive,De=C.transparent;x.setupLightsView(ee),he===!0&&Ce.setGlobalState(R.clippingPlanes,ee),ne&&Xe.viewport(P.copy(ne)),q.length>0&&In(q,W,ee),Ee.length>0&&In(Ee,W,ee),De.length>0&&In(De,W,ee),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function kn(C,W,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ne.id]===void 0&&(x.state.transmissionRenderTarget[ne.id]=new vr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Ja:$i,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Ee=x.state.transmissionRenderTarget[ne.id],De=ne.viewport||P;Ee.setSize(De.z,De.w);const Be=R.getRenderTarget();R.setRenderTarget(Ee),R.getClearColor(j),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),it?Me.render(ee):R.clear();const ke=R.toneMapping;R.toneMapping=Ki;const Ke=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),x.setupLightsView(ne),he===!0&&Ce.setGlobalState(R.clippingPlanes,ne),In(C,ee,ne),qe.updateMultisampleRenderTarget(Ee),qe.updateRenderTargetMipmap(Ee),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let je=0,Rt=W.length;je<Rt;je++){const Xt=W[je],Ht=Xt.object,vn=Xt.geometry,Dt=Xt.material,We=Xt.group;if(Dt.side===Xn&&Ht.layers.test(ne.layers)){const sn=Dt.side;Dt.side=Rn,Dt.needsUpdate=!0,Zs(Ht,ee,ne,vn,Dt,We),Dt.side=sn,Dt.needsUpdate=!0,Ze=!0}}Ze===!0&&(qe.updateMultisampleRenderTarget(Ee),qe.updateRenderTargetMipmap(Ee))}R.setRenderTarget(Be),R.setClearColor(j,pe),Ke!==void 0&&(ne.viewport=Ke),R.toneMapping=ke}function In(C,W,ee){const ne=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Ee=C.length;q<Ee;q++){const De=C[q],Be=De.object,ke=De.geometry,Ke=ne===null?De.material:ne,Ze=De.group;Be.layers.test(ee.layers)&&Zs(Be,W,ee,ke,Ke,Ze)}}function Zs(C,W,ee,ne,q,Ee){C.onBeforeRender(R,W,ee,ne,q,Ee),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(R,W,ee,ne,C,Ee),q.transparent===!0&&q.side===Xn&&q.forceSinglePass===!1?(q.side=Rn,q.needsUpdate=!0,R.renderBufferDirect(ee,W,ne,q,C,Ee),q.side=Ci,q.needsUpdate=!0,R.renderBufferDirect(ee,W,ne,q,C,Ee),q.side=Xn):R.renderBufferDirect(ee,W,ne,q,C,Ee),C.onAfterRender(R,W,ee,ne,q,Ee)}function Mr(C,W,ee){W.isScene!==!0&&(W=ht);const ne=st.get(C),q=x.state.lights,Ee=x.state.shadowsArray,De=q.state.version,Be=xe.getParameters(C,q.state,Ee,W,ee),ke=xe.getProgramCacheKey(Be);let Ke=ne.programs;ne.environment=C.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(C.isMeshStandardMaterial?O:Gt).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",ve),Ke=new Map,ne.programs=Ke);let Ze=Ke.get(ke);if(Ze!==void 0){if(ne.currentProgram===Ze&&ne.lightsStateVersion===De)return gs(C,Be),Ze}else Be.uniforms=xe.getUniforms(C),C.onBuild(ee,Be,R),C.onBeforeCompile(Be,R),Ze=xe.acquireProgram(Be,ke),Ke.set(ke,Ze),ne.uniforms=Be.uniforms;const je=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=Ce.uniform),gs(C,Be),ne.needsLights=Qs(C),ne.lightsStateVersion=De,ne.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.directionalShadowMap.value=q.state.directionalShadowMap,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotShadowMap.value=q.state.spotShadowMap,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMap.value=q.state.pointShadowMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=Ze,ne.uniformsList=null,Ze}function Js(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Ba.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function gs(C,W){const ee=st.get(C);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function no(C,W,ee,ne,q){W.isScene!==!0&&(W=ht),qe.resetTextureUnits();const Ee=W.fog,De=ne.isMeshStandardMaterial?W.environment:null,Be=d===null?R.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:fn,ke=(ne.isMeshStandardMaterial?O:Gt).get(ne.envMap||De),Ke=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ze=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!ee.morphAttributes.position,Rt=!!ee.morphAttributes.normal,Xt=!!ee.morphAttributes.color;let Ht=Ki;ne.toneMapped&&(d===null||d.isXRRenderTarget===!0)&&(Ht=R.toneMapping);const vn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Dt=vn!==void 0?vn.length:0,We=st.get(ne),sn=x.state.lights;if(he===!0&&(be===!0||C!==L)){const xn=C===L&&ne.id===Y;Ce.setState(ne,C,xn)}let Lt=!1;ne.version===We.__version?(We.needsLights&&We.lightsStateVersion!==sn.state.version||We.outputColorSpace!==Be||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==ke||ne.fog===!0&&We.fog!==Ee||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ce.numPlanes||We.numIntersection!==Ce.numIntersection)||We.vertexAlphas!==Ke||We.vertexTangents!==Ze||We.morphTargets!==je||We.morphNormals!==Rt||We.morphColors!==Xt||We.toneMapping!==Ht||We.morphTargetsCount!==Dt)&&(Lt=!0):(Lt=!0,We.__version=ne.version);let Nn=We.currentProgram;Lt===!0&&(Nn=Mr(ne,W,q));let Qt=!1,An=!1,Pi=!1;const Zt=Nn.getUniforms(),Jn=We.uniforms;if(Xe.useProgram(Nn.program)&&(Qt=!0,An=!0,Pi=!0),ne.id!==Y&&(Y=ne.id,An=!0),Qt||L!==C){Zt.setValue(H,"projectionMatrix",C.projectionMatrix),Zt.setValue(H,"viewMatrix",C.matrixWorldInverse);const xn=Zt.map.cameraPosition;xn!==void 0&&xn.setValue(H,Pe.setFromMatrixPosition(C.matrixWorld)),Nt.logarithmicDepthBuffer&&Zt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Zt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,An=!0,Pi=!0)}if(q.isSkinnedMesh){Zt.setOptional(H,q,"bindMatrix"),Zt.setOptional(H,q,"bindMatrixInverse");const xn=q.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Zt.setValue(H,"boneTexture",xn.boneTexture,qe))}q.isBatchedMesh&&(Zt.setOptional(H,q,"batchingTexture"),Zt.setValue(H,"batchingTexture",q._matricesTexture,qe),Zt.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Zt.setValue(H,"batchingColorTexture",q._colorsTexture,qe));const ir=ee.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&He.update(q,ee,Nn),(An||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,Zt.setValue(H,"receiveShadow",q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Jn.envMap.value=ke,Jn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(Jn.envMapIntensity.value=W.environmentIntensity),An&&(Zt.setValue(H,"toneMappingExposure",R.toneMappingExposure),We.needsLights&&io(Jn,Pi),Ee&&ne.fog===!0&&Z.refreshFogUniforms(Jn,Ee),Z.refreshMaterialUniforms(Jn,ne,oe,ue,x.state.transmissionRenderTarget[C.id]),Ba.upload(H,Js(We),Jn,qe)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ba.upload(H,Js(We),Jn,qe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Zt.setValue(H,"center",q.center),Zt.setValue(H,"modelViewMatrix",q.modelViewMatrix),Zt.setValue(H,"normalMatrix",q.normalMatrix),Zt.setValue(H,"modelMatrix",q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const xn=ne.uniformsGroups;for(let Li=0,ea=xn.length;Li<ea;Li++){const ta=xn[Li];lt.update(ta,Nn),lt.bind(ta,Nn)}}return Nn}function io(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Qs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(C,W,ee){st.get(C.texture).__webglTexture=W,st.get(C.depthTexture).__webglTexture=ee;const ne=st.get(C);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const ee=st.get(C);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ee=0){d=C,X=W,B=ee;let ne=!0,q=null,Ee=!1,De=!1;if(C){const ke=st.get(C);ke.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1):ke.__webglFramebuffer===void 0?qe.setupRenderTarget(C):ke.__hasExternalTextures&&qe.rebindTextures(C,st.get(C.texture).__webglTexture,st.get(C.depthTexture).__webglTexture);const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Ze=st.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?q=Ze[W][ee]:q=Ze[W],Ee=!0):C.samples>0&&qe.useMultisampledRTT(C)===!1?q=st.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?q=Ze[ee]:q=Ze,P.copy(C.viewport),z.copy(C.scissor),ce=C.scissorTest}else P.copy(Ae).multiplyScalar(oe).floor(),z.copy(Oe).multiplyScalar(oe).floor(),ce=vt;if(Xe.bindFramebuffer(H.FRAMEBUFFER,q)&&ne&&Xe.drawBuffers(C,q),Xe.viewport(P),Xe.scissor(z),Xe.setScissorTest(ce),Ee){const ke=st.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,ee)}else if(De){const ke=st.get(C.texture),Ke=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,ee||0,Ke)}Y=-1},this.readRenderTargetPixels=function(C,W,ee,ne,q,Ee,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=st.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Xe.bindFramebuffer(H.FRAMEBUFFER,Be);try{const ke=C.texture,Ke=ke.format,Ze=ke.type;if(!Nt.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ne&&ee>=0&&ee<=C.height-q&&H.readPixels(W,ee,ne,q,we.convert(Ke),we.convert(Ze),Ee)}finally{const ke=d!==null?st.get(d).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,W,ee,ne,q,Ee,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=st.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Xe.bindFramebuffer(H.FRAMEBUFFER,Be);try{const ke=C.texture,Ke=ke.format,Ze=ke.type;if(!Nt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-ne&&ee>=0&&ee<=C.height-q){const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(W,ee,ne,q,we.convert(Ke),we.convert(Ze),0),H.flush();const Rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await mp(H,Rt,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee)}finally{H.deleteBuffer(je),H.deleteSync(Rt)}return Ee}}finally{const ke=d!==null?st.get(d).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(C,W=null,ee=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const ne=Math.pow(2,-ee),q=Math.floor(C.image.width*ne),Ee=Math.floor(C.image.height*ne),De=W!==null?W.x:0,Be=W!==null?W.y:0;qe.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,ee,0,0,De,Be,q,Ee),Xe.unbindTexture()},this.copyTextureToTexture=function(C,W,ee=null,ne=null,q=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,C=arguments[1],W=arguments[2],q=arguments[3]||0,ee=null);let Ee,De,Be,ke,Ke,Ze;ee!==null?(Ee=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Be=ee.min.x,ke=ee.min.y):(Ee=C.image.width,De=C.image.height,Be=0,ke=0),ne!==null?(Ke=ne.x,Ze=ne.y):(Ke=0,Ze=0);const je=we.convert(W.format),Rt=we.convert(W.type);qe.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Xt=H.getParameter(H.UNPACK_ROW_LENGTH),Ht=H.getParameter(H.UNPACK_IMAGE_HEIGHT),vn=H.getParameter(H.UNPACK_SKIP_PIXELS),Dt=H.getParameter(H.UNPACK_SKIP_ROWS),We=H.getParameter(H.UNPACK_SKIP_IMAGES),sn=C.isCompressedTexture?C.mipmaps[q]:C.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,sn.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,sn.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Be),H.pixelStorei(H.UNPACK_SKIP_ROWS,ke),C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,Ke,Ze,Ee,De,je,Rt,sn.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,Ke,Ze,sn.width,sn.height,je,sn.data):H.texSubImage2D(H.TEXTURE_2D,q,Ke,Ze,je,Rt,sn),H.pixelStorei(H.UNPACK_ROW_LENGTH,Xt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ht),H.pixelStorei(H.UNPACK_SKIP_PIXELS,vn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,We),q===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ee=null,ne=null,q=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ne=arguments[1]||null,C=arguments[2],W=arguments[3],q=arguments[4]||0);let Ee,De,Be,ke,Ke,Ze,je,Rt,Xt;const Ht=C.isCompressedTexture?C.mipmaps[q]:C.image;ee!==null?(Ee=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Be=ee.max.z-ee.min.z,ke=ee.min.x,Ke=ee.min.y,Ze=ee.min.z):(Ee=Ht.width,De=Ht.height,Be=Ht.depth,ke=0,Ke=0,Ze=0),ne!==null?(je=ne.x,Rt=ne.y,Xt=ne.z):(je=0,Rt=0,Xt=0);const vn=we.convert(W.format),Dt=we.convert(W.type);let We;if(W.isData3DTexture)qe.setTexture3D(W,0),We=H.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)qe.setTexture2DArray(W,0),We=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const sn=H.getParameter(H.UNPACK_ROW_LENGTH),Lt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Nn=H.getParameter(H.UNPACK_SKIP_PIXELS),Qt=H.getParameter(H.UNPACK_SKIP_ROWS),An=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ht.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ht.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ze),C.isDataTexture||C.isData3DTexture?H.texSubImage3D(We,q,je,Rt,Xt,Ee,De,Be,vn,Dt,Ht.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(We,q,je,Rt,Xt,Ee,De,Be,vn,Ht.data):H.texSubImage3D(We,q,je,Rt,Xt,Ee,De,Be,vn,Dt,Ht),H.pixelStorei(H.UNPACK_ROW_LENGTH,sn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Lt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Nn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,An),q===0&&W.generateMipmaps&&H.generateMipmap(We),Xe.unbindTexture()},this.initRenderTarget=function(C){st.get(C).__webglFramebuffer===void 0&&qe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?qe.setTextureCube(C,0):C.isData3DTexture?qe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?qe.setTexture2DArray(C,0):qe.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){X=0,B=0,d=null,Xe.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===El?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===Qa?"display-p3":"srgb"}}class Mx extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ex{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Al("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new V;class Pl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Eu=new V,Tu=new kt,Au=new kt,Tx=new V,wu=new _t,wa=new V,$o=new hi,Cu=new _t,Zo=new qs;class Ax extends Cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rc,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingBox.expandByPoint(wa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingSphere.expandByPoint(wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(i),e.ray.intersectsSphere($o)!==!1&&(Cu.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(Cu),!(this.boundingBox!==null&&Zo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new kt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ph?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Tu.fromBufferAttribute(i.attributes.skinIndex,e),Au.fromBufferAttribute(i.attributes.skinWeight,e),Eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Au.getComponent(s);if(o!==0){const l=Tu.getComponent(s);wu.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Tx.copy(Eu).applyMatrix4(wu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qf extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yf extends on{constructor(e=null,t=1,n=1,i,s,o,l,u,f=En,h=En,p,g){super(null,o,l,u,f,h,i,s,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=new _t,wx=new _t;class Ll{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _t;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const l=e[s]?e[s].matrixWorld:wx;Ru.multiplyMatrices(l,t[s]),Ru.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ll(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yf(t,e,e,qn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new qf),this.bones.push(o),this.boneInverses.push(new _t().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class hl extends Tn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xr=new _t,Pu=new _t,Ca=[],Lu=new Ri,Cx=new _t,ws=new Cn,Cs=new hi;class Rx extends Cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),Lu.copy(e.boundingBox).applyMatrix4(Xr),this.boundingBox.union(Lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),Cs.copy(e.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let l=0;l<n.length;l++)n[l]=i[o+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Xr),Pu.multiplyMatrices(n,Xr),ws.matrixWorld=Pu,ws.raycast(e,Ca);for(let o=0,l=Ca.length;o<l;o++){const u=Ca[o];u.instanceId=s,u.object=this,t.push(u)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yf(new Float32Array(i*this.count),i,this.count,bf,li));const s=this.morphTexture.source.data.data;let o=0;for(let f=0;f<n.length;f++)o+=n[f];const l=this.geometry.morphTargetsRelative?1:1-o,u=i*e;s[u]=l,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Dl extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ja=new V,qa=new V,Du=new _t,Rs=new qs,Ra=new hi,Jo=new V,Iu=new V;class Il extends qt{constructor(e=new Kn,t=new Dl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ja.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ja.distanceTo(qa);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;Du.copy(i).invert(),Rs.copy(e.ray).applyMatrix4(Du);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,f=this.isLineSegments?2:1,h=n.index,g=n.attributes.position;if(h!==null){const y=Math.max(0,o.start),S=Math.min(h.count,o.start+o.count);for(let E=y,x=S-1;E<x;E+=f){const v=h.getX(E),I=h.getX(E+1),R=Pa(this,e,Rs,u,v,I);R&&t.push(R)}if(this.isLineLoop){const E=h.getX(S-1),x=h.getX(y),v=Pa(this,e,Rs,u,E,x);v&&t.push(v)}}else{const y=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let E=y,x=S-1;E<x;E+=f){const v=Pa(this,e,Rs,u,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=Pa(this,e,Rs,u,S-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Pa(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(ja.fromBufferAttribute(o,i),qa.fromBufferAttribute(o,s),t.distanceSqToSegment(ja,qa,Jo,Iu)>n)return;Jo.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(Jo);if(!(u<e.near||u>e.far))return{distance:u,point:Iu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Nu=new V,Uu=new V;class Kf extends Il{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Nu.fromBufferAttribute(t,i),Uu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nu.distanceTo(Uu);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Px extends Il{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $f extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ou=new _t,pl=new qs,La=new hi,Da=new V;class Lx extends qt{constructor(e=new Kn,t=new $f){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=s,e.ray.intersectsSphere(La)===!1)return;Ou.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Ou);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,f=n.index,p=n.attributes.position;if(f!==null){const g=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let S=g,E=y;S<E;S++){const x=f.getX(S);Da.fromBufferAttribute(p,x),Fu(Da,x,u,i,e,t,this)}}else{const g=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let S=g,E=y;S<E;S++)Da.fromBufferAttribute(p,S),Fu(Da,S,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Fu(r,e,t,n,i,s,o){const l=pl.distanceSqToPoint(r);if(l<t){const u=new V;pl.closestPointToPoint(r,u),u.applyMatrix4(n);const f=i.ray.origin.distanceTo(u);if(f<i.near||f>i.far)return;s.push({distance:f,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,object:o})}}class Dx extends Kn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new V,s=new V;if(e.index!==null){const o=e.attributes.position,l=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:l.count,materialIndex:0}]);for(let f=0,h=u.length;f<h;++f){const p=u[f],g=p.start,y=p.count;for(let S=g,E=g+y;S<E;S+=3)for(let x=0;x<3;x++){const v=l.getX(S+x),I=l.getX(S+(x+1)%3);i.fromBufferAttribute(o,v),s.fromBufferAttribute(o,I),Bu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let l=0,u=o.count/3;l<u;l++)for(let f=0;f<3;f++){const h=3*l+f,p=3*l+(f+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,p),Bu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ui(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Bu(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class Nl extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends Nl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ia(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ix(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Nx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ku(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const l=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[l+u]}return i}function Zf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class $s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ux extends $s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,l=i[s],u=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Dc:s=e,l=2*t-n;break;case Ic:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Dc:o=e,u=2*n-t;break;case Ic:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const f=(n-t)*.5,h=this.valueSize;this._weightPrev=f/(t-l),this._weightNext=f/(u-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,f=u-l,h=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,y=this._weightNext,S=(n-t)/(i-t),E=S*S,x=E*S,v=-g*x+2*g*E-g*S,I=(1+g)*x+(-1.5-2*g)*E+(-.5+g)*S+1,R=(-1-y)*x+(1.5+y)*E+.5*S,N=y*x-y*E;for(let X=0;X!==l;++X)s[X]=v*o[h+X]+I*o[f+X]+R*o[u+X]+N*o[p+X];return s}}class Ox extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,f=u-l,h=(n-t)/(i-t),p=1-h;for(let g=0;g!==l;++g)s[g]=o[f+g]*p+o[u+g]*h;return s}}class Fx extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ux(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Eo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const l=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==s;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,o),e=!1;break}o=u}if(i!==void 0&&Ix(i))for(let l=0,u=i.length;l!==u;++l){const f=i[l];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eo,s=e.length-1;let o=1;for(let l=1;l<s;++l){let u=!1;const f=e[l],h=e[l+1];if(f!==h&&(l!==1||f!==e[0]))if(i)u=!0;else{const p=l*n,g=p-n,y=p+n;for(let S=0;S!==n;++S){const E=t[p+S];if(E!==t[g+S]||E!==t[y+S]){u=!0;break}}}if(u){if(l!==o){e[o]=e[l];const p=l*n,g=o*n;for(let y=0;y!==n;++y)t[g+y]=t[p+y]}++o}}if(s>0){e[o]=e[s];for(let l=s*n,u=o*n,f=0;f!==n;++f)t[u+f]=t[l+f];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Ws;class ds extends mi{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Gs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Jf extends mi{}Jf.prototype.ValueTypeName="color";class ls extends mi{}ls.prototype.ValueTypeName="number";class Bx extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(n-t)/(i-t);let f=e*l;for(let h=f+l;f!==h;f+=4)fi.slerpFlat(s,0,o,f-l,o,f,u);return s}}class cs extends mi{InterpolantFactoryMethodLinear(e){return new Bx(this.times,this.values,this.getValueSize(),e)}}cs.prototype.ValueTypeName="quaternion";cs.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends mi{constructor(e,t,n){super(e,t,n)}}hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Gs;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends mi{}us.prototype.ValueTypeName="vector";class kx{constructor(e="",t=-1,n=[],i=Hh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(zx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(mi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let l=0;l<s;l++){let u=[],f=[];u.push((l+s-1)%s,l,(l+1)%s),f.push(0,1,0);const h=Nx(u);u=ku(u,1,h),f=ku(f,1,h),!i&&u[0]===0&&(u.push(s),f.push(f[0])),o.push(new ls(".morphTargetInfluences["+t[l].name+"]",u,f).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const f=e[l],h=f.name.match(s);if(h&&h.length>1){const p=h[1];let g=i[p];g||(i[p]=g=[]),g.push(f)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,g,y,S,E){if(y.length!==0){const x=[],v=[];Zf(y,x,v,S),x.length!==0&&E.push(new p(g,x,v))}},i=[],s=e.name||"default",o=e.fps||30,l=e.blendMode;let u=e.length||-1;const f=e.hierarchy||[];for(let p=0;p<f.length;p++){const g=f[p].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const y={};let S;for(S=0;S<g.length;S++)if(g[S].morphTargets)for(let E=0;E<g[S].morphTargets.length;E++)y[g[S].morphTargets[E]]=-1;for(const E in y){const x=[],v=[];for(let I=0;I!==g[S].morphTargets.length;++I){const R=g[S];x.push(R.time),v.push(R.morphTarget===E?1:0)}i.push(new ls(".morphTargetInfluence["+E+"]",x,v))}u=y.length*o}else{const y=".bones["+t[p].name+"]";n(us,y+".position",g,"pos",i),n(cs,y+".quaternion",g,"rot",i),n(us,y+".scale",g,"scl",i)}}return i.length===0?null:new this(s,u,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ls;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Jf;case"quaternion":return cs;case"bool":case"boolean":return ds;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function zx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hx(r.type);if(r.times===void 0){const t=[],n=[];Zf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const qi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Vx{constructor(e,t,n){const i=this;let s=!1,o=0,l=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,l),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,p){return f.push(h,p),this},this.removeHandler=function(h){const p=f.indexOf(h);return p!==-1&&f.splice(p,2),this},this.getHandler=function(h){for(let p=0,g=f.length;p<g;p+=2){const y=f[p],S=f[p+1];if(y.global&&(y.lastIndex=0),y.test(h))return S}return null}}}const Gx=new Vx;class ps{constructor(e){this.manager=e!==void 0?e:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Wx extends Error{constructor(e,t){super(e),this.response=t}}class Qf extends ps{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(o).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const h=Mi[e],p=f.body.getReader(),g=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=g?parseInt(g):0,S=y!==0;let E=0;const x=new ReadableStream({start(v){I();function I(){p.read().then(({done:R,value:N})=>{if(R)v.close();else{E+=N.byteLength;const X=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:y});for(let B=0,d=h.length;B<d;B++){const Y=h[B];Y.onProgress&&Y.onProgress(X)}v.enqueue(N),I()}},R=>{v.error(R)})}}});return new Response(x)}else throw new Wx(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(u){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return f.json();default:if(l===void 0)return f.text();{const p=/charset="?([^;"\s]*)"?/i.exec(l),g=p&&p[1]?p[1].toLowerCase():void 0,y=new TextDecoder(g);return f.arrayBuffer().then(S=>y.decode(S))}}}).then(f=>{qi.add(e,f);const h=Mi[e];delete Mi[e];for(let p=0,g=h.length;p<g;p++){const y=h[p];y.onLoad&&y.onLoad(f)}}).catch(f=>{const h=Mi[e];if(h===void 0)throw this.manager.itemError(e),f;delete Mi[e];for(let p=0,g=h.length;p<g;p++){const y=h[p];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xx extends ps{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=Xs("img");function u(){h(),qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(p){h(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){l.removeEventListener("load",u,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class jx extends ps{constructor(e){super(e)}load(e,t,n,i){const s=new on,o=new Xx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class to extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Qo=new _t,Hu=new V,zu=new V;class Ul{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qx extends Ul{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=as*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yx extends to{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vu=new _t,Ps=new V,el=new V;class Kx extends Ul{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),el.copy(n.position),el.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(el),n.updateMatrixWorld(),i.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu)}}class ed extends to{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $x extends Ul{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends to{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new $x}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zx extends to{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Jx extends ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(f=>{t&&t(f),s.manager.itemEnd(e)}).catch(f=>{i&&i(f)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const u=fetch(e,l).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(f){return qi.add(e,f),t&&t(f),s.manager.itemEnd(e),f}).catch(function(f){i&&i(f),qi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});qi.add(e,u),s.manager.itemStart(e)}}const Ol="\\[\\]\\.:\\/",Qx=new RegExp("["+Ol+"]","g"),Fl="[^"+Ol+"]",e0="[^"+Ol.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",Fl),n0=/(WCOD+)?/.source.replace("WCOD",e0),i0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),r0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),s0=new RegExp("^"+t0+n0+i0+r0+"$"),a0=["material","materials","bones","map"];class o0{constructor(e,t,n){const i=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ft{constructor(e,t,n){this.path=t,this.parsedPath=n||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,n):new Ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){const t=s0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);a0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const l=s[o];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===f){f=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const o=e[i];if(o===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=o0;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Gu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);function Wu(r,e){if(e===zh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ul||e===Af){let t=r.getIndex();if(t===null){const o=[],l=r.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)o.push(u);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ul)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class l0 extends ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new h0(t)}),this.register(function(t){return new p0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new A0(t)}),this.register(function(t){return new w0(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const f=Hs.extractUrlBase(e);o=Hs.resolveURL(f,this.path)}else o=Hs.extractUrlBase(e);this.manager.itemStart(e);const l=function(f){i?i(f):console.error(f),s.manager.itemError(e),s.manager.itemEnd(e)},u=new Qf(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(f){try{s.parse(f,o,function(h){t(h),s.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},l={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===nd){try{o[bt.KHR_BINARY_GLTF]=new C0(e)}catch(p){i&&i(p);return}s=JSON.parse(o[bt.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new z0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const p=this.pluginCallbacks[h](f);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[p.name]=p,o[p.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const p=s.extensionsUsed[h],g=s.extensionsRequired||[];switch(p){case bt.KHR_MATERIALS_UNLIT:o[p]=new f0;break;case bt.KHR_DRACO_MESH_COMPRESSION:o[p]=new R0(s,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:o[p]=new P0;break;case bt.KHR_MESH_QUANTIZATION:o[p]=new L0;break;default:g.indexOf(p)>=0&&l[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}f.setExtensions(o),f.setPlugins(l),f.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function c0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class u0{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let f;const h=new ut(16777215);u.color!==void 0&&h.setRGB(u.color[0],u.color[1],u.color[2],fn);const p=u.range!==void 0?u.range:0;switch(u.type){case"directional":f=new td(h),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new ed(h),f.distance=p;break;case"spot":f=new Yx(h),f.distance=p,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,f.angle=u.spot.outerConeAngle,f.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return f.position.set(0,0,0),f.decay=2,Ti(f,u),u.intensity!==void 0&&(f.intensity=u.intensity),f.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(f),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(t.cache,l,u)})}}class f0{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xi}extendParams(e,t,n){const i=[];e.color=new ut(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,gn))}return Promise.all(i)}}class d0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class h0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(l,l)}return Promise.all(s)}}class p0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class m0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class g0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class _0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class v0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(l[0],l[1],l[2],fn),Promise.all(s)}}class x0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class y0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(l[0],l[1],l[2],fn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gn)),Promise.all(s)}}class S0{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class b0{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class M0{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class E0{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let u=n.textureLoader;if(l.uri){const f=n.options.manager.getHandler(l.uri);f!==null&&(u=f)}return this.detectSupport().then(function(f){if(f)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class T0{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let u=n.textureLoader;if(l.uri){const f=n.options.manager.getHandler(l.uri);f!==null&&(u=f)}return this.detectSupport().then(function(f){if(f)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class A0{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const u=i.byteOffset||0,f=i.byteLength||0,h=i.count,p=i.byteStride,g=new Uint8Array(l,u,f);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,p,g,i.mode,i.filter).then(function(y){return y.buffer}):o.ready.then(function(){const y=new ArrayBuffer(h*p);return o.decodeGltfBuffer(new Uint8Array(y),h,p,g,i.mode,i.filter),y})})}else return null}}class w0{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const f of i.primitives)if(f.mode!==Bn.TRIANGLES&&f.mode!==Bn.TRIANGLE_STRIP&&f.mode!==Bn.TRIANGLE_FAN&&f.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],u={};for(const f in o)l.push(this.parser.getDependency("accessor",o[f]).then(h=>(u[f]=h,u[f])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(f=>{const h=f.pop(),p=h.isGroup?h.children:[h],g=f[0].count,y=[];for(const S of p){const E=new _t,x=new V,v=new fi,I=new V(1,1,1),R=new Rx(S.geometry,S.material,g);for(let N=0;N<g;N++)u.TRANSLATION&&x.fromBufferAttribute(u.TRANSLATION,N),u.ROTATION&&v.fromBufferAttribute(u.ROTATION,N),u.SCALE&&I.fromBufferAttribute(u.SCALE,N),R.setMatrixAt(N,E.compose(x,v,I));for(const N in u)if(N==="_COLOR_0"){const X=u[N];R.instanceColor=new hl(X.array,X.itemSize,X.normalized)}else N!=="TRANSLATION"&&N!=="ROTATION"&&N!=="SCALE"&&S.geometry.setAttribute(N,u[N]);qt.prototype.copy.call(R,S),this.parser.assignFinalMaterial(R),y.push(R)}return h.isGroup?(h.clear(),h.add(...y),h):y[0]}))}}const nd="glTF",Ls=12,Xu={JSON:1313821514,BIN:5130562};class C0{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ls),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ls,s=new DataView(e,Ls);let o=0;for(;o<i;){const l=s.getUint32(o,!0);o+=4;const u=s.getUint32(o,!0);if(o+=4,u===Xu.JSON){const f=new Uint8Array(e,Ls+o,l);this.content=n.decode(f)}else if(u===Xu.BIN){const f=Ls+o;this.body=e.slice(f,f+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class R0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},u={},f={};for(const h in o){const p=ml[h]||h.toLowerCase();l[p]=o[h]}for(const h in e.attributes){const p=ml[h]||h.toLowerCase();if(o[h]!==void 0){const g=n.accessors[e.attributes[h]],y=Qr[g.componentType];f[p]=y.name,u[p]=g.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(p,g){i.decodeDracoFile(h,function(y){for(const S in y.attributes){const E=y.attributes[S],x=u[S];x!==void 0&&(E.normalized=x)}p(y)},l,f,fn,g)})})}}class P0{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class L0{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class id extends $s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=l*2,f=l*3,h=i-t,p=(n-t)/h,g=p*p,y=g*p,S=e*f,E=S-f,x=-2*y+3*g,v=y-g,I=1-x,R=v-g+p;for(let N=0;N!==l;N++){const X=o[E+N+l],B=o[E+N+u]*h,d=o[S+N+l],Y=o[S+N]*h;s[N]=I*X+R*B+x*d+v*Y}return s}}const D0=new fi;class I0 extends id{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return D0.fromArray(s).normalize().toArray(s),s}}const Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ju={9728:En,9729:Dn,9984:vf,9985:Fa,9986:Ns,9987:Ai},qu={33071:Wi,33648:Ha,10497:ns},tl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},N0={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Gs},nl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function U0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Nl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),r.DefaultMaterial}function pr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function O0(r,e,t){let n=!1,i=!1,s=!1;for(let f=0,h=e.length;f<h;f++){const p=e[f];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(i=!0),p.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],l=[],u=[];for(let f=0,h=e.length;f<h;f++){const p=e[f];if(n){const g=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):r.attributes.position;o.push(g)}if(i){const g=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):r.attributes.normal;l.push(g)}if(s){const g=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):r.attributes.color;u.push(g)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u)]).then(function(f){const h=f[0],p=f[1],g=f[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=p),s&&(r.morphAttributes.color=g),r.morphTargetsRelative=!0,r})}function F0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function B0(r){let e;const t=r.extensions&&r.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+il(t.attributes):e=r.indices+":"+il(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+il(r.targets[n]);return e}function il(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function gl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function k0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const H0=new _t;class z0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new c0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new jx(this.options.manager):this.textureLoader=new Jx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return pr(s,l,i),Ti(l,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){for(const u of l.scenes)u.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let l=0,u=o.length;l<u;l++)e[o[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,l)=>{const u=this.associations.get(o);u!=null&&this.associations.set(l,u);for(const[f,h]of o.children.entries())s(h,l.children[f])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Hs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=tl[i.type],l=Qr[i.componentType],u=i.normalized===!0,f=new l(i.count*o);return Promise.resolve(new Tn(f,o,u))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const l=o[0],u=tl[i.type],f=Qr[i.componentType],h=f.BYTES_PER_ELEMENT,p=h*u,g=i.byteOffset||0,y=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,S=i.normalized===!0;let E,x;if(y&&y!==p){const v=Math.floor(g/y),I="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let R=t.cache.get(I);R||(E=new f(l,v*y,i.count*y/h),R=new Ex(E,y/h),t.cache.add(I,R)),x=new Pl(R,u,g%y/h,S)}else l===null?E=new f(i.count*u):E=new f(l,g,i.count*u),x=new Tn(E,u,S);if(i.sparse!==void 0){const v=tl.SCALAR,I=Qr[i.sparse.indices.componentType],R=i.sparse.indices.byteOffset||0,N=i.sparse.values.byteOffset||0,X=new I(o[1],R,i.sparse.count*v),B=new f(o[2],N,i.sparse.count*u);l!==null&&(x=new Tn(x.array.slice(),x.itemSize,x.normalized));for(let d=0,Y=X.length;d<Y;d++){const L=X[d];if(x.setX(L,B[d*u]),u>=2&&x.setY(L,B[d*u+1]),u>=3&&x.setZ(L,B[d*u+2]),u>=4&&x.setW(L,B[d*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let l=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(l=u)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],l=s.images[t],u=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const f=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const g=(s.samplers||{})[o.sampler]||{};return h.magFilter=ju[g.magFilter]||Dn,h.minFilter=ju[g.minFilter]||Ai,h.wrapS=qu[g.wrapS]||ns,h.wrapT=qu[g.wrapT]||ns,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[u]=f,f}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const o=i.images[e],l=self.URL||self.webkitURL;let u=o.uri||"",f=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(p){f=!0;const g=new Blob([p],{type:o.mimeType});return u=l.createObjectURL(g),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(u).then(function(p){return new Promise(function(g,y){let S=g;t.isImageBitmapLoader===!0&&(S=function(E){const x=new on(E);x.needsUpdate=!0,g(x)}),t.load(Hs.resolveURL(p,s.path),S,void 0,y)})}).then(function(p){return f===!0&&l.revokeObjectURL(u),Ti(p,o),p.userData.mimeType=o.mimeType||k0(o.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),p});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[bt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=s.associations.get(o);o=s.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),s.associations.set(o,u)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new $f,ci.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new Dl,ci.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(i||s||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),s&&(u.vertexColors=!0),o&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return Nl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const l={},u=s.extensions||{},f=[];if(u[bt.KHR_MATERIALS_UNLIT]){const p=i[bt.KHR_MATERIALS_UNLIT];o=p.getMaterialType(),f.push(p.extendParams(l,s,t))}else{const p=s.pbrMetallicRoughness||{};if(l.color=new ut(1,1,1),l.opacity=1,Array.isArray(p.baseColorFactor)){const g=p.baseColorFactor;l.color.setRGB(g[0],g[1],g[2],fn),l.opacity=g[3]}p.baseColorTexture!==void 0&&f.push(t.assignTexture(l,"map",p.baseColorTexture,gn)),l.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,l.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(l,"metalnessMap",p.metallicRoughnessTexture)),f.push(t.assignTexture(l,"roughnessMap",p.metallicRoughnessTexture))),o=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=Xn);const h=s.alphaMode||nl.OPAQUE;if(h===nl.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===nl.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Xi&&(f.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new Qe(1,1),s.normalTexture.scale!==void 0)){const p=s.normalTexture.scale;l.normalScale.set(p,p)}if(s.occlusionTexture!==void 0&&o!==Xi&&(f.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Xi){const p=s.emissiveFactor;l.emissive=new ut().setRGB(p[0],p[1],p[2],fn)}return s.emissiveTexture!==void 0&&o!==Xi&&f.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,gn)),Promise.all(f).then(function(){const p=new o(l);return s.name&&(p.name=s.name),Ti(p,s),t.associations.set(p,{materials:e}),s.extensions&&pr(i,p,s),p})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(l){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(u){return Yu(u,l,t)})}const o=[];for(let l=0,u=e.length;l<u;l++){const f=e[l],h=B0(f),p=i[h];if(p)o.push(p.promise);else{let g;f.extensions&&f.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?g=s(f):g=Yu(new Kn,f,t),i[h]={primitive:f,promise:g},o.push(g)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,l=[];for(let u=0,f=o.length;u<f;u++){const h=o[u].material===void 0?U0(this.cache):this.getDependency("material",o[u].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(u){const f=u.slice(0,u.length-1),h=u[u.length-1],p=[];for(let y=0,S=h.length;y<S;y++){const E=h[y],x=o[y];let v;const I=f[y];if(x.mode===Bn.TRIANGLES||x.mode===Bn.TRIANGLE_STRIP||x.mode===Bn.TRIANGLE_FAN||x.mode===void 0)v=s.isSkinnedMesh===!0?new Ax(E,I):new Cn(E,I),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),x.mode===Bn.TRIANGLE_STRIP?v.geometry=Wu(v.geometry,Af):x.mode===Bn.TRIANGLE_FAN&&(v.geometry=Wu(v.geometry,ul));else if(x.mode===Bn.LINES)v=new Kf(E,I);else if(x.mode===Bn.LINE_STRIP)v=new Il(E,I);else if(x.mode===Bn.LINE_LOOP)v=new Px(E,I);else if(x.mode===Bn.POINTS)v=new Lx(E,I);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(v.geometry.morphAttributes).length>0&&F0(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),Ti(v,s),x.extensions&&pr(i,v,x),t.assignFinalMaterial(v),p.push(v)}for(let y=0,S=p.length;y<S;y++)t.associations.set(p[y],{meshes:e,primitives:y});if(p.length===1)return s.extensions&&pr(i,p[0],s),p[0];const g=new ji;s.extensions&&pr(i,g,s),t.associations.set(g,{meshes:e});for(let y=0,S=p.length;y<S;y++)g.add(p[y]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mn(Rf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Cl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,l=[],u=[];for(let f=0,h=o.length;f<h;f++){const p=o[f];if(p){l.push(p);const g=new _t;s!==null&&g.fromArray(s.array,f*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new Ll(l,u)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],l=[],u=[],f=[],h=[];for(let p=0,g=i.channels.length;p<g;p++){const y=i.channels[p],S=i.samplers[y.sampler],E=y.target,x=E.node,v=i.parameters!==void 0?i.parameters[S.input]:S.input,I=i.parameters!==void 0?i.parameters[S.output]:S.output;E.node!==void 0&&(o.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",v)),u.push(this.getDependency("accessor",I)),f.push(S),h.push(E))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(f),Promise.all(h)]).then(function(p){const g=p[0],y=p[1],S=p[2],E=p[3],x=p[4],v=[];for(let I=0,R=g.length;I<R;I++){const N=g[I],X=y[I],B=S[I],d=E[I],Y=x[I];if(N===void 0)continue;N.updateMatrix&&N.updateMatrix();const L=n._createAnimationTracks(N,X,B,d,Y);if(L)for(let P=0;P<L.length;P++)v.push(L[P])}return new kx(s,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let u=0,f=i.weights.length;u<f;u++)l.morphTargetInfluences[u]=i.weights[u]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],l=i.children||[];for(let f=0,h=l.length;f<h;f++)o.push(n.getDependency("node",l[f]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),u]).then(function(f){const h=f[0],p=f[1],g=f[2];g!==null&&h.traverse(function(y){y.isSkinnedMesh&&y.bind(g,H0)});for(let y=0,S=p.length;y<S;y++)h.add(p[y]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",l=[],u=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return u&&l.push(u),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){l.push(f)}),this.nodeCache[e]=Promise.all(l).then(function(f){let h;if(s.isBone===!0?h=new qf:f.length>1?h=new ji:f.length===1?h=f[0]:h=new qt,h!==f[0])for(let p=0,g=f.length;p<g;p++)h.add(f[p]);if(s.name&&(h.userData.name=s.name,h.name=o),Ti(h,s),s.extensions&&pr(n,h,s),s.matrix!==void 0){const p=new _t;p.fromArray(s.matrix),h.applyMatrix4(p)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ji;n.name&&(s.name=i.createUniqueName(n.name)),Ti(s,n),n.extensions&&pr(t,s,n);const o=n.nodes||[],l=[];for(let u=0,f=o.length;u<f;u++)l.push(i.getDependency("node",o[u]));return Promise.all(l).then(function(u){for(let h=0,p=u.length;h<p;h++)s.add(u[h]);const f=h=>{const p=new Map;for(const[g,y]of i.associations)(g instanceof ci||g instanceof on)&&p.set(g,y);return h.traverse(g=>{const y=i.associations.get(g);y!=null&&p.set(g,y)}),p};return i.associations=f(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],l=e.name?e.name:e.uuid,u=[];zi[s.path]===zi.weights?e.traverse(function(g){g.morphTargetInfluences&&u.push(g.name?g.name:g.uuid)}):u.push(l);let f;switch(zi[s.path]){case zi.weights:f=ls;break;case zi.rotation:f=cs;break;case zi.position:case zi.scale:f=us;break;default:switch(n.itemSize){case 1:f=ls;break;case 2:case 3:default:f=us;break}break}const h=i.interpolation!==void 0?N0[i.interpolation]:Ws,p=this._getArrayFromAccessor(n);for(let g=0,y=u.length;g<y;g++){const S=new f(u[g]+"."+zi[s.path],t.array,p,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),o.push(S)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gl(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof cs?I0:id;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function V0(r,e,t){const n=e.attributes,i=new Ri;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],u=l.min,f=l.max;if(u!==void 0&&f!==void 0){if(i.set(new V(u[0],u[1],u[2]),new V(f[0],f[1],f[2])),l.normalized){const h=gl(Qr[l.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new V,u=new V;for(let f=0,h=s.length;f<h;f++){const p=s[f];if(p.POSITION!==void 0){const g=t.json.accessors[p.POSITION],y=g.min,S=g.max;if(y!==void 0&&S!==void 0){if(u.setX(Math.max(Math.abs(y[0]),Math.abs(S[0]))),u.setY(Math.max(Math.abs(y[1]),Math.abs(S[1]))),u.setZ(Math.max(Math.abs(y[2]),Math.abs(S[2]))),g.normalized){const E=gl(Qr[g.componentType]);u.multiplyScalar(E)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;const o=new hi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Yu(r,e,t){const n=e.attributes,i=[];function s(o,l){return t.getDependency("accessor",o).then(function(u){r.setAttribute(l,u)})}for(const o in n){const l=ml[o]||o.toLowerCase();l in r.attributes||i.push(s(n[o],l))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(o)}return It.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${It.workingColorSpace}" not supported.`),Ti(r,e),V0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?O0(r,e.targets,t):r})}const Ku={type:"change"},rl={type:"start"},$u={type:"end"},Na=new qs,Zu=new Vi,G0=Math.cos(70*Rf.DEG2RAD);class W0 extends yr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Ce),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ku),n.update(),s=i.NONE},this.update=function(){const T=new V,se=new fi().setFromUnitVectors(e.up,new V(0,1,0)),$=se.clone().invert(),ae=new V,ve=new fi,Ge=new V,tt=2*Math.PI;return function(At=null){const wt=n.object.position;T.copy(wt).sub(n.target),T.applyQuaternion(se),l.setFromVector3(T),n.autoRotate&&s===i.NONE&&ce(P(At)),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let Yt=n.minAzimuthAngle,jt=n.maxAzimuthAngle;isFinite(Yt)&&isFinite(jt)&&(Yt<-Math.PI?Yt+=tt:Yt>Math.PI&&(Yt-=tt),jt<-Math.PI?jt+=tt:jt>Math.PI&&(jt-=tt),Yt<=jt?l.theta=Math.max(Yt,Math.min(jt,l.theta)):l.theta=l.theta>(Yt+jt)/2?Math.max(Yt,l.theta):Math.min(jt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let dn=!1;if(n.zoomToCursor&&B||n.object.isOrthographicCamera)l.radius=Ae(l.radius);else{const $t=l.radius;l.radius=Ae(l.radius*f),dn=$t!=l.radius}if(T.setFromSpherical(l),T.applyQuaternion($),wt.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&B){let $t=null;if(n.object.isPerspectiveCamera){const _n=T.length();$t=Ae(_n*f);const kn=_n-$t;n.object.position.addScaledVector(N,kn),n.object.updateMatrixWorld(),dn=!!kn}else if(n.object.isOrthographicCamera){const _n=new V(X.x,X.y,0);_n.unproject(n.object);const kn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),dn=kn!==n.object.zoom;const In=new V(X.x,X.y,0);In.unproject(n.object),n.object.position.sub(In).add(_n),n.object.updateMatrixWorld(),$t=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$t!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($t).add(n.object.position):(Na.origin.copy(n.object.position),Na.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Na.direction))<G0?e.lookAt(n.target):(Zu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Na.intersectPlane(Zu,n.target))))}else if(n.object.isOrthographicCamera){const $t=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),$t!==n.object.zoom&&(n.object.updateProjectionMatrix(),dn=!0)}return f=1,B=!1,dn||ae.distanceToSquared(n.object.position)>o||8*(1-ve.dot(n.object.quaternion))>o||Ge.distanceToSquared(n.target)>o?(n.dispatchEvent(Ku),ae.copy(n.object.position),ve.copy(n.object.quaternion),Ge.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",He),n.domElement.removeEventListener("pointerdown",Gt),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",xe),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",w),n.domElement.getRootNode().removeEventListener("keydown",Ue,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ce),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,l=new Gu,u=new Gu;let f=1;const h=new V,p=new Qe,g=new Qe,y=new Qe,S=new Qe,E=new Qe,x=new Qe,v=new Qe,I=new Qe,R=new Qe,N=new V,X=new Qe;let B=!1;const d=[],Y={};let L=!1;function P(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function z(T){const se=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*se)}function ce(T){u.theta-=T}function j(T){u.phi-=T}const pe=function(){const T=new V;return function($,ae){T.setFromMatrixColumn(ae,0),T.multiplyScalar(-$),h.add(T)}}(),me=function(){const T=new V;return function($,ae){n.screenSpacePanning===!0?T.setFromMatrixColumn(ae,1):(T.setFromMatrixColumn(ae,0),T.crossVectors(n.object.up,T)),T.multiplyScalar($),h.add(T)}}(),ue=function(){const T=new V;return function($,ae){const ve=n.domElement;if(n.object.isPerspectiveCamera){const Ge=n.object.position;T.copy(Ge).sub(n.target);let tt=T.length();tt*=Math.tan(n.object.fov/2*Math.PI/180),pe(2*$*tt/ve.clientHeight,n.object.matrix),me(2*ae*tt/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(pe($*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),me(ae*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function oe(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Se(T,se){if(!n.zoomToCursor)return;B=!0;const $=n.domElement.getBoundingClientRect(),ae=T-$.left,ve=se-$.top,Ge=$.width,tt=$.height;X.x=ae/Ge*2-1,X.y=-(ve/tt)*2+1,N.set(X.x,X.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ae(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function Oe(T){p.set(T.clientX,T.clientY)}function vt(T){Se(T.clientX,T.clientX),v.set(T.clientX,T.clientY)}function Et(T){S.set(T.clientX,T.clientY)}function he(T){g.set(T.clientX,T.clientY),y.subVectors(g,p).multiplyScalar(n.rotateSpeed);const se=n.domElement;ce(2*Math.PI*y.x/se.clientHeight),j(2*Math.PI*y.y/se.clientHeight),p.copy(g),n.update()}function be(T){I.set(T.clientX,T.clientY),R.subVectors(I,v),R.y>0?oe(z(R.y)):R.y<0&&Q(z(R.y)),v.copy(I),n.update()}function Fe(T){E.set(T.clientX,T.clientY),x.subVectors(E,S).multiplyScalar(n.panSpeed),ue(x.x,x.y),S.copy(E),n.update()}function Pe(T){Se(T.clientX,T.clientY),T.deltaY<0?Q(z(T.deltaY)):T.deltaY>0&&oe(z(T.deltaY)),n.update()}function ht(T){let se=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ue(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ue(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?ce(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ue(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?ce(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ue(-n.keyPanSpeed,0),se=!0;break}se&&(T.preventDefault(),n.update())}function it(T){if(d.length===1)p.set(T.pageX,T.pageY);else{const se=lt(T),$=.5*(T.pageX+se.x),ae=.5*(T.pageY+se.y);p.set($,ae)}}function et(T){if(d.length===1)S.set(T.pageX,T.pageY);else{const se=lt(T),$=.5*(T.pageX+se.x),ae=.5*(T.pageY+se.y);S.set($,ae)}}function H(T){const se=lt(T),$=T.pageX-se.x,ae=T.pageY-se.y,ve=Math.sqrt($*$+ae*ae);v.set(0,ve)}function ft(T){n.enableZoom&&H(T),n.enablePan&&et(T)}function dt(T){n.enableZoom&&H(T),n.enableRotate&&it(T)}function Nt(T){if(d.length==1)g.set(T.pageX,T.pageY);else{const $=lt(T),ae=.5*(T.pageX+$.x),ve=.5*(T.pageY+$.y);g.set(ae,ve)}y.subVectors(g,p).multiplyScalar(n.rotateSpeed);const se=n.domElement;ce(2*Math.PI*y.x/se.clientHeight),j(2*Math.PI*y.y/se.clientHeight),p.copy(g)}function Xe(T){if(d.length===1)E.set(T.pageX,T.pageY);else{const se=lt(T),$=.5*(T.pageX+se.x),ae=.5*(T.pageY+se.y);E.set($,ae)}x.subVectors(E,S).multiplyScalar(n.panSpeed),ue(x.x,x.y),S.copy(E)}function xt(T){const se=lt(T),$=T.pageX-se.x,ae=T.pageY-se.y,ve=Math.sqrt($*$+ae*ae);I.set(0,ve),R.set(0,Math.pow(I.y/v.y,n.zoomSpeed)),oe(R.y),v.copy(I);const Ge=(T.pageX+se.x)*.5,tt=(T.pageY+se.y)*.5;Se(Ge,tt)}function st(T){n.enableZoom&&xt(T),n.enablePan&&Xe(T)}function qe(T){n.enableZoom&&xt(T),n.enableRotate&&Nt(T)}function Gt(T){n.enabled!==!1&&(d.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",O),n.domElement.addEventListener("pointerup",w)),!we(T)&&(ot(T),T.pointerType==="touch"?at(T):te(T)))}function O(T){n.enabled!==!1&&(T.pointerType==="touch"?Me(T):_e(T))}function w(T){switch(Ve(T),d.length){case 0:n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",w),n.dispatchEvent($u),s=i.NONE;break;case 1:const se=d[0],$=Y[se];at({pointerId:se,pageX:$.x,pageY:$.y});break}}function te(T){let se;switch(T.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Ar.DOLLY:if(n.enableZoom===!1)return;vt(T),s=i.DOLLY;break;case Ar.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;Et(T),s=i.PAN}else{if(n.enableRotate===!1)return;Oe(T),s=i.ROTATE}break;case Ar.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Oe(T),s=i.ROTATE}else{if(n.enablePan===!1)return;Et(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(rl)}function _e(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;he(T);break;case i.DOLLY:if(n.enableZoom===!1)return;be(T);break;case i.PAN:if(n.enablePan===!1)return;Fe(T);break}}function xe(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(rl),Pe(Z(T)),n.dispatchEvent($u))}function Z(T){const se=T.deltaMode,$={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(se){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return T.ctrlKey&&!L&&($.deltaY*=10),$}function Ue(T){T.key==="Control"&&(L=!0,n.domElement.getRootNode().addEventListener("keyup",Re,{passive:!0,capture:!0}))}function Re(T){T.key==="Control"&&(L=!1,n.domElement.getRootNode().removeEventListener("keyup",Re,{passive:!0,capture:!0}))}function Ce(T){n.enabled===!1||n.enablePan===!1||ht(T)}function at(T){switch($e(T),d.length){case 1:switch(n.touches.ONE){case wr.ROTATE:if(n.enableRotate===!1)return;it(T),s=i.TOUCH_ROTATE;break;case wr.PAN:if(n.enablePan===!1)return;et(T),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case wr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ft(T),s=i.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(T),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(rl)}function Me(T){switch($e(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Nt(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Xe(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;st(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;qe(T),n.update();break;default:s=i.NONE}}function He(T){n.enabled!==!1&&T.preventDefault()}function ot(T){d.push(T.pointerId)}function Ve(T){delete Y[T.pointerId];for(let se=0;se<d.length;se++)if(d[se]==T.pointerId){d.splice(se,1);return}}function we(T){for(let se=0;se<d.length;se++)if(d[se]==T.pointerId)return!0;return!1}function $e(T){let se=Y[T.pointerId];se===void 0&&(se=new Qe,Y[T.pointerId]=se),se.set(T.pageX,T.pageY)}function lt(T){const se=T.pointerId===d[0]?d[1]:d[0];return Y[se]}n.domElement.addEventListener("contextmenu",He),n.domElement.addEventListener("pointerdown",Gt),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",xe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ue,{passive:!0,capture:!0}),this.update()}}function X0(r){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function Kr(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,l=Math.round(r.h),u=r.s.toFixed(1),f=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=r.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+l+",s:"+u+",v:"+f+"}";if(t==="HSVA_OBJ")return"{h:"+l+",s:"+u+",v:"+f+",a:"+o+"}"}return"unknown format"}var Ju=Array.prototype.forEach,Ds=Array.prototype.slice,ge={BREAK:{},extend:function(e){return this.each(Ds.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(Ds.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=Ds.call(arguments);return function(){for(var t=Ds.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Ju&&e.forEach&&e.forEach===Ju)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function l(){i=null,n||e.apply(s,o)}var u=n||!i;clearTimeout(i),i=setTimeout(l,t),u&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Ds.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},j0=[{litmus:ge.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Kr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Kr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Kr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Kr}}},{litmus:ge.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:ge.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:ge.isObject,conversions:{RGBA_OBJ:{read:function(e){return ge.isNumber(e.r)&&ge.isNumber(e.g)&&ge.isNumber(e.b)&&ge.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return ge.isNumber(e.r)&&ge.isNumber(e.g)&&ge.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return ge.isNumber(e.h)&&ge.isNumber(e.s)&&ge.isNumber(e.v)&&ge.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return ge.isNumber(e.h)&&ge.isNumber(e.s)&&ge.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Is=void 0,Ua=void 0,_l=function(){Ua=!1;var e=arguments.length>1?ge.toArray(arguments):arguments[0];return ge.each(j0,function(t){if(t.litmus(e))return ge.each(t.conversions,function(n,i){if(Is=n.read(e),Ua===!1&&Is!==!1)return Ua=Is,Is.conversionName=i,Is.conversion=n,ge.BREAK}),ge.BREAK}),Ua},Qu=void 0,Ya={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),l=n*(1-s*t),u=n*(1-(1-s)*t),f=[[n,u,o],[l,n,o],[o,n,u],[o,l,n],[u,o,n],[n,o,l]][i];return{r:f[0]*255,g:f[1]*255,b:f[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,l=void 0,u=void 0;if(s!==0)u=o/s;else return{h:NaN,s:0,v:0};return e===s?l=(t-n)/o:t===s?l=2+(n-e)/o:l=4+(e-t)/o,l/=6,l<0&&(l+=1),{h:l*360,s:u,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Qu=t*8)|e&~(255<<Qu)}},q0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},$n=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Zn=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),Ji=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},er=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},tr=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},ln=function(){function r(){if($n(this,r),this.__state=_l.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Zn(r,[{key:"toString",value:function(){return Kr(this)}},{key:"toHexString",value:function(){return Kr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Bl(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(ln.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(ln.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function kl(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(ln.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(ln.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}ln.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Ya.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")ge.extend(r.__state,Ya.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};ln.recalculateHSV=function(r){var e=Ya.rgb_to_hsv(r.r,r.g,r.b);ge.extend(r.__state,{s:e.s,v:e.v}),ge.isNaN(e.h)?ge.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};ln.COMPONENTS=["r","g","b","h","s","v","hex","a"];Bl(ln.prototype,"r",2);Bl(ln.prototype,"g",1);Bl(ln.prototype,"b",0);kl(ln.prototype,"h");kl(ln.prototype,"s");kl(ln.prototype,"v");Object.defineProperty(ln.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(ln.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Ya.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Sr=function(){function r(e,t){$n(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Zn(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),Y0={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},rd={};ge.each(Y0,function(r,e){ge.each(r,function(t){rd[t]=e})});var K0=/(\d+(\.\d+)?)px/;function ri(r){if(r==="0"||ge.isUndefined(r))return 0;var e=r.match(K0);return ge.isNull(e)?0:parseFloat(e[1])}var ie={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;ge.isUndefined(s)&&(s=!0),ge.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=rd[t];if(!o)throw new Error("Event type "+t+" not supported.");var l=document.createEvent(o);switch(o){case"MouseEvents":{var u=s.x||s.clientX||0,f=s.y||s.clientY||0;l.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,u,f,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=l.initKeyboardEvent||l.initKeyEvent;ge.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{l.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}ge.defaults(l,i),e.dispatchEvent(l)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),ie},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),ie},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return ie},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return ie},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return ri(t["border-left-width"])+ri(t["border-right-width"])+ri(t["padding-left"])+ri(t["padding-right"])+ri(t.width)},getHeight:function(e){var t=getComputedStyle(e);return ri(t["border-top-width"])+ri(t["border-bottom-width"])+ri(t["padding-top"])+ri(t["padding-bottom"])+ri(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},sd=function(r){er(e,r);function e(t,n){$n(this,e);var i=tr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return ie.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Zn(e,[{key:"setValue",value:function(n){var i=Ji(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ji(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Sr),$0=function(r){er(e,r);function e(t,n,i){$n(this,e);var s=tr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,l=s;if(s.__select=document.createElement("select"),ge.isArray(o)){var u={};ge.each(o,function(f){u[f]=f}),o=u}return ge.each(o,function(f,h){var p=document.createElement("option");p.innerHTML=h,p.setAttribute("value",f),l.__select.appendChild(p)}),s.updateDisplay(),ie.bind(s.__select,"change",function(){var f=this.options[this.selectedIndex].value;l.setValue(f)}),s.domElement.appendChild(s.__select),s}return Zn(e,[{key:"setValue",value:function(n){var i=Ji(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return ie.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ji(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Sr),Z0=function(r){er(e,r);function e(t,n){$n(this,e);var i=tr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function l(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),ie.bind(i.__input,"keyup",o),ie.bind(i.__input,"change",o),ie.bind(i.__input,"blur",l),ie.bind(i.__input,"keydown",function(u){u.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Zn(e,[{key:"updateDisplay",value:function(){return ie.isActive(this.__input)||(this.__input.value=this.getValue()),Ji(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Sr);function ef(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var ad=function(r){er(e,r);function e(t,n,i){$n(this,e);var s=tr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,ge.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=ef(s.__impliedStep),s}return Zn(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Ji(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=ef(n),this}}]),e}(Sr);function J0(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Ka=function(r){er(e,r);function e(t,n,i){$n(this,e);var s=tr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,l=void 0;function u(){var S=parseFloat(o.__input.value);ge.isNaN(S)||o.setValue(S)}function f(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function h(){f()}function p(S){var E=l-S.clientY;o.setValue(o.getValue()+E*o.__impliedStep),l=S.clientY}function g(){ie.unbind(window,"mousemove",p),ie.unbind(window,"mouseup",g),f()}function y(S){ie.bind(window,"mousemove",p),ie.bind(window,"mouseup",g),l=S.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),ie.bind(s.__input,"change",u),ie.bind(s.__input,"blur",h),ie.bind(s.__input,"mousedown",y),ie.bind(s.__input,"keydown",function(S){S.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,f())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Zn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():J0(this.getValue(),this.__precision),Ji(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ad);function tf(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var vl=function(r){er(e,r);function e(t,n,i,s,o){$n(this,e);var l=tr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),u=l;l.__background=document.createElement("div"),l.__foreground=document.createElement("div"),ie.bind(l.__background,"mousedown",f),ie.bind(l.__background,"touchstart",g),ie.addClass(l.__background,"slider"),ie.addClass(l.__foreground,"slider-fg");function f(E){document.activeElement.blur(),ie.bind(window,"mousemove",h),ie.bind(window,"mouseup",p),h(E)}function h(E){E.preventDefault();var x=u.__background.getBoundingClientRect();return u.setValue(tf(E.clientX,x.left,x.right,u.__min,u.__max)),!1}function p(){ie.unbind(window,"mousemove",h),ie.unbind(window,"mouseup",p),u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}function g(E){E.touches.length===1&&(ie.bind(window,"touchmove",y),ie.bind(window,"touchend",S),y(E))}function y(E){var x=E.touches[0].clientX,v=u.__background.getBoundingClientRect();u.setValue(tf(x,v.left,v.right,u.__min,u.__max))}function S(){ie.unbind(window,"touchmove",y),ie.unbind(window,"touchend",S),u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}return l.updateDisplay(),l.__background.appendChild(l.__foreground),l.domElement.appendChild(l.__background),l}return Zn(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Ji(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ad),od=function(r){er(e,r);function e(t,n,i){$n(this,e);var s=tr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,ie.bind(s.__button,"click",function(l){return l.preventDefault(),o.fire(),!1}),ie.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Zn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Sr),xl=function(r){er(e,r);function e(t,n){$n(this,e);var i=tr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new ln(i.getValue()),i.__temp=new ln(0);var s=i;i.domElement=document.createElement("div"),ie.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",ie.bind(i.__input,"keydown",function(E){E.keyCode===13&&p.call(this)}),ie.bind(i.__input,"blur",p),ie.bind(i.__selector,"mousedown",function(){ie.addClass(this,"drag").bind(window,"mouseup",function(){ie.removeClass(s.__selector,"drag")})}),ie.bind(i.__selector,"touchstart",function(){ie.addClass(this,"drag").bind(window,"touchend",function(){ie.removeClass(s.__selector,"drag")})});var o=document.createElement("div");ge.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),ge.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),ge.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),ge.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),ge.extend(o.style,{width:"100%",height:"100%",background:"none"}),nf(o,"top","rgba(0,0,0,0)","#000"),ge.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ey(i.__hue_field),ge.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),ie.bind(i.__saturation_field,"mousedown",l),ie.bind(i.__saturation_field,"touchstart",l),ie.bind(i.__field_knob,"mousedown",l),ie.bind(i.__field_knob,"touchstart",l),ie.bind(i.__hue_field,"mousedown",u),ie.bind(i.__hue_field,"touchstart",u);function l(E){y(E),ie.bind(window,"mousemove",y),ie.bind(window,"touchmove",y),ie.bind(window,"mouseup",f),ie.bind(window,"touchend",f)}function u(E){S(E),ie.bind(window,"mousemove",S),ie.bind(window,"touchmove",S),ie.bind(window,"mouseup",h),ie.bind(window,"touchend",h)}function f(){ie.unbind(window,"mousemove",y),ie.unbind(window,"touchmove",y),ie.unbind(window,"mouseup",f),ie.unbind(window,"touchend",f),g()}function h(){ie.unbind(window,"mousemove",S),ie.unbind(window,"touchmove",S),ie.unbind(window,"mouseup",h),ie.unbind(window,"touchend",h),g()}function p(){var E=_l(this.value);E!==!1?(s.__color.__state=E,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function g(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function y(E){E.type.indexOf("touch")===-1&&E.preventDefault();var x=s.__saturation_field.getBoundingClientRect(),v=E.touches&&E.touches[0]||E,I=v.clientX,R=v.clientY,N=(I-x.left)/(x.right-x.left),X=1-(R-x.top)/(x.bottom-x.top);return X>1?X=1:X<0&&(X=0),N>1?N=1:N<0&&(N=0),s.__color.v=X,s.__color.s=N,s.setValue(s.__color.toOriginal()),!1}function S(E){E.type.indexOf("touch")===-1&&E.preventDefault();var x=s.__hue_field.getBoundingClientRect(),v=E.touches&&E.touches[0]||E,I=v.clientY,R=1-(I-x.top)/(x.bottom-x.top);return R>1?R=1:R<0&&(R=0),s.__color.h=R*360,s.setValue(s.__color.toOriginal()),!1}return i}return Zn(e,[{key:"updateDisplay",value:function(){var n=_l(this.getValue());if(n!==!1){var i=!1;ge.each(ln.COMPONENTS,function(l){if(!ge.isUndefined(n[l])&&!ge.isUndefined(this.__color.__state[l])&&n[l]!==this.__color.__state[l])return i=!0,{}},this),i&&ge.extend(this.__color.__state,n)}ge.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;ge.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,nf(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),ge.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Sr),Q0=["-moz-","-o-","-webkit-","-ms-",""];function nf(r,e,t,n){r.style.background="",ge.each(Q0,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function ey(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var ty={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},ny=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,iy=function(e,t){var n=e[t];return ge.isArray(arguments[2])||ge.isObject(arguments[2])?new $0(e,t,arguments[2]):ge.isNumber(n)?ge.isNumber(arguments[2])&&ge.isNumber(arguments[3])?ge.isNumber(arguments[4])?new vl(e,t,arguments[2],arguments[3],arguments[4]):new vl(e,t,arguments[2],arguments[3]):ge.isNumber(arguments[4])?new Ka(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ka(e,t,{min:arguments[2],max:arguments[3]}):ge.isString(n)?new Z0(e,t):ge.isFunction(n)?new od(e,t,""):ge.isBoolean(n)?new sd(e,t):null};function ry(r){setTimeout(r,1e3/60)}var sy=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||ry,ay=function(){function r(){$n(this,r),this.backgroundElement=document.createElement("div"),ge.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),ie.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),ge.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;ie.bind(this.backgroundElement,"click",function(){e.hide()})}return Zn(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),ge.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",ie.unbind(t.domElement,"webkitTransitionEnd",i),ie.unbind(t.domElement,"transitionend",i),ie.unbind(t.domElement,"oTransitionEnd",i)};ie.bind(this.domElement,"webkitTransitionEnd",n),ie.bind(this.domElement,"transitionend",n),ie.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-ie.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-ie.getHeight(this.domElement)/2+"px"}}]),r}(),oy=X0(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);ty.inject(oy);var rf="dg",sf=72,af=20,js="Default",Os=function(){try{return!!window.localStorage}catch{return!1}}(),zs=void 0,of=!0,jr=void 0,sl=!1,ld=[],Vt=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),ie.addClass(this.domElement,rf),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=ge.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=ge.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),ge.isUndefined(n.load)?n.load={preset:js}:n.preset&&(n.load.preset=n.preset),ge.isUndefined(n.parent)&&n.hideable&&ld.push(this),n.resizable=ge.isUndefined(n.parent)&&n.resizable,n.autoPlace&&ge.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Os&&localStorage.getItem(qr(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(g){t.parent?t.getRoot().preset=g:n.load.preset=g,fy(this),t.revert()}},width:{get:function(){return n.width},set:function(g){n.width=g,bl(t,g)}},name:{get:function(){return n.name},set:function(g){n.name=g,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(g){n.closed=g,n.closed?ie.addClass(t.__ul,r.CLASS_CLOSED):ie.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=g?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(g){Os&&(i=g,g?ie.bind(window,"unload",s):ie.unbind(window,"unload",s),localStorage.setItem(qr(t,"isLocal"),g))}}}),ge.isUndefined(n.parent)){if(this.closed=n.closed||!1,ie.addClass(this.domElement,r.CLASS_MAIN),ie.makeSelectable(this.domElement,!1),Os&&i){t.useLocalStorage=!0;var l=localStorage.getItem(qr(this,"gui"));l&&(n.load=JSON.parse(l))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,ie.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(ie.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(ie.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),ie.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var u=document.createTextNode(n.name);ie.addClass(u,"controller-name"),o=Hl(t,u);var f=function(g){return g.preventDefault(),t.closed=!t.closed,!1};ie.addClass(this.__ul,r.CLASS_CLOSED),ie.addClass(o,"title"),ie.bind(o,"click",f),n.closed||(this.closed=!1)}n.autoPlace&&(ge.isUndefined(n.parent)&&(of&&(jr=document.createElement("div"),ie.addClass(jr,rf),ie.addClass(jr,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(jr),of=!1),jr.appendChild(this.domElement),ie.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||bl(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},ie.bind(window,"resize",this.__resizeHandler),ie.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),ie.bind(this.__ul,"transitionend",this.__resizeHandler),ie.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&uy(this),s=function(){Os&&localStorage.getItem(qr(t,"isLocal"))==="true"&&localStorage.setItem(qr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function h(){var p=t.getRoot();p.width+=1,ge.defer(function(){p.width-=1})}n.parent||h()};Vt.toggleHide=function(){sl=!sl,ge.each(ld,function(r){r.domElement.style.display=sl?"none":""})};Vt.CLASS_AUTO_PLACE="a";Vt.CLASS_AUTO_PLACE_CONTAINER="ac";Vt.CLASS_MAIN="main";Vt.CLASS_CONTROLLER_ROW="cr";Vt.CLASS_TOO_TALL="taller-than-window";Vt.CLASS_CLOSED="closed";Vt.CLASS_CLOSE_BUTTON="close-button";Vt.CLASS_CLOSE_TOP="close-top";Vt.CLASS_CLOSE_BOTTOM="close-bottom";Vt.CLASS_DRAG="drag";Vt.DEFAULT_WIDTH=245;Vt.TEXT_CLOSED="Close Controls";Vt.TEXT_OPEN="Open Controls";Vt._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===sf||r.keyCode===sf)&&Vt.toggleHide()};ie.bind(window,"keydown",Vt._keydownHandler,!1);ge.extend(Vt.prototype,{add:function(e,t){return Vs(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Vs(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;ge.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&jr.removeChild(this.domElement);var e=this;ge.each(this.__folders,function(t){e.removeFolder(t)}),ie.unbind(window,"keydown",Vt._keydownHandler,!1),lf(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Vt(t);this.__folders[e]=n;var i=Hl(this,n.domElement);return ie.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],lf(e);var t=this;ge.each(e.__folders,function(n){e.removeFolder(n)}),ge.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=ie.getOffset(e.__ul).top,n=0;ge.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=ie.getHeight(i))}),window.innerHeight-t-af<n?(ie.addClass(e.domElement,Vt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-af+"px"):(ie.removeClass(e.domElement,Vt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&ge.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:ge.debounce(function(){this.onResize()},50),remember:function(){if(ge.isUndefined(zs)&&(zs=new ay,zs.domElement.innerHTML=ny),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;ge.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&cy(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&bl(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Oa(this)),e.folders={},ge.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Oa(this),yl(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[js]=Oa(this,!0)),this.load.remembered[e]=Oa(this),this.preset=e,Sl(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){ge.each(this.__controllers,function(t){this.getRoot().load.remembered?cd(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),ge.each(this.__folders,function(t){t.revert(t)}),e||yl(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&ud(this.__listening)},updateDisplay:function(){ge.each(this.__controllers,function(e){e.updateDisplay()}),ge.each(this.__folders,function(e){e.updateDisplay()})}});function Hl(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function lf(r){ie.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&ie.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function yl(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function ly(r,e,t){if(t.__li=e,t.__gui=r,ge.extend(t,{options:function(o){if(arguments.length>1){var l=t.__li.nextElementSibling;return t.remove(),Vs(r,t.object,t.property,{before:l,factoryArgs:[ge.toArray(arguments)]})}if(ge.isArray(o)||ge.isObject(o)){var u=t.__li.nextElementSibling;return t.remove(),Vs(r,t.object,t.property,{before:u,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof vl){var n=new Ka(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});ge.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],l=n[s];t[s]=n[s]=function(){var u=Array.prototype.slice.call(arguments);return l.apply(n,u),o.apply(t,u)}}),ie.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Ka){var i=function(o){if(ge.isNumber(t.__min)&&ge.isNumber(t.__max)){var l=t.__li.firstElementChild.firstElementChild.innerHTML,u=t.__gui.__listening.indexOf(t)>-1;t.remove();var f=Vs(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return f.name(l),u&&f.listen(),f}return o};t.min=ge.compose(i,t.min),t.max=ge.compose(i,t.max)}else t instanceof sd?(ie.bind(e,"click",function(){ie.fakeEvent(t.__checkbox,"click")}),ie.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof od?(ie.bind(e,"click",function(){ie.fakeEvent(t.__button,"click")}),ie.bind(e,"mouseover",function(){ie.addClass(t.__button,"hover")}),ie.bind(e,"mouseout",function(){ie.removeClass(t.__button,"hover")})):t instanceof xl&&(ie.addClass(e,"color"),t.updateDisplay=ge.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=ge.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&yl(r.getRoot(),!0),s},t.setValue)}function cd(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[js])o=s[js];else return;if(o[n]&&o[n][e.property]!==void 0){var l=o[n][e.property];e.initialValue=l,e.setValue(l)}}}}function Vs(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new xl(e,t);else{var s=[e,t].concat(n.factoryArgs);i=iy.apply(r,s)}n.before instanceof Sr&&(n.before=n.before.__li),cd(r,i),ie.addClass(i.domElement,"c");var o=document.createElement("span");ie.addClass(o,"property-name"),o.innerHTML=i.property;var l=document.createElement("div");l.appendChild(o),l.appendChild(i.domElement);var u=Hl(r,l,n.before);return ie.addClass(u,Vt.CLASS_CONTROLLER_ROW),i instanceof xl?ie.addClass(u,"color"):ie.addClass(u,q0(i.getValue())),ly(r,u,i),r.__controllers.push(i),i}function qr(r,e){return document.location.href+"."+e}function Sl(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function cf(r,e){e.style.display=r.useLocalStorage?"block":"none"}function cy(r){var e=r.__save_row=document.createElement("li");ie.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),ie.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",ie.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",ie.addClass(n,"button"),ie.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",ie.addClass(i,"button"),ie.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",ie.addClass(s,"button"),ie.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?ge.each(r.load.remembered,function(p,g){Sl(r,g,g===r.preset)}):Sl(r,js,!1),ie.bind(o,"change",function(){for(var p=0;p<r.__preset_select.length;p++)r.__preset_select[p].innerHTML=r.__preset_select[p].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Os){var l=document.getElementById("dg-local-explain"),u=document.getElementById("dg-local-storage"),f=document.getElementById("dg-save-locally");f.style.display="block",localStorage.getItem(qr(r,"isLocal"))==="true"&&u.setAttribute("checked","checked"),cf(r,l),ie.bind(u,"change",function(){r.useLocalStorage=!r.useLocalStorage,cf(r,l)})}var h=document.getElementById("dg-new-constructor");ie.bind(h,"keydown",function(p){p.metaKey&&(p.which===67||p.keyCode===67)&&zs.hide()}),ie.bind(t,"click",function(){h.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),zs.show(),h.focus(),h.select()}),ie.bind(n,"click",function(){r.save()}),ie.bind(i,"click",function(){var p=prompt("Enter a new preset name.");p&&r.saveAs(p)}),ie.bind(s,"click",function(){r.revert()})}function uy(r){var e=void 0;r.__resize_handle=document.createElement("div"),ge.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){ie.removeClass(r.__closeButton,Vt.CLASS_DRAG),ie.unbind(window,"mousemove",t),ie.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,ie.addClass(r.__closeButton,Vt.CLASS_DRAG),ie.bind(window,"mousemove",t),ie.bind(window,"mouseup",n),!1}ie.bind(r.__resize_handle,"mousedown",i),ie.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function bl(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function Oa(r,e){var t={};return ge.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];ge.each(o,function(l,u){s[u]=e?l.initialValue:l.getValue()}),t[i]=s}),t}function fy(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function ud(r){r.length!==0&&sy.call(window,function(){ud(r)}),ge.each(r,function(e){e.updateDisplay()})}var dy=Vt;const uf=[{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Tree.glb",image:""},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"},{path:"Models_3D\\Pistol.glb",image:"public\\Models_3D\\Pistol.png"}],hy="/Models_3D/placeholder.png";ct(document).ready(function(){for(let r=0;r<uf.length;r++){const e=uf[r];let t=e.path;e.image;let n=ct("<button>").attr({type:"button",id:"button-"+r,class:"btn w-25 h-25"}).on("click",function(){My(t)}),i=ct("<img>").attr({src:hy,class:"rounded h-100"});n.append(i),ct("#models-list").append(n),r==0&&n.trigger("click")}});const br=new Mx;var $a=document.getElementById("render-canvas");const nr=new bx({canvas:document.getElementById("render-canvas"),antialias:!0});nr.outputColorSpace=gn;nr.setSize($a.clientWidth,$a.clientHeight);nr.setClearColor(0);nr.setPixelRatio(window.devicePixelRatio);nr.shadowMap.enabled=!0;nr.shadowMap.type=mf;const xr=new Mn(45,$a.clientWidth/$a.clientHeight,.1,1e3);xr.position.set(4,5,7);xr.lookAt(0,0,0);const tn=new W0(xr,nr.domElement);tn.enableDamping=!0;tn.enablePan=!0;tn.minDistance=0;tn.maxDistance=200;tn.minPolarAngle=.5;tn.maxPolarAngle=3.5;tn.autoRotate=!1;tn.target=new V(0,1,0);tn.update();function py(){xr.position.set(4,5,7),xr.lookAt(0,0,0),tn.enableDamping=!0,tn.enablePan=!0,tn.minDistance=0,tn.maxDistance=200,tn.minPolarAngle=.5,tn.maxPolarAngle=3.5,tn.autoRotate=!1,tn.target=new V(0,1,0),tn.update()}br.background=new ut(14540253);const my=new Zx(4210752,1.5);br.add(my);const fd=new td(16777215,1);fd.position.set(5,10,7.5).normalize();br.add(fd);const dd=new ed(16777215,1,100);dd.position.set(2,3,4);br.add(dd);const hd=new Ks(20,20,32,32);hd.rotateX(-Math.PI/2);const gy=new Xi({color:5592405,side:Xn});new Cn(hd,gy);const ms=new dy({autoPlace:!1});let _y=document.getElementById("gui-container");_y.appendChild(ms.domElement);let Qi={label:"TEST",wireframe:!1,verticeCount:0,triangleCount:0,reset:py};ms.add(Qi,"wireframe").name("Toggle Wireframe").onChange(yy);ms.add(Qi,"verticeCount").name("Vertice Count").listen();ms.add(Qi,"triangleCount").name("Triangle Count").listen();ms.add(Qi,"reset").name("Reset Camera");function pd(){Qi.verticeCount=md,Qi.triangleCount=gd,ms.updateDisplay()}function vy(r){let e=0;return r.traverse(t=>{t.isMesh&&(e+=t.geometry.attributes.position.count)}),e}function xy(r){let e=0;return r.traverse(t=>{t.isMesh&&(t.geometry.index!=null?e+=t.geometry.index.count/3:e+=t.geometry.attributes.position.count/3)}),e}function yy(r){si&&(si.visible=r,Fs.visible=!r)}function Sy(r){si=new ji,r.traverse(e=>{if(e.isMesh){const t=new Dx(e.geometry),n=new Dl({color:14721280}),i=new Kf(t,n);i.position.copy(e.position),i.rotation.copy(e.rotation),i.scale.copy(e.scale),si.add(i)}}),si.position.copy(r.position),si.rotation.copy(r.rotation),si.scale.copy(r.scale),si.visible=Qi.wireframe,br.add(si)}const by=new l0;let Fs,si,md,gd;function My(r){ff(Fs),ff(si),by.load(r,function(e){let t=e.scene;t.position.set(0,1,0),Fs=t,br.add(t),md=vy(t),gd=xy(t),t.traverse(n=>{n.isMesh&&(n.material.transparent=!0)}),Sy(t),xr.lookAt(Fs.position),Fs.visible=!Qi.wireframe,pd()})}function ff(r){r!=null&&(r.removeFromParent(),r.traverse(e=>{var t;if(e.material&&!e.material._isDisposed){for(const[n,i]of Object.entries(e.material))i&&typeof i.dispose=="function"&&!i._isDisposed&&(i.dispose(),i._isDisposed=!0,e[n]=null);e.material.dispose(),e.material._isDisposed=!0,e.material=null}(t=e.geometry)!=null&&t.dispose&&!e.geometry._isDisposed&&(e.geometry.dispose(),e.geometry._isDisposed=!0,e.geometry=null)}))}function _d(){requestAnimationFrame(_d),nr.render(br,xr),tn.update(),pd()}_d();const df=[{titre:"What The Grail",contenu:"projects\\What_The_Grail.html"},{titre:"Visite du Lien",contenu:"projects\\Visite_du_Lien.html"},{titre:"Tracteur En Selle",contenu:"projects\\Tracteur_En_Selle.html"},{titre:"Mix Hortus",contenu:"projects\\Mix_Hortus.html"},{titre:"It's Raining Golem",contenu:"projects\\It's_Raining_Golem.html"},{titre:"How To Be Dev",contenu:"projects\\How_To_Be_Dev.html"},{titre:"Dead Man's Hand",contenu:"projects\\Dead_Man's_Hand.html"}];ct(document).ready(function(){for(let t=0;t<df.length;t++){const n=df[t],i=n.contenu;console.log(i);const s=ct("<i>").addClass('<i class="bi bi-arrow-return-right me-2"></i>');var r=ct("<button>").text(n.titre).attr({type:"button",id:"button-"+t,class:"btn btn-outline-warning"}).on("click",function(){ct("#project-text").load(i),ct("#project-list button").removeClass("active"),ct(this).addClass("active")}),e=ct("<li>").addClass("m-3").append(s).append(r);ct("#project-list").append(e),t==0&&r.trigger("click")}});ct(document).ready(function(){let r=-1;console.log("test");function e(){switch(console.log("menuId = "+r),r){case 0:t("#mention-legale-text",0,"none");break;case 1:t("#render-menu",0,"none");break;case 2:s("#profil","-70%"),i("60%",0),t("#profil-content",0,"all"),ct("#profil-content").css("padding-left","40%");break;case 3:s("#profil","-70%"),i("60%",0),t("#diplomes-content",0,"all"),ct("#diplomes-content").css("padding-left","40%");break;case 4:t("#render-game",0,"none"),ct("#webgl-render").attr({src:""});break;case 5:s("#projects","-70%"),t("#project-text",0,"none");break}r=-1,n(1,"0%",!1,"relative","visible")}function t(o,l,u){ct(o).css("opacity",l),l>0?setTimeout(function(){ct(o).css("z-index",1)},1e3):setTimeout(function(){ct(o).css("z-index","auto")},1e3),ct(o).css("user-select",u)}function n(o,l,u,f,h){ct(".menu-parent").css({opacity:o,"padding-top":l,position:f,visibility:h}),o>0?ct(".menu-parent").css("z-index",1):setTimeout(function(){ct(".menu-parent").css("z-index","auto")},1e3),ct(".menu-button").prop("disabled",u)}function i(o,l){ct("#menu_container").css("width",o),s("#menu_container",l)}function s(o,l){ct(o).css("left",l)}ct("#mention-button").on("click",function(){e(),n(0,"10%",!0,"absolute","hidden"),t("#mention-legale-text",1,"auto"),r=0}),ct("#previous-button").on("click",function(){e()}),ct("#modelisation-button").on("click",function(){e(),n(0,"10%",!0,"absolute","hidden"),t("#render-menu",1,"auto"),r=1}),ct("#profil-button").on("click",function(){e(),t("#profil-content",1,"auto"),s("#profil","-20%"),i("50%","20%"),ct("#profil-content").css("padding-left","45%"),r=2}),ct("#diplomes-button").on("click",function(){e(),t("#diplomes-content",1,"auto"),s("#profil","-20%"),i("50%","20%"),ct("#diplomes-content").css("padding-left","45%"),r=3}),ct("#games-button").on("click",function(){e(),n(0,"10%",!0,"absolute","hidden"),t("#render-game",1,"auto"),ct("#webgl-render").attr({src:"Games/golem/index.html"}),r=4}),ct("#projects-button").on("click",function(){e(),n(0,"10%",!0,"absolute","hidden"),t("#project-text",1,"auto"),s("#projects","0"),r=5}),ct(".menu-button").on("mouseenter",function(){let o=ct(this).find(".menu-content");o.css("opacity",1),o.css("padding-bottom","20%")}),ct(".menu-button").on("mouseleave",function(){let o=ct(this).find(".menu-content");o.css("opacity",0),o.css("padding-bottom","0")})});
