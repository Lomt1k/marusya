import{r as d,j as a,S as n,L as o,I as m,B as _,n as x}from"./index-C7PIWX3a.js";const j=({movie:s,topPosition:r,onClickRemove:e})=>s?a.jsxs("div",{className:"movie-card",children:[a.jsx(o,{className:"movie-card__link",to:`/movie/${s.id}`,children:s.posterUrl?a.jsx(m,{src:s.posterUrl,alt:s.title,className:"movie-card__img",loadingClassName:"movie-card__img--loading"}):a.jsx("span",{className:"movie-card__img movie-card__text",children:s.title})}),r&&a.jsx("span",{className:"movie-card__pos",children:r}),e&&a.jsx(_,{className:"movie-card__remove-btn",icon:a.jsx(x,{"aria-hidden":!0,width:24,height:24}),onClick:()=>e(s.id),ariaLabel:"Удалить"})]}):a.jsx(n,{className:"movie-card__img movie-card__img--loading"}),g=d.memo(j),p=({movies:s,carousel:r,top:e,onClickRemove:t})=>{const l=s??new Array(10);return a.jsx("ul",{className:`movies-card-list ${r?"movies-card-list--carousel":""}`,children:l.map((i,c)=>a.jsx("li",{children:a.jsx(g,{movie:i,topPosition:e?c+1:void 0,onClickRemove:t})},(i==null?void 0:i.id)??c))})};export{p as M};
