import React, { Component } from "react";
import { connect } from "react-redux";

import { updateScreenSize } from "../../core/redux/reducers/default/actions";
import Header from "../Header";
import Footer from "../Footer";
import { IDefaultProps } from "../../core/interface";

import { getScreenBreakpoints } from "../../utils";

import "./style.scss";

const mapStateToProps = (state: any) => ({
  screen: state.default.screen
});

export const mapDispatchToProps = (dispatch: Function) => ({
  updateScreenSizeDispatcher: (text: string) => dispatch(updateScreenSize(text))
});

interface ILayoutProps extends IDefaultProps {
  updateScreenSizeDispatcher: Function;
}

interface ILayoutOptions {}

const withTemplate = (
  WrappedComponent: React.FC<ILayoutProps>,
  options: ILayoutOptions = {}
) => {
  const newComponent = class extends Component<ILayoutProps, {}> {
    componentDidMount = () => {
      this.handleOnSizeChange();
      window.addEventListener("resize", this.handleOnSizeChange);
    };

    componentWillUnmount = () => {
      window.addEventListener("resize", this.handleOnSizeChange);
    };

    handleOnSizeChange = () => {
      const { updateScreenSizeDispatcher, screen } = this.props;
      const newScreenValues = getScreenBreakpoints();

      if (newScreenValues.breakpoint === screen.breakpoint) return;

      updateScreenSizeDispatcher(newScreenValues);
    };

    render = () => {
      return (
        <>
          <Header {...this.props} />
          <main>
            <WrappedComponent {...this.props} />
          </main>
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
