import imageManifest from "@/generated/image-manifest.json";

export type DashboardImageEntry = {
  file: string;
  src: string;
  width: number;
  height: number;
};

export function getDashboardImages(folder: string): DashboardImageEntry[] {
  const manifest = imageManifest as Record<string, { images: DashboardImageEntry[] }>;
  return manifest[folder]?.images ?? [];
}

export function getFirstDashboardImage(folder: string): DashboardImageEntry | undefined {
  return getDashboardImages(folder)[0];
}
