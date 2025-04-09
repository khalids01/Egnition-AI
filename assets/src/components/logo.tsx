import React from "react";
import { BotMessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/constants/config";

interface Props {
  iconSize?: number;
  showIcon?: boolean;
  showText?: boolean;
  classNames?: {
    root?: string;
    icon?: string;
    iconContainer?: string;
    text?: string;
  };
}
export const Logo = ({
  iconSize = 24,
  showIcon = true,
  showText = true,
  classNames = {
    root: "",
    icon: "",
    iconContainer: "",
    text: "",
  },
}: Props) => {
  return (
    <>
      <div className={cn("flex items-center space-x-2", classNames.root)}>
        {showIcon && (
          <div
            className={cn(
              "p-1.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md",
              classNames.icon
            )}
          >
            <BotMessageSquare
              className={cn("text-white", classNames.icon)}
              size={iconSize}
            />
          </div>
        )}
        {showText && (
          <h2
            className={cn(
              "font-bold text-2xl tracking-tight logo-text",
              classNames.text
            )}
          >
            {config.appName}
          </h2>
        )}
      </div>
    </>
  );
};
