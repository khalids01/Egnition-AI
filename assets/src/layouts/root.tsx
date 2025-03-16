import React from "react";
import { useTheme } from "@/hooks/use-theme";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.classList.remove("light", "dark");

  }, [theme]);

  return <>{children}</>;
}
