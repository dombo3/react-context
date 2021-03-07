import "./styles.css";
import Toolbar from "./ToolBar";
import React from "react";
import ThemeContext, { themes } from "./ThemeContext";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
    this.state = { theme: themes.dark, toggleTheme: this.toggleTheme };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
