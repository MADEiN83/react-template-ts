import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../core/redux/reducers/default/actions";
import Header from "./Header";
import Footer from "./Footer";
import { IDefaultProps } from "../core/interface";

const mapStateToProps = (state: any) => ({
  todos: state.default.todos
});

export const mapDispatchToProps = (dispatch: Function) => ({
  addTodoDispatcher: (text: string) => dispatch(addTodo(text))
});

const withTemplate = (WrappedComponent: React.FC<IDefaultProps>) => {
  const newComponent = class extends Component<IDefaultProps, {}> {
    render = () => {
      return (
        <>
          <Header {...this.props} />
          <WrappedComponent {...this.props} />
          <Footer {...this.props} />
        </>
      );
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(newComponent);
};

export default withTemplate;
