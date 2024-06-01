import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";
import { Login, UserRegistration } from "../Common/model";
import { AppDispatch } from "./store";
import { Map } from "immutable";


// Actions
export const setIsLoading = createAction<boolean>("setIsLoading");
export const setLogin = createAction<Login>("setLogin");
export const setUserRegistration = createAction<UserRegistration>(
  "setUserRegistration"
);
export const setLoginValidations = createAction<Map<string,string>>("setLoginValidations");

// Reducers
const isLoadingReducer = createReducer(true, (builder) => {
  builder
    .addCase(setIsLoading, (state, action) => {
      return action.payload;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const loginReducer = createReducer(new Login(), (builder) => {
  builder
    .addCase(setLogin, (state, action) => {
      return action.payload;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const loginValidationsReducer = createReducer(Map({UserName:"",Password:""}), (builder) => {
  builder
    .addCase(setLoginValidations, (state, action) => {
      return action.payload;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const userRegistrationReducer = createReducer(
  new UserRegistration(),
  (builder) => {
    builder
      .addCase(setUserRegistration, (state, action) => {
        return action.payload;
      })
      .addDefaultCase((state) => {
        return state;
      });
  }
);

// Dispatchers

export const dispatchSetIsLoading =
  (isload: boolean) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(isload));
  };

export const dispatchSetUserRegistration =
  (value: UserRegistration) => async (dispatch: AppDispatch) => {
    dispatch(setUserRegistration(value));
  };

export const dispatchSetLogin =
  (value: Login) => async (dispatch: AppDispatch) => {
    dispatch(setLogin(value));
  };

  export const dispatchSetLoginValidations =
  (value: Map<string,string>) => async (dispatch: AppDispatch) => {
    dispatch(setLoginValidations(value));
  };

export const workJobReducer = combineReducers({
  isLoading: isLoadingReducer,
  login: loginReducer,
  userRegistration: userRegistrationReducer,
  loginValidations:loginValidationsReducer
});

export type workJobState = ReturnType<typeof workJobReducer>;
export default workJobReducer;
