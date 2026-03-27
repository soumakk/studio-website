import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProjectCTA from "@/components/projects/ProjectCTA";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectOverview from "@/components/projects/ProjectOverview";

export default function CaseStudyPage() {
  return (
    <>
      <Nav />

      <ProjectOverview
        description="A concept project for Aroma, a fragrance house built on quiet luxury and the richness of oud and smoke. The work focuses on product modeling, dramatic scene composition, and lighting as a storytelling tool — placing the bottle in environments that mirror its character. Each render and animation follows a slow, deliberate reveal, letting light travel across glass surfaces. The result is a visual language that doesn't sell a perfume — it evokes the feeling of wearing one."
        banner="/images/banner-2.png"
      />

      <ProjectGallery
        gallery={[
          {
            path: "Portfolio/Projects/Aroma Perfume/Perfume_Animation_1_w4i8rd",
            alt: "",
            type: "video",
          },
          {
            path: "Portfolio/Projects/Aroma Perfume/Perfume_Animation_2_vgd3h6",
            alt: "",
            type: "video",
          },
          {
            path: "Portfolio/Projects/Aroma Perfume/final-1_mam19t",
            alt: "",
          },
          {
            path: "Portfolio/Projects/Aroma Perfume/final-2_cgwub3",
            alt: "",
          },
          {
            path: "Portfolio/Projects/Aroma Perfume/final-3_celgqc",
            alt: "",
          },
          {
            path: "Portfolio/Projects/Aroma Perfume/final-4_aoympf",
            alt: "",
          },
          {
            path: "Portfolio/Projects/Aroma Perfume/final-5_mgf4za",
            alt: "",
          },
          {
            path: "Portfolio/Projects/Aroma Perfume/final-6_kznlyr",
            alt: "",
          },
        ]}
      />

      <ProjectCTA />

      <Footer />
    </>
  );
}
