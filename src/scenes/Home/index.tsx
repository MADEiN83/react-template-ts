import React from "react";
import withTemplate from "../../components/withTemplate";

interface IProps {}

const Home: React.FC<IProps> = (props: IProps) => {
  console.log("Home props", props);
  return <div>Home page goes here</div>;
};

export default withTemplate(Home);
