import Link from "next/link";
import { site } from "@/content/site";
import { BeadDivider } from "@/components/ui/BeadDivider";

export function Footer() {
  return (
    <footer className="bg-deep text-parchment">
      <div className="mx-auto max-w-content px-6 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-parchment/70">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/60">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/events" className="hover:text-coral">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-coral">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-coral">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/60">
              Reach us
            </p>
            <ul className="mt-3 space-y-2 text-sm text-parchment/80">
              <li>{site.contact.email}</li>
              {site.contact.phone && <li>{site.contact.phone}</li>}
              <li>{site.contact.address}</li>
            </ul>
          </div>
        </div>

        <BeadDivider className="my-8 text-parchment/40" />

        <p className="text-center text-xs text-parchment/50">
          © {new Date().getFullYear()} {site.name}. Serving the Edo
          community of Central Texas since {site.foundedYear}.
        </p>
      </div>
    </footer>
  );
}
