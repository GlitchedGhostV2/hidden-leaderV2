export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  title: string;
  scenario: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    title: "A Team Challenge",
    scenario:
      "Your group is falling behind on an important project. Deadlines are close, and everyone has different opinions about how to proceed. What would you do?",
    options: [
      {
        id: "A",
        text: "Create a clear plan and assign responsibilities.",
      },
      {
        id: "B",
        text: "Motivate everyone by encouraging teamwork.",
      },
      {
        id: "C",
        text: "Study the situation before making a decision.",
      },
      {
        id: "D",
        text: "Take charge immediately and make quick decisions.",
      },
    ],
  },

  {
    id: 2,
    title: "A Difficult Decision",
    scenario:
      "Two close friends disagree over an important issue and expect you to support them. How do you respond?",
    options: [
      { id: "A", text: "Listen to both sides before deciding." },
      { id: "B", text: "Help them find common ground." },
      { id: "C", text: "Choose the most practical solution." },
      { id: "D", text: "Stay neutral until more facts are known." },
    ],
  },

  {
    id: 3,
    title: "Unexpected Crisis",
    scenario:
      "A sudden problem threatens the success of an event you organized. What is your first reaction?",
    options: [
      { id: "A", text: "Remain calm and reorganize the team." },
      { id: "B", text: "Personally solve the biggest issue." },
      { id: "C", text: "Inspire confidence and keep morale high." },
      { id: "D", text: "Analyze why the problem happened." },
    ],
  },

  {
    id: 4,
    title: "Leading Change",
    scenario:
      "You have an opportunity to improve an old system, but many people resist change.",
    options: [
      { id: "A", text: "Convince everyone with a clear vision." },
      { id: "B", text: "Introduce changes gradually." },
      { id: "C", text: "Build trust before changing anything." },
      { id: "D", text: "Implement the improvements confidently." },
    ],
  },

  {
    id: 5,
    title: "Your Legacy",
    scenario:
      "What kind of impact would you most like to leave on others?",
    options: [
      { id: "A", text: "Innovation and scientific progress." },
      { id: "B", text: "Justice and equality." },
      { id: "C", text: "Courage and determination." },
      { id: "D", text: "Wisdom and guidance." },
    ],
  },
];