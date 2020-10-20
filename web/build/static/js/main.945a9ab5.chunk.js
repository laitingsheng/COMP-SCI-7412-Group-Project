/*! For license information please see main.945a9ab5.chunk.js.LICENSE.txt */
(this["webpackJsonpdev.tinson.uoa.sse.group-project.web"]=this["webpackJsonpdev.tinson.uoa.sse.group-project.web"]||[]).push([[0],{35:function(e,a,t){e.exports=t(67)},47:function(e,a,t){},48:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(14),r=t.n(s),c=t(11),o=t(7),m=(t(40),t(41),t(42),t(43),t(44),t(45),t(46),t(47),t(48),t(68)),i=t(69),p=t(83),d=t(70),u=t(71),E=t(72),g=t(73),h=t(74);class b extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{className:"navbar-horizontal navbar-main navbar-dark navbar-transparent",expand:"lg",id:"navbar-main"},l.a.createElement(i.a,null,l.a.createElement("button",{"aria-controls":"navbar-collapse","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-collapse","data-toggle":"collapse",id:"navbar-collapse",type:"button"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(p.a,{className:"navbar-custom-collapse",navbar:!0,toggler:"#navbar-collapse"},l.a.createElement("div",{className:"navbar-collapse-header"},l.a.createElement(d.a,null,l.a.createElement(u.a,{className:"collapse-close",xs:"6"},l.a.createElement("button",{"aria-controls":"navbar-collapse","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-collapse","data-toggle":"collapse",id:"navbar-collapse",type:"button"},l.a.createElement("span",null),l.a.createElement("span",null))))),l.a.createElement(E.a,{className:"mr-auto",navbar:!0},l.a.createElement(g.a,null,l.a.createElement(h.a,{to:"/login",tag:c.b},l.a.createElement("span",{className:"nav-link-inner--text"},"Login"))),l.a.createElement(g.a,null,l.a.createElement(h.a,{to:"/register",tag:c.b},l.a.createElement("span",{className:"nav-link-inner--text"},"Register"))))))))}}var v=b,N=t(4),f=t.n(N),y=t(75),x=t(76),w=t(77),S=t(78),C=t(79),k=t(80),T=t(33),j=t(81),A=t(82),F=t(34),P=t(16),I=t.n(P);t(60),t(62);I.a.initializeApp({apiKey:"AIzaSyBRn5Nf1_4JZggwEgF5ttKTePsAJg8qKe8",authDomain:"comp-sci-7412-group-project.firebaseapp.com",databaseURL:"https://comp-sci-7412-group-project.firebaseio.com",projectId:"comp-sci-7412-group-project",storageBucket:"comp-sci-7412-group-project.appspot.com",messagingSenderId:"915849829476",appId:"1:915849829476:web:6ef7b7b2b620d1cabf5371",measurementId:"G-D9QL9W718S"});var B=I.a.auth();I.a.firestore();class R extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header bg-gradient-info py-7 py-lg-8 pt-lg-9"},l.a.createElement(i.a,null,l.a.createElement("div",{className:"header-body text-center mb-7"},l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(u.a,{className:"px-5",lg:"6",md:"8",xl:"5"},l.a.createElement("h1",{className:"text-white"},this.props.title),l.a.createElement("p",{className:"text-lead text-white"},this.props.lead))))),l.a.createElement("div",{className:"separator separator-bottom separator-skew zindex-100"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},l.a.createElement("polygon",{className:"fill-default",points:"2560 0 2560 100 0 100"})))))}}var L=R;class D extends l.a.Component{constructor(...e){super(...e),this.recaptcha=l.a.createRef(),this.state={}}login(e){e.preventDefault(),this.setState({captcha:!1}),B.signInWithEmailAndPassword(this.state.email,this.state.password).then(console.log).catch(()=>this.recaptcha.current.reset())}render(){var e,a;return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{title:"Online Voting System",lead:"Please sign in with your account"}),l.a.createElement(i.a,{className:"mt--8 pb-5"},l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(u.a,{lg:"5",md:"7"},l.a.createElement(y.a,{className:"bg-secondary border-0 mb-0"},l.a.createElement(x.a,{className:"px-lg-5 py-lg-5"},l.a.createElement(w.a,{role:"form"},l.a.createElement(S.a,{className:f()("mb-3",{focused:this.state.focusedEmail})},l.a.createElement(C.a,{className:"input-group-merge input-group-alternative"},l.a.createElement(k.a,{addonType:"prepend"},l.a.createElement(T.a,null,l.a.createElement("i",{className:"ni ni-email-83"}))),l.a.createElement(j.a,{placeholder:"Email",type:"email",onFocus:()=>this.setState({focusedEmail:!0}),onBlur:()=>this.setState({focusedEmail:!1}),onChange:e=>this.setState({email:e.target.value})}))),l.a.createElement(S.a,{className:f()({focused:this.state.focusedPassword})},l.a.createElement(C.a,{className:"input-group-merge input-group-alternative"},l.a.createElement(k.a,{addonType:"prepend"},l.a.createElement(T.a,null,l.a.createElement("i",{className:"ni ni-lock-circle-open"}))),l.a.createElement(j.a,{placeholder:"Password",type:"password",onFocus:()=>this.setState({focusedPassword:!0}),onBlur:()=>this.setState({focusedPassword:!1}),onChange:e=>this.setState({password:e.target.value})}))),l.a.createElement(F.a,{theme:"light",sitekey:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",onChange:()=>this.setState({captcha:!0}),onExpired:()=>this.setState({captcha:!1}),ref:this.recaptcha}),l.a.createElement("div",{className:"text-center"},l.a.createElement(A.a,{className:"my-4",color:"info",type:"button",onClick:e=>this.login(e),disabled:!((null===(e=this.state.email)||void 0===e?void 0:e.length)&&(null===(a=this.state.password)||void 0===a?void 0:a.length)&&this.state.captcha)},"Sign in"))))),l.a.createElement(d.a,{className:"mt-3"},l.a.createElement(u.a,{xs:"6"}),l.a.createElement(u.a,{className:"text-right",xs:"6"},l.a.createElement(h.a,{className:"text-light",to:"/register",tag:c.b},l.a.createElement("small",null,"Create new account"))))))))}}var J=D;t(66);class z extends l.a.Component{constructor(...e){super(...e),this.state={}}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{title:"Create an account",lead:"Create a new account for voting."}),l.a.createElement(i.a,{className:"mt--8 pb-5"},l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(u.a,{lg:"6",md:"8"},l.a.createElement(y.a,{className:"bg-secondary border-0"},l.a.createElement(x.a,{className:"px-lg-5 py-lg-5"},l.a.createElement(w.a,{role:"form"},l.a.createElement(S.a,{className:f()({focused:this.state.focusedName})},l.a.createElement(C.a,{className:"input-group-merge input-group-alternative mb-3"},l.a.createElement(k.a,{addonType:"prepend"},l.a.createElement(T.a,null,l.a.createElement("i",{className:"ni ni-hat-3"}))),l.a.createElement(j.a,{placeholder:"Name",type:"text",onFocus:()=>this.setState({focusedName:!0}),onBlur:()=>this.setState({focusedName:!1})}))),l.a.createElement(S.a,{className:f()({focused:this.state.focusedEmail})},l.a.createElement(C.a,{className:"input-group-merge input-group-alternative mb-3"},l.a.createElement(k.a,{addonType:"prepend"},l.a.createElement(T.a,null,l.a.createElement("i",{className:"ni ni-email-83"}))),l.a.createElement(j.a,{placeholder:"Email",type:"email",onFocus:()=>this.setState({focusedEmail:!0}),onBlur:()=>this.setState({focusedEmail:!1})}))),l.a.createElement(S.a,{className:f()({focused:this.state.focusedPassword})},l.a.createElement(C.a,{className:"input-group-merge input-group-alternative"},l.a.createElement(k.a,{addonType:"prepend"},l.a.createElement(T.a,null,l.a.createElement("i",{className:"ni ni-lock-circle-open"}))),l.a.createElement(j.a,{placeholder:"Password",type:"password",onFocus:()=>this.setState({focusedPassword:!0}),onBlur:()=>this.setState({focusedPassword:!1})}))),l.a.createElement("div",{className:"text-muted font-italic"},l.a.createElement("small",null,"password strength: ",l.a.createElement("span",{className:"text-success font-weight-700"},"strong"))),l.a.createElement("div",{className:"text-center"},l.a.createElement(A.a,{className:"mt-4",color:"info",type:"button"},"Create account")))))))))}}var K=z;class U extends l.a.Component{constructor(...e){super(...e),this.mainContent=l.a.createRef()}componentDidMount(){this.resetScroll(),document.body.classList.add("bg-default")}componentWillUnmount(){document.body.classList.remove("bg-default")}componentDidUpdate(e){e.history.pathname!==e.location.pathname&&this.resetScroll()}resetScroll(){document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.mainContent.current.scrollTop=0}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-content",ref:this.mainContent},l.a.createElement(v,null),l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/login",component:J,key:0}),l.a.createElement(o.b,{path:"/register",component:K,key:1}),l.a.createElement(o.a,{from:"/",to:"/login"}))))}}var M=U;r.a.render(l.a.createElement(c.a,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",render:e=>l.a.createElement(M,e)}))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.945a9ab5.chunk.js.map