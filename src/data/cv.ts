export interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
  location: string;
  coursework?: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
}

export interface PublicationEntry {
  type: string;
  description: string;
}

export interface HonorEntry {
  label: string;
  period: string;
}

export interface TagGroup {
  category: string;
  items: string[];
}

export const education: EducationEntry[] = [
  {
    period: "Expected May 2027",
    degree: "Candidate for Master of Science in Engineering in Robotics",
    institution: "University of Pennsylvania — GRASP Laboratory",
    location: "Philadelphia, PA",
    coursework: [
      "Computer Vision and Computational Photography",
      "Engineering Economics",
      "Engineering Entrepreneurship",
      "Introduction to Robotics",
      "Learning for Robotics",
      "Machine Learning",
      "Mathematics for Robotics",
    ],
  },
  {
    period: "Conferred May 2025",
    degree: "B.S. in Computer Science and Mathematics",
    institution: "Eckerd College",
    location: "St. Petersburg, FL",
    coursework: [
      "Abstract Algebra I",
      "Bioinformatics",
      "Calculus I & II",
      "Cognitive Linguistics (audit)",
      "Computer Architecture",
      "Computer Programming Concepts",
      "Cybersecurity",
      "Data Science Fundamentals",
      "Data Structures",
      "Differential Equations",
      "Digital Image Processing",
      "Electronics",
      "Evolutionary Computation",
      "GIS for Environmental Studies",
      "GUI Design (audit)",
      "Intermediate Programming",
      "Intro to Mathematical Thinking",
      "Linear Algebra",
      "Machine Learning",
      "Number Theory",
      "Partial Differential Equations",
      "Probability & Statistics I",
      "Programming Languages",
      "Quantum Physics I",
      "Real Analysis I",
      "Software Capstone",
      "Theory of Computing",
      "Translators & Compilers",
      "Waves and Relativity",
    ],
  },
];

export const research: TimelineEntry[] = [
  {
    period: "July 2024 – May 2025",
    title:
      "Undergraduate Thesis — Deep Learning for Musical Accompaniment Generation",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description:
      "Designed and implemented a Transformer architecture using PyTorch to generate musical accompaniment from a solo input stream, proving its viability for real-time applications (Advised by Dr. Michael Hilton).",
  },
  {
    period: "June 2023 – May 2025",
    title: "Computer Science Research Assistant",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description:
      "Developing a new version of DARWIN (Digital Analysis and Recognition of Whale Images on a Network) which serves hundreds of marine scientists globally. Contributed to an updated user interface for fin tracing and contour extraction.",
  },
  {
    period: "April 2023 – May 2025",
    title:
      "Ford Apprentice Scholar — Module-Lattice-Based Key-Encapsulation Mechanism (FIPS 203)",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description:
      "Nominated, selected, and funded to develop research and pedagogy skills. Analyzed and implemented post-quantum encryption standards in Python.",
  },
  {
    period: "December 2022 – May 2025",
    title: "Undergraduate Mathematics Researcher",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description:
      "Conducted research on the combinatorial properties of ordered trees, specifically investigating the Steiner k-Wiener index.",
  },
];

export const publications: PublicationEntry[] = [
  {
    type: "Publication",
    description:
      "Bauer, M. and Copenhaver, K., 2025. A new lower bound for deterministic pop-stack-sorting. European Journal of Combinatorics, 124, p. 104046.",
  },
  {
    type: "Invited Talk",
    description:
      "Pop-stack-sorting in a special session on enumerative combinatorics at the 55th Southeastern International Conference on Combinatorics, Graph Theory, and Computing.",
  },
  {
    type: "Presentation",
    description:
      "Analysis and Implementation of Module-Lattice-Based Key-Encapsulation Mechanism Standard (FIPS 203) at the 2024 Eckerd College NAS Student Research Symposium.",
  },
  {
    type: "Presentation",
    description:
      "On the Steiner k-Wiener Index of Ordered Trees at the 2024 Eckerd College NAS Student Research Symposium.",
  },
];

