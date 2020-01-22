(function(e){function t(t){for(var n,i,r=t[0],l=t[1],c=t[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);h&&h(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/lsrhs-chemsite/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var h=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("8a23"),o=a.n(n);o.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"LSRHS_ChemSite"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{to:t.to}},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.name))])],1)],1)})),1)],1),a("v-app-bar",{staticClass:"top-app-bar",attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"top-app-bar-icon",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("LSRHS Chemistry 2")])],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{staticClass:"footer-background",attrs:{app:""}},[a("span",{staticClass:"white--text"},[e._v("© 2019")])])],1)},s=[],i={name:"App",data:function(){return{drawer:null,items:[{id:1,name:"Home",to:"/"},{id:2,name:"Syllabus",to:"/syllabus/home"},{id:3,name:"Homework",to:"/homework"},{id:4,name:"Resources",to:"/resources/home"},{id:5,name:"Contact",to:"/contact"}]}}},r=i,l=(a("034f"),a("2877")),c=a("6544"),h=a.n(c),u=a("7496"),m=a("40dc"),p=a("5bc1"),d=a("a523"),v=a("a75b"),f=a("553a"),b=a("8860"),_=a("da13"),y=a("5d23"),w=a("f774"),g=a("2a7f"),C=Object(l["a"])(r,o,s,!1,null,null,null),k=C.exports;h()(C,{VApp:u["a"],VAppBar:m["a"],VAppBarNavIcon:p["a"],VContainer:d["a"],VContent:v["a"],VFooter:f["a"],VList:b["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VNavigationDrawer:w["a"],VToolbarTitle:g["a"]});var x=a("f309");n["a"].use(x["a"]);var S=new x["a"]({theme:{themes:{light:{primary:"#333333",secondary:"#303030",accent:"#8c9eff",error:"#b71c1c"}}}}),E=a("8c4f"),P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home d-flex flex-column",attrs:{id:"home"}},[a("h1",[e._v("Welcome to the Chem 2 Homepage")]),a("div",[a("p",[e._v('Feel free to browse the various units of this site by using the "syllabus" link on the left.')])])])}],V={name:"Home"},O=V,j=Object(l["a"])(O,P,T,!1,null,null,null),I=j.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"syllabus-home",attrs:{id:"syllabus-home"}},[a("v-tabs",{attrs:{"center-active":""}},[a("v-tab",[e._v("Overview")]),a("v-tab",[e._v("Scientific Method")]),a("v-tab",[e._v("Atomic Theory")]),a("v-tab",[e._v("KMT/Glasses")]),a("v-tab",[e._v("Rxn Rates")]),a("v-tab",[e._v("Types of Bonds")]),a("v-tab",[e._v("Intermolecular")]),a("v-tab",[e._v("Formulas and Equations")]),a("v-tab",[e._v("Measurement")]),a("v-tab",[e._v("Moles")]),a("v-tab-item",[a("v-card",{staticClass:"pa-5"},[a("h2",[e._v("Chem 1 Syllabus Overview")]),a("p",{staticClass:"col-xs-12 col-sm-5"},[e._v("The main website for the school contains a web page which has detailed notes on the content of this course. This syllabus was designed by several teachers in collaboration and is meant to be a guide to the essential course content. It should not be read as an exact map of what topics will be covered in what order, so there may be some differences that you notice between the order of topics on this site and the order presented in that document.")])])],1),a("v-tab-item",[a("v-card",[a("ScientificMethod")],1)],1)],1)],1)},H=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pa-5"},[a("h3",{staticClass:"heading pa-5"},[e._v("Scientific Method")]),a("ol",{attrs:{type:"I"}},[a("li",[a("h4",{staticClass:"pa-3"},[e._v("Intro")]),a("ol",{attrs:{type:"i"}},[a("li",[a("v-expansion-panels",{attrs:{flat:"",hover:"",focusable:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"pl-0"},[a("span",{staticClass:"underline"},[e._v("Welcome to Chem 2! Your first assignment is to give me some information about you.")])]),a("v-expansion-panel-content",[a("h5",[e._v("Please provide the following information on a separate sheet of paper:")]),a("ol",[a("li",[e._v("Name")]),a("li",[e._v("Code name (This can be anything of your choosing (to a limit) and will be used when posting your homework grades.)")]),a("li",[e._v("Password (Used for accessing your detailed grade information.)")]),a("li",[e._v("Book #")]),a("li",[e._v("Email")]),a("li",[e._v("Phone #")]),a("li",[e._v("Do you have a computer at home?")]),a("li",[e._v("What kind?")]),a("li",[e._v("Do you have an internet connection?")]),a("li",[e._v("Hobbies")]),a("li",[e._v("Musical interests (I have a special interest in music and I'm always interested to hear what you like to listen to. What kind of music do you like and if you could only suggest one album for me to listen to, which would it be?)")]),a("li",[e._v("What do you want to do with your life?")]),a("li",[e._v("Two things I should know (Is there anything that you think I should know about you so that I can help you learn in the best possible way? Are there things in your life that might affect your performance in class that you would want me to know about? This information will stay strictly confidential.)")]),a("li",[e._v("A story (Yes, a story. It can be anything that you like, fact or fiction, some weird dream, your fears or hopes for chemistry class, what you did for summer vacation, your most embarrassing moment, anything.)")])])])],1)],1)],1),e._m(0),e._m(1),e._m(2),a("li",[a("v-expansion-panels",{attrs:{flat:"",hover:"",focusable:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"pa-0"},[a("span",{staticClass:"underline"},[e._v("What is chemistry?")])]),a("v-expansion-panel-content",[a("ol",{attrs:{type:"i"}},[a("li",[e._v("An "),a("a",{staticClass:"link",attrs:{href:"http://levity.com/alchemy/home.html",target:"_blank",rel:"noopener"}},[e._v("alchemist")]),e._v(' recipe: (from "Chemistry" by Masterton, Slowinski, and Walford) '),a("blockquote",{staticClass:"blockquote"},[e._v(' "Take all the mineral salts there are, also all salts of animal and vegetable origin. Add all the metals and minerals, omitting none. Take two parts of the salts and grate in one part of the metals and minerals. Melt this in a crucible, forming a mass that reflects the essence of the world in all its colors. Pulverize this and pour vinegar over it. Pour off the red liquid into English wine bottles, filling them half-full. Seal them with the bladder of an ox (not that of a pig), Punch a hole in the top with a coarse needle. Put the bottles in hot sand for three months. Vapor will escape through the hole in the top, leaving a red powder, ..." ')])]),a("li",[e._v("Why might it be hard to reproduce the alchemist's experiment as described above? Be specific.")]),a("li",[e._v("What do you think of when you hear the word chemistry? What is chemistry?")]),a("li",[e._v("Chemistry (a definition): the study of substances using the scientific method to understand the relationship between what can be observed in experiments and the underlying atoms and molecules which are too small to be seen.")])])])],1)],1)],1),a("li",[e._v("Set up lab drawers.")])])]),e._m(3)])])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"handout"},[e._v("Handout:")]),e._v(" "),a("a",{staticClass:"link",attrs:{href:"/sci_method/notesSciMethod.pdf",target:"_blank",rel:"noopener"}},[e._v(" Text Notes for this Unit")]),e._v(", "),a("a",{staticClass:"link",attrs:{href:"/sci_method/Expectations.pdf",target:"_blank",rel:"noopener"}},[e._v("Expectations")]),e._v(" and "),a("a",{staticClass:"link",attrs:{href:"/sci_method/LatePass1.pdf",target:"_blank",rel:"noopener"}},[e._v("Late Passes")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"font-weight-bold"},[e._v("Demo:")]),e._v(" Gummy Bear Safety")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"handout"},[e._v("Lab: ")]),e._v(" "),a("a",{staticClass:"link",attrs:{href:"/sci_method/Gold_Penny_Experiment.pdf",target:"_blank",rel:"noopener"}},[e._v(" Alchemist's Dream Come True (sort of)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("h4",{staticClass:"pa-3"},[e._v("Doing Science")])])}],W={name:"ScientificMethod",methods:{}},L=W,R=(a("67af"),a("cd55")),B=a("49e2"),D=a("c865"),q=a("0393"),N=Object(l["a"])(L,$,A,!1,null,"48f52992",null),F=N.exports;h()(N,{VExpansionPanel:R["a"],VExpansionPanelContent:B["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:q["a"]});var G={name:"SyllabusHome",components:{ScientificMethod:F},data:function(){return{}},methods:{}},J=G,U=a("b0af"),Y=a("71a3"),z=a("c671"),K=a("fe57"),Q=Object(l["a"])(J,M,H,!1,null,null,null),X=Q.exports;h()(Q,{VCard:U["a"],VTab:Y["a"],VTabItem:z["a"],VTabs:K["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"homework",attrs:{id:"homework"}},[e._v(" Homework ")])},ee=[],te={name:"Homework"},ae=te,ne=Object(l["a"])(ae,Z,ee,!1,null,null,null),oe=ne.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"resources-home",attrs:{id:"resources-home"}},[e._v(" Resources Home ")])},ie=[],re={name:"ResourcesHome"},le=re,ce=Object(l["a"])(le,se,ie,!1,null,null,null),he=ce.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact",attrs:{id:"contact"}},[e._v(" Contact ")])},me=[],pe={name:"Contact"},de=pe,ve=Object(l["a"])(de,ue,me,!1,null,null,null),fe=ve.exports,be=[{path:"/",component:I},{path:"/syllabus/home",component:X},{path:"/homework",component:oe},{path:"/resources/home",component:he},{path:"/contact",component:fe}];n["a"].config.productionTip=!1,n["a"].use(E["a"]);var _e=new E["a"]({routes:be});new n["a"]({vuetify:S,router:_e,render:function(e){return e(k)}}).$mount("#app")},"67af":function(e,t,a){"use strict";var n=a("8c50"),o=a.n(n);o.a},"8a23":function(e,t,a){},"8c50":function(e,t,a){}});
//# sourceMappingURL=app.8ee52df3.js.map