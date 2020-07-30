(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{392:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"关于javascript中的正则表达式复习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于javascript中的正则表达式复习"}},[t._v("#")]),t._v(" 关于JavaScript中的正则表达式复习")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("h3",{attrs:{id:"创建一个正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个正则表达式"}},[t._v("#")]),t._v(" 创建一个正则表达式")]),t._v(" "),a("ul",[a("li",[t._v("使用构造函数创建正则表达式\n"),a("code",[t._v("var reg = new RegExp(pattern,modifier)")])]),t._v(" "),a("li",[t._v("使用字面量创建正则表达式\n"),a("code",[t._v("var reg = /pattern/modifier")])]),t._v(" "),a("li",[t._v("pattern描述的是正则表达式的主体")]),t._v(" "),a("li",[t._v("modifier是对于正则表达式的修饰符,确定是否区分大小写或者是否是全局匹配以及是否进行多行匹配")])]),t._v(" "),a("p",[t._v("两个创建方式的区别与联系")]),t._v(" "),a("ul",[a("li",[t._v("使用构造函数创建时,pattern可以进行字符串的拼接,也就是可以说pattern可以是一个变量,而字面量不可以")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pattren "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cs'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/pattren/i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CS'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /cs/i */")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /pattern/i */")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("使用构造函数创建含有特殊含义的字符是需要转义,字面量不需要")]),t._v(" "),a("li",[t._v("如果想创建一个含有普通字符的正则表达式,但这个字符本身具有特殊含义,则字面量需要转义,而构造函数不需要转义")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 第一种情况 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d/i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 输出结果\n/\\d/i\n/d/i\n/\\d/i\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 第二种情况 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d/i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\\\d/i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 注意这里字符串也需要转义 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\D'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 输出结果\n/\\d/i\n/\\\\d/i\n/d/i\n\\D\nfalse\ntrue\ntrue\n*/")]),t._v("\n")])])]),a("ul",[a("li",[t._v("值得注意的是目前我好像还不会用构造函数来创建一个匹配"),a("code",[t._v("\\")]),t._v("的表达式\n使用"),a("code",[t._v("var reg = new RegExp('\\','i')")]),t._v("或者"),a("code",[t._v("var reg = new RegExp('\\\\','i')")]),t._v("都会报错")])]),t._v(" "),a("h2",{attrs:{id:"正则表达式中的一些特殊字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式中的一些特殊字符"}},[t._v("#")]),t._v(" 正则表达式中的一些特殊字符")]),t._v(" "),a("h3",{attrs:{id:"修饰符关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符关键字"}},[t._v("#")]),t._v(" 修饰符关键字")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("修饰符")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("i")]),t._v(" "),a("td",[t._v("使用此关键字后匹配时可忽略大小写")])]),t._v(" "),a("tr",[a("td",[t._v("g")]),t._v(" "),a("td",[t._v("进行全局匹配,而不是遇到第一个满足条件的时候就停止")])]),t._v(" "),a("tr",[a("td",[t._v("m")]),t._v(" "),a("td",[t._v("进行多行匹配,即在到达一行文本末尾时还会继续寻常下一行中是否与正则匹配的项")])])])]),t._v(" "),a("h3",{attrs:{id:"中括号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中括号"}},[t._v("#")]),t._v(" 中括号[]")]),t._v(" "),a("p",[a("code",[t._v("[]")]),t._v("用于匹配某一范围内的内容")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("示例")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("[abc]")]),t._v(" "),a("td",[t._v("匹配abc任一字符")])]),t._v(" "),a("tr",[a("td",[t._v("[^abc]")]),t._v(" "),a("td",[t._v("匹配除了abc以外的任一字符(包括换行符)")])]),t._v(" "),a("tr",[a("td",[t._v("[0-9]")]),t._v(" "),a("td",[t._v("匹配任一0到9之间的数字,包括0和9,字符0和数字0都会匹配到")])]),t._v(" "),a("tr",[a("td",[t._v("[A-Z]")]),t._v(" "),a("td",[t._v("匹配A到Z之间的字符")])]),t._v(" "),a("tr",[a("td",[t._v("[0-9|A-Z]")]),t._v(" "),a("td",[t._v("匹配0到9之间的字符或者A-Z之间的字符")])])])]),t._v(" "),a("p",[t._v("还有"),a("code",[t._v("[\\^0-9]")]),t._v("、"),a("code",[t._v("[a-z]")]),t._v("、"),a("code",[t._v("[A-Z]")]),t._v("、"),a("code",[t._v("[\\^a-z]")]),t._v("等这些我就不多说了吧,道理都是一样的")]),t._v(" "),a("h3",{attrs:{id:"元字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),a("p",[t._v("元字符是正则表达式中具有特殊含义的字符")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("元字符")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(".")]),t._v(" "),a("td",[t._v("表示单个字符,除了'\\n'")])]),t._v(" "),a("tr",[a("td",[t._v("\\w")]),t._v(" "),a("td",[t._v("表示数字,字母,或下划线")])]),t._v(" "),a("tr",[a("td",[t._v("\\W")]),t._v(" "),a("td",[t._v("表示除了数字,字母及下划线以外的字符")])]),t._v(" "),a("tr",[a("td",[t._v("\\d")]),t._v(" "),a("td",[t._v("表示0-9之间的任一个数字,相当于[0-9]")])]),t._v(" "),a("tr",[a("td",[t._v("\\s")]),t._v(" "),a("td",[t._v("表示空格或空白等")])]),t._v(" "),a("tr",[a("td",[t._v("\\b")]),t._v(" "),a("td",[t._v("匹配边界,字符串的开头和结尾以及空格的两边都是边界")])])])]),t._v(" "),a("p",[t._v("还有"),a("code",[t._v("\\D")]),t._v(","),a("code",[t._v("\\S")]),t._v(","),a("code",[t._v("\\B")]),t._v("这些都表示其相应小写的反义")]),t._v(" "),a("h3",{attrs:{id:"量词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#量词"}},[t._v("#")]),t._v(" 量词")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("量词")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("^n")]),t._v(" "),a("td",[t._v("匹配任一以n开头的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("n$")]),t._v(" "),a("td",[t._v("匹配任一以n结尾的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("?=n")]),t._v(" "),a("td",[t._v("匹配任一其后紧接n的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("?!n")]),t._v(" "),a("td",[t._v("匹配任一其后没有紧接n的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("n+")]),t._v(" "),a("td",[t._v("匹配至少包含一个n字符串")])]),t._v(" "),a("tr",[a("td",[t._v("n*")]),t._v(" "),a("td",[t._v("匹配包含n零个或者多个n的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("n?")]),t._v(" "),a("td",[t._v("匹配包含零个或者一个n的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("n{X}")]),t._v(" "),a("td",[t._v("匹配包含连续X个n的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("n{X,}")]),t._v(" "),a("td",[t._v("匹配包含连续的n出现了X次及以上的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("n{X,Y}")]),t._v(" "),a("td",[t._v("匹配包含连续的n出现了X次及以上但最多Y次的字符串")])])])]),t._v(" "),a("p",[t._v("注意,对于n{X,Y},如果出现了多于Y次的n,只匹配前Y次n")]),t._v(" "),a("h3",{attrs:{id:"正则表达式对象的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式对象的方法"}},[t._v("#")]),t._v(" 正则表达式对象的方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("test")]),t._v(" "),a("td",[t._v("检索字符串是否匹配当前正则表达式,返回true或false")])]),t._v(" "),a("tr",[a("td",[t._v("exec")]),t._v(" "),a("td",[t._v("检索字符串是否匹配当前正则表达式,返回找的值,并确定其位置")])]),t._v(" "),a("tr",[a("td",[t._v("toString")]),t._v(" "),a("td",[t._v("返回正则表达式的字符串")])])])]),t._v(" "),a("p",[t._v("代码示例")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/8{3,5}/i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'888888a8'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 输出结果如下\ntrue\n[ '88888', index: 0, input: '888888a8', groups: undefined ]\n/8{3,5}/i\n*/")]),t._v("\n")])])]),a("h3",{attrs:{id:"支持正则表达式的string的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持正则表达式的string的方法"}},[t._v("#")]),t._v(" 支持正则表达式的String的方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("search")]),t._v(" "),a("td",[t._v("返回与正则表达式相匹配的值首次出现的位置,不匹配否则返回-1")])]),t._v(" "),a("tr",[a("td",[t._v("match")]),t._v(" "),a("td",[t._v("返回匹配成功的数组,否则返回null")])]),t._v(" "),a("tr",[a("td",[t._v("replace")]),t._v(" "),a("td",[t._v("替换与正则表达式匹配的子串,不对原字符串做更改,而是返回一个更改后的新串")])]),t._v(" "),a("tr",[a("td",[t._v("split")]),t._v(" "),a("td",[t._v("把字符串分割为字符串数组,也是返回一个新串")])])])]),t._v(" "),a("p",[t._v("代码示例")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/8{3}/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'888v888a8'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'999'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 输出结果如下\n0\n[ '888', index: 0, input: '888v888a8', groups: undefined ]\n999v888a8\n888v888a8\n[ '', 'v', 'a8' ]\n*/")]),t._v("\n")])])]),a("h3",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/chenmeng0818/p/6370819.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("js中正则表达式入门"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-obj-regexp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程JavaScript RegExp 对象"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);