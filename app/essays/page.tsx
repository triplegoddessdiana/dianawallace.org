import Link from "next/link";
import { ESSAYS } from "../lib/essays";

export default function EssaysPage() {
  return (
    <>
      <h1>Essays</h1>
      <p>Essays intended to shift frames, not win arguments.</p>

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
