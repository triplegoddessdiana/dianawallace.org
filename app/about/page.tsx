export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="page about">
      <h1 data-redundant="true">About</h1>

      <figure className="about-signature">
        <img
          src="/about/diana-wallace-signature.png"
          alt="Diana Wallace signature"
        />
      </figure>

      <div className="prose">
        <p>I’m Diana Wallace.</p>

        <p>
          Before working primarily in language, I kept a visual practice focused
          on the relationship between humans and non-human life.
          <br />
          That work remains collected as{" "}
          <a
            href="https://www.needmorewildlife.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need More Wildlife
          </a>.
        </p>
      </div>
    </main>
  );
}