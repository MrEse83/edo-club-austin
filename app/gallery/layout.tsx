import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Edo Club of Austin meetings, cultural celebrations, conventions, and community gatherings.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
