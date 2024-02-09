import Image from "next/image";
import Container from "../Container";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="flex flex-col-reverse items-center  justify-between md:flex-row   ">
          <div className="">
            <div className="relative">
              <img
                className="object-cover"
                alt="home-page"
                src="/HomePageText.png"
              />
              <div className="absolute left-[-10px] top-[-100px] hidden  md:block">
                <img src="/EvolveText.png" alt="evogym" />
              </div>
            </div>
            <p className="mt-5 text-base">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            <div className="mt-5 flex flex-row items-center gap-3">
              <Button variant="warning">Join now</Button>
              <p className="cursor-pointer transition hover:text-rose-500">
                Learn more
              </p>
            </div>
          </div>
          <div className="relative h-[628px] w-[575px]">
            <Image
              className="object-cover"
              src="/HomePageGraphic.png"
              alt="home-img"
              fill
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
