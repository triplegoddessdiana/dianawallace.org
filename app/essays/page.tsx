import Link from "next/link";
import { getWrittenEssays, getDeclaredFrames } from "@/app/lib/essays";

export const metadata = {
  title: "Essays",
};

export default function EssaysPage() {
  const written = getWrittenEssays();
  const declared = getDeclaredFrames();

  return (
    <main>
      <h1>Essays</h1>

      <p>
        Essays here are intended to introduce frames — ways of seeing — rather than to win
        arguments.
      </p>
      <p>
        Some texts are written and stand as complete objects. Others are declared in
        advance, defining the conceptual boundaries of the work.
      </p>

      <h2>Written</h2>
      {written.length === 0 ? (
        <p>—</p>
      ) : (
        <ul>
          {written.map((e) => (
            <li key={e.slug}>
              <Link href={`/essays/${e.slug}`}>{e.title}</Link>
            </li>
          ))}
        </ul>
      )}

      <h2>Declared Frames</h2>
      <ul>
        {declared.map((e) => (
          <li key={e.slug}>{e.title}</li>
        ))}
      </ul>
    </main>
  );
}
