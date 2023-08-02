import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		mainBackGround: "#ffffff",
		secondBackGround: "#df012e",
		thirdBacgroundCOlor: "#df6513",
		darkText: "#000000",
		brightTxt: "#ffffff",
	},

	fontSizes: {
		xsmall: "0.8rem",
		small: "1.0rem",
		medium: "1.5rem",
		large: "3rem",
		xlarge: "4.5",
	},
	fontWeights: {
		light: 100,
		normal: 300,
		bold: 500,
	},
};

interface IPropsTheme {
	children: ReactNode;
}

export default function Theme({ children }: IPropsTheme) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
