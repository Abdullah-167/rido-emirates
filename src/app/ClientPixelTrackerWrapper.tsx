"use client";

import dynamic from "next/dynamic";

const PixelTracker = dynamic(
  () => import("./Components/PixelTracker"),
  { 
    ssr: false,
    loading: () => null
  }
);

export default function ClientPixelTracker() {
  return <PixelTracker />;
}