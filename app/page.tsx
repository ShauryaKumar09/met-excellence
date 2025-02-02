import Navbar from "@/components/Navbar";
import Face from "@/components/Face";
import Image from "next/image";
import OurMissionPage from "@/components/OurMission";
import TutorSection from "@/components/TutorSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Face />
      <OurMissionPage />
      <TutorSection />
      <Footer />
    </div>
  );
}
