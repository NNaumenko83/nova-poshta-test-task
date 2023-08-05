import { API_KEY } from "../../constans/constans";
import axios from "axios";

export const getWarehousesInCity = async (type: string | null, city: string | undefined) => {
	const body = {
		apiKey: API_KEY,
		modelName: "Address",
		calledMethod: "getWarehouses",
		methodProperties: {
			CityName: "",
			CityRef: city,
			FindByString: "",
			Page: "1",
			Limit: "50",
			Language: "UA",
			TypeOfWarehouseRef: `${type === "all" ? "" : type}`,
		},
	};

	const response = await axios.post("", body);
	if (response.data.errors[0]) {
		throw new Error(response.data.errors[0]);
	}
	return response.data.data;
};
