import React, { Component } from "react";

const withTemplate = (WrappedComponent: React.FC<any>) => {
  return class extends Component {
    render = () => {
      return <WrappedComponent />;
    };
  };
};

export default withTemplate;
