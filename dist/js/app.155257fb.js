(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/people-list/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"09ce":function(e,t,n){"use strict";var r=n("f351"),a=n.n(r);a.a},2408:function(e,t,n){"use strict";var r=n("b1da"),a=n.n(r);a.a},3805:function(e,t,n){},"461a":function(e,t,n){"use strict";var r=n("5662"),a=n.n(r);a.a},"4f40":function(e,t,n){},5321:function(e,t,n){},5662:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexWrapper columnDirection",attrs:{id:"app"}},[n("AppHeader"),n("div",{staticClass:"content flexWrapper columnDirection"},[n("router-view")],1),n("AppFooter")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"headerName"},[n("Logo"),n("div",{staticClass:"headerText"},[e._v("forbes 400")])],1),n("div",{staticClass:"nav"},[n("div",{staticClass:"navLink"},[n("router-link",{staticClass:"withoutLink",attrs:{to:"/"}},[e._v("home")])],1),n("div",{staticClass:"navLink"},[n("router-link",{staticClass:"withoutLink",attrs:{to:"/createEmail"}},[e._v("crete email")])],1)])])},i=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circle"},[n("span",{staticClass:"symbol"},[e._v("F")])])}],u={name:"Logo"},p=u,f=(n("461a"),n("2877")),d=Object(f["a"])(p,c,l,!1,null,"09e601d4",null),m=d.exports,v={components:{Logo:m},name:"AppHeader"},h=v,b=(n("7432"),Object(f["a"])(h,o,i,!1,null,"6fd0b136",null)),_=b.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",[e._v("© Copyright 2020 by Lappo")])])}],k={name:"AppFooter"},C=k,y=(n("2408"),Object(f["a"])(C,g,x,!1,null,"75d109aa",null)),O=y.exports,P={name:"App",components:{AppHeader:_,AppFooter:O},beforeCreate:function(){this.$store.dispatch("loadForbes400"),this.$store.dispatch("loadSelectedPeopleIds")}},j=P,w=(n("034f"),Object(f["a"])(j,a,s,!1,null,null,null)),I=w.exports,M=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.person?n("div",{staticClass:"detailContentWrapper"},[n("div",[n("img",{attrs:{src:e.person.squareImage}})]),n("div",{staticClass:"detailInfo flexWrapper columnDirection"},[n("LabelValue",{attrs:{label:"name:"}},[e._v(e._s(e.person.personName))]),n("LabelValue",{attrs:{label:"rank:"}},[e._v(e._s(e.person.rank))]),n("LabelValue",{attrs:{label:"source:"}},[e._v(e._s(e.person.source))]),n("LabelValue",{attrs:{label:"email:"}},[e._v(e._s(e.person.email))]),n("hr",{attrs:{size:"4"}}),n("ul",{staticClass:"summary"},e._l(e.person.bios,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)],1)]):e._e()},W=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"labelValueWrapper"},[n("div",{staticClass:"label"},[e._v(e._s(e.label))]),n("div",{staticClass:"value"},[e._t("default")],2)])},L=[],E={name:"LableValue",props:{label:String}},N=E,D=(n("c91a"),Object(f["a"])(N,$,L,!1,null,"dd786b92",null)),T=D.exports,A={name:"Details",components:{LabelValue:T},computed:{person:function(){return this.$store.getters["personById"](this.$route.params.peopleId)}}},B=A,F=(n("833b"),Object(f["a"])(B,S,W,!1,null,null,null)),V=F.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexWrapper columnDirection"},[n("div",{staticClass:"flexWrapper columnDirection"},[n("Grid",{attrs:{headers:e.headers,items:e.peopleList},scopedSlots:e._u([{key:"avatar",fn:function(t){var r=t.item;return[n("CircleCheckbox",{attrs:{checked:-1!==e.selectedPeopleIds.indexOf(r.uri)},on:{change:function(t){return e.onSelectedPerson(r)}}})]}},{key:"personName",fn:function(t){var r=t.item;return[n("router-link",{attrs:{to:{name:"details",params:{peopleId:r.uri}}}},[e._v(e._s(r.personName))])]}},{key:"finalWorth",fn:function(t){var n=t.item;return[e._v(e._s(e._f("formatWorth")(n.finalWorth)))]}}])})],1),n("div",{staticClass:"buttonsWrapper"},[n("button",{on:{click:e.onNextClick}},[e._v("next")])])])},G=[],H=n("5530"),J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",e._l(e.headers,(function(t){return n("th",{key:t.value,style:{width:t.width+"px"}},[e._v(e._s(t.text))])})),0)]),n("tbody",e._l(e.items,(function(t,r){return n("tr",{key:e.itemKey?t[e.itemKey]:r},e._l(e.headers,(function(r){return n("td",{key:r.value},[e._t(r.value,[e._v(e._s(t[r.value]))],{item:t})],2)})),0)})),0)])},K=[],q={name:"Grid",props:{headers:Array,items:Array,itemKey:String}},z=q,Q=(n("f34a"),Object(f["a"])(z,J,K,!1,null,"506b7b78",null)),U=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"container"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("change",t.target.checked)}}}),n("span",{staticClass:"checkmark"})])},Y=[],Z={name:"CircleCheckbox",props:{checked:Boolean}},ee=Z,te=(n("09ce"),Object(f["a"])(ee,X,Y,!1,null,"2b873e3e",null)),ne=te.exports,re=[{text:"avatar",value:"avatar",width:116},{text:"rank",value:"rank",width:50},{text:"name",value:"personName"},{text:"gender",value:"gender"},{text:"NET worth",value:"finalWorth"},{text:"source",value:"source"},{text:"email",value:"email"}],ae=n("2f62"),se={name:"Home",components:{Grid:U,CircleCheckbox:ne},data:function(){return{headers:re}},methods:{onSelectedPerson:function(e){this.$store.commit("toggleSelectPeopleById",e.uri)},onNextClick:function(){this.$router.push("/enterMessage")}},computed:Object(H["a"])({},Object(ae["b"])(["peopleList","selectedPeopleIds"]))},oe=se,ie=(n("e4f2"),Object(f["a"])(oe,R,G,!1,null,null,null)),ce=ie.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexWrapper columnDirection"},[n("Grid",{attrs:{headers:e.headers,items:e.peopleList},scopedSlots:e._u([{key:"avatar",fn:function(e){var t=e.item;return[n("img",{staticClass:"avatar",attrs:{src:t.squareImage}})]}},{key:"personName",fn:function(t){var r=t.item;return[n("router-link",{attrs:{to:{name:"details",params:{peopleId:r.uri}}}},[e._v(e._s(r.personName))])]}},{key:"finalWorth",fn:function(t){var n=t.item;return[e._v(e._s(e._f("formatWorth")(n.finalWorth)))]}}])})],1)},ue=[],pe={name:"Home",components:{Grid:U},data:function(){return{headers:re}},computed:Object(H["a"])({},Object(ae["b"])(["peopleList"]))},fe=pe,de=(n("cccb"),Object(f["a"])(fe,le,ue,!1,null,null,null)),me=de.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexWrapper columnDirection"},[n("div",{staticClass:"flexWrapper columnDirection"},[n("div",{staticClass:"flexWrapper columnDirection"},[n("div",{staticClass:"sectionTitle"},[e._v("selected people")]),n("ul",{staticClass:"flexWrapper columnDirection"},e._l(e.selectedPeoples,(function(t){return n("li",{key:t.uri},[e._v(e._s(t.personName))])})),0)]),n("hr"),n("div",{staticClass:"messageWrapper"},[n("div",{staticClass:"sectionTitle"},[e._v("Message")]),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{maxlength:e.messageMaxLength},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("div",[e._v(e._s(e.symbolCountText))])])])]),n("div",{staticClass:"buttonsWrapper"},[n("button",{on:{click:e.onBackClick}},[e._v("back")]),n("button",{on:{click:e.onNextClick}},[e._v("next")])])])},he=[],be=(n("99af"),"SelectedPeopleIds"),_e="https://forbes400.herokuapp.com/api/forbes400/",ge=200,xe={name:"EnterMessage",components:{},data:function(){return{messageMaxLength:ge}},methods:{onBackClick:function(){this.$router.push("/createEmail")},onNextClick:function(){this.$router.push("/confirmEmail")}},computed:Object(H["a"])(Object(H["a"])(Object(H["a"])({},Object(ae["b"])(["emailMessage"])),Object(ae["b"])({selectedPeoples:"getSelectedPeople"})),{},{message:{get:function(){return this.emailMessage},set:function(e){this.$store.commit("setEmailMessage",e)}},symbolCountText:function(){return"".concat(this.message.length," of ").concat(this.messageMaxLength)}})},ke=xe,Ce=(n("f384"),Object(f["a"])(ke,ve,he,!1,null,"7d2648b4",null)),ye=Ce.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexWrapper columnDirection"},[n("div",{staticClass:"flexWrapper columnDirection"},[n("div",{staticClass:"flexWrapper columnDirection"},[n("div",{staticClass:"sectionTitle"},[e._v("selected people")]),n("ul",{staticClass:"flexWrapper columnDirection"},e._l(e.selectedPeoples,(function(t){return n("li",{key:t.uri},[e._v(e._s(t.personName))])})),0)]),n("hr"),n("div",{staticClass:"messageWrapper"},[n("div",{staticClass:"sectionTitle"},[e._v("Message")]),n("div",{staticClass:"message"},[e._v(e._s(e.emailMessage))])])]),n("div",{staticClass:"buttonsWrapper"},[n("button",{on:{click:e.onBackClick}},[e._v("back")]),n("button",{on:{click:e.onSendClick}},[e._v("send")])])])},Pe=[],je={name:"EnterMessage",computed:Object(H["a"])(Object(H["a"])({},Object(ae["b"])(["emailMessage"])),Object(ae["b"])({selectedPeoples:"getSelectedPeople"})),methods:{onBackClick:function(){this.$router.push("/enterMessage")},onSendClick:function(){var e=this;this.$store.dispatch("sendMessage").then((function(){alert("message send succesed"),e.$router.push("/")}))}}},we=je,Ie=(n("ccfe"),Object(f["a"])(we,Oe,Pe,!1,null,"4c82099e",null)),Me=Ie.exports;r["a"].use(M["a"]);var Se=new M["a"]({routes:[{path:"/details/:peopleId",name:"details",component:V},{path:"/createEmail",component:ce},{path:"/enterMessage",component:ye},{path:"/confirmEmail",component:Me},{path:"*",component:me}]}),We=(n("d3b7"),n("96cf"),n("1da1")),$e=(n("d81d"),_e+"?limit=20"),Le=function(){var e=Object(We["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch($e);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.map((function(e){return e.email=e.uri+"@gmail.com",e})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee={loadForbes400:function(){var e=Object(We["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Le();case 3:return r=e.sent,n("setForbes400",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),loadSelectedPeopleIds:function(e){var t=e.commit,n=localStorage.getItem(be);n&&t("setSelectedPeolpelIds",JSON.parse(n))},sendMessage:function(){var e=Object(We["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,a={peopleIds:r.selectedPeopleIds,message:r.emailMessage},s=new Promise((function(e){setTimeout((function(){n("setEmailMessage",""),n("setSelectedPeolpelIds",[]),e(a)}),200)})),e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},Ne=(n("7db0"),n("c975"),{peopleList:function(e){return e.peopleList},selectedPeopleIds:function(e){return e.selectedPeopleIds},personById:function(e){return function(t){return e.peopleList.find((function(e){return e.uri===t}))}},emailMessage:function(e){return e.emailMessage},getSelectedPeople:function(e){return e.peopleList.filter((function(t){return-1!==e.selectedPeopleIds.indexOf(t.uri)}))}}),De=(n("a434"),{setForbes400:function(e,t){e.peopleList=t},setSelectedPeolpelIds:function(e,t){e.selectedPeopleIds=t},toggleSelectPeopleById:function(e,t){var n=e.selectedPeopleIds.indexOf(t);-1!==n?e.selectedPeopleIds.splice(n,1):e.selectedPeopleIds.push(t),localStorage.setItem(be,JSON.stringify(e.selectedPeopleIds))},setEmailMessage:function(e,t){e.emailMessage=t}}),Te={peopleList:[],selectedPeopleIds:[],emailMessage:""};r["a"].use(ae["a"]);var Ae=new ae["a"].Store({actions:Ee,getters:Ne,mutations:De,state:Te});r["a"].config.productionTip=!1,r["a"].filter("formatWorth",(function(e){return e?Math.floor(e/1e3)+"M":""})),new r["a"]({store:Ae,router:Se,render:function(e){return e(I)}}).$mount("#app")},"5ced":function(e,t,n){},7432:function(e,t,n){"use strict";var r=n("882e"),a=n.n(r);a.a},"833b":function(e,t,n){"use strict";var r=n("8b50"),a=n.n(r);a.a},"85ec":function(e,t,n){},"882e":function(e,t,n){},"8b50":function(e,t,n){},"9c72":function(e,t,n){},b1da:function(e,t,n){},bd2f:function(e,t,n){},c91a:function(e,t,n){"use strict";var r=n("3805"),a=n.n(r);a.a},cccb:function(e,t,n){"use strict";var r=n("5ced"),a=n.n(r);a.a},ccfe:function(e,t,n){"use strict";var r=n("5321"),a=n.n(r);a.a},e4f2:function(e,t,n){"use strict";var r=n("bd2f"),a=n.n(r);a.a},f34a:function(e,t,n){"use strict";var r=n("4f40"),a=n.n(r);a.a},f351:function(e,t,n){},f384:function(e,t,n){"use strict";var r=n("9c72"),a=n.n(r);a.a}});
//# sourceMappingURL=app.155257fb.js.map