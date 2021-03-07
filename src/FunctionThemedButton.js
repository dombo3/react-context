import ThemeContext from "./ThemeContext";

export default function FunctionThemedButton() {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button
          onClick={context.toggleTheme}
          style={{
            color: context.theme.foreground,
            background: context.theme.background,
            border: `1px solid ${context.theme.background}`
          }}
        >
          Function Themed Button
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
