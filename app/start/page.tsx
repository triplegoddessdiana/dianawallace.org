import Link from "next/link";

export const metadata = {
  title: "Diana Wallace",
};

export default function HomePage() {
  return (
    <main>
      <h1>Diana Wallace</h1>

      <p>
        These are the written materials I consider finished enough to stand without
        explanation.
      </p>

      <p>
        Some are essays.
        <br />
        Some are definitions.
        <br />
        Some exist to clarify the others.
      </p>

      <p>
        The site is arranged as a working archive rather than a narrative of progress.
        <br />
        Pieces may contradict earlier ones. That is permitted.
      </p>

      <p>
        There is no recommended pace.
        <br />
        There is no preferred outcome.
      </p>

      <p>What remains is what holds.</p>

      <h2>Index</h2>
      <ul>
        <li>
          <Link href="/start">Start Here</Link>
        </li>
        <li>
          <Link href="/essays">Essays</Link>
        </li>
        <li>
          <Link href="/philosophy">Philosophy</Link>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
        <li>
          <Link href="/audio">Audio</Link>
        </li>
        <li>
          <Link href="/work">The Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </main>
  );
}
