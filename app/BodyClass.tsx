"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("is-about", pathname === "/about");
    document.body.classList.toggle(
      "is-wide",
      pathname === "/" || pathname.startsWith("/books"),
    );
  }, [pathname]);

  return null;
}
