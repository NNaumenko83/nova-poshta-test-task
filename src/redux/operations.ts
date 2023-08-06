import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Track } from "../Types/Track";
import { API_KEY } from "../constans/constans";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";

export const getTrack = createAsyncThunk<Track, string, { rejectValue: string }>(
	"tracks/getTrack",
	async (ttnNumber, { rejectWithValue }) => {
		const body = {
			apiKey: API_KEY,
			modelName: "TrackingDocument",
			calledMethod: "getStatusDocuments",
			methodProperties: {
				Documents: [
					{
						DocumentNumber: ttnNumber,
					},
				],
			},
		};

		try {
			const response = await axios.post("", body);
			console.log("response:", response);
			console.log("response.data.errors:", response.data.errors);
			if (response.data.errors.length > 0) {
				return rejectWithValue(response.data.errors[0]);
			}
			const {
				Number: number,
				Status: status,
				WarehouseRecipient: warehouseRecipient,
				WarehouseSender: warehouseSender,
			} = response.data.data[0];
			return { number, status, warehouseRecipient, warehouseSender };
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			} else {
				return rejectWithValue("Something went wrong");
			}
		}
	},
);
