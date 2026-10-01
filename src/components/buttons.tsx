import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200";

const VARIANTS = {
  primary:
    "bg-accent text-bg hover:bg-accent-strong focus-visible:outline-offset-4",
  secondary:
    "border border-line-strong bg-surface/60 text-fg hover:border-accent/60 hover:bg-surface-2",
  ghost:
    "border border-line text-muted hover:border-accent/60 hover:text-fg",
} as const;

type Variant = keyof typeof VARIANTS;
type Size = "md" | "lg";

const SIZES: Record<Size, string> = {
  md: "h-10 px-5",
  lg: "h-12 px-6",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonLinkProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, keyof CommonProps | "href"> & {
    href: string;
  };

type AnchorLinkProps = CommonProps &
  Omit<React.ComponentProps<"a">, keyof CommonProps | "href"> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<React.ComponentProps<"button">, keyof CommonProps>;

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function AnchorLink({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: AnchorLinkProps) {
  return (
    <a
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}