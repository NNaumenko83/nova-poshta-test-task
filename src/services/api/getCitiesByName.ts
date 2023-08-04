import { API_KEY } from "../../constans/constans";
import axios from "axios";

export const getCitiesByName = async (city: string) => {
	const body = {
		apiKey: API_KEY,
		modelName: "Address",
		calledMethod: "searchSettlements",
		methodProperties: {
			CityName: city,
			Limit: "50",
			Page: "1",
		},
	};
	console.log("before getCitiesbyName");
	const response = await axios.post("", body);
	console.log("response:", response);
	console.log("after getCitiesbyName");
	return response.data.data[0];
};
