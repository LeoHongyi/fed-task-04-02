(this.webpackJsonpapplebucket=this.webpackJsonpapplebucket||[]).push([[0],{18:function(e,t,i){},19:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var n,c,s,a,p,r,l,o,u,b=i(0),j=i.n(b),h=i(9),d=i.n(h),O=(i(18),i(6)),f=i(7),g=i(11),m=i(10),v=(i(19),i(5)),y=i(2),x=Object(v.c)(n=function(e){Object(g.a)(i,e);var t=Object(m.a)(i);function i(){return Object(O.a)(this,i),t.apply(this,arguments)}return Object(f.a)(i,[{key:"render",value:function(){var e=this.props,t=e.apple,i=e.eatApple;return Object(y.jsxs)("div",{className:"appleItem",children:[Object(y.jsx)("div",{className:"apple",children:Object(y.jsx)("img",{src:"".concat("","/assets/images/apple.png"),alt:""})}),Object(y.jsxs)("div",{className:"info",children:[Object(y.jsxs)("div",{className:"name",children:["\u7ea2\u82f9\u679c - ",t.id,"\u53f7"]}),Object(y.jsxs)("div",{className:"weight",children:[t.weight,"\u514b"]})]}),Object(y.jsx)("div",{className:"btn-div",children:Object(y.jsx)("button",{onClick:function(){return i(t.id)},children:"\u5403\u6389"})})]})}}]),i}(j.a.Component))||n,k=Object(v.b)("store")(c=Object(v.c)(c=function(e){Object(g.a)(i,e);var t=Object(m.a)(i);function i(){return Object(O.a)(this,i),t.apply(this,arguments)}return Object(f.a)(i,[{key:"getAppleItem",value:function(){var e=this,t=[];return this.props.store.apples.forEach((function(i){i.isEaten||t.push(Object(y.jsx)(x,{apple:i,eatApple:e.props.store.eatApple},i.id)),t.length&&0!==t.length||t.push(Object(y.jsx)("div",{className:"empty-tip",children:"\u82f9\u679c\u7bee\u5b50\u5565\u4e5f\u6ca1\u6709"},"empty"))})),t}},{key:"render",value:function(){var e=this.props.store,t=e.status,i=e.isPicking,n=e.buttonText,c=e.pickApple,s=t.curApple,a=s.quantity,p=s.weight,r=t.eatenApple,l=r.quantity,o=r.weight;return Object(y.jsxs)("div",{className:"appleBasket",children:[Object(y.jsx)("div",{className:"title",children:"\u82f9\u679c\u7bee\u5b50"}),Object(y.jsxs)("div",{className:"stats",children:[Object(y.jsxs)("div",{className:"section",children:[Object(y.jsx)("div",{className:"head",children:"\u5f53\u524d"}),Object(y.jsxs)("div",{className:"content",children:[a,"\u4e2a\u82f9\u679c\uff0c",p,"\u514b"]})]}),Object(y.jsxs)("div",{className:"section",children:[Object(y.jsx)("div",{className:"head",children:"\u5df2\u5403\u6389"}),Object(y.jsxs)("div",{className:"content",children:[l,"\u4e2a\u82f9\u679c\uff0c",o,"\u514b"]})]}),Object(y.jsx)("div",{className:"appleList",children:this.getAppleItem()}),Object(y.jsx)("div",{className:"btn-div",children:Object(y.jsx)("button",{className:i?"disabled":"",onClick:function(){return c()},children:n})})]})]})}}]),i}(j.a.Component))||c)||c,w=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),s(e),a(e)}))},A=i(8),N=i(4),P=(i(22),i(1)),E=new(s=P.f.bound,a=P.f.bound,p=function(){function e(){Object(O.a)(this,e),Object(A.a)(this,"apples",r,this),Object(A.a)(this,"newAppleId",l,this),Object(A.a)(this,"isPicking",o,this),Object(A.a)(this,"buttonText",u,this)}return Object(f.a)(e,[{key:"status",get:function(){var e={curApple:{quantity:0,weight:0},eatenApple:{quantity:0,weight:0}};return this.apples.forEach((function(t){var i=t.isEaten?"eatenApple":"curApple";e[i].quantity++,e[i].weight+=t.weight})),e}},{key:"pickApple",value:function(){var e=this;if(this.isPicking)return!1;this.isPicking=!0,this.buttonText="\u6b63\u5728\u91c7\u6458...",setTimeout((function(){var t=Math.floor(200+50*Math.random());e.isPicking=!1,e.buttonText="\u6458\u82f9\u679c",e.apples.push({id:e.newAppleId++,weight:t,isEaten:!1})}),1e3)}},{key:"eatApple",value:function(e){var t="";this.apples.forEach((function(i,n){i.id===e&&(t=n)})),this.apples[t].isEaten=!0}}]),e}(),r=Object(N.a)(p.prototype,"apples",[P.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),l=Object(N.a)(p.prototype,"newAppleId",[P.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),o=Object(N.a)(p.prototype,"isPicking",[P.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u=Object(N.a)(p.prototype,"buttonText",[P.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"\u6458\u82f9\u679c"}}),Object(N.a)(p.prototype,"status",[P.g],Object.getOwnPropertyDescriptor(p.prototype,"status"),p.prototype),Object(N.a)(p.prototype,"pickApple",[s],Object.getOwnPropertyDescriptor(p.prototype,"pickApple"),p.prototype),Object(N.a)(p.prototype,"eatApple",[a],Object.getOwnPropertyDescriptor(p.prototype,"eatApple"),p.prototype),p);d.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(v.a,{store:E,children:Object(y.jsx)(k,{})})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.eb262923.chunk.js.map