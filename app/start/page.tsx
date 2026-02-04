import Link from "next/link";

export const metadata = {
  title: "Start Here",
};

export default function StartHerePage() {
  return (
    <main>
      <h1>Start Here</h1>

      <p>
        This site is a canonical archive. It is not updated on a schedule.
      </p>

      <h2>Begin</h2>
      <ul>
        <li>
          <strong>Primary (Written):</strong>{" "}
          <Link href="/essays/human-sovereignty">Human Sovereignty</Link>
        </li>
        <li>
          <strong>Constraints:</strong> <Link href="/philosophy">Philosophy</Link>
        </li>
        <li>
          <strong>Index:</strong> <Link href="/essays">Essays</Link>
        </li>
      </ul>

      <h2>Forms</h2>
      <ul>
        <li>
          <strong>Books:</strong> <Link href="/books">Books</Link>
        </li>
        <li>
          <strong>Audio:</strong> <Link href="/audio">Audio</Link>
        </li>
      </ul>

      <h2>Pace</h2>
      <ul>
        <li>
          <strong>Five minutes:</strong> read one essay.
        </li>
        <li>
          <strong>Thirty minutes:</strong> read one essay and the Philosophy page.
        </li>
        <li>
          <strong>Depth:</strong> return over time.
        </li>
      </ul>
    </main>
  );
}
