import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import AiTypes from "../components/AiTypes";
import AiBenefits from "../components/AiBenefits";
import ContactInfo from "../components/Contacts";
import FooterSection from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AiTypes/>
      <AiBenefits/>
      <ContactInfo/>
      <FooterSection/>
    </>
  );
}
