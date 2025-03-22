import{r as i,R as c,o as m,j as e,B as n,h as x,C as j,i as p,M as d,S as a,I as v}from"./index-mD3NM2bu.js";import{H as g}from"./Heading-aWWePL7E.js";import{B as C,S as f}from"./ButtonLink-LS944rj6.js";import{f as w,a as _,S as M}from"./Favorites-Dide0NQi.js";import{u}from"./useMutation-MvgBOSmf.js";import{B as S}from"./Button-C3kAw7TI.js";import{M as y,S as F}from"./ModalsOverlay-DlKkd_Uu.js";const b=t=>i.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z",fill:"currentColor"})),N=t=>{var l;const s=(l=c.auth.user)==null?void 0:l.favorites.includes(t.toString()),r=u({mutationKey:["favorites",t],mutationFn:()=>w(t)}),h=u({mutationKey:["favorites",t],mutationFn:()=>_(t)});return{isFavorite:s,handleClick:()=>{if(s===void 0){c.auth.setModalActive(!0);return}s?h.mutate():r.mutate()}}},k=m(({movieId:t})=>{const{isFavorite:s,handleClick:r}=N(t);return s?e.jsx(n,{secondary:!0,icon:e.jsx(b,{width:24,height:24,"aria-hidden":!0}),onClick:r,ariaLabel:"Удалить из избранного"}):e.jsx(n,{secondary:!0,icon:e.jsx(M,{width:24,height:24,"aria-hidden":!0}),onClick:r,ariaLabel:"Добавить в избранное"})}),B=t=>i.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z",fill:"currentColor"})),H=()=>{const t=x(),s=()=>{t.invalidateQueries({queryKey:["movie","random"]})};return e.jsx(n,{secondary:!0,icon:e.jsx(B,{width:24,height:24,"aria-hidden":!0}),onClick:s,ariaLabel:"Обновить фильм"})};class o{static truncateText(s,r){return s.length<=r?s:(s=s.substring(0,r),o.removeLastWord(s).trimEnd()+"...")}static removeLastWord(s){return s.replace(/\s+\S+$/,"")}static toUsd(s){return isNaN(s)?"Неизвестно":"$"+s.toLocaleString()}}const L=({youtubeVideoId:t,onClose:s})=>e.jsx(y,{children:e.jsx("div",{className:"video-modal",children:e.jsxs("div",{className:"video-modal__container",children:[e.jsx("iframe",{className:"video-modal__iframe",src:`https://www.youtube.com/embed/${t}?rel=0`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"}),e.jsx("button",{className:"video-modal__close",onClick:s,children:e.jsx(F,{width:24,height:24,"aria-hidden":!0})})]})})}),R=({youtubeVideoId:t})=>{const[s,r]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>r(!0),children:"Трейлер"}),s&&e.jsx(L,{youtubeVideoId:t,onClose:()=>r(!1)})]})},Y=({movie:t,isFetching:s,random:r})=>e.jsx("section",{className:`movie-section ${r?"movie-section--random":""}`,children:e.jsx(j,{children:e.jsxs("div",{className:"movie-section__wrapper",children:[e.jsxs("div",{className:"movie-section__content",children:[e.jsx("div",{className:"movie-section__info",children:t&&!s?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"movie-section__info-top",children:[e.jsx(p,{rating:t.tmdbRating}),e.jsx("span",{children:t.releaseYear}),e.jsx("span",{children:d.getLocalizedGenres(t.genres)}),e.jsx("span",{children:d.getRuntimeString(t.runtime)})]}),e.jsx(g,{level:r?2:1,visual:1,children:t.title}),e.jsx("p",{className:"movie-section__plot",children:r?o.truncateText(t.plot,400):t.plot})]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{linesCount:1.3,width:"50%"}),e.jsx(a,{linesCount:2.5}),e.jsx(a,{linesCount:6})]})}),e.jsx("div",{className:"movie-section__buttons",children:t&&e.jsxs(e.Fragment,{children:[e.jsx(R,{youtubeVideoId:t.trailerYouTubeId}),r&&e.jsx(C,{secondary:!0,to:`/movie/${t.id}`,children:"О фильме"}),e.jsx(k,{movieId:t.id}),r&&e.jsx(H,{})]})})]}),t&&!t.backdropUrl&&!t.posterUrl?e.jsx("div",{className:"movie-section__img",children:e.jsx(f,{width:"20%","aria-hidden":!0})}):e.jsx(v,{className:"movie-section__img",src:t?t.backdropUrl??t.posterUrl:void 0,alt:(t==null?void 0:t.title)??"Изображение к фильму"})]})})});export{Y as M,o as S};
