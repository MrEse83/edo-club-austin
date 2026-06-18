import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal>
          <div className="grid items-center gap-12 sm:grid-cols-2">
            <div>
              <SectionLabel>Join us</SectionLabel>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Curious about membership?
              </h2>
              <p className="mt-4 max-w-md text-lg text-ink/80">
                Whether you're Edo, married into the community, or just
                interested in learning more, reach out. We'd love to hear
                from you.
              </p>
              <p className="mt-6 text-sm text-ink/70">{site.contact.email}</p>
            </div>
            <div className="flex justify-start sm:justify-end">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
