import { ILoginResponse } from "../../_types/auth";
import * as types from "../../action_types/auth";

export type IInitialState = {
  user?: ILoginResponse;
  loading: boolean;
  errors?: string[];
};

export const initialState: IInitialState = {
  loading: false,
};

export interface Action {
  type: string;
  payload?: ILoginResponse | string[];
}

export const authReducer = (
  state: IInitialState,
  action: Action
): IInitialState => {
  if (!action.payload) {
    switch (action.type) {
      case types.START_LOADING:
        return {
          ...state,
          loading: true,
          errors: undefined,
        };

      case types.END_LOADING:
        return {
          ...state,
          loading: false,
          errors: undefined,
        };

      default:
        break;
    }
  } else if ("id" in action.payload) {
    switch (action.type) {
      case types.UPDATE_USER:
        return {
          ...state,
          user: action.payload,
          loading: false,
          errors: undefined,
        };

      default:
        break;
    }
  } else {
    switch (action.type) {
      case types.SET_ERRORS:
        return {
          ...state,
          loading: false,
          errors: action.payload,
        };

      default:
        break;
    }
  }
  return state;
};
