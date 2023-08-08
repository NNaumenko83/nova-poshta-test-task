import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { Track } from "../Types/Track";
import { getTrack } from "./operations";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

type TracksState = {
	list: Track[];
	loading: boolean;
	error: null | string;
};

const initialState: TracksState = {
	list: [],
	loading: false,
	error: null,
};

const trackSlice = createSlice({
	name: "tracks",
	initialState,
	reducers: {
		deleteTracks(state) {
			state.list = [];
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getTrack.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getTrack.fulfilled, (state, action) => {
				const trackIndex = state.list.findIndex(item => {
					return item.number === action.payload.number;
				});
				if (trackIndex !== -1) {
					state.list[trackIndex] = action.payload;
				} else {
					state.list.unshift(action.payload);
				}
				state.loading = false;
			})
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const { deleteTracks } = trackSlice.actions;

const persistConfig = {
	key: "tracks",
	storage,
};

const tracksReducer = trackSlice.reducer;

export const persistedTracksReducer = persistReducer(persistConfig, tracksReducer);

function isError(action: AnyAction) {
	return action.type.endsWith("rejected");
}
