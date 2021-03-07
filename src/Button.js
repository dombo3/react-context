import React from "react";
import { themes } from "./ThemeContext";

export default class Button extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <button
        onClick={this.props.onClick}
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
          border: `1px solid ${theme.background}`
        }}
      >
        Themed Button
      </button>
    );
  }
}
