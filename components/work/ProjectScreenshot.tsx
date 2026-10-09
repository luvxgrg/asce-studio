import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

export default function ProjectScreenshot({
  image,
  sizes = "(min-width: 1280px) 1216px, (min-width: 1024px) calc(100vw - 64px), calc(100vw - 48px)",
}: {
  image: ProjectImage;
  sizes?: string;
}) {
  return (
    <a
      href={image.src}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      title="View full-size screenshot (opens in a new tab)"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className="block h-auto w-full border border-white/10"
      />
      <span className="sr-only">View full-size screenshot, opens in a new tab.</span>
    </a>
  );
}
