import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Diana Wallace is a poet. She is the author of The Poet Who Forgot Her Name, The Girl Who Grew Fangs, and Year of the Fire Horse, coming. She lives with her husband and three daughters.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>

      <figure className="about-signature">
        <Image
          src="/about/diana-wallace-signature.png"
          alt="Signature of Diana Wallace, poet"
          width={492}
          height={240}
        />
      </figure>

      <div className="prose">
        <p>I&apos;m Diana Wallace. I write poems.</p>

        <p>
          The books are{" "}
          <Link href="/books/the-poet-who-forgot-her-name">
            <em>The Poet Who Forgot Her Name</em>
          </Link>
          ,{" "}
          <Link href="/books/the-girl-who-grew-fangs">
            <em>The Girl Who Grew Fangs</em>
          </Link>
          , and{" "}
          <Link href="/books/year-of-the-fire-horse">
            <em>Year of the Fire Horse</em>
          </Link>
          , which is still on its way.
        </p>

        <p>I live with my husband and our three daughters.</p>

        <p>
          If you would like a reading — Logan St, or a bookstore evening —{" "}
          <Link href="/contact#reading">write to me</Link>.
        </p>

        <p>
          Some of the work is spoken aloud. Those pieces are{" "}
          <Link href="/audio">Expect Nothing</Link>.
        </p>

        <p className="quiet">
          Before the poems, I kept a visual practice about humans and other
          living things. That work remains as{" "}
          <Link href="/need-more-wildlife">Need More Wildlife</Link>.
        </p>

        <p className="quiet">
          I also founded{" "}
          <a href="https://aliholly.com" target="_blank" rel="noreferrer">
            Aliholly
          </a>
          .
        </p>
      </div>
    </>
  );
}
