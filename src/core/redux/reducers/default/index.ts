import { IReduxAction, IDefaultState } from "../../../interface";
import { ADD } from "./actions";

const initialState: IDefaultState = {
  todos: ""
};

const defaultReducer = (
  state: IDefaultState = initialState,
  action: IReduxAction
) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        todos: action.payload
      });
    default:
      return state;
  }
};

export default defaultReducer;
