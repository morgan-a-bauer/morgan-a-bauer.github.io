export interface ResearchEntry {
  year: number;
  title: string;
  domain: string;
  organization: string;
  link: string;
  peerReviewed: boolean;
  tags: string[];
}

export const research: ResearchEntry[] = [
  {
    year: 2025,
    title: "Decentralized Trajectory Planning for Multi-Robot Systems",
    domain: "Robotics",
    organization: "IEEE ICRA",
    link: "#",
    peerReviewed: true,
    tags: ["Trajectory Planning", "Multi-Robot Systems"],
  },
  {
    year: 2024,
    title: "Quantifying Finishing Skill with Shot-Level xG Residuals",
    domain: "Sports Analytics",
    organization: "MIT Sloan Sports Analytics Conference",
    link: "#",
    peerReviewed: false,
    tags: ["Football Analytics", "xG Modeling"],
  },
  {
    year: 2023,
    title: "Cooperative SLAM Under Intermittent Communication",
    domain: "Robotics",
    organization: "IROS Workshop",
    link: "#",
    peerReviewed: false,
    tags: ["SLAM", "Workshop Paper"],
  },
];
