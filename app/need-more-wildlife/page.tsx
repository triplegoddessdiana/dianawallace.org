import { artworks } from "./gallery-data";

export const metadata = {
  title: "Need More Wildlife",
  alternates: { canonical: "/need-more-wildlife" },
};

export default function NeedMoreWildlifePage() {
  return (
    <>
      <h1 data-redundant="true">Need More Wildlife</h1>

      <div className="prose">
        <p>
          A visual archive: work focused on the relationship between humans and
          non-human life.
        </p>
      </div>

      <figure className="nmw-photo">
        <img
          src="/need-more-wildlife/me-and-danny.jpg"
          alt="Diana Wallace holding a rabbit"
        />
      </figure>

      <div className="prose">
        <p>
          This work predates the writing here. It remains collected as{" "}
          <strong>Need More Wildlife</strong>.
        </p>
      </div>

      <div className="nmw-gallery-wrap">
        <div className="nmw-gallery">
          {artworks.map((art) => (
            <figure key={art.localPath} className="nmw-card">
              <div className="nmw-card-img">
                <img
                  src={art.localPath}
                  alt={art.title}
                  loading="lazy"
                />
              </div>
              <figcaption className="nmw-card-info">
                <span className="nmw-card-title">{art.title}</span>
                <span className="nmw-card-meta">
                  {art.medium}
                  {art.size ? ` · ${art.size}` : ""}
                </span>
                {art.status === "SOLD" && (
                  <span className="nmw-card-sold">Sold</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
