import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Books",
};

export default function BooksPage() {
  return (
    <>
      <h1>Books</h1>

      <hr className="hr" />

      {/* Book II */}
      <section className="book-row">
        <Link href="/books/the-girl-who-grew-fangs">
          <Image
            className="book-cover"
            src="/covers/the-girl-who-grew-fangs.jpg"
            alt="Cover of The Girl Who Grew Fangs by Diana Wallace"
            width={140}
            height={210}
            priority
          />
        </Link>

        <div>
          <h2 className="book-title">
            <Link
              href="/books/the-girl-who-grew-fangs"
              style={{ borderBottom: "none" }}
            >
              The Girl Who Grew Fangs
            </Link>
          </h2>
          <p className="book-meta">
            A Book of Remembering After the Fall Into Shadow&ensp;·&ensp;2026
          </p>

          <p>
            Book II of The Forgetting trilogy — 53 poems tracing the feral
            arc from shadow to selfhood.
          </p>

          <p className="book-link">
            <Link href="/books/the-girl-who-grew-fangs">Read more →</Link>
          </p>
        </div>
      </section>

      <hr className="hr" />

      {/* Book I */}
      <section className="book-row">
        <Link href="/books/the-poet-who-forgot-her-name">
          <Image
            className="book-cover"
            src="/covers/the-poet-who-forgot-her-name.jpg"
            alt="Cover of The Poet Who Forgot Her Name by Diana Wallace"
            width={140}
            height={210}
          />
        </Link>

        <div>
          <h2 className="book-title">
            <Link
              href="/books/the-poet-who-forgot-her-name"
              style={{ borderBottom: "none" }}
            >
              The Poet Who Forgot Her Name
            </Link>
          </h2>
          <p className="book-meta">
            Poems for the Returning Self&ensp;·&ensp;2025
          </p>

          <p>
            Book I of The Forgetting trilogy — a poetry collection in four
            movements: forgetting, searching, remembering, returning.
          </p>

          <p className="book-link">
            <Link href="/books/the-poet-who-forgot-her-name">
              Read more →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
