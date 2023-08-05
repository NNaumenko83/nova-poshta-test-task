import { Main } from "../../components/Main/Main";

export const СityWarehouses = () => {
	// useEffect(() => {
	// 	(async () => {
	// 		setIsLoading(true);
	// 		try {
	// 			const data = await getWarehousesTypes();
	// 			setWarehousesTypes(data);
	// 		} catch (error) {
	// 			setError(getErrorMessage(error));
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	})();
	// }, []);

	return (
		<Main>
			<h1>Warehouses in city</h1>
			{/* {isLoading && <h2>LOADING....</h2>}
			{error && <h2>{error}</h2>} */}
		</Main>
	);
};
