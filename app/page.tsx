export const metadata = {
  title: "Diana Wallace — Poet, Author, Essayist",
  description:
    "Diana Wallace, poet. Author of The Forgetting trilogy — The Poet Who Forgot Her Name and The Girl Who Grew Fangs. Poetry books on forgetting, remembering, and returning.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <h1 data-redundant="true">Diana Wallace</h1>

      <figure className="home-image">
        <img
          src="/home/author-desk.webp"
          alt="A quiet writing desk with books, papers, and a candle beneath a crescent moon"
        />
      </figure>

      <div className="prose">
        <p>
          Diana Wallace, poet.
          <br />
          Author of <a href="/books">The Forgetting trilogy</a>.
        </p>

        <p>
          <a href="/books/the-poet-who-forgot-her-name">
            <em>The Poet Who Forgot Her Name</em>
          </a>
          {" · "}
          <a
            href="https://www.amazon.com/Poet-Who-Forgot-Her-Name/dp/B0GDVZ1WMC"
            target="_blank"
            rel="noreferrer"
          >
            Amazon
          </a>
          <br />
          <a href="/books/the-girl-who-grew-fangs">
            <em>The Girl Who Grew Fangs</em>
          </a>
          {" · "}
          <a
            href="https://www.amazon.com/gp/product/B0GP1N2ZCF"
            target="_blank"
            rel="noreferrer"
          >
            Amazon
          </a>
        </p>

        <p>
          Host of <a href="/audio">Expect Nothing</a>.
        </p>

        <p>
          <a href="/books">The books →</a>
          <br />
          <a href="/start">Start here →</a>
        </p>
      </div>
    </>
  );
}
