import { ReactNode } from "react";

interface SidebarProps {
	children: ReactNode;
}

export const Container: React.FC<SidebarProps> = ({ children }) => {
	return <div>{children}</div>;
};
