import { useContext } from "react";
import { ThemeContext } from "src/theme";
import { Icon } from "@iconify/react";

export const ThemeToggler: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  return (
    <button
      type="button"
      title={
        themeContext.theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-950 text-gray-800 dark:text-white"
      onClick={themeContext.toggleTheme}
    >
      <Icon icon={themeContext.theme === "light" ? "bi:moon" : "bi:sun"} />
    </button>
  );
};
