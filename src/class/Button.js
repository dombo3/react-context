import React from "react";

export default class Button extends React.Component {
  render() {
    return this.props.theme === "dark" ? (
      <button>Dark Button</button>
    ) : (
      <button>Not Dark Button</button>
    );
  }
}
