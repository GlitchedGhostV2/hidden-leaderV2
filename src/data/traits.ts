export type Trait =
  | "vision"
  | "strategy"
  | "courage"
  | "innovation"
  | "justice"
  | "unity"
  | "wisdom"
  | "service";

export interface LeaderProfile {
  name: string;
  image: string;
  traits: Record<Trait, number>;
}

export const leaders: LeaderProfile[] = [
  {
    name: "Dr. A.P.J. Abdul Kalam",
    image: "/leaders/kalam.jpg",
    traits: {
      vision: 10,
      strategy: 7,
      courage: 6,
      innovation: 10,
      justice: 6,
      unity: 8,
      wisdom: 8,
      service: 10,
    },
  },

  {
    name: "Chanakya",
    image: "/leaders/chanakya.jpg",
    traits: {
      vision: 9,
      strategy: 10,
      courage: 5,
      innovation: 7,
      justice: 6,
      unity: 7,
      wisdom: 10,
      service: 5,
    },
  },

  {
    name: "Ashoka Maurya",
    image: "/leaders/ashoka.jpg",
    traits: {
      vision: 9,
      strategy: 8,
      courage: 8,
      innovation: 6,
      justice: 10,
      unity: 10,
      wisdom: 8,
      service: 9,
    },
  },

  {
    name: "Mahatma Gandhi",
    image: "/leaders/gandhi.jpg",
    traits: {
      vision: 9,
      strategy: 8,
      courage: 8,
      innovation: 5,
      justice: 10,
      unity: 10,
      wisdom: 8,
      service: 10,
    },
  },

  {
    name: "Chhatrapati Shivaji Maharaj",
    image: "/leaders/shivaji.jpg",
    traits: {
      vision: 9,
      strategy: 10,
      courage: 10,
      innovation: 8,
      justice: 7,
      unity: 8,
      wisdom: 7,
      service: 7,
    },
  },

  {
    name: "Rani Lakshmibai",
    image: "/leaders/lakshmibai.jpg",
    traits: {
      vision: 8,
      strategy: 7,
      courage: 10,
      innovation: 6,
      justice: 8,
      unity: 8,
      wisdom: 6,
      service: 8,
    },
  },

  {
    name: "Dr. B.R. Ambedkar",
    image: "/leaders/ambedkar.jpg",
    traits: {
      vision: 9,
      strategy: 8,
      courage: 8,
      innovation: 7,
      justice: 10,
      unity: 8,
      wisdom: 10,
      service: 9,
    },
  },

  {
    name: "Swami Vivekananda",
    image: "/leaders/vivekananda.jpg",
    traits: {
      vision: 10,
      strategy: 7,
      courage: 8,
      innovation: 7,
      justice: 7,
      unity: 9,
      wisdom: 10,
      service: 9,
    },
  },

  {
    name: "Sardar Vallabhbhai Patel",
    image: "/leaders/patel.jpg",
    traits: {
      vision: 8,
      strategy: 9,
      courage: 8,
      innovation: 6,
      justice: 8,
      unity: 10,
      wisdom: 8,
      service: 8,
    },
  },

  {
    name: "Vikram Sarabhai",
    image: "/leaders/sarabhai.jpg",
    traits: {
      vision: 10,
      strategy: 8,
      courage: 6,
      innovation: 10,
      justice: 6,
      unity: 8,
      wisdom: 8,
      service: 8,
    },
  },
];