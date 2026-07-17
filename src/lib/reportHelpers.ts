import { Trait } from "@/data/traits";

export function getStrengths(
  traits: Record<Trait, number>
) {
  const strengths: string[] = [];

  if (traits.vision >= 3)
    strengths.push(
      "You naturally think about the future and inspire direction."
    );

  if (traits.strategy >= 3)
    strengths.push(
      "You prefer planning before acting."
    );

  if (traits.courage >= 3)
    strengths.push(
      "You stay confident during difficult situations."
    );

  if (traits.justice >= 3)
    strengths.push(
      "You value fairness and ethical decisions."
    );

  if (traits.unity >= 3)
    strengths.push(
      "You enjoy bringing people together."
    );

  if (traits.innovation >= 3)
    strengths.push(
      "You like creative problem solving."
    );

  if (traits.wisdom >= 3)
    strengths.push(
      "You carefully analyze situations before acting."
    );

  if (traits.service >= 3)
    strengths.push(
      "You enjoy helping and supporting others."
    );

  return strengths.slice(0, 4);
}

export function getGrowthAreas(
  traits: Record<Trait, number>
) {
  const growth: string[] = [];

  if (traits.vision < 3)
    growth.push("Develop a stronger long-term vision.");

  if (traits.strategy < 3)
    growth.push("Practice structured planning.");

  if (traits.courage < 3)
    growth.push("Build confidence during uncertainty.");

  if (traits.justice < 3)
    growth.push("Consider multiple perspectives before deciding.");

  if (traits.unity < 3)
    growth.push("Improve collaboration and teamwork.");

  if (traits.innovation < 3)
    growth.push("Experiment with creative solutions.");

  if (traits.wisdom < 3)
    growth.push("Spend more time evaluating decisions.");

  if (traits.service < 3)
    growth.push("Look for opportunities to support others.");

  return growth.slice(0, 4);
}