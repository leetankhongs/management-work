(this.webpackJsonpmanagement=this.webpackJsonpmanagement||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),l=a.n(r),o=(a(14),a(1)),c=a(2),i=a(4),m=a(3),u=(a(6),a(5)),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeValue=function(e){var t=e.target,a=t.name,s=t.value;"Status"===a&&(s="true"===t.value),n.setState(Object(u.a)({},a,s))},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmitData(n.state),n.onCloseForm()},n.onCloseForm=function(){n.props.onExistForm()},n.resetForm=function(){n.setState({Name:"",Status:!1}),n.onCloseForm()},n.state={ID:"",Name:"",Status:!0},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.task;e&&(console.log("Vo"),this.state={ID:e.ID,Name:e.Name,Status:e.Status})}},{key:"componentWillReceiveProps",value:function(e){var t=e.task;this.state=t?{ID:t.ID,Name:t.Name,Status:t.Status}:{ID:"",Name:"",Status:!0}}},{key:"render",value:function(){return s.a.createElement("div",{className:"panel panel-warning"},s.a.createElement("div",{className:"panel-heading"},s.a.createElement("h3",{className:"panel-title"},""===this.state.ID?"Th\xeam C\xf4ng Vi\u1ec7c":"Ch\u1ec9nh s\u1eeda c\xf4ng vi\u1ec7c","  \xa0",s.a.createElement("span",{className:"fa fa-times-circle text-right",onClick:this.onCloseForm}))),s.a.createElement("div",{className:"panel-body"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"T\xean :"),s.a.createElement("input",{type:"text",className:"form-control",name:"Name",onChange:this.onChangeValue,value:this.state.Name})),s.a.createElement("label",null,"Tr\u1ea1ng Th\xe1i :"),s.a.createElement("select",{className:"form-control",name:"Status",value:this.state.Status,onChange:this.onChangeValue},s.a.createElement("option",{value:!0},"K\xedch Ho\u1ea1t"),s.a.createElement("option",{value:!1},"\u1ea8n")),s.a.createElement("br",null),s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"submit",className:"btn btn-warning"},""===this.state.ID?"Th\xeam":"Ch\u1ec9nh s\u1eeda"),"\xa0",s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.resetForm},"H\u1ee7y B\u1ecf")))))}}]),a}(n.Component),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeValue=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(u.a)({},a,s))},n.searchList=function(){n.props.searchList(n.state.txtSearch)},n.state={txtSearch:""},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a...",value:this.state.txtSearch,Name:"txtSearch",onChange:this.onChangeValue}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.searchList},s.a.createElement("span",{className:"fa fa-search mr-5"}),"\xa0T\xecm")))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onClick=function(e){n.setState({Type:e}),n.props.sortBy(e)},n.state={Type:0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"dropdown"},s.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"S\u1eafp X\u1ebfp \xa0 ",s.a.createElement("span",{className:"fa fa-caret-square-o-down ml-5"})),s.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},s.a.createElement("li",null,s.a.createElement("a",{role:"button",className:0===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(0)}},s.a.createElement("span",null,"Null"))),s.a.createElement("li",null,s.a.createElement("a",{role:"button",className:1===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(1)}},s.a.createElement("span",{className:"fa fa-sort-alpha-asc pr-5"},"T\xean A-Z"))),s.a.createElement("li",null,s.a.createElement("a",{role:"button",className:-1===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(-1)}},s.a.createElement("span",{className:"fa fa-sort-alpha-desc pr-5"},"T\xean Z-A")))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).searchList=function(t){e.props.searchList(t)},e.sortBy=function(t){e.props.sortBy(t)},e}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},s.a.createElement(h,{searchList:this.searchList})),s.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},s.a.createElement(d,{sortBy:this.sortBy})))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeStatus=function(){n.props.changeStatus(n.props.task.ID)},n.deleteTask=function(){n.props.deleteTask(n.props.task.ID)},n.updateItem=function(){n.props.updateItem(n.props.task.ID)},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.index+1),s.a.createElement("td",null,this.props.task.Name),s.a.createElement("td",{className:"text-center"},s.a.createElement("span",{className:!0===this.props.task.Status?"label label-danger":"label label-success",onClick:this.changeStatus},!0===this.props.task.Status?"K\xedch ho\u1ea1t":"\u1ea8n")),s.a.createElement("td",{className:"text-center"},s.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.updateItem},s.a.createElement("span",{className:"fa fa-pencil mr-5"}),"\xa0S\u1eeda"),"\xa0",s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.deleteTask},s.a.createElement("span",{className:"fa fa-trash mr-5"}),"\xa0X\xf3a")))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeStatus=function(e){n.props.changeStatus(e)},n.deleteTask=function(e){n.props.deleteTask(e)},n.updateItem=function(e){n.props.updateItem(e)},n.onChangeValue=function(e){var t=e.target,a=t.name,s=t.value;n.props.filterList("Name"===a?s:n.state.Name,"Status"===a?s:n.state.Status),n.setState(Object(u.a)({},a,s))},n.state={Name:"",Status:-1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.taskList.map((function(t,a){return s.a.createElement(E,{key:a,task:t,index:a,changeStatus:e.changeStatus,deleteTask:e.deleteTask,updateItem:e.updateItem})}));return s.a.createElement("table",{className:"table table-bordered table-hover mt-15"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"text-center"},"STT"),s.a.createElement("th",{className:"text-center"},"T\xean"),s.a.createElement("th",{className:"text-center"},"Tr\u1ea1ng Th\xe1i"),s.a.createElement("th",{className:"text-center"},"H\xe0nh \u0110\u1ed9ng"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",name:"Name",onChange:this.onChangeValue,value:this.state.Name})),s.a.createElement("td",null,s.a.createElement("select",{className:"form-control",name:"Status",onChange:this.onChangeValue,value:this.state.Status},s.a.createElement("option",{value:-1},"T\u1ea5t C\u1ea3"),s.a.createElement("option",{value:0},"\u1ea8n"),s.a.createElement("option",{value:1},"K\xedch Ho\u1ea1t"))),s.a.createElement("td",null)),t))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).UniqueID=function(){return"_"+Math.random().toString(36).substr(2,9)},n.addTask=function(){n.state.taskEditing?n.setState({isDisplayForm:!0,taskEditing:null}):n.setState({isDisplayForm:!n.state.isDisplayForm})},n.onExistForm=function(){n.setState({isDisplayForm:!1,taskEditing:null})},n.onShowForm=function(){n.setState({isDisplayForm:!0})},n.onSubmitData=function(e){var t=n.state.tasks;if(""===e.ID){var a={ID:n.UniqueID(),Name:e.Name,Status:e.Status};t.push(a)}else{var s=n.findTask(e.ID);-1!==s&&(t[s]=e)}n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},n.changeStatus=function(e){var t=n.state.tasks,a=n.findTask(e);-1!==a&&(t[a].Status=!t[a].Status,n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)))},n.deleteTask=function(e){var t=n.state.tasks,a=n.findTask(e);-1!==a&&(t.splice(a,1),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)))},n.findTask=function(e){for(var t=n.state.tasks,a=-1,s=0;s<t.length;s++)if(t[s].ID===e){a=s;break}return a},n.updateItem=function(e){var t=n.state.tasks,a=n.findTask(e);-1!==a&&(n.setState({taskEditing:t[a]}),n.onShowForm(),localStorage.setItem("tasks",JSON.stringify(t)))},n.filterList=function(e,t){n.setState({Filter:{Name:e.toLowerCase(),Status:t}})},n.searchList=function(e){n.setState({Keyword:e})},n.sortBy=function(e){n.setState({Sort:e})},n.state={tasks:[],isDisplayForm:!1,taskEditing:null,Filter:{Name:"",Status:-1},Keyword:"",Sort:0},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var e=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:e})}}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.isDisplayForm,n=e.Filter,r=e.Keyword,l=e.Sort,o=!0===a?s.a.createElement(p,{onExistForm:this.onExistForm,onSubmitData:this.onSubmitData,task:this.state.taskEditing}):"";return n&&(t=t.filter((function(e){return-1!==e.Name.toLowerCase().indexOf(n.Name)})),console.log(t),t=t.filter((function(e){return-1==n.Status?e:e.Status===(1==n.Status)}))),""!==r&&(t=t.filter((function(e){return-1!==e.Name.toLowerCase().indexOf(r)}))),0!==l&&t.sort((function(e,t){return e.Name.toLowerCase()>t.Name.toLowerCase()?l:e.Name.toLowerCase()<t.Name.toLowerCase()?-l:0})),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"text-center"},s.a.createElement("h1",null,"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"),s.a.createElement("hr",null)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:!0===a?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""},o),s.a.createElement("div",{className:!0===a?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addTask},s.a.createElement("span",{className:"fa fa-plus mr-5"}),"\xa0Th\xeam C\xf4ng Vi\u1ec7c"),"\xa0",s.a.createElement("div",{className:"row mt-15"},s.a.createElement(f,{searchList:this.searchList,sortBy:this.sortBy})),s.a.createElement("div",{className:"row mt-15"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement(b,{taskList:t,changeStatus:this.changeStatus,deleteTask:this.deleteTask,updateItem:this.updateItem,filterList:this.filterList}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9cf4b996.chunk.js.map