import Container from "../Container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Descript = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="flex flex-col items-center   md:flex-row">
          <div className="relative flex-1 ">
            <img width="495" height="553" src="/BenefitsPageGraphic.png" />
          </div>
          <div className="relative flex-1">
            <div className="absolute left-[-65px] top-[-84px]   hidden md:block">
              <img src="AbstractWaves.png" />
            </div>
            <div className="absolute  bottom-[-92px] right-20  hidden md:block">
              <img src="Sparkles.png" />
            </div>
            <h3 className="font-montserrat  text-3xl font-bold     ">
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-rose-500">FIT</span>
            </h3>
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
            <div className="mt-6">
              <Button variant="warning">Join now</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Descript;
