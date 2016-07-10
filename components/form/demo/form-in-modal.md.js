webpackJsonp([266,366],{639:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(51),a(50)),o=t(p),e=(a(18),a(25)),c=t(e),u=(a(7),a(6)),l=t(u),i=(a(49),a(48)),k=t(i),r=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},d=a(1),m=t(d),f=a(2);t(f);n.exports={content:[["p","\u5728 Modal \u4e2d\u4f7f\u7528 Form\uff0c\u5f53\u70b9\u51fb Modal \u7684\u786e\u5b9a\u65f6\uff0c\u8c03\u7528 ",["code","this.props.form.getFieldsValue"]," \u83b7\u53d6\u8868\u5355\u5185\u7684\u503c\u3002"]],meta:{order:14,title:"\u4e0e Modal \u914d\u5408\u4f7f\u7528",filename:"components/form/demo/form-in-modal.md",id:"components-form-demo-form-in-modal"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> Form<span class="token punctuation" >,</span> Input<span class="token punctuation" >,</span> Modal <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> createForm <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>create<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> FormItem <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>Item<span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >handleSubmit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token function" >getFieldsValue</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >hideModal</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >showModal</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >hideModal</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> getFieldProps <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >;</span>\n\n    <span class="token keyword" >const</span> formItemLayout <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      labelCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >4</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      wrapperCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >20</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showModal<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u70b9\u51fb\u6709\u60ca\u559c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Modal</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u767b\u5f55<span class="token punctuation" >"</span></span> <span class="token attr-name" >visible</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>visible<span class="token punctuation" >}</span></span> <span class="token attr-name" >onOk</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleSubmit<span class="token punctuation" >}</span></span> <span class="token attr-name" >onCancel</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>hideModal<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form</span> <span class="token attr-name" >horizontal</span> <span class="token attr-name" >form</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token operator" >&lt;</span>FormItem\n              <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n              label<span class="token operator" >=</span><span class="token string" >"\u7528\u6237\u540d"</span>\n            <span class="token operator" >></span>\n              <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'username\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span> type<span class="token operator" >=</span><span class="token string" >"text"</span> autoComplete<span class="token operator" >=</span><span class="token string" >"off"</span> <span class="token operator" >/</span><span class="token operator" >></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n            <span class="token operator" >&lt;</span>FormItem\n              <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n              label<span class="token operator" >=</span><span class="token string" >"\u5bc6\u7801"</span>\n            <span class="token operator" >></span>\n              <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'password\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span> type<span class="token operator" >=</span><span class="token string" >"password"</span> autoComplete<span class="token operator" >=</span><span class="token string" >"off"</span> <span class="token operator" >/</span><span class="token operator" >></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Modal</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nDemo <span class="token operator" >=</span> <span class="token function" >createForm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >(</span>Demo<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=k["default"].create,s=k["default"].Item,a=m["default"].createClass({displayName:"Demo",getInitialState:function(){return{visible:!1}},handleSubmit:function(){console.log(this.props.form.getFieldsValue()),this.hideModal()},showModal:function(){this.setState({visible:!0})},hideModal:function(){this.setState({visible:!1})},render:function(){var n=this.props.form.getFieldProps,a={labelCol:{span:4},wrapperCol:{span:20}};return m["default"].createElement("div",null,m["default"].createElement(l["default"],{type:"primary",onClick:this.showModal},"\u70b9\u51fb\u6709\u60ca\u559c"),m["default"].createElement(o["default"],{title:"\u767b\u5f55",visible:this.state.visible,onOk:this.handleSubmit,onCancel:this.hideModal},m["default"].createElement(k["default"],{horizontal:!0,form:this.props.form},m["default"].createElement(s,r({},a,{label:"\u7528\u6237\u540d"}),m["default"].createElement(c["default"],r({},n("username",{}),{type:"text",autoComplete:"off"}))),m["default"].createElement(s,r({},a,{label:"\u5bc6\u7801"}),m["default"].createElement(c["default"],r({},n("password",{}),{type:"password",autoComplete:"off"}))))))}});return a=n()(a),m["default"].createElement(a,null)}}}});