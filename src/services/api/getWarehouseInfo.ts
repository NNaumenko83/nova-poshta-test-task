import { API_KEY } from "../../constans/constans";
import axios from "axios";

export const getWarehouseInfo = async (ref: string) => {
	const body = {
		apiKey: API_KEY,
		modelName: "Address",
		calledMethod: "getWarehouses",
		methodProperties: {
			Ref: ref,
		},
	};

	const response = await axios.post("", body);
	if (response.data.errors[0]) {
		throw new Error(response.data.errors[0]);
	}
	return response.data.data[0];
};
