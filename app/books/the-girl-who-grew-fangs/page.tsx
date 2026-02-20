import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Girl Who Grew Fangs",
  description:
    "A Book of Remembering After the Fall Into Shadow — 53 poems in four parts by Diana Wallace. Book II of The Forgetting trilogy.",
  openGraph: {
    title: "The Girl Who Grew Fangs · Diana Wallace",
    description:
      "But the soul, like the wolf, does not forget its own nature. Book II of The Forgetting trilogy.",
    images: ["/covers/the-girl-who-grew-fangs.jpg"],
  },
};

export default function FangsPage() {
  return (
    <article className="book-page">
      {/* ── Cover + Title ── */}
      <header className="book-page-top">
        <figure className="book-page-cover">
          <Image
            src="/covers/the-girl-who-grew-fangs.jpg"
            alt="Cover of The Girl Who Grew Fangs by Diana Wallace"
            width={220}
            height={330}
            priority
            style={{
              borderRadius: "4px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            }}
          />
        </figure>

        <h1>The Girl Who Grew Fangs</h1>
        <p className="book-page-subtitle">
          A Book of Remembering After the Fall Into Shadow
        </p>
        <p className="book-page-author">Diana Wallace · 2026</p>
      </header>

      {/* ── Tagline ── */}
      <section className="book-page-section">
        <blockquote className="book-page-excerpt">
          <p>
            <em>
              But the soul, like the wolf, does not forget its own nature.
            </em>
          </p>
        </blockquote>
      </section>

      {/* ── Positioning ── */}
      <section className="book-page-section">
        <p>
          Book II of <strong>The Forgetting</strong> trilogy. Where{" "}
          <em>The Poet Who Forgot Her Name</em> traced a moon arc —
          forgetting and remembering by moonlight — this book follows the
          feral arc: the descent into shadow, the growl that becomes a
          prayer, and the long clawing return to selfhood.
        </p>
        <p>
          These 53 poems move through darkening, turning, integration, and
          return. They are for anyone who has fallen — and found teeth
          where there used to be silence.
        </p>
      </section>

      {/* ── Structure ── */}
      <section className="book-page-section">
        <h2>Structure</h2>
        <ol className="book-page-parts">
          <li>
            <strong>Darkening</strong> — The fall into shadow. The world
            narrows. The familiar self dissolves.
          </li>
          <li>
            <strong>Turning</strong> — Something feral stirs. The body
            remembers what the mind forgot. Instinct returns before
            language does.
          </li>
          <li>
            <strong>Integration</strong> — The wolf and the woman meet.
            Neither is destroyed. A harder, wilder wholeness takes shape.
          </li>
          <li>
            <strong>Return</strong> — She walks back — not tame, not
            broken. Carrying everything. Fangs and all.
          </li>
        </ol>
      </section>

      {/* ── Details ── */}
      <section className="book-page-section">
        <h2>Details</h2>
        <dl className="book-page-details">
          <div>
            <dt>Series</dt>
            <dd>The Forgetting · Book II (Feral Arc)</dd>
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
        </dl>
      </section>

      {/* ── Purchase ── */}
      <section className="book-page-section">
        <h2>Get the Book</h2>
        <p>Paperback $16.99&ensp;·&ensp;eBook $9.99</p>
        <p>
          <a
            href="https://www.amazon.com/dp/9798994577424"
            target="_blank"
            rel="noreferrer"
          >
            Amazon →
          </a>
        </p>
      </section>
    </article>
  );
}
