import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-parchment">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-8 sm:py-32">
        <SectionLabel>
          {`Serving ${site.city} since ${site.foundedYear}`}
        </SectionLabel>

        <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
          Edo culture,
          <br />
          kept alive in Austin.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink/80">
          {site.missionStatement}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
          <Button href="#about" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>

      {/* Subtle background texture — a faint repeating bead pattern, not a literal photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #8B4A2B 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
    </section>
  );
}
