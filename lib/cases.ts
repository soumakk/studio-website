export interface CaseStudy {
  slug: string
  title: string
  shortTitle: string
  client: string
  category: string
  year: string
  scope: string
  services: string[]
  heroImage: string
  thumbImage: string
  tagline: string
  overview: string
  challenge: string
  approach: ApproachStep[]
  metrics: Metric[]
  gallery: GalleryImage[]
  nextSlug: string
  nextTitle: string
  nextImage: string
}

export interface ApproachStep {
  num: string
  title: string
  body: string
}

export interface Metric {
  value: string
  label: string
}

export interface GalleryImage {
  src: string
  alt: string
  span?: 'wide' | 'tall' | 'normal'
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'maison-noir-fragrance',
    title: 'Maison Noir — Fragrance Collection',
    shortTitle: 'Maison Noir',
    client: 'Maison Noir Paris',
    category: 'Fragrance · Luxury',
    year: '2024',
    scope: 'Product Modeling, Lighting & Art Direction',
    services: ['Product Modeling', 'Product Lighting', 'Art Direction'],
    heroImage:
      'https://images.unsplash.com/photo-1596131468568-c42ece6c5c71?w=1800&q=85',
    thumbImage:
      'https://images.unsplash.com/photo-1596131468568-c42ece6c5c71?w=900&q=80',
    tagline: 'Luxury reimagined in three dimensions.',
    overview:
      "Maison Noir Paris came to us with a brief that was as poetic as it was demanding: render their new five-piece fragrance collection in a way that felt tactile, atmospheric, and unmistakably French. No photography. No samples. Pure CGI that had to carry the weight of a century-old brand's aesthetic — and convince buyers at three international trade shows that these bottles were real.",
    challenge:
      "The collection featured ultra-thin borosilicate glass with a matte-lacquer exterior, internal colour gradients, and a custom-machined brass cap — all materials that punish bad lighting and forgive nothing in close-up. The timeline was eight weeks from first brief to print-ready assets, with the creative director iterating daily.",
    approach: [
      {
        num: '01',
        title: 'Material Research & Reference',
        body: 'Sourced physical reference samples of borosilicate, conducted macro photography of the cap prototypes, and built a custom IOR library to match the exact refraction behaviour of the glass.',
      },
      {
        num: '02',
        title: 'High-Poly Modeling',
        body: 'Each bottle modeled from engineering drawings with sub-millimetre accuracy. The internal gradient chambers were constructed as separate mesh objects with volumetric shaders to achieve the correct light bleed.',
      },
      {
        num: '03',
        title: 'Lighting & Look Development',
        body: 'Developed a bespoke three-point studio setup referencing 1960s Paris fashion photography — a warm key, cold fill, and a hair light that dragged the gold rim across the darkened background.',
      },
      {
        num: '04',
        title: 'Art Direction & Iteration',
        body: 'Weekly review sessions with the creative director and brand team. 23 lighting iterations across the collection before final sign-off. Every element — camera angle, depth-of-field, shadow softness — was deliberate.',
      },
    ],
    metrics: [
      { value: '34%', label: 'Conversion lift on product page' },
      { value: '3', label: 'International trade shows' },
      { value: '48h', label: 'Final approval turnaround' },
      { value: '0', label: 'Physical samples required' },
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=1200&q=80',
        alt: 'Fragrance bottle hero shot',
        span: 'wide',
      },
      {
        src: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80',
        alt: 'Detail cap render',
        span: 'normal',
      },
      {
        src: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&q=80',
        alt: 'Collection flat lay',
        span: 'normal',
      },
      {
        src: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=1200&q=80',
        alt: 'Dark studio lifestyle render',
        span: 'wide',
      },
    ],
    nextSlug: 'apex-footwear-drop',
    nextTitle: 'APEX — Footwear Drop',
    nextImage:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80',
  },
  {
    slug: 'apex-footwear-drop',
    title: 'APEX — Footwear Drop',
    shortTitle: 'APEX',
    client: 'APEX Athletic',
    category: 'Footwear · Sportswear',
    year: '2024',
    scope: '3D Modeling, Animation & E-Commerce Assets',
    services: ['Product Modeling', '3D Animation', 'Art Direction'],
    heroImage:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1800&q=85',
    thumbImage:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&q=80',
    tagline: 'Motion that makes you want to move.',
    overview:
      "APEX Athletic needed a complete CGI campaign for their most technically ambitious sneaker to date — a carbon-fibre plate runner featuring a new proprietary foam compound. With physical product in limited supply and a global launch across twelve markets, every hero image, e-commerce tile, and launch animation had to be created entirely in 3D, matching the shoe's exact geometry down to the stitch pattern.",
    challenge:
      "Footwear is one of the most material-complex product categories in CGI — layered fabrics, reflective TPU, matte rubber, iridescent mesh, and stitching that catches light differently on every surface. The animation brief called for a 90-second hero film, 24 still e-commerce assets, and six platform-specific loops — all at broadcast quality, in ten weeks.",
    approach: [
      {
        num: '01',
        title: 'Geometry from Engineering Files',
        body: 'Imported CAD data from the footwear engineering team, then rebuilt each material zone as a separate mesh object to allow per-material shader assignment. The sole unit alone had 14 distinct material zones.',
      },
      {
        num: '02',
        title: 'Fabric & Material Simulation',
        body: 'The upper mesh used procedural displacement with a custom weave pattern derived from macro photography of the physical upper. TPU overlays built with layered clearcoat shaders.',
      },
      {
        num: '03',
        title: 'Hero Film Storyboarding',
        body: 'Developed a 42-frame storyboard with the APEX creative team. The final film opens on the carbon plate in isolation, builds through a material exploded view, and resolves to a full lifestyle moment.',
      },
      {
        num: '04',
        title: 'Multi-Asset Pipeline',
        body: 'Built a parametric camera rig that allowed all 24 e-commerce angles and 6 loops to be derived from a single master scene — ensuring perfect consistency across every deliverable.',
      },
    ],
    metrics: [
      { value: '12', label: 'Markets at launch' },
      { value: '90s', label: 'Hero film runtime' },
      { value: '24', label: 'E-commerce stills delivered' },
      { value: '10w', label: 'End-to-end delivery' },
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
        alt: 'Sneaker hero shot wide',
        span: 'wide',
      },
      {
        src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
        alt: 'Sole detail',
        span: 'normal',
      },
      {
        src: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80',
        alt: 'Material detail upper',
        span: 'normal',
      },
      {
        src: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=1200&q=80',
        alt: 'Lifestyle render dark',
        span: 'wide',
      },
    ],
    nextSlug: 'helios-earbuds-launch',
    nextTitle: 'Helios — Earbuds Launch',
    nextImage:
      'https://images.unsplash.com/photo-1610945264803-c22b62831de9?w=1200&q=80',
  },
  {
    slug: 'helios-earbuds-launch',
    title: 'Helios — Earbuds Launch',
    shortTitle: 'Helios Audio',
    client: 'Helios Audio',
    category: 'Consumer Tech · Audio',
    year: '2023',
    scope: 'Art Direction, Full CGI Campaign',
    services: ['Product Modeling', 'Product Lighting', 'Art Direction', '3D Animation'],
    heroImage:
      'https://images.unsplash.com/photo-1610945264803-c22b62831de9?w=1800&q=85',
    thumbImage:
      'https://images.unsplash.com/photo-1610945264803-c22b62831de9?w=900&q=80',
    tagline: 'Zero physical samples. One hundred percent conviction.',
    overview:
      "Helios Audio launched their debut wireless earbuds having never manufactured a single production unit. The entire go-to-market — investor deck, crowdfunding campaign, press kit, and launch video — was built on CGI. This was total art direction: concepting the visual language of the brand, defining how the product should feel and move on screen, and delivering every asset needed to raise $2.4M in pre-orders.",
    challenge:
      "With no physical reference to photograph and investors scrutinising every pixel for legitimacy, the renders had to be beyond photorealistic — they had to be better than photography. Simultaneously, the visual language had to introduce an entirely new brand to the world, setting a premium positioning against established players with decades of brand equity.",
    approach: [
      {
        num: '01',
        title: 'Brand Visual Language',
        body: 'Before a single polygon was modeled, developed a 40-page visual language document — defining colour palette, lighting philosophy, compositional rules, and emotional register for the Helios brand.',
      },
      {
        num: '02',
        title: 'Form Refinement',
        body: 'Worked iteratively with the industrial design team to refine the earbud geometry for CGI. Several design decisions — the chamfer angle on the stem, the ANC window geometry — were informed by how they read in render.',
      },
      {
        num: '03',
        title: 'Cinematic Lighting System',
        body: 'Developed a signature lighting approach using a deep cobalt background with a high-key warm fill — creating the sense of precision and warmth simultaneously. This became the brand\'s visual signature.',
      },
      {
        num: '04',
        title: 'Full Asset Delivery',
        body: 'Delivered: 1× 60s hero film, 1× 30s cut-down, 6× platform loops, 32 still assets across hero, e-commerce, and lifestyle contexts, and a layered AE project for the in-house team to adapt for regional markets.',
      },
    ],
    metrics: [
      { value: '$2.4M', label: 'Pre-orders raised' },
      { value: '32', label: 'Still assets delivered' },
      { value: '0', label: 'Physical samples used' },
      { value: '6w', label: 'Brand-to-campaign timeline' },
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=1200&q=80',
        alt: 'Earbuds hero wide',
        span: 'wide',
      },
      {
        src: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
        alt: 'Case detail',
        span: 'normal',
      },
      {
        src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
        alt: 'Earbud lifestyle',
        span: 'normal',
      },
      {
        src: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80',
        alt: 'Brand environment render',
        span: 'wide',
      },
    ],
    nextSlug: 'maison-noir-fragrance',
    nextTitle: 'Maison Noir — Fragrance Collection',
    nextImage:
      'https://images.unsplash.com/photo-1596131468568-c42ece6c5c71?w=1200&q=80',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
