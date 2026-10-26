import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/app/components/BuyButton";
import { bookByRoman } from "@/app/lib/books";

const book = bookByRoman("I");
const amazon = book.amazon as string;

export const metadata: Metadata = {
  title: "The Poet Who Forgot Her Name",
  description:
    "The Poet Who Forgot Her Name: Poems for the Returning Self, by Diana Wallace. A poetry collection in four movements — forgetting, searching, remembering, returning. Paperback, 216 pages.",
  keywords: [
    "The Poet Who Forgot Her Name",
    "Diana Wallace",
    "Poems for the Returning Self",
    "poetry about returning",
    "poems about finding yourself again",
  ],
  alternates: { canonical: "/books/the-poet-who-forgot-her-name" },
  openGraph: {
    title: "The Poet Who Forgot Her Name · Diana Wallace",
    description:
      "Poems for the Returning Self. Four movements: forgetting, searching, remembering, returning.",
    type: "book",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Poet Who Forgot Her Name · Diana Wallace",
    description: "Poems for the Returning Self, by Diana Wallace.",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
};

const faq = [
  {
    q: "What is The Poet Who Forgot Her Name about?",
    a: "It is a poetry collection about losing a name, surviving the silence, and returning to yourself. Four movements: forgetting, searching, remembering, returning.",
  },
  {
    q: "Is it a book about healing from trauma?",
    a: "It is poetry, written from the places trauma leaves quiet. It can offer recognition and company. It is not therapy, and it is not a substitute for professional care.",
  },
  {
    q: "Who wrote The Poet Who Forgot Her Name?",
    a: "Diana Wallace, a poet. This is the first of her three books.",
  },
];

export default function PoetPage() {
  return (
    <article className="book-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            "@id": "https://dianawallace.org/books/the-poet-who-forgot-her-name#book",
            name: "The Poet Who Forgot Her Name: Poems for the Returning Self",
            alternateName: "The Poet Who Forgot Her Name",
            url: "https://dianawallace.org/books/the-poet-who-forgot-her-name",
            author: {
              "@type": "Person",
              name: "Diana Wallace",
              url: "https://dianawallace.org",
            },
            bookFormat: "https://schema.org/Paperback",
            isbn: "9798241723536",
            numberOfPages: 216,
            datePublished: "2025",
            description:
              "Poems for the returning self. Four movements: forgetting, searching, remembering, returning.",
            genre: ["Poetry"],
            inLanguage: "en",
            publisher: "Independent",
            image: "https://dianawallace.org/covers/the-poet-who-forgot-her-name.jpg",
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
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
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
                name: "The Poet Who Forgot Her Name",
                item: "https://dianawallace.org/books/the-poet-who-forgot-her-name",
              },
            ],
          }),
        }}
      />

      <header className="book-hero">
        <figure className="book-hero-cover">
          <Image
            src={book.cover}
            alt="Cover of The Poet Who Forgot Her Name by Diana Wallace"
            width={book.coverWidth}
            height={book.coverHeight}
            priority
          />
        </figure>
        <div>
          <p className="book-kicker">Book I · 2025</p>
          <h1>The Poet Who Forgot Her Name</h1>
          <p className="book-page-subtitle">Poems for the Returning Self</p>
          <p className="book-page-author">Diana Wallace</p>
          <p className="book-proof">{book.proof}</p>
          <BuyButton href={amazon} />
        </div>
      </header>

      <div className="book-body">
        <section>
          <h2>For the returning self</h2>
          <p>
            These poems give language to what went unnamed: the silence, the
            disappearance, the grief, and the search for a voice that still
            belongs to you. They are for the reader who survived by becoming
            smaller — and is ready to return.
          </p>
          <p>
            This book began in the dark. These poems were written to mark the
            path back with a light — written as evidence that a woman can
            disappear slowly, notice the disappearance, and choose to return.
            That the returning is not a single moment, but a practice. And that
            the light was never gone — only unclaimed.
          </p>
        </section>

        <section>
          <h2>Who it’s for</h2>
          <p>
            For the woman coming back after loss, a controlling relationship,
            burnout, or years spent disappearing inside other people’s needs.
            If you came looking for poetry about healing after trauma, you are
            in the right room. These poems offer company. They are not a
            program, and they are not a substitute for care.
          </p>
        </section>

        <section>
          <h2>Four movements</h2>
          <ol className="book-page-parts">
            <li>
              <strong>The Forgetting</strong> — How a woman learns to disappear.
              Silence as survival. Obedience mistaken for peace.
            </li>
            <li>
              <strong>The Search</strong> — The ache that becomes a compass.
              Moon, wind, stars, dust. Something in the dark still breathing.
            </li>
            <li>
              <strong>The Remembering</strong> — Moonlight as recognition. The
              name returns — not spoken, but remembered. The self that was never
              lost, only unclaimed.
            </li>
            <li>
              <strong>The Return</strong> — A woman who walks back into her own
              light. Not as triumph — as arrival.
            </li>
          </ol>
        </section>

        <section>
          <h2>From the prologue</h2>
          <blockquote className="book-page-excerpt">
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
            <p>
              I tried to answer
              <br />
              but my voice was dust,
              <br />
              a forgotten language
              <br />
              tucked beneath my ribs.
              <br />
              So the stars spoke for me.
              <br />
              They pulsed like a broken heartbeat
              <br />
              trying to remember its rhythm.
            </p>
          </blockquote>
        </section>

        <section>
          <h2>Details</h2>
          <dl className="book-page-details">
            <div>
              <dt>Format</dt>
              <dd>Paperback</dd>
            </div>
            <div>
              <dt>Pages</dt>
              <dd>216</dd>
            </div>
            <div>
              <dt>ISBN</dt>
              <dd>979-8-241-72353-6</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>2025</dd>
            </div>
            <div>
              <dt>Edition</dt>
              <dd>First</dd>
            </div>
            <div>
              <dt>Place</dt>
              <dd>Book I of three</dd>
            </div>
          </dl>
          <p className="book-proof">5.0 — 8 reviews on Amazon</p>
          <p className="book-proof">#1 New Release in Women&apos;s Poetry</p>
          <BuyButton href={amazon} />
        </section>

        <section>
          <h2>Questions readers ask</h2>
          {faq.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
          <p>
            <Link href="/guides/poetry-for-healing-after-trauma">
              Poetry for healing after trauma
            </Link>
          </p>
          <p>
            <Link href="/guides/poems-about-finding-yourself-again">
              Poems about finding yourself again
            </Link>
          </p>
        </section>

        <section>
          <h2>The other books</h2>
          <p>
            <Link href="/books/the-girl-who-grew-fangs">
              Book II: <em>The Girl Who Grew Fangs</em>
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
