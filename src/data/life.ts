export interface HobbyStat {
  label: string;
  value: string;
}

export interface RecentBook {
  title: string;
  author: string;
}

export interface HobbyEntry {
  slug: string;
  category: string;
  title: string;
  description: string;
  recentBook?: RecentBook;
  stats?: HobbyStat[];
  image?: string;
}

export const hobbies: HobbyEntry[] = [
  {
    slug: "birding",
    category: "BIRDING",
    title: "Birding",
    description:
      "",
    stats: [
      { label: "Species in 2025", value: "121" },
      { label: "Favorite Sighting", value: "Harlequin Duck" },
    ],
  },
  {
    slug: "board-games",
    category: "BOARD GAMES",
    title: "Board Games",
    description:
      "",
    stats: [{ label: "Favorite Game", value: "Pendulum" }],
  },
  {
    slug: "photography",
    category: "PHOTOGRAPHY",
    title: "Photography",
    description:
      "",
    stats: [
      { label: "Camera", value: "Sony a6400" },
      { label: "Themes", value: "Landscape & Wildlife" },
    ],
  },
  {
    slug: "reading",
    category: "READING",
    title: "Reading",
    description:
      "",
    recentBook: {
      title: "What If We Get It Right?",
      author: "Ayana Elizabeth Johnson",
    },
    stats: [{ label: "Books in 2025", value: "24" }],
  },
  {
    slug: "diving",
    category: "SCUBA DIVING",
    title: "Technical & Rescue Diving",
    description:
      "",
    stats: [
      { label: "Dives", value: "202" },
      { label: "Highest Certification", value: "TDI Advanced Nitrox and Decompression Procedures" },
    ],
  },
];
