import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://portfolio-sara-el-kantaoui.vercel.app";
  return [
    { url: base, lastModified: new Date() },
    ...projects.map((project) => ({
      url: `${base}/projets/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
