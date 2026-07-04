import type { ReactNode } from "react";

import Link from "next/link";


import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Logo } from "./Logo";
import {
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Categories", href: "/events" },
  { label: "Featured Events", href: "/events" },
] as const;

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "/contact" },
] as const;

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "FAQs", href: "#" },
] as const;

const socialLinks = [
  { label: "GitHub", href: "#", icon: GithubIcon },
  { label: "LinkedIn", href: "#", icon: Linkedin01Icon },
  { label: "Twitter (X)", href: "#", icon: NewTwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
] as const;

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground"
    >
      {children}
    </Link>
  );
}

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-border bg-background text-foreground",
        className,
      )}
    >
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="max-w-sm lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Discover, book, and manage unforgettable events with BookAura.
            </p>
          </div>

          <nav aria-label="Quick Links" className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-foreground">Quick Links</h2>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-foreground">Company</h2>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support" className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-foreground">Support</h2>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-foreground">Connect</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-muted hover:text-foreground focus-visible:-translate-y-0.5 focus-visible:border-primary/30 focus-visible:bg-muted focus-visible:text-foreground",
                    )}
                  >
                    <HugeiconsIcon icon={icon} className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 BookAura. All rights reserved.</p>
            <p>Made with ❤️ using Next.js</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
