import { API_KEY } from "../../constans/apiKey";
import axios from "axios";

export const getCitiesByName = async (city: string, page: string) => {
	const body = {
		apiKey: API_KEY,
		modelName: "Address",
		calledMethod: "searchSettlements",
		methodProperties: {
			CityName: city,
			Limit: "50",
			Page: page,
		},
	};

	const response = await axios.post("", body);
	if (response.data.errors[0]) {
		throw new Error(response.data.errors[0]);
	}
	return response.data.data[0];
};
