webpackJsonp([222,366],{685:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(7),a(6)),o=t(p),e=(a(71),a(70)),c=t(e),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u8fdb\u884c\u5168\u5c40 loading\uff0c\u5f02\u6b65\u81ea\u884c\u79fb\u9664\u3002"]],meta:{order:3,title:"\u52a0\u8f7d\u4e2d",filename:"components/message/demo/loading.md",id:"components-message-demo-loading"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> message<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> success <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> hide <span class="token operator" >=</span> message<span class="token punctuation" >.</span><span class="token function" >loading</span><span class="token punctuation" >(</span><span class="token string" >\'\u6b63\u5728\u6267\u884c\u4e2d...\'</span><span class="token punctuation" >,</span> <span class="token number" >0</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token comment" spellcheck="true">// \u5f02\u6b65\u624b\u52a8\u79fb\u9664</span>\n  <span class="token function" >setTimeout</span><span class="token punctuation" >(</span>hide<span class="token punctuation" >,</span> <span class="token number" >2500</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>success<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u663e\u793a\u52a0\u8f7d\u4e2d<span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){var n=c["default"].loading("\u6b63\u5728\u6267\u884c\u4e2d...",0);setTimeout(n,2500)};return l["default"].createElement(o["default"],{onClick:n},"\u663e\u793a\u52a0\u8f7d\u4e2d...")}}}});