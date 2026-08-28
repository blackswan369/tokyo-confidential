import { microcmsClient } from "@/lib/microcms";
import type { Companion } from "@/data/companions";

type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

type MicroCMSCompanion = {
  id: string;
  name: string;
  age: number;
  location: string;
  is_available: boolean;
  image: MicroCMSImage;
};

type MicroCMSCompanionList = {
  contents: MicroCMSCompanion[];
};

function mapCompanion(companion: MicroCMSCompanion): Companion {
  return {
    id: companion.id,
    name: companion.name,
    age: companion.age,
    image: companion.image.url,
    available: companion.is_available,
    area: companion.location,
  };
}

export async function getFeaturedCompanions(): Promise<Companion[]> {
  const data = await microcmsClient.get<MicroCMSCompanionList>({
    endpoint: "companions",
  });

  return data.contents.map(mapCompanion);
}
