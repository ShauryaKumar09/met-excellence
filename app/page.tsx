import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Face from "@/components/Face";
import OurMissionPage from "@/components/OurMission";
import TutorSection from "@/components/TutorSection";
import TestimonialsPage from '@/components/Testimonials';
import Footer from "@/components/Footer";
import NewsSlice from "@/components/NewsSlice";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | METExcellence</title>
        <meta name="description" content="Welcome to METExcellence. Our mission is to provide high-quality, completely free tutoring for those who need it most." />
        <meta property="og:title" content="Home | METExcellence" />
        <meta property="og:description" content="Welcome to METExcellence. Our mission is to provide high-quality, completely free tutoring for those who need it most." />
      </Head>
      <Navbar />
      <Face />
      <NewsSlice />
      <OurMissionPage />
      <TutorSection />
      <TestimonialsPage />
      <Footer />
    </div>
  );
}
