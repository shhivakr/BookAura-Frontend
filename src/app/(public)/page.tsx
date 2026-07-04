import Link from "next/link";

import { cn } from "@/lib/utils";
import { Navbar } from "@/src/components/common/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { Footer } from "@/src/components/common/Footer";
import { Container } from "../../components/common/Container";

export default function PublicHomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                BookAura
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Discover, book, and manage unforgettable events with confidence.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                A premium event management platform for modern audiences,
                organizers, and teams who want a clean, reliable booking
                experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/events"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                      className: "rounded-full px-5 shadow-sm",
                    }),
                  )}
                >
                  Explore Events
                </Link>
                <Link
                  href="/register"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className: "rounded-full border-border/70 px-5",
                    }),
                  )}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-border/60 bg-muted/20 py-16 sm:py-20">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Curated discovery",
                  text: "Highlight the most relevant events with a polished browsing experience.",
                },
                {
                  title: "Smooth booking",
                  text: "Move from discovery to checkout with a clean, trustworthy flow.",
                },
                {
                  title: "Built for scale",
                  text: "Flexible foundations for future organizers, dashboards, and analytics.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <h2 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
