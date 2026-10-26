"use client";

import { useEffect } from "react";

/* x%, y% within the sky, bright, glint, delay seconds, duration seconds */
const STARS: Array<[number, number, boolean, boolean, number, number]> = [
  [6, 6, false, false, 0.2, 7.4],
  [11, 15, false, true, 1.4, 11],
  [16, 4, true, false, 0.6, 6.8],
  [22, 12, false, false, 2.1, 8.2],
  [27, 7, false, true, 3.4, 12],
  [33, 3, true, false, 0.9, 7.1],
  [39, 16, false, false, 1.8, 8.6],
  [46, 6, false, true, 4.2, 10.5],
  [52, 11, true, false, 0.4, 6.4],
  [58, 2, false, false, 2.6, 9],
  [63, 14, false, true, 5.1, 13],
  [69, 5, true, false, 1.1, 7.6],
  [74, 18, false, false, 3.2, 8.8],
  [80, 8, false, true, 0.7, 11.4],
  [86, 13, true, false, 2.4, 6.9],
  [92, 4, false, false, 4.6, 9.2],
  [14, 21, false, false, 1.6, 8.4],
  [48, 20, false, true, 3.8, 12.6],
  [71, 22, false, false, 2.2, 7.8],
  [88, 19, false, false, 5.4, 9.6],
];

export default function World() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let frame = 0;
    let px = 0;
    let py = 0;
    let scroll = 0;

    const paint = () => {
      frame = 0;
      root.style.setProperty("--px", px.toFixed(4));
      root.style.setProperty("--py", py.toFixed(4));
      root.style.setProperty("--scroll", scroll.toFixed(1));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onMove = (event: PointerEvent) => {
      px = event.clientX / window.innerWidth - 0.5;
      py = event.clientY / window.innerHeight - 0.5;
      schedule();
    };

    const onScroll = () => {
      scroll = window.scrollY;
      schedule();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="world" aria-hidden="true">
      <div className="world-layer world-base" />
      <div className="world-layer world-sky" />
      <div className="world-layer world-trees" />
      <div className="world-mist" />
      <div className="world-veil" />
      <div className="world-glow" />
      <div className="world-heart" />
      <div className="world-stars">
        {STARS.map(([x, y, bright, glint, delay, duration]) => (
          <span
            key={`${x}-${y}`}
            className={
              glint ? "star star-glint" : bright ? "star star-bright" : "star"
            }
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        ))}
      </div>
      <div className="world-layer world-flowers" />
      <div className="world-falls">
        <span className="falls-glow" />
        <span className="falls-stream" />
        <span className="falls-stream falls-stream-thin" />
        <span className="falls-mist" />
      </div>
      <svg
        className="world-river"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
      >
        <path
          className="river-bed"
          d="M 430 8 C 390 70, 300 50, 230 130 C 150 220, 280 240, 190 320 C 80 410, 520 400, 920 372 C 1120 350, 1180 210, 1120 70"
        />
        <path
          className="river-bed river-bed-far"
          d="M 250 180 C 140 250, 220 310, 160 380 C 360 430, 780 400, 1080 340"
        />
        <path
          className="river-current"
          d="M 430 8 C 390 70, 300 50, 230 130 C 150 220, 280 240, 190 320 C 80 410, 520 400, 920 372 C 1120 350, 1180 210, 1120 70"
        />
        <path
          className="river-current river-current-slow"
          d="M 250 180 C 140 250, 220 310, 160 380 C 360 430, 780 400, 1080 340"
        />
      </svg>
    </div>
  );
}
