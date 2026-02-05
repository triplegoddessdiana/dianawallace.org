export const metadata = {
  title: "Diana Wallace",
};

export default function HomePage() {
  return (
    <>
      <h1 data-redundant="true">Diana Wallace</h1>

      <div className="prose">
        <p>
          A canonical archive of written, spoken, and declared work.
          <br />
          Oriented toward sovereign thought.
        </p>

        <p>
          <a href="/start">Start here</a>
        </p>
      </div>
    </>
  );
}