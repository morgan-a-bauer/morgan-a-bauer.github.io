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
    slug: "multi-robot-trajectory-planning",
    title: "Multi-Robot Trajectory Planning",
    domain: "ROBOTICS",
    summary:
      "Decentralized trajectory optimization for coordinated multi-robot navigation in cluttered environments, reducing collision-avoidance replans by 40%.",
    stack: ["Python", "ROS2", "OSQP", "C++"],
    link: "#",
  },
  {
    slug: "expected-goals-model",
    title: "Expected Goals Model for Front-Office Scouting",
    domain: "FOOTBALL ANALYTICS",
    summary:
      "Gradient-boosted xG model trained on tracking and event data, used to benchmark finishing efficiency across a full league season.",
    stack: ["Python", "scikit-learn", "SQL", "Pandas"],
    link: "#",
  },
  {
    slug: "swarm-slam",
    title: "Cooperative SLAM for Robot Swarms",
    domain: "ROBOTICS",
    summary:
      "Distributed SLAM pipeline enabling shared map estimation across a five-robot swarm with intermittent connectivity.",
    stack: ["C++", "ROS2", "GTSAM"],
    link: "#",
  },
];
