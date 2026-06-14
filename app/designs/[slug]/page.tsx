import { notFound } from "next/navigation";
import { designs, getDesign } from "@/lib/designs";
import { DesignSwitcher } from "@/components/shared/DesignSwitcher";

export function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export default async function DesignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const design = getDesign(slug);
  if (!design) notFound();

  const { Component } = design;
  const switcherDesigns = designs.map((d) => ({ slug: d.slug, name: d.name }));

  return (
    <>
      <DesignSwitcher designs={switcherDesigns} current={slug} />
      <Component />
    </>
  );
}
