import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { SuspenseWrapper } from "./SharedLayout.styled";

export const SharedLayout = () => {
	return (
		<>
			<Header />
			<Suspense
				fallback={
					<SuspenseWrapper>
						<MutatingDots
							height={100}
							width={100}
							color="#df012e"
							secondaryColor="#df012e"
							radius={12.5}
							ariaLabel="mutating-dots-loading"
							visible={true}
						/>
					</SuspenseWrapper>
				}
			>
				<Outlet />
			</Suspense>
			<Footer />
		</>
	);
};
