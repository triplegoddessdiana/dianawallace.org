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
      </div>
    </main>
  );
}
