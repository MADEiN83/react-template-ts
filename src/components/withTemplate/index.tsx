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

interface ILayoutOptions {
  withBreakpoint?: boolean;
}

const withTemplate = (
  WrappedComponent: React.FC<ILayoutProps>,
  options: ILayoutOptions = {}
) => {
  const newComponent = class extends Component<ILayoutProps, {}> {
    componentDidMount = () => {
      if (options.withBreakpoint) {
        this.handleOnSizeChange();
        window.addEventListener("resize", this.handleOnSizeChange);
      }
    };

    componentWillUnmount = () => {
      if (options.withBreakpoint) {
        window.addEventListener("resize", this.handleOnSizeChange);
      }
    };

    handleOnSizeChange = () => {
      if (!options.withBreakpoint) return;
      const { updateScreenSizeDispatcher } = this.props;
      const screen = getScreenBreakpoints();

      updateScreenSizeDispatcher(screen);
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
