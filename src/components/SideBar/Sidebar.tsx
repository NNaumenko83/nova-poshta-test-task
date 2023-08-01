// Sidebar.tsx
import React from "react";

interface SidebarProps {
	trackingNumbers: string[];
}

export const Sidebar: React.FC<SidebarProps> = ({ trackingNumbers }) => {
	return (
		<aside>
			<h2>Історія</h2>
			<ul>
				{trackingNumbers.slice(0, 5).map((number, index) => (
					<li key={index}>{number}</li>
				))}
			</ul>
		</aside>
	);
};
