import Link from "next/link";

export const metadata = {
  title: "Start Here",
  description:
    "New to Diana Wallace's work? Start here. A guide to the essays, books, audio, and philosophy on this site.",
  alternates: { canonical: "/start" },
};

export default function StartHerePage() {
  return (
    <>
      <h1>Start Here</h1>

      <p className="lede">
        This is the work of Diana Wallace — essays, poetry, and spoken audio on
        human agency, memory, and meaning.
      </p>

      <p>
        Everything here is designed to stand on its own. You can enter anywhere.
      </p>

      <section className="section">
        <h2>If You Have Five Minutes</h2>
        <p>
          Read <Link href="/essays/human-agency">Human Agency</Link>. It is the
          center of the work — the essay everything else orbits.
        </p>
      </section>

      <section className="section">
        <h2>If You Have Thirty Minutes</h2>
        <p>
          Read <Link href="/essays/human-agency">Human Agency</Link>, then the{" "}
          <Link href="/philosophy">Philosophy</Link> page. Together they define
          the frame.
        </p>
      </section>

      <section className="section">
        <h2>If You Want to Go Deep</h2>

        <dl className="kv">
          <dt>Essays</dt>
          <dd>
            <Link href="/essays">Twelve essays</Link> on agency, attention,
            memory, and culture.
          </dd>

          <dt>Books</dt>
          <dd>
            <Link href="/books">The Forgetting trilogy</Link> — poetry on
            forgetting, remembering, and returning.
          </dd>

          <dt>Audio</dt>
          <dd>
            <Link href="/audio">Expect Nothing</Link> — spoken pieces meant to
            be listened to.
          </dd>
        </dl>
      </section>

      <section className="section">
        <p>
          <Link href="/about">About Diana Wallace →</Link>
        </p>
      </section>
    </>
  );
}
