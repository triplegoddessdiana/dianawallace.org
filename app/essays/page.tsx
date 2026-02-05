import Link from "next/link";
import { getWrittenEssays, getDeclaredFrames } from "@/app/lib/essays";

export const metadata = {
  title: "Essays",
};

// Declared primary (not yet written). Keep this as a title match for now.
const PRIMARY_DECLARED_TITLE = "Attention Is a Moral Act";

export default function EssaysPage() {
  const written = getWrittenEssays(); // linked
  const declared = getDeclaredFrames(); // plain text

  const primaryDeclared = declared.find((e) => e.title === PRIMARY_DECLARED_TITLE) ?? null;
  const declaredFrames = declared.filter((e) => e.title !== PRIMARY_DECLARED_TITLE);

  return (
    <main>
      <h1 data-redundant="true">Essays</h1>


      <p>
        Essays here introduce frames — ways of seeing — through which questions become visible.
      </p>

      <p>
        Some texts are written and stand as complete objects. Others are declared in
        advance, defining the conceptual boundaries of the work.
      </p>

      <h2>Primary (Written)</h2>
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

      <h2>Primary (Declared)</h2>
      {primaryDeclared ? <ul><li>{primaryDeclared.title}</li></ul> : <p>—</p>}

      <h2>Declared Frames</h2>
      {declaredFrames.length === 0 ? (
        <p>—</p>
      ) : (
        <ul>
          {declaredFrames.map((e) => (
            <li key={e.slug}>{e.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
