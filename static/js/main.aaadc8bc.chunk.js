(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),i=a.n(r),c=(a(32),a(2)),s=a(3),l=a(5),u=a(4),p=a(6),m=(a(33),a(12)),h=a(11),d=a(16),b=(a(34),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={count:!0},a.handleStartStop=a.handleStartStop.bind(Object(d.a)(a)),setTimeout(a.handleStartStop,2e3),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleStartStop",value:function(){this.setState({count:!1})}},{key:"render",value:function(){return this.state.count?o.a.createElement("div",null,o.a.createElement("div",{className:"body"},o.a.createElement("h1",{id:"timer-label"},"FOODMAP"),o.a.createElement("p",{id:"time-left"},o.a.createElement("img",{src:"https://vignette.wikia.nocookie.net/plantsvszombies/images/5/56/Pizza_loading.gif/revision/latest?cb=20170408195505"})))):o.a.createElement(h.a,{to:"/location"})}}]),t}(o.a.Component)),f=a(26),v=a(17);function g(){var e=Object(f.a)(["<h1>","</h1>\n            "]);return g=function(){return e},e}var y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).fetchPlaces=function(t,a){var n=t.google,o=new n.maps.places.PlacesService(a),r={location:e.props.mainLocation,radius:1e3,type:["restaurant"]};o.nearbySearch(r,function(e,t){if(console.log(e),t===n.maps.places.PlacesServiceStatus.OK)for(var r=function(){var t=e[i],r=new n.maps.Marker({position:t.geometry.location,map:a,title:t.name});o.getDetails({placeId:t.place_id,fields:["address_component","adr_address","formatted_address","geometry","icon","name","permanently_closed","photo","place_id","plus_code","type","url","utc_offset","vicinity","formatted_phone_number","international_phone_number","opening_hours","website","price_level","rating","review","user_ratings_total"]},function(e){console.log(e)});var c=new n.maps.InfoWindow({content:String.raw(g(),t.name)});r.addListener("click",function(){c.open(a,r)})},i=0;i<e.length;i++)r()})},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={width:"100vw",height:"50vh"};return o.a.createElement("div",null,o.a.createElement("div",{style:e},o.a.createElement(v.Map,{style:e,google:this.props.google,zoom:16,onReady:this.fetchPlaces,initialCenter:this.props.mainLocation})))}}]),t}(o.a.Component),O=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyC0VLXysIX4t0QzQlWFO0VIUyFfRZLV8nA"})(y),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}))}}]),t}(o.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O,{mainLocation:this.props.mainLocation}),o.a.createElement(j,null))}}]),t}(o.a.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).location=function(){},a.getGeoLocation=function(){navigator.geolocation.getCurrentPosition(function(e){var t=e.coords.latitude,n=e.coords.longitude;a.props.setMainLocation({lat:t,lng:n}),a.props.history.push("/home")},function(){a.props.setStatusMessage("Unable to retrieve your location"),a.props.history.push("/home")})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return window.navigator.geolocation?o.a.createElement("div",null,o.a.createElement("input",{type:"button",className:"",onClick:this.getGeoLocation,value:"Aceptar"}),o.a.createElement("input",{type:"button",className:"",onClick:function(){return e.props.history.push("/home")},value:"Ignorar"})):(this.props.setStatusMessage("Geolocation is not supported by your browser."),o.a.createElement(h.a,{to:"/home"}))}}]),t}(o.a.Component),S=Object(h.e)(w),L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).setMainLocation=function(t){e.setState({mainLocation:t})},e.setStatusMessage=function(t){e.setState({statusMessage:t})},e.state={mainLocation:{lat:20.650483,lng:-103.4054717},statusMessage:null},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},this.state.statusMessage?o.a.createElement("div",{className:"alert alert-warning",role:"alert"},this.state.statusMessage,o.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return e.setStatusMessage(null)}},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):"",o.a.createElement(m.a,null,o.a.createElement(h.b,{path:"/",component:b,exact:!0}),o.a.createElement(h.b,{path:"/home",component:function(){return o.a.createElement(E,{mainLocation:e.state.mainLocation,setMainLocation:e.setMainLocation})}}),o.a.createElement(h.b,{path:"/location",component:function(){return o.a.createElement(S,{setMainLocation:e.setMainLocation,setStatusMessage:e.setStatusMessage})}})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);i.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.aaadc8bc.chunk.js.map