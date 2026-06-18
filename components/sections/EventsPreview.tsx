import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { events } from "@/content/events";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function EventsPreview() {
  const upcoming = [...events]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 2);

  return (
    <section className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Upcoming</SectionLabel>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                What's next
              </h2>
            </div>
            <Button href="/events" variant="secondary">
              View all events
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {upcoming.map((event) => (
              <div
                key={event.slug}
                className="border border-bronze/20 bg-parchment-soft p-6"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-coral">
                  {formatDate(event.date)}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{event.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/80">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
