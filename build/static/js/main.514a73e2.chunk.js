(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){e.exports=t(48)},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(6),o=t.n(u),l=t(3),i=t(1),c=t(2),s={SAVE_BUDGET:"SAVE_BUDGET",SAVE_EXPENSE:"SAVE_EXPENSE",DELETE_EXPENSE:"DELETE_EXPENSE"},p=t(10),d=t(11),m=t(14),b=t(12),E=t(15);function f(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return f=function(){return e},e}var v=c.a.form(f()),x=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement(v,{onSubmit:t},a)};function g(){var e=Object(i.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return g=function(){return e},e}var h=c.a.label(g(),function(e){return e.customStyles}),S=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(h,{customStyles:t},n)};function y(){var e=Object(i.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return y=function(){return e},e}var O=c.a.input(y()),j=function(e){var n=e.type,t=void 0===n?" text":n,a=e.value,u=void 0===a?"":a,o=e.onChange,l=void 0===o?function(){return null}:o,i=e.name,c=void 0===i?"":i;return r.a.createElement(O,{type:t,value:u,onChange:l,name:c})};function _(){var e=Object(i.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return _=function(){return e},e}var w=c.a.button(_()),C=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,u=void 0===a?"":a,o=e.onClick,l=void 0===o?function(){return null}:o;return r.a.createElement(w,{type:t,onClick:l},u)},D=function(e){function n(){var e,t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(m.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(r)))).state={budget:""},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(t.state.budget),t.setState({budget:0})},t}return Object(E.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(x,{onSubmit:this.handleSubmit},r.a.createElement(S,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter your total budget",r.a.createElement(j,{type:"number",value:this.state.budget,onChange:this.handleChange})),r.a.createElement(C,{label:"Save",type:"submit"}))}}]),n}(a.Component),N=Object(l.b)(null,function(e){return{onSave:function(n){return e(function(e){return{type:s.SAVE_BUDGET,payload:{budget:e}}}(n))}}})(D),P=t(25),k=t(13),T=t(26),X=t.n(T),A=function(e){function n(){var e,t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(m.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:""},t.handleChange=function(e){t.setState(Object(k.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(Object(P.a)({},t.state,{id:X.a.generate()})),t.setState({name:"",amount:0})},t}return Object(E.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(x,{onSubmit:this.handleSubmit},r.a.createElement(S,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",r.a.createElement(j,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement(S,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",r.a.createElement(j,{type:"number",name:"amount",value:this.state.amount,onChange:this.handleChange})),r.a.createElement(C,{label:"Add",type:"submit"}))}}]),n}(a.Component),V=Object(l.b)(null,function(e){return{onSave:function(n){return e({type:s.SAVE_EXPENSE,payload:{expense:n}})}}})(A),B=function(e){return e.budget},L=function(e){return e.expenses},U=function(e){return L(e).reduce(function(e,n){return e+Number(n.amount)},0)};function z(){var e=Object(i.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return z=function(){return e},e}var G=c.a.table(z()),R=Object(l.b)(function(e){return{items:L(e)}},function(e){return{onRemove:function(n){return e({type:s.DELETE_EXPENSE,payload:{id:n}})}}})(function(e){var n=e.items,t=e.onRemove;return r.a.createElement(G,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.map(function(e){var n=e.id,a=e.name,u=e.amount;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,a),r.a.createElement("td",null,u),r.a.createElement("td",null,r.a.createElement(C,{label:"Delete",onClick:function(){return t(n)}})))})))});function I(){var e=Object(i.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return I=function(){return e},e}function F(){var e=Object(i.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return F=function(){return e},e}function J(){var e=Object(i.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return J=function(){return e},e}var $=c.a.div(J(),function(e){return e.isPositive?"#388E3C":"#D32F2F"}),q=c.a.p(F()),H=c.a.p(I()),K=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement($,{isPositive:a},r.a.createElement(q,null,n),r.a.createElement(H,null,t,"\xa0$"))};function M(){var e=Object(i.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return M=function(){return e},e}var Q=c.a.section(M()),W=Object(l.b)(function(e){return{budget:B(e),expenses:U(e),balance:(n=e,Number(B(n))-U(n))};var n},null)(function(e){var n=e.budget,t=e.expenses,a=e.balance;return r.a.createElement(Q,null,r.a.createElement(K,{label:"Budget",value:n,isPositive:!0}),r.a.createElement(K,{label:"Expenses",value:t}),r.a.createElement(K,{label:"Balance",value:a,isPositive:a>=0}))});function Y(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return Y=function(){return e},e}var Z=c.a.div(Y()),ee=Object(l.b)(function(e){return{expenses:L(e)}},null)(function(e){var n=e.expenses;return r.a.createElement(Z,null,r.a.createElement(N,null),r.a.createElement(W,null),r.a.createElement(V,null),n.length>0&&r.a.createElement(R,null))}),ne=t(8),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case s.SAVE_BUDGET:return a.budget;default:return e}},ae=t(27),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case s.SAVE_EXPENSE:return[a.expense].concat(Object(ae.a)(e));case s.DELETE_EXPENSE:return e.filter(function(e){return e.id!==a.id});default:return e}},ue=Object(ne.b)({budget:te,expenses:re}),oe=Object(ne.c)(ue,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());t(47);o.a.render(r.a.createElement(l.a,{store:oe},r.a.createElement(ee,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.514a73e2.chunk.js.map