import { IReduxAction } from "../../../interface";

export const UPDATE_SCREEN_SIZE = "UPDATE_SCREEN_SIZE";

export const updateScreenSize = (payload: string): IReduxAction => ({
  type: UPDATE_SCREEN_SIZE,
  payload
});
