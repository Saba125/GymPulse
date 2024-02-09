import Container from "../Container";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitItem from "./BenefitItem";
const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];
const Benefits = () => {
  return (
    <div className="mt-8">
      <Container>
        <h3 className="font-montserrat basis-3/5 text-3xl font-bold     ">
          MORE THAN JUST GYM.
        </h3>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
        <div className="mt-5 flex  flex-col gap-5 md:flex-row">
          {benefits.map((benefit) => (
            <BenefitItem benefit={benefit} key={benefit.description} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
