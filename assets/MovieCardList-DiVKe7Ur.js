import{r as l,j as a,S as o,L as d,I as m}from"./index-BnYu_4h-.js";const n=({movie:s,topPosition:r})=>s?a.jsxs(d,{className:"movie-card",to:`/movie/${s.id}`,children:[s.posterUrl?a.jsx(m,{src:s.posterUrl,alt:s.title,className:"movie-card__img",loadingClassName:"movie-card__img--loading"}):a.jsx("span",{className:"movie-card__img movie-card__text",children:s.title}),r&&a.jsx("span",{className:"movie-card__pos",children:r})]}):a.jsx(o,{className:"movie-card__img movie-card__img--loading"}),_=l.memo(n),j=({movies:s,carousel:r,top:c})=>{const t=s??new Array(10);return a.jsx("ul",{className:`movies-card-list ${r?"movies-card-list--carousel":""}`,children:t.map((e,i)=>a.jsx("li",{children:a.jsx(_,{movie:e,topPosition:c?i+1:void 0})},(e==null?void 0:e.id)??i))})};export{j as M};
