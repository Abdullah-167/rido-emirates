"use client";

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pixelId = "1890458138414794";
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }
  }, []);

  return null;
};

export default PixelTracker;
