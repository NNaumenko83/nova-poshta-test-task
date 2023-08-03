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
		// todoAdded(state, action: PayloadAction<string>) {
		// 	state.list.push({
		// 		id: new Date().toString(),
		// 		title: action.payload,
		// 		completed: false,
		// 	});
		// },
		// toggleComplete(state, action: PayloadAction<string>) {
		// 	const toggledTodo = state.list.find(todo => todo.id === action.payload);
		// 	if (toggledTodo) {
		// 		toggledTodo.completed = !toggledTodo.completed;
		// 	}
		// },
		// removeTodo(state, action: PayloadAction<string>) {
		// 	state.list = state.list.filter(todo => todo.id !== action.payload);
		// },
	},
	extraReducers: builder => {
		builder
			.addCase(getTrack.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getTrack.fulfilled, (state, action) => {
				console.log("action:", action.payload);
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

// export const { todoAdded, toggleComplete, removeTodo } = todoSlice.actions;

const persistConfig = {
	key: "tracks",
	storage,
};

// export const { setStatusFilter } = filtersSlice.actions;

const tracksReducer = trackSlice.reducer;

export const persistedTracksReducer = persistReducer(persistConfig, tracksReducer);

function isError(action: AnyAction) {
	return action.type.endsWith("rejected");
}
