(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(22)},17:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(10),i=t.n(r),s=(t(17),t(2)),c=t(3),o=t(5),m=t(4),u=t(6),h=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"skills")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline",style:{top:"20%"}},e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif",paddingTop:"140px"}},e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=(t(9),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about",style:{height:"500px"}},l.a.createElement("div",{className:"row",style:{height:"300px",width:"100%",display:"flex"}},l.a.createElement("div",{className:"column text",style:{height:"250px",width:"700px"}},l.a.createElement("h1",{className:"aboutMe",style:{color:"white",display:"flex"}},e.aboutme)),l.a.createElement("div",{className:"",style:{height:"250px",width:"200px",marginLeft:"8%",marginTop:"60px"}},l.a.createElement("img",{className:"profile-pic",src:"/images/IMG_0519.png",alt:""}))))}}]),a}(n.Component)),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("a",{href:"https://docs.google.com/document/d/1fvsFLHUKN0NHJ3oStc2KjUgiI8EBjdxI23G7Hx-ZGH0/edit?usp=sharing",target:"_blank"},"FULL RESUME")))}}]),a}(n.Component),g=(t(20),t(7)),E=t(11),f=function(e){var a=e.handleClose,t=e.show,n=(e.children,e.resumeData),r=t?"modal display-block":"modal display-none";return!0===t&&(document.body.style.overflow="hidden"),!1===t&&(document.body.style.overflow="auto"),l.a.createElement("div",{className:r},l.a.createElement("section",{className:"modal-main"},l.a.createElement("div",{className:"column",style:{width:"100%",justifyContent:"center"}},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{style:{textAlign:"center"}},n.name," ",l.a.createElement(g.b,{type:"button",style:{cursor:"pointer",float:"right",marginRight:"2%",marginTop:"1px"},onClick:a})," ")),l.a.createElement("div",{className:"row",style:{justifyContent:"center"}},l.a.createElement("h1",{style:{textAlign:"start",margin:"0"}},"Description"),l.a.createElement("p",null,n.description)),l.a.createElement("div",{className:"row"},l.a.createElement("h1",{style:{textAlign:"start",margin:"0"}},"Technology"),l.a.createElement("p",null,n.tech)),l.a.createElement("div",{className:"row",style:{display:"flex",flex:"block",justifyContent:"center"}},l.a.createElement("a",{href:n.live,target:"_blank"},l.a.createElement(g.a,{size:40,color:"black"})),l.a.createElement("a",{href:n.code,target:"_blank"}," ",l.a.createElement(E.a,{size:40,color:"black"}))),l.a.createElement("div",{className:"row",style:{justifyContent:"center"}},l.a.createElement("img",{src:"".concat(n.imgurl)})))))},v=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).showModal=function(a){e.setState({selectedProj:a}),e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.state={show:!1,selectedProj:[]},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row",style:{height:"100%"}},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Some Projects."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-thirds cf"},a.portfolio&&a.portfolio.map(function(a){return l.a.createElement("div",{className:"columns portfolio-item",key:a.id,style:{width:"50%"}},l.a.createElement("div",{className:"item-wrap",style:{boxShadow:"5px 5px 5px 5px"}},l.a.createElement("img",{src:"".concat(a.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,a.name),l.a.createElement("p",null,a.description),l.a.createElement("div",{style:{height:"100px",width:"100%"}},l.a.createElement("h5",{className:"target",onClick:function(){e.setState({selectedProj:a,show:!0})},style:{border:"1px solid white",padding:"5px",width:"30%",textAlign:"center",verticalAlign:"middle",marginTop:"15px",cursor:"pointer"}},"Learn More"))))))})))),l.a.createElement(f,{show:this.state.show,handleClose:this.hideModal,resumeData:this.state.selectedProj}))}}]),a}(n.Component),b=(n.Component,function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Contact for collaboration!"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("a",{href:"mailto:"+e.email},l.a.createElement("h4",{style:{fontWeight:"bold"}},"Email :",e.email))))))}}]),a}(n.Component)),w=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),N={imagebaseurl:"https://nsuroghon.github.io/",name:"Niv Suroghon",role:"Full-Stack Developer",linkedinId:" Your LinkedIn Id",email:" nsuroghon@gmail.com",skypeid:"Your skypeid",roleDescription:"Full-Stack Developer in Toronto, ON.",socialLinks:[{name:"linkedin",url:"https://linkedin.com/in/nivsuroghon",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/nsuroghon",className:"fa fa-github"},{name:"skype",url:"",className:"fa fa-twitter"}],aboutme:"I'm a full-stack developer aiming to build aesthetically pleasing and innovative software.",address:"Toronto",website:"",education:[{UniversityName:"University of Toronto",specialization:"Graduate Studies Certificate - Full Stack Development",MonthOfPassing:"Apr",YearOfPassing:"2021",Achievements:"An intensive programme focused on gaining technical programming skills."},{UniversityName:"Western University",specialization:"Bachelor of Arts - Political Science",MonthOfPassing:"Class of",YearOfPassing:"2020",Achievements:"Educated in the fields of American/Canadian Politics, Constitutional Law, Public Policy, International Relations and Media."}],work:[{CompanyName:"Server Software",specialization:"Technology",MonthOfLeaving:"",YearOfLeaving:"",Achievements:"NodeJS, ExpressJS, SQL, MongoDB."},{CompanyName:"Client-Side Software & Design",specialization:"Technology",MonthOfLeaving:"",YearOfLeaving:"",Achievements:"JavaScript ES6+, CSS3, HTML5, Bootstrap, Query, HandlebarsJS, React."}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"DevWeb",description:"Developer portal for news, podcasts, job listings, and coding practice",imgurl:"./images/devweb.png",url:"https://github.com/group04-project03-uoftscs/Dev-Web",tech:"React, Node, Express, MongoDB + Atlas",live:"https://dev-web3.herokuapp.com",code:"https://github.com/group04-project03-uoftscs/Dev-Web",id:1},{name:"5 O'clock Somewhere",description:"Cocktail application that receives user taste preferences and returns unique recipes for the user to try at home",imgurl:"./images/cocktail.png",tech:"Javascript, HTML, Materialize CSS",live:"https://nsuroghon.github.io/5-o-Clock-Somewhere/",code:"https://github.com/nsuroghon/5-o-Clock-Somewhere",id:2},{name:"Budget Tracker",description:"A application built for users to track deposits and withdrawals to an account balance, with or without internet access. Well-suited for a user who is travelling.",imgurl:"./images/budget.png",tech:"Javascript, IndexedDB, cache API ,Service Workers",live:"https://fierce-reef-41934.herokuapp.com",code:"https://github.com/nsuroghon/Budget-Tracker",id:3},{name:"Photo Gallery",description:"A responsive gallery app with high-resolution images gathered from Pixabay API. Designed to display images geared towards user searches.",imgurl:"./images/galleryapp.png",tech:"React, Node, TailwindCSS",live:"https://nsuroghon.github.io/image-gallery/",code:"https://github.com/nsuroghon/image-gallery",id:4}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},y=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:N}),l.a.createElement(d,{resumeData:N}),l.a.createElement(v,{resumeData:N}),l.a.createElement(p,{resumeData:N}),l.a.createElement(b,{resumeData:N}),l.a.createElement(w,{resumeData:N}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){}},[[12,2,1]]]);
//# sourceMappingURL=main.49889e06.chunk.js.map