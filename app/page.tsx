import ContactUs from "@/components/Contact-us/Contact-us";
import Hero from "@/components/Hero/Hero";
import Sponsors from "@/components/Sponsors";
import Benefits from "@/components/benefits/Benefits";
import Descript from "@/components/descript/Descript";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Benefits />
      <Descript />
      <ContactUs />
    </div>
  );
}
