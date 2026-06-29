import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[420px] h-[60vh] max-h-[600px] flex items-center">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="Oba of Benin in traditional coral regalia"
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/65" />
      
      <div className="relative z-10 mx-auto w-full max-w-content px-6 sm:px-8 py-16 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral mb-4">
          {site.motto} — {site.mottoTranslation}
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.05] text-parchment sm:text-6xl">
          Edo culture,
          <br />
          kept alive in Austin.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-parchment/80">
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
    </section>
  );
}