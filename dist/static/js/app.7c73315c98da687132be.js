webpackJsonp([1],{"+Lvt":function(t,e,s){"use strict";function a(t){s("o83W")}var n=s("k1t6"),r=s("tzgz"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);e.a=u.exports},"/8vw":function(t,e,s){"use strict";s.d(e,"b",function(){return a}),s.d(e,"c",function(){return n});var a=function(t,e){(0,t.commit)("ADD_STUDENT",e)},n=function(t,e){(0,t.commit)("ADD_STUDENTS",e)},r=function(t,e){(0,t.commit)("EDIT_STUDENT",e)},i=function(t,e){(0,t.commit)("DELETE_STUDENT",e)},o=function(t,e){(0,t.commit)("SET_SELECTED_STUDENT",e)};e.a={add_student:a,add_students:n,edit_student:r,delete_student:i,set_selected_student:o}},"0z3G":function(t,e,s){"use strict";function a(t){s("YBwU")}var n=s("uwf/"),r=s("KpET"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);e.a=u.exports},"1E7B":function(t,e,s){"use strict";function a(t){s("g/VE")}var n=s("vi2L"),r=s("Mdk8"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);e.a=u.exports},"2RXj":function(t,e){},"5vTn":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box box-danger"},[s("div",{staticClass:"box-header with-border"},[s("h3",{staticClass:"box-title"},[t._v("Latest Members")]),t._v(" "),s("div",{staticClass:"box-tools pull-right"},[s("span",{staticClass:"label label-danger"},[t._v(t._s(t.students.length)+" New Members")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"box-body no-padding"},[s("ul",{staticClass:"users-list clearfix"},t._l(t.students,function(e){return s("li",[s("img",t._b({attrs:{src:e.url,alt:"User Image"}},"img",e,!1)),t._v(" "),s("router-link",t._b({staticClass:"users-list-name",attrs:{to:{name:"viewStudent",params:{id:e._id}}}},"router-link",e,!1),[t._v(t._s(e.name))]),t._v(" "),s("span",t._b({staticClass:"users-list-date"},"span",e,!1),[t._v(t._s(e.course))])],1)}))]),t._v(" "),s("div",{staticClass:"box-footer text-center"})])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[s("i",{staticClass:"fa fa-minus"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[s("i",{staticClass:"fa fa-times"})])}],r={render:a,staticRenderFns:n};e.a=r},"7Ew/":function(t,e,s){"use strict";function a(t){s("cjxV")}var n=s("Gsiu"),r=s("5vTn"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);e.a=u.exports},"8Ji+":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box box-primary"},[t._m(0),t._v(" "),s("div",{staticClass:"box-body"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"Enter Student's Name"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Course")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.course,expression:"course"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1",placeholder:"Enter Course"},domProps:{value:t.course},on:{input:function(e){e.target.composing||(t.course=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Level")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"Enter Student's Level"},domProps:{value:t.level},on:{input:function(e){e.target.composing||(t.level=e.target.value)}}})]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"box-footer"},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.showConfirm()}}},[t._v("Submit")])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-header with-border"},[s("h3",{staticClass:"box-title"},[t._v("Quick Edit Student")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputFile"}},[t._v("Select Avatar")]),t._v(" "),s("input",{attrs:{type:"file",id:"exampleInputFile"}}),t._v(" "),s("p",{staticClass:"help-block"})])}],r={render:a,staticRenderFns:n};e.a=r},BgmV:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"main-sidebar"},[s("section",{staticClass:"sidebar"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("ul",{staticClass:"sidebar-menu"},[s("li",{staticClass:"header"},[t._v("MAIN NAVIGATION")]),t._v(" "),s("li",{staticClass:"active"},[s("router-link",{attrs:{to:"/home"}},[s("i",{staticClass:"fa fa-user"}),t._v(" "),s("span",[t._v("Students")])])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/create"}},[s("i",{staticClass:"fa fa-user-plus"}),t._v(" "),s("span",[t._v("Create New Student")])])],1)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-panel"},[s("div",{staticClass:"pull-left image"},[s("img",{staticClass:"img-circle",attrs:{src:"/static/img/stock/user4-128x128.jpg",alt:"User Image"}})]),t._v(" "),s("div",{staticClass:"pull-left info"},[s("p",[t._v("Chidume Nnamdi")]),t._v(" "),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-circle text-success"}),t._v(" Online")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"sidebar-form",attrs:{action:"#",method:"get"}},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",name:"q",placeholder:"Search..."}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-flat",attrs:{type:"submit",name:"search",id:"search-btn"}},[s("i",{staticClass:"fa fa-search"})])])])])}],r={render:a,staticRenderFns:n};e.a=r},Cz8s:function(t,e,s){"use strict";var a=s("wqBJ"),n=s("DuIW"),r=s("VU/8"),i=r(a.a,n.a,null,null,null);e.a=i.exports},DuIW:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"main-header"},[s("a",{staticClass:"logo",attrs:{href:"index2.html"}},[s("span",{staticClass:"logo-mini"},[s("b",[t._v("S")]),t._v("IR")]),t._v(" "),s("span",{staticClass:"logo-lg"},[s("b",[t._v("STUDENT INFORMATION")]),t._v(" RESOURCE")])]),t._v(" "),s("nav",{staticClass:"navbar navbar-static-top"},[s("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"offcanvas",role:"button"}},[s("span",{staticClass:"sr-only"},[t._v("Toggle navigation")])])])])}],r={render:a,staticRenderFns:n};e.a=r},EzBk:function(t,e,s){"use strict";function a(t){s("zDRI")}var n=s("Fcjt"),r=s("BgmV"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);e.a=u.exports},Fcjt:function(t,e,s){"use strict";e.a={name:"sidemenu"}},Gsiu:function(t,e,s){"use strict";var a=s("/8vw"),n=s("mtWM"),r=s.n(n);e.a={name:"listStudents",vuex:{getters:{students:function(t){return t.students}},actions:{add_student:a.b,add_students:a.c}},computed:{students:function(){return this.$store.state.students}},mounted:function(){this.addSt()},data:function(){return{tudents:this.$store.state.students,data_url:""}},methods:{addSt:function(){var t=this;r()({method:"GET",url:this.data_url+"/api/students",data:""}).then(function(e){t.$store.commit("ADD_STUDENTS",e.data)})}}}},JNYo:function(t,e,s){"use strict";function a(t){s("2RXj")}var n=s("Ox7R"),r=s("8Ji+"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);e.a=u.exports},K5Vt:function(t,e){},KpET:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("top"),t._v(" "),s("sidebar"),t._v(" "),s("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),s("section",{staticClass:"content"},[s("router-view")],1)]),t._v(" "),s("bottom")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"content-header"},[s("h1",[t._v("\r\n        Student's Information Resource\r\n        "),s("small",[t._v("Control panel")])])])}],r={render:a,staticRenderFns:n};e.a=r},M93x:function(t,e,s){"use strict";function a(t){s("wcE0")}var n=s("xJD8"),r=s("VWwq"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);e.a=u.exports},Mdk8:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box box-primary"},[t._m(0),t._v(" "),s("div",{staticClass:"box-body"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"Enter Student's Name"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Course")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.course,expression:"course"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1",placeholder:"Enter Course"},domProps:{value:t.course},on:{input:function(e){e.target.composing||(t.course=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Level")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"Enter Student's Level"},domProps:{value:t.level},on:{input:function(e){e.target.composing||(t.level=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputFile"}},[t._v("Select Avatar")]),t._v(" "),s("input",{attrs:{type:"file",id:"exampleInputFile"},on:{change:function(e){t.preview(e.target.files)}}}),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.saveStudent()}}},[t._v("Submit")])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-header with-border"},[s("h3",{staticClass:"box-title"},[t._v("Quick Scaffold New Student")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"help-block"},[s("img",{attrs:{src:"",id:"previewImg"}})])}],r={render:a,staticRenderFns:n};e.a=r},N23o:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),r=s("YaEn"),i=s("YtJ0"),o=s("9JMe"),u=(s.n(o),s("f1Fh")),c=s.n(u);a.a.config.productionTip=!1,a.a.use(c.a),r.a.beforeEach(function(t,e,s){s()}),new a.a({el:"#app",store:i.a,router:r.a,template:"<App/>",components:{App:n.a}})},OYXZ:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"main-footer"},[s("div",{staticClass:"pull-right hidden-xs"},[s("b",[t._v("Version")]),t._v(" 0.0.1\n  ")]),t._v(" "),s("strong",[t._v("Copyright © 2017 "),s("a",{attrs:{href:"https://twitter.com/ngArchangel"}},[t._v("Chidume Nnamdi")]),t._v(".")]),t._v(" All rights\n  reserved.\n")])}],r={render:a,staticRenderFns:n};e.a=r},Ox7R:function(t,e,s){"use strict";var a=s("//Fk"),n=s.n(a),r=(s("/8vw"),s("mtWM")),i=s.n(r);e.a={name:"editStudent",data:function(){return{username:this.$store.state.selectedStudent.name,level:this.$store.state.selectedStudent.level,course:this.$store.state.selectedStudent.course,data_url:""}},computed:{student:function(){return this.$store.state.selectedStudent}},mounted:function(){var t=this.$route;this.$store.commit("SET_SELECTED_STUDENT",t.params.id)},methods:{editUser:function(){var t=this;i.a.put(this.data_url+"/api/students/"+this.$store.state.selectedStudent._id,{name:this.username,course:this.course,level:this.level}).then(function(e){t.$swal("Done","","success"),t.$store.dispatch("delete_student",{_id:t.$store.state.selectedStudent._id,name:t.$store.state.selectedStudent.username,course:t.$store.state.selectedStudent.course,level:t.$store.state.selectedStudent.level}),t.$store.dispatch("add_student",{_id:t.$store.state.selectedStudent._id,name:t.username,course:t.course,level:t.level})})},showConfirm:function(){var t=this;this.$swal({title:"You are editing "+this.username,text:"Continue?",type:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){return new n.a(function(e,s){t.editUser(),e()})}}).then(function(){},function(e){"cancel"==e&&t.$swal("Cancelled","","error")})}}}},"UTg/":function(t,e,s){"use strict";var a={ADD_STUDENT:function(t,e){t.students.push(e)},ADD_STUDENTS:function(t,e){t.students=e},EDIT_STUDENT:function(t,e){t.selectedStudent=e},DELETE_STUDENT:function(t,e){t.students.filter(function(t,s,a){return t._id!=e._id})},SET_SELECTED_STUDENT:function(t,e){t.students.forEach(function(s,a){s._id==e&&(t.selectedStudent=s)},this)}};e.a=a},V47u:function(t,e,s){"use strict";function a(t){s("N23o")}var n=s("ZH5e"),r=s("h6fu"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);u.exports},VWwq:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},YBwU:function(t,e){},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),r=(s("qSdX"),s("V47u"),s("0z3G")),i=s("7Ew/"),o=s("1E7B"),u=s("JNYo"),c=s("+Lvt");a.a.use(n.a),e.a=new n.a({mode:"history",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"Dashboard",redirect:"/home",component:r.a,children:[{path:"home",name:"listStudents",component:i.a},{path:"edit/:id",component:u.a,name:"editStudent"},{path:"create",name:"createStudent",component:o.a},{path:"view/:id",name:"viewStudent",component:c.a}]}]})},YtJ0:function(t,e,s){"use strict";var a=s("7+uW"),n=s("NYxO"),r=s("UTg/"),i=s("/8vw");a.a.use(n.a);var o={students:[{}],selectedStudent:{}};e.a=new n.a.Store({state:o,mutations:r.a,actions:i.a})},ZH5e:function(t,e,s){"use strict";e.a={name:"full"}},ce18:function(t,e,s){"use strict";e.a={name:"footer"}},cjxV:function(t,e){},"g/VE":function(t,e){},h6fu:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},n=[],r={render:a,staticRenderFns:n};e.a=r},k1t6:function(t,e,s){"use strict";var a=s("//Fk"),n=s.n(a),r=(s("/8vw"),s("mtWM")),i=s.n(r);e.a={name:"viewStudent",data:function(){return{studen:this.$route.params.id,data_url:""}},computed:{student:function(){return this.$store.state.selectedStudent}},mounted:function(){var t=this.$route;this.$store.commit("SET_SELECTED_STUDENT",t.params.id)},methods:{deleteUser:function(){var t=this;this.$swal({title:"You are deleting "+this.$store.state.selectedStudent.name,text:"Continue?",type:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){return new n.a(function(e,s){i.a.delete(t.data_url+"/api/students/"+t.$store.state.selectedStudent._id,t.$store.state.selectedStudent).then(function(e){t.$store.dispatch("delete_student",t.$store.state.selectedStudent),t.$swal("Done","","success")}),e()})}}).then(function(){},function(e){"cancel"==e&&t.$swal("Cancelled","","error")})}}}},mzkE:function(t,e,s){"use strict";function a(t){s("uwEz")}var n=s("ce18"),r=s("OYXZ"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,null,null);e.a=u.exports},o83W:function(t,e){},pMZz:function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},qSdX:function(t,e,s){"use strict";function a(t){s("K5Vt")}var n=s("pMZz"),r=s("r9tg"),i=s("VU/8"),o=a,u=i(n.a,r.a,o,"data-v-e1793856",null);u.exports},r9tg:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],r={render:a,staticRenderFns:n};e.a=r},tzgz:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 col-lg-6"},[s("div",{staticClass:"box box-widget widget-user"},[s("div",{staticClass:"widget-user-header bg-aqua-active"},[s("h3",{staticClass:"widget-user-username"},[t._v(t._s(t.student.name))]),t._v(" "),s("h5",{staticClass:"widget-user-desc"},[t._v("Student")])]),t._v(" "),s("div",{staticClass:"widget-user-image"},[s("img",{staticClass:"img-circle",attrs:{src:t.student.url,alt:"User Avatar"}})]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4 border-right"},[s("div",{staticClass:"description-block"},[s("h5",{staticClass:"description-header"},[t._v(t._s(t.student.course))]),t._v(" "),s("span",{staticClass:"description-text"},[t._v("COURSE")])])]),t._v(" "),s("div",{staticClass:"col-sm-4 border-right"},[s("div",{staticClass:"description-block"},[s("h5",{staticClass:"description-header"},[t._v(t._s(t.student.level))]),t._v(" "),s("span",{staticClass:"description-text"},[t._v("LEVEL")])])]),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"description-block"},[s("h5",{staticClass:"description-header"},[t._v(t._s(t.student._id))]),t._v(" "),s("span",{staticClass:"description-text"},[t._v("REG. NO")])])])]),t._v(" "),s("router-link",t._b({staticClass:"btn",attrs:{to:{name:"editStudent",params:{id:t.student._id}}}},"router-link",t.student,!1),[t._v("Edit "+t._s(t.student.name))]),t._v(" "),s("a",{staticClass:"btn pull-right",attrs:{href:"javascript:void(0);"},on:{click:function(e){t.deleteUser()}}},[t._v("Delete "+t._s(t.student.name))])],1)])]),t._v(" "),t._m(0)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border"},[s("h3",{staticClass:"box-title"},[t._v("About Me")])]),t._v(" "),s("div",{staticClass:"box-body"},[s("strong",[s("i",{staticClass:"fa fa-book margin-r-5"}),t._v(" Education")]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v("\n          B.S. in Computer Science from the University of Tennessee at Knoxville\n        ")]),t._v(" "),s("hr"),t._v(" "),s("strong",[s("i",{staticClass:"fa fa-map-marker margin-r-5"}),t._v(" Location")]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v("Malibu, California")]),t._v(" "),s("hr"),t._v(" "),s("strong",[s("i",{staticClass:"fa fa-pencil margin-r-5"}),t._v(" Skills")]),t._v(" "),s("p",[s("span",{staticClass:"label label-danger"},[t._v("UI Design")]),t._v(" "),s("span",{staticClass:"label label-success"},[t._v("Coding")]),t._v(" "),s("span",{staticClass:"label label-info"},[t._v("Javascript")]),t._v(" "),s("span",{staticClass:"label label-warning"},[t._v("PHP")]),t._v(" "),s("span",{staticClass:"label label-primary"},[t._v("Node.js")])]),t._v(" "),s("hr"),t._v(" "),s("strong",[s("i",{staticClass:"fa fa-file-text-o margin-r-5"}),t._v(" Notes")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.")])])])])}],r={render:a,staticRenderFns:n};e.a=r},uwEz:function(t,e){},"uwf/":function(t,e,s){"use strict";var a=s("mzkE"),n=s("EzBk"),r=s("Cz8s");e.a={name:"dashboard",components:{Sidebar:n.a,Top:r.a,Bottom:a.a},computed:{students:function(){return this.$store.state.students}}}},vi2L:function(t,e,s){"use strict";var a=s("//Fk"),n=s.n(a),r=(s("/8vw"),s("mtWM")),i=s.n(r);e.a={name:"createStudent",data:function(){return{username:"",level:"",course:"",image:null,data_url:""}},methods:{saveStudent:function(){var t=this,e=new FormData;e.append("name",this.username),e.append("image",this.image),e.append("course",this.course),e.append("level",this.level),this.$swal({title:"You are creating "+this.username,text:"Continue?",type:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){return new n.a(function(s,a){i.a.post(t.data_url+"/api/students",e).then(function(e){t.$store.dispatch("add_student",{name:t.username,course:t.course,level:t.level}),t.$swal("Done","","success")}),s()})}}).then(function(){},function(e){"cancel"==e&&t.$swal("Cancelled","","error")})},preview:function(t){this.image=t[0];var e=new FileReader;e.onload=function(t){document.getElementById("previewImg").src=t.target.result},e.readAsDataURL(t[0])}}}},wcE0:function(t,e){},wqBJ:function(t,e,s){"use strict";e.a={name:"header",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},xJD8:function(t,e,s){"use strict";var a=s("YtJ0");e.a={name:"app",store:a.a}},zDRI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7c73315c98da687132be.js.map