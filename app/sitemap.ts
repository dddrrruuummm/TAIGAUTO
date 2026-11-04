import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/showcase", "/contact", "/privacy-policy", "/terms"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(route === "/terms" ? "2026-10-16" : "2026-11-04"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
