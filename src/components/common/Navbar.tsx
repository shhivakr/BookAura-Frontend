"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center gap-4 lg:h-20">
          <div className="shrink-0">
            <Logo />
          </div>

          <nav
            aria-label="Main"
            className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          >
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  data-active={active}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground hover:shadow-sm focus-visible:bg-muted focus-visible:text-foreground",
                    "data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:shadow-sm",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Search coming soon"
              title="Search coming soon"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  className:
                    "rounded-full border border-border/70 bg-white text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                }),
              )}
            >
              <Search className="size-4" />
            </button>

            <Link
              href="/login"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "rounded-full border-border/70 bg-white px-4",
                }),
              )}
            >
              Login
            </Link>

            <Link
              href="/register"
              className={cn(
                buttonVariants({
                  variant: "default",
                  className: "rounded-full px-4 shadow-sm",
                }),
              )}
            >
              Register
            </Link>
          </div>

          <div className="ml-auto flex items-center lg:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
