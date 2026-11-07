import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-bordeaux text-white hover:bg-[#3c4736] shadow-soft focus-visible:outline-bordeaux",
  secondary:
    "bg-white text-ink border border-line hover:border-bordeaux/40 hover:bg-blush focus-visible:outline-bordeaux",
  ghost:
    "bg-transparent text-bordeaux hover:bg-powder/60 focus-visible:outline-bordeaux",
};

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & {
  href: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, download, target, rel, ...rest } = props;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal || download) {
      return (
        <a
          href={href}
          className={classes}
          download={download}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
