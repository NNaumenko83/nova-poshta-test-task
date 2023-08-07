import React, { MouseEvent, ReactNode } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/joy/Button";
import { useTheme } from "styled-components";

interface ButtonStyledProps {
	loading?: boolean;
	type?: "button" | "submit" | "reset";
	children: ReactNode;
	disabled: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	// Ви можете додати сюди інші властивості, або використовувати `...otherProps` для додаткових властивостей
}

export const ButtonStyled: React.FC<ButtonStyledProps> = ({
	loading = false,
	type = "button",
	children,
	disabled,
	onClick,
	...otherProps
}) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (!loading && onClick) {
			onClick(event);
		}
	};

	const theme = useTheme();

	return (
		<Button
			type={type}
			loading={loading}
			loadingPosition="center"
			variant="solid"
			onClick={handleClick}
			disabled={disabled}
			sx={{
				bgcolor: `${theme.colors.secondBackGround}`,
				color: `${theme.colors.brightTxt}`,
				padding: "5px",
				margin: " 0 auto",

				width: "70px",
				height: "50px",
				fontSize: "15px",
				transition: "all 250ms linear",
				":hover": {
					bgcolor: `${theme.colors.thirdBacgroundCOlor}`,
					color: `${theme.colors.brightTxt}`,
				},
			}}
			{...otherProps}
		>
			{children}
		</Button>
	);
};
