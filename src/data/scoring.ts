import { Trait } from "./traits";

export const answerTraitMap: Record<
  number,
  Record<string, Partial<Record<Trait, number>>>
> = {
  1: {
    A: { strategy: 3, vision: 2 },
    B: { unity: 3, service: 2 },
    C: { wisdom: 3, strategy: 2 },
    D: { courage: 3, vision: 2 },
  },

  2: {
    A: { justice: 3, wisdom: 2 },
    B: { unity: 3, service: 2 },
    C: { strategy: 3 },
    D: { wisdom: 3 },
  },

  3: {
    A: { unity: 3, courage: 2 },
    B: { courage: 3 },
    C: { vision: 3 },
    D: { wisdom: 3 },
  },

  4: {
    A: { vision: 3 },
    B: { strategy: 3 },
    C: { service: 3 },
    D: { courage: 3 },
  },

  5: {
    A: { innovation: 4 },
    B: { justice: 4 },
    C: { courage: 4 },
    D: { wisdom: 4 },
  },
};