import { API_KEY } from "../../constans/apiKey";
import axios from "axios";

export const getWarehousesInCity = async (type: string | null, city: string | undefined, page: string, id: string) => {
	const body = {
		apiKey: API_KEY,
		modelName: "Address",
		calledMethod: "getWarehouses",
		methodProperties: {
			CityName: "",
			CityRef: city,
			FindByString: "",
			Page: page,
			Limit: "50",
			Language: "UA",
			TypeOfWarehouseRef: `${type === "all" ? "" : type}`,
			WarehouseId: `${id === "all" ? "" : id}`,
		},
	};

	const response = await axios.post("", body);

	if (response.data.errors[0]) {
		throw new Error(response.data.errors[0]);
	}
	return response.data;
};
