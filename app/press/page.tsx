export const metadata = {
  title: "Press",
  description: "Press inquiries for Diana Wallace, author of The Forgetting trilogy.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  return (
    <>
      <h1 data-redundant="true">Press</h1>

      <div className="prose">
        <p>
          Diana Wallace is the author of The Forgetting trilogy — poetry books on
          forgetting, remembering, and returning — and the host of{" "}
          <a href="/audio">Expect Nothing</a>, a spoken audio series. Her essays
          on human agency, attention, and meaning are collected at{" "}
          <a href="/essays">dianawallace.org/essays</a>.
        </p>

        <p>
          Press inquiries:
          <br />
          <a href="mailto:press@dianawallace.org">press@dianawallace.org</a>
        </p>

        <p>
          For a reading or bookstore evening, write Diana Wallace, poet, at{" "}
          <a href="mailto:diana@aliholly.com">diana@aliholly.com</a>.
        </p>
      </div>
    </>
  );
}
