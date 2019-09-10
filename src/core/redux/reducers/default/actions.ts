import { IReduxAction } from "../../../interface";

export const ADD = "ADD";

export const addTodo = (payload: string): IReduxAction => ({
  type: ADD,
  payload
});
