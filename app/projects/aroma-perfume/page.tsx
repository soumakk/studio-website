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
        title="Aroma Perfume"
        banner="/images/render-17.png"
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
        title="Art Direction"
        gallery={[
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
        ]}
      />

      <ProjectGallery
        title="Product Shots"
        gallery={[
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
        ]}
      />

      <ProjectCTA />

      <Footer />
    </>
  );
}
