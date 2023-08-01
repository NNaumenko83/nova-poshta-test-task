import { ReactNode } from "react";

interface IMainProps {
	children: ReactNode;
}

export const Main: React.FC<IMainProps> = ({ children }) => {
	return <main>{children}</main>;
};
