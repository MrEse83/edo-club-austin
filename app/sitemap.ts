import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.edoclubaustin.org"; // update once domain is final

  return ["", "/events", "/gallery", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
