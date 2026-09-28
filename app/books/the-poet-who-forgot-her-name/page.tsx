import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Poet Who Forgot Her Name — Trauma Healing Poetry",
  description:
    "The Poet Who Forgot Her Name: Poems for the Returning Self by Diana Wallace is a poetry collection about trauma, survival, lost identity, emotional healing, and returning to yourself.",
  keywords: [
    "The Poet Who Forgot Her Name",
    "Diana Wallace",
    "trauma healing poetry",
    "poetry books about healing from trauma",
    "poems for trauma survivors",
    "poetry about reclaiming identity",
    "poetry about emotional abuse",
    "poems about finding yourself again",
    "books for women healing from trauma",
  ],
  alternates: { canonical: "/books/the-poet-who-forgot-her-name" },
  openGraph: {
    title: "The Poet Who Forgot Her Name · Diana Wallace",
    description:
      "A poetry collection about trauma, survival, lost identity, emotional healing, and returning to yourself.",
    type: "book",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Poet Who Forgot Her Name · Diana Wallace",
    description:
      "Poems for the Returning Self—a poetry collection about trauma, survival, healing, and reclaiming identity.",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
};

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
              "@id": "https://dianawallace.org/#person",
              name: "Diana Wallace",
              url: "https://dianawallace.org",
            },
            bookFormat: "https://schema.org/Paperback",
            isbn: "9798241723536",
            numberOfPages: 216,
            datePublished: "2025",
            description:
              "A poetry collection about trauma, survival, lost identity, emotional healing, reclaiming voice, and returning to yourself.",
            genre: [
              "Poetry",
              "Trauma and healing poetry",
              "Women's poetry",
              "Poetry about identity and survival",
            ],
            inLanguage: "en",
            publisher: "Independent",
            image: "https://dianawallace.org/covers/the-poet-who-forgot-her-name.jpg",
            isPartOf: {
              "@type": "BookSeries",
              name: "The Forgetting",
              position: 1,
            },
            potentialAction: {
              "@type": "BuyAction",
              target: "https://www.amazon.com/Poet-Who-Forgot-Her-Name/dp/B0GDVZ1WMC",
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
            mainEntity: [
              {
                "@type": "Question",
                name: "What is The Poet Who Forgot Her Name about?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is a poetry collection about trauma, survival, lost identity, finding your voice, emotional healing, and returning to yourself.",
                },
              },
              {
                "@type": "Question",
                name: "Is The Poet Who Forgot Her Name a book about healing from trauma?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The collection explores emotional survival, identity loss, silence, boundaries, self-worth, and reclaiming the self after trauma. It is literature, not a replacement for professional mental-health care.",
                },
              },
              {
                "@type": "Question",
                name: "Who wrote The Poet Who Forgot Her Name?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Poet and filmmaker Diana Wallace wrote The Poet Who Forgot Her Name: Poems for the Returning Self.",
                },
              },
            ],
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
              { "@type": "ListItem", position: 3, name: "The Poet Who Forgot Her Name", item: "https://dianawallace.org/books/the-poet-who-forgot-her-name" },
            ],
          }),
        }}
      />
      {/* ── Cover + Title ── */}
      <header className="book-page-top">
        <figure className="book-page-cover">
          <Image
            src="/covers/the-poet-who-forgot-her-name.jpg"
            alt="Cover of The Poet Who Forgot Her Name by Diana Wallace"
            width={220}
            height={330}
            priority
            style={{
              borderRadius: "4px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            }}
          />
        </figure>

        <h1>The Poet Who Forgot Her Name</h1>
        <p className="book-page-subtitle">Poems for the Returning Self</p>
        <p className="book-page-author">Diana Wallace · 2025</p>
      </header>

      {/* ── Positioning ── */}
      <section className="book-page-section">
        <h2>Poetry for Healing After Trauma</h2>
        <p>
          <strong>The Poet Who Forgot Her Name</strong> gives language to
          places trauma can leave unnamed: silence, dissociation,
          self-abandonment, grief, survival, and the search for a voice that
          still belongs to you. It is poetry for readers who survived by
          becoming smaller—and are ready to return to themselves.
        </p>
        <p>
          This book began in the dark. These poems were written to mark
          the path back with a light — written as evidence that a woman
          can disappear slowly, notice the disappearance, and choose to
          return. That the returning is not a single moment, but a
          practice. And that the light was never gone — only unclaimed.
        </p>
      </section>

      <section className="book-page-section">
        <h2>Who This Book Is For</h2>
        <p>
          Readers seeking trauma-healing poetry, poems about emotional abuse,
          boundaries, lost identity, grief, recovery, self-worth, and finding
          yourself again will recognize this territory. The book offers
          witness and companionship rather than a clinical program.
        </p>
        <p>
          It is especially for women returning to themselves after trauma,
          loss, controlling relationships, burnout, or years spent
          disappearing inside other people&apos;s needs.
        </p>
      </section>

      {/* ── Structure ── */}
      <section className="book-page-section">
        <h2>Structure</h2>
        <ol className="book-page-parts">
          <li>
            <strong>The Forgetting</strong> — How a woman learns to
            disappear. Silence as survival. Obedience mistaken for peace.
          </li>
          <li>
            <strong>The Search</strong> — The ache that becomes a compass.
            Moon, wind, stars, dust. Something in the dark still breathing.
          </li>
          <li>
            <strong>The Remembering</strong> — Moonlight as recognition.
            The name returns — not spoken, but remembered. The self that
            was never lost, only unclaimed.
          </li>
          <li>
            <strong>The Return</strong> — A woman who walks back into her
            own light. Not as triumph — as arrival.
          </li>
        </ol>
      </section>

      {/* ── Excerpt ── */}
      <section className="book-page-section">
        <h2>From the Prologue</h2>
        <blockquote className="book-page-excerpt">
          <p>
            The night found me<br />
            before I found myself.<br />
            She leaned close,<br />
            moon-breath trembling on my cheek,<br />
            and whispered, <em>Child…<br />
            you have been gone too long.</em>
          </p>
          <p>
            I tried to answer<br />
            but my voice was dust,<br />
            a forgotten language<br />
            tucked beneath my ribs.<br />
            So the stars spoke for me.<br />
            They pulsed like a broken heartbeat<br />
            trying to remember its rhythm.
          </p>
        </blockquote>
      </section>

      {/* ── Details ── */}
      <section className="book-page-section">
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
          {/* Series TBD */}
        </dl>
      </section>

      {/* ── Reader Response ── */}
      <section className="book-page-section">
        <h2>Reader Response</h2>
        <p>★★★★★ 5.0 — 8 reviews on Amazon</p>
        <p>#1 New Release in Women's Poetry</p>
      </section>

      {/* ── Purchase ── */}
      <section className="book-page-section">
        <h2>Get the Book</h2>
        <p>
          <a
            href="https://www.amazon.com/Poet-Who-Forgot-Her-Name/dp/B0GDVZ1WMC"
            target="_blank"
            rel="noreferrer"
          >
            Amazon →
          </a>
        </p>
      </section>

      <section className="book-page-section">
        <h2>Questions Readers Ask</h2>
        <h3>What is <em>The Poet Who Forgot Her Name</em> about?</h3>
        <p>
          It is a poetry collection about trauma, survival, lost identity,
          finding your voice, emotional healing, and returning to yourself.
        </p>
        <h3>Is it a trauma-recovery book?</h3>
        <p>
          It is literary poetry grounded in themes of trauma and emotional
          healing. It can offer recognition and language for difficult
          experiences, but it is not therapy or a substitute for professional
          care.
        </p>
        <h3>Who is Diana Wallace?</h3>
        <p>
          Diana Wallace is a poet, filmmaker, and author of The Forgetting
          trilogy. <em>The Poet Who Forgot Her Name</em> is Book I.
        </p>
        <p>
          <Link href="/guides/poetry-for-healing-after-trauma">
            Read: Poetry for Healing After Trauma →
          </Link>
        </p>
        <p>
          <Link href="/guides/poems-about-finding-yourself-again">
            Read: Poems About Finding Yourself Again →
          </Link>
        </p>
      </section>

      {/* ── Continue the Trilogy ── */}
      <section className="book-page-section">
        <h2>Continue the Trilogy</h2>
        <p>
          <Link href="/books/the-girl-who-grew-fangs">
            Read Book II: The Girl Who Grew Fangs →
          </Link>
        </p>
        <p>
          <Link href="/audio">
            Listen: Expect Nothing podcast →
          </Link>
        </p>
      </section>
    </article>
  );
}
