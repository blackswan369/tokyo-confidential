import { microcmsClient } from "@/lib/microcms";
import type { Companion, CompanionProfile } from "@/data/companions";

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
  gallery?: MicroCMSImage[];
  introduction?: string;
  height?: string;
  languages?: string;
  interests?: string;
  personality?: string;
  services?: string;
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

function extractGalleryUrls(gallery: MicroCMSCompanion["gallery"]): string[] {
  if (!gallery || !Array.isArray(gallery)) {
    return [];
  }

  return gallery
    .map((item) => {
      if (typeof item === "string") {
        return item;
      }

      if (item && typeof item === "object" && "url" in item && item.url) {
        return item.url;
      }

      return null;
    })
    .filter((url): url is string => Boolean(url));
}

function mapCompanionProfile(companion: MicroCMSCompanion): CompanionProfile {
  const galleryImages = extractGalleryUrls(companion.gallery);

  return {
    ...mapCompanion(companion),
    gallery: galleryImages,
    introduction: companion.introduction,
    height: companion.height,
    languages: companion.languages,
    interests: companion.interests,
    personality: companion.personality,
    services: companion.services,
  };
}

export async function getFeaturedCompanions(): Promise<Companion[]> {
  const data = await microcmsClient.get<MicroCMSCompanionList>({
    endpoint: "companions",
  });

  return data.contents.map(mapCompanion);
}

export async function getCompanionById(id: string): Promise<CompanionProfile | null> {
  try {
    const companion = await microcmsClient.get<MicroCMSCompanion>({
      endpoint: "companions",
      contentId: id,
      queries: {
        fields:
          "id,name,age,location,is_available,image,gallery,introduction,height,languages,interests,personality,services",
      },
    });

    console.log("Gallery Data (raw):", companion.gallery);

    const profile = mapCompanionProfile(companion);
    console.log("Gallery Data (mapped):", profile.gallery);

    return profile;
  } catch {
    return null;
  }
}

export async function getCompanionIds(): Promise<string[]> {
  const data = await microcmsClient.get<MicroCMSCompanionList>({
    endpoint: "companions",
    queries: { fields: "id" },
  });

  return data.contents.map((companion) => companion.id);
}
