(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),l=n.n(c),i=(n(59),n(5)),s=n(6),r=n(8),u=n(7),m=n(9),d=(n(60),n(3)),f=(n(16),n(20)),h=n.n(f),p=n(51),g=n.n(p);function b(e){var t=e.image;return o.a.createElement("img",{className:"single-photo",src:t.urls.thumb,alt:""})}var v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={images:[],count:30,start:1},n.fetchImages=function(){console.log(123);var e=n.state,t=e.count;e.start;n.setState({start:n.state.start+t}),h.a.get("https://api.Unsplash.com/collections/Architecture?client_id=277aa79f642c5f5ad25a6fe715cedf4a24e8a74ce5d9f9f32970f30cdd2908c9",function(e){console.log(e)}).then(function(e){return n.setState({images:n.state.images.concat(e.data)})})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state;t.count,t.start;console.log("componentDidMount"),h.a.get("https://api.Unsplash.com/collections/Architecture?client_id=277aa79f642c5f5ad25a6fe715cedf4a24e8a74ce5d9f9f32970f30cdd2908c9",function(e){console.log(e)}).then(function(t){return e.setState({images:t.data})})}},{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",{className:"images"},o.a.createElement(g.a,{dataLength:this.state.images.length,next:this.fetchImages,hasMore:!0,loader:o.a.createElement("h4",null,"Loading...")},this.state.images.map(function(e){return o.a.createElement(b,{key:e.id,image:e})})))}}]),t}(a.Component),w=(a.Component,a.Component,a.Component,a.Component,a.Component,o.a.Component,function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedFile:null},n.fileSelectedHandler=function(e){n.setState({selectedFile:e.target.files[0]})},n.fileUploadHandler=function(){h.a.post("")},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"demo-big-content"},o.a.createElement("input",{type:"file",onChange:this.fileSelectedHandler}),o.a.createElement("button",{onClick:this.fileUploadHandler},"Upload"),o.a.createElement(v,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(129),n(130);var E=n(25);l.a.render(o.a.createElement(E.a,null,o.a.createElement(w,null)),document.getElementById("root"))},54:function(e,t,n){e.exports=n(131)},59:function(e,t,n){},60:function(e,t,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.ce98e8f2.chunk.js.map