import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { History } from "@/components/sections/History";
import { MissionVision } from "@/components/sections/MissionVision";
import { Leadership } from "@/components/sections/Leadership";
import { AustinDivider } from "@/components/sections/AustinDivider";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <History />
      <MissionVision />
      <Leadership />
      <AustinDivider />
      <EventsPreview />
      <GalleryPreview />
      <ContactSection />
    </>
  );
}