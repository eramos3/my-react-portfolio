(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/me.001405b0.jpeg"},26:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a.n(r),n=a(11),s=a.n(n),i=(a(17),a(18),a(3)),o=a(0);var l=function(e){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h2",{children:Object(o.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(o.jsx)("span",{role:"img","aria-label":"camera",children:" \u26bd\ufe0f"})," Eder Francisco Ramos"]})}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row px-1",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(o.jsx)("li",{className:"mx-1",children:Object(o.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"navActive":"nav-link",children:t})},t)}))})})]})},d=a(4),j=a(7);var b=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("footer",{children:[Object(o.jsx)("a",{alt:"linkedin",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/eder-francisco-ramos/",children:Object(o.jsx)(d.a,{icon:j.b,size:"3x"})}),Object(o.jsx)("a",{alt:"github",target:"_blank",rel:"noreferrer",href:"https://github.com/eramos3",children:Object(o.jsx)(d.a,{icon:j.a,size:"3x"})}),Object(o.jsx)("a",{alt:"stackoverflow",target:"_blank",rel:"noreferrer",href:"https://stackexchange.com/users/19668447/eramos",children:Object(o.jsx)(d.a,{icon:j.c,size:"3x"})})]})})},m=a(12),u=a.p+"static/media/Eder F Ramos.bd6865a8.pdf",h=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Resume"}),Object(o.jsx)("button",{className:"w3-button w3-light-grey w3-padding-large w3-margin-top",children:Object(o.jsxs)("a",{href:u,download:"Eder's Resume",children:[Object(o.jsx)(d.a,{icon:m.a,size:"3x"})," Download Resume"]})})]})},f=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"About Me"}),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("img",{src:a(25).default,alt:"eder",className:"img-thumbnail mx-1"})}),Object(o.jsx)("p",{children:"Hello, welcome to my portfolio. As you can see I'm a big sports fan, actually more of a soccer fan overall but, I still like to be a super-fan when it comes to LA sports. I recently started learning how to code, and learned some now skill like, JavaScript, Web APIs, Node.js, Object Oriented Programing, SQL/NoSql, PWAs, and React. I hope to someday land a job where I can put my skills to work. In the mean time, please feel free to check out some of my projects, I'll be adding more content as I improve. "})]})},g=a.p+"static/media/meural.7db45ec5.png",O=a.p+"static/media/covid-hub.7fd1434a.png",x=a.p+"static/media/weather-dashboard.c5dccfc9.png",p=a.p+"static/media/scheduler.45d2676f.png",v=a.p+"static/media/budget-tracker.1ca0a447.png",k=a.p+"static/media/la-locals.296d89fe.png",w=function(){var e=Object(r.useState)([{href:"https://meural.herokuapp.com/",name:"Meural",image:g},{href:"https://mooka0.github.io/covid19-info-hub/",name:"Covid-19 Info Hub",image:O},{href:"https://eramos3.github.io/Weather-Dashboard/",name:"Weather Dashboard",image:x},{href:"https://eramos3.github.io/work-day-scheduler/",name:"Day Scheduler",image:p},{href:"https://bdget-traker.herokuapp.com/",name:"Budget Tracker",image:v},{href:"http://la-locals.herokuapp.com/",name:"LA-LOCALS",image:k}]),t=Object(i.a)(e,1)[0];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"My Portfolio"}),Object(o.jsx)("div",{className:"grid-container",children:t.map((function(e){return Object(o.jsx)("div",{className:"grid-item",style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:Object(o.jsx)("div",{className:"w3-col l6",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:e.href,children:e.name})})},e.name)}))})]})},y=a(6),N=a(10);var S=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),s=Object(i.a)(n,2),l=s[0],d=s[1],j=a.name,b=a.email,m=a.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."))};return Object(o.jsxs)("section",{className:"container",children:[Object(o.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||l||c(Object(N.a)(Object(N.a)({},a),{},Object(y.a)({},e.target.name,e.target.value)))},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",defaultValue:j,onBlur:u,name:"name"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(o.jsx)("input",{type:"email",defaultValue:b,name:"email",onBlur:u})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",defaultValue:m,onBlur:u,rows:"5"})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var A=function(){var e=Object(r.useState)("About"),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{currentPage:a,handlePageChange:c}),Object(o.jsx)("div",{className:"container",children:function(){switch(a){case"Resume":return Object(o.jsx)(h,{});case"About":return Object(o.jsx)(f,{});case"Portfolio":return Object(o.jsx)(w,{});case"Contact":return Object(o.jsx)(S,{})}}()}),Object(o.jsx)(b,{})]})},C=function(){return Object(o.jsx)(A,{})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),I()}},[[26,1,2]]]);
//# sourceMappingURL=main.794ecc46.chunk.js.map