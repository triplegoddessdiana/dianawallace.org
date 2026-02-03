export const metadata = {
  title: "Essays",
  description:
    "Essays by Diana Wallace intended to shift frames, not win arguments.",
};

import Link from "next/link";
import { ESSAYS } from "../lib/essays";

export default function EssaysPage() {
  return (
    <>
      <h1>Essays</h1>

      <p>
        Essays intended to introduce frames—ways of seeing—rather than to win
        arguments.
      </p>

      <ul>
        {ESSAYS.map((essay) => (
          <li key={essay.slug}>
            <Link href={`/essays/${essay.slug}`}>{essay.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
