import type { ComponentType } from "react";

export type DesignMeta = {
  slug: string;
  name: string;
  tradition: string;
  pitch: string;
  swatch: string;
  Component: ComponentType;
};

export const designs: DesignMeta[] = [];

export function getDesign(slug: string): DesignMeta | undefined {
  return designs.find((d) => d.slug === slug);
}
