import { API_KEY } from "../../constans/apiKey";
import axios from "axios";

export const getCityByRef = async (ref: string) => {
	const body = {
		apiKey: API_KEY,
		modelName: "Address",
		calledMethod: "getCities",
		methodProperties: { Ref: ref },
	};

	const response = await axios.post("", body);
	if (response.data.errors[0]) {
		throw new Error(response.data.errors[0]);
	}
	return response.data.data[0];
};
