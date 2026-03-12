export const metadata = {
  title: "Diana Wallace — Poet, Author, Essayist",
  description:
    "Diana Wallace is the author of The Forgetting trilogy — poetry books on forgetting, remembering, and returning. Host of the Expect Nothing podcast. Essays on human agency and meaning.",
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
          Poet, author, essayist.
          <br />
          Oriented toward independent thought.
        </p>

        <p>
          Author of <a href="/books">The Forgetting trilogy</a>.
          <br />
          Host of <a href="/audio">Expect Nothing</a>.
        </p>

        <p>
          <a href="/start">Start here →</a>
        </p>
      </div>
    </>
  );
}
