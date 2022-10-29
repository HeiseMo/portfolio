(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"Key":"1","Title":"Diffused Art","PictureUrl":"https://i.imgur.com/kGMv8qy.jpg","Description":"Responsive image gallery with discord authentication for image management. Built with React, Node, Express, MongoDB and Discord OAuth2","Live":"http://diffusedhermit.com/","Code":"https://github.com/HeiseMo/diffusedArt"},{"Key":"2","Title":"TrackMe","PictureUrl":"https://i.imgur.com/hgTtu5W.png","Description":"A task/bug tracker built using MERN(MongoDB, Express, React and Node) stack. For the live preview account information; username: demo, password:123456789","Live":"http://trackme.timurjamestanurhan.com/","Code":"https://github.com/HeiseMo/bug-report"},{"Key":"3","Title":"Days Gone By","PictureUrl":"https://i.imgur.com/g3BB2xb.png","Description":"Incremental game with survival aspects. This project was built with JS, HTML, DOM Manupilation and CSS","Live":"https://heisemo.github.io/days-gone-by/","Code":"https://github.com/HeiseMo/days-gone-by"}]')},34:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(27),n=c.n(s),i=(c(34),c(28)),a=c(2),o=c(9),l=c(10),j=c(12),d=c(11),h=c(13),b=c.n(h),m=c(0),p=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsxs)("div",{className:"home-top",children:[Object(m.jsxs)("div",{className:"home-top-left",children:[Object(m.jsx)("h2",{children:"Hello There"}),Object(m.jsxs)("p",{children:["I am ",Object(m.jsx)("span",{className:"home-name",children:"Timur James Tanurhan"}),". I'm a full-stack web developer."]})]}),Object(m.jsx)(b.a,{children:Object(m.jsxs)("div",{className:"home-top-right",children:['<div className="projects">',Object(m.jsx)("br",{}),Object(m.jsx)(b.a.Delay,{ms:1e3}),"<p>Welcome to my website! I hope you enjoy what you see!</p>",Object(m.jsx)("br",{}),Object(m.jsx)(b.a.Delay,{ms:1e3}),"</div>",Object(m.jsx)(b.a.Cursor,{})]})})]}),Object(m.jsx)("a",{href:"https://drive.google.com/file/d/15O7UDyTQG85XlIgNZnn3FduMuGV5IImm/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("div",{className:"button",children:"Resume"})})]})}}]),c}(r.Component),u=c(15),O=function(e){return Object(m.jsxs)("div",{className:"project-card",children:[Object(m.jsx)("div",{className:"card-image",children:Object(m.jsx)("img",{src:e.PictureUrl,alt:"project"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("div",{className:"body-title",children:e.Title}),Object(m.jsx)("div",{className:"body-content",children:Object(m.jsx)("p",{children:e.Description})}),Object(m.jsxs)("div",{className:"body-links",children:[Object(m.jsx)("a",{href:e.Live,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("div",{className:"links-button",children:"Live Preview"})}),Object(m.jsx)("a",{href:e.Code,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("div",{className:"links-button",children:"Code"})})]})]})]},e.Key)},x=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={projects:u},e.actorsSet=function(){var t=e.state.projects;e.setState({projects:t})},e.randomActor=function(){var t=u[Math.floor(Math.random()*u.length)],c=e.state.contacts;c.push(t),e.setState({contacts:c})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"break-line",children:Object(m.jsx)("div",{className:"hl"})}),Object(m.jsx)("h2",{children:"Projects"}),Object(m.jsx)("div",{className:"content-project",children:this.state.projects.map((function(e){return Object(m.jsx)(O,{PictureUrl:e.PictureUrl,Title:e.Title,Description:e.Description,Live:e.Live,Code:e.Code},e.Key)}))})]})}}]),c}(r.Component),g=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"footer-text",children:"@ 2022 | Created by Timur James Tanurhan"}),Object(m.jsx)("div",{className:"footer-break-line",children:Object(m.jsx)("div",{className:"footer-hl"})})]})}}]),c}(r.Component);function v(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"header-left",children:Object(m.jsx)("h1",{})}),Object(m.jsxs)("div",{className:"header-right",children:[Object(m.jsx)("a",{href:"https://github.com/HeiseMo",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/38/38401.png",alt:"github",className:"github-icon"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/timur-james-tanurhan/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/61/61109.png",alt:"linkedin"})}),Object(m.jsx)("a",{href:"https://www.xing.com/profile/TimurJames_Tanurhan",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/25/25281.png",alt:"xing",className:"xing-icon"})})]})]}),Object(m.jsx)("div",{className:"content",children:Object(m.jsx)(a.a,{path:"/",component:p})}),Object(m.jsx)("div",{className:"content-projects",children:Object(m.jsx)(a.a,{path:"/",component:x})})]})}),Object(m.jsx)(g,{})]})}var f=document.getElementById("root");n.a.render(Object(m.jsx)(r.StrictMode,{children:Object(m.jsx)(v,{})}),f)}},[[58,1,2]]]);
//# sourceMappingURL=main.e64e8ec8.chunk.js.map