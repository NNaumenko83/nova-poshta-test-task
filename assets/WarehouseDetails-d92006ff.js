import{a as u,A as j,s as i,r as d,u as w,j as e,M as y}from"./main-981c0a97.js";import{M as W}from"./Main-1e21eefd.js";import{g as b}from"./getErrorMessage-20be7751.js";const v=async r=>{const l={apiKey:j,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{Ref:r}},s=await u.post("",l);if(s.data.errors[0])throw new Error(s.data.errors[0]);return s.data.data},T={Monday:"Понеділок",Tuesday:"Вівторок",Wednesday:"Середа",Thursday:"Четвер",Friday:"П'ятниця",Saturday:"Субота",Sunday:"Неділя"},I={Width:"ширина",Height:"висота",Length:"довжина"},S=i.div`
	height: 100%;
	padding: 15px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 220px repeat(8, 1fr);

	font-size: ${r=>r.theme.fontSizes.xssmall};

	@media screen and (min-width: 600px) {
		font-size: ${r=>r.theme.fontSizes.xsmall};
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 250px repeat(3, 1fr);
	}
`,M=i.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	grid-area: 1 / 1 / 2 / 3;
	@media screen and (min-width: 600px) {
		grid-area: 1 / 1 / 2 / 8;
	}
`,o=i.h2`
	font-weight: ${r=>r.theme.fontWeights.bold};
`,E=i.div`
	grid-area: 2 / 1 / 10 / 3;

	display: grid;

	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(8, 1fr);
	grid-column-gap: 2px;
	grid-row-gap: 2px;

	@media screen and (min-width: 600px) {
		grid-area: 2 / 1 / 5 / 8;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: repeat(3, 40px);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`,L=i.div`
	grid-area: 1 / 1 / 2 / 3;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid ${r=>r.theme.colors.borderComponents};
	font-weight: ${r=>r.theme.fontWeights.bold};
	@media screen and (min-width: 600px) {
		grid-area: 1 / 1 / 2 / 8;
	}
`,O=i.div`
	grid-area: 2 / 1 / 9 / 2;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media screen and (min-width: 600px) {
		grid-area: 2 / 1 / 3 / 8;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`,A=i.div`
	grid-area: 2 / 2 / 9 / 3;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media screen and (min-width: 600px) {
		grid-area: 3 / 1 / 4 / 8;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`,h=i.div`
	padding: 5px;

	display: flex;
	align-items: center;
	justify-content: center;
`,C=i.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`,P=()=>{const[r,l]=d.useState(""),[s,c]=d.useState(!1),[a,x]=d.useState([]),{ref:g}=w();d.useEffect(()=>{(async()=>{if(c(!0),g)try{const t=await v(g);x(t)}catch(t){l(b(t))}finally{c(!1)}})()},[]);const m=n=>e.jsx("ul",{children:Object.entries(n).map(([t,p])=>e.jsxs("li",{children:[I[t],": ",p]},t))}),f=n=>e.jsxs(e.Fragment,{children:[e.jsx(O,{children:Object.entries(n).map(([t])=>e.jsx(h,{children:T[t]},t))}),e.jsx(A,{children:Object.entries(n).map(([t,p])=>e.jsx(h,{children:p},t))})]});return e.jsxs(W,{children:[!s&&!r&&a.length>0&&e.jsx(S,{children:e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsx("div",{children:e.jsx(o,{children:a[0].Description})}),e.jsxs("div",{children:[e.jsx(o,{children:"Обмеження за габаритами на відправку (см):"}),m(a[0].SendingLimitationsOnDimensions)]}),e.jsxs("div",{children:[e.jsx(o,{children:"Обмеження за габаритами на отримання (см):"}),m(a[0].ReceivingLimitationsOnDimensions)]}),e.jsxs("div",{children:[e.jsx(o,{children:"Обмеження ваги:"}),e.jsxs("p",{children:[e.jsx("span",{children:"до "}),a[0].TotalMaxWeightAllowed!=="0"?a[0].TotalMaxWeightAllowed:a[0].PlaceMaxWeightAllowed,e.jsx("span",{children:" кг"})]})]})]}),e.jsxs(E,{children:[e.jsx(L,{children:"Графік роботи"}),f(a[0].Schedule)]})]})}),s&&e.jsx(C,{children:e.jsx(y,{height:100,width:100,color:"#df012e",secondaryColor:"#df012e",radius:12.5,ariaLabel:"mutating-dots-loading",visible:!0})})]})};export{P as default};
