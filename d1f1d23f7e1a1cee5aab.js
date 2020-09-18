(window.webpackJsonp=window.webpackJsonp||[]).push([[6,16],{101:function(e,t,a){"use strict";a.r(t);var i=a(58);a.d(t,"default",(function(){return i.a}))},107:function(e,t,a){"use strict";var i=a(82);a.n(i).a},108:function(e,t,a){"use strict";var i=a(83);a.n(i).a},109:function(e,t,a){"use strict";var i=a(84);a.n(i).a},110:function(e,t,a){"use strict";var i=a(85);a.n(i).a},111:function(e,t,a){"use strict";var i=a(86);a.n(i).a},112:function(e,t,a){"use strict";var i=a(87);a.n(i).a},129:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"examples"},[a("div",{staticClass:"container"},[a("p",{staticClass:"page__title examples__title"},[e._v("\n      Блок «Работы»\n    ")]),e._v(" "),e.exampleForm?a("example-form",{staticClass:"example-form__comp",attrs:{"is-editing":e.isEditing,example:e.editedExample},on:{cancel:e.cancel,"add-example":e.addExample,"edit-example":e.editExample}}):e._e(),e._v(" "),a("ul",{staticClass:"example__list"},[a("li",{staticClass:"example__item"},[a("square-btn",{attrs:{type:"square",title:"Добавить работу",disabled:e.exampleForm},on:{click:e.addFormHandler}})],1),e._v(" "),e._l(e.examples,(function(t){return a("li",{key:t.id,staticClass:"example__item"},[a("example",{attrs:{example:t,"cancel-editing":e.isEditing},on:{"edit-example":e.editExampleHandler,"delete-example":e.deleteExample}})],1)}))],2)],1)])};i._withStripped=!0;var n=a(0),r=a.n(n),s=a(1),l=a.n(s),o=a(18),c=a.n(o),p=a(67),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{class:{editing:e.isEditing},attrs:{simple:""}},[a("div",{staticClass:"example__top"},[a("div",{staticClass:"example__img-wrapper"},[a("img",{staticClass:"example__img",attrs:{src:e.coverPhoto}})]),e._v(" "),a("ul",{staticClass:"example__tags"},e._l(e.tags,(function(t,i){return a("li",{key:i,staticClass:"example__tag"},[e._v("\n        "+e._s(t)+"\n      ")])})),0)]),e._v(" "),a("div",{staticClass:"example__block"},[a("p",{staticClass:"example__title"},[e._v("\n      "+e._s(e.example.title)+"\n    ")]),e._v(" "),a("p",{staticClass:"example__description"},[e._v("\n      "+e._s(e.example.description)+"\n    ")]),e._v(" "),a("a",{staticClass:"example__link",attrs:{href:e.example.link,target:"_blank"}},[e._v(" "+e._s(e.example.link)+" ")]),e._v(" "),a("div",{staticClass:"example__btns"},[a("icon",{staticClass:"example__btn-edit",attrs:{symbol:"pencil",title:"Править"},on:{click:e.editHandler}}),e._v(" "),a("icon",{staticClass:"example__btn-delete",attrs:{symbol:"cross",title:"Удалить"},on:{click:function(t){return e.$emit("delete-example",e.example.id)}}})],1)])])};d._withStripped=!0;var u=a(68),m=a(58),f=a(5),_={components:{card:u.a,icon:m.a},props:{example:{type:Object,default:function(){return{title:null,photo:{},link:null,description:null}}},cancelEditing:{type:Boolean,default:!0}},data:function(){return{isEditing:!1}},computed:{tags:function(){return this.example.techs.trim().split(",")},coverPhoto:function(){return"".concat(f.BASE_URL,"/").concat(this.example.photo)}},watch:{isEditing:{handler:function(e){!this.cancelEditing},immediate:!0}},methods:{editHandler:function(){window.scrollTo({top:0,behavior:"smooth"}),this.isEditing=!0,this.$emit("edit-example",this.example)}}},v=(a(107),a(17)),h=Object(v.a)(_,d,[],!1,null,"3489bf65",null);h.options.__file="src/admin/components/example/example.vue";var x=h.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",[e.isEditing?a("p",{staticClass:"example-form__title",attrs:{slot:"title"},slot:"title"},[e._v("\n    Редактирование работы\n  ")]):a("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n    Добавление работы\n  ")]),e._v(" "),a("template",{slot:"content"},[a("validation-observer",{ref:"example-form",staticClass:"example-form",attrs:{tag:"div"}},[a("add-file",{staticClass:"example-form__add",style:{backgroundImage:"url('"+e.currentExample.preview+"')"},attrs:{"is-light":!!e.currentExample.preview,"is-editing":e.isEditing},on:{"add-file":e.addFile,"render-photo":e.renderPhoto}}),e._v(" "),a("div",{staticClass:"example-form__wrapper"},[a("label",{staticClass:"example-form__label",attrs:{for:"title"}},[e._v("Название")]),e._v(" "),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("app-input",{staticClass:"example-form__input",attrs:{id:"title","error-message":i[0]?"Не введено название":""},model:{value:e.currentExample.title,callback:function(t){e.$set(e.currentExample,"title",t)},expression:"currentExample.title"}})]}}])}),e._v(" "),a("label",{staticClass:"example-form__label",attrs:{for:"link"}},[e._v("Ссылка")]),e._v(" "),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("app-input",{staticClass:"example-form__input",attrs:{id:"link","error-message":i[0]?"Не введена ссылка":""},model:{value:e.currentExample.link,callback:function(t){e.$set(e.currentExample,"link",t)},expression:"currentExample.link"}})]}}])}),e._v(" "),a("label",{staticClass:"example-form__label",attrs:{for:"description"}},[e._v("Описание")]),e._v(" "),a("app-input",{staticClass:"example-form__input",attrs:{id:"description","field-type":"textarea"},model:{value:e.currentExample.description,callback:function(t){e.$set(e.currentExample,"description",t)},expression:"currentExample.description"}}),e._v(" "),a("label",{staticClass:"example-form__label"},[e._v("Добавление тэга")]),e._v(" "),a("tags-adder",{staticClass:"example-form__tags",attrs:{tags:e.currentExample.techs},on:{change:function(t){e.currentExample.techs=t}}}),e._v(" "),a("div",{staticClass:"example-form__btns"},[a("app-button",{attrs:{title:"Отмена",plain:""},on:{click:function(t){return e.$emit("cancel")}}}),e._v(" "),a("app-button",{staticClass:"example-form__btn",style:{paddingBottom:0,paddingTop:0},attrs:{title:"Сохранить"},on:{click:e.submitHandler}})],1)],1)],1)],1)],2)};g._withStripped=!0;var b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["add-file__wrapper",{hovered:e.hovered}]},[a("label",{staticClass:"add-file__label uploader",on:{dragover:e.handleDragOver,dragleave:function(t){e.hovered=!1},drop:e.addFile}},[a("p",{class:["add-file__title",{light:e.light}]},[e._v("\n      Перетащите или загрузите для загрузки изображения\n    ")]),e._v(" "),a("p",{class:["add-file__title","add-file__title--mob",{light:e.light}]},[e._v("\n      Добавьте изображение\n    ")]),e._v(" "),a("app-button",{staticClass:"add-file__btn",attrs:{title:"Загрузить","type-attr":"file","no-paddings":""},on:{change:e.addFile}}),e._v(" "),e.isEditing?a("app-button",{staticClass:"add-file__btn add-file__btn--mob",attrs:{title:"Изменить превью","type-attr":"file","no-paddings":"",plain:""},on:{change:e.addFile}}):a("app-button",{staticClass:"add-file__btn add-file__btn--mob",attrs:{title:"Загрузить файл","type-attr":"file","no-paddings":"",plain:""},on:{change:e.addFile}})],1)])};b._withStripped=!0;var E=a(7);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={components:{appButton:p.a},props:{isLight:{type:Boolean,default:!1},isEditing:{type:Boolean,default:!1}},data:function(){return{hovered:!1,light:!1}},watch:{isLight:{handler:function(e){e&&(this.light=!0)},immediate:!0}},methods:w(w({},Object(E.b)({showTooltip:"tooltip/show"})),{},{addFile:function(e){e.preventDefault();var t=e.dataTransfer?e.dataTransfer.files[0]:e.target.files[0];this.$emit("add-file",t),this.renderPhoto(t),this.hovered=!1},renderPhoto:function(e){var t=this,a=new FileReader;a.readAsDataURL(e),a.onloadend=function(){t.$emit("render-photo",a.result),t.light=!0},a.onerror=function(){t.showTooltip({text:"Изображение не было загружено",type:"error"})},a.onabort=function(){t.showTooltip({text:"Невозможно прочитать файл",type:"error"})}},handleDragOver:function(e){e.preventDefault(),this.hovered=!0}})},j=(a(108),Object(v.a)(O,b,[],!1,null,"b0a95e62",null));j.options.__file="src/admin/components/add-file/add-file.vue";var C=j.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tags-adder"},[a("app-input",{attrs:{title:""},on:{input:function(t){return e.$emit("change",e.currentTags)}},model:{value:e.currentTags,callback:function(t){e.currentTags=t},expression:"currentTags"}}),e._v(" "),a("ul",{staticClass:"tags-adder__list"},e._l(e.tagsArray,(function(t,i){return t.trim()?a("li",{key:""+t+i,staticClass:"tags-adder__item"},[a("tag",{attrs:{interactive:"",title:t},on:{click:function(a){return e.removeTag(t)}}})],1):e._e()})),0)],1)};k._withStripped=!0;var P=a(57),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["tag",{interactive:e.interactive}]},[a("span",{staticClass:"tag__title"},[e._v(" "+e._s(e.title)+" ")]),e._v(" "),e.interactive?a("icon",e._g({staticClass:"remove",attrs:{symbol:"cross",type:"button","interactive-btn":""}},e.$listeners)):e._e()],1)};T._withStripped=!0;var F={components:{icon:a(101).default},props:{title:{type:String,default:""},interactive:Boolean}},$=(a(109),Object(v.a)(F,T,[],!1,null,"77450145",null));$.options.__file="src/admin/components/tag/tag.vue";var S=$.exports,D={components:{appInput:P.a,tag:S},model:{prop:"tags",event:"change"},props:{tags:{type:String,default:null}},data:function(){return{currentTags:null}},computed:{tagsArray:function(){return this.currentTags?this.currentTags.trim().split(","):[]}},watch:{tags:{handler:function(e){this.currentTags=e},deep:!0,immediate:!0}},methods:{removeTag:function(e){var t=this.tagsArray,a=t.indexOf(e);a<0||(t.splice(a,1),this.currentTags=t.join(", "),this.$emit("change",this.currentTags))}}},A=(a(110),Object(v.a)(D,k,[],!1,null,"077a13cf",null));A.options.__file="src/admin/components/tags-adder/tags-adder.vue";var B=A.exports,H=a(63),L=a(66);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}Object(H.c)("required",L.c);var V={components:{card:u.a,addFile:C,appInput:P.a,appButton:p.a,tagsAdder:B,ValidationProvider:H.b,ValidationObserver:H.a},props:{empty:{type:Boolean,default:!1},example:{type:Object,default:function(){return{id:null,title:"",link:"",description:"",techs:"",photo:{},preview:""}}},isEditing:{type:Boolean,default:!1}},data:function(){return{currentExample:R({},this.example),disabled:!0,isLight:!1}},watch:{example:{handler:function(e){this.currentExample=R({},e),this.isEditing&&(this.currentExample.preview="".concat(f.BASE_URL,"/").concat(this.example.photo),this.isLight=!0)},deep:!0,immediate:!0}},methods:{addFile:function(e){this.currentExample.photo=e},renderPhoto:function(e){this.currentExample.preview=e},submitHandler:function(){var e=this;this.$refs["example-form"].validate().then((function(t){if(t){var a=R({},e.currentExample);delete a.preview,e.isEditing?e.$emit("edit-example",a):e.$emit("add-example",a)}}))}}},I=(a(111),Object(v.a)(V,g,[],!1,null,"4a7c30a2",null));function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}I.options.__file="src/admin/components/example-form/example-form.vue";var z={name:"Examples",components:{exampleForm:I.exports,example:x,squareBtn:p.a},data:function(){return{exampleForm:!1,isEditing:!1,editedExample:{id:null,title:"",link:"",description:"",techs:"",photo:{},preview:""}}},computed:J({},Object(E.c)("examples",{examples:function(e){return e.data}})),created:function(){this.fetchExamplesAction()},methods:J(J({},Object(E.b)({addExampleAction:"examples/add",fetchExamplesAction:"examples/fetch",editExampleAction:"examples/edit",deleteExampleAction:"examples/delete",showTooltip:"tooltip/show"})),{},{addExample:function(e){var t=this;return l()(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.addExampleAction(e);case 3:t.exampleForm=!1,t.showTooltip({text:"Работа успешно создана",type:"success"}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.showTooltip({text:a.t0.message,type:"error"});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},editExampleHandler:function(e){this.exampleForm=!0,this.editedExample=e,this.editedExample.preview=null,this.isEditing=!0},editExample:function(e){var t=this;return l()(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.editExampleAction(e);case 3:t.exampleForm=!1,t.showTooltip({text:"Работа успешно изменена",type:"success"}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.showTooltip({text:"Не удалось изменить работу",type:"error"});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},deleteExample:function(e){var t=this;return l()(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.deleteExampleAction(e);case 3:t.showTooltip({text:"Работа успешно удалена",type:"success"}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),t.showTooltip({text:"Не удалось удалить работу",type:"error"});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},addFormHandler:function(){this.exampleForm=!0,this.editedExample={id:null,title:"",link:"",description:"",techs:"",photo:{},preview:""}},cancel:function(){this.exampleForm=!1,this.isEditing=!1}})},G=(a(112),Object(v.a)(z,i,[],!1,null,"8e7e39f0",null));G.options.__file="src/admin/components/pages/examples/examples-page.vue";t.default=G.exports},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}}]);