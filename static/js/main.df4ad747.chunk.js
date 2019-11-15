(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],[,,,,,,,,,,function(e,a,c){e.exports=c(25)},,,,,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},,,,,,function(e,a,c){},function(e,a,c){"use strict";c.r(a);var t=c(0),n=c.n(t),s=c(9),r=c.n(s),i=c(4),o=(c(15),function(){return n.a.createElement("div",{className:"header-container"},n.a.createElement("p",{className:"header-title"},"CardFlip"))}),l=(c(16),function(e){var a=e.newGame,c=e.setNewGame,t=e.difficulty,s=e.setDifficulty,r=(e.setMoves,e.setTime,function(e){switch(e.target.innerText){case"Easy":s(1);break;case"Medium":s(2);break;case"Hard":s(3)}});return n.a.createElement("div",{className:"new-game-container"},!a&&n.a.createElement("button",{className:"new-game-button",onClick:function(){c(!0)}},"Start a new game!"),a&&null===t&&n.a.createElement("div",{className:"difficulty-container"},n.a.createElement("p",{className:"difficulty-option",onClick:r},"Easy"),n.a.createElement("p",{className:"difficulty-option",onClick:r},"Medium"),n.a.createElement("p",{className:"difficulty-option",onClick:r},"Hard")))}),m=c(5),u=(c(17),function(e){e.newGame;var a=e.difficulty,c=e.setDifficulty,s=e.moves,r=e.setMoves,i=e.time,o=e.setTime,l=e.iconArray,u=e.cardsArray,d=e.setCardsArray,f=e.FontAwesomeIcon,p=e.faQuestion,E=e.currentCards,h=e.setCurrentCards,N=e.foundPairs,b=e.setFoundPairs,v=e.won,y=e.setWon,g=e.faTrophy,j=e.faThumbsUp,O=e.timer,w=e.setTimer;Object(t.useEffect)((function(){if(a){switch(a){case 1:r(12),o(60);break;case 2:r(20),o(120);break;case 3:r(30),o(180)}var e=Object(m.a)(l);C(e);for(var c=[],t=1===a?6:2===a?9:12,s=0;s<t;s++){var i=e[s].props.icon.iconName,u=n.a.cloneElement(e[s],{key:"".concat(i,"-1"),id:"".concat(i,"-1")});c.push(u),u=n.a.cloneElement(e[s],{key:"".concat(i,"-2"),id:"".concat(i,"-2")}),c.push(u)}C(c),d(c)}}),[a]);var k=function(){i>0&&o(i-1)};Object(t.useEffect)((function(){return i>0&&"won"!==v&&"lost"!==v?w(setInterval(k,1e3)):0===i&&"won"!==v&&"lost"!==v&&(w(null),y("lost"),d([])),function(){return clearInterval(O)}}),[i]);var C=function(e){for(var a,c,t=e.length;0!==t;)c=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[c],e[c]=a;return e};Object(t.useEffect)((function(){2===E.length&&setTimeout((function(){if(E[0].name===E[1].name){var e=Object(m.a)(N);e.push(E[0].name),b(e),h([]),N.length!==u.length/2-1&&r(s-1)}else h([]),r(s-1)}),700)}),[E]),Object(t.useEffect)((function(){0!==u.length&&N.length===u.length/2&&(y("won"),d([]))}),[N]),Object(t.useEffect)((function(){0!==s||N.length===u.length/2&&"won"===v||(y("lost"),d([]))}),[s]);var T=function(e){if("card-front"===e.target.className){var a=Object(m.a)(E);a.push({id:Object.values(e.target.parentElement.children[1].children[0])[0].pendingProps.id,name:Object.values(e.target.parentElement.children[1].children[0])[0].pendingProps["data-icon"]}),h(a)}},S=function(){r(null),o(null),d([]),b([]),y(null),w(null),c(null)};return n.a.createElement("div",{className:"card-game-container"},n.a.createElement("div",{className:"info-container"},n.a.createElement("p",{className:"info-difficulty"},"Difficulty: ".concat(1===a?"Easy":2===a?"Medium":"Hard")),n.a.createElement("p",{className:"info-moves"},"Remaining moves: ".concat(s)),n.a.createElement("p",{className:"info-time"},"Time: ".concat(function(e){var a=Math.floor(e/60),c=e%60;return"".concat(a<10?"0".concat(a):"".concat(a),":").concat(c<10?"0".concat(c):"".concat(c))}(i)))),null!==u&&n.a.createElement("div",{className:"cards-container ".concat(1===a?"cards-easy":2===a?"cards-medium":"cards-hard")},u.map((function(e){return n.a.createElement("div",{key:"card-container-".concat(e.key),className:"card-flip-container ".concat(1===E.length?E[0].id===e.key?"card-flip":"":2===E.length&&(E[0].id===e.key||E[1].id===e.key)?"card-flip":""," ").concat(N.includes(e.props.icon.iconName)?"card-flip":""),onClick:T},n.a.createElement("div",{className:"card-flipper"},n.a.createElement("div",{className:"card-front"},n.a.createElement(f,{className:"card-icon",icon:p})),n.a.createElement("div",{className:"card-back ".concat(N.includes(e.props.icon.iconName)?"pair-found":"")},e)))}))),"won"===v&&n.a.createElement("div",{className:"won-container"},n.a.createElement(f,{className:"trophy",icon:g}),n.a.createElement("p",{className:"won-description"},"Coungratulations!"),n.a.createElement("p",{className:"won-description"},"You won!"),n.a.createElement("button",{onClick:S,className:"start-new-game-again"},"Start a new game")),"lost"===v&&n.a.createElement("div",{className:"lost-container"},n.a.createElement(f,{className:"thumbs-up",icon:j}),n.a.createElement("p",{className:"lost-description"},"Sorry, you lost!"),n.a.createElement("p",{className:"lost-description"},"But nice try, don't give up!"),n.a.createElement("button",{onClick:S,className:"start-new-game-again"},"Try again")))}),d=(c(18),c(2)),f=c(1),p=function(){var e=Object(t.useState)(!1),a=Object(i.a)(e,2),c=a[0],s=a[1],r=Object(t.useState)(null),m=Object(i.a)(r,2),p=m[0],E=m[1],h=Object(t.useState)(null),N=Object(i.a)(h,2),b=N[0],v=N[1],y=Object(t.useState)(null),g=Object(i.a)(y,2),j=g[0],O=g[1],w=Object(t.useState)([]),k=Object(i.a)(w,2),C=k[0],T=k[1],S=Object(t.useState)([]),M=Object(i.a)(S,2),A=M[0],G=M[1],D=Object(t.useState)([]),F=Object(i.a)(D,2),P=F[0],I=F[1],x=Object(t.useState)([]),B=Object(i.a)(x,2),H=B[0],J=B[1],Q=Object(t.useState)(null),U=Object(i.a)(Q,2),W=U[0],q=U[1],z=Object(t.useState)(null),R=Object(i.a)(z,2),Y=R[0],K=R[1];return Object(t.useEffect)((function(){var e=[];e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.r})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.e})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.o})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.j})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.l})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.w})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.g})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.A})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.u})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.d})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.C})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.k})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.n})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.z})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.B})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.f})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.h})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.i})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.v})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.D})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.E})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.t})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.p})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.y})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.q})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.c})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.a})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.b})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.s})),e.push(n.a.createElement(d.a,{className:"card-icon",icon:f.m})),T(e)}),[]),n.a.createElement("div",{className:"app-container"},n.a.createElement(o,null),n.a.createElement(l,{newGame:c,setNewGame:s,difficulty:p,setDifficulty:E,setMoves:v,setTime:O}),c&&null!==p&&n.a.createElement(u,{newGame:c,difficulty:p,setDifficulty:E,moves:b,setMoves:v,time:j,setTime:O,iconArray:C,cardsArray:A,setCardsArray:G,FontAwesomeIcon:d.a,faQuestion:f.x,currentCards:P,setCurrentCards:I,foundPairs:H,setFoundPairs:J,won:W,setWon:q,faTrophy:f.G,faThumbsUp:f.F,timer:Y,setTimer:K}))};c(24);r.a.render(n.a.createElement(p,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.df4ad747.chunk.js.map