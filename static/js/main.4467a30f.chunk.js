(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/me.001405b0.jpeg"},24:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a.n(r),n=a(9),s=a.n(n),i=(a(15),a(16),a(5)),o=a(0);var l=function(e){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h2",{children:Object(o.jsxs)("a",{style:{textDecorationLine:"none"},"data-testid":"link",href:"https://eramos3.github.io/my-react-portfolio/",children:[Object(o.jsx)("span",{role:"img","aria-label":"camera",children:" \u26bd\ufe0f"})," Eder Francisco Ramos"]})}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row px-1",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(o.jsx)("li",{className:"mx-1",children:Object(o.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"navActive":"nav-link",children:t})},t)}))})})]})},d=a(3),h=a(6);var j=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("footer",{children:[Object(o.jsx)("a",{alt:"linkedin",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/eder-francisco-ramos/",children:Object(o.jsx)(d.a,{icon:h.b,size:"3x"})}),Object(o.jsx)("a",{alt:"github",target:"_blank",rel:"noreferrer",href:"https://github.com/eramos3",children:Object(o.jsx)(d.a,{icon:h.a,size:"3x"})}),Object(o.jsx)("a",{alt:"stackoverflow",target:"_blank",rel:"noreferrer",href:"https://stackexchange.com/users/19668447/eramos",children:Object(o.jsx)(d.a,{icon:h.c,size:"3x"})})]})})},m=a(10),b=a.p+"static/media/Eder F Ramos.66e6aab5.pdf",u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Resume"}),Object(o.jsx)("button",{className:"w3-button w3-light-grey w3-padding-large w3-margin-top",children:Object(o.jsxs)("a",{href:b,download:"Eder's Resume",children:[Object(o.jsx)(d.a,{icon:m.a,size:"3x"})," Download Resume"]})})]})},p=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"About Me"}),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("img",{src:a(23).default,alt:"eder",className:"img-thumbnail mx-1"})}),Object(o.jsx)("p",{children:"Hello, welcome to my portfolio. I'm a big sports fan, actually more of a soccer fan overall but, I still like to be a super-fan when it comes to LA sports. I recently started learning how to code, and learned some new skills like, JavaScript, Web APIs, Node.js, Object Oriented Programing, SQL/NoSql, PWAs, and React. I hope to someday land a job where I can translate my skills into work. In the mean time, please feel free to check out some of my projects, I'll be adding more content as I improve. "})]})},f=a.p+"static/media/meural.7db45ec5.png",g=a.p+"static/media/book-search.111132d5.png",x=a.p+"static/media/weather-dashboard.c5dccfc9.png",O=a.p+"static/media/scheduler.45d2676f.png",k=a.p+"static/media/budget-tracker.1ca0a447.png",v=a.p+"static/media/la-locals.296d89fe.png",w=a.p+"static/media/pizza-hunt.fb093f57.png",y=a.p+"static/media/thoughts.cc54d049.png",N=function(){var e=Object(r.useState)([{href:"https://meural.herokuapp.com/",name:"Meural",image:f},{href:"https://arcane-brushlands-36937.herokuapp.com/",name:"Book Search Engine",image:g},{href:"https://eramos3.github.io/Weather-Dashboard/",name:"Weather Dashboard",image:x},{href:"https://eramos3.github.io/work-day-scheduler/",name:"Day Scheduler",image:O},{href:"https://bdget-traker.herokuapp.com/",name:"Budget Tracker",image:k},{href:"http://la-locals.herokuapp.com/",name:"LA-LOCALS",image:v},{href:"https://rocky-depths-37921.herokuapp.com/",name:"Pizza Hunt",image:w},{href:"https://ancient-castle-37434.herokuapp.com/",name:"Deep Thoughts",image:y}]),t=Object(i.a)(e,1)[0];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"My Portfolio"}),Object(o.jsx)("div",{className:"grid-container",children:t.map((function(e){return Object(o.jsx)("div",{className:"grid-item",style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:Object(o.jsx)("div",{className:"w3-col l6",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:e.href,children:e.name})})},e.name)}))})]})},P=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Contact"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"flex-col",children:[Object(o.jsx)("h2",{children:"Feel free to reach out to me. Details are below"}),Object(o.jsx)("br",{}),Object(o.jsxs)("address",{children:[" Email: ",Object(o.jsx)("a",{href:"mailto:efpramos3@gmail.com",children:"Eder F Ramos "})]}),Object(o.jsx)("p",{children:"CITY: Los Angeles, CA"})]})]})};var C=function(){var e=Object(r.useState)("About"),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{currentPage:a,handlePageChange:c}),Object(o.jsx)("div",{className:"container",children:function(){switch(a){case"Resume":return Object(o.jsx)(u,{});case"About":return Object(o.jsx)(p,{});case"Portfolio":return Object(o.jsx)(N,{});case"Contact":return Object(o.jsx)(P,{})}}()}),Object(o.jsx)(j,{})]})},I=function(){return Object(o.jsx)(C,{})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),A()}},[[24,1,2]]]);
//# sourceMappingURL=main.4467a30f.chunk.js.map