import { API_KEY } from "../../constans/apiKey";
import axios from "axios";

const body = {
	apiKey: API_KEY,
	modelName: "Address",
	calledMethod: "getWarehouseTypes",
	methodProperties: {},
};

export const getWarehousesTypes = async () => {
	const response = await axios.post("", body);
	return response.data.data;
};
