import{u as i,f as n,j as e,a,C as m}from"./index-mD3NM2bu.js";import{M as c}from"./MovieSection-DDO7dh6p.js";import{M as u}from"./MovieCardList-CaL7eDHE.js";import{H as r}from"./Heading-aWWePL7E.js";import"./ButtonLink-LS944rj6.js";import"./Favorites-Dide0NQi.js";import"./useMutation-MvgBOSmf.js";import"./Button-C3kAw7TI.js";import"./ModalsOverlay-DlKkd_Uu.js";function v(){const o=i({queryKey:["movie","random"],queryFn:()=>n()}),s=o.data,t=o.isFetching;return{movie:s,isFetching:t}}const p=()=>{const{movie:o,isFetching:s}=v();return e.jsx(c,{random:!0,movie:o,isFetching:s})};function d(){return i({queryKey:["movie","top"],queryFn:()=>a()}).data}const l=()=>{const o=d();return e.jsx("section",{className:"top-movies",children:e.jsx(m,{children:e.jsxs("div",{className:"top-movies__wrapper",children:[e.jsx(r,{level:2,children:"Топ 10 фильмов"}),e.jsx(u,{carousel:!0,top:!0,movies:o})]})})})},R=()=>e.jsxs("main",{children:[e.jsx(r,{level:1,visual:"hidden",children:"Маруся — стриминговый сервис для поиска фильмов"}),e.jsx(p,{}),e.jsx(l,{})]});export{R as default};
