(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),l=a(3);const c=i.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;
`,m=i.a.h1`
  margin-top: ${({sticky:e})=>e?"-0.05em":null};
  font-family: cursive;
  font-size: 5em;
  text-align: center;
  transition: margin-top 0.2s ease-in;
  &:after {
    content: 'Full stack engineer.  Math major. Software implementation experience.';
    font-size: 0.4em;
    display: block;
    margin-top: 0.25em;
    // font-weight: normal;
    font-family: sans-serif;
  }
  @media (max-width: ${"768px"}) {
    font-size: 4em;
  }
`,o=i.a.p`
  font-size: 1.5em;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  @media (max-width: ${"1248px"}) {
    width: 90%;
  }
  // @media (max-width: ${"768px"}) {
  //   text-align: left;
  // }
`;var s=({stickyTitle:e,setStickyTitle:t,stickyChat:a,setStickyChat:i})=>{const s=Object(n.useRef)(),g=Object(n.useRef)();return Object(n.useEffect)(()=>{const e=new IntersectionObserver(e=>{e.forEach(e=>{e.target===g.current&&i(!e.isIntersecting),e.target===s.current&&t(!e.isIntersecting)})},{root:null,rootMargin:"0px",threshold:1});e.observe(s.current),e.observe(g.current)},[]),r.a.createElement(c,null,r.a.createElement(m,{ref:s,sticky:e},"Joshua Liu"),r.a.createElement(o,null,"This is my personal website where I showcase my front end skills in developing responsive, accessible web applications. Actively looking for new opportunities, and would love to connect and hear from you."),r.a.createElement(l.a,{ref:g,margin:"6em 0"},"LET'S CHAT"))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const d=i.a.div`
  display: flex;
  flex-direction: column;
  padding: 5em 0;
  align-items: center;
  text-align: center;
  background-color: rgb(247,247,247);
`,h=i.a.h2`
  font-size: 3em;
  margin: 0;
`,u=i.a.div`
  font-size: 1.5em;
  margin-top: 1em;
`,f=i.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1em 0;
`,p=i.a.div`
  display: flex;
  width: 10em;
  height: 6em;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  background-color: rgb(255,255,255);
  border-radius: 0.25em;
  padding: 1em;
  margin 1em;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 0px, rgba(0, 0, 0, 0.16) 0px 47px 46px -27px;
  @media (max-width: ${"768px"}) {
    margin-top: 1em;
  }
`,v=i.a.p`
  font-size: 0.75em;
  font-weight: normal;
  line-height: 1.75em;
  text-align: left;
`,x=i.a.div`
  color: dodgerblue;
  @media (max-width: ${"768px"}) {
    align-self: flex-start;
  }
`,y={languages:["JavaScript","Python","MUMPS"],frameworks:{"Front End":["React","React-Native","Redux","React Router","jQuery","HTML","CSS"],"Back End":["Node","Express","Nginx","SQL","MySQL","PostgreSQL","MongoDB","Redis"],Other:["Docker","AWS","Git","Jest, Enzyme","Webpack","Mocha, Chai","New Relic","Loader.io"]}};var w=()=>{const e=Object(n.useRef)(),[t,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{new IntersectionObserver(t=>{t.forEach(t=>{t.target,e.current})},{root:null,rootMargin:"0px",threshold:0}).observe(e.current)},[]),r.a.createElement(d,null,r.a.createElement(h,null,"What's On The Table"),r.a.createElement(u,null,r.a.createElement("b",null,"Languages:")," ",y.languages.join(", ")),r.a.createElement(f,null,Object.entries(y.frameworks).map(([a,n],i)=>r.a.createElement(p,g({ref:i?null:e},{align:t}),r.a.createElement(x,null,a),r.a.createElement(v,null,n.join(", "))))))};const E=i.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;
  text-align: center;
  &.gray {
    background-color: rgb(247,247,247);
  }
`,b=i.a.h2`
  font-size: 3em;
  margin: 0;
`,k=i.a.div`
  font-size: 1.5em;
  margin-top: 1em;
`,z=i.a.div`
  position: relative;
  margin-top: 1.5em;
  align-self: stretch;
  min-height: calc(100vh - 16em);
  z-index: -1;
`,V=i.a.div`
  background-color: rgb(247,247,247);
  border-radius: 50%;
  font-size: 2.5em;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  left: 50%;
  height: ${({size:e})=>2.25*e+"em"};
  width: ${({size:e})=>2.25*e+"em"};
  transform: ${({transform:e})=>""+e};
  z-index: -1;
`,S=i.a.div`
  font-size: 0.5em;
  margin-top: 0.5em;
  font-weight: 900;
`,M=({company:e,years:t,...a})=>r.a.createElement(V,a,r.a.createElement("div",null,t),r.a.createElement(S,null,e)),H=i.a.div`
  width: 15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em;
`,j=i.a.div`
  background-color: rgb(255,255,255);
  border-radius: 50%;
  height: 10em;
  width: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
