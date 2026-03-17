import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProjectCTA from "@/components/projects/ProjectCTA";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectOverview from "@/components/projects/ProjectOverview";

export default function CaseStudyPage() {
  return (
    <>
      <Nav />

      <ProjectHero
        title="Crimson Leaf Wine"
        banner="/images/wines/banner-1.png"
        tagline="Visual Identity & Product Campaign"
      />

      <ProjectInfo
        info={{
          type: "Concept Project",
          year: "2026",
          scope: "Product Modelling, Art Direction, Animation",
        }}
      />

      <ProjectOverview
        title="The Overview"
        description="A concept project for Aroma, a fragrance house built on quiet luxury and the richness of oud and smoke. The work focuses on product modeling, dramatic scene composition, and lighting as a storytelling tool — placing the bottle in environments that mirror its character. Each render and animation follows a slow, deliberate reveal, letting light travel across glass surfaces. The result is a visual language that doesn't sell a perfume — it evokes the feeling of wearing one."
      />

      <ProjectGallery
        title="Still shots"
        gallery={[
          {
            path: "/images/wines/render1.png",
            alt: "",
          },
          {
            path: "/images/wines/render2.png",
            alt: "",
          },
          {
            path: "/images/wines/render3.png",
            alt: "",
          },
        ]}
      />

      <ProjectCTA />

      <Footer />
    </>
  );
}
