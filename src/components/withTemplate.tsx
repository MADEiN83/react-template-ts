import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../core/redux/reducers/default/actions";

const mapStateToProps = (state: any) => ({
  todos: state.default.todos
});

export const mapDispatchToProps = (dispatch: Function) => ({
  addTodoDispatcher: (text: string) => dispatch(addTodo(text))
});

const withTemplate = (WrappedComponent: React.FC<any>) => {
  const newComponent = class extends Component {
    render = () => <WrappedComponent {...this.props} />;
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(newComponent);
};

export default withTemplate;
