import ThemeContext from "./ThemeContext";

export default function FunctionThemedButton() {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button onClick={context.toggleTheme}>{context.theme} Button</button>
      )}
    </ThemeContext.Consumer>
  );
}
