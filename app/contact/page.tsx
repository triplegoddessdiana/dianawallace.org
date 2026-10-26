import Link from "next/link";
import { POET_EMAIL, PRESS_EMAIL } from "@/app/lib/books";

export const metadata = {
  title: "Contact",
  description:
    "Write Diana Wallace for a reading — Logan St or a bookstore evening — at dianawallacepoet@gmail.com. Press: press@dianawallace.org.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p className="lede">For the poems, and for a night of them read aloud.</p>

      <section className="contact-block" id="reading">
        <h2>A reading</h2>
        <p>
          Logan St, or a bookstore evening. Write and tell me when, and what
          the room is.
        </p>
        <a className="btn" href={`mailto:${POET_EMAIL}`}>
          {POET_EMAIL}
        </a>
      </section>

      <section className="contact-block">
        <h2>Press</h2>
        <p>
          <a href={`mailto:${PRESS_EMAIL}`}>{PRESS_EMAIL}</a>
        </p>
        <p>
          <Link href="/press">Press notes</Link>
        </p>
      </section>

      <section className="contact-block">
        <h2>Other correspondence</h2>
        <p>
          For anything else about the work, write the poet at{" "}
          <a href={`mailto:${POET_EMAIL}`}>{POET_EMAIL}</a>.
        </p>
      </section>
    </>
  );
}
