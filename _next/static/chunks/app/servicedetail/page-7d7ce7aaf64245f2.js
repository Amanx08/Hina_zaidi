(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{270:function(e,s,a){Promise.resolve().then(a.bind(a,8208))},8208:function(e,s,a){"use strict";a.r(s);var t=a(7437),c=a(7136);a(278);var i=a(1712),n=a(5953),l=a(3570),r=a(7935),d=a(757),o=a(6005),h=a(2265),m=a(9376);s.default=()=>{let[e,s]=(0,h.useState)([]),[a,x]=(0,h.useState)([]),[j,p]=(0,h.useState)([]),[u,N]=(0,h.useState)([]),[_,v]=(0,h.useState)([]),[g,f]=(0,h.useState)(!0),[b,y]=(0,h.useState)(!0);return((0,h.useEffect)(()=>{(async()=>{f(!0);try{let e=await fetch("".concat(d.J,"?sheetName=service1"));if(!e.ok){y(!1);return}let a=await e.json();if(!a||0===a.length){y(!1);return}s(a[0]),x(a[1]),p(a[2]),N(a[3]),v(a[4])}catch(e){y(!1),console.error("Error fetching API:")}finally{f(!1)}})()},[]),g)?(0,t.jsx)("main",{className:"page_content",children:(0,t.jsx)(o.Z,{})}):b?(0,t.jsxs)("main",{clasName:"page_content",children:[(0,t.jsx)(c.Z,{title:e.heading}),(0,t.jsx)(n.Z,{data:a}),(0,t.jsx)(l.Z,{data:j}),(0,t.jsx)(r.Z,{data:u}),(0,t.jsx)(i.Z,{data:_})]}):(0,m.notFound)()}},6005:function(e,s,a){"use strict";var t=a(7437);a(2265),s.Z=()=>(0,t.jsx)("section",{className:"page_banner decoration_wrapper",children:(0,t.jsx)("div",{className:"container ",children:(0,t.jsx)("div",{className:"page-loader",children:(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)("div",{className:"circle"}),(0,t.jsx)("div",{className:"circle"}),(0,t.jsx)("div",{className:"circle"}),(0,t.jsx)("div",{className:"shadow"}),(0,t.jsx)("div",{className:"shadow"}),(0,t.jsx)("div",{className:"shadow"}),(0,t.jsx)("span",{children:"Loading..."})]})})})})},7136:function(e,s,a){"use strict";var t=a(7437);a(1268),a(2265),s.Z=e=>{let{title:s}=e;return(0,t.jsxs)("section",{className:"page_banner decoration_wrapper",children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsx)("h1",{className:"page_title mb-0",children:s||"Page Name"})}),(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsxs)("ul",{className:"breadcrumb_nav unordered_list justify-content-lg-end justify-content-center",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:s||"Page Name"})]})})]})}),(0,t.jsx)("div",{className:"decoration_item shape_leaf_1",children:(0,t.jsx)("img",{src:"/images/shapes/shape_leaf_left.svg",alt:"Shape Leaf - Talking Minds - Psychotherapist Site Template"})}),(0,t.jsx)("div",{className:"decoration_item shape_leaf_2",children:(0,t.jsx)("img",{src:"/images/shapes/shape_leaf_right.svg",alt:"Shape Leaf - Talking Minds - Psychotherapist Site Template"})})]})}},278:function(e,s,a){"use strict";var t=a(7437),c=a(5217),i=a(1268);a(2265),s.Z=e=>{let{data:s}=e;return(0,t.jsx)("section",{className:"consultation_section section_space_lg",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"consultation_form bg_primary_light decoration_wrapper",children:[(0,t.jsx)("div",{className:"section_heading text-center",children:(0,t.jsx)("h2",{className:"section_heading_text mb-0",children:(0,t.jsx)("span",{className:"d-md-block",children:s.heading||"Get in Touch"})})}),(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-lg-4"})}),(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsxs)("div",{className:"col-lg-7",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"input_name",children:"Name"}),(0,t.jsx)("input",{id:"input_name",className:"form-control",type:"text",name:"name",placeholder:"Your Name"})]})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"input_phone",children:"Phone"}),(0,t.jsx)("input",{id:"input_phone",className:"form-control",type:"tel",name:"phone",placeholder:"Mobile phone number"})]})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"select_therapy",children:"Section"}),(0,t.jsxs)("select",{id:"select_therapy",className:"form-select","aria-label":"Therapy Select Options",children:[(0,t.jsx)("option",{defaultValue:"",children:"Select Therapy"}),(0,t.jsx)("option",{defaultValue:"Therapy One",children:"Therapy One"}),(0,t.jsx)("option",{defaultValue:"Therapy Two",children:"Therapy Two"}),(0,t.jsx)("option",{defaultValue:"Therapy Three",children:"Therapy Three"})]})]})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"input_calendar",children:"Date Of Birth"}),(0,t.jsx)("input",{id:"input_calendar",className:"form-control",type:"date",name:"date"})]})})]}),(0,t.jsx)("div",{className:"btn_wrap pb-0 text-center",children:(0,t.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[(0,t.jsx)("span",{className:"btn_text","data-text":"Get A Consultation",children:"Get A Consultation"}),(0,t.jsx)("span",{className:"btn_icon",children:(0,t.jsx)(i.G,{icon:c.eFW})})]})})]})}),(0,t.jsx)("div",{className:"decoration_item shape_leaf_1",children:(0,t.jsx)("img",{src:"/images/Vector2.png",alt:"Shape Leaf - Talking Minds - Psychotherapist Site Template"})}),(0,t.jsx)("div",{className:"decoration_item shape_leaf_2",children:(0,t.jsx)("img",{src:"/images/Vector1.png",alt:"Shape Leaf - Talking Minds - Psychotherapist Site Template"})})]})})})}},3570:function(e,s,a){"use strict";var t=a(7437),c=a(7648),i=a(1268),n=a(5217),l=a(2265),r=a(757);s.Z=e=>{var s,a,d,o;let{data:h,bg:m}=e,{heading:x,subheading:j,btn_title:p,card:u}=h,N=(0,r.Z)(u)||[],_=Object.keys(N)[0],[v,g]=(0,l.useState)(_);return(0,l.useEffect)(()=>{_&&g(_)},[_]),(0,t.jsx)("section",{className:"service_section section_space_lg ".concat(m?"":"bg_primary_light"),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section_heading text-center",children:[(0,t.jsx)("h2",{className:"section_heading_text",children:x}),(0,t.jsx)("p",{className:"section_heading_description mb-0",children:j})]}),(0,t.jsx)("div",{className:"pricing_toggle_btn_wrap",children:(0,t.jsx)("div",{className:"pricing_toggle_btn",children:Object.keys(N).map(e=>(0,t.jsx)("span",{className:"pricing_toggle_tab ".concat(v===e?"active":""),onClick:()=>g(e),children:N[e].label},e))})}),(0,t.jsx)("div",{className:"row justify-content-center",children:(null===(a=N[v])||void 0===a?void 0:null===(s=a.data)||void 0===s?void 0:s.length)>0?null===(o=N[v])||void 0===o?void 0:null===(d=o.data)||void 0===d?void 0:d.map((e,s)=>{let{title:a,description:l,img:r,button_title:d,button_link:o}=e;return(0,t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,t.jsxs)("div",{className:"service_item",children:[(0,t.jsx)("div",{className:"item_icon",children:(0,t.jsx)("img",{src:r,alt:a})}),(0,t.jsxs)("div",{className:"item_contact",children:[(0,t.jsx)("h3",{className:"item_title",children:a}),(0,t.jsx)("p",{children:l}),(0,t.jsxs)(c.default,{className:"btn-link",href:o||"",children:[(0,t.jsx)("span",{className:"btn_text",children:d||"Learn More"}),(0,t.jsx)("span",{className:"btn_icon",children:(0,t.jsx)(i.G,{icon:n.eFW})})]})]})]})},s)}):(0,t.jsx)("p",{children:"No services available for this category."})}),(0,t.jsx)("div",{className:"btn_wrap pb-0 text-center",children:(0,t.jsxs)(c.default,{className:"btn btn-primary",href:"/service.html",children:[(0,t.jsx)("span",{className:"btn_text","data-text":p||"All Programs",children:p||"All Programs"}),(0,t.jsx)("span",{className:"btn_icon",children:(0,t.jsx)(i.G,{icon:n.Px4})})]})})]})})}},757:function(e,s,a){"use strict";a.d(s,{J:function(){return c}});var t=a(2265);let c="https://script.google.com/macros/s/AKfycbyOJlLpIu1cDi7kt6jrwsHwntyvHtb6WrEI33jiBjTSwAcI_b_ixrSn5CMMPL-SGAKxZw/exec";s.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],[s,a]=(0,t.useState)(null);return(0,t.useEffect)(()=>{try{let s=JSON.parse(e);a(s)}catch(e){}},[e]),s}}},function(e){e.O(0,[676,755,972,21,971,117,744],function(){return e(e.s=270)}),_N_E=e.O()}]);