import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function MissionVision() {
  return (
    <section className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal>
          <SectionLabel>What drives us</SectionLabel>
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold text-bronze">
                Mission
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                {site.missionStatement}
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-bronze">
                Vision
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                {site.visionStatement}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
