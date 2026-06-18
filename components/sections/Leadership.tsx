import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { leadership } from "@/content/leadership";

export function Leadership() {
  return (
    <section className="bg-parchment-soft py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal>
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            The executive team
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {leadership.map((leader) => (
              <div key={leader.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden rounded-sm border border-bronze/20 bg-parchment">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-base font-semibold text-ink">
                  {leader.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-wide text-bronze">
                  {leader.title}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
