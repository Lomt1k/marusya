import{u as s,b as m,r as o,j as r,S as c,L as i,I as g,M as u,C as p}from"./index-q69okUcH.js";import{H as l}from"./Heading-vOmWJu4w.js";import{N as h}from"./NotFound-TQM5hnVY.js";import"./ButtonLink-Bu7N3tga.js";const f=()=>{const e=s({queryKey:["genres","list"],queryFn:m}),t=e.data,n=e.isFetching,a=e.error;return{genres:t,isFetching:n,error:a}},x=""+new URL("genre-comedy--IpyffKa.jpg",import.meta.url).href,j=""+new URL("genre-adventure-BNf3vd1f.jpg",import.meta.url).href,d=""+new URL("genre-drama-Cnh-nzQX.jpg",import.meta.url).href,w=""+new URL("genre-family-jl2sgWIO.jpg",import.meta.url).href,y=""+new URL("genre-fantasy-BrmivWMX.jpg",import.meta.url).href,I=""+new URL("genre-history-BK7Pr97g.jpg",import.meta.url).href,L=""+new URL("genre-thriller-DGIxuEXP.jpg",import.meta.url).href,R=""+new URL("genre-horror-J7RGsx2k.jpg",import.meta.url).href,U=""+new URL("genre-scifi-DQbBWJug.jpg",import.meta.url).href,v=""+new URL("genre-standup-C6mqPC9-.jpg",import.meta.url).href,C=""+new URL("genre-mystery-CsoR3yuI.jpg",import.meta.url).href,D=""+new URL("genre-romance-OFAaOzZU.jpg",import.meta.url).href,F=""+new URL("genre-music-CCu51KLU.jpg",import.meta.url).href,G=""+new URL("genre-crime-Ly3dqJFg.jpg",import.meta.url).href,A=""+new URL("genre-tv-movie-DuIun-2M.jpg",import.meta.url).href,N=""+new URL("genre-documentary-uzh6QCDL.jpg",import.meta.url).href,M=""+new URL("genre-action-BslnWt_G.jpg",import.meta.url).href,P=""+new URL("genre-western-X6tLCsIw.jpg",import.meta.url).href,H=""+new URL("genre-animation-BtzPr54T.jpg",import.meta.url).href,O=""+new URL("genre-war-CrLoAOa5.jpg",import.meta.url).href,E=""+new URL("genre-comedy@2x-CPsjLaO-.jpg",import.meta.url).href,S=""+new URL("genre-adventure@2x-d2MotHe4.jpg",import.meta.url).href,W=""+new URL("genre-drama@2x-DGypPXlE.jpg",import.meta.url).href,X=""+new URL("genre-family@2x-jQlidsw_.jpg",import.meta.url).href,_=""+new URL("genre-fantasy@2x-DAD4fvUF.jpg",import.meta.url).href,q=""+new URL("genre-history@2x-NnFEfRsX.jpg",import.meta.url).href,z=""+new URL("genre-thriller@2x-DO8b0-9o.jpg",import.meta.url).href,B=""+new URL("genre-horror@2x-DtzkAImm.jpg",import.meta.url).href,Q=""+new URL("genre-scifi@2x-QHy6Vz0O.jpg",import.meta.url).href,T=""+new URL("genre-standup@2x-B2eO2fek.jpg",import.meta.url).href,k=""+new URL("genre-mystery@2x-DtgIOheX.jpg",import.meta.url).href,K=""+new URL("genre-romance@2x-CPZ4ZPNF.jpg",import.meta.url).href,b=""+new URL("genre-music@2x-DPS05sbq.jpg",import.meta.url).href,J=""+new URL("genre-crime@2x-XUKmEpeo.jpg",import.meta.url).href,Z=""+new URL("genre-tv-movie@2x-DpeRiAEQ.jpg",import.meta.url).href,$=""+new URL("genre-documentary@2x-qJPNwHeA.jpg",import.meta.url).href,V=""+new URL("genre-action@2x-opcMo87i.jpg",import.meta.url).href,Y=""+new URL("genre-western@2x-DjFFTPa7.jpg",import.meta.url).href,ee=""+new URL("genre-animation@2x-DlRkT-Kn.jpg",import.meta.url).href,re=""+new URL("genre-war@2x-r7cZCEuH.jpg",import.meta.url).href,te=e=>{switch(e){case"comedy":return x;case"adventure":return j;case"drama":return d;case"family":return w;case"fantasy":return y;case"history":return I;case"thriller":return L;case"horror":return R;case"scifi":return U;case"stand-up":return v;case"mystery":return C;case"romance":return D;case"music":return F;case"crime":return G;case"tv-movie":return A;case"documentary":return N;case"action":return M;case"western":return P;case"animation":return H;case"war":return O}},ne=e=>{switch(e){case"comedy":return E;case"adventure":return S;case"drama":return W;case"family":return X;case"fantasy":return _;case"history":return q;case"thriller":return z;case"horror":return B;case"scifi":return Q;case"stand-up":return T;case"mystery":return k;case"romance":return K;case"music":return b;case"crime":return J;case"tv-movie":return Z;case"documentary":return $;case"action":return V;case"western":return Y;case"animation":return ee;case"war":return re}},ae=({genre:e})=>{if(!e)return r.jsx(c,{className:"genre-card",height:304});const t=te(e),n=ne(e);return r.jsxs(i,{className:"genre-card",to:`/genres/${e}`,children:[r.jsx(g,{className:"genre-card__img",src:t,srcSet:`${n} 2x`,alt:e}),r.jsx("span",{className:"genre-card__title",children:u.getLocalizedGenre(e)})]})},se=o.memo(ae),me=({genres:e})=>{const t=e??Array(4);return r.jsx("ul",{className:"genres-card-list",children:t.map((n,a)=>r.jsx("li",{children:r.jsx(se,{genre:n})},n??a))})},oe=()=>{const{genres:e,error:t}=f();return t?r.jsx(h,{title:t.message}):r.jsx("section",{className:"genres",children:r.jsx(p,{children:r.jsxs("div",{className:"genres__wrapper",children:[r.jsx(l,{level:1,children:"Жанры фильмов"}),r.jsx(me,{genres:e})]})})})},pe=()=>r.jsx("main",{children:r.jsx(oe,{})});export{pe as default};
