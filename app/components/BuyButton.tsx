import type { ReactNode } from "react";

export default function BuyButton({
  href,
  children = "Buy on Amazon",
}: {
  href: string;
  children?: ReactNode;
}) {
  return (
    <a className="btn" href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
