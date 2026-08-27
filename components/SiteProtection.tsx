"use client";

import { useEffect } from "react";

export function SiteProtection() {
  useEffect(() => {
    const preventDefault = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("copy", preventDefault);
    document.addEventListener("cut", preventDefault);
    document.addEventListener("dragstart", preventDefault);

    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("copy", preventDefault);
      document.removeEventListener("cut", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
    };
  }, []);

  return null;
}
