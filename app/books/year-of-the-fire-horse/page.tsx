import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/app/components/BuyButton";
import { bookByRoman } from "@/app/lib/books";

const book = bookByRoman("III");
const first = bookByRoman("I");
const second = bookByRoman("II");

export const metadata: Metadata = {
  title: "Year of the Fire Horse",
  description:
    "Year of the Fire Horse: A Book of Crossing Into Open Country, by Diana Wallace. Book III. Coming — not yet listed. No ISBN.",
  alternates: { canonical: "/books/year-of-the-fire-horse" },
  openGraph: {
    title: "Year of the Fire Horse · Diana Wallace",
    description:
      "A Book of Crossing Into Open Country. Coming — not yet on Amazon.",
    images: ["/covers/year-of-the-fire-horse.jpg"],
  },
};

export default function FireHorsePage() {
  return (
    <article className="book-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Year of the Fire Horse: A Book of Crossing Into Open Country",
            alternateName: "Year of the Fire Horse",
            url: "https://dianawallace.org/books/year-of-the-fire-horse",
            author: {
              "@type": "Person",
              name: "Diana Wallace",
              url: "https://dianawallace.org",
            },
            description:
              "Book III by Diana Wallace. A Book of Crossing Into Open Country. Coming; not yet on Amazon. No ISBN.",
            genre: "Poetry",
            inLanguage: "en",
            image: "https://dianawallace.org/covers/year-of-the-fire-horse.jpg",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://dianawallace.org" },
              { "@type": "ListItem", position: 2, name: "Books", item: "https://dianawallace.org/books" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Year of the Fire Horse",
                item: "https://dianawallace.org/books/year-of-the-fire-horse",
              },
            ],
          }),
        }}
      />

      <header className="book-hero">
        <figure className="book-hero-cover">
          <Image
            src={book.cover}
            alt="Cover of Year of the Fire Horse by Diana Wallace"
            width={book.coverWidth}
            height={book.coverHeight}
            priority
          />
        </figure>
        <div>
          <p className="book-kicker">Book III</p>
          <h1>Year of the Fire Horse</h1>
          <p className="book-page-subtitle">
            A Book of Crossing Into Open Country
          </p>
          <p className="book-page-author">Diana Wallace</p>
          <p className="status-pill">Coming · not yet on Amazon</p>
        </div>
      </header>

      <div className="book-body">
        <blockquote className="dedication">
          <p>For the woman.</p>
          <p>The one who forgot her name.</p>
          <p>The one who grew fangs.</p>
          <p>The one who walked through fire.</p>
          <p className="dedication-break">You were always on your way home.</p>
        </blockquote>

        <p>
          This book is on its way. There is no ISBN yet, and it is not on
          Amazon.
        </p>

        <section>
          <h2>The books you can hold now</h2>
          <p>
            <Link href={first.href}>
              Book I: <em>{first.title}</em>
            </Link>
          </p>
          <BuyButton href={first.amazon as string} />
          <p>
            <Link href={second.href}>
              Book II: <em>{second.title}</em>
            </Link>
          </p>
          <p className="book-price">{second.price}</p>
          <BuyButton href={second.amazon as string} />
        </section>
      </div>
    </article>
  );
}
