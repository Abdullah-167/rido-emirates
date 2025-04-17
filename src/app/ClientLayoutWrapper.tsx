// src/app/ClientLayoutWrapper.tsx
"use client";

import PixelTracker from "./Components/PixelTracker";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PixelTracker />
      {children}
    </>
  );
}
