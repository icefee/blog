webpackJsonp([1],{E51W:function(t,e){},Jmf6:function(t,e){},NHnr:function(t,e,n){"use strict";function a(t){n("Tdv9")}function o(t){n("Jmf6")}function s(t){n("quWz")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={name:"app",data:function(){return{open:!1,headTitle:"Home"}},methods:{toggle:function(){this.open=!this.open}},watch:{$route:function(t,e){this.headTitle=t.name,this.open=!1}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mu-appbar",{attrs:{title:t.headTitle}},[n("mu-icon-button",{attrs:{slot:"left",icon:"menu"},on:{click:t.toggle},slot:"left"}),t._v(" "),n("mu-icon-button",{attrs:{slot:"right",icon:"more_vert"},slot:"right"})],1),t._v(" "),n("mu-drawer",{attrs:{open:t.open,docked:!1},on:{close:t.toggle}},[n("mu-list",[n("mu-list-item",{attrs:{disabled:""}},[n("mu-avatar",{attrs:{size:80,src:"/static/img/avastar.png"}})],1),t._v(" "),n("mu-divider"),t._v(" "),n("mu-list-item",{attrs:{to:"/",title:"Home"}},[n("mu-icon",{attrs:{slot:"left",value:"home"},slot:"left"})],1),t._v(" "),n("mu-list-item",{attrs:{to:"/list",title:"Articles List"}},[n("mu-icon",{attrs:{slot:"left",value:"star"},slot:"left"})],1),t._v(" "),n("mu-list-item",{attrs:{to:"/about",title:"About"}},[n("mu-icon",{attrs:{slot:"left",value:"info"},slot:"left"})],1)],1)],1),t._v(" "),n("router-view")],1)},u=[],c={render:l,staticRenderFns:u},d=c,m=n("VU/8"),f=a,p=m(r,d,!1,f,null,null),v=p.exports,h=n("/ocq"),_={name:"Index"},b=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"layout"},[t._v("\n\tindex\n")])},g=[],x={render:b,staticRenderFns:g},T=x,A=n("VU/8"),E=A(_,T,!1,null,null,null),$=E.exports,w=n("mtWM"),H=n.n(w),J={getJson:function(t,e,n){H.a.get(t).then(e).catch(n)}},R={name:"List",data:function(){return{articles:[]}},created:function(){var t=this;J.getJson("/static/data/articles.json",function(e){200==e.status&&(t.articles=e.data.articles)},function(t){console.log(t)})}},W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articles"},t._l(t.articles,function(e){return n("mu-card",{key:e.id,attrs:{to:"/"}},[n("mu-card-title",{attrs:{title:e.title,subTitle:e.subTitle}}),t._v(" "),n("mu-card-text",[t._v(t._s(e.text))]),t._v(" "),n("mu-card-actions",[n("mu-raised-button",{attrs:{label:"Read More",to:"/content/"+e.id,primary:""}})],1)],1)}))},C=[],F={render:W,staticRenderFns:C},U=F,V=n("VU/8"),k=o,y=V(R,U,!1,k,"data-v-bbdd6268",null),L=y.exports,M={name:"Content",data:function(){return{content:""}},created:function(){var t=this,e=this.$route.params.articleId;J.getJson("/static/data/"+e+".json",function(e){200==e.status&&(t.content=e.data.content)},function(t){console.log(t)})}},j=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"article",domProps:{innerHTML:t._s(t.content)}})},q=[],z={render:j,staticRenderFns:q},I=z,D=n("VU/8"),N=s,P=D(M,I,!1,N,"data-v-0edb829a",null),O=P.exports,Q={name:"About"},B=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"about"},[t._v("\n\tabout\n")])},G=[],K={render:B,staticRenderFns:G},S=K,X=n("VU/8"),Y=X(Q,S,!1,null,null,null),Z=Y.exports;i.default.use(h.a);var tt=new h.a({routes:[{path:"/",name:"Home",component:$},{path:"/list",name:"Articles List",component:L},{path:"/content/:articleId",name:"Article",component:O},{path:"/about",name:"About",component:Z}]}),et=n("u64Q"),nt=n.n(et);n("E51W"),n("thDu");i.default.use(nt.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:tt,template:"<App/>",components:{App:v}})},Tdv9:function(t,e){},quWz:function(t,e){},thDu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.23aa4ce93ca837a6f509.js.map