import{b as w,A as v,s as d,j as r,L as k,r as i,M as j,Q as S}from"./index-d26a3a86.js";import{c as A}from"./index.module-adf7f7fa.js";import{F as $,B as L}from"./Input-dcb8fffb.js";import{M as P}from"./Main-6ec37c79.js";import{g as x}from"./getErrorMessage-20be7751.js";const f=async(e,s)=>{const n={apiKey:v,modelName:"Address",calledMethod:"searchSettlements",methodProperties:{CityName:e,Limit:"50",Page:s}},o=await w.post("",n);if(o.data.errors[0])throw new Error(o.data.errors[0]);return o.data.data[0]},B=d.div`
	height: calc(100vh - 265px);

	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5px;
	padding: 5px 10px;

	border: 2px solid ${e=>e.theme.colors.borderComponents};
	border-radius: 20px;
`,M=d.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	height: 100%;
	width: 100%;
	padding: 0 10px;

	font-size: ${e=>e.theme.fontSizes.xssmall};
	overflow: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${e=>e.theme.colors.secondBackGround};
		border-radius: 8px;
	}

	&::-webkit-scrollbar-track {
		background-color: ${e=>e.theme.colors.footerLinkSecondColor};
		border-radius: 8px;
	}

	@media screen and (min-width: 768px) {
		font-size: ${e=>e.theme.fontSizes.small};
	}
`,E=d.div`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;

	border: 2px solid ${e=>e.theme.colors.borderComponents};
	border-radius: 20px;

	@media screen and (min-width: 768px) {
	}
`,N=d.div`
	border: 1px solid ${e=>e.theme.colors.secondBackGround};
	border-radius: 5px;
	background-color: ${e=>e.theme.colors.fourthBacgroundCOlor};
	transition: transform 150ms linear;
	border: 1px solid ${e=>e.theme.colors.borderNonActive};

	&:hover {
		border-color: ${e=>e.theme.colors.secondBackGround};
		transform: scale(1.01);
	}
`,T=d(k)`
	display: block;
	padding: 5px;
	width: 100%;
	height: 100%;
`,W=({cities:e})=>e.Addresses.map(s=>r.jsx(N,{children:r.jsx(T,{to:`/warehouses/${s.DeliveryCity}`,children:s.Present})},s.Present)),F=()=>{const[e,s]=i.useState(""),[n,o]=i.useState(""),[l,c]=i.useState(!1),[m,u]=i.useState({Addresses:[],TotalCount:0}),[p,g]=i.useState(1),[b,h]=i.useState(1),y=A(async t=>{if(!t){h(1),u({Addresses:[],TotalCount:0});return}h(1),u({Addresses:[],TotalCount:0}),c(!0);try{const a=await f(t,p.toString());h(Math.floor(a.TotalCount/50)),u(a)}catch(a){o(x(a))}finally{c(!1)}},1e3),C=t=>{if(o(""),g(1),t.target.value.trim()!==""&&!/^[а-яА-ЯіІїЇєЄ'"\s-]+$/.test(t.target.value)){S.error("Введіть будь ласка назву населеного пункту українською мовою",{position:"top-left",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s(e);return}s(t.target.value),y(t.target.value)};return i.useEffect(()=>{e&&(async()=>{c(!0);try{const t=await f(e,p.toString());h(Math.ceil(t.TotalCount/50)),u(a=>({...a,Addresses:[...a.Addresses,...t.Addresses]}))}catch(t){o(x(t))}finally{c(!1)}})()},[p]),r.jsxs(P,{children:[r.jsx(E,{children:r.jsx($,{value:e,onChange:C,placeholder:"Введіть місто"})}),r.jsxs(B,{children:[n&&r.jsx("h2",{children:n}),l&&m.Addresses.length===0&&r.jsx(j,{height:"100",width:"100",color:"#df012e",secondaryColor:"#df012e",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),m.Addresses.length>0&&!n&&r.jsxs(M,{children:[r.jsx(W,{cities:m}),b>p&&r.jsx(L,{type:"button",onClick:()=>{g(t=>t+1)},loading:l,disabled:l,children:!l&&"Більше..."})]})]})]})};export{F as default};
