import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { events } from "@/content/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming gatherings, meetings, and convention announcements from Edo Club of Austin.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventsPage() {
  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionLabel>Events</SectionLabel>
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          What's happening
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/80">
          Monthly meetings, cultural celebrations, and announcements from the
          national convention, all in one place.
        </p>

        <div className="mt-14 space-y-6">
          {sorted.map((event) => (
            <article
              key={event.slug}
              className="grid gap-6 border border-bronze/20 bg-parchment-soft p-6 sm:grid-cols-[1fr_2fr] sm:p-8"
            >
              {event.flyer ? (
                <div className="relative aspect-[4/3] overflow-hidden border border-bronze/20">
                  <Image
                    src={event.flyer}
                    alt={`${event.title} flyer`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-bronze/30 font-mono text-xs uppercase text-bronze/60">
                  Flyer coming soon
                </div>
              )}

              <div>
                {event.isConvention && (
                  <span className="font-mono text-xs uppercase tracking-wide text-coral">
                    National Convention
                  </span>
                )}
                <h2 className="mt-1 font-display text-2xl font-semibold text-ink">
                  {event.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-bronze">
                  {formatDate(event.date)}
                  {event.time ? `, ${event.time}` : ""}
                </p>
                <p className="mt-1 text-sm text-ink/70">{event.location}</p>
                <p className="mt-4 leading-relaxed text-ink/80">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
