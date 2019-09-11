import { IReduxAction, IDefaultState } from "../../../interface";
import { UPDATE_SCREEN_SIZE } from "./actions";
import { getScreenBreakpoints } from "../../../../utils";

const initialState: IDefaultState = {
  screen: getScreenBreakpoints()
};

const defaultReducer = (
  state: IDefaultState = initialState,
  action: IReduxAction
) => {
  switch (action.type) {
    case UPDATE_SCREEN_SIZE:
      return Object.assign({}, state, {
        screen: action.payload
      });
    default:
      return state;
  }
};

export default defaultReducer;
