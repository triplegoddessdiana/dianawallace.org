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

      {/* Published */}
      <section className="book-row">
        <Link href="/books/the-poet-who-forgot-her-name">
          <Image
            className="book-cover"
            src="/covers/the-poet-who-forgot-her-name.jpg"
            alt="Cover of The Poet Who Forgot Her Name by Diana Wallace"
            width={140}
            height={210}
            priority
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
            A poetry collection in four movements — forgetting, searching,
            remembering, returning.
          </p>

          <p className="book-link">
            <Link href="/books/the-poet-who-forgot-her-name">
              Read more →
            </Link>
          </p>
        </div>
      </section>

      <hr className="hr" />

      {/* Forthcoming */}
      <section className="book-row">
        <Image
          className="book-cover"
          src="/covers/the-girl-who-grew-fangs.jpg"
          alt="Cover of The Girl Who Grew Fangs by Diana Wallace"
          width={140}
          height={210}
        />

        <div>
          <h2 className="book-title">The Girl Who Grew Fangs</h2>
          <p className="book-meta">Forthcoming</p>

          <p>
            A long-form poetic work — mythic, feral, and oriented toward
            transformation.
          </p>
        </div>
      </section>
    </>
  );
}
