import { RouteComponentProps } from "react-router-dom";

export interface IDefaultState {
  screen: { width: number; height: number; breakpoint: string };
}

export interface IReduxAction {
  type: string;
  payload: any;
}

export interface IDefaultProps extends RouteComponentProps {
  screen: { width: number; height: number; breakpoint: string };
}
