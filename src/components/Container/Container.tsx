import { ReactNode } from "react";

interface IContainerProps {
	children: ReactNode;
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
	return <div>{children}</div>;
};
