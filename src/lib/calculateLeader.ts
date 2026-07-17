import { answerTraitMap } from "@/data/scoring";
import { leaders, Trait } from "@/data/traits";

export function calculateLeader(
  answers: Record<number, string>
) {
  const traits: Record<Trait, number> = {
    vision: 0,
    strategy: 0,
    courage: 0,
    innovation: 0,
    justice: 0,
    unity: 0,
    wisdom: 0,
    service: 0,
  };

  Object.entries(answers).forEach(([question, answer]) => {
    const mapping = answerTraitMap[Number(question)]?.[answer];

    if (!mapping) return;

    Object.entries(mapping).forEach(([trait, value]) => {
      traits[trait as Trait] += value!;
    });
  });

  const leaderResults = leaders
    .map((leader) => {
      let score = 0;

      (Object.keys(traits) as Trait[]).forEach((trait) => {
        score += leader.traits[trait] * traits[trait];
      });

      return {
        ...leader,
        score,
      };
    })
    .sort((a, b) => b.score - a.score);

  const max = leaderResults[0].score;

  const ranked = leaderResults.map((leader) => ({
    ...leader,
    compatibility: Math.round(
      70 + (leader.score / max) * 30
    ),
  }));

  return {
    traits,
    rankings: ranked,
  };
}