export interface CaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  client: string;
  category: string;
  year: string;
  services: string[];
  heroImage: string;
  thumbImage: string;
  tagline: string;
  overview: string;
  gallery: GalleryImage[];
  nextSlug: string;
  nextTitle: string;
  nextImage: string;
  scope: string;
}

export interface ApproachStep {
  num: string;
  title: string;
  body: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
  type?: "video" | "image";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "aroma-perfume",
    title: "Aroma Perfume",
    shortTitle: "Aroma Perfume",
    client: "Concept",
    category: "Fragrance · Luxury",
    year: "2026",
    scope: "Visual Identity & Product Campaign",
    services: [
      "Product Modeling",
      "Product Lighting",
      "Art Direction",
      "Animation",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1596131468568-c42ece6c5c71?w=1800&q=85",
    thumbImage:
      "https://images.unsplash.com/photo-1596131468568-c42ece6c5c71?w=900&q=80",
    tagline: "Fragrance Visual Identity & Product Campaign",
    overview: `
    A concept project for Aroma, a fragrance house built on quiet luxury and the richness of oud and smoke. The work focuses on product modeling, dramatic scene composition, and lighting as a storytelling tool — placing the bottle in environments that mirror its character. Each render and animation follows a slow, deliberate reveal, letting light travel across glass surfaces. The result is a visual language that doesn't sell a perfume — it evokes the feeling of wearing one.
 `,
    gallery: [
      {
        src: "/images/Perfume Demo.mp4",
        alt: "Fragrance bottle hero shot",
        span: "normal",
        type: "video",
      },
      {
        src: "/images/render-11.png",
        alt: "Fragrance bottle hero shot",
        span: "normal",
      },
      {
        src: "/images/render-12.png",
        alt: "Detail cap render",
        span: "normal",
      },
      {
        src: "/images/render-15.png",
        alt: "Collection flat lay",
        span: "normal",
      },
      {
        src: "/images/render-16.png",
        alt: "Dark studio lifestyle render",
        span: "normal",
      },
      {
        src: "/images/render-1.png",
        alt: "Dark studio lifestyle render",
        span: "normal",
      },
      {
        src: "/images/render-2.png",
        alt: "Dark studio lifestyle render",
        span: "normal",
      },
      {
        src: "/images/render-3.png",
        alt: "Dark studio lifestyle render",
        span: "normal",
      },
      {
        src: "/images/render-6.png",
        alt: "Dark studio lifestyle render",
        span: "normal",
      },
      {
        src: "/images/render-7.png",
        alt: "Dark studio lifestyle render",
        span: "normal",
      },
    ],
    nextSlug: "apex-footwear-drop",
    nextTitle: "APEX — Footwear Drop",
    nextImage:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80",
  },
  // {
  //   slug: "apex-footwear-drop",
  //   title: "APEX — Footwear Drop",
  //   shortTitle: "APEX",
  //   client: "APEX Athletic",
  //   category: "Footwear · Sportswear",
  //   year: "2024",
  //   scope: "3D Modeling, Animation & E-Commerce Assets",
  //   services: ["Product Modeling", "3D Animation", "Art Direction"],
  //   heroImage:
  //     "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1800&q=85",
  //   thumbImage:
  //     "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&q=80",
  //   tagline: "Motion that makes you want to move.",
  //   overview:
  //     "APEX Athletic needed a complete CGI campaign for their most technically ambitious sneaker to date — a carbon-fibre plate runner featuring a new proprietary foam compound. With physical product in limited supply and a global launch across twelve markets, every hero image, e-commerce tile, and launch animation had to be created entirely in 3D, matching the shoe's exact geometry down to the stitch pattern.",
  //   challenge:
  //     "Footwear is one of the most material-complex product categories in CGI — layered fabrics, reflective TPU, matte rubber, iridescent mesh, and stitching that catches light differently on every surface. The animation brief called for a 90-second hero film, 24 still e-commerce assets, and six platform-specific loops — all at broadcast quality, in ten weeks.",
  //   approach: [
  //     {
  //       num: "01",
  //       title: "Geometry from Engineering Files",
  //       body: "Imported CAD data from the footwear engineering team, then rebuilt each material zone as a separate mesh object to allow per-material shader assignment. The sole unit alone had 14 distinct material zones.",
  //     },
  //     {
  //       num: "02",
  //       title: "Fabric & Material Simulation",
  //       body: "The upper mesh used procedural displacement with a custom weave pattern derived from macro photography of the physical upper. TPU overlays built with layered clearcoat shaders.",
  //     },
  //     {
  //       num: "03",
  //       title: "Hero Film Storyboarding",
  //       body: "Developed a 42-frame storyboard with the APEX creative team. The final film opens on the carbon plate in isolation, builds through a material exploded view, and resolves to a full lifestyle moment.",
  //     },
  //     {
  //       num: "04",
  //       title: "Multi-Asset Pipeline",
  //       body: "Built a parametric camera rig that allowed all 24 e-commerce angles and 6 loops to be derived from a single master scene — ensuring perfect consistency across every deliverable.",
  //     },
  //   ],
  //   metrics: [
  //     { value: "12", label: "Markets at launch" },
  //     { value: "90s", label: "Hero film runtime" },
  //     { value: "24", label: "E-commerce stills delivered" },
  //     { value: "10w", label: "End-to-end delivery" },
  //   ],
  //   gallery: [
  //     {
  //       src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80",
  //       alt: "Sneaker hero shot wide",
  //       span: "wide",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
  //       alt: "Sole detail",
  //       span: "normal",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
  //       alt: "Material detail upper",
  //       span: "normal",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=1200&q=80",
  //       alt: "Lifestyle render dark",
  //       span: "wide",
  //     },
  //   ],
  //   nextSlug: "helios-earbuds-launch",
  //   nextTitle: "Helios — Earbuds Launch",
  //   nextImage:
  //     "https://images.unsplash.com/photo-1610945264803-c22b62831de9?w=1200&q=80",
  // },
  // {
  //   slug: "helios-earbuds-launch",
  //   title: "Helios — Earbuds Launch",
  //   shortTitle: "Helios Audio",
  //   client: "Helios Audio",
  //   category: "Consumer Tech · Audio",
  //   year: "2023",
  //   scope: "Art Direction, Full CGI Campaign",
  //   services: [
  //     "Product Modeling",
  //     "Product Lighting",
  //     "Art Direction",
  //     "3D Animation",
  //   ],
  //   heroImage:
  //     "https://images.unsplash.com/photo-1610945264803-c22b62831de9?w=1800&q=85",
  //   thumbImage:
  //     "https://images.unsplash.com/photo-1610945264803-c22b62831de9?w=900&q=80",
  //   tagline: "Zero physical samples. One hundred percent conviction.",
  //   overview:
  //     "Helios Audio launched their debut wireless earbuds having never manufactured a single production unit. The entire go-to-market — investor deck, crowdfunding campaign, press kit, and launch video — was built on CGI. This was total art direction: concepting the visual language of the brand, defining how the product should feel and move on screen, and delivering every asset needed to raise $2.4M in pre-orders.",
  //   challenge:
  //     "With no physical reference to photograph and investors scrutinising every pixel for legitimacy, the renders had to be beyond photorealistic — they had to be better than photography. Simultaneously, the visual language had to introduce an entirely new brand to the world, setting a premium positioning against established players with decades of brand equity.",
  //   approach: [
  //     {
  //       num: "01",
  //       title: "Brand Visual Language",
  //       body: "Before a single polygon was modeled, developed a 40-page visual language document — defining colour palette, lighting philosophy, compositional rules, and emotional register for the Helios brand.",
  //     },
  //     {
  //       num: "02",
  //       title: "Form Refinement",
  //       body: "Worked iteratively with the industrial design team to refine the earbud geometry for CGI. Several design decisions — the chamfer angle on the stem, the ANC window geometry — were informed by how they read in render.",
  //     },
  //     {
  //       num: "03",
  //       title: "Cinematic Lighting System",
  //       body: "Developed a signature lighting approach using a deep cobalt background with a high-key warm fill — creating the sense of precision and warmth simultaneously. This became the brand's visual signature.",
  //     },
  //     {
  //       num: "04",
  //       title: "Full Asset Delivery",
  //       body: "Delivered: 1× 60s hero film, 1× 30s cut-down, 6× platform loops, 32 still assets across hero, e-commerce, and lifestyle contexts, and a layered AE project for the in-house team to adapt for regional markets.",
  //     },
  //   ],
  //   metrics: [
  //     { value: "$2.4M", label: "Pre-orders raised" },
  //     { value: "32", label: "Still assets delivered" },
  //     { value: "0", label: "Physical samples used" },
  //     { value: "6w", label: "Brand-to-campaign timeline" },
  //   ],
  //   gallery: [
  //     {
  //       src: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=1200&q=80",
  //       alt: "Earbuds hero wide",
  //       span: "wide",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
  //       alt: "Case detail",
  //       span: "normal",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  //       alt: "Earbud lifestyle",
  //       span: "normal",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80",
  //       alt: "Brand environment render",
  //       span: "wide",
  //     },
  //   ],
  //   nextSlug: "maison-noir-fragrance",
  //   nextTitle: "Maison Noir — Fragrance Collection",
  //   nextImage:
  //     "https://images.unsplash.com/photo-1596131468568-c42ece6c5c71?w=1200&q=80",
  // },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
