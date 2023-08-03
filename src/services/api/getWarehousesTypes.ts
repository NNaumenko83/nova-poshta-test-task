import { API_KEY } from "../../constans/constans";
import axios from "axios";

const body = {
	apiKey: API_KEY,
	modelName: "Address",
	calledMethod: "getWarehouseTypes",
	methodProperties: {},
};

const getWarehousesTypes = async () => {
	const response = await axios.post("", body);
	console.log("response:", response);
	return response.data.data;
};

export default getWarehousesTypes;
