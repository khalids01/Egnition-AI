import React, { useLayoutEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

interface Props {
  type?: "switch" | "select";
  size?: "default" | "sm" | "lg";
}

export function ThemeSwitch(props?: Props) {
  const { type = "switch", size = "default" } = props || {};
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
            "relative rounded-full p-1 transition-colors duration-200",
            size === "lg"
              ? "h-10 w-20"
              : size === "sm"
              ? "h-5.5 w-10"
              : "h-7 w-14",
            theme === "dark" ? "bg-slate-700" : "bg-gray-300"
          )}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          <span
            className={cn(
              "flex items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200",
              size === "lg" ? "h-6 w-6" : size === "sm" ? "h-4.5 w-4.5" : "h-5 w-5",
              theme === "dark" && size === "lg"
                ? "translate-x-10"
                : theme === "dark" && size === "sm"
                ? "translate-x-4"
                : theme === "dark" && size === "default"
                ? "translate-x-7"
                : "translate-x-0",
              size === "sm" ? "-translate-y-0.5" : ""
            )}
          >
            {theme === "dark" ? (
              <Moon
                className={cn(
                  " text-slate-700",
                  size === "lg"
                    ? "h-6 w-6"
                    : size === "sm"
                    ? "h-4 w-4"
                    : "h-5 w-5"
                )}
              />
            ) : (
              <Sun
                className={cn(
                  "text-yellow-400",
                  size === "lg" ? "h-6 w-6" : "h-5 w-5"
                )}
              />
            )}
          </span>
        </button>
      </div>
    </>
  );
}
