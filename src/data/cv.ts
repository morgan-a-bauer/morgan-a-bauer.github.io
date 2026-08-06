export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const experience: ExperienceEntry[] = [
  {
    period: "2023 — Present",
    role: "Robotics Research Engineer",
    organization: "Independent / Contract Research",
    description:
      "Design and implement decentralized planning and estimation algorithms for multi-robot teams operating in unstructured environments.",
  },
  {
    period: "2022 — 2023",
    role: "Sports Analytics Consultant",
    organization: "Front-Office Analytics Group",
    description:
      "Built expected-goals and finishing-skill models from tracking and event data to support scouting and roster decisions.",
  },
];

export const education: EducationEntry[] = [
  {
    period: "2021 — 2023",
    degree: "M.S. in Robotics",
    institution: "Carnegie Mellon University",
    details:
      "Thesis on decentralized trajectory planning for multi-robot systems.",
  },
  {
    period: "2017 — 2021",
    degree: "B.S. in Mechanical Engineering",
    institution: "University of Michigan",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Robotics",
    skills: ["ROS2", "SLAM", "Trajectory Optimization", "C++"],
  },
  {
    category: "Analytics",
    skills: ["Python", "scikit-learn", "SQL", "Pandas"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Linux"],
  },
];
