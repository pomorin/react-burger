(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"k",function(){return c}),n.d(t,"l",function(){return u}),n.d(t,"j",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return h}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return _}),n.d(t,"o",function(){return b});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",m="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",_="AUTH_LOGOUT",b="SET_AUTH_REDIRECT_PATH"},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,function(e,t,n){"use strict";var r=n(2),a=n(17),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-burger-1af43.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(19),l=function(e){return{type:r.j,error:e}},s=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then(function(t){console.log(t.data),n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(l,e)})}},d=function(){return{type:r.m}},p=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){n(function(e){return{type:r.g,error:e}}(e))})}},h=n(30),m=n.n(h),f=function(e,t){return{type:r.e,idToken:e,userId:t}},g=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},_=function(e){return function(t){setTimeout(function(){t(g())},1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i=n?"https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCYcv30UuUSVyMrr4ZdGz-1Wy1OK0D_3VQ":"https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCYcv30UuUSVyMrr4ZdGz-1Wy1OK0D_3VQ";console.log(o),m.a.post(i,o).then(function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(f(e.data.idToken,e.data.localId)),a(_(e.data.expiresIn))}).catch(function(e){a(function(e){return{type:r.b,error:e}}(e.response.data.error))})}},E=function(e){return{type:r.o,path:e}},v=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(g());else{var r=localStorage.getItem("userId");e(f(t,r));var a=(n.getTime()-(new Date).getTime())/1e3;e(_(a))}}else e(g())}};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return g}),n.d(t,"j",function(){return E}),n.d(t,"c",function(){return v})},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__2z9NQ",BreadTop:"BurgerIngredient__BreadTop__2Pkwe",Seeds1:"BurgerIngredient__Seeds1__2k2x7",Seeds2:"BurgerIngredient__Seeds2__9Mret",Meat:"BurgerIngredient__Meat__1LdrR",Cheese:"BurgerIngredient__Cheese__1eqwP",Salad:"BurgerIngredient__Salad__2WBlr",Bacon:"BurgerIngredient__Bacon__2RZZH"}},,function(e,t,n){"use strict";var r=n(30),a=n.n(r).a.create({baseURL:"https://react-burger-1af43.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__3wvlM",Open:"SideDrawer__Open__3xsf8",Close:"SideDrawer__Close__2S6c7",Logo:"SideDrawer__Logo__10IHv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},,,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(59),i=n.n(o);t.a=function(e){return e.show&&a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked})}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(8),i=n(6),c=n(7),u=n(0),l=n.n(u),s=n(62),d=n.n(s),p=n(11),h=n(28),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){console.log("[Modal] componentDidUpdate")}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(39),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},function(e,t,n){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(8),i=n(6),c=n(7),u=n(0),l=n.n(u),s=n(29),d=n(11);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.request.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error&&this.state.error.message),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,function(e,t,n){"use strict";var r=n(64),a=n(0),o=n.n(a),i=n(98),c=n(60),u=n.n(c),l=n(4),s=n(5),d=n(8),p=n(6),h=n(7),m=n(15),f=n.n(m),g=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:f.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:f.a.BreadTop},o.a.createElement("div",{className:f.a.Seeds1}),o.a.createElement("div",{className:f.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:f.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:f.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:f.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:f.a.Bacon});break;default:e=null}return e}}]),t}(a.Component);t.a=Object(i.a)(function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(g,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:u.a.Burger},o.a.createElement(g,{type:"bread-top"}),t,o.a.createElement(g,{type:"bread-bottom"}))})},,,,function(e,t,n){e.exports={Content:"Layout__Content__3KSp3"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo__Logo__2A07e"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__1eThf"}},function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},function(e,t,n){e.exports={Burger:"Burger__Burger__2h2kL"}},,function(e,t,n){e.exports={Modal:"Modal__Modal__cd320"}},function(e,t,n){e.exports={Loader:"Spinner__Loader__3dgUo",load8:"Spinner__load8__3MmNW"}},,function(e,t,n){e.exports=n(95)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(50),i=n.n(o),c=n(97),u=n(13),l=n(18),s=n(52),d=(n(74),n(4)),p=n(5),h=n(8),m=n(6),f=n(7),g=n(99),_=n(57),b=n(96),E=n(98),v=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(f.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},y=n(11),k=n(53),O=n.n(k),S=n(31),C=n.n(S),j=n(54),w=n.n(j),I=n(55),B=n.n(I),N=function(e){return a.a.createElement("div",{className:B.a.Logo},a.a.createElement("img",{src:w.a,alt:"MyBurger"}))},T=n(56),D=n.n(T),A=n(100),R=n(37),L=n.n(R),x=function(e){return a.a.createElement("li",{className:L.a.NavigationItem},a.a.createElement(A.a,{to:e.link,activeClassName:L.a.active,exact:e.exact},e.children))},U=function(e){return a.a.createElement("ul",{className:D.a.NavigationItems},a.a.createElement(x,{link:"/",exact:!0},"Bruger Builder"),e.isAuthenticated&&a.a.createElement(x,{link:"/orders"},"Orders"),e.isAuthenticated?a.a.createElement(x,{link:"/logout"},"Logout"):a.a.createElement(x,{link:"/auth"},"Authenticate"))},H=n(58),P=n.n(H),M=function(e){return a.a.createElement("div",{className:P.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},G=function(e){return a.a.createElement("header",{className:C.a.Toolbar},a.a.createElement(M,{clicked:e.drawerToggleClicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("div",{className:C.a.Logo},a.a.createElement(N,null)),a.a.createElement("nav",{className:C.a.DesktopOnly},a.a.createElement(U,{isAuthenticated:e.isAuth})))},F=n(20),W=n.n(F),z=n(28),Y=function(e){var t=[W.a.SideDrawer,W.a.Close];return e.open&&(t=[W.a.SideDrawer,W.a.Open]),a.a.createElement(y.a,null,a.a.createElement(z.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:W.a.Logo},a.a.createElement(N,null)),a.a.createElement("nav",null,a.a.createElement(U,{isAuthenticated:e.isAuth}))))},q=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(y.a,null,a.a.createElement(G,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(Y,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:O.a.Content},this.props.children))}}]),t}(r.Component),V=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(q),Q=n(19),Z=n(49),K=n(38),$=n.n(K),J=n(22),X=n.n(J),ee=function(e){return a.a.createElement("div",{className:X.a.BuildControl},a.a.createElement("div",{className:X.a.Label},e.label),a.a.createElement("button",{className:X.a.Less,disabled:e.disabled,onClick:e.removed},"Less"),a.a.createElement("button",{className:X.a.More,onClick:e.added},"More"))},te=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ne=function(e){return a.a.createElement("div",{className:$.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,"$",e.price.toFixed(2))),te.map(function(t){return a.a.createElement(ee,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:$.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},re=n(29),ae=n(32),oe=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){console.log("[OrderSummary] componentDidUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return a.a.createElement(y.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(ae.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(ae.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),ie=n(40),ce=n(41),ue=n(14),le=n(17),se=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients(),console.log(this.props)}},{key:"updatePurchase",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(Q.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=this.props.ings?a.a.createElement(oe,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler}):null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):this.props.ings?a.a.createElement(y.a,null,a.a.createElement(Z.a,{ingredients:this.props.ings}),a.a.createElement(ne,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchase(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})):a.a.createElement(ie.a,null);return a.a.createElement(y.a,null,a.a.createElement(re.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),de=Object(u.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ue.a(t))},onIngredientRemoved:function(t){return e(ue.i(t))},onInitIngredients:function(){return e(ue.e())},onInitPurchase:function(){return e(ue.h())},onSetAuthRedirectPath:function(t){return e(ue.j(t))}}})(Object(ce.a)(se,le.a)),pe=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(b.a,{to:"/"})}}]),t}(r.Component),he=Object(u.b)(null,function(e){return{onLogout:function(){return e(ue.f())}}})(pe),me=v(function(){return n.e(3).then(n.bind(null,109))}),fe=v(function(){return n.e(5).then(n.bind(null,110))}),ge=v(function(){return n.e(4).then(n.bind(null,108))}),_e=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(g.a,null,a.a.createElement(_.a,{path:"/auth",component:ge}),a.a.createElement(_.a,{path:"/",exact:!0,component:de}),a.a.createElement(b.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(g.a,null,a.a.createElement(_.a,{path:"/checkout",component:me}),a.a.createElement(_.a,{path:"/orders",component:fe}),a.a.createElement(_.a,{path:"/logout",component:he}),a.a.createElement(_.a,{path:"/auth",component:ge}),a.a.createElement(_.a,{path:"/",exact:!0,component:de}),a.a.createElement(b.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(V,null,e))}}]),t}(r.Component),be=Object(E.a)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(ue.c())}}})(_e));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=n(21),ve=n(2),ye=function(e,t){return Object(Q.a)({},e,t)},ke={ingredients:null,totalPrice:4,error:!1,building:!1},Oe={salad:.5,cheese:.4,meat:1.3,bacon:.7},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.a:return function(e,t){var n=Object(Ee.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:ye(e.ingredients,n),totalPrice:e.totalPrice+Oe[t.ingredientName],building:!0};return ye(e,r)}(e,t);case ve.n:return function(e,t){var n=Object(Ee.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:ye(e.ingredients,n),totalPrice:e.totalPrice-Oe[t.ingredientName],building:!0};return ye(e,r)}(e,t);case ve.p:return function(e,t){return ye(e,{ingredients:t.ingredients,totalPrice:4,error:!1,building:!1})}(e,t);case ve.f:return function(e,t){return ye(e,{error:!0})}(e);default:return e}},Ce={orders:[],loading:!1,purchased:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.m:return function(e,t){return ye(e,{purchased:!1})}(e);case ve.k:return function(e,t){return ye(e,{loading:!0})}(e);case ve.l:return function(e,t){var n=ye(t.orderData,{id:t.orderId});return ye(e,{loading:!1,purchased:!0,orders:e.orders.concat(n),error:!1})}(e,t);case ve.j:return function(e,t){return ye(e,{loading:!1,error:!0})}(e);case ve.h:return function(e,t){return ye(e,{loading:!0})}(e);case ve.i:return function(e,t){return ye(e,{loading:!1,orders:t.orders})}(e,t);case ve.g:return function(e,t){return ye(e,{loading:!1})}(e);default:return e}},we={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.d:return function(e,t){return ye(e,{error:null,loading:!0})}(e);case ve.e:return function(e,t){return ye(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case ve.b:return function(e,t){return ye(e,{error:t.error,loading:!1})}(e,t);case ve.c:return function(e,t){return ye(e,{token:null,userId:null})}(e);case ve.o:return function(e,t){return ye(e,{authRedirectPath:t.path})}(e,t);default:return e}},Be=l.d,Ne=Object(l.c)({burgerBuilder:Se,order:je,auth:Ie}),Te=Object(l.e)(Ne,Be(Object(l.a)(s.a))),De=a.a.createElement(u.a,{store:Te},a.a.createElement(c.a,null,a.a.createElement(be,null)));i.a.render(De,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[65,1,2]]]);
//# sourceMappingURL=main.b5a358e7.chunk.js.map