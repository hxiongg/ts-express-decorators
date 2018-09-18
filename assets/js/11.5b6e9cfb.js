(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{236:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"interceptors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interceptors","aria-hidden":"true"}},[t._v("#")]),t._v(" Interceptors  "),n("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),n("Badge",{attrs:{text:"Contributors are welcome"}})],1),t._v(" "),n("p",[t._v("Creating and consuming an interceptor is two-step process.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("ApiList",{attrs:{query:"module == '@tsed/common/interceptors' && symbolType === 'decorator'"}}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Create and annotate the interceptor class that will intercept calls to service methods")]),this._v(" "),s("li",[this._v("Decide which methods will be intercepted by which interceptor")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"decorators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decorators","aria-hidden":"true"}},[this._v("#")]),this._v(" Decorators")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"interceptor-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interceptor-class","aria-hidden":"true"}},[this._v("#")]),this._v(" Interceptor class")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("To create interceptor class you need to implement he "),n("code",[t._v("IInterceptor")]),t._v(" interface and implement the\n"),n("code",[t._v("aroundInvoke(ctx: IInterceptorContext)")]),t._v(" method, and use the "),n("code",[t._v("@Interceptor()")]),t._v(" annotaiton to register your interceptor class. Inside your "),n("code",[t._v("src/interceptors/MyInterceptor.ts")]),t._v(" folder create the following simple interceptor.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IInterceptor"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IInterceptorContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Interceptor "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'@tsed/common'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),n("span",{attrs:{class:"token function"}},[t._v("Interceptor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MyInterceptor")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("IInterceptor")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// you can inject other components as usual")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// be careful for circular dependencies in your components")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("constructor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("injSrv"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" InjectorService"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// do some logic")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n     * ctx: The context that holds the dynamic data related to the method executiong and the proceed method * to proceed with the original method execution \n     * \n     * opts: Static params that can be provided when the interceptor is attached to a specific method \n     */")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("aroundInvoke")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IInterceptorContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("any")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token builtin"}},[t._v("console")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`the method ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v(" will be executed with args ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v(" and static data ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("opts"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// let the original method proceed")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" retValue "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("proceed")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token builtin"}},[t._v("console")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`the method was executed, and returned ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("retValue"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// must return the returned value back to the caller")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// the retValue might be a promise in which case you can use .then to chain other code logic")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// or you can use async aroundInvoke and await ctx.proceed() to execute the code in linear fashion")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" retValue"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-the-interceptor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-interceptor","aria-hidden":"true"}},[this._v("#")]),this._v(" Use the interceptor")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now that your interceptor logic is in place you can use it in any other service. You need to use the "),s("code",[this._v("@Intercept(InterceptorClass, opts)")]),this._v(" annotation to register which interceptor should be used for the specific method you want to intercept. An example service in "),s("code",[this._v("src/services/MyService.ts")]),this._v(":")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Intercept "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'@tsed/common'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MyInterceptor "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'../interceptors/MyInterceptor'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MyService")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// MyInterceptor is going to be used to intercept this method whenever called")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 'simple data' is static data that will be passed as second arg the the interceptor aroundInvoke")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// this can be any data, you can pass array or object for that matter")]),t._v("\n    @"),n("span",{attrs:{class:"token function"}},[t._v("Intercept")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyInterceptor"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'simple data'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("mySimpleMethod")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token builtin"}},[t._v("console")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'the simple method is executed'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If the service method is executed like "),s("code",[this._v("myServiceInstance.mySimpleMethod()")]),this._v(" we will get the following output:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("the method mySimpleMethod will be executed with args and static data simple data\nthe simple method is executed\nthe method was executed, and returned undefined\n")])])])}],!1,null,null,null);e.options.__file="interceptors.md";s.default=e.exports}}]);