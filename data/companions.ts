export type Companion = {
  id: string;
  name: string;
  age: number;
  image: string;
  available: boolean;
  area: string;
  homepage_order?: number;
};

export type CompanionProfile = Companion & {
  gallery: string[];
  introduction?: string;
  height?: string;
  languages?: string;
  interests?: string;
  personality?: string;
  services?: string;
};
