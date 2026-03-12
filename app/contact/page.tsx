export const metadata = {
  title: "Contact",
  description: "Contact Diana Wallace for correspondence regarding the work.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <h1 data-redundant="true">Contact</h1>

      <p>
        For correspondence regarding the work:
        <br />
        <a href="mailto:diana@aliholly.com">
          diana@aliholly.com
        </a>
      </p>
    </>
  );
}
