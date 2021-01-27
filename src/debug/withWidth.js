import React from "react";
import withWidth from "@material-ui/core/withWidth";

function WithWidth(props) {
  return <div>{`Current width: ${props.width}`}</div>;
}

export default withWidth()(WithWidth);
