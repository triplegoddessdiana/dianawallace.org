import Link from "next/link";

export const metadata = {
  title: "Start Here",
  description:
    "New to Diana Wallace, poet? Start with The Forgetting trilogy — The Poet Who Forgot Her Name and The Girl Who Grew Fangs.",
  alternates: { canonical: "/start" },
};

export default function StartHerePage() {
  return (
    <>
      <h1>Start Here</h1>

      <p className="lede">
        This is the work of Diana Wallace, poet. The door is the books —
        poetry on forgetting, remembering, and returning.
      </p>

      <p>
        Begin with the poetry. The essays remain, if you want to go further.
      </p>

      <section className="section">
        <h2>If You Have Five Minutes</h2>
        <p>
          Begin with{" "}
          <Link href="/books">The Forgetting trilogy</Link>. Two books are
          published:{" "}
          <Link href="/books/the-poet-who-forgot-her-name">
            The Poet Who Forgot Her Name
          </Link>{" "}
          and{" "}
          <Link href="/books/the-girl-who-grew-fangs">
            The Girl Who Grew Fangs
          </Link>
          .
        </p>
        <p>
          <a
            href="https://www.amazon.com/Poet-Who-Forgot-Her-Name/dp/B0GDVZ1WMC"
            target="_blank"
            rel="noreferrer"
          >
            Amazon · Book I →
          </a>
          <br />
          <a
            href="https://www.amazon.com/gp/product/B0GP1N2ZCF"
            target="_blank"
            rel="noreferrer"
          >
            Amazon · Book II →
          </a>
        </p>
      </section>

      <section className="section">
        <h2>If You Have Thirty Minutes</h2>
        <p>
          Read{" "}
          <Link href="/books/the-poet-who-forgot-her-name">
            The Poet Who Forgot Her Name
          </Link>{" "}
          — poems for the returning self. Then, if you want the feral arc,{" "}
          <Link href="/books/the-girl-who-grew-fangs">
            The Girl Who Grew Fangs
          </Link>
          .
        </p>
      </section>

      <section className="section">
        <h2>If You Want to Go Deeper</h2>

        <dl className="kv">
          <dt>Essays</dt>
          <dd>
            <Link href="/essays">Twelve essays</Link> on agency, attention,
            memory, and culture.
          </dd>

          <dt>Philosophy</dt>
          <dd>
            The <Link href="/philosophy">axioms</Link> — constraints, not
            beliefs.
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
