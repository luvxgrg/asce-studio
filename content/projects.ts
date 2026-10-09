export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  projectType: "Concept Project" | "Client Project";
  summary: string;
  services: readonly string[];
  featured: boolean;
  published: boolean;
  liveUrl: string;
  coverImage: ProjectImage;
  caseStudy: {
    overview: string;
    designDirection: string;
    interfaces: readonly { title: string; description: string; image: ProjectImage }[];
    commerceFeatures: readonly string[];
    commerceNote: string;
    responsive: string;
    mobileViews: readonly { caption: string; image: ProjectImage }[];
    technologies: readonly string[];
    build: string;
  };
}

export const projects: readonly Project[] = [{
  slug: "vanta",
  name: "VANTA",
  subtitle: "Fashion Commerce Concept",
  projectType: "Concept Project",
  summary: "A contemporary streetwear commerce experience built around editorial art direction, product discovery and a responsive shopping interface.",
  services: ["Brand Direction", "UI/UX", "Next.js Development", "E-commerce"],
  featured: true,
  published: true,
  liveUrl: "https://vanta-store-drab.vercel.app/",
  coverImage: {
    src: "/images/work/vanta/vanta-home.png",
    width: 1917,
    height: 1078,
    alt: "VANTA fashion storefront homepage featuring the Form Over Noise campaign.",
  },
  caseStudy: {
    overview: "VANTA is a fictional contemporary streetwear label created as an ASCE Studio concept project. It explores how editorial fashion art direction and modern commerce UX can work together, with an emphasis on product discovery and responsive shopping experiences.",
    designDirection: "Warm off-white surfaces and ink-black typography establish a restrained foundation. Editorial scale, generous whitespace and low-saturation fashion imagery bring a streetwear influence into the composition, while restrained interface chrome keeps the focus on the collection.",
    interfaces: [
      {
        title: "Collection discovery",
        description: "Browsing, sorting and filtering create different ways into the collection.",
        image: {
          src: "/images/work/vanta/vanta-collection.png",
          width: 1917,
          height: 1078,
          alt: "VANTA New In collection page with product grid, filtering and sorting controls.",
        },
      },
      {
        title: "Product detail",
        description: "Product imagery and information sit alongside size selection and Add to Bag controls.",
        image: {
          src: "/images/work/vanta/vanta-pdp.png",
          width: 1917,
          height: 1078,
          alt: "VANTA Structure Graphic Tee product page with product imagery, size selection and Add to Bag controls.",
        },
      },
    ],
    commerceFeatures: ["Collection browsing", "Sorting & filtering", "Product detail pages", "Search", "Wishlist", "Persistent frontend bag"],
    commerceNote: "The commerce experience uses browser-side state for a persistent bag/cart. Checkout, authentication and newsletter/contact submission are not implemented; this is a frontend commerce concept.",
    responsive: "Responsive layouts adapt the storefront and collection for mobile product browsing. Mobile navigation provides access to the shopping experience, while responsive product detail layouts bring product imagery and information into a vertical flow on smaller screens.",
    mobileViews: [
      {
        caption: "Mobile storefront",
        image: {
          src: "/images/work/vanta/vanta-mobile-home.png",
          width: 373,
          height: 811,
          alt: "VANTA mobile storefront with the Form Over Noise campaign and a two-column New Drop product grid.",
        },
      },
      {
        caption: "Mobile product detail",
        image: {
          src: "/images/work/vanta/vanta-mobile-pdp.png",
          width: 371,
          height: 810,
          alt: "VANTA mobile Form Heavyweight Tee product page with mobile navigation, product imagery, information and size selection.",
        },
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    build: "Reusable collection and product architecture supports the shopping interface, with persistent browser-side commerce state for the bag. The build brings brand direction and frontend interaction together in a responsive commerce concept.",
  },
}];

export function getPublishedProject(slug: string) {
  return projects.find((project) => project.slug === slug && project.published);
}
