import {
  combineReducers,
  createAction,
  createReducer,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { PrintMessage } from "../Common/model";
import { AppDispatch } from "./store";

// Actions
export const DisplayMessage = createAction<PrintMessage>("DisplayMessage");
export const setIsLoading = createAction<boolean>("SetIsLoading");

// Reducers
const messageReducer = createReducer(new PrintMessage(), (builder) => {
  builder.addCase(DisplayMessage, (state, action) => {
    state.message = action.payload.message;
  });
});

const isLoadingReducer = createReducer(true, (builder) => {
  builder
    .addCase(setIsLoading, (state, action) => {
      // Update the state directly
      return action.payload;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

// Dispatchers

export const dispatchSetIsLoading = (isload:boolean) => async (dispatch: AppDispatch) => { 
  dispatch(setIsLoading(isload));
};

export const workJobReducer = combineReducers({
  message: messageReducer,
  isLoading: isLoadingReducer,
});

export type workJobState = ReturnType<typeof workJobReducer>;
export default workJobReducer;
