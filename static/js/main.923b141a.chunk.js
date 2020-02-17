(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{199:function(e,t,n){e.exports=n(401)},208:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n(41),l=n(9),c=n(32),s=(n(208),n(209),n(402)),d=n(34),u=n(14),p=n.n(u),m=n(70),f=Object(i.b)({name:"user",initialState:{},reducers:{addUser:{reducer:function(e,t){var n=t.payload,a=n.username,r=n.email,o=n.token;e[0]={username:a,email:r,token:o}},prepare:function(e,t,n){return{payload:{username:e,email:t,token:n}}}},deleteUser:{reducer:function(e,t){delete e[0]}}}}),b=f.actions,h=b.addUser,g=b.deleteUser,y=f.reducer,x=n(408),E=x.a.confirm,v={display:"inline-block",position:"relative",marginRight:"4px",width:"32px",height:"32px",padding:0},w={logout:function(){return function(e){p.a.get("users/me/logout").then((function(t){(new m.a).remove("trelloc token",{path:"/"}),e(g())})).catch((function(e){console.log("Logout error!")}))}}},I=Object(l.b)(null,w)((function(e){var t=e.logout;return r.a.createElement(d.a,{onClick:function(){E({content:"Are you sure you want to log out?",onOk:function(){t()},onCancel:function(){}})},style:v,shape:"circle",icon:"logout"})})),O={backgroundImage:"url(https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png)",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"80px 30px",height:"40px",width:"100%",display:"flex",justifyContent:"flex-start",flexGrow:1,padding:"4px",lineHeight:"0",maxHeight:"40px"},j={display:"flex",justifyContent:"flex-start",flexGrow:1},k={display:"flex",justifyContent:"flex-end",flexGrow:1},C={display:"inline-block",position:"relative",marginRight:"4px",width:"32px",height:"32px",padding:0},S=function(){return r.a.createElement(s.a.Header,{style:O},r.a.createElement("div",{style:j},r.a.createElement(c.b,{to:"/"},r.a.createElement(d.a,{style:C,icon:"home"}))),r.a.createElement("div",{style:k},r.a.createElement(I,null)))},L=n(53),A=n(11),B=n(403),P=n(46),H=Object(i.b)({name:"cards",initialState:{},reducers:{addCard:{reducer:function(e,t){var n=t.payload,a=n.owner,r=n.id,o=n.listId,i=n.title,l=n.description,c=n.position;e[r]={owner:a,id:r,listId:o,title:i,description:l,position:c}},prepare:function(e,t,n,a,r,o){return{payload:{owner:e,id:t,listId:n,title:a,description:r,position:o}}}},deleteCard:{reducer:function(e,t){var n=t.payload,a=e[n].listId,r=[];Object.keys(e).map((function(t){e[t].listId===e[n].listId&&r.push([e[t],t])})),r.sort((function(e,t){return e[0].position-t[0].position}));var o=r.splice(e[n].position,1);Object(A.a)(o,1)[0];delete e[n],r.forEach((function(t,n){e[t[1]].position=n})),Object.keys(e).map((function(t){if(e[t].listId===a){var n={listId:e[t].listId,title:e[t].title,position:e[t].position};p.a.put("cards/"+e[t].id,n).catch((function(e){console.log("Error in reorderCards!")}))}})),p.a.delete("cards/"+n).catch((function(e){console.log("Error in deleteCard!")}))}},renameCards:{reducer:function(e,t){var n=t.payload,a=n.id,r=n.title;e[a].title=r;var o={title:e[a].title};p.a.put("cards/"+a,o).catch((function(e){console.log("Error in renameCards!")}))},prepare:function(e,t){return{payload:{id:e,title:t}}}},reorderCards:{reducer:function(e,t){var n=t.payload,a=n.id,r=n.oldListId,o=n.newListId,i=n.oldPosition,l=n.newPosition,c=[],s=[];if(Object.keys(e).map((function(t){e[t].listId===r?c.push([e[t],t]):e[t].listId===o&&s.push([e[t],t])})),c.sort((function(e,t){return e[0].position-t[0].position})),s.sort((function(e,t){return e[0].position-t[0].position})),e[a].listId===o){var d=c.splice(i,1),u=Object(A.a)(d,1)[0];c.splice(l,0,u),c.forEach((function(t,n){e[t[1]].position=n}))}else{var m=c,f=m.splice(i,1),b=Object(A.a)(f,1)[0];m.forEach((function(t,n){e[t[1]].position=n})),e[a].listId=o,s.splice(l,0,b),s.forEach((function(t,n){e[t[1]].position=n}))}Object.keys(e).map((function(t){if(e[t].listId===r||e[t].listId===o){var n={listId:e[t].listId,title:e[t].title,position:e[t].position};p.a.put("cards/"+e[t].id,n).catch((function(e){console.log("Error in reorderCards!")}))}}))},prepare:function(e,t,n,a,r){return{payload:{id:e,oldListId:t,newListId:n,oldPosition:a,newPosition:r}}}}}}),D=H.actions,R=D.addCard,F=D.deleteCard,V=(D.moveCard,D.moveCards,D.reorderCards),W=D.renameCards,T=H.reducer,z=x.a.confirm,M={color:"#5e6c84",textAlign:"left",boxShadow:"none",height:"14px",width:"14px",borderColor:"transparent"},U={deleteCard:F},_=Object(l.b)(null,U)((function(e){var t=e.cardId,n=e.deleteCard;return r.a.createElement(d.a,{icon:"close",style:M,onClick:function(){return function(e,t){z({content:"Are you sure you want to delete this card?",onOk:function(){t(e)},onCancel:function(){}})}(t,n)}})})),q=n(405),G=n(406),N={maxHeight:"162px",minHeight:"20px"},Y={renameCards:W},J=Object(l.b)(null,Y)((function(e){var t=e.id,n=e.title,o=e.setFormVisible,i=e.renameCards,l=Object(a.useState)(n),c=Object(A.a)(l,2),s=c[0],d=c[1];return r.a.createElement(q.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),s.trim()&&(i(t,s),d(""),o(!1))}},r.a.createElement(q.a.Item,{style:{width:"100%"}},r.a.createElement(G.a,{style:N,value:s,onChange:function(e){return d(e.target.value)},type:"text",placeholder:"Enter a title for this card...",autoFocus:!0})))})),X={borderRadius:"3px",zIndex:10,boxShadow:"0 1px 0 rgba(9, 30, 66, .25)",marginBottom:"8px",minHeight:"20px",maxWidth:"300px",padding:"0px !important"},$={padding:"6px 8px"},K={color:"#5e6c84",textAlign:"left",boxShadow:"none",maxWidth:"calc(100% - 24px)",borderColor:"transparent",marginRight:"4px"},Q=function(e){var t=e.id,n=e.position,o=e.title,i=Object(a.useState)(!1),l=Object(A.a)(i,2),c=l[0],s=l[1],u=Object(a.useState)(!1),p=Object(A.a)(u,2),m=p[0],f=p[1],b=Object(a.useRef)(null);Object(a.useEffect)((function(){return document.addEventListener("mousedown",h,!1),function(){document.removeEventListener("mousedown",h,!1)}}),[]);var h=function(e){b.current&&!b.current.contains(e.target)&&f(!1)};return r.a.createElement(P.b,{key:t,draggableId:t,index:n,type:"CARD"},(function(e,n){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement("div",{ref:b},r.a.createElement(B.a,{key:t,style:X,bodyStyle:$,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},m?r.a.createElement(J,{id:t,title:o,setFormVisible:f}):o,c&&!m?r.a.createElement("div",null,r.a.createElement(d.a,{style:K,icon:"edit",onClick:function(){return f(!0)}}),r.a.createElement(_,{style:K,cardId:t})):null))))}))},Z=function(e){var t=e.cards;return r.a.createElement("div",null,Object.values(t).sort((function(e,t){return e.position-t.position})).map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,position:e.position,title:e.title})})))},ee={maxHeight:"162px",minHeight:"54px"},te={display:"flex",flexDirection:"row",justifyContent:"flex-start",alignContent:"center"},ne={minHeight:"38px",maxHeight:"38px",backgroundColor:"#5aac44",color:"white"},ae={borderColor:"#ebecf0",color:"#5e6c84",textAlign:"left",boxShadow:"none",height:"38px",width:"38px",minWidth:"38px"},re={borderColor:"#ebecf0",color:"#5e6c84",textAlign:"left",boxShadow:"none"},oe={postCard:function(e,t,n,a){return function(r){var o={listId:e,title:t,description:"",position:a};p.a.post("cards",o).then((function(o){r(R(o.data.owner,o.data.card._id,e,t,n,a))})).catch((function(e){console.log("Error in CreateCard!")}))}}},ie=Object(l.b)((function(e){return{cards:e.cards}}),oe)((function(e){var t=e.cards,n=e.postCard,o=e.listId,i=e.isVisible,l=e.setIsVisible,c=e.fromDropDown,s=Object(a.useState)(""),u=Object(A.a)(s,2),p=u[0],m=u[1];return i?r.a.createElement(q.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),p.trim()&&(n(o,p,"",function(e,t){return Object.values(e).filter((function(e){return e.listId===t})).length}(t,o)),m(""),l(!1))}},r.a.createElement(q.a.Item,{style:{width:"100%"}},r.a.createElement(G.a.TextArea,{style:ee,value:p,onChange:function(e){return m(e.target.value)},type:"text",placeholder:"Enter a title for this card...",autoFocus:!0,autoSize:!0})),r.a.createElement(q.a.Item,null,r.a.createElement("div",{style:te},r.a.createElement(d.a,{htmlType:"submit",style:ne,block:!0},"Add Card"),r.a.createElement(d.a,{ghost:!0,onClick:function(){l(!1),m("")},style:ae,icon:"close"})))):i||c?null:r.a.createElement(d.a,{block:!0,ghost:!0,onClick:function(){l(!0)},style:re,icon:"plus"},"Add another card")})),le=n(409),ce=n(10),se=n(404),de=Object(i.b)({name:"lists",initialState:{},reducers:{addList:{reducer:function(e,t){var n=t.payload,a=n.owner,r=n.id,o=n.boardId,i=n.title,l=n.position;e[r]={owner:a,id:r,boardId:o,title:i,position:l}},prepare:function(e,t,n,a,r){return{payload:{owner:e,id:t,boardId:n,title:a,position:r}}}},deleteList:{reducer:function(e,t){var n=t.payload,a=e[n].boardId,r=[];Object.keys(e).map((function(t){e[t].boardId===a&&r.push([e[t],t])})),r.sort((function(e,t){return e[0].position-t[0].position})),r.splice(e[n].position,1),delete e[n],r.forEach((function(t,n){e[t[1]].position=n})),Object.keys(e).map((function(t){if(e[t].boardId===a){var n={boardId:e[t].boardId,title:e[t].title,position:e[t].position};p.a.put("lists/"+e[t].id,n).catch((function(e){console.log("Error in deleteLists!")}))}})),p.a.delete("lists/"+n).catch((function(e){console.log("Error in deleteList!")}))}},renameList:{reducer:function(e,t){var n=t.payload,a=n.id,r=n.title;e[a].title=r;var o={title:r};p.a.put("lists/"+a,o).catch((function(e){console.log("Error in renameList!")}))},prepare:function(e,t){return{payload:{id:e,title:t}}}},moveList:{reducer:function(e,t){var n=t.payload,a=n.listId,r=n.newPosition,o=n.newBoardId;console.log(r);var i=[];if(Object.keys(e).map((function(t){return e[t].boardId===o?i.push([e[t],t]):null})),i.sort((function(e,t){return e[0].position-t[0].position})),e[a].boardId!==o&&(e[a].position=i.length,e[a].boardId=o,i.push([e[a],a])),e[a].position<i.length-1)for(var l=e[a].position+1;l<=r;l++)i[l][0].position-=1;else for(var c=r;c<e[a].position;c++)i[c][0].position+=1;e[a].position=r,i.forEach((function(t){return e[t[1]].position=t[0].position})),Object.keys(e).map((function(t){var n={boardId:e[t].boardId,title:e[t].title,position:e[t].position};p.a.put("lists/"+e[t].id,n).catch((function(e){console.log("Error in CreateBoard!")}))}))},prepare:function(e,t,n){return{payload:{listId:e,newPosition:t,newBoardId:n}}}},reorderLists:{reducer:function(e,t){var n=t.payload,a=(n.id,n.boardId),r=n.oldPosition,o=n.newPosition,i=[];Object.keys(e).map((function(t){e[t].boardId===a&&i.push([e[t],t])})),i.sort((function(e,t){return e[0].position-t[0].position}));var l=i.splice(r,1),c=Object(A.a)(l,1)[0];i.splice(o,0,c),i.forEach((function(t,n){e[t[1]].position=n})),Object.keys(e).map((function(t){if(e[t].boardId===a){var n={boardId:e[t].boardId,title:e[t].title,position:e[t].position};p.a.put("lists/"+e[t].id,n).catch((function(e){console.log("Error in reorderLists!")}))}}))},prepare:function(e,t,n,a){return{payload:{id:e,boardId:t,oldPosition:n,newPosition:a}}}}}}),ue=de.actions,pe=ue.addList,me=ue.deleteList,fe=ue.renameList,be=ue.moveList,he=ue.reorderLists,ge=de.reducer,ye=x.a.confirm,xe={width:"304px",overflow:"hidden"},Ee={margin:"4px 0"},ve={display:"block",textAlign:"center",height:"40px",color:"#172b4d"},we={display:"block",lineHeight:"40px",margin:"0 12px",overflow:"hidden",padding:"0 32px",textOverflow:"ellipsis",whiteSpace:"nowrap"},Ie={overflowX:"hidden",overflowY:"auto",padding:"0 12px 12px"},Oe={cursor:"pointer",display:"block",fontWeight:"400",padding:"6px 12px",margin:"0 -12px",textDecoration:"none",color:"#172b4d"},je=function(e,t,n,a,r){"1"===e.key?n(!0):"2"===e.key&&function(e,t){ye({content:"Are you sure you want to delete this list?",onOk:function(){t(e)},onCancel:function(){}})}(a,r)},ke={deleteList:me},Ce=Object(l.b)(null,ke)((function(e){e.setIsVisible;var t=e.setShowingMoveList,n=e.listId,a=e.deleteList;return r.a.createElement(se.a,{onClick:function(e){return je(e,0,t,n,a)},style:xe},r.a.createElement(se.a.Item,{style:ve},r.a.createElement("span",{style:we},"List Actions")),r.a.createElement(se.a.Divider,{style:Ee}),r.a.createElement(se.a.ItemGroup,{style:Ie},r.a.createElement(se.a.Item,{key:"1",style:Oe},"Move List..."),r.a.createElement(se.a.Item,{key:"2",style:Oe},"Archive This List")))})),Se=n(407),Le=function(e){return e[Object.keys(e).find((function(t){return!0===e[t].isActive}))]},Ae=function(e){return e.id},Be=function(e){return e.position},Pe=Se.a.Option,He={width:"304px",overflow:"hidden",height:"auto"},De={margin:"4px 0"},Re={display:"flex",alignItems:"center",textAlign:"center",justifyContent:"space-between",height:"40px",color:"#172b4d"},Fe={display:"block",lineHeight:"40px",margin:"0 12px",overflow:"hidden",padding:"0 32px",textOverflow:"ellipsis",whiteSpace:"nowrap"},Ve={borderColor:"transparent",color:"#5e6c84",textAlign:"left",boxShadow:"none",display:"block",height:"auto",padding:"10px 8px 10px 12px"},We={left:0,margin:0,border:"none",width:"100%"},Te={height:"8px",margin:"8px",padding:"4px",fontSize:"14px",fontWeight:600},ze={moveList:be},Me=Object(l.b)((function(e){return{boards:e.boards,lists:e.lists}}),ze)((function(e){var t=e.setIsVisible,n=e.setShowingMoveList,o=e.listId,i=e.boards,l=e.lists,c=e.moveList,s=Object(a.useState)(Ae(Le(i))),u=Object(A.a)(s,2),p=u[0],m=u[1],f=Object(a.useState)(Be(l[o])),b=Object(A.a)(f,2),h=b[0],g=b[1];return r.a.createElement(se.a,{onClick:function(e){return function(e,t,n){"1"===e.key?t(!0):"3"===e.key&&n(!0)}(e,t,n)},style:He},r.a.createElement(se.a.Item,{style:Re},r.a.createElement(d.a,{onClick:function(){return n(!1)},icon:"left",style:Ve}),r.a.createElement("span",{style:Fe},"Move List"),r.a.createElement(d.a,{icon:"close",style:Ve})),r.a.createElement(se.a.Divider,{style:De}),r.a.createElement("div",null,r.a.createElement("div",{style:Te},"Board: "),r.a.createElement(Se.a,{defaultValue:Le(i).title,style:We,onChange:function(e){return m(e)}},Object.keys(i).map((function(e){return r.a.createElement(Pe,{value:Ae(i[e]),key:e},i[e].title)})))),r.a.createElement("div",{style:Te},"Position: "),r.a.createElement(Se.a,{defaultValue:o,style:We,onChange:function(e){return g(e)}},Object.keys(l).map((function(e){return l[e].boardId===p?r.a.createElement(Pe,{value:Be(l[e]),key:e},Be(l[e]),Be(l[e])===o?" (current)":null):null}))),r.a.createElement(se.a.Item,null,r.a.createElement(d.a,{onClick:function(){return c(o,h,p)}},"Move")))})),Ue=function(e){var t=e.setIsVisible,n=e.showingMoveList,a=e.setShowingMoveList,o=e.listId;return n?r.a.createElement(Me,{setIsVisible:t,setShowingMoveList:a,listId:o}):r.a.createElement(Ce,{setIsVisible:t,setShowingMoveList:a,listId:o})},_e={borderColor:"#ebecf0",color:"#5e6c84",textAlign:"left",boxShadow:"none",float:"right"},qe=function(e){var t=e.setIsVisible,n=e.listId,o=Object(a.useState)(!1),i=Object(A.a)(o,2),l=i[0],c=i[1];return r.a.createElement(le.a,{overlay:r.a.createElement(Ue,{setIsVisible:t,showingMoveList:l,setShowingMoveList:c,listId:n}),trigger:["click"],placement:"bottomRight"},r.a.createElement(ce.a,{type:"ellipsis",style:_e}))},Ge={maxHeight:"162px",minHeight:"20px"},Ne={renameList:fe},Ye=Object(l.b)(null,Ne)((function(e){var t=e.id,n=e.title,o=e.setFormVisible,i=e.renameList,l=Object(a.useState)(n),c=Object(A.a)(l,2),s=c[0],d=c[1];return r.a.createElement(q.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),s.trim()&&(i(t,s),d(""),o(!1))}},r.a.createElement(q.a.Item,{style:{width:"100%"}},r.a.createElement(G.a,{style:Ge,value:s,onChange:function(e){return d(e.target.value)},type:"text",placeholder:"Enter a title for this list...",autoFocus:!0})))})),Je={width:"272px",height:"100%",margin:"0 4px",boxSizing:"border-box",display:"inline-block",verticalAlign:"top"},Xe={width:"272px",backgroundColor:"#ebecf0",marginLeft:"8px",borderRadius:"3px",boxSizing:"border-box",display:"flex",flexDirection:"column",maxHeight:"100%",overflowY:"hidden"},$e={},Ke={flex:"0 0 auto",padding:"10px 8px",position:"relative",minHeight:"20px",fontWeight:600},Qe={minWidth:"100%",position:"relative",padding:"4px 0px",display:"flex",justify:"space-between"},Ze={borderColor:"#ebecf0",color:"#5e6c84",textAlign:"left",boxShadow:"none",float:"right"},et={backgroundColor:"transparent",fontWeight:"700",lineHeight:"32px",padding:0,textDecoration:"none",maxWidth:"calc(100% - 24px)",borderColor:"transparent",boxShadow:"none"},tt=function(e){var t=e.id,n=e.title,o=e.position,i=e.cards,l=Object(a.useRef)(null),c=Object(a.useState)(!1),s=Object(A.a)(c,2),u=s[0],p=s[1],m=Object(a.useState)(!1),f=Object(A.a)(m,2),b=f[0],h=f[1],g=Object(a.useState)(!1),y=Object(A.a)(g,2),x=y[0],E=y[1];Object(a.useEffect)((function(){return document.addEventListener("mousedown",v,!1),function(){document.removeEventListener("mousedown",v,!1)}}),[]);var v=function(e){l.current&&!l.current.contains(e.target)&&(p(!1),h(!1),E(!1))};return r.a.createElement(P.b,{key:t,draggableId:t,index:o,type:"LIST"},(function(e,a){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement(P.c,{droppableId:t,type:"CARD"},(function(e,a){return r.a.createElement("div",{ref:e.innerRef},r.a.createElement("div",{style:Je,ref:l},r.a.createElement(B.a,{style:Xe,bodyStyle:{padding:"0 4px"}},r.a.createElement("div",{style:$e},r.a.createElement("div",{style:Ke},x?r.a.createElement(Ye,{id:t,title:n,setFormVisible:E}):r.a.createElement(d.a,{style:et,onClick:function(){return E(!0)}},n),r.a.createElement(qe,{style:Ze,setIsVisible:p,listId:t})),r.a.createElement("div",{style:Qe},r.a.createElement(ie,{listId:t,isVisible:u,setIsVisible:p,fromDropDown:!0},"Add another card")),r.a.createElement("div",{style:{zIndex:10,maxHeight:"80vh",overflowY:"scroll"}},r.a.createElement(Z,{cards:i})),r.a.createElement("div",{style:Qe},r.a.createElement(ie,{listId:t,isVisible:b,setIsVisible:h,fromDropDown:!1},"Add another card"))))),e.placeholder)})),e.placeholder)}))},nt={marginLeft:"8px",minHeight:"38px",maxHeight:"38px",backgroundColor:"hsla(0, 0%, 100%, .24)",color:"white",borderColor:"transparent",width:"272px",display:"flex",justifyContent:"flex-start",maxWidth:"272px"},at={marginLeft:"8px"},rt={postList:function(e,t,n){return function(a){var r={boardId:e,title:t,position:n};p.a.post("lists",r).then((function(r){a(pe(r.data.owner,r.data.list._id,e,t,n))})).catch((function(e){console.log("Error in CreateBoard!")}))}}},ot=Object(l.b)((function(e){return{lists:e.lists}}),rt)((function(e){var t=e.lists,n=e.postList,o=e.boardId,i=Object(a.useState)(!1),l=Object(A.a)(i,2),c=l[0],s=l[1],u=Object(a.useState)(""),p=Object(A.a)(u,2),m=p[0],f=p[1];return c?r.a.createElement(q.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),m.trim()&&(n(o,m,function(e,t){return Object.values(e).filter((function(e){return e.boardId===t})).length}(t,o)),f(""),s(!1))},style:at},r.a.createElement(q.a.Item,null,r.a.createElement(G.a,{value:m,onChange:function(e){return f(e.target.value)},type:"text",placeholder:"Enter a list title...",autoFocus:!0})),r.a.createElement(q.a.Item,null,r.a.createElement(d.a,{htmlType:"submit",style:nt},"Add List"))):r.a.createElement(d.a,{onClick:function(){return s(!0)},style:nt,icon:"plus"},"Add another list")})),it={display:"flex",overflowX:"auto",flexWrap:"nowrap",height:"calc(100vh - 45px)"},lt={fetchLists:function(){return function(e){p.a.get("lists").then((function(t){t.data.map((function(t){e(pe(t.owner,t._id,t.boardId,t.title,t.position))}))}))}},fetchCards:function(){return function(e){p.a.get("cards").then((function(t){t.data.map((function(t){e(R(t.owner,t._id,t.listId,t.title,t.description,t.position))}))}))}}},ct=Object(l.b)((function(e){return{cards:e.cards}}),lt)((function(e){var t=e.fetchLists,n=e.fetchCards,o=e.boardId,i=e.lists,l=e.cards;return Object(a.useEffect)((function(){t(),n()}),[]),r.a.createElement("div",{style:it},i?Object.values(i).sort((function(e,t){return e.position-t.position})).map((function(e,t){return r.a.createElement(tt,Object.assign({key:e.id},e,{cards:Object.values(l).filter((function(t){return t.listId===e.id}))}))})):null,r.a.createElement(ot,{boardId:o}))})),st=Object(i.b)({name:"boards",initialState:{},reducers:{addBoard:{reducer:function(e,t){var n=t.payload,a=n.id,r=n.owner,o=n.title,i=n.isPrivate,l=n.isActive;e[a]={id:a,owner:r,title:o,isPrivate:i,isActive:l}},prepare:function(e,t,n,a,r){return{payload:{id:e,owner:t,title:n,isPrivate:a,isActive:r}}}},deleteBoard:{reducer:function(e,t){var n=t.payload;delete e[n],p.a.delete("boards/"+n).catch((function(e){console.log("Error in deleteBoard!")}))}},renameBoard:{reducer:function(e,t){var n=t.payload,a=n.id,r=n.title;e[a].title=r;var o={title:e[a].title};p.a.put("boards/"+a,o).catch((function(e){console.log("Error in renameBoard!")}))},prepare:function(e,t){return{payload:{id:e,title:t}}}},setActive:{reducer:function(e,t){Object.keys(e).forEach((function(t){!0===e[t].isActive&&(e[t].isActive=!1)})),e[t.payload.id].isActive=t.payload.isActive},prepare:function(e,t){return{payload:{id:e,isActive:t}}}}}}),dt=st.actions,ut=dt.addBoard,pt=dt.deleteBoard,mt=dt.renameBoard,ft=dt.setActive,bt=st.reducer,ht=function(){return function(e){p.a.get("boards").then((function(t){t.data.map((function(t){e(ut(t._id,t.owner,t.title,t.isPrivate,t.isActive))}))}))}},gt=x.a.confirm,yt={color:"white",textAlign:"left",boxShadow:"none",float:"right",height:"32px",width:"auto",borderColor:"transparent",borderRadius:"3px",lineHeight:"32px",margin:"0 4px 4px 0",backgroundColor:"hsla(0,0%,100%, .24)"},xt=function(e,t){gt({content:"Are you really sure you want to delete this board?",okText:"Cancel",onOk:function(){},cancelText:"Ok",onCancel:function(){t(e)}})},Et={deleteBoard:pt},vt=Object(l.b)(null,Et)((function(e){var t=e.id,n=e.deleteBoard;return r.a.createElement(d.a,{style:yt,onClick:function(){return function(e,t){gt({content:"Are you sure you want to delete this board?",onOk:function(){xt(e,t)},onCancel:function(){}})}(t,n)}},"Archive")})),wt={maxHeight:"162px",minHeight:"20px"},It={renameBoard:mt},Ot=Object(l.b)(null,It)((function(e){var t=e.id,n=e.title,o=e.setFormVisible,i=e.renameBoard,l=Object(a.useState)(n),c=Object(A.a)(l,2),s=c[0],d=c[1];return r.a.createElement(q.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),s.trim()&&(i(t,s),d(""),o(!1))}},r.a.createElement(q.a.Item,{style:{width:"100%"}},r.a.createElement(G.a,{style:wt,value:s,onChange:function(e){return d(e.target.value)},type:"text",placeholder:"Enter a title for this board...",autoFocus:!0})))})),jt={backgroundColor:"rgba(0,0,0,.24)",height:"auto",padding:"8px 4px 4px 8px",position:"relative",display:"block",color:"white"},kt={backgroundColor:"transparent",fontSize:"18px",fontWeight:"700",lineHeight:"32px",padding:0,textDecoration:"none",maxWidth:"calc(100% - 24px)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",height:"32px",borderColor:"transparent"},Ct=Object(l.b)((function(e){return{boards:e.boards}}),null)((function(e){var t=e.id,n=e.boards,o=Object(a.useState)(!1),i=Object(A.a)(o,2),l=i[0],c=i[1],s=Object(a.useRef)(null);Object(a.useEffect)((function(){return document.addEventListener("mousedown",u,!1),function(){document.removeEventListener("mousedown",u,!1)}}),[]);var u=function(e){s.current&&!s.current.contains(e.target)&&c(!1)};return n[t]?r.a.createElement("div",{ref:s,style:jt},r.a.createElement(d.a,{type:"primary",style:kt,onClick:function(){return c(!0)}},l?r.a.createElement(Ot,{id:t,title:n[t].title,setFormVisible:c}):n[t].title),r.a.createElement(vt,{id:t})):null})),St={reorderCards:V,reorderLists:he,setActive:ft},Lt=Object(l.b)((function(e){return{lists:e.lists,boards:e.boards}}),St)((function(e){var t=e.id,n=e.lists,o=e.boards,i=e.reorderCards,l=e.reorderLists,c=e.setActive;Object(a.useEffect)((function(){o&&o[t]&&!o[t].isActive&&c(t,!0)}),[o]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ct,{id:t}),r.a.createElement(P.a,{onDragEnd:function(e){var t=e.draggableId,n=e.type,a=e.source,r=e.destination;r&&("CARD"===n?(console.log("I'm a card!"),i(t,a.droppableId,r.droppableId,a.index,r.index)):"LIST"===n&&(console.log("I'm a list!"),l(t,a.droppableId,a.index,r.index)))}},r.a.createElement(P.c,{droppableId:t,type:"LIST",direction:"horizontal"},(function(e,a){return r.a.createElement("div",{ref:e.innerRef},r.a.createElement(ct,{boardId:t,lists:Object.values(n).filter((function(e){return e.boardId===t}))}),e.placeholder)}))))})),At={marginRight:"8px",marginBottom:"8px",backgroundColor:"#97a0af",height:"80px",width:"100%",fontSize:"16px",fontWeight:700,color:"white",borderColor:"transparent"},Bt={marginLeft:"8px"},Pt={postBoard:function(e,t,n){return function(a){var r={title:e,isPrivate:t,isActive:n};p.a.post("boards",r).then((function(t){a(ut(t.data.board._id,t.data.board.owner,e,!0,!1))})).catch((function(e){console.log("Error in CreateBoard!")}))}}},Ht=Object(l.b)(null,Pt)((function(e){var t=e.postBoard,n=Object(a.useState)(!1),o=Object(A.a)(n,2),i=o[0],l=o[1],c=Object(a.useState)(""),s=Object(A.a)(c,2),u=s[0],p=s[1];return i?r.a.createElement(q.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),u.trim()&&(t(u,!0,!1),p(""),l(!1))},style:Bt},r.a.createElement(q.a.Item,null,r.a.createElement(G.a,{value:u,onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Enter a board title...",autoFocus:!0})),r.a.createElement(q.a.Item,null,r.a.createElement(d.a,{htmlType:"submit",style:At},"Add Board"))):r.a.createElement(d.a,{onClick:function(){return l(!0)},style:At},"Create new board")})),Dt={backgroundColor:"rgb(81, 152, 57)",height:"80px",width:"100%",fontSize:"16px",fontWeight:700,color:"white",display:"inline-block",overflow:"hidden",wordWrap:"break-word",flex:"0 0 auto",borderColor:"transparent"},Rt={setActive:ft},Ft=Object(l.b)(null,Rt)((function(e){var t=e.id,n=e.title,a=(e.isPrivate,e.setActive);return r.a.createElement(c.b,{to:"/user/boards/"+t},r.a.createElement(d.a,{style:Dt,onClick:function(){return a(t,!0)}},n))})),Vt={color:"white",fontSize:"24px",lineHeight:"20px",fontWeight:400},Wt={display:"flex",flexWrap:"wrap",flexGrow:1,minHeight:"100%",width:"100%"},Tt={width:"calc(50% - 4px)",marginRight:"4px",marginBottom:"4px"},zt={fetchBoards:ht},Mt=Object(l.b)((function(e){return{boards:e.boards,user:e.user}}),zt)((function(e){var t=e.boards,n=e.user,o=e.fetchBoards;return Object(a.useEffect)((function(){o()}),[n]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{style:Vt},r.a.createElement(ce.a,{type:"user"})," Personal Boards")),r.a.createElement("div",{style:Wt},Object.values(t).map((function(e,t){return r.a.createElement("div",{style:Tt,key:t+e.id},r.a.createElement(Ft,Object.assign({key:e.id},e)))})),r.a.createElement("div",{style:Tt},r.a.createElement(Ht,null))))})),Ut=function(){return r.a.createElement("main",null,r.a.createElement(L.d,{basename:"/"},r.a.createElement(L.b,{exact:!0,path:"/user/boards/:id",render:function(e){return r.a.createElement(Lt,{id:e.match.params.id})}}),r.a.createElement(L.b,{exact:!0,path:"/user/boards",render:function(){return r.a.createElement(Mt,null)}}),r.a.createElement(L.b,{path:"/",render:function(){return r.a.createElement(L.a,{to:"/user/boards"})}})))},_t={borderRadius:"3px",backgroundColor:"white",minWidth:"250px",width:"20vw",margin:"auto",marginTop:"20vh",padding:"4px 8px"},qt=q.a.create({name:"login_form"})((function(e){var t=e.onSubmit,n=e.form.getFieldDecorator;return r.a.createElement(q.a,{onSubmit:t,className:"login-form",style:_t},r.a.createElement(q.a.Item,null,r.a.createElement("h1",{style:{textAlign:"center",marginTop:"4px",marginBottom:"0px"}},"Log in to Trelloc")),r.a.createElement(q.a.Item,null,n("email",{rules:[{required:!0,message:"Please input your email!"}]})(r.a.createElement(G.a,{prefix:r.a.createElement(ce.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(q.a.Item,null,n("password",{rules:[{required:!0,message:"Please input your password!"}]})(r.a.createElement(G.a,{prefix:r.a.createElement(ce.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(q.a.Item,null,r.a.createElement(c.b,{to:"/user/forgotpass/",style:{marginRight:"4px"}},"Forgot password"),r.a.createElement(c.b,{to:"/user/register/",style:{marginLeft:"4px"}},"Register")),r.a.createElement(q.a.Item,null,r.a.createElement(d.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in")))})),Gt={login:function(e,t){return function(n){var a={email:e,password:t};p.a.post("users/login",a).then((function(e){p.a.defaults.headers.common.Authorization="Bearer "+e.data.token,n(h(e.data.user.username,e.data.user.email,e.data.token)),(new m.a).set("trelloc token",e.data.token,{path:"/"})})).catch((function(e){console.log("Login error!")}))}}},Nt=Object(l.b)(null,Gt)((function(e){var t=e.login,n=Object(a.useState)(null),o=Object(A.a)(n,2),i=o[0],l=o[1],c=Object(a.useCallback)((function(e){null!==e&&l(e)}),[]);return r.a.createElement(qt,{ref:c,onSubmit:function(e){e.preventDefault(),i.validateFields((function(e,n){e||(t(n.email,n.password),i.resetFields())}))}})})),Yt={borderRadius:"3px",backgroundColor:"white",minWidth:"250px",width:"20vw",margin:"auto",marginTop:"20vh",padding:"4px 8px"},Jt={marginBottom:"4px",marginTop:"4px"},Xt=q.a.create({name:"registration_form"})((function(e){var t=e.onSubmit,n=e.form,a=n.getFieldDecorator;return r.a.createElement(q.a,{onSubmit:t,className:"login-form",style:Yt},r.a.createElement(q.a.Item,null,r.a.createElement("h1",{style:{textAlign:"center",marginTop:"4px",marginBottom:"0px"}},"Register for a Trelloc Account")),r.a.createElement(q.a.Item,{style:Jt},a("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(G.a,{prefix:r.a.createElement(ce.a,{type:"user",style:{color:"rgba(0, 0, 0, .25"}}),placeholder:"Username"}))),r.a.createElement(q.a.Item,{style:Jt},a("email",{rules:[{type:"email",message:"Please input a valid email!"},{required:!0,message:"Please input your email!"}]})(r.a.createElement(G.a,{prefix:r.a.createElement(ce.a,{type:"mail",style:{color:"rgba(0, 0, 0, .25"}}),placeholder:"Email"}))),r.a.createElement(q.a.Item,{style:Jt},a("password",{rules:[{required:!0,message:"Please input your password!"},{validator:function(e,t,a){t&&n.validateFields(["confirm"],{force:!0}),a()}}]})(r.a.createElement(G.a,{prefix:r.a.createElement(ce.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(q.a.Item,{style:Jt},a("confirm password",{rules:[{required:!0,message:"Please confirm your password!"},{validator:function(e,t,a){t&&t!==n.getFieldValue("password")?a("Passwords must match!"):a()}}]})(r.a.createElement(G.a,{prefix:r.a.createElement(ce.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm password"}))),r.a.createElement(q.a.Item,null,r.a.createElement(d.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Register"),r.a.createElement(c.b,{to:"/user/login",style:{marginLeft:"8px"}}," or Log in")))})),$t={register:function(e,t,n){return function(a){var r={username:e,email:t,password:n};p.a.post("users/",r).then((function(e){a(h(e.data.user.username,e.data.user.email,e.data.token)),(new m.a).set("trelloc token",e.data.token,{path:"/"})})).catch((function(e){console.log("Registration error!")}))}}},Kt=Object(l.b)(null,$t)((function(e){var t=e.register,n=Object(a.useState)(null),o=Object(A.a)(n,2),i=o[0],l=o[1],c=Object(a.useCallback)((function(e){null!==e&&l(e)}),[]);return r.a.createElement(Xt,{ref:c,onSubmit:function(e){e.preventDefault(),i.validateFields((function(e,n){e||(t(n.username,n.email,n.password),i.resetFields())}))}})})),Qt=function(){return r.a.createElement("main",null,r.a.createElement(L.d,null,r.a.createElement(L.b,{exact:!0,path:"/user/login",render:function(){return r.a.createElement(Nt,null)}}),r.a.createElement(L.b,{exact:!0,path:"/user/register",render:function(){return r.a.createElement(Kt,null)}}),r.a.createElement(L.b,{path:"/",render:function(){return r.a.createElement(Kt,null)}})))},Zt=function(e){return!(!e[0]||!e[0].token)},en={backgroundColor:"black",minHeight:"100vh",fontFamily:"Helvetica",fontSize:"14px",fontWeight:400,lineHeight:"20px"},tn={padding:"4px",backgroundColor:"black",height:"100%"};var nn={fetchUserDetails:function(e){return function(t){e&&p.a.get("users/me").then((function(n){t(h(n.data.username,n.data.email,e))}))}},fetchBoards:ht},an=Object(l.b)((function(e){return{user:e.user}}),nn)((function(e){var t=e.user,n=e.fetchUserDetails,o=e.fetchBoards;return Object(a.useEffect)((function(){var e=(new m.a).get("trelloc token");p.a.defaults.baseURL="https://warm-sea-05824.herokuapp.com/api/",p.a.defaults.headers.common.Authorization="Bearer "+e,p.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n(e)}),[]),Object(a.useEffect)((function(){Zt(t)&&o()}),[t]),r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{style:en},r.a.createElement(S,null),r.a.createElement(s.a.Content,{style:tn},Zt(t)?r.a.createElement(Ut,null):r.a.createElement(Qt,null))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rn=n(23),on=Object(rn.combineReducers)({cards:T,lists:ge,boards:bt,user:y}),ln=Object(i.a)({reducer:on});Object(o.render)(r.a.createElement(l.a,{store:ln},r.a.createElement(c.a,null,r.a.createElement(an,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[199,1,2]]]);
//# sourceMappingURL=main.923b141a.chunk.js.map