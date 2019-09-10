import { RouteComponentProps } from "react-router-dom";

export interface IDefaultState {
  todos: string;
}

export interface IReduxAction {
  type: string;
  payload: any;
}

export interface IDefaultProps extends RouteComponentProps {}
