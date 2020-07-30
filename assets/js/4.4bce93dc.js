(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{350:function(t,s,a){t.exports=a.p+"assets/img/1.e4d711b6.png"},402:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vuex的基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex的基本使用"}},[t._v("#")]),t._v(" Vuex的基本使用")]),t._v(" "),n("p",[t._v("[TOC]")]),t._v(" "),n("h2",{attrs:{id:"项目结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("├── index.html\n├── main.js\n├── api\n│   └── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 抽取出API请求")]),t._v("\n├── components\n│   ├── App.vue\n│   └── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n└── store\n    ├── index.js          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们组装模块并导出 store 的地方")]),t._v("\n    ├── actions.js        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根级别的 action")]),t._v("\n    ├── mutations.js      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根级别的 mutation")]),t._v("\n    ├── getters.js      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根级别的 mutation")]),t._v("\n    └── modules\n        ├── cart.js       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 购物车模块")]),t._v("\n        └── products.js   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 产品模块")]),t._v("\n")])])]),n("h2",{attrs:{id:"在main-js中注入store对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在main-js中注入store对象"}},[t._v("#")]),t._v(" 在main.js中注入store对象")]),t._v(" "),n("p",[n("code",[t._v("main.js")]),t._v("中的关键代码")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./store'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[n("code",[t._v("index.js")]),t._v("中的关键代码")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mutations "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mutations'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" actions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./actions'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" getters "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./getters'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cart "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/cart'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" products "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/products'")]),t._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  modules"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    products\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("这样全部的组件就可以通过"),n("code",[t._v("this.$store")]),t._v("来访问store对象了")]),t._v(" "),n("h2",{attrs:{id:"vuex的基本通信方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex的基本通信方式"}},[t._v("#")]),t._v(" Vuex的基本通信方式")]),t._v(" "),n("p",[n("img",{attrs:{src:a(350),alt:"状态图"}})]),t._v(" "),n("p",[t._v("也就是说,组件中所有需要共享的或者说需要通信的内容,全部都可以存在store中,准确的说是store.state中.这样每一个组件都可以访问到相同的内容,非常方便.")]),t._v(" "),n("h2",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),n("ul",[n("li",[t._v("state对于组件而言只是可读的,不可以直接修改state中的内容")]),t._v(" "),n("li",[t._v("组件要想就修改state中的状态,要么dispatch提交actions,要么commit提交mutations")]),t._v(" "),n("li",[t._v("mutations中所有的操作的都是同步的,所以请把所有的异步操作放在actions中")]),t._v(" "),n("li",[t._v("getters和actions对于state也仅仅只是可读的")])])])}),[],!1,null,null,null);s.default=e.exports}}]);