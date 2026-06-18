import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Edo Club of Austin for membership questions, event inquiries, or anything else.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-16 sm:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-ink/80">
              Questions about membership, events, or the club in general?
              Send us a message and someone from the executive will get back
              to you.
            </p>

            <dl className="mt-10 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-bronze">
                  Email
                </dt>
                <dd className="mt-1 text-ink/80">{site.contact.email}</dd>
              </div>
              {site.contact.phone && (
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-bronze">
                    Phone
                  </dt>
                  <dd className="mt-1 text-ink/80">{site.contact.phone}</dd>
                </div>
              )}
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-bronze">
                  Based in
                </dt>
                <dd className="mt-1 text-ink/80">{site.contact.address}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-bronze">
                  Meetings
                </dt>
                <dd className="mt-1 text-ink/80">{site.meetingSchedule}</dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
