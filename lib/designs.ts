import type { ComponentType } from "react";
import { ManifestoDesign } from "@/components/designs/manifesto/ManifestoDesign";
import { InstrumentDesign } from "@/components/designs/instrument/InstrumentDesign";
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
    slug: "manifesto",
    name: "Manifesto",
    tradition: "Editorial · Long-form",
    pitch:
      "H4 as a thesis. Cream paper, deep ink, heavy serifs. Reads like a piece in The Atlantic.",
    swatch: "#f5f0e6",
    Component: ManifestoDesign,
  },
  {
    slug: "instrument",
    name: "Instrument",
    tradition: "Technical · Live data",
    pitch:
      "H4 demonstrates itself. Dark UI, electric accents, a learner model breathing in the hero.",
    swatch: "#0a0e1a",
    Component: InstrumentDesign,
  },
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
