import React, { ChangeEventHandler } from "react";
import Input from "@mui/joy/Input";
import { useTheme } from "styled-components";

interface FocusOutlineInputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	name?: string;
	value?: string;
}

const FocusOutlineInput: React.FC<FocusOutlineInputProps> = ({ onChange, placeholder, name, value }) => {
	const theme = useTheme();
	return (
		<Input
			placeholder={placeholder}
			onChange={onChange}
			name={name}
			value={value}
			size="sm"
			sx={{
				width: "180px",
				height: "50px",
				"&::before": {
					border: `1.5px  solid ${theme.colors.secondBackGround}`,
					transform: "scaleX(0)",
					left: "2.5px",
					right: "2.5px",
					bottom: 0,
					top: "unset",
					transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
					borderRadius: 0,
					borderBottomLeftRadius: "64px 20px",
					borderBottomRightRadius: "64px 20px",
				},
				"&:focus-within::before": {
					transform: "scaleX(1)",
				},
			}}
		/>
	);
};

export default FocusOutlineInput;
