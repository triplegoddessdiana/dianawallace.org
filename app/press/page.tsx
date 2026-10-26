import Link from "next/link";
import { POET_EMAIL, PRESS_EMAIL } from "@/app/lib/books";

export const metadata = {
  title: "Press",
  description:
    "Press inquiries for Diana Wallace, poet and author of The Poet Who Forgot Her Name, The Girl Who Grew Fangs, and Year of the Fire Horse, coming.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  return (
    <>
      <h1>Press</h1>

      <div className="prose">
        <p>
          Diana Wallace is a poet. Her books are{" "}
          <Link href="/books/the-poet-who-forgot-her-name">
            <em>The Poet Who Forgot Her Name</em>
          </Link>{" "}
          (2025),{" "}
          <Link href="/books/the-girl-who-grew-fangs">
            <em>The Girl Who Grew Fangs</em>
          </Link>{" "}
          (2026), and{" "}
          <Link href="/books/year-of-the-fire-horse">
            <em>Year of the Fire Horse</em>
          </Link>
          , which is not yet listed.
        </p>

        <p>
          She also speaks some of the work aloud on{" "}
          <Link href="/audio">Expect Nothing</Link>. Essays remain at{" "}
          <Link href="/essays">dianawallace.org/essays</Link>.
        </p>

        <p>
          Press inquiries:
          <br />
          <a href={`mailto:${PRESS_EMAIL}`}>{PRESS_EMAIL}</a>
        </p>

        <p>
          For a reading — Logan St, or a bookstore evening — write{" "}
          <a href={`mailto:${POET_EMAIL}`}>{POET_EMAIL}</a>.
        </p>
      </div>
    </>
  );
}
