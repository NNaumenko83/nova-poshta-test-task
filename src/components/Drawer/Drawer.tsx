import * as React from "react";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import { NavigateMenu } from "../NavigateMenu/NavigateMenu";
import { MobileNavigationWrapper } from "./Drawe.styled";

const drawerWidth = 320;

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<MobileNavigationWrapper>
			<NavigateMenu />
		</MobileNavigationWrapper>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				sx={{ mr: 2, display: { sm: "none" } }}
			>
				<MenuIcon />
			</IconButton>

			<Box
				component="nav"
				onClick={handleDrawerToggle}
				sx={{ width: { sm: 0 }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						border: "1px solid red",
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
