import Image from "next/image";
import Link from "next/link";
import { books } from "@/app/lib/books";
import BuyButton from "./BuyButton";

export default function BookShelf() {
  return (
    <section id="the-books" className="shelf" aria-label="The three books">
      {books.map((book) => (
        <article key={book.href} className="shelf-card">
          <Link href={book.href} className="cover-link">
            <Image
              src={book.cover}
              alt={`Cover of ${book.title} by Diana Wallace`}
              width={book.coverWidth}
              height={book.coverHeight}
              priority
            />
          </Link>

          <p className="book-kicker">Book {book.roman}</p>
          <h2>
            <Link href={book.href}>{book.title}</Link>
          </h2>
          <p className="book-sub">{book.subtitle}</p>

          {book.amazon ? (
            <BuyButton href={book.amazon} />
          ) : (
            <Link className="text-arrow" href={book.href}>
              Read the dedication
            </Link>
          )}

          {book.price ? <p className="book-price">{book.price}</p> : null}
          {book.proof ? <p className="book-proof">{book.proof}</p> : null}
          {book.status === "coming" ? (
            <p className="book-proof">Coming · not yet on Amazon</p>
          ) : null}
        </article>
      ))}
    </section>
  );
}
