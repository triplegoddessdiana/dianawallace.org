"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const isAbout = pathname === "/about";
    document.body.classList.toggle("is-about", isAbout);
  }, [pathname]);

  return null;
}
