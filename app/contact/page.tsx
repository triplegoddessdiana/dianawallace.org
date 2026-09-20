export const metadata = {
  title: "Contact",
  description:
    "Contact Diana Wallace, poet, for correspondence regarding the work.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <h1 data-redundant="true">Contact</h1>

      <p>
        For correspondence regarding the work, write Diana Wallace, poet:
        <br />
        <a href="mailto:dianawallacepoet@gmail.com">
          dianawallacepoet@gmail.com
        </a>
      </p>

      <p>
        For a reading or bookstore evening, write Diana Wallace, poet, at{" "}
        <a href="mailto:dianawallacepoet@gmail.com">
          dianawallacepoet@gmail.com
        </a>.
      </p>
    </>
  );
}
