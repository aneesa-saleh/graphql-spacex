(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,a,t){e.exports=t.p+"static/media/spacex.e6636a81.png"},47:function(e,a,t){e.exports=t(63)},52:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(39),l=t.n(r),s=(t(52),t(46)),m=t(18),u=t(17),o=t(14),i=t(22),h=t(23),p=t(29),E=t(24),d=t(30),g=t(25),b=t(16),f=t.n(b),_=t(28),y=t.n(_);function N(e){var a=e.launch,t=a.flight_number,n=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9 text-left"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:y()({"text-success":l,"text-danger":!l})},n)),c.a.createElement("p",null,"Date: ",r)),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(u.b,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function v(){return c.a.createElement("div",{style:{textAlign:"left"},className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function k(){var e=Object(g.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return k=function(){return e},e}var x=f()(k()),w=function(e){var a=e.loading,t=e.error,r=e.data;return a?c.a.createElement("h4",null,"Loading..."):t?(console.error(t),c.a.createElement("h4",{style:{color:"red"}},"An error occurred.")):c.a.createElement(n.Fragment,null,r.launches.map(function(e){return c.a.createElement(N,{key:e.flight_number,launch:e})}))},j=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(v,null),c.a.createElement(m.b,{query:x},w))}}]),a}(n.Component);function O(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return O=function(){return e},e}var L=f()(O()),F=function(e){var a=e.loading,t=e.error,r=e.data;if(a)return c.a.createElement("h4",null,"Loading...");if(t)return console.error(t),c.a.createElement("h4",{style:{color:"red"}},"An error occurred.");var l=r.launch,s=l.flight_number,m=l.mission_name,o=l.launch_year,i=l.launch_success,h=(l.launch_date_local,l.rocket),p=h.rocket_id,E=h.rocket_name,d=h.rocket_type;return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission: ",m)),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group text-left"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",o),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:y()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group text-left"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",p),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",E),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",d)),c.a.createElement("hr",null),c.a.createElement(u.b,{to:"/",className:"btn btn-secondary"},"Back"))},q=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(m.b,{query:L,variables:{flight_number:e}},F))}}]),a}(n.Component),D=(t(61),t(45)),A=t.n(D),I=new s.a({uri:"/graphql"});var R=function(){return c.a.createElement(m.a,{client:I},c.a.createElement(u.a,null,c.a.createElement("div",{className:"App container"},c.a.createElement("img",{src:A.a,alt:"SpaceX",style:{width:"200px",margin:"30px 0"}}),c.a.createElement(o.a,{exact:!0,path:"/",component:j}),c.a.createElement(o.a,{exact:!0,path:"/launch/:flight_number",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.ee10caae.chunk.js.map