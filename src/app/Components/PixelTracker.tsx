"use client";

import { useEffect } from "react";

const PixelTracker = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      import("react-facebook-pixel").then((ReactPixel) => {
        const pixelId = "1890458138414794";
        ReactPixel.default.init(pixelId);
        ReactPixel.default.pageView();
      });
    }
  }, []);

  return null;
};

export default PixelTracker;