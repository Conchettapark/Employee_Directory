(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(13),c=n.n(s),o=(n(24),n(25),n(2)),i=n.n(o),u=n(3),l=n(14),m=n(15),p=n(18),h=n(17),f=n(16),d=n.n(f),v={getUsers:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://randomuser.me/api/?results=200&nat=us");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),searchUsers:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.filter((function(e){return e.name.first.toLowerCase().includes(t)||e.name.last.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)})),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},E=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).searchEmployee=function(e){v.searchUsers(e,a.state.initialResults).then((function(e){return a.setState({results:e})})).catch((function(e){return console.log(e)}))},a.state={results:[],initialResults:[]},a.textInput=r.a.createRef(),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getUsers();case 2:t=e.sent,this.setState({results:t,initialResults:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onClick",value:function(){var e=this.textInput.current.value;this.searchEmployee(e.toLowerCase())}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{id:"searchBox",className:"form-control new-class mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",ref:this.textInput}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:function(t){return e.onClick()}},"Search"),r.a.createElement("div",null,(this.state.results||[]).map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{key:t+1,alt:"",src:e.picture.medium}),r.a.createElement("p",{key:t+2},e.name.first+" "+e.name.last),r.a.createElement("a",{key:t+3,href:"mailto:"+e.email},e.email),r.a.createElement("p",{key:t+4},"Phone: ",e.cell||e.phone))}))))}}]),n}(a.Component);var b=function(){return r.a.createElement("div",null,r.a.createElement("noscript",null,"You need to enable JavaScript to run this app."),r.a.createElement("div",{id:"root"}),r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"EMPLOYEE DIRECTORY"),r.a.createElement("p",{className:"lead"},"Click on carrots to filter by heading or use the search box to narrow your results"))),r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a2713132.chunk.js.map