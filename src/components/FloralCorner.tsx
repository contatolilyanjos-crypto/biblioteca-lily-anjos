type Props = {
  className?: string;
  flip?: boolean;
};

export default function FloralCorner({ className = "", flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 160 160"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <g fill="none" stroke="var(--color-olive)" strokeWidth="1.2" opacity="0.35">
        <path d="M4 4c30 4 55 14 68 34 10 16 12 34 6 52" />
        <path d="M4 4c14 26 20 50 16 74" />
        <path d="M4 4c26 10 46 24 58 44" />
      </g>
      <g fill="var(--color-gold)" opacity="0.3">
        <circle cx="8" cy="8" r="3" />
        <circle cx="34" cy="18" r="2" />
        <circle cx="58" cy="34" r="2" />
      </g>
    </svg>
  );
}
