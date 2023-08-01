export const SharedLayout = () => {
	return (
		<div>
			<Header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/products">Products</Link>
				</nav>
			</Header>
			<Outlet />
		</div>
	);
};
