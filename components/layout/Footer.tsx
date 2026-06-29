import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { BeadDivider } from "@/components/ui/BeadDivider";

export function Footer() {
  return (
    <footer className="bg-deep text-parchment">
      <div className="mx-auto max-w-content px-6 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/logo.jpg"
                alt={site.name}
                width={52}
                height={52}
                className="rounded-full brightness-0 invert opacity-90"
              />
              <p className="font-display text-lg font-semibold leading-tight">{site.name}</p>
            </div>
            <p className="text-sm text-parchment/70 italic">{site.motto}</p>
            <p className="text-xs text-parchment/50 mt-1">{site.mottoTranslation}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/60">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/events" className="hover:text-coral">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-coral">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-coral">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/60">Reach us</p>
            <ul className="mt-3 space-y-2 text-sm text-parchment/80">
              <li>{site.contact.email}</li>
              {site.contact.phone && <li>{site.contact.phone}</li>}
              <li>{site.contact.address}</li>
            </ul>
          </div>
        </div>

        <BeadDivider className="my-8 text-parchment/40" />

        <p className="text-center text-xs text-parchment/50">
          &copy; {new Date().getFullYear()} {site.name}. Serving the Edo community of Central Texas since {site.foundedYear}.
        </p>
      </div>
    </footer>
  );
}
