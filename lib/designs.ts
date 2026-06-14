import type { ComponentType } from "react";
import { AtlasDesign } from "@/components/designs/atlas/AtlasDesign";

export type DesignMeta = {
  slug: string;
  name: string;
  tradition: string;
  pitch: string;
  swatch: string;
  Component: ComponentType;
};

export const designs: DesignMeta[] = [
  {
    slug: "atlas",
    name: "Atlas",
    tradition: "Cartographic · Aspirational",
    pitch:
      "Opportunity as territory. Parchment and ink-blue, a map of where students might thrive.",
    swatch: "#e8dcc4",
    Component: AtlasDesign,
  },
];

export function getDesign(slug: string): DesignMeta | undefined {
  return designs.find((d) => d.slug === slug);
}
