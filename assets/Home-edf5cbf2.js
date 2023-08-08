import{R as c,b as f,c as g,d as b,s as n,j as t,g as p,G as j,e as k,r as v}from"./main-981c0a97.js";import{M as w}from"./Main-1e21eefd.js";import{F as S,B as y}from"./Input-ebd8356d.js";function u(e=c){const o=e===c?f:g(e);return function(){const{store:s}=o();return s}}const C=u();function $(e=c){const o=e===c?C:u(e);return function(){return o().dispatch}}const B=$(),d=()=>B(),l=b,T=n.li`
	width: calc(100% - 50px);
	padding: 5px;
	text-align: center;

	border: 1px solid ${e=>e.theme.colors.borderNonActive};
	border-radius: 8px;
	cursor: pointer;
	background-color: ${e=>e.theme.colors.fourthBacgroundCOlor};

	font-size: ${e=>e.theme.fontSizes.xsmall};
	transition: transform 150ms linear;

	&:hover {
		border-color: ${e=>e.theme.colors.secondBackGround};
		transform: scale(1.05);
	}
`,z=({number:e,changeTrackNumberHandler:o})=>{const r=d(),s=()=>{o(e),r(p(e))};return t.jsx(T,{onClick:s,children:e})},H=n.ul`
	display: flex;
	gap: 5px;
	padding: 20px;
	flex-direction: column;
	align-items: center;
	max-height: calc(100vh - 350px);
	width: 100%;
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
`,I=e=>{const o=l(r=>r.tracks.list);return t.jsx(H,{children:o.map(r=>t.jsx(z,{number:r.number,...e},r.number))})},R=n.aside`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;

	padding: 10px;

	border: 2px solid ${e=>e.theme.colors.borderComponents};
	border-radius: 20px;

	@media screen and (min-width: 768px) {
		grid-area: 2 / 2/ 3 /3;
	}
`,L=n.div`
	position: relative;
	display: flex;
	gap: 10px;
	justify-content: center;

	width: 100%;
`,G=n.button`
	position: absolute;
	right: 30px;

	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: ${e=>e.theme.colors.mainBackGround};
	transition: color 200ms linear;

	&:hover,
	&:focus {
		color: ${e=>e.theme.colors.secondBackGround};
	}
`;function D(e){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 8.001h-4V4.999a2.92 2.92 0 0 0-.874-2.108 2.943 2.943 0 0 0-2.39-.879C10.202 2.144 9 3.508 9 5.117V8H5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9.999c0-1.103-.897-2-2-2zM5 10h6V5.117c0-.57.407-1.07 1.002-1.117.266 0 .512.103.712.307a.956.956 0 0 1 .286.692V10h.995l.005.001h5V12H5v-2zm0 10v-6h14l.002 6H5z"}}]})(e)}const F=e=>{const o=d(),r=()=>{o(k())};return t.jsxs(R,{children:[t.jsxs(L,{children:[t.jsx("h2",{children:"Історія"}),t.jsx(G,{type:"button",onClick:r,children:t.jsx(D,{size:20})})]}),t.jsx(I,{...e})]})},V=n.div`
	display: flex;
	align-items: center;
	justify-content: center;

	border: 2px solid ${e=>e.theme.colors.borderComponents};
	border-radius: 20px;

	@media screen and (min-width: 768px) {
		grid-area: 1 / 1 / 2 / 3;
	}
`,A=n.form`
	display: flex;
	gap: 10px;
	justify-content: conter;
	align-items: center;
`,M=({trackNumber:e,changeTrackNumberHandler:o})=>{const r=d(),s=l(i=>i.tracks.loading),h=i=>{const m=i.target.value.trim().replace(/[^\d]/g,"").slice(0,14);o(m)},x=i=>{i.preventDefault(),r(p(e))};return t.jsx(V,{children:t.jsxs(A,{onSubmit:x,children:[t.jsx(S,{value:e,onChange:h,placeholder:"Введіть номер ТТН"}),t.jsx(y,{type:"submit",loading:s,disabled:e.length!==14||s,children:"Пошук"})]})})},W=n.div`
	padding: 10px;
	border: 2px solid ${e=>e.theme.colors.borderComponents};
	border-radius: 20px;
	font-size: ${e=>e.theme.fontSizes.xsmall};
	@media screen and (min-width: 768px) {
		grid-area: 2 / 1 / 3 / 2;
		font-size: ${e=>e.theme.fontSizes.small};
	}
`,E=n.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`,a=n.h3`
	font-weight: ${e=>e.theme.fontWeights.bold};
`,N=({trackNumber:e})=>{const r=l(s=>s.tracks.list).find(s=>s.number===e);return t.jsx(W,{children:r&&t.jsxs(E,{children:[t.jsxs("div",{children:[t.jsx(a,{children:"Статус доставки:"}),t.jsx("span",{children:r.status})]}),r.warehouseSender&&t.jsxs("div",{children:[t.jsx(a,{children:"Адреса відправки:"}),t.jsx("span",{children:r.warehouseSender})]}),r.warehouseRecipient&&t.jsxs("div",{children:[t.jsx(a,{children:"Адреса доставки:"}),t.jsx("span",{children:r.warehouseRecipient})]})]})})},O=n.div`
	/* border: 1px solid red; */
	min-height: 100%;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 80px 2fr 4fr;
	grid-gap: 5px;

	@media screen and (min-width: 768px) {
		grid-template-columns: 3fr 2fr;
		grid-template-rows: 80px 1fr;
	}
`,P=()=>{const[e,o]=v.useState(""),r=s=>{o(s)};return t.jsx(w,{children:t.jsxs(O,{children:[t.jsx(M,{trackNumber:e,changeTrackNumberHandler:r}),t.jsx(N,{trackNumber:e}),t.jsx(F,{changeTrackNumberHandler:r})]})})};export{P as default};
