"use strict";(self.webpackChunkgit_issues=self.webpackChunkgit_issues||[]).push([[596],{4159:function(e,r,n){n.r(r),n.d(r,{IssuesBoard:function(){return v}});var s=n(1413),i=n(3433),t=n(667),d=n(3153),a=n(304),o=n(2791),c=n(8290),l=(n(5862),n(2426)),u=n.n(l),p={paper_card:"IssuesItem_paper_card__qb9Gp",pencil_border:"IssuesItem_pencil_border__UjJW0"},f=n(3329);function h(e){var r=e.id,n=e.index,i=e.title,d=e.created_at,a=e.comments,o=e.user,c=u()(d).startOf("day").fromNow(),l=i.length>25?i.slice(0,25)+"...":i;return(0,f.jsx)(t._l,{draggableId:r.toString(),index:n,children:function(e){return(0,f.jsxs)("div",(0,s.Z)((0,s.Z)((0,s.Z)({className:p.paper_card,ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:[(0,f.jsx)("h4",{className:"h5 mb-2",children:l}),(0,f.jsx)("div",{className:"mb-2",children:(0,f.jsxs)("i",{children:["Created: ",c]})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("span",{children:["User: ",o]})," | ",(0,f.jsxs)("span",{children:["Comments: ",a]})]})]}))}},r)}var m=n(3553),x="IssuesList_board__bDQIO",b=n(1081);function j(){var e=(0,d.C)((function(e){return e.repo.repository})),r=(0,d.C)((function(e){return e.repo.token})),n=(0,d.C)((function(e){return e.boards.boards})),a=(0,d.C)((function(e){return e.boards.status})),l=(0,d.T)();return(0,o.useEffect)((function(){var n=(0,i.Z)(e.adress);n.splice(2,1,r.toString()),l((0,m.N)(n)),l((0,m.d)(n)),l((0,b.T)(n))}),[e.adress,r,l]),(0,f.jsx)(f.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e,r){var n=e.title,i=e.items;return(0,f.jsx)(c.y,{baseColor:" rgb(175, 173, 188)",highlightColor:"#444",children:(0,f.jsx)(t.bK,{droppableId:n,children:function(e){return(0,f.jsxs)("div",(0,s.Z)((0,s.Z)({className:x},e.droppableProps),{},{ref:e.innerRef,children:[(0,f.jsx)("h3",{className:"bg-white w-100 py-3 text-center",children:n}),a.isLoading?(0,f.jsx)("p",{children:(0,f.jsx)(c.Z,{count:5,borderRadius:28,width:350,height:150,style:{margin:"20px"}})}):i.map((function(e,r){var n=e.id,s=e.title,i=e.created_at,t=e.comments,d=e.user;return(0,f.jsx)(h,{id:n,title:s,index:r,created_at:i,comments:t,user:d.login},n)})),e.placeholder]}))}},r)},r)}))})}var g=n(7022),v=function(){var e=(0,d.C)((function(e){return e.repo.token})),r=(0,d.C)((function(e){return e.boards.boards})),n=(0,d.T)();return(0,f.jsx)("main",{children:(0,f.jsx)(g.Z,{className:"d-flex",style:{justifyContent:"space-around"},children:(0,f.jsx)(t.Z5,{onDragEnd:function(e){if(e.destination){var t=r.map((function(n){if(n.title===e.source.droppableId){var t=(0,i.Z)(n.items),d=t.splice(e.source.index,1);return e.source.droppableId===e.destination.droppableId&&t.splice(e.destination.index,0,d[0]),(0,s.Z)((0,s.Z)({},n),{},{items:t})}if(n.title===e.destination.droppableId){var a,o=null===(a=r.find((function(r){return r.title===e.source.droppableId})))||void 0===a?void 0:a.items,c=(0,i.Z)(o).splice(e.source.index,1),l=(0,i.Z)(n.items);return l.splice(e.destination.index,0,c[0]),(0,s.Z)((0,s.Z)({},n),{},{items:l})}return n}));n((0,a.bw)(t))}},children:e?(0,f.jsx)(j,{}):null})})})}}}]);
//# sourceMappingURL=596.1dac9bc9.chunk.js.map