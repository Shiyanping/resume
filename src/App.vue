<template>
  <div id="app">
    <div class="loading" v-show="!loading">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect x="0" y="10.3333" width="4" height="10.3333" fill="#e0a80d">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
        <rect x="10" y="11.6667" width="4" height="7.66667" fill="#e0a80d">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
        <rect x="20" y="7.66667" width="4" height="15.6667" fill="#e0a80d">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
      </svg>
    </div>
    <router-view />
    <!-- <div class="main-container" loadingstatus="loading" style="">
      <div class="useful-link no-print">
        <a href="https://github.com/Shiyanping/resume" title="查看源码" class="github-button"><img src="static/images/star.svg" alt="Github">
          <span>Star</span>
        </a>
      </div>
      <section class="section section-header">
        <div class="section-bg section-header-bg"></div>
        <div class="section-bg section-content-bg"></div>
        <div class="container">
          <header class="header">
            <div class="header-box">
              <div class="avatar wow inShow no-print"><img src="static/images/logo.jpg" alt="logo" class="img-responsive"></div>
              <h1 class="name text-center wow inShow no-print">小石不识月</h1>
              <h1 class="name text-center hide show-print-block">石燕平</h1>
            </div>
          </header>
          <div class="section-content">
            <div class="content-box">
              <div class="name-slogan">
                <h2 data-wow-delay="0.1s" class="wow inShow no-print">
                  <span class="text-light">yanping</span>&nbsp;Shi
                </h2>
                <div data-wow-delay="0.15s" class="description wow inShow">努力成为卓越并且专业的工程师</div>
              </div>
              <div class="contact-info">
                <div class="row">
                  <div class="col-xs-6 col-md-6 col-lg-3">
                    <div data-wow-delay="0.3s" class="item wow inShow">
                      <h4>性别</h4>
                      <div class="info">男</div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-6 col-lg-3">
                    <div data-wow-delay="0.45s" class="item wow inShow">
                      <h4>年龄</h4>
                      <div class="info">25</div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <div data-wow-delay="0.5s" href="mailto:594388036@qq.com" class="item wow inShow">
                      <h4>学历</h4>
                      <div class="info">本科</div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <a data-wow-delay="0.55s" target="_blank" class="item wow inShow" href="https://shiyanping.github.io">
                      <h4>经验</h4>
                      <div class="info">毕业2年工作2.5年</div>
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-lg-3">
                    <div data-wow-delay="0.6s" class="item wow inShow">
                      <h4>Phone</h4>
                      <address class="info">13260298521</address>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <div data-wow-delay="0.65s" class="item wow inShow">
                      <h4>QQ</h4>
                      <div class="info">594388036</div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <a data-wow-delay="0.7s" target="_blank" class="item wow inShow" href="https://shiyanping.github.io">
                      <h4>Website</h4>
                      <div class="info">https://shiyanping.github.io</div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <a data-wow-delay="0.75s" target="_blank" class="item wow inShow" href="https://github.com/Shiyanping">
                      <h4>Github</h4>
                      <div class="info">https://github.com/Shiyanping</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-bg section-header-bg"></div>
          <div class="section-bg section-content-bg"></div>
          <header class="header">
            <div class="content-box">
              <h2 class="title">介绍&nbsp;/&nbsp;
                <small>
                  <i>Intro</i>
                </small>
              </h2>
              <div class="description">个人基本情况</div>
            </div>
          </header>
          <div class="section-content">
            <div class="intro">
              <p>2年半工作经验，在当前的公司带3个实习生。</p>
              <p>毕业因为热爱前端，所以在实习公司通过自己的努力和前辈的帮忙，成为一名合格的前端攻城狮。</p>
              <p>熟悉前端流行的框架，使用 vue 搭建过中型后台管理系统和手机端页面。</p>
              <p>喜欢折腾，但是工作上比较务实，平时喜欢看一些技术文章。</p>
              <p>有小程序开发经验，目前线上的小程序有“成语大神”和“超级默契“。</p>
              <p>目前的主要工作内容为混合开发</p>
            </div>
            <div class="technology">
              <ul class="inline">
                <li>
                  <b>用过的技术栈：</b>
                </li>
                <li>jquery</li>
                <li>vue</li>
                <li>stylus</li>
                <li>less</li>
                <li>gulp</li>
                <li>webpack</li>
                <li>各种UI框架（ Bootstrap, element-ui ）</li>
                <li>JSBridge（H5与客户端交互框架）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-bg section-header-bg"></div>
          <div class="section-bg section-content-bg"></div>
          <header class="header">
            <div class="content-box">
              <h2 class="title">工作经验&nbsp;/&nbsp;
                <small>
                  <i>Experience</i>
                </small>
              </h2>
              <div class="description">简短的从业经历介绍</div>
            </div>
          </header>
          <div class="section-content">
            <div class="experience">
              <div class="item">
                <div class="row">
                  <div class="col-md-5">
                    <div class="time">2016.08-目前</div>
                    <div class="title">北京酷划在线</div>
                    <div class="description">前端开发</div>
                  </div>
                  <div class="col-md-7">
                    <div class="content">主要负责淘新闻产品线（用户端和管理后台）及小程序的开发，规范前端开发流程及代码规范，协同产品经理确定需求，配合后端和客户端定义及联调接口，推动产品发展。</div>
                    <div class="tips">
                      <b>主要业绩：</b>
                      <ul>
                        <li>淘新闻从创立一直到现在，前端主要是我负责，产品从 0 一直做到目前月收入 2500万，DAU 270万左右。</li>
                        <li>协同后端同学完成管理平台的建设（数据平台、管理后台、投放后台、商城管理后台、内容管理系统、评论审核后台等）。</li>
                        <li>完成各种 app 内嵌的 H5页面（活动页，分享落地页，app 内部说明页，任务大厅等功能页），并且不断优化 H5 页面的加载速度。</li>
                        <li>在公司之前没有前后端分离的项目下，通过和运维，后端同学的沟通，成功将商城用户端实现前后端分离。</li>
                        <li>推动完善 H5 和客户端的交互流程（scheme -&gt; window 挂载方法 -&gt; JSBridge）。</li>
                      </ul>
                    </div>
                    <div class="technology">
                      <b>技术栈：</b>
                      <ul class="inline">
                        <li>vue</li>
                        <li>less</li>
                        <li>scss</li>
                        <li>stylus</li>
                        <li>element-ui</li>
                        <li>gulp</li>
                        <li>webpack</li>
                        <li>jquery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-5">
                    <div class="time">2016.01-2016.08</div>
                    <div class="title">北京魔力爱普</div>
                    <div class="description">前端实习生-前端开发</div>
                  </div>
                  <div class="col-md-7">
                    <div class="content">在公司期间，大部分精力都用于前端学习及锻炼型的业务开发。很感谢我的 leader 可以让我根据项目逐步学习，代码从最初的 css,js 转到 less,jquery，从 less,jquery 转到 scss,stylus,vue。熟悉了 gulp，基于 gulp 做了部分前端自动化构建的工具。同时也更加深入的学习了 vue 框架，了解了 react,angular。</div>
                    <div class="tips">
                      <b>主要业绩：</b>
                      <ul>
                        <li>主要完成 app 内嵌H5页和微信公众号的开发。</li>
                        <li>完善公司官网（添加动画）及PC端管理后台。</li>
                        <li>负责和后台人员进行沟通，完成产品的迭代</li>
                        <li>利用工作之余学习 vue 和前端工程化工具。</li>
                      </ul>
                    </div>
                    <div class="technology">
                      <b>技术栈：</b>
                      <ul class="inline">
                        <li>js</li>
                        <li>css</li>
                        <li>jquery</li>
                        <li>vue</li>
                        <li>bootstrap</li>
                        <li>gulp</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-bg section-header-bg"></div>
          <div class="section-bg section-content-bg"></div>
          <header class="header">
            <div class="content-box">
              <h2 class="title">项目经验&nbsp;/&nbsp;
                <small>
                  <i>Experience</i>
                </small>
              </h2>
              <div class="description">近期主要做过的一些项目</div>
            </div>
          </header>
          <div class="section-content">
            <div class="experience">
              <div class="item">
                <div class="row">
                  <div class="col-md-5">
                    <div class="time">2018.04-2018.06</div>
                    <div class="title">超级默契、成语大神</div>
                    <div class="description">两个娱乐类小程序</div>
                  </div>
                  <div class="col-md-7">
                    <div class="content">目前在线上的两个小程序，属于娱乐问答类小程序，有给广告主小程序导量，帮助自家 app 导量的功能。</div>
                    <div class="tips">
                      <b>主要功能及说明：</b>
                      <ul>
                        <li>成语大神属于公司尝试性小程序，因为 app 和小程序的打通，主要用于 app -&gt; 自己小程序 -&gt; 广告主小程序这个流程的导量，其次为了愉悦用户。</li>
                        <li>超级默契属于好友互动类小程序，用户出题，分享给好友，好友回答这种一问多答的模式，刺激自家 app 周围的用户，从未为自家 app 导量，其次还有通过好友付费获得答案这个过程，间接拿到部分红利。</li>
                        <li>这两个小程序并没有使用 mpvue 和 wepy 框架，后续自己业余开发其他小程序的时候会进行使用。</li>
                      </ul>
                    </div>
                    <div class="technology">
                      <b>技术栈：</b>
                      <ul class="inline">
                        <li>小程序开发语法</li>
                        <li>小程序api</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-5">
                    <div class="time">2018.01-持续更新</div>
                    <div class="title">数据平台</div>
                    <div class="description">对实时数据进行可视化管理</div>
                  </div>
                  <div class="col-md-7">
                    <div class="content">可以对数据组统计的数据进行查询，部分实时指标进行可视化呈现，数据平台还包括留存分析、漏斗分析、客服审单分析、商城反作弊数据等模块</div>
                    <div class="tips">
                      <b>主要功能及总结：</b>
                      <ul>
                        <li>主要将数据组的数据进行展示，但是数据组返回的 json 很庞大，需要前端对返回来的数据进行处理，导致代码量和页面很复杂，后来和数据组商量，改为后端处理数据，前端再将返回的数据处理成图表所需要的数据，减少前端处理数据的逻辑。</li>
                        <li>使用 vue 全家桶开发，初期因为没有将组件化思想贯彻到底，只是将公共的组件提取，每个页面中的内容没有进行提取，所以等页面多了之后，代码维护起来很不方便，后期将页面中可以提取的内容都进行了组件拆分，放到页面的 component 中。</li>
                      </ul>
                    </div>
                    <div class="technology">
                      <b>技术栈：</b>
                      <ul class="inline">
                        <li>vue</li>
                        <li>vue-router</li>
                        <li>echarts</li>
                        <li>element-ui</li>
                        <li>webpack</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-5">
                    <div class="time">2017.12-2018.01</div>
                    <div class="title">酷划官网</div>
                    <div class="description">https://www.coohua.com</div>
                  </div>
                  <div class="col-md-7">
                    <div class="content">将酷划官网进行重构，在之前的静态页面上添加CSS3动画，并且将官网进行了响应式适配。</div>
                    <div class="tips">
                      <b>主要功能及总结：</b>
                      <ul>
                        <li>在原本纯静态的页面上添加动画，起初用到一些 js 动画，但是感觉 js，jquery 动画使页面性能有所下降，最后修改为css动画，使页面看起来更加流畅。</li>
                        <li>起初 PC端官网 和移动端官网是两套代码，两个域名，为了更好的体验，来回切换时不会重新刷新页面，所以做了响应式适配。</li>
                        <li>对官网做了 SEO 优化，在搜索引擎上更加靠前。</li>
                      </ul>
                    </div>
                    <div class="technology">
                      <b>技术栈：</b>
                      <ul class="inline">
                        <li>css3</li>
                        <li>html</li>
                        <li>js</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-5">
                    <div class="time">2017.04-2017.05</div>
                    <div class="title">酷划商城</div>
                    <div class="description">内嵌 app 内部的商城</div>
                  </div>
                  <div class="col-md-7">
                    <div class="content">商城包括商城管理后台和用户端，在连续一个月的辛勤劳动下正式上线运行。在公司没有任何项目实现前后端分离的情况下，用户端商城成功完成前后端分离</div>
                    <div class="tips">
                      <b>主要功能及总结：</b>
                      <ul>
                        <li>用户端商城同其他的商城一样，有完善的购买流程，初期同一套代码用在三条产品线上</li>
                        <li>完成商城管理后台（商品管理，订单管理，物流管理）</li>
                        <li>初期后端架构师的意思是商城只用于消耗用户积分，与业务逻辑区分，但是后续在持续的迭代中，商城加入了很多产品的业务逻辑，就导致代码管理不方便，在今年4月初，我将三个产品线代码进行了分离。</li>
                        <li>目前正在同后端及项目经理协商，使用 vue 重构客户端和管理后台</li>
                      </ul>
                    </div>
                    <div class="technology">
                      <b>技术栈：</b>
                      <ul class="inline">
                        <li>jquery</li>
                        <li>artTemplate</li>
                        <li>less</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-5">
                    <div class="time">2016.12-至今</div>
                    <div class="title">淘新闻 app 内嵌 H5</div>
                    <div class="description"></div>
                  </div>
                  <div class="col-md-7">
                    <div class="content">app 内嵌的 H5 页面，其中主要包括任务大厅，新闻详情页，各种活动页，帮助中心，各种说明页，各种分享落地页</div>
                    <div class="technology">
                      <b>技术栈：</b>
                      <ul class="inline">
                        <li>vue</li>
                        <li>less</li>
                        <li>scss</li>
                        <li>gulp</li>
                        <li>第三方js框架</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-bg section-header-bg"></div>
          <div class="section-bg section-content-bg"></div>
          <header class="header">
            <div class="content-box">
              <h2 class="title">技能&nbsp;/&nbsp;
                <small>
                  <i>Skills</i>
                </small>
              </h2>
              <div class="description">我所掌握的工具和技术栈</div>
            </div>
          </header>
          <div class="section-content">
            <div class="row skill">
              <div class="col-md-6">
                <div class="item">
                  <div class="text-info">
                    <span class="num text-light">70%</span>JavaScript
                  </div>
                  <div class="progress">
                    <div class="progress-bar wow progressShow" style="width: 70%;"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div class="text-info">
                    <span class="num text-light">65%</span>Vue
                  </div>
                  <div class="progress">
                    <div class="progress-bar wow progressShow" style="width: 65%;"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div class="text-info">
                    <span class="num text-light">80%</span>Css
                  </div>
                  <div class="progress">
                    <div class="progress-bar wow progressShow" style="width: 80%;"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div class="text-info">
                    <span class="num text-light">85%</span>Bootstrap（栅格布局的概念）
                  </div>
                  <div class="progress">
                    <div class="progress-bar wow progressShow" style="width: 85%;"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div class="text-info">
                    <span class="num text-light">75%</span>Git 及 svn
                  </div>
                  <div class="progress">
                    <div class="progress-bar wow progressShow" style="width: 75%;"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div class="text-info">
                    <span class="num text-light">60%</span>PhotoShop
                  </div>
                  <div class="progress">
                    <div class="progress-bar wow progressShow" style="width: 60%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-bg section-header-bg"></div>
          <div class="section-bg section-content-bg"></div>
          <header class="header">
            <div class="content-box">
              <h2 class="title">常逛&nbsp;/&nbsp;
                <small>
                  <i>Usually</i>
                </small>
              </h2>
              <div class="description">经常逛的技术相关网站</div>
            </div>
          </header>
          <div class="section-content">
            <div class="row usually">
              <div class="col-lg-4 col-md-6">
                <a href="https://github.com/Shiyanping" target="_blank" title="https://github.com/Shiyanping" class="item">
                  <i class="fa fa-github"></i>
                  <h3 class="text-light">GitHub</h3>
                  <p>分享一些自己的小作品，主要用于查看别人开源的库</p>
                </a>
              </div>
              <div class="col-lg-4 col-md-6">
                <a href="https://www.jianshu.com/u/41e82a22ff46" target="_blank" title="https://www.jianshu.com/u/41e82a22ff46" class="item">
                  <i class="fa fa-github"></i>
                  <h3 class="text-light">简书</h3>
                  <p>与志同道合的小伙伴分享知识</p>
                </a>
              </div>
              <div class="col-lg-4 col-md-6">
                <a href="https://juejin.im/user/59c27af36fb9a00a5831832e" target="_blank" title="https://juejin.im/user/59c27af36fb9a00a5831832e" class="item">
                  <i class="fa fa-github"></i>
                  <h3 class="text-light">掘金</h3>
                  <p>搜索解决一些问题，探索新奇的技术</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section no-print">
        <div class="container">
          <div class="section-bg section-header-bg"></div>
          <div class="section-bg section-content-bg"></div>
          <header class="header">
            <div class="content-box">
              <h2 class="title">联系&nbsp;/&nbsp;
                <small>
                  <i>Contact</i>
                </small>
              </h2>
              <div class="description">通过这些信息可以联系到我</div>
            </div>
          </header>
          <div class="section-content">
            <div class="contact">
              <div class="row">
                <div class="col-md-6 col-lg-3 contact-bottom">
                  <div class="item">
                    <h4>Phone</h4>
                    <div class="info">13260298521</div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 contact-bottom">
                  <div class="item">
                    <h4>QQ</h4>
                    <div class="info">594388036</div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 contact-bottom">
                  <div class="item">
                    <h4>Location</h4>
                    <div class="info">Beijing·China</div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 contact-bottom">
                  <a href="mailto:594388036@qq.com" class="item">
                    <h4>Email</h4>
                    <div class="info">594388036@qq.com</div>
                  </a>
                </div>
              </div>
            </div>
            <div class="name-slogan">
              <h2 class="wow inShow">
                <span class="text-light">yanping</span>&nbsp;Shi
              </h2>
              <div data-wow-delay="0.05s" class="description wow inShow">努力成为卓越并且专业的工程师（Ctrl+p可以印本简历，打印时显示真名）</div>
            </div>
          </div>
        </div>
      </section>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      loading: false
    };
  }
};
</script>
