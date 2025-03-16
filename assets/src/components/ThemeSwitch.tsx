import React, { useLayoutEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

interface Props {
  type?: "switch" | "select";
}

export function ThemeSwitch(props?: Props) {
  const { type = "switch" } = props || {};
  const { theme, setTheme } = useTheme();
  const [rendered, setRendered] = useState(false);

  const toggleTheme = () => {
    const currentThemeClass = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(theme === "dark" ? "light" : "dark");
    document.body.classList.remove("light", "dark");
    document.body.classList.add(
      currentThemeClass === "light" ? "dark" : "light"
    );
  };

  useLayoutEffect(() => {
    setRendered(true);
  }, []);

  if (!rendered || theme === "") return null;

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={toggleTheme}
          className={cn(
            "relative h-7 w-14 rounded-full p-1 transition-colors duration-200",
            theme === "dark" ? "bg-slate-700" : "bg-gray-300"
          )}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          <span
            className={cn(
              "flex h-5 w-[20px] items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200",
              theme === "dark" ? "translate-x-7" : "translate-x-0"
            )}
          >
            {theme === "dark" ? (
              <Moon className="h-4 w-4 text-slate-700" />
            ) : (
              <Sun className="h-4 w-4 text-amber-500" />
            )}
          </span>
        </button>
      </div>
    </>
  );
}
