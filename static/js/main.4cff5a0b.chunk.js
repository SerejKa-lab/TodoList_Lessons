(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,n){t.exports={app:"App_app__3Uwog",app_title:"App_app_title___CSMS",active:"App_active__2jTm6",app_addItemForm:"App_app_addItemForm__3kjE9",app_header:"App_app_header__2ML7u",app_header_navigation:"App_app_header_navigation__2sBXL",app_lists:"App_app_lists__XJiJ5"}},22:function(t,e,n){t.exports={todoList_task:"ListTask_todoList_task__3IMxd",taskIsDone:"ListTask_taskIsDone__2i1Al",delete_button:"ListTask_delete_button__2ymOr",isDoneCheck:"ListTask_isDoneCheck__2OTrx"}},23:function(t,e,n){t.exports={listOrder:"ListOrder_listOrder__3DpKe",orderBox:"ListOrder_orderBox__1W92q",orderNumber:"ListOrder_orderNumber__SESdU",active:"ListOrder_active__1HKTR"}},25:function(t,e,n){t.exports={list_header:"ListHeader_list_header__zEOiY",list_header_add_form:"ListHeader_list_header_add_form__24FzJ",delete_button:"ListHeader_delete_button__1N4Pl"}},29:function(t,e,n){t.exports={list_title__input:"ListTitle_list_title__input__3Aoo0",error:"ListTitle_error__3wcGy",list_title:"ListTitle_list_title__s4OXq"}},30:function(t,e,n){t.exports={taskPriority:"TaskPriority_taskPriority__2ACAr",Middle:"TaskPriority_Middle__1hwuy",Low:"TaskPriority_Low__3JO7V",High:"TaskPriority_High__3FfI-",Urgent:"TaskPriority_Urgent__2y1eq",Later:"TaskPriority_Later__NpmW_"}},33:function(t,e,n){t.exports={todoList_wrapper:"TodoList_todoList_wrapper__17l1B",todoList:"TodoList_todoList__XmGvD"}},34:function(t,e,n){t.exports={newTaskForm:"AddItemForm_newTaskForm__27Yum",error:"AddItemForm_error__3PDJ1"}},38:function(t,e,n){t.exports={taskTitle:"TaskTitle_taskTitle__2cTEe",error:"TaskTitle_error__3WKI3"}},54:function(t,e,n){t.exports={todoList_tasks:"ListTasks_todoList_tasks__3hZhJ"}},55:function(t,e,n){t.exports=n.p+"static/media/book.6d8795b6.png"},56:function(t,e,n){t.exports={error404:"Error404_error404__1VnlC"}},59:function(t,e,n){t.exports=n(87)},7:function(t,e,n){t.exports={list_footer:"ListFooter_list_footer__qaFYD",tasksPagesLinks:"ListFooter_tasksPagesLinks__2ppX9",show_hide:"ListFooter_show_hide__2L_BN",filter_buttons:"ListFooter_filter_buttons__V_uPo",filter_active:"ListFooter_filter_active__1bKZt",pageLink:"ListFooter_pageLink__22oiy",active:"ListFooter_active__116Vm"}},87:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(26),i=n.n(s),o=n(4),l=n(16),c=n(8),u=n(9),p=n(11),d=n(10),f=n(12),m=n(21),h=n.n(m),_=n(20),g=n(33),k=n.n(g),v=n(25),O=n.n(v),b=n(34),E=n.n(b),y=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={inputError:!1,itemTitle:""},n.setItemTitle=function(t){n.state.inputError&&n.setState({inputError:!1}),n.setState({itemTitle:t.currentTarget.value},function(){var t=n.state.itemTitle;(""===t||t.length>100||t.match(/%/))&&n.setState({inputError:!0})})},n.addItem=function(){""===n.state.itemTitle?n.setState({inputError:!0}):n.state.inputError||(n.props.addItem(n.state.itemTitle,n.props.listId),n.setState({itemTitle:""}))},n.actionOnBlur=function(){n.state.inputError&&n.state.itemTitle.length<=100&&n.setState({inputError:!1})},n.actionOnKey=function(t){"Enter"===t.key&&n.addItem(),27===t.keyCode&&n.setState({itemTitle:"",inputError:!1})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:E.a.newTaskForm},a.a.createElement("input",{className:this.state.inputError?E.a.error:"",onChange:this.setItemTitle,onKeyDown:this.actionOnKey,onBlur:this.actionOnBlur,autoFocus:!0,type:"text",placeholder:this.props.placeholder,value:this.state.itemTitle}),a.a.createElement("button",{onClick:this.addItem},"Add"))}}]),e}(a.a.Component),T=n(29),C=n.n(T),L=n(35),I=n.n(L),j=n(51),P=n(39),w=n(18),A=n(52);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var x=n.n(A).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"5deaa5a9-bfea-4e80-bac8-d313181506e0"}}),N=function(){return x.get("")},D=function(t,e){return x.put("/".concat(t),{title:e})},F=function(t){return x.post("",{title:t})},V=function(t,e){return x.put("/".concat(t,"/reorder"),{putAfterItemId:e})},B=function(t){return x.delete("/".concat(t))},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return x.get("/".concat(t,"/tasks?count=").concat(e))},K=function(t){return x.get("/".concat(t,"/tasks?count=100"))},U=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return x.get("/".concat(t,"/tasks?count=10&page=").concat(e))},R=function(t,e){return x.post("/".concat(t,"/tasks"),{title:e})},H=function(t,e,n){return x.put("/".concat(t,"/tasks/").concat(e),function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach(function(e){Object(w.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},n))},J=function(t,e){return x.delete("/".concat(t,"/tasks/").concat(e))};function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(n,!0).forEach(function(e){Object(w.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var q={lists:[],listsOrder:[],listsProgress:{listsLoading:!1},maxListsCount:10},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0,n=10*(e.page-1)+1;switch(e.type){case Y:return X({},t,{lists:e.lists.map(function(t,e){return t.tasks?X({},t,{order:e,page:1,countOnPage:10,filterValue:"All",footerProcess:!1}):X({},t,{order:e,page:1,countOnPage:10,filterValue:"All",tasks:[],footerProcess:!1})}),listsOrder:e.lists.map(function(t){return t.id})});case z:var r=X({},e.list,{page:1,countOnPage:10,filterValue:"All",tasks:[]});return X({},t,{lists:[].concat(Object(P.a)(t.lists),[r]).map(function(t,e){return X({},t,{order:e})})});case Z:return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,{title:e.title}):t})});case it:return X({},t,{lists:e.reorderedLists.map(function(t,e){return X({},t,{order:e})}),listsOrder:e.reorderedLists.map(function(t){return t.id})});case Q:return X({},t,{lists:t.lists.filter(function(t){return t.id!==e.listId}).map(function(t,e){return X({},t,{order:e})})});case $:return X({},t,{listsProgress:X({},t.listsProgress,{listsLoading:e.value})});case et:return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,Object(w.a)({},e.process,e.value)):t})});case rt:return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,{filterValue:e.value}):t})});case ot:return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,{totalCount:e.totalCount,tasks:e.tasks?e.tasks.filter(function(t,e){return e<10}).map(function(t,e){return X({},t,{renderIndex:e+1})}):[]}):t})});case lt:return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,{totalCount:e.totalCount?e.totalCount:t.totalCount,page:e.page,tasks:e.tasks.map(function(t,e){return X({},t,{renderIndex:n+e})})}):t})});case pt:return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,{totalCount:t.totalCount-1,tasks:t.tasks.filter(function(t){return t.id!==e.taskId}).map(function(t,e){return X({},t,{renderIndex:n+e})})}):t})});case dt:return X({},t,{lists:t.lists.map(function(t){return t.id===e.task.todoListId?X({},t,{tasks:t.tasks.map(function(t){return t.id===e.task.id?X({},t,{},e.task):t})}):t})});case ft:return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,{tasks:t.tasks.map(function(t){return t.id===e.taskId?X({},t,Object(w.a)({},e.process,e.value)):t})}):t})});case ht:var a=e.tasks.filter(function(t){return t.status===e.status}).length;return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,{page:e.page,totalCount:a,generalCount:e.tasks.length,tasks:e.tasks.filter(function(t){return t.status===e.status}).map(function(t,e){return X({},t,{renderIndex:e+1})}).filter(function(t,n){return n>=10*(e.page-1)&&n<10*e.page})}):t})});case gt:return X({},t,{lists:t.lists.map(function(t){return t.id===e.listId?X({},t,{totalCount:t.totalCount-1,generalCount:t.generalCount-1,tasks:t.tasks.filter(function(t){return t.id!==e.taskId}).map(function(t,e){return X({},t,{renderIndex:n+e})})}):t})});default:return t}},Y="RESTORE-LISTS",z="ADD_LIST",Z="UPDATE_LIST_TITLE",Q="DELETE_LIST",$="LIST_IS_LOADING",tt=function(t){return{type:$,value:t}},et="LIST_IN_PROCESS",nt=function(t,e,n){return{type:et,listId:t,process:e,value:n}},rt="SET_FILTER_VALUE",at=function(t,e){return{type:rt,listId:t,value:e}},st=function(t,e){return function(){var n=Object(j.a)(I.a.mark(function n(r){return I.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r(at(t,e));case 1:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()},it="REORDER_LIST",ot="RESTORE_TASKS",lt="SET_TASKS_PAGE",ct=function(t,e,n,r){return{type:lt,listId:t,page:e,tasks:n,totalCount:r}},ut=function(t,e){return function(n){return U(t,e).then(function(r){var a=r.data,s=a.items,i=a.totalCount;n(ct(t,e,s,i))})}},pt="DELETE_TASK",dt="UPDATE_TASK",ft="TASK_IN_PROCESS",mt=function(t,e,n,r){return{type:ft,listId:t,taskId:e,process:n,value:r}},ht="SET_FLTR_TASKS_PAGE",_t=function(t,e,n,r){return{type:ht,listId:t,page:e,tasks:n,status:r}},gt="DELETE_FLTR_TASK",kt=function(t,e,n){return function(r){return K(t).then(function(a){var s=a.data.items;r(_t(t,e,s,n))})}},vt=n(28);function Ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var bt=function(t){var e=t.height,n=t.width,r=t.fill,s=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ot(n,!0).forEach(function(e){Object(w.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ot(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(vt.a)(t,["height","width","fill"]),{width:n||(!n&&e?3.65*+e.slice(0,e.indexOf("p"))+"px":n||e?void 0:"252px"),height:e||(!e&&n?.27*+n.slice(0,n.indexOf("p"))+"px":e||n?void 0:"69px")});return a.a.createElement("svg",{svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",version:"1.0",viewBox:"0 0 128 35",space:"preserve",style:s},a.a.createElement("g",null,a.a.createElement("circle",{fill:r,cx:"17.5",cy:"17.5",r:"17.5"}),a.a.createElement("animate",{attributeName:"opacity",dur:"900ms",begin:"0s",repeatCount:"indefinite",keyTimes:"0;0.167;0.5;0.668;1",values:"0.3;1;1;0.3;0.3"})),a.a.createElement("g",null,a.a.createElement("circle",{fill:r,cx:"110.5",cy:"17.5",r:"17.5"}),a.a.createElement("animate",{attributeName:"opacity",dur:"900ms",begin:"0s",repeatCount:"indefinite",keyTimes:"0;0.334;0.5;0.835;1",values:"0.3;0.3;1;1;0.3"})),a.a.createElement("g",null,a.a.createElement("circle",{fill:r,cx:"64",cy:"17.5",r:"17.5"}),a.a.createElement("animate",{attributeName:"opacity",dur:"900ms",begin:"0s",repeatCount:"indefinite",keyTimes:"0;0.167;0.334;0.668;0.835;1",values:"0.3;0.3;1;1;0.3;0.3"})))},Et=n(3),yt=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={editMode:!1,title:"",inputError:!1},n.updateListTitle=function(t){t.match(/%/)||(n.props.updateListTitle(n.props.listId,t),"/"!==n.props.history.location.pathname&&n.props.history.push("/".concat(t.replace(/\s|\?|#/g,"-"))))},n.setEditMode=function(){return n.setState({editMode:!0,title:n.props.title})},n.setDisplayMode=function(){n.state.inputError&&n.setState({inputError:!1}),n.setState({editMode:!1})},n.editListTitle=function(t){var e=t.currentTarget.value,r=n.props.listTitles.find(function(t){return t.title.toLowerCase()===e.toLowerCase()&&t.id!==n.props.listId});n.state.inputError&&n.setState({inputError:!1}),""===e.trim()||e.length>100||e.match(/%/)||r?n.setState({title:e,inputError:!0}):n.setState({title:e})},n.setTitleOnKey=function(t){var e=t.currentTarget.value;"Enter"!==t.key||n.state.inputError||(n.setDisplayMode(),n.updateListTitle(e)),27===t.keyCode&&(n.setDisplayMode(),n.state.inputError&&n.setState({inputError:!1}))},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return this.state.editMode?a.a.createElement("div",{className:C.a.list_title__input},a.a.createElement("input",{type:"text",value:this.state.title,className:this.state.inputError?C.a.error:"",onChange:this.editListTitle,autoFocus:!0,onBlur:this.setDisplayMode,onKeyDown:this.setTitleOnKey})):a.a.createElement("div",{className:C.a.list_title},a.a.createElement("span",{onClick:this.setEditMode},this.props.title),(this.props.listDeliting||this.props.titleUpdating)&&a.a.createElement(bt,{fill:"rgb(143, 59, 26)",height:"10px",position:"absolute",bottom:"-12px",right:"43%"}))}}]),e}(a.a.Component),Tt=Object(Et.compose)(Object(o.b)(null,{updateListTitle:function(t,e){return function(n){n(nt(t,"titleUpdating",!0)),D(t,e).then(function(r){0===r.data.resultCode&&(n(function(t,e){return{type:Z,listId:t,title:e}}(t,e)),n(nt(t,"titleUpdating",!1)))})}}}),_.f)(yt),Ct=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={maxTasksCount:33},n.deleteList=function(){n.props.deleteList(n.props.listId).then(function(){"/"!==n.props.history.location.pathname&&n.props.history.push("/")})},n.addTask=function(t){var e=n.props,r=e.listId,a=e.filterValue,s=e.taskIsAdding;"Completed"!==a&&"All"!==a||s||n.props.addTask(r,t),"Active"!==a||s||n.props.addTaskActive(r,t)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.listId,n=t.title,r=t.page,s=t.totalCount,i=t.filterValue,o=t.listTitles,l=t.generalCount,c=t.listDeliting,u=t.titleUpdating,p=t.taskIsAdding,d=this.state.maxTasksCount,f="All"===i?s:l;return a.a.createElement("div",{className:O.a.list_header},a.a.createElement(Tt,{listId:e,title:n,page:r,listTitles:o,listDeliting:c,titleUpdating:u}),f<d&&a.a.createElement("div",{className:O.a.list_header_add_form},a.a.createElement(y,{placeholder:"Add new task",listId:e,addItem:this.addTask}),p&&a.a.createElement(bt,{fill:"rgb(143, 59, 26)",height:"8px",position:"absolute",right:"50%",bottom:"-14px"})),!c&&a.a.createElement("i",{className:"fa fa-close "+O.a.delete_button,onClick:this.deleteList}),c&&a.a.createElement("i",{className:"fa fa-close "+O.a.delete_button}))}}]),e}(a.a.Component),Lt={addTask:function(t,e){return function(n){return n(nt(t,"taskIsAdding",!0)),R(t,e).then(function(e){0===e.data.resultCode&&n(ut(t,1)).then(function(){n(at(t,"All")),n(nt(t,"taskIsAdding",!1))})})}},addTaskActive:function(t,e){return function(n){return n(nt(t,"taskIsAdding",!0)),R(t,e).then(function(e){0===e.data.resultCode&&K(t).then(function(e){var r=e.data.items;n(_t(t,1,r,0)),n(nt(t,"taskIsAdding",!1))})})}},setTasksPage:ct,setFilterValue:st,setAllTasksPage:ut,deleteList:function(t){return function(e){return e(nt(t,"listDeliting",!0)),B(t).then(function(n){0===n.data.resultCode&&e(function(t){return{type:Q,listId:t}}(t))}).then(function(){return e(nt(t,"listDeliting",!1))})}}},It=Object(Et.compose)(Object(o.b)(null,Lt),_.f)(Ct),jt=n(54),Pt=n.n(jt),wt=n(22),At=n.n(wt),St=n(19),xt=n(30),Nt=n.n(xt),Dt=function(t){var e=Object(r.useState)(!1),n=Object(St.a)(e,2),s=n[0],i=n[1],o=["Low","Middle","High","Urgent","Later"],l=o.map(function(t){return a.a.createElement("option",{className:Nt.a[t],key:t},t)}),c=function(){return o[t.priority]},u=function(){return Nt.a[o[t.priority]]+" "+Nt.a.taskPriority},p=function(){return i(!1)};return s?a.a.createElement("select",{defaultValue:c(),className:u(),onChange:function(e){var n=o.findIndex(function(t){return t===e.currentTarget.value});t.updateTask({priority:n}),p()},onBlur:p,onKeyDown:function(t){27===t.keyCode&&p()},autoFocus:!0}," ",l," "):a.a.createElement("span",{onClick:function(){return i(!0)},className:u()},c()," \xa0")},Ft=n(38),Vt=n.n(Ft),Bt=function(t){var e=Object(r.useState)(!1),n=Object(St.a)(e,2),s=n[0],i=n[1],o=Object(r.useState)(""),l=Object(St.a)(o,2),c=l[0],u=l[1],p=Object(r.useState)(!1),d=Object(St.a)(p,2),f=d[0],m=d[1],h=function(){f&&m(!1),i(!1)};return s?a.a.createElement("input",{type:"text",value:c,className:f?Vt.a.error:"",onChange:function(t){var e=t.currentTarget.value;f&&m(!1),""===e.trim()||e.length>100?(u(e),m(!0)):u(e)},autoFocus:!0,onBlur:h,onKeyDown:function(e){var n=e.currentTarget.value;"Enter"!==e.key||f||(t.updateTask({title:n}),h()),27===e.keyCode&&(h(),f&&m(!1))}}):a.a.createElement("span",{onClick:function(){i(!0),u(t.title)},className:Vt.a.taskTitle},t.title,", ")},Mt=Object(o.b)(null,{updateTask:function(t,e,n){return function(r,a){var s=a().lists.find(function(e){return e.id===t}),i=s.page,o=s.filterValue,l=s.tasks.length,c=X({},s.tasks.find(function(t){return t.id===e}),{},n);r(mt(t,e,"taskInProcess",!0)),H(t,e,c).then(function(e){var a;0===e.data.resultCode&&("All"===o?r((a=e.data.data.item,{type:dt,task:a})):K(t).then(function(e){if(!e.data.error){var a=e.data.items,s="Completed"===o?1:0;1===l&&1!==i&&void 0!==n.status?r(_t(t,i-1,a,s)):1===l&&1===i&&void 0!==n.status?(r(ut(t,1)),r(at(t,"All"))):r(_t(t,i,a,s))}}))}).then(function(){return r(mt(t,e,"taskInProcess",!1))})}},delTaskFromPage:function(t,e){return function(n,r){var a=r().lists.find(function(e){return e.id===t}),s=a.page,i=a.filterValue,o=a.totalCount,l=a.countOnPage,c=a.tasks.length,u=o?Math.ceil(o/l):1;n(mt(t,e,"taskInProcess",!0)),J(t,e).then(function(r){0===r.data.resultCode&&(10===c&&s<u&&n("All"===i?ut(t,s):kt(t,s,"Completed"===i?1:0)),1===c&&1!==s&&n("All"===i?ut(t,s-1):kt(t,s-1,"Completed"===i?1:0)),1===c&&1===s&&"All"!==i&&n(ut(t,1)).then(function(){return n(at(t,"All"))}),n("All"===i?function(t,e,n){return{type:pt,listId:t,taskId:e,page:n}}(t,e,s):function(t,e,n){return{type:gt,listId:t,taskId:e,page:n}}(t,e,s)))}).then(function(){return n(mt(t,e,"taskInProcess",!1))})}}})(function(t){var e=t.task,n=e.id,r=e.status,s=e.renderIndex,i=e.priority,o=e.title,l=e.taskInProcess,c=t.listId,u=function(e){return t.updateTask(c,n,e)};return a.a.createElement("div",{className:At.a.todoList_task},a.a.createElement("div",{className:r?At.a.taskIsDone:""},a.a.createElement("input",{className:At.a.isDoneCheck,onChange:function(t){var e=t.currentTarget.checked?1:0;u({status:e})},type:"checkbox",checked:r}),a.a.createElement("span",null," ",s," - "),a.a.createElement(Bt,{title:o,updateTask:u}),a.a.createElement(Dt,{priority:i,updateTask:u}),!l&&a.a.createElement("i",{className:"fa fa-close "+At.a.delete_button,onClick:function(){return t.delTaskFromPage(c,n)}}),l&&a.a.createElement("i",{className:"fa fa-close "+At.a.delete_button})&&a.a.createElement(bt,{fill:"rgb(143, 59, 26)",height:"8px"})))}),Kt=function(t){var e=t.tasks,n=t.countOnPage,r=Object(vt.a)(t,["tasks","countOnPage"]),s=e.length,i=e.filter(function(t,e){return e<n}).map(function(t){return a.a.createElement(Mt,Object.assign({key:t.id,task:t,tasksLength:s},r))});return a.a.createElement("div",{className:Pt.a.todoList_Tasks},i)},Ut=n(7),Rt=n.n(Ut),Ht=n(23),Jt=n.n(Ht),Gt=Object(o.b)(null,{reorderList:function(t,e,n){return function(r,a){var s=void 0!==n?+n-1:null;if(null!==s&&s!==+e){var i=null===s&&0===e?null:null===s?a().listsOrder[e-1]:0===s?null:s<=+e?a().listsOrder[s-1]:s>+e?a().listsOrder[s]:void 0,o=function(){var t=Object(P.a)(a().lists);if(s<e){for(var n=t[e],r=e-1;r>=s;r--)t[r+1]=t[r];return t[s]=n,t}if(s>e){for(var i=t[e],o=e;o<s;o++)t[o]=t[o+1];return t[s]=i,t}return t}();r(tt(!0)),V(t,i).then(function(t){0===t.data.resultCode&&(r(function(t){return{type:it,reorderedLists:t}}(o)),r(tt(!1)))})}}}})(function(t){var e=Object(r.useState)(!1),n=Object(St.a)(e,2),s=n[0],i=n[1],o=function(){return i(!s)},l=function(){for(var e=[],n=function(n){var r=n-1!==t.order?Jt.a.orderNumber:Jt.a.orderNumber+" "+Jt.a.active,s=a.a.createElement("div",{className:r,onClick:function(){return function(e){var n=t.listId,r=t.order;t.reorderList(n,r,e),o()}(n)},key:n},n);e.push(s)},r=1;r<=t.listsCount;r++)n(r);return e}();return a.a.createElement("div",{className:Jt.a.listOrder,onClick:o},t.order+1+"/"+t.listsCount,s&&a.a.createElement("div",{className:Jt.a.orderBox},l))}),Xt=function(t){var e=t.isHidden,n=t.inProcess,r=t.filterValue,s=t.pagesCount,i=t.pagesLinks,o=t.order,l=t.displayOrder,c=t.listsCount,u=t.hideOnButtonClick,p=t.showOnButtonClick,d=t.getTasks,f=t.listId,m="All"===r?Rt.a.filter_active:"",h="Active"===r?Rt.a.filter_active:"",_="Completed"===r?Rt.a.filter_active:"";return a.a.createElement("div",{className:Rt.a.list_footer},s>1&&a.a.createElement("div",{className:Rt.a.tasksPagesLinks},i),!e&&a.a.createElement("div",{className:Rt.a.filter_buttons},a.a.createElement("button",{onClick:function(){return d("All")},className:m,disabled:n},"All"),a.a.createElement("button",{onClick:function(){return d("Completed")},className:_,disabled:n},"Completed"),a.a.createElement("button",{onClick:function(){return d("Active")},className:h,disabled:n},"Active"),n&&a.a.createElement(bt,{fill:"rgb(143, 59, 26)",height:"8px",position:"absolute",top:"8px",right:"5px"})),!e&&a.a.createElement("span",{className:Rt.a.show_hide,onClick:u},"Hide"),e&&a.a.createElement("span",{className:Rt.a.show_hide,onClick:p},"Show"),l&&1!==c&&a.a.createElement(Gt,{order:o,listsCount:c,listId:f}))},qt=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(s)))).state={isHidden:!1,inProcess:!1},n.showOnButtonClick=function(){n.setState({isHidden:!1})},n.hideOnButtonClick=function(){n.setState({isHidden:!0})},n.getTasks=function(t){var e=n.props,r=e.listId;(0,e.setFilterValue)(r,t).then(function(){return n.setTasksPage(1)})},n.setTasksPage=function(t){var e=n.props,r=e.listId,a=e.setFilteredPage,s=e.setAllTasksPage;switch(n.setState({inProcess:!0}),n.props.filterValue){case"Active":a(r,t,0).then(function(){return n.setState({inProcess:!1})});break;case"Completed":a(r,t,1).then(function(){return n.setState({inProcess:!1})});break;default:s(r,t),n.setState({inProcess:!1})}},n.getPagesCount=function(){var t=n.props,e=t.totalCount,r=t.countOnPage;return e?Math.ceil(e/r):1},n.getPagesLinks=function(){for(var t=n.props.page,e=[],r=function(r){var s=a.a.createElement("span",{className:r===t?"".concat(Rt.a.pageLink," ").concat(Rt.a.active):Rt.a.pageLink,style:{cursor:"pointer"},key:r,onClick:function(){return n.setTasksPage(r)}},r);e.push(s)},s=1;s<=n.getPagesCount();s++)r(s);return e},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t="/"===this.props.history.location.pathname;return a.a.createElement(Xt,{listId:this.props.listId,order:this.props.order,displayOrder:t,listsCount:this.props.listsCount,isHidden:this.state.isHidden,inProcess:this.state.inProcess,filterValue:this.props.filterValue,pagesCount:this.getPagesCount(),pagesLinks:this.getPagesLinks(),getTasks:this.getTasks,hideOnButtonClick:this.hideOnButtonClick,showOnButtonClick:this.showOnButtonClick})}}]),e}(a.a.Component),Wt={setTasksPage:ct,setFilterValue:st,setFilteredPage:kt,setAllTasksPage:ut},Yt=Object(Et.compose)(Object(o.b)(null,Wt),_.f)(qt),zt=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(s)))).render=function(){var t=n.props,e=t.listsCount,r=t.listTitles,s=n.props.list,i=s.title,o=s.id,l=s.page,c=s.totalCount,u=s.countOnPage,p=s.tasks,d=s.generalCount,f=s.order,m=s.listDeliting,h=s.titleUpdating,_=s.taskIsAdding,g=s.filterValue;return a.a.createElement("div",{className:k.a.todoList},a.a.createElement("section",{className:k.a.todoList_wrapper},a.a.createElement(It,{title:i,listId:o,filterValue:g,page:l,generalCount:d,totalCount:c,listTitles:r,listDeliting:m,titleUpdating:h,taskIsAdding:_}),a.a.createElement(Kt,{tasks:p,listId:o,page:l,countOnPage:u,filterValue:g})),a.a.createElement(Yt,{listId:o,page:l,order:f,listsCount:e,filterValue:g,countOnPage:u,totalCount:c}))},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.restoreTasks(this.props.list.id)}}]),e}(a.a.Component),Zt=n(55),Qt=n.n(Zt),$t=n(56),te=n.n($t),ee=Object(_.f)(function(t){return a.a.createElement("div",{className:te.a.error404},a.a.createElement("h3",null,"No match for ",a.a.createElement("code",null,'"',t.location.pathname,'"'),". Please, check URL."))}),ne=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).addList=function(t){var e=n.props.lists.map(function(t){return t.title.replace(/\s|\?|#/g,"-")}).find(function(e){return e.toLowerCase()===t.replace(/\s|\?|#/g,"-").toLowerCase()});t.match(/%/)||e||(n.props.addList(t),"/"!==n.props.history.location.pathname&&n.props.history.push("/"))},n.restoreTasks=function(t){return n.props.restoreTasks(t)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.restoreLists()}},{key:"render",value:function(){var t=this,e=this.props.lists.map(function(t){return{title:t.title,id:t.id}}),n=this.props.lists.map(function(n){var r=n.title.replace(/\s|\?|#/g,"-");return a.a.createElement(_.a,{path:"/".concat(r),exact:!0,key:n.id,render:function(){return a.a.createElement(zt,{list:n,key:n.id,restoreTasks:t.restoreTasks,listTitles:e})}})}),r=this.props.lists.map(function(n){return a.a.createElement(zt,{list:n,key:n.id,listTitles:e,restoreTasks:t.restoreTasks,listsCount:t.props.listsCount})}),s=this.props.lists.map(function(t){var e=t.title.replace(/\s|\?|#/g,"-");return a.a.createElement("li",{key:t.id},a.a.createElement(l.b,{to:"/".concat(e)},t.title))});return a.a.createElement("div",{className:h.a.app},a.a.createElement("div",{className:h.a.app_header},this.props.listsLoading&&a.a.createElement(bt,{position:"absolute",height:"12px",top:"1.75em",right:"34%",fill:"white"}),a.a.createElement(l.b,{to:"/",exact:!0,className:h.a.app_title},a.a.createElement("h2",null,a.a.createElement("img",{src:Qt.a,alt:"book",className:h.a.app_header_icon}),"Tasks Organizer")),this.props.lists.length<this.props.maxListsCount&&a.a.createElement("div",{className:h.a.app_addItemForm},a.a.createElement(y,{addItem:this.addList,placeholder:"Add list"}))),a.a.createElement("nav",{className:h.a.app_header_navigation},a.a.createElement("ul",null,s)),a.a.createElement("div",{className:h.a.app_lists},a.a.createElement(_.c,null,n,a.a.createElement(_.a,{path:"/",exact:!0},r),a.a.createElement(_.a,{component:ee}))))}}]),e}(a.a.Component),re=Object(Et.compose)(Object(o.b)(function(t){return{lists:t.lists,listsCount:t.lists.length,listsLoading:t.listsProgress.listsLoading,maxListsCount:t.maxListsCount}},{restoreLists:function(){return function(t){t(tt(!0)),N().then(function(e){var n;t((n=e.data,{type:Y,lists:n})),t(tt(!1))})}},restoreTasks:function(t){return function(e){M(t).then(function(n){e(function(t,e,n){return{type:ot,listId:t,tasks:e,totalCount:n}}(t,n.data.items,n.data.totalCount))})}},addList:function(t){return function(e){e(tt(!0)),F(t).then(function(t){var n;e((n=t.data.data.item,{type:z,list:n})),e(tt(!1))})}}}),_.f)(ne),ae=n(57),se=n(58),ie=Object(Et.createStore)(W,Object(ae.composeWithDevTools)(Object(Et.applyMiddleware)(se.a)));i.a.render(a.a.createElement(l.a,null,a.a.createElement(o.a,{store:ie},a.a.createElement(re,null))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.4cff5a0b.chunk.js.map