import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/app/components/BuyButton";
import { bookByRoman } from "@/app/lib/books";

const book = bookByRoman("II");
const amazon = book.amazon as string;

export const metadata: Metadata = {
  title: "The Girl Who Grew Fangs",
  description:
    "The Girl Who Grew Fangs: A Book of Remembering After the Fall Into Shadow, by Diana Wallace. 53 poems. Paperback $16.99, eBook $9.99. The soul, like the wolf, does not forget its own nature.",
  alternates: { canonical: "/books/the-girl-who-grew-fangs" },
  openGraph: {
    title: "The Girl Who Grew Fangs · Diana Wallace",
    description:
      "But the soul, like the wolf, does not forget its own nature. 53 poems by Diana Wallace.",
    images: ["/covers/the-girl-who-grew-fangs.jpg"],
  },
};

export default function FangsPage() {
  return (
    <article className="book-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "The Girl Who Grew Fangs: A Book of Remembering After the Fall Into Shadow",
            author: { "@type": "Person", name: "Diana Wallace" },
            bookFormat: "https://schema.org/Paperback",
            isbn: "9798994577424",
            datePublished: "2026-02-17",
            description:
              "53 poems in four parts. But the soul, like the wolf, does not forget its own nature.",
            genre: "Poetry",
            numberOfPages: 175,
            inLanguage: "en",
            image: "https://dianawallace.org/covers/the-girl-who-grew-fangs.jpg",
            potentialAction: {
              "@type": "BuyAction",
              target: amazon,
            },
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
                name: "The Girl Who Grew Fangs",
                item: "https://dianawallace.org/books/the-girl-who-grew-fangs",
              },
            ],
          }),
        }}
      />

      <header className="book-hero">
        <figure className="book-hero-cover">
          <Image
            src={book.cover}
            alt="Cover of The Girl Who Grew Fangs by Diana Wallace"
            width={book.coverWidth}
            height={book.coverHeight}
            priority
          />
        </figure>
        <div>
          <p className="book-kicker">Book II · 2026</p>
          <h1>The Girl Who Grew Fangs</h1>
          <p className="book-page-subtitle">
            A Book of Remembering After the Fall Into Shadow
          </p>
          <p className="book-page-author">Diana Wallace</p>
          <p className="book-price">{book.price}</p>
          <BuyButton href={amazon} />
        </div>
      </header>

      <div className="book-body">
        <blockquote className="book-page-excerpt">
          <p>But the soul, like the wolf, does not forget its own nature.</p>
        </blockquote>

        <section>
          <h2>After the fall into shadow</h2>
          <p>
            The second of the three books. Where{" "}
            <em>The Poet Who Forgot Her Name</em> traced a moon arc — forgetting
            and remembering by moonlight — this book follows the feral arc: the
            descent into shadow, the growl that becomes a prayer, and the long
            clawing return to selfhood.
          </p>
          <p>
            These 53 poems move through darkening, turning, integration, and
            return. They are for anyone who has fallen — and found teeth where
            there used to be silence.
          </p>
        </section>

        <section>
          <h2>Four parts</h2>
          <ol className="book-page-parts">
            <li>
              <strong>Darkening</strong> — The fall into shadow. The world
              narrows. The familiar self dissolves.
            </li>
            <li>
              <strong>Turning</strong> — Something feral stirs. The body
              remembers what the mind forgot. Instinct returns before language
              does.
            </li>
            <li>
              <strong>Integration</strong> — The wolf and the woman meet.
              Neither is destroyed. A harder, wilder wholeness takes shape.
            </li>
            <li>
              <strong>Return</strong> — She walks back — not tame, not broken.
              Carrying everything. Fangs and all.
            </li>
          </ol>
        </section>

        <section>
          <h2>Details</h2>
          <dl className="book-page-details">
            <div>
              <dt>Place</dt>
              <dd>Book II of three</dd>
            </div>
            <div>
              <dt>Poems</dt>
              <dd>53</dd>
            </div>
            <div>
              <dt>Pages</dt>
              <dd>175</dd>
            </div>
            <div>
              <dt>ISBN</dt>
              <dd>979-8-9945774-2-4</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>February 17, 2026</dd>
            </div>
            <div>
              <dt>Edition</dt>
              <dd>First</dd>
            </div>
            <div>
              <dt>Paperback</dt>
              <dd>$16.99</dd>
            </div>
            <div>
              <dt>eBook</dt>
              <dd>$9.99</dd>
            </div>
          </dl>
          <BuyButton href={amazon} />
        </section>

        <section>
          <h2>The other books</h2>
          <p>
            <Link href="/books/the-poet-who-forgot-her-name">
              Book I: <em>The Poet Who Forgot Her Name</em>
            </Link>
          </p>
          <p>
            <Link href="/books/year-of-the-fire-horse">
              Book III: <em>Year of the Fire Horse</em> — coming
            </Link>
          </p>
        </section>
      </div>
    </article>
  );
}
