import ThemedButton from "./ThemedButton";
import FunctionThemedButton from "./FunctionThemedButton";
import HookThemedButton from "./HookThemedButton";

export default function Toolbar() {
  return (
    <div>
      <ThemedButton />
      <FunctionThemedButton />
      <HookThemedButton />
    </div>
  );
}
