import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="BookAura home"
      className={cn(
        "inline-flex flex-col items-start justify-center gap-0.5 text-left font-sans leading-none transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span className="text-lg font-semibold tracking-tight text-foreground">
        BookAura
      </span>
      <span className="text-xs font-medium tracking-wide text-muted-foreground">
        Discover. Book. Experience.
      </span>
    </Link>
  );
}
