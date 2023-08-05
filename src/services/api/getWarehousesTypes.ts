import { API_KEY } from "../../constans/constans";
import axios from "axios";

const body = {
	apiKey: API_KEY,
	modelName: "Address",
	calledMethod: "getWarehouseTypes",
	methodProperties: {},
};

export const getWarehousesTypes = async () => {
	console.log("getWarehousesTypes:");
	const response = await axios.post("", body);
	return response.data.data;
};
