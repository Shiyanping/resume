webpackJsonp([1],{0:function(t,s){},"5jsp":function(t,s,i){"use strict";var a=i("GLU0"),e=i("tmGs"),n=i("VU/8"),c=n(a.a,e.a,!1,null,null,null);s.a=c.exports},GLU0:function(t,s,i){"use strict";var a=i("mtWM"),e=i.n(a);s.a={name:"front",data:function(){return{userInfo:{exp:[],qq:{},intro:{content:[],technology:{title:"",content:[]}},experience:[{tips:{title:"",content:[]},technology:[]}],skill:[],project:[{tips:{title:"",content:[]},technology:[]}],usually:[]}}},created:function(){var t=this;console.log(11),e.a.get("/static/resume.json").then(function(s){t.userInfo=s.data})},methods:{calcDate:function(t){var s=new Date(t);return(new Date).getYear()-s.getYear()+1}}}},M93x:function(t,s,i){"use strict";var a=i("xJD8"),e=i("zAp5"),n=i("VU/8"),c=n(a.a,e.a,!1,null,null,null);s.a=c.exports},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),e=i("M93x"),n=i("YaEn"),c=i("8+8L");a.a.use(c.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:e.a}})},YaEn:function(t,s,i){"use strict";var a=i("7+uW"),e=i("/ocq"),n=i("5jsp");a.a.use(e.a),s.a=new e.a({routes:[{path:"/",name:"front",component:n.a}]})},tmGs:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"main-container"},[t._m(0),t._v(" "),i("section",{staticClass:"section section-header"},[i("div",{staticClass:"section-bg section-header-bg"}),t._v(" "),i("div",{staticClass:"section-bg section-content-bg"}),t._v(" "),i("div",{staticClass:"container"},[i("header",{staticClass:"header"},[i("div",{staticClass:"header-box"},[t._m(1),t._v(" "),i("h1",{staticClass:"name text-center wow inShow no-print"},[t._v(t._s(t.userInfo.nickname))]),t._v(" "),i("h1",{staticClass:"name text-center hide show-print-block"},[t._v(t._s(t.userInfo.name))])])]),t._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"content-box"},[i("div",{staticClass:"name-slogan"},[i("h2",{staticClass:"wow inShow no-print",attrs:{"data-wow-delay":"0.1s"}},[i("span",{staticClass:"text-light"},[t._v(t._s(t.userInfo.lastName))]),t._v(" "+t._s(t.userInfo.firstName)+"\n            ")]),t._v(" "),i("div",{staticClass:"description wow inShow",attrs:{"data-wow-delay":"0.15s"}},[t._v(t._s(t.userInfo.slogan))])]),t._v(" "),i("div",{staticClass:"contact-info"},[i("div",{staticClass:"row"},[t._m(2),t._v(" "),i("div",{staticClass:"col-xs-6 col-md-6 col-lg-3"},[i("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.45s"}},[i("h4",[t._v("年龄")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.calcDate(t.userInfo.birthday)))])])]),t._v(" "),i("div",{staticClass:"col-md-6 col-lg-3"},[i("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.5s",href:"mailto:"+t.userInfo.email}},[i("h4",[t._v("学历")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.education))])])]),t._v(" "),i("div",{staticClass:"col-md-6 col-lg-3"},[i("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.55s",href:t.userInfo.website,target:"_blank"}},[i("h4",[t._v("经验")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.exp[0]+(t.calcDate(t.userInfo.workSince)-1)+t.userInfo.exp[1]+(t.calcDate(t.userInfo.workSince)-.5)+t.userInfo.exp[2]))])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 col-lg-3"},[i("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.6s"}},[i("h4",[t._v("Phone(微信同号)")]),t._v(" "),i("address",{staticClass:"info"},[t._v(t._s(t.userInfo.phone))])])]),t._v(" "),i("div",{staticClass:"col-md-6 col-lg-3"},[i("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.65s"}},[i("h4",[t._v("邮箱")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.qq.number)+"@qq.com")])])]),t._v(" "),i("div",{staticClass:"col-md-6 col-lg-3"},[i("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.7s",href:t.userInfo.website,target:"_blank"}},[i("h4",[t._v("Website")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.website))])])]),t._v(" "),i("div",{staticClass:"col-md-6 col-lg-3"},[i("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.75s",href:t.userInfo.github,target:"_blank"}},[i("h4",[t._v("Github")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.github))])])])])])])])])]),t._v(" "),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"section-bg section-header-bg"}),t._v(" "),i("div",{staticClass:"section-bg section-content-bg"}),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"intro"},t._l(t.userInfo.intro.content,function(s,a){return i("p",{key:a,domProps:{innerHTML:t._s(s)}})})),t._v(" "),i("div",{staticClass:"technology"},[i("ul",{staticClass:"inline"},[i("li",[i("b",[t._v(t._s(t.userInfo.intro.technology.title))])]),t._v(" "),t._l(t.userInfo.intro.technology.content,function(s,a){return i("li",{key:a},[t._v(t._s(s))])})],2)])])])]),t._v(" "),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"section-bg section-header-bg"}),t._v(" "),i("div",{staticClass:"section-bg section-content-bg"}),t._v(" "),t._m(4),t._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"experience"},t._l(t.userInfo.experience,function(s,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-5"},[i("div",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"description"},[t._v(t._s(s.intro))])]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("div",{staticClass:"content"},[t._v(t._s(s.description))]),t._v(" "),t._l(s.tips,function(s,a){return i("div",{key:a,staticClass:"tips"},[i("b",[t._v(t._s(s.title))]),t._v(" "),i("ul",t._l(s.content,function(s,a){return i("li",{key:a},[t._v(t._s(s))])}))])}),t._v(" "),t._l(s.technology,function(s){return i("div",{staticClass:"technology"},[i("b",[t._v(t._s(s.title))]),t._v(" "),i("ul",{staticClass:"inline"},t._l(s.content,function(s,a){return i("li",{key:a},[t._v(t._s(s))])}))])})],2)])])}))])])]),t._v(" "),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"section-bg section-header-bg"}),t._v(" "),i("div",{staticClass:"section-bg section-content-bg"}),t._v(" "),t._m(5),t._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"experience"},t._l(t.userInfo.project,function(s,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-5"},[i("div",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"description"},[t._v(t._s(s.intro))])]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("div",{staticClass:"content"},[t._v(t._s(s.description))]),t._v(" "),t._l(s.tips,function(s,a){return i("div",{staticClass:"tips"},[i("b",[t._v(t._s(s.title))]),t._v(" "),i("ul",t._l(s.content,function(s,a){return i("li",{key:a},[t._v(t._s(s))])}))])}),t._v(" "),t._l(s.technology,function(s,a){return i("div",{key:a,staticClass:"technology"},[i("b",[t._v(t._s(s.title))]),t._v(" "),i("ul",{staticClass:"inline"},t._l(s.content,function(s,a){return i("li",{key:a},[t._v(t._s(s))])}))])})],2)])])}))])])]),t._v(" "),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"section-bg section-header-bg"}),t._v(" "),i("div",{staticClass:"section-bg section-content-bg"}),t._v(" "),t._m(6),t._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"row skill"},t._l(t.userInfo.skill,function(s,a){return i("div",{key:a,staticClass:"col-md-6"},[i("div",{staticClass:"item"},[i("div",{staticClass:"text-info"},[i("span",{staticClass:"num text-light"},[t._v(t._s(s.percent))]),t._v(t._s(s.name)+"\n              ")]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar wow progressShow",style:"width:"+s.percent})])])])}))])])]),t._v(" "),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"section-bg section-header-bg"}),t._v(" "),i("div",{staticClass:"section-bg section-content-bg"}),t._v(" "),t._m(7),t._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"row usually"},t._l(t.userInfo.usually,function(s,a){return i("div",{key:a,staticClass:"col-lg-4 col-md-6"},[s.link?i("a",{staticClass:"item",attrs:{href:s.link,target:"_blank",title:s.link}},[i("i",{staticClass:"fa fa-github"}),t._v(" "),i("h3",{staticClass:"text-light"},[t._v(t._s(s.name))]),t._v(" "),i("p",[t._v(t._s(s.description))])]):t._e(),t._v(" "),s.link?t._e():i("div",{staticClass:"item",attrs:{title:s.link}},[i("i",{staticClass:"fa fa-github"}),t._v(" "),i("h3",{staticClass:"text-light"},[t._v(t._s(s.name))]),t._v(" "),i("p",[t._v(t._s(s.description))])])])}))])])]),t._v(" "),i("section",{staticClass:"section no-print"},[i("div",{staticClass:"container"},[i("div",{staticClass:"section-bg section-header-bg"}),t._v(" "),i("div",{staticClass:"section-bg section-content-bg"}),t._v(" "),t._m(8),t._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"contact"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 col-lg-3 contact-bottom"},[i("div",{staticClass:"item"},[i("h4",[t._v("Phone")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.phone))])])]),t._v(" "),i("div",{staticClass:"col-md-6 col-lg-3 contact-bottom"},[i("div",{staticClass:"item"},[i("h4",[t._v("QQ")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.qq.number))])])]),t._v(" "),i("div",{staticClass:"col-md-6 col-lg-3 contact-bottom"},[i("div",{staticClass:"item"},[i("h4",[t._v("Location")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.location))])])]),t._v(" "),i("div",{staticClass:"col-md-6 col-lg-3 contact-bottom"},[i("a",{staticClass:"item",attrs:{href:"mailto:"+t.userInfo.email}},[i("h4",[t._v("Email")]),t._v(" "),i("div",{staticClass:"info"},[t._v(t._s(t.userInfo.email))])])])])]),t._v(" "),i("div",{staticClass:"name-slogan"},[i("h2",{staticClass:"wow inShow"},[i("span",{staticClass:"text-light"},[t._v(t._s(t.userInfo.lastName))]),t._v(" "+t._s(t.userInfo.firstName)+"\n          ")]),t._v(" "),i("div",{staticClass:"description wow inShow",attrs:{"data-wow-delay":"0.05s"}},[t._v(t._s(t.userInfo.slogan)+"（"+t._s(t.userInfo.tips)+"）")])])])])])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"useful-link no-print"},[i("a",{staticClass:"github-button",attrs:{href:"https://github.com/Shiyanping/resume",title:"查看源码"}},[i("img",{attrs:{src:"https://shiyanping.github.io/resume/static/images/star.svg",alt:"Github"}}),t._v(" "),i("span",[t._v("Star")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"avatar wow inShow no-print"},[i("img",{staticClass:"img-responsive",attrs:{src:"https://shiyanping.github.io/resume/static/images/logo.jpg",alt:"logo"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-xs-6 col-md-6 col-lg-3"},[i("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.3s"}},[i("h4",[t._v("性别")]),t._v(" "),i("div",{staticClass:"info"},[t._v("男")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"header"},[i("div",{staticClass:"content-box"},[i("h2",{staticClass:"title"},[t._v("介绍 / \n            "),i("small",[i("i",[t._v("Intro")])])]),t._v(" "),i("div",{staticClass:"description"},[t._v("个人基本情况")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"header"},[i("div",{staticClass:"content-box"},[i("h2",{staticClass:"title"},[t._v("工作经验 / \n            "),i("small",[i("i",[t._v("Experience")])])]),t._v(" "),i("div",{staticClass:"description"},[t._v("简短的从业经历介绍")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"header"},[i("div",{staticClass:"content-box"},[i("h2",{staticClass:"title"},[t._v("项目经验 / \n            "),i("small",[i("i",[t._v("Experience")])])]),t._v(" "),i("div",{staticClass:"description"},[t._v("近期主要做过的一些项目")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"header"},[i("div",{staticClass:"content-box"},[i("h2",{staticClass:"title"},[t._v("技能 / \n            "),i("small",[i("i",[t._v("Skills")])])]),t._v(" "),i("div",{staticClass:"description"},[t._v("我所掌握的工具和技术栈")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"header"},[i("div",{staticClass:"content-box"},[i("h2",{staticClass:"title"},[t._v("常逛 / \n            "),i("small",[i("i",[t._v("Usually")])])]),t._v(" "),i("div",{staticClass:"description"},[t._v("经常逛的技术相关网站")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"header"},[i("div",{staticClass:"content-box"},[i("h2",{staticClass:"title"},[t._v("联系 / \n            "),i("small",[i("i",[t._v("Contact")])])]),t._v(" "),i("div",{staticClass:"description"},[t._v("通过这些信息可以联系到我")])])])}],n={render:a,staticRenderFns:e};s.a=n},xJD8:function(t,s,i){"use strict";s.a={name:"app"}},zAp5:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},e=[],n={render:a,staticRenderFns:e};s.a=n}},["NHnr"]);
//# sourceMappingURL=app.cf04cd1bce042ef01ee5.js.map