import React from "react";
import ThemeContext from "./ThemeContext";
import Button from "./Button";

export default class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.context.theme} />;
  }
}

ThemedButton.contextType = ThemeContext;