export const teaching: TimelineEntry[] = [
  {
    period: "September 2024 – May 2025",
    title: "Tutor in Mathematics",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description: "Courses Tutored: Precalculus, Calculus I, Calculus II.",
  },
  {
    period: "January 2023 – May 2025",
    title: "Computer Science Tutor and Lab Assistant",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description:
      "Courses Tutored: Computer Programming Concepts, Intermediate Programming, Data Structures, Discrete Structures, Python for the Biological Sciences.",
  },
  {
    period: "May 2024 – September 2024",
    title: "Teaching Assistant — How To Design an Escape Room",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description:
      "Lectured on cryptographic concepts and introduced micro:bits hardware/software.",
  },
  {
    period: "February 2024 – May 2024",
    title: "Teaching Assistant — Introduction to Animatronics",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description:
      "Assisted with teaching topics including programming, electronics, and soldering.",
  },
  {
    period: "August 2023 – May 2025",
    title: "Student Representative — Computer Policy Group",
    organization: "Eckerd College",
    location: "St. Petersburg, FL",
    description:
      "Served as the sole student member making institutional decisions regarding campus technology policy and infrastructure.",
  },
];

export const professionalExperience: TimelineEntry[] = [
  {
    period: "July 2026 – August 2026",
    title: "Training Camp Assistant — Football Analytics",
    organization: "Arizona Cardinals",
    location: "Glendale, AZ",
    description:
      "Applied machine learning techniques, including graph neural networks, variational autoencoders, and proximal policy optimization, with on-field tracking data; quantify quarterback pass IQ, predict rushing yards, and improve draft preparation.",
  },
  {
    period: "September 2024 – May 2025",
    title: "Information Technology Intern",
    organization: "United States Geological Survey",
    location: "St. Petersburg, FL",
    description:
      "Assisted geoscience researchers with Python and R troubleshooting, scientific software configuration, and maintenance on production servers.",
  },
];

export const honors: HonorEntry[] = [
  { label: "Climate Fellow, Climate Leaders @ Penn", period: "October 2025" },
  {
    label: "Edmund L. Gallizzi Award for Excellence in Computer Science",
    period: "May 2025",
  },
  {
    label: "Meacham Mathematics Memorial (M³) Award",
    period: "May 2025",
  },
  { label: "Pi Mu Epsilon Florida Gamma Chapter", period: "May 2024" },
  { label: "Ford Apprentice Scholar", period: "April 2023" },
  { label: "Dean's List", period: "2023 – 2025" },
  {
    label: "Natural Sciences Achievement Scholarship",
    period: "2022 – 2023",
  },
  { label: "Music Performance Scholarship", period: "2021 – 2024" },
];

export const skills: TagGroup[] = [
  {
    category: "Robotics & Systems",
    items: [
      "ROS",
      "Gazebo",
      "ARMv8 Assembly",
      "Git",
      "Linux",
      "LaTeX",
      "Feedback Control",
      "Kinematics",
      "Motion Planning",
    ],
  },
  {
    category: "Data Science & ML",
    items: ["PyTorch", "TensorFlow", "Keras", "NumPy", "Jupyter Notebooks"],
  },
  {
    category: "Languages & App Dev",
    items: [
      "Python",
      "R",
      "SQL",
      "Swift",
      "C#",
      "Java",
      "XCode",
      "Microsoft Office",
    ],
  },
];

export const interests: TagGroup[] = [
  {
    category: "SCUBA Diving",
    items: ["TDI Technical Diver (ANDP)", "SSI Dive Guide", "Rescue Diver"],
  },
  {
    category: "Other Outdoors",
    items: ["Biking", "Hiking", "Camping", "Snowboarding", "Birding"],
  },
  {
    category: "Creative & Games",
    items: [
      "Woodwinds (especially Tenor Sax)",
      "Board Games",
      "Reading",
      "Wildlife Photography",
    ],
  },
];
