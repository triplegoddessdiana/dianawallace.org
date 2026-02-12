import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Poet Who Forgot Her Name",
  description:
    "A poetry collection in four movements by Diana Wallace — forgetting, searching, remembering, returning. Poems for the Returning Self.",
  openGraph: {
    title: "The Poet Who Forgot Her Name · Diana Wallace",
    description:
      "Poems for the Returning Self. A collection in four movements — forgetting, searching, remembering, returning.",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
};

export default function PoetPage() {
  return (
    <article className="book-page">
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
        <p>
          This book began in the dark. These poems were written to mark
          the path back with a light — written as evidence that a woman
          can disappear slowly, notice the disappearance, and choose to
          return. That the returning is not a single moment, but a
          practice. And that the light was never gone — only unclaimed.
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
            <dd>978-8-241-72353-6</dd>
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

      {/* ── Awards ── */}
      <section className="book-page-section">
        <h2>Award Consideration — 2026</h2>
        <ul className="book-page-awards">
          <li>Eric Hoffer Book Award</li>
          <li>Nautilus Book Awards — Poetry</li>
          <li>Nautilus Book Awards — Heroic</li>
        </ul>
      </section>

      {/* ── Purchase ── */}
      <section className="book-page-section">
        <h2>Get the Book</h2>
        <p>
          <a
            href="https://a.co/d/0hMPmaNv"
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
