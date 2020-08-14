(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{28:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(1),r=a(3),l=[{title:"Developing A Photo Gallery Microservice",technology:["React","Styled Components","React Router","HTML","CSS","Node","Express","MongoDB","Webpack","AWS","Docker"],situation:"Worked with a team of 3 other developers to create a product page for real estate properties that combined 4 microservices.",actions:["Created photo gallery front end. UI included a modal image carousel, a form for requesting more information, and additional tabs for geo-spatial information.","Implemented RESTful APIs and designed schema for MongoDB.","Created proxy server that combined microservices and that served the product page.","Deployed microservices and proxy server onto AWS.","Optimized product page performance for load time and accessibility using Lighthouse."],result:"Deployed product page has first meaningful paint under 2s.",href:"https://github.com/joshua-t-liu/image-gallery",elementId:"img-gallery"},{title:"Designing and Scaling A Customer Reviews Microservice",technology:["Node","Express","Nginx","PostgreSQL","Redis","AWS","Loader.io","New Relic"],situation:"Worked on designing and scaling a customer reviews microservice for an apparel web application. Goal was to scale microservice service to handle 1000 RPS under load with average load times under 50ms. Database included 50 million customer review records.",actions:["Desgined schema for PostgreSQL database.","Benchmarked database on local machine.","Designed RESTful APIs for microservice.","Deployed microservice onto AWS.","Tested performance using Loader.io and New Relic.","Implemented optimization strategies such as load balancing (Nginx) and caching (Redis)."],result:"Service handles 1200 RPS under load with an average load time of 50ms delay.",href:"https://github.com/joshua-t-liu/reviews-module"}];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const c=o.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
`,d=o.a.div`
  display: flex;
  flex-direction: column;
  padding: 5em 0;
  width: 50%;
  @media (max-width: ${"768px"}) {
    width: 90%;
  }
`,m=o.a.h2`
  margin: 0;
  align-self: center;
  font-size: 3em;
  text-align: center;
  &:after {
    content: ${({technology:e})=>e?`"${e.join(", ")}"`:null};
    font-size: 0.4em;
    display: block;
    text-align: center;
    margin-top: 0.25em;
    font-weight: normal;
  }
  @media (max-width: ${"768px"}) {
    text-align: left;
    &:after {
      text-align: left;
    }
  }
`,g=o.a.div`
`,p=o.a.p`
  font-size: 1.5em;
  margin-top: 2em;
`,u=o.a.li`
  font-size: 1.5em;
  margin-top: 1em;
  &:first-child {
    margin-top: 0;
  }
`,f=o.a.p`
  font-size: 1.5em;
`,h=o.a.div`
  box-sizing: border-box;
  height: 1px;
  width: 100%;
  max-width: 1366px;
  display: block;
  margin: 0px auto;
  background: rgb(236, 236, 236);
`,v=o.a.p`
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 0;
`,y=o.a.ul`
  padding: 1.5em;
  padding-top: 1em;
`,w=o.a.div`
  margin: 3em 0;
`,x=e=>n.a.createElement(d,{even:e.even},n.a.createElement(m,{technology:e.technology},e.title),n.a.createElement(g,null,n.a.createElement(p,null,e.situation),n.a.createElement(v,null,"What I did:"),n.a.createElement(y,null,e.actions.map(e=>n.a.createElement(u,null,e))),n.a.createElement(f,null,e.result)),e.elementId&&n.a.createElement(w,{id:e.elementId}),n.a.createElement("div",{style:{margin:"auto",marginTop:"3em"}},n.a.createElement(r.d,{href:e.href})));o.a.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.25em;
`,o.a.div`
  display: flex;
  flex-direction: column;
`;t.default=()=>(Object(i.useEffect)(()=>window.scrollTo(0,0),[]),n.a.createElement(c,null,l.map((e,t)=>n.a.createElement(n.a.Fragment,null,t>0&&n.a.createElement(h,null),n.a.createElement(x,s({key:t,even:t%2==0},e))))))}}]);