import Link from "next/link";

export const metadata = {
  title: "The Work",
  description:
    "A single body of work by Diana Wallace — essays, poetry, philosophical texts, and audio. Organized by coherence, not chronology.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <h1 data-redundant="true">The Work</h1>

      <div className="prose">
        <p>
          This site houses a single body of work composed of essays, poetry,
          spoken audio, and philosophical texts. It is organized by coherence.
        </p>

        <p>
          Individual pieces may originate elsewhere, but only those that stand
          independently are included here. Nothing on this site is provisional.
        </p>

        <h2>Books</h2>
        <p>
          <Link href="/books">The Forgetting trilogy</Link> — poetry books
          tracing an arc from forgetting to remembering to returning.{" "}
          <em>The Poet Who Forgot Her Name</em> (2025) and{" "}
          <em>The Girl Who Grew Fangs</em> (2026) are published.
        </p>

        <h2>Essays</h2>
        <p>
          Twelve <Link href="/essays">essays</Link> introducing frames — ways of
          seeing — on agency, attention, memory, and culture. Start with{" "}
          <Link href="/essays/human-agency">Human Agency</Link>.
        </p>

        <h2>Audio</h2>
        <p>
          <Link href="/audio">Expect Nothing</Link> — spoken pieces meant to be
          listened to. Available on Spotify, Apple Podcasts, and YouTube.
        </p>

        <h2>Philosophy</h2>
        <p>
          The <Link href="/philosophy">axioms</Link> that define the conceptual
          boundaries of the work. These are constraints, not beliefs.
        </p>
      </div>
    </>
  );
}
