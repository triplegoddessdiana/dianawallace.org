import Link from "next/link";

export const metadata = { title: "Start Here" };

export default function StartHerePage() {
  return (
    <>
      <h1>Start Here</h1>

      <p className="lede">
        This site is a canonical archive. 
      </p>

      <section className="section">
        <h2>Begin</h2>
        <dl className="kv">
          <dt>Primary </dt>
          <dd>
            <Link href="/essays/human-agency">Human Agency</Link>
          </dd>

          <dt>Axioms</dt>
          <dd>
            <Link href="/philosophy">Philosophy</Link>
          </dd>

          <dt>Index</dt>
          <dd>
            <Link href="/essays">Essays</Link>
          </dd>
        </dl>
      </section>

      <section className="section">
        <h2>Forms</h2>
        <dl className="kv">
          <dt>Books</dt>
          <dd>
            <Link href="/books">Books</Link>
          </dd>

          <dt>Audio</dt>
          <dd>
            <Link href="/audio">Audio</Link>
          </dd>
        </dl>
      </section>

      <section className="section">
        <h2>Pace</h2>
        <dl className="kv">
          <dt>Five minutes</dt>
          <dd>One essay.</dd>

          <dt>Thirty minutes</dt>
          <dd>One essay and Philosophy.</dd>

          <dt>Depth</dt>
          <dd>Return over time.</dd>
        </dl>
      </section>
    </>
  );
}
