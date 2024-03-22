// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { GlobalProvider } from "./context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </GlobalProvider>
  );
}
