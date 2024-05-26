import {
  combineReducers,
  createAction,
  createReducer,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Login, PrintMessage } from "../Common/model";
import { AppDispatch } from "./store";

// Actions
export const DisplayMessage = createAction<PrintMessage>("DisplayMessage");
export const setIsLoading = createAction<boolean>("SetIsLoading");
export const setUserName = createAction<string>("setUserName");
export const setPassword = createAction<string>("setPassword");

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

const loginReducer = createReducer(new Login(), (builder) => {
  builder
    .addCase(setUserName, (state, action) => {
      return { ...state, userName: action.payload };
    })
    .addCase(setPassword, (state, action) => {
      return { ...state, password: action.payload };
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const userNameErrorReducer = createReducer("", (builder) => {
  builder
    .addCase(setUserName, (state, action) => {
      return action.payload?.trim().length === 0 || action.payload?.trim() === null
        ? "User name is required"
        : "";
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const passwordErrorReducer = createReducer("", (builder) => {
  builder
    .addCase(setPassword, (state, action) => {
      if (action.payload?.trim().length === 0 || action.payload?.trim() === null) {
        return "Password is required.";
      } else if (action.payload?.trim().length > 0 && action.payload?.trim().length < 8) {
        return "Password length must be 8 characters.";
      }

      return "";
    })
    .addDefaultCase((state) => {
      return state;
    });
});

// Dispatchers

export const dispatchSetIsLoading =
  (isload: boolean) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(isload));
  };

export const dispatchSetUserName =
  (value: string) => async (dispatch: AppDispatch) => {
    dispatch(setUserName(value));
  };

export const dispatchSetPassword =
  (value: string) => async (dispatch: AppDispatch) => {
    dispatch(setPassword(value));
  };

export const workJobReducer = combineReducers({
  message: messageReducer,
  isLoading: isLoadingReducer,
  login: loginReducer,
  userNameError:userNameErrorReducer,
  passwordError:passwordErrorReducer
});

export type workJobState = ReturnType<typeof workJobReducer>;
export default workJobReducer;
