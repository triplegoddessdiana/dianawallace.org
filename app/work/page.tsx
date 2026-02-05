export const metadata = {
  title: "The Work",
};

export default function WorkPage() {
  return (
    <>
      <h1 data-redundant="true">The Work</h1>

      <div className="prose">
        <p>
          This site houses a single body of work composed of essays, definitions,
          and philosophical texts.
        </p>

        <p>The work is organized by coherence.</p>

        <p>
          Individual pieces may originate elsewhere, but only those that stand
          independently are included here.
        </p>

        <p>Nothing on this site is provisional.</p>
      </div>
    </>
  );
}
