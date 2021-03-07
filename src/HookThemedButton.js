import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function HookThemedButton() {
  const context = useContext(ThemeContext);
  return (
    <button
      onClick={context.toggleTheme}
      style={{
        color: context.theme.foreground,
        backgroundColor: context.theme.background,
        border: `1px solid ${context.theme.background}`
      }}
    >
      HookThemedButton
    </button>
  );
}
