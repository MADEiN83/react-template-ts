import { RouteComponentProps } from "react-router-dom";

export interface IDefaultState {
  screen: { breakpoint: string };
}

export interface IReduxAction {
  type: string;
  payload: any;
}

export interface IDefaultProps extends RouteComponentProps {
  screen: { breakpoint: string };
}
