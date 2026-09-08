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
    title: "A New Lower Bound for Deterministic Pop-Stack-Sorting",
    domain: "Combinatorics",
    organization: "European Journal of Combinatorics",
    link: "https://doi.org/10.1016/j.ejc.2024.104046",
    peerReviewed: true,
    tags: ["Combinatorics", "Pop-Stack-Sorting"],
  },
  {
    year: 2025,
    title: "On the Steiner k-Wiener Index of Ordered Trees",
    domain: "Combinatorics",
    organization: "Eckerd College NAS Student Research Symposium",
    link: "https://sites.google.com/eckerd.edu/steinerk-wiener/home",
    peerReviewed: false,
    tags: ["Graph Theory", "Ordered Trees"],
  },
  {
    year: 2024,
    title:
      "Analysis and Implementation of Module-Lattice-Based Key-Encapsulation Mechanism Standard (FIPS 203)",
    domain: "Post-Quantum Cryptography",
    organization: "Eckerd College NAS Student Research Symposium",
    link: "https://sites.google.com/eckerd.edu/ml-kem/home",
    peerReviewed: false,
    tags: ["Post-Quantum Cryptography", "FIPS 203"],
  },
];
