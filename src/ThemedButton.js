import React from "react";
import ThemeContext from "./ThemeContext";
import Button from "./Button";

export default class ThemedButton extends React.Component {
  render() {
    let theme = this.context.theme;
    let onClickHandler = this.context.toggleTheme;
    return <Button theme={theme} onClick={onClickHandler} />;
  }
}

ThemedButton.contextType = ThemeContext;
