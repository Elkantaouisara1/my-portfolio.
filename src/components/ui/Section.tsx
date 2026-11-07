import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "blush" | "powder";
};

const tones = {
  white: "bg-white",
  blush: "bg-blush",
  powder: "bg-powder/70",
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  tone = "white",
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", tones[tone], className)}>
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-semibold tracking-tight text-ink text-3xl sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">{intro}</p> : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
