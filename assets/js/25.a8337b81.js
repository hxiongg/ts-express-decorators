(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{239:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Basically, Service and Factory are a specific configuration of a Provider.\nIt's possible to register a class as provider, factory or service manually with these functions:")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/api/common/di/registries/registerProdiver.html"}},[t._v("registerProvider()")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/api/common/di/registries/registerSrvice.html"}},[t._v("registerService()")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/api/common/di/registries/registerFactory.html"}},[t._v("registerFactory()")])],1)]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This example show you how you can add a service already constructed like a npm module.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("RegisterProvider can be used to change the configuration of a provider:")]),t._v(" "),t._m(4)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provider","aria-hidden":"true"}},[this._v("#")]),this._v(" Provider")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"register-a-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-a-provider","aria-hidden":"true"}},[this._v("#")]),this._v(" register a provider")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// MyFooFactory.ts")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("registerProvider"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@tsed/common"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("registerProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("provide"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"customTypeProvider"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Note: type field is optional")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// MyFooFactory.ts")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("registerProvider"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@tsed/common"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyFakeClass")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("registerProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("provide"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyFakeClass"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="provider.md";s.default=e.exports}}]);