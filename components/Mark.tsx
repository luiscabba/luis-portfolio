/**
 * The site mark: an eye cupped by two arcs. Strokes inherit `currentColor`,
 * so it takes the colour of whatever it sits in. The same geometry, on a
 * rounded paper tile, is the favicon in `app/icon.svg` - keep the two in step.
 */
export default function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      focusable="false"
      className={className}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M10 24a25 25 0 0 1 14-14" />
        <path d="M54 40a25 25 0 0 1-14 14" />
      </g>
      <ellipse
        cx="32"
        cy="32"
        rx="17"
        ry="11"
        stroke="currentColor"
        strokeWidth="4.2"
      />
      <circle cx="32" cy="32" r="5.5" fill="currentColor" />
    </svg>
  );
}
