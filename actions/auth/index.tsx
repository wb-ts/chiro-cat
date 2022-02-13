import { Dispatch } from "../../providers/auth";
import * as types from "../../action_types/auth";
import { loginService } from "../../services/auth";
import { ILoginData } from "../../_types/auth";

export async function loginAction(
  dispatch: Dispatch,
  data: ILoginData
): Promise<boolean> {
  dispatch({ type: types.START_LOADING });

  // check if value if empty
  const errors: string[] = [];
  if (!data.email || data.email === "") {
    errors.push("You must enter email.");
  } else if (!data.password || data.password === "") {
    errors.push("You must enter password.");
  } else {
    if (errors.length > 0) {
      dispatch({ type: types.SET_ERRORS, payload: errors });
    } else {
      const result = await loginService(data);
      if ("errors" in result) {
        dispatch({ type: types.SET_ERRORS, payload: result.errors });
      } else {
        dispatch({ type: types.UPDATE_USER, payload: result });
        return true;
      }
    }
  }
  return false;
}
