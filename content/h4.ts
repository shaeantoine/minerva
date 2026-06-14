export type H4Content = {
  name: string;
  tagline: string;
  pillars: {
    mission: string;
    vision: string;
    purpose: string;
  };
  overview: {
    paragraphs: string[];
  };
  cta: {
    label: string;
    href: string;
  };
};

export const h4: H4Content = {
  name: "H4",
  tagline:
    "Transforming active learning into dynamic models of student capability.",
  pillars: {
    mission:
      "To give every student adaptive instruction that learns how they reason, adapt, and grow.",
    vision:
      "A world where opportunity is distributed based on a dynamic understanding of human capability, not static snapshots of historical performance.",
    purpose:
      "To capture learning as the richest source of capability data, ensuring every student has an actionable blueprint to discover where they will thrive.",
  },
  overview: {
    paragraphs: [
      "The way we distribute opportunity to young people is broken. Today, life-changing decisions are often made using static snapshots of performance: grades, test scores, and credentials. These signals tell us what a student knows, but reveal surprisingly little about how they learn.",
      "H4 starts from a simple belief: learning is the richest source of capability data ever created. By observing students as they acquire new concepts, overcome challenges, adapt to feedback, and transfer knowledge across domains, we can build a far richer understanding of human potential than traditional assessments allow.",
      "Partnering with educators of students aged 13–16, H4 delivers a fully adaptive learning platform that continuously adjusts instruction to each student's unique learning patterns. As students learn, H4 generates dynamic Learner Models that capture how they reason, adapt, persist, and synthesize information over time.",
      "These models become actionable blueprints for students, parents, and educators to reveal strengths, identify opportunities, and help every learner understand where they are most likely to thrive.",
    ],
  },
  cta: {
    label: "Get in touch",
    href: "mailto:hello@h4.example",
  },
};
