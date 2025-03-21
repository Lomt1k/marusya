import{u as l,e as i,j as s,S as c,C as d,d as p}from"./index-C3v8KKOZ.js";import{S as n,M as g}from"./MovieSection-CI5FGN4T.js";import{N as o}from"./NotFound-Ck_wfj8U.js";import{H as m}from"./Heading-psbcD2QY.js";import"./ButtonLink-Uffayhk6.js";import"./Favorites-C3EKJubp.js";import"./useMutation-L6za1SVT.js";import"./Button-DwQ7gI5m.js";import"./ModalsOverlay-h7W-pCZP.js";function h(a){const r=l({queryKey:["movie",a],queryFn:()=>i(a)}),t=r.data,e=r.isFetching,u=r.error;return{movie:t,isFetching:e,error:u}}const j=({data:a,loading:r})=>s.jsx("div",{className:"movie-about-info",children:r?s.jsx(c,{linesCount:1}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"movie-about-info__param-wrapper",children:[s.jsx("span",{className:"movie-about-info__param",children:a.param}),s.jsx("div",{className:"movie-about-info__border"})]}),s.jsx("span",{className:"movie-about-info__value",children:a.value??"Неизвестно"})]})});class x{static getLanguageName(r){return{en:"Английский",zh:"Китайский",hi:"Хинди",es:"Испанский",fr:"Французский",ar:"Арабский",bn:"Бенгальский",ru:"Русский",pt:"Португальский",ur:"Урду",id:"Индонезийский",de:"Немецкий",ja:"Японский",sw:"Суахили",mr:"Маратхи",te:"Телугу",tr:"Турецкий",ta:"Тамильский",vi:"Вьетнамский",ko:"Корейский",it:"Итальянский",th:"Тайский",gu:"Гуджарати",fa:"Персидский",pl:"Польский",uk:"Украинский",ml:"Малаялам",kn:"Каннада",my:"Бирманский",sv:"Шведский",az:"Азербайджанский",am:"Амхарский",om:"Оромо",ha:"Хауса",yo:"Йоруба",ig:"Игбо",nl:"Нидерландский",fil:"Филиппинский",ne:"Непальский",si:"Сингальский",ckb:"Курдский (сорани)",km:"Кхмерский",ps:"Пушту",tg:"Таджикский",so:"Сомали",zu:"Зулу",xh:"Коса",sn:"Шона",kk:"Казахский",uz:"Узбекский",ky:"Киргизский",ro:"Румынский",cs:"Чешский",el:"Греческий",hu:"Венгерский",fi:"Финский",sk:"Словацкий",da:"Датский",no:"Норвежский",he:"Иврит",sr:"Сербский",hr:"Хорватский",bg:"Болгарский",lt:"Литовский",lv:"Латышский",sl:"Словенский",et:"Эстонский",ga:"Ирландский",mt:"Мальтийский",cy:"Валлийский",gd:"Шотландский (гэльский)",is:"Исландский",mk:"Македонский",sq:"Албанский",bs:"Боснийский",ca:"Каталанский",eu:"Баскский",gl:"Галисийский",af:"Африкаанс",st:"Сесото",tn:"Тсвана",ts:"Тсонга",ss:"Свази",ve:"Венда",nr:"Ндебеле",ny:"Чичева",rw:"Киньяруанда",lg:"Луганда",mg:"Малагасийский",ceb:"Себуано",ilo:"Илоканский",war:"Варайский",hmn:"Хмонг",jv:"Яванский",su:"Сунданский",lb:"Люксембургский",fy:"Фризский",co:"Корсиканский",ht:"Гаитянский креольский",mi:"Маори",sm:"Самоанский",to:"Тонганский",fj:"Фиджийский",ty:"Таитянский",haw:"Гавайский"}[r]||r}}const f=a=>[{param:"Язык оригинала",value:a!=null&&a.language?x.getLanguageName(a.language):void 0},{param:"Бюджет",value:a!=null&&a.budget?n.toUsd(+a.budget):void 0},{param:"Выручка",value:a!=null&&a.revenue?n.toUsd(+a.revenue):void 0},{param:"Режиссёр",value:a==null?void 0:a.director},{param:"Продакшен",value:a==null?void 0:a.production},{param:"Награды",value:a==null?void 0:a.awardsSummary}],b=({movie:a})=>{const r=f(a),t=!a;return s.jsx("section",{className:"movie-about",children:s.jsx(d,{children:s.jsxs("div",{className:"movie-about__wrapper",children:[s.jsx(m,{level:2,children:"О фильме"}),s.jsx("ul",{className:"movie-about__list",children:r.map(e=>s.jsx("li",{children:s.jsx(j,{data:e,loading:t})},e.param))})]})})})},N=({movieId:a})=>{const{movie:r,isFetching:t,error:e}=h(a);return e?s.jsx(o,{title:e.message}):s.jsxs(s.Fragment,{children:[s.jsx(g,{movie:r,isFetching:t}),s.jsx(b,{movie:r})]})},z=()=>{const{movieId:a}=p(),r=a&&!isNaN(+a);return s.jsx("main",{children:r?s.jsx(N,{movieId:+a}):s.jsx(o,{title:"Фильм не найден"})})};export{z as default};
