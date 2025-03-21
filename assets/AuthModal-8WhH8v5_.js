import{j as g,L as Cr,r as Ne,s as I,h as Lr,R as xe,t as or,w as Mr,x as Tr,y as Or,m as Rr,z as Ur}from"./index-DeZrwLwO.js";import{S as Pr,M as Le}from"./ModalsOverlay-BYRQ8_oc.js";import{S as ur}from"./email-HFUIroiN.js";import{B as Me}from"./Button-BEVKFRBe.js";import{u as cr}from"./useMutation-D8dKO91L.js";import{H as dr}from"./Heading-BofQgKNY.js";const Te=({onClickClose:e,children:s,className:r})=>g.jsx("div",{className:"modal",children:g.jsxs("div",{className:"modal__wrapper",children:[g.jsx("div",{className:`modal__content ${r??""}`,children:s}),g.jsx("button",{className:"modal__close",onClick:e,children:g.jsx(Pr,{width:24,height:24,"aria-hidden":!0})})]})}),Br=""+new URL("logo-dark-uSEjpd4K.png",import.meta.url).href,Ir=""+new URL("logo-dark@2x-NU9MLA3J.png",import.meta.url).href,Oe=({className:e})=>g.jsx(Cr,{className:`logo-dark ${e??""}`,to:"/",children:g.jsx("img",{src:Br,srcSet:Ir+" 2x",alt:"Логотип Маруся",draggable:!1})}),se=({icon:e,dark:s,error:r,onInput:i,...o})=>g.jsxs("div",{className:`input ${s?"input--dark":""} ${r?"input--error":""}`,children:[g.jsx("input",{className:"input__field",onInput:l=>{i&&i(l.currentTarget.value)},...o}),g.jsx("span",{className:"input__icon",children:e}),r&&g.jsx("span",{className:"input__error",children:r})]}),fr=e=>Ne.createElement("svg",{viewBox:"0 0 24 25",xmlns:"http://www.w3.org/2000/svg",...e},Ne.createElement("path",{d:"M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z",fill:"currentColor"}));var he=e=>e.type==="checkbox",ie=e=>e instanceof Date,T=e=>e==null;const yr=e=>typeof e=="object";var k=e=>!T(e)&&!Array.isArray(e)&&yr(e)&&!ie(e),qr=e=>k(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,Hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,$r=(e,s)=>e.has(Hr(s)),Wr=e=>{const s=e.constructor&&e.constructor.prototype;return k(s)&&s.hasOwnProperty("isPrototypeOf")},Re=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function B(e){let s;const r=Array.isArray(e),i=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Re&&(e instanceof Blob||i))&&(r||k(e)))if(s=r?[]:{},!r&&!Wr(e))s=e;else for(const o in e)e.hasOwnProperty(o)&&(s[o]=B(e[o]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,y=(e,s,r)=>{if(!s||!k(e))return r;const i=Ve(s.split(/[,[\].]+?/)).reduce((o,l)=>T(o)?o:o[l],e);return S(i)||i===e?S(e[s])?r:e[s]:i},K=e=>typeof e=="boolean",Ue=e=>/^\w*$/.test(e),hr=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,s,r)=>{let i=-1;const o=Ue(s)?[s]:hr(s),l=o.length,u=l-1;for(;++i<l;){const h=o[i];let A=r;if(i!==u){const F=e[h];A=k(F)||Array.isArray(F)?F:isNaN(+o[i+1])?{}:[]}if(h==="__proto__"||h==="constructor"||h==="prototype")return;e[h]=A,e=e[h]}return e};const Ye={BLUR:"blur",FOCUS_OUT:"focusout"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};I.createContext(null);var Kr=(e,s,r,i=!0)=>{const o={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(o,l,{get:()=>{const u=l;return s._proxyFormState[u]!==$.all&&(s._proxyFormState[u]=!i||$.all),e[u]}});return o},O=e=>k(e)&&!Object.keys(e).length,zr=(e,s,r,i)=>{r(e);const{name:o,...l}=e;return O(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(u=>s[u]===$.all)},me=e=>Array.isArray(e)?e:[e];function Qr(e){const s=I.useRef(e);s.current=e,I.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var Q=e=>typeof e=="string",Zr=(e,s,r,i,o)=>Q(e)?(i&&s.watch.add(e),y(r,e,o)):Array.isArray(e)?e.map(l=>(i&&s.watch.add(l),y(r,l))):(i&&(s.watchAll=!0),r),gr=(e,s,r,i,o)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:o||!0}}:{},Xe=e=>({isOnSubmit:!e||e===$.onSubmit,isOnBlur:e===$.onBlur,isOnChange:e===$.onChange,isOnAll:e===$.all,isOnTouch:e===$.onTouched}),Ge=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const ye=(e,s,r,i)=>{for(const o of r||Object.keys(e)){const l=y(e,o);if(l){const{_f:u,...h}=l;if(u){if(u.refs&&u.refs[0]&&s(u.refs[0],o)&&!i)return!0;if(u.ref&&s(u.ref,u.name)&&!i)return!0;if(ye(h,s))break}else if(k(h)&&ye(h,s))break}}};var Jr=(e,s,r)=>{const i=me(y(e,r));return V(i,"root",s[r]),V(e,r,i),e},Pe=e=>e.type==="file",z=e=>typeof e=="function",be=e=>{if(!Re)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},_e=e=>Q(e),Be=e=>e.type==="radio",pe=e=>e instanceof RegExp;const er={value:!1,isValid:!1},rr={value:!0,isValid:!0};var vr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?rr:{value:e[0].value,isValid:!0}:rr:er}return er};const tr={isValid:!1,value:null};var mr=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,tr):tr;function sr(e,s,r="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||K(e)&&!e)return{type:r,message:_e(e)?e:"",ref:s}}var le=e=>k(e)&&!pe(e)?e:{value:e,message:""},ir=async(e,s,r,i,o,l)=>{const{ref:u,refs:h,required:A,maxLength:F,minLength:p,min:m,max:Z,pattern:re,validate:R,name:M,valueAsNumber:q,mount:W}=e._f,b=y(r,M);if(!W||s.has(M))return{};const J=h?h[0]:u,Y=x=>{o&&J.reportValidity&&(J.setCustomValidity(K(x)?"":x||""),J.reportValidity())},E={},ae=Be(u),ge=he(u),te=ae||ge,ne=(q||Pe(u))&&S(u.value)&&S(b)||be(u)&&u.value===""||b===""||Array.isArray(b)&&!b.length,U=gr.bind(null,M,i,E),ve=(x,w,D,L=X.maxLength,H=X.minLength)=>{const P=x?w:D;E[M]={type:x?L:H,message:P,ref:u,...U(x?L:H,P)}};if(l?!Array.isArray(b)||!b.length:A&&(!te&&(ne||T(b))||K(b)&&!b||ge&&!vr(h).isValid||ae&&!mr(h).isValid)){const{value:x,message:w}=_e(A)?{value:!!A,message:A}:le(A);if(x&&(E[M]={type:X.required,message:w,ref:J,...U(X.required,w)},!i))return Y(w),E}if(!ne&&(!T(m)||!T(Z))){let x,w;const D=le(Z),L=le(m);if(!T(b)&&!isNaN(b)){const H=u.valueAsNumber||b&&+b;T(D.value)||(x=H>D.value),T(L.value)||(w=H<L.value)}else{const H=u.valueAsDate||new Date(b),P=ce=>new Date(new Date().toDateString()+" "+ce),oe=u.type=="time",ue=u.type=="week";Q(D.value)&&b&&(x=oe?P(b)>P(D.value):ue?b>D.value:H>new Date(D.value)),Q(L.value)&&b&&(w=oe?P(b)<P(L.value):ue?b<L.value:H<new Date(L.value))}if((x||w)&&(ve(!!x,D.message,L.message,X.max,X.min),!i))return Y(E[M].message),E}if((F||p)&&!ne&&(Q(b)||l&&Array.isArray(b))){const x=le(F),w=le(p),D=!T(x.value)&&b.length>+x.value,L=!T(w.value)&&b.length<+w.value;if((D||L)&&(ve(D,x.message,w.message),!i))return Y(E[M].message),E}if(re&&!ne&&Q(b)){const{value:x,message:w}=le(re);if(pe(x)&&!b.match(x)&&(E[M]={type:X.pattern,message:w,ref:u,...U(X.pattern,w)},!i))return Y(w),E}if(R){if(z(R)){const x=await R(b,r),w=sr(x,J);if(w&&(E[M]={...w,...U(X.validate,w.message)},!i))return Y(w.message),E}else if(k(R)){let x={};for(const w in R){if(!O(x)&&!i)break;const D=sr(await R[w](b,r),J,w);D&&(x={...D,...U(w,D.message)},Y(D.message),i&&(E[M]=x))}if(!O(x)&&(E[M]={ref:J,...x},!i))return E}}return Y(!0),E};function Yr(e,s){const r=s.slice(0,-1).length;let i=0;for(;i<r;)e=S(e)?i++:e[s[i++]];return e}function Xr(e){for(const s in e)if(e.hasOwnProperty(s)&&!S(e[s]))return!1;return!0}function j(e,s){const r=Array.isArray(s)?s:Ue(s)?[s]:hr(s),i=r.length===1?e:Yr(e,r),o=r.length-1,l=r[o];return i&&delete i[l],o!==0&&(k(i)&&O(i)||Array.isArray(i)&&Xr(i))&&j(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:o=>{for(const l of e)l.next&&l.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(l=>l!==o)}}),unsubscribe:()=>{e=[]}}},Ce=e=>T(e)||!yr(e);function ee(e,s){if(Ce(e)||Ce(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const r=Object.keys(e),i=Object.keys(s);if(r.length!==i.length)return!1;for(const o of r){const l=e[o];if(!i.includes(o))return!1;if(o!=="ref"){const u=s[o];if(ie(l)&&ie(u)||k(l)&&k(u)||Array.isArray(l)&&Array.isArray(u)?!ee(l,u):l!==u)return!1}}return!0}var _r=e=>e.type==="select-multiple",Gr=e=>Be(e)||he(e),De=e=>be(e)&&e.isConnected,xr=e=>{for(const s in e)if(z(e[s]))return!0;return!1};function we(e,s={}){const r=Array.isArray(e);if(k(e)||r)for(const i in e)Array.isArray(e[i])||k(e[i])&&!xr(e[i])?(s[i]=Array.isArray(e[i])?[]:{},we(e[i],s[i])):T(e[i])||(s[i]=!0);return s}function br(e,s,r){const i=Array.isArray(e);if(k(e)||i)for(const o in e)Array.isArray(e[o])||k(e[o])&&!xr(e[o])?S(s)||Ce(r[o])?r[o]=Array.isArray(e[o])?we(e[o],[]):{...we(e[o])}:br(e[o],T(s)?{}:s[o],r[o]):r[o]=!ee(e[o],s[o]);return r}var de=(e,s)=>br(e,s,we(s)),pr=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:i})=>S(e)?e:s?e===""?NaN:e&&+e:r&&Q(e)?new Date(e):i?i(e):e;function je(e){const s=e.ref;return Pe(s)?s.files:Be(s)?mr(e.refs).value:_r(s)?[...s.selectedOptions].map(({value:r})=>r):he(s)?vr(e.refs).value:pr(S(s.value)?e.ref.value:s.value,e)}var et=(e,s,r,i)=>{const o={};for(const l of e){const u=y(s,l);u&&V(o,l,u._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:i}},fe=e=>S(e)?e:pe(e)?e.source:k(e)?pe(e.value)?e.value.source:e.value:e;const ar="AsyncFunction";var rt=e=>!!e&&!!e.validate&&!!(z(e.validate)&&e.validate.constructor.name===ar||k(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===ar)),tt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function nr(e,s,r){const i=y(e,r);if(i||Ue(r))return{error:i,name:r};const o=r.split(".");for(;o.length;){const l=o.join("."),u=y(s,l),h=y(e,l);if(u&&!Array.isArray(u)&&r!==l)return{name:r};if(h&&h.type)return{name:l,error:h};o.pop()}return{name:r}}var st=(e,s,r,i,o)=>o.isOnAll?!1:!r&&o.isOnTouch?!(s||e):(r?i.isOnBlur:o.isOnBlur)?!e:(r?i.isOnChange:o.isOnChange)?e:!0,it=(e,s)=>!Ve(y(e,s)).length&&j(e,s);const at={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function nt(e={}){let s={...at,...e},r={submitCount:0,isDirty:!1,isLoading:z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},i={},o=k(s.defaultValues)||k(s.values)?B(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:B(o),u={action:!1,mount:!1,watch:!1},h={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},A,F=0;const p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Ee(),array:Ee(),state:Ee()},Z=Xe(s.mode),re=Xe(s.reValidateMode),R=s.criteriaMode===$.all,M=t=>a=>{clearTimeout(F),F=setTimeout(t,a)},q=async t=>{if(!s.disabled&&(p.isValid||t)){const a=s.resolver?O((await te()).errors):await U(i,!0);a!==r.isValid&&m.state.next({isValid:a})}},W=(t,a)=>{!s.disabled&&(p.isValidating||p.validatingFields)&&((t||Array.from(h.mount)).forEach(n=>{n&&(a?V(r.validatingFields,n,a):j(r.validatingFields,n))}),m.state.next({validatingFields:r.validatingFields,isValidating:!O(r.validatingFields)}))},b=(t,a=[],n,f,d=!0,c=!0)=>{if(f&&n&&!s.disabled){if(u.action=!0,c&&Array.isArray(y(i,t))){const v=n(y(i,t),f.argA,f.argB);d&&V(i,t,v)}if(c&&Array.isArray(y(r.errors,t))){const v=n(y(r.errors,t),f.argA,f.argB);d&&V(r.errors,t,v),it(r.errors,t)}if(p.touchedFields&&c&&Array.isArray(y(r.touchedFields,t))){const v=n(y(r.touchedFields,t),f.argA,f.argB);d&&V(r.touchedFields,t,v)}p.dirtyFields&&(r.dirtyFields=de(o,l)),m.state.next({name:t,isDirty:x(t,a),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else V(l,t,a)},J=(t,a)=>{V(r.errors,t,a),m.state.next({errors:r.errors})},Y=t=>{r.errors=t,m.state.next({errors:r.errors,isValid:!1})},E=(t,a,n,f)=>{const d=y(i,t);if(d){const c=y(l,t,S(n)?y(o,t):n);S(c)||f&&f.defaultChecked||a?V(l,t,a?c:je(d._f)):L(t,c),u.mount&&q()}},ae=(t,a,n,f,d)=>{let c=!1,v=!1;const _={name:t};if(!s.disabled){const N=!!(y(i,t)&&y(i,t)._f&&y(i,t)._f.disabled);if(!n||f){p.isDirty&&(v=r.isDirty,r.isDirty=_.isDirty=x(),c=v!==_.isDirty);const C=N||ee(y(o,t),a);v=!!(!N&&y(r.dirtyFields,t)),C||N?j(r.dirtyFields,t):V(r.dirtyFields,t,!0),_.dirtyFields=r.dirtyFields,c=c||p.dirtyFields&&v!==!C}if(n){const C=y(r.touchedFields,t);C||(V(r.touchedFields,t,n),_.touchedFields=r.touchedFields,c=c||p.touchedFields&&C!==n)}c&&d&&m.state.next(_)}return c?_:{}},ge=(t,a,n,f)=>{const d=y(r.errors,t),c=p.isValid&&K(a)&&r.isValid!==a;if(s.delayError&&n?(A=M(()=>J(t,n)),A(s.delayError)):(clearTimeout(F),A=null,n?V(r.errors,t,n):j(r.errors,t)),(n?!ee(d,n):d)||!O(f)||c){const v={...f,...c&&K(a)?{isValid:a}:{},errors:r.errors,name:t};r={...r,...v},m.state.next(v)}},te=async t=>{W(t,!0);const a=await s.resolver(l,s.context,et(t||h.mount,i,s.criteriaMode,s.shouldUseNativeValidation));return W(t),a},ne=async t=>{const{errors:a}=await te(t);if(t)for(const n of t){const f=y(a,n);f?V(r.errors,n,f):j(r.errors,n)}else r.errors=a;return a},U=async(t,a,n={valid:!0})=>{for(const f in t){const d=t[f];if(d){const{_f:c,...v}=d;if(c){const _=h.array.has(c.name),N=d._f&&rt(d._f);N&&p.validatingFields&&W([f],!0);const C=await ir(d,h.disabled,l,R,s.shouldUseNativeValidation&&!a,_);if(N&&p.validatingFields&&W([f]),C[c.name]&&(n.valid=!1,a))break;!a&&(y(C,c.name)?_?Jr(r.errors,C,c.name):V(r.errors,c.name,C[c.name]):j(r.errors,c.name))}!O(v)&&await U(v,a,n)}}return n.valid},ve=()=>{for(const t of h.unMount){const a=y(i,t);a&&(a._f.refs?a._f.refs.every(n=>!De(n)):!De(a._f.ref))&&Ae(t)}h.unMount=new Set},x=(t,a)=>!s.disabled&&(t&&a&&V(l,t,a),!ee(Ie(),o)),w=(t,a,n)=>Zr(t,h,{...u.mount?l:S(a)?o:Q(t)?{[t]:a}:a},n,a),D=t=>Ve(y(u.mount?l:o,t,s.shouldUnregister?y(o,t,[]):[])),L=(t,a,n={})=>{const f=y(i,t);let d=a;if(f){const c=f._f;c&&(!c.disabled&&V(l,t,pr(a,c)),d=be(c.ref)&&T(a)?"":a,_r(c.ref)?[...c.ref.options].forEach(v=>v.selected=d.includes(v.value)):c.refs?he(c.ref)?c.refs.length>1?c.refs.forEach(v=>(!v.defaultChecked||!v.disabled)&&(v.checked=Array.isArray(d)?!!d.find(_=>_===v.value):d===v.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(v=>v.checked=v.value===d):Pe(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||m.values.next({name:t,values:{...l}})))}(n.shouldDirty||n.shouldTouch)&&ae(t,d,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ce(t)},H=(t,a,n)=>{for(const f in a){const d=a[f],c=`${t}.${f}`,v=y(i,c);(h.array.has(t)||k(d)||v&&!v._f)&&!ie(d)?H(c,d,n):L(c,d,n)}},P=(t,a,n={})=>{const f=y(i,t),d=h.array.has(t),c=B(a);V(l,t,c),d?(m.array.next({name:t,values:{...l}}),(p.isDirty||p.dirtyFields)&&n.shouldDirty&&m.state.next({name:t,dirtyFields:de(o,l),isDirty:x(t,c)})):f&&!f._f&&!T(c)?H(t,c,n):L(t,c,n),Ge(t,h)&&m.state.next({...r}),m.values.next({name:u.mount?t:void 0,values:{...l}})},oe=async t=>{u.mount=!0;const a=t.target;let n=a.name,f=!0;const d=y(i,n),c=()=>a.type?je(d._f):qr(t),v=_=>{f=Number.isNaN(_)||ie(_)&&isNaN(_.getTime())||ee(_,y(l,n,_))};if(d){let _,N;const C=c(),G=t.type===Ye.BLUR||t.type===Ye.FOCUS_OUT,Dr=!tt(d._f)&&!s.resolver&&!y(r.errors,n)&&!d._f.deps||st(G,y(r.touchedFields,n),r.isSubmitted,re,Z),ke=Ge(n,h,G);V(l,n,C),G?(d._f.onBlur&&d._f.onBlur(t),A&&A(0)):d._f.onChange&&d._f.onChange(t);const Se=ae(n,C,G,!1),jr=!O(Se)||ke;if(!G&&m.values.next({name:n,type:t.type,values:{...l}}),Dr)return p.isValid&&(s.mode==="onBlur"&&G?q():G||q()),jr&&m.state.next({name:n,...ke?{}:Se});if(!G&&ke&&m.state.next({...r}),s.resolver){const{errors:Ze}=await te([n]);if(v(C),f){const Nr=nr(r.errors,i,n),Je=nr(Ze,i,Nr.name||n);_=Je.error,n=Je.name,N=O(Ze)}}else W([n],!0),_=(await ir(d,h.disabled,l,R,s.shouldUseNativeValidation))[n],W([n]),v(C),f&&(_?N=!1:p.isValid&&(N=await U(i,!0)));f&&(d._f.deps&&ce(d._f.deps),ge(n,N,_,Se))}},ue=(t,a)=>{if(y(r.errors,a)&&t.focus)return t.focus(),1},ce=async(t,a={})=>{let n,f;const d=me(t);if(s.resolver){const c=await ne(S(t)?t:d);n=O(c),f=t?!d.some(v=>y(c,v)):n}else t?(f=(await Promise.all(d.map(async c=>{const v=y(i,c);return await U(v&&v._f?{[c]:v}:v)}))).every(Boolean),!(!f&&!r.isValid)&&q()):f=n=await U(i);return m.state.next({...!Q(t)||p.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),a.shouldFocus&&!f&&ye(i,ue,t?d:h.mount),f},Ie=t=>{const a={...u.mount?l:o};return S(t)?a:Q(t)?y(a,t):t.map(n=>y(a,n))},qe=(t,a)=>({invalid:!!y((a||r).errors,t),isDirty:!!y((a||r).dirtyFields,t),error:y((a||r).errors,t),isValidating:!!y(r.validatingFields,t),isTouched:!!y((a||r).touchedFields,t)}),Fr=t=>{t&&me(t).forEach(a=>j(r.errors,a)),m.state.next({errors:t?r.errors:{}})},He=(t,a,n)=>{const f=(y(i,t,{_f:{}})._f||{}).ref,d=y(r.errors,t)||{},{ref:c,message:v,type:_,...N}=d;V(r.errors,t,{...N,...a,ref:f}),m.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&f&&f.focus&&f.focus()},kr=(t,a)=>z(t)?m.values.subscribe({next:n=>t(w(void 0,a),n)}):w(t,a,!0),Ae=(t,a={})=>{for(const n of t?me(t):h.mount)h.mount.delete(n),h.array.delete(n),a.keepValue||(j(i,n),j(l,n)),!a.keepError&&j(r.errors,n),!a.keepDirty&&j(r.dirtyFields,n),!a.keepTouched&&j(r.touchedFields,n),!a.keepIsValidating&&j(r.validatingFields,n),!s.shouldUnregister&&!a.keepDefaultValue&&j(o,n);m.values.next({values:{...l}}),m.state.next({...r,...a.keepDirty?{isDirty:x()}:{}}),!a.keepIsValid&&q()},$e=({disabled:t,name:a,field:n,fields:f})=>{(K(t)&&u.mount||t||h.disabled.has(a))&&(t?h.disabled.add(a):h.disabled.delete(a),ae(a,je(n?n._f:y(f,a)._f),!1,!1,!0))},Fe=(t,a={})=>{let n=y(i,t);const f=K(a.disabled)||K(s.disabled);return V(i,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...a}}),h.mount.add(t),n?$e({field:n,disabled:K(a.disabled)?a.disabled:s.disabled,name:t}):E(t,!0,a.value),{...f?{disabled:a.disabled||s.disabled}:{},...s.progressive?{required:!!a.required,min:fe(a.min),max:fe(a.max),minLength:fe(a.minLength),maxLength:fe(a.maxLength),pattern:fe(a.pattern)}:{},name:t,onChange:oe,onBlur:oe,ref:d=>{if(d){Fe(t,a),n=y(i,t);const c=S(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,v=Gr(c),_=n._f.refs||[];if(v?_.find(N=>N===c):c===n._f.ref)return;V(i,t,{_f:{...n._f,...v?{refs:[..._.filter(De),c,...Array.isArray(y(o,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),E(t,!1,void 0,c)}else n=y(i,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||a.shouldUnregister)&&!($r(h.array,t)&&u.action)&&h.unMount.add(t)}}},We=()=>s.shouldFocusError&&ye(i,ue,h.mount),Sr=t=>{K(t)&&(m.state.next({disabled:t}),ye(i,(a,n)=>{const f=y(i,n);f&&(a.disabled=f._f.disabled||t,Array.isArray(f._f.refs)&&f._f.refs.forEach(d=>{d.disabled=f._f.disabled||t}))},0,!1))},Ke=(t,a)=>async n=>{let f;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let d=B(l);if(h.disabled.size)for(const c of h.disabled)V(d,c,void 0);if(m.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:v}=await te();r.errors=c,d=v}else await U(i);if(j(r.errors,"root"),O(r.errors)){m.state.next({errors:{}});try{await t(d,n)}catch(c){f=c}}else a&&await a({...r.errors},n),We(),setTimeout(We);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},Er=(t,a={})=>{y(i,t)&&(S(a.defaultValue)?P(t,B(y(o,t))):(P(t,a.defaultValue),V(o,t,B(a.defaultValue))),a.keepTouched||j(r.touchedFields,t),a.keepDirty||(j(r.dirtyFields,t),r.isDirty=a.defaultValue?x(t,B(y(o,t))):x()),a.keepError||(j(r.errors,t),p.isValid&&q()),m.state.next({...r}))},ze=(t,a={})=>{const n=t?B(t):o,f=B(n),d=O(t),c=d?o:f;if(a.keepDefaultValues||(o=n),!a.keepValues){if(a.keepDirtyValues){const v=new Set([...h.mount,...Object.keys(de(o,l))]);for(const _ of Array.from(v))y(r.dirtyFields,_)?V(c,_,y(l,_)):P(_,y(c,_))}else{if(Re&&S(t))for(const v of h.mount){const _=y(i,v);if(_&&_._f){const N=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(be(N)){const C=N.closest("form");if(C){C.reset();break}}}}i={}}l=s.shouldUnregister?a.keepDefaultValues?B(o):{}:B(c),m.array.next({values:{...c}}),m.values.next({values:{...c}})}h={mount:a.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!p.isValid||!!a.keepIsValid||!!a.keepDirtyValues,u.watch=!!s.shouldUnregister,m.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:d?!1:a.keepDirty?r.isDirty:!!(a.keepDefaultValues&&!ee(t,o)),isSubmitted:a.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?{}:a.keepDirtyValues?a.keepDefaultValues&&l?de(o,l):r.dirtyFields:a.keepDefaultValues&&t?de(o,t):a.keepDirty?r.dirtyFields:{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitSuccessful:a.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Qe=(t,a)=>ze(z(t)?t(l):t,a);return{control:{register:Fe,unregister:Ae,getFieldState:qe,handleSubmit:Ke,setError:He,_executeSchema:te,_getWatch:w,_getDirty:x,_updateValid:q,_removeUnmounted:ve,_updateFieldArray:b,_updateDisabledField:$e,_getFieldArray:D,_reset:ze,_resetDefaultValues:()=>z(s.defaultValues)&&s.defaultValues().then(t=>{Qe(t,s.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:Sr,_subjects:m,_proxyFormState:p,_setErrors:Y,get _fields(){return i},get _formValues(){return l},get _state(){return u},set _state(t){u=t},get _defaultValues(){return o},get _names(){return h},set _names(t){h=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ce,register:Fe,handleSubmit:Ke,watch:kr,setValue:P,getValues:Ie,reset:Qe,resetField:Er,clearErrors:Fr,unregister:Ae,setError:He,setFocus:(t,a={})=>{const n=y(i,t),f=n&&n._f;if(f){const d=f.refs?f.refs[0]:f.ref;d.focus&&(d.focus(),a.shouldSelect&&z(d.select)&&d.select())}},getFieldState:qe}}function wr(e={}){const s=I.useRef(void 0),r=I.useRef(void 0),[i,o]=I.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...nt(e),formState:i});const l=s.current.control;return l._options=e,Qr({subject:l._subjects.state,next:u=>{zr(u,l._proxyFormState,l._updateFormState)&&o({...l._formState})}}),I.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),I.useEffect(()=>{if(l._proxyFormState.isDirty){const u=l._getDirty();u!==i.isDirty&&l._subjects.state.next({isDirty:u})}},[l,i.isDirty]),I.useEffect(()=>{e.values&&!ee(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,o(u=>({...u}))):l._resetDefaultValues()},[e.values,l]),I.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),I.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),I.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=Kr(i,l),s.current}const lr=(e,s,r)=>{if(e&&"reportValidity"in e){const i=y(r,s);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},Vr=(e,s)=>{for(const r in s.fields){const i=s.fields[r];i&&i.ref&&"reportValidity"in i.ref?lr(i.ref,r,e):i&&i.refs&&i.refs.forEach(o=>lr(o,r,e))}},lt=(e,s)=>{s.shouldUseNativeValidation&&Vr(e,s);const r={};for(const i in e){const o=y(s.fields,i),l=Object.assign(e[i]||{},{ref:o&&o.ref});if(ot(s.names||Object.keys(e),i)){const u=Object.assign({},y(r,i));V(u,"root",l),V(r,i,u)}else V(r,i,l)}return r},ot=(e,s)=>e.some(r=>r.match(`^${s}\\.\\d+`));function ut(e,s){for(var r={};e.length;){var i=e[0],o=i.code,l=i.message,u=i.path.join(".");if(!r[u])if("unionErrors"in i){var h=i.unionErrors[0].errors[0];r[u]={message:h.message,type:h.code}}else r[u]={message:l,type:o};if("unionErrors"in i&&i.unionErrors.forEach(function(p){return p.errors.forEach(function(m){return e.push(m)})}),s){var A=r[u].types,F=A&&A[i.code];r[u]=gr(u,s,r,o,F?[].concat(F,i.message):i.message)}e.shift()}return r}function Ar(e,s,r){return r===void 0&&(r={}),function(i,o,l){try{return Promise.resolve(function(u,h){try{var A=Promise.resolve(e[r.mode==="sync"?"parse":"parseAsync"](i,s)).then(function(F){return l.shouldUseNativeValidation&&Vr({},l),{errors:{},values:r.raw?Object.assign({},i):F}})}catch(F){return h(F)}return A&&A.then?A.then(void 0,h):A}(0,function(u){if(function(h){return Array.isArray(h==null?void 0:h.errors)}(u))return{values:{},errors:lt(ut(u.errors,!l.shouldUseNativeValidation&&l.criteriaMode==="all"),l)};throw u}))}catch(u){return Promise.reject(u)}}}const ct=({onClickRegister:e})=>{var F,p;const s=Lr(),r=cr({mutationKey:["login"],mutationFn:Mr,onSuccess(){s.invalidateQueries({queryKey:["user"]}),xe.auth.setModalActive(!1)},onError(){l()}}),{register:i,handleSubmit:o,reset:l,formState:{errors:u}}=wr({resolver:Ar(Tr)}),h=g.jsx(ur,{"aria-hidden":!0,width:24,height:24}),A=g.jsx(fr,{"aria-hidden":!0,width:24,height:24});return g.jsx(Le,{children:g.jsx(Te,{onClickClose:()=>xe.auth.setModalActive(!1),children:g.jsxs("form",{className:"auth-modal",onSubmit:o(({email:m,password:Z})=>{r.mutate({email:m,password:Z})}),children:[g.jsx(Oe,{className:"auth-modal__logo"}),g.jsxs("div",{className:"auth-modal__content",children:[g.jsxs("div",{className:"auth-modal__inputs",children:[g.jsx(se,{...i("email"),type:"email",placeholder:"Электронная почта",icon:h,error:(F=u.email)==null?void 0:F.message}),g.jsx(se,{...i("password"),type:"password",placeholder:"Пароль",icon:A,error:(p=u.password)==null?void 0:p.message})]}),r.error&&g.jsx("span",{className:"auth-modal__error",children:r.error.message}),g.jsx(Me,{submit:!0,loading:r.isPending,children:"Войти"}),g.jsx(or,{dark:!0,onClick:e,children:"Регистрация"})]})]})})})},dt=({onClickLogin:e,onSuccess:s})=>{var p,m,Z,re,R;const r=cr({mutationFn:Or,mutationKey:["register"],onSuccess(){s()},onError(){l()}}),{register:i,handleSubmit:o,reset:l,formState:{errors:u}}=wr({resolver:Ar(Ur)}),h=g.jsx(ur,{"aria-hidden":!0,width:24,height:24}),A=g.jsx(fr,{"aria-hidden":!0,width:24,height:24}),F=g.jsx(Rr,{"aria-hidden":!0,width:24,height:24});return g.jsx(Le,{children:g.jsx(Te,{onClickClose:()=>xe.auth.setModalActive(!1),children:g.jsxs("form",{className:"auth-modal",onSubmit:o(({email:M,password:q,name:W,surname:b})=>{r.mutate({email:M,password:q,name:W,surname:b})}),children:[g.jsx(Oe,{className:"auth-modal__logo"}),g.jsxs("div",{className:"auth-modal__content",children:[g.jsx(dr,{dark:!0,level:4,className:"auth-modal__heading",children:"Регистрация"}),g.jsxs("div",{className:"auth-modal__inputs",children:[g.jsx(se,{...i("email"),type:"email",placeholder:"Электронная почта",icon:h,error:(p=u.email)==null?void 0:p.message}),g.jsx(se,{...i("name"),type:"text",placeholder:"Имя",icon:F,error:(m=u.name)==null?void 0:m.message}),g.jsx(se,{...i("surname"),type:"text",placeholder:"Фамилия",icon:F,error:(Z=u.surname)==null?void 0:Z.message}),g.jsx(se,{...i("password"),type:"password",placeholder:"Пароль",icon:A,error:(re=u.password)==null?void 0:re.message}),g.jsx(se,{...i("passwordRepeat"),type:"password",placeholder:"Подтвердите пароль",icon:A,error:(R=u.passwordRepeat)==null?void 0:R.message})]}),r.error&&g.jsx("span",{className:"auth-modal__error",children:r.error.message}),g.jsx(Me,{submit:!0,loading:r.isPending,children:"Создать аккаунт"}),g.jsx(or,{dark:!0,onClick:e,children:"У меня есть пароль"})]})]})})})},ft=({onClickLogin:e})=>g.jsx(Le,{children:g.jsxs(Te,{className:"auth-modal",onClickClose:()=>xe.auth.setModalActive(!1),children:[g.jsx(Oe,{className:"auth-modal__logo"}),g.jsxs("div",{className:"auth-modal__content",children:[g.jsx(dr,{dark:!0,level:4,className:"auth-modal__heading",children:"Регистрация завершена"}),g.jsx("p",{className:"auth-modal__text",children:"Используйте вашу электронную почту для входа"}),g.jsx(Me,{onClick:e,children:"Войти"}),"\\"]})]})}),wt=()=>{const[e,s]=Ne.useState("login");switch(e){case"register":return g.jsx(dt,{onClickLogin:()=>s("login"),onSuccess:()=>s("finish-register")});case"finish-register":return g.jsx(ft,{onClickLogin:()=>s("login")});default:return g.jsx(ct,{onClickRegister:()=>s("register")})}};export{wt as default};
