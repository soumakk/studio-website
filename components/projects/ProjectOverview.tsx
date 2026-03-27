import Container from "../ui/Container";

export default function ProjectOverview({
  description,
  banner,
}: {
  description: string;
  banner: string;
}) {
  return (
    <section className="px-6 mb-16 lg:mb-20">
      <Container>
        <img src={banner} />

        <div className="max-w-5xl mx-auto text-center my-16 lg:my-20">
          <p className="font-body font-light italic text-inc leading-[1.6] text-lg lg:text-xl">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
