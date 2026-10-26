import Image from "next/image";
import Link from "next/link";
import { AMAZON_AUTHOR, books } from "@/app/lib/books";
import BuyButton from "@/app/components/BuyButton";

export const metadata = {
  title: "Books",
  description:
    "Poetry by Diana Wallace: The Poet Who Forgot Her Name, The Girl Who Grew Fangs, and Year of the Fire Horse, coming. Buy the published books on Amazon.",
  alternates: { canonical: "/books" },
  openGraph: {
    title: "Books · Diana Wallace",
    description:
      "The Poet Who Forgot Her Name, The Girl Who Grew Fangs, and Year of the Fire Horse, coming.",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
};

export default function BooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Books by Diana Wallace",
            itemListElement: books.map((book, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: book.title,
              url: `https://dianawallace.org${book.href}`,
            })),
          }),
        }}
      />

      <h1>Books</h1>
      <p className="lede">
        Three books. Two you can hold now. One still on its way.
      </p>

      <div className="catalog">
        {books.map((book) => (
          <article key={book.href} className="catalog-row">
            <Link href={book.href} className="cover-link">
              <Image
                src={book.cover}
                alt={`Cover of ${book.title} by Diana Wallace`}
                width={book.coverWidth}
                height={book.coverHeight}
                priority={book.roman === "I"}
              />
            </Link>

            <div className="catalog-copy">
              <p className="book-kicker">Book {book.roman}</p>
              <h2>
                <Link href={book.href}>{book.title}</Link>
              </h2>
              <p className="book-page-subtitle">{book.subtitle}</p>
              <p>{book.blurb}</p>
              {book.price ? <p className="book-price">{book.price}</p> : null}
              {book.proof ? <p className="book-proof">{book.proof}</p> : null}

              <div className="catalog-actions">
                {book.amazon ? (
                  <BuyButton href={book.amazon} />
                ) : (
                  <Link className="text-arrow" href={book.href}>
                    Read the dedication
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="catalog-note">
        <a href={AMAZON_AUTHOR} target="_blank" rel="noreferrer">
          Diana Wallace on Amazon
        </a>
      </p>
    </>
  );
}
