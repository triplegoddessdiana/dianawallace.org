export const metadata = {
  title: "About Diana Wallace — Poet and Author",
  description:
    "Diana Wallace is the author of The Forgetting trilogy — The Poet Who Forgot Her Name and The Girl Who Grew Fangs — and host of the Expect Nothing podcast.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="page about">
      {/* JSON-LD for entity + authorship (invisible) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Diana Wallace",
            url: "https://www.dianawallace.org",
            sameAs: ["https://x.com/DianaWallace369"],
            jobTitle: "Author",
            works: [
              {
                "@type": "Book",
                name: "The Poet Who Forgot Her Name",
                author: { "@type": "Person", name: "Diana Wallace" },
              },
            ],
          }),
        }}
      />

      <h1 data-redundant="true">About</h1>

      <figure className="about-photo">
        <img
          src="/about/diana-wallace.jpg"
          alt="Diana Wallace"
        />
      </figure>

      <figure className="about-signature">
        <img
          src="/about/diana-wallace-signature.png"
          alt="Diana Wallace signature"
        />
      </figure>

      <div className="prose">
        <p>I'm Diana Wallace.</p>

        <p>
          I&apos;m the author of{" "}
          <a href="/books/the-poet-who-forgot-her-name">
            <em>The Poet Who Forgot Her Name</em>
          </a>{" "}
          and{" "}
          <a href="/books/the-girl-who-grew-fangs">
            <em>The Girl Who Grew Fangs</em>
          </a>
          , the first two books of{" "}
          <a href="/books">The Forgetting trilogy</a>. I also host the{" "}
          <a href="/audio">Expect Nothing</a> podcast.
        </p>

        <p>
          Before working primarily in language, I kept a visual practice focused
          on the relationship between humans and non-human life. That work
          remains collected as <a href="/need-more-wildlife">Need More Wildlife</a>.
        </p>
      </div>
    </main>
  );
}