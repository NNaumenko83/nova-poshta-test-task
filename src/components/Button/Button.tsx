import React, { MouseEvent, ReactNode } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/joy/Button";
import { useTheme } from "styled-components";

interface ButtonStyledProps {
	loading?: boolean;
	type?: "button" | "submit" | "reset";
	children: ReactNode;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	// Ви можете додати сюди інші властивості, або використовувати `...otherProps` для додаткових властивостей
}

export const ButtonStyled: React.FC<ButtonStyledProps> = ({
	loading = false,
	type = "button",
	children,
	onClick,
	...otherProps
}) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (!loading && onClick) {
			onClick(event);
		}
	};

	const theme = useTheme();
	console.log("theme:", theme.colors);

	return (
		<Button
			type={type}
			loading={loading}
			loadingPosition="end"
			endDecorator={loading ? <SendIcon /> : null}
			variant="solid"
			onClick={handleClick}
			sx={{
				bgcolor: `${theme.colors.secondBackGround}`,
				color: `${theme.colors.brightTxt}`,

				width: "100px",
				height: "40px",
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
