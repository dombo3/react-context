import "./styles.css";
import Toolbar from "./ToolBar";
import React from "react";
import ThemeContext from "./ThemeContext";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === "dark" ? "light" : "dark"
      }));
    };
    this.state = { theme: "dark", toggleTheme: this.toggleTheme };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
