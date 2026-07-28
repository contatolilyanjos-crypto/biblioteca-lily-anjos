type Props = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CheckoutButton({
  href,
  label,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors sm:text-base";
  const styles =
    variant === "primary"
      ? "bg-(--color-green) text-white hover:bg-(--color-green-hover)"
      : "border border-(--color-gold)/50 bg-transparent text-(--color-title) hover:bg-(--color-card)";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
    </a>
  );
}
