export interface Project {
  slug: string;
  title: string;
  domain: string;
  summary: string;
  stack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    slug: "fantasy-basketball",
    title: "Predictive Analytics for Fantasy Basketball",
    domain: "SPORTS ANALYTICS",
    summary:
      "Draft rankings, a Shiny dashboard, and an RNN that predicts daily fantasy scores from each player's last ten games. Raised win rate from 47.8% to 70.3% across eight leagues in a season.",
    stack: ["Python", "TensorFlow", "R", "Shiny"],
    link: "https://github.com/morgan-a-bauer/fantasy_basketball",
  },
  {
    slug: "logic-puzzles-evolution",
    title: "Solving Logic Puzzles with Evolutionary Computation",
    domain: "EVOLUTIONARY COMPUTATION",
    summary:
      "Recasts logic grid puzzles as a constraint optimization problem, solved with a genetic algorithm using a hybrid permutation/array genotype, tournament selection, and cycle crossover.",
    stack: ["Python"],
    link: "https://github.com/morgan-a-bauer/logic_puzzles_evolution",
  },
  {
    slug: "chess",
    title: "Chess",
    domain: "GAME DEV",
    summary:
      "A playable chess engine built in Python with PyGame, paired with a native iOS front-end written in Swift.",
    stack: ["Python", "PyGame", "Swift", "iOS"],
    link: "https://github.com/morgan-a-bauer/chess",
  },
  {
    slug: "dominion",
    title: "Dominion",
    domain: "GAME DEV",
    summary:
      "A digital, text-based implementation of the deck-building card game Dominion, built with a friend as a shared side project.",
    stack: ["Python"],
    link: "https://github.com/morgan-a-bauer/dominion",
  },
];
