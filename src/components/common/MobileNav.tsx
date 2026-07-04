"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            type="button"
            aria-label="Open navigation menu"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-white text-foreground transition-all duration-200 hover:bg-muted/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
            )}
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[88vw] bg-white sm:max-w-sm">
        <SheetHeader className="border-b border-border/60 px-6 py-5">
          <SheetTitle className="sr-only">BookAura navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Main navigation for the BookAura website.
          </SheetDescription>
          <Link href="/" className="inline-flex flex-col items-start">
            <span className="text-base font-semibold tracking-tight text-foreground">
              BookAura
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Discover. Book. Experience.
            </span>
          </Link>
        </SheetHeader>

        <nav className="flex flex-1 flex-col gap-2 px-4 py-4" aria-label="Mobile">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <SheetClose
                key={item.href}
                render={
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    data-active={active}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground",
                      "data-[active=true]:bg-primary/10 data-[active=true]:text-primary",
                    )}
                  />
                }
              >
                {item.label}
              </SheetClose>
            );
          })}

          <div className="mt-4 grid gap-3 border-t border-border/60 pt-4">
            <button
              type="button"
              aria-label="Search coming soon"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full justify-start gap-2 border-border/70 bg-white text-foreground hover:bg-muted/60",
                }),
              )}
            >
              <Search className="size-4" />
              Search
            </button>

            <SheetClose
              render={
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className: "w-full border-border/70 bg-white",
                    }),
                  )}
                />
              }
            >
              Login
            </SheetClose>

            <SheetClose
              render={
                <Link
                  href="/register"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                      className: "w-full shadow-sm",
                    }),
                  )}
                />
              }
            >
              Register
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