`,O=i.a.div`
  display: flex;
  margin-top: 3em;
  align-items: center;
  @media (max-width: ${"768px"}) {
    flex-direction: column;
  }
`,T=i.a.p`
  color: rgb(123,123,123);
  text-align: center;
`,Z=({image:e,title:t,degree:a})=>{const n=e;return r.a.createElement(H,null,r.a.createElement(j,null,r.a.createElement(n,null)),r.a.createElement(k,null,r.a.createElement("b",null,t)),r.a.createElement(T,null,a))},A=[{title:"Georgia Institute of Techology",degree:"B.S. Mathematics",image:()=>r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"graduate","enable-background":"new 0 0 300 300",height:"8em",width:"8em",fill:"rgb(74,74,74)",viewBox:"0 0 300 300"},r.a.createElement("g",null,r.a.createElement("path",{d:"m237.129 57.037-91.375-26.875c-.784-.23-1.619-.215-2.394.043l-80.625 26.875c-1.633.545-2.735 2.073-2.735 3.795s1.102 3.25 2.735 3.795l9.653 3.218v46.143c-5.14 1.554-8.895 6.33-8.895 11.969 0 6.896 5.61 12.506 12.506 12.506s12.506-5.61 12.506-12.506c0-5.35-3.383-9.913-8.117-11.695v-43.75l11.612 3.87v34.825c0 .171.017.339.038.506-.012.126-.038.249-.038.378v23.422c0 16.37 9.245 31.436 23.553 38.38l12.447 6.041v8.023h-9.067c-30.29 0-54.933 24.643-54.933 54.932v25.068c0 2.209 1.791 4 4 4h156c2.209 0 4-1.791 4-4v-25.068c0-30.289-24.643-54.932-54.932-54.932h-9.068v-8.379l12.137-5.762c14.496-6.883 23.863-22.006 23.863-38.53v-24.079-33.617l37.129-10.92c1.702-.501 2.871-2.063 2.871-3.838s-1.169-3.337-2.871-3.838zm-161.129 73.469c-2.484 0-4.506-2.021-4.506-4.506 0-2.484 2.021-4.506 4.506-4.506s4.506 2.021 4.506 4.506c0 2.484-2.022 4.506-4.506 4.506zm144 110.426v21.068h-24v-24c0-2.209-1.791-4-4-4s-4 1.791-4 4v24h-84v-24c0-2.209-1.791-4-4-4s-4 1.791-4 4v24h-24v-21.068c0-25.878 21.054-46.932 46.933-46.932h9.185c.999 8.986 8.634 16 17.882 16s16.883-7.014 17.882-16h9.186c25.878 0 46.932 21.054 46.932 46.932zm-64-48.932c0 5.514-4.486 10-10 10s-10-4.486-10-10v-10.141l.827.401c2.761 1.34 5.729 2.01 8.698 2.01 2.913 0 5.826-.645 8.545-1.936l1.93-.916zm16.705-27.368-22.066 10.477c-3.284 1.56-7.047 1.543-10.319-.045l-21.273-10.325c-11.571-5.616-19.047-17.856-19.047-31.183v-18.519c13.316 4.662 27.571 6.995 42.685 6.995 15.558 0 32.028-2.479 49.315-7.42v18.718c0 13.449-7.573 25.736-19.295 31.302zm19.295-58.345c-34.913 10.399-65.069 10.479-92 .238v-29.433l43.36 14.453c.41.137.837.205 1.265.205.38 0 .76-.054 1.129-.162l46.246-13.602zm-47.3-22.728-68.051-22.684 68.051-22.684 77.124 22.684z"})))},{title:"Hack Reactor",degree:"Advanced Software Engineering Immersive Program",image:()=>r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7em",height:"7em",viewBox:"0 0 128 128",fill:"rgb(74,74,74)"},r.a.createElement("path",{d:"M121.25,20.673h-2.313V15.517a6.757,6.757,0,0,0-6.75-6.75h-7.25a6.757,6.757,0,0,0-6.749,6.75v17.5H79.531v-.556a6.5,6.5,0,0,0-5.726-6.511,6.389,6.389,0,0,0-4.884,1.619q-.169.155-.327.32-.157-.165-.327-.32a6.363,6.363,0,0,0-4.885-1.619,6.192,6.192,0,0,0-3.943,1.987,6.314,6.314,0,0,0-9.22-.035,6.335,6.335,0,0,0-10.938,4.362v.753H29.813v-17.5a6.758,6.758,0,0,0-6.75-6.75h-7.25a6.757,6.757,0,0,0-6.75,6.75v5.156H6.75A6.758,6.758,0,0,0,0,27.423V56.986a6.758,6.758,0,0,0,6.75,6.75H9.063v5.156a6.757,6.757,0,0,0,6.75,6.75h7.25a6.758,6.758,0,0,0,6.75-6.75v-17.5H39.3c0,.038,0,.077.006.115a1.709,1.709,0,0,0-.023.228v7.2a18.9,18.9,0,0,0,2.348,9.111l6.84,12.39v37.047a1.75,1.75,0,0,0,1.75,1.75H77.781a1.75,1.75,0,0,0,1.75-1.75V80.534L86.7,70.2a11.277,11.277,0,0,0,2.02-6.455V51.389h9.469v17.5a6.757,6.757,0,0,0,6.749,6.75h7.25a6.757,6.757,0,0,0,6.75-6.75V63.736h2.313a6.758,6.758,0,0,0,6.75-6.75V27.423A6.758,6.758,0,0,0,121.25,20.673ZM70.344,32.267a2.844,2.844,0,0,1,3.128-2.83,2.976,2.976,0,0,1,2.559,3.027v.556H70.174A1.74,1.74,0,0,0,70.344,32.267Zm-6.629-2.83c.095-.009.191-.014.285-.014a2.845,2.845,0,0,1,2.844,2.844,1.74,1.74,0,0,0,.17.753H64a6.357,6.357,0,0,0-2.844.675V32.464A2.976,2.976,0,0,1,63.715,29.437ZM66.844,51.05a2.844,2.844,0,1,1-5.688,0V44.971a6.649,6.649,0,0,0,3.041.737h2.647ZM54.813,29.423a2.847,2.847,0,0,1,2.843,2.844V51.05a2.844,2.844,0,1,1-5.687,0V32.267A2.847,2.847,0,0,1,54.813,29.423ZM42.781,32.267a2.844,2.844,0,1,1,5.688,0V51.05a2.844,2.844,0,0,1-5.688,0V32.267ZM6.75,60.236a3.254,3.254,0,0,1-3.25-3.25V27.423a3.254,3.254,0,0,1,3.25-3.25H9.063V60.236Zm19.563,8.656a3.254,3.254,0,0,1-3.25,3.25h-7.25a3.253,3.253,0,0,1-3.25-3.25V15.517a3.253,3.253,0,0,1,3.25-3.25h7.25a3.254,3.254,0,0,1,3.25,3.25V68.892Zm3.5-32.372h9.468V47.889H29.813ZM85.219,63.748a7.789,7.789,0,0,1-1.4,4.46l-7.48,10.78a1.752,1.752,0,0,0-.312,1v35.747H51.969V79.986a1.75,1.75,0,0,0-.218-.846L44.693,66.355a15.392,15.392,0,0,1-1.912-7.42V56.712a6.3,6.3,0,0,0,7.438-1.3,6.314,6.314,0,0,0,9.187,0,6.315,6.315,0,0,0,9.188,0A6.335,6.335,0,0,0,79.531,51.05V43.958a1.75,1.75,0,0,0-1.75-1.75H64.2a2.976,2.976,0,0,1-3.027-2.559c-.009-.089-.013-.178-.014-.266v-.038A2.845,2.845,0,0,1,64,36.52H77.394l.314.019.02,0a7.828,7.828,0,0,1,7.491,7.808v19.4ZM70.344,45.708h5.687V51.05a2.844,2.844,0,1,1-5.687,0Zm18.375,2.181V44.345a11.288,11.288,0,0,0-3.145-7.825H98.188V47.889Zm26.718,21a3.254,3.254,0,0,1-3.25,3.25h-7.25a3.254,3.254,0,0,1-3.25-3.25V15.517a3.254,3.254,0,0,1,3.25-3.25h7.25a3.254,3.254,0,0,1,3.25,3.25V68.892ZM124.5,56.986a3.254,3.254,0,0,1-3.25,3.25h-2.313V24.173h2.313a3.254,3.254,0,0,1,3.25,3.25Z"}))}];var C=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,r.a.createElement(b,null,"7 Years of Software Implementation Experience"),r.a.createElement(k,null,"Working with Epic, an enterprise healthcare software"),r.a.createElement(z,null,r.a.createElement(M,{company:"Epic",years:"3 years",size:3,transform:"translate(-7em, -6em)"}),r.a.createElement(M,{company:"HCI Group",years:"1 year",size:2,transform:"translate(0.5em, -4.5em)"}),r.a.createElement(M,{company:"Mass General Brigham",years:"2 years",size:2.5,transform:"translate(1em, 0.5em)"}),r.a.createElement(M,{company:"Huron Consulting",years:"1 year",size:2,transform:"translate(-4em, 1em)"}))),r.a.createElement(E,{className:"gray"},r.a.createElement(b,null,"Where I've Studied"),r.a.createElement(O,null,A.map(e=>r.a.createElement(Z,e)))));t.default=({stickyTitle:e,setStickyTitle:t,stickyChat:a,setStickyChat:i})=>(Object(n.useEffect)(()=>window.scrollTo(0,0),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{stickyTitle:e,setStickyTitle:t,stickyChat:a,setStickyChat:i}),r.a.createElement(w,null),r.a.createElement(C,null)))}}]);