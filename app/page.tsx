import Link from "next/link";
import BookShelf from "./components/BookShelf";

export const metadata = {
  title: { absolute: "Diana Wallace — Poet" },
  description:
    "Diana Wallace writes poems for the long way home. Get The Poet Who Forgot Her Name and The Girl Who Grew Fangs. Year of the Fire Horse is coming.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Diana Wallace — Poet",
    description:
      "Poems for the long way home. Three books — two you can buy now, and Year of the Fire Horse, still on its way.",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Poet</p>
        <h1>Poems for the long way home.</h1>
        <p className="hero-for">
          For the woman who became smaller to survive, and is ready to return.
        </p>
        <a className="btn" href="#the-books">
          Get the books
        </a>
      </section>

      <BookShelf />

      <section className="stanza-block" aria-label="A stanza">
        <blockquote className="stanza">
          <p>
            The night found me
            <br />
            before I found myself.
            <br />
            She leaned close,
            <br />
            moon-breath trembling on my cheek,
            <br />
            and whispered, <em>Child…</em>
            <br />
            <em>you have been gone too long.</em>
          </p>
        </blockquote>
        <p className="stanza-cite">
          From{" "}
          <Link href="/books/the-poet-who-forgot-her-name">
            <em>The Poet Who Forgot Her Name</em>
          </Link>
        </p>
      </section>

      <p className="home-next">
        <Link href="/about">About the poet</Link>
      </p>
    </>
  );
}
