"use client";

import { useTheme } from "~/legacy/utils/themeContext";
import * as SonnerLib from "sonner@2.0.3";

// Robust import strategy for ESM/CJS compatibility
// @ts-ignore
const SonnerToaster = SonnerLib.Toaster || SonnerLib.default?.Toaster || SonnerLib.default;

type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

const Toaster = ({ ...props }: any) => {
  const { theme = "dark" } = useTheme();

  if (!SonnerToaster) return null;

  return (
    <SonnerToaster
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
