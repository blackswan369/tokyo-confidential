export type Companion = {
  id: string;
  name: string;
  age: number;
  image: string;
  introduction: string[];
  available: boolean;
  area: string;
};

export const featuredCompanions: Companion[] = [
  {
    id: "haruka",
    name: "HARUKA",
    age: 31,
    image: "/images/haruka.png",
    introduction: [
      "Calm and graceful.",
      "Enjoys art, wine, and quiet evenings.",
    ],
    available: true,
    area: "SHINJUKU",
  },
  {
    id: "sayaka",
    name: "SAYAKA",
    age: 29,
    image: "/images/sayaka.png",
    introduction: [
      "Smart and friendly.",
      "Loves anime, wellness, and good conversation.",
    ],
    available: true,
    area: "SHIBUYA",
  },
  {
    id: "mina",
    name: "MINA",
    age: 24,
    image: "/images/mina.png",
    introduction: [
      "Quiet and thoughtful.",
      "Enjoys art, books, and museums.",
    ],
    available: true,
    area: "IKEBUKURO",
  },
  {
    id: "miyu",
    name: "MIYU",
    age: 29,
    image: "/images/miyu.png",
    introduction: [
      "Intelligent and mysterious.",
      "Enjoys books, jazz, and deep talks.",
    ],
    available: true,
    area: "SHIBUYA",
  },
  {
    id: "akari",
    name: "AKARI",
    age: 25,
    image: "/images/akari.png",
    introduction: [
      "Sweet and cheerful.",
      "Loves cafe hopping and movies.",
    ],
    available: true,
    area: "SHINJUKU",
  },
];
