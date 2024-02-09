import Container from "./Container";

const Sponsors = () => {
  return (
    <div className="hidden w-full bg-[#DBBEBDFF] py-16 md:block">
      <Container>
        <div className="flex flex-row items-center justify-center gap-60 ">
          <img src="/SponsorForbes.png" />
          <img src="/SponsorFortune.png" />
          <img src="/SponsorRedBull.png" />
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
