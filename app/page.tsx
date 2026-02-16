export const metadata = {
  title: "Diana Wallace",
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
          A canonical archive of written, spoken, and declared work.
          <br />
          Oriented toward independent thought.
        </p>

        <p>
          <a href="/start">Start here</a>
        </p>
      </div>
    </>
  );
}
