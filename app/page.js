import HeroSection from "@/components/home/HeroSection";
import FounderSection from "@/components/home/FounderSection";
import AboutSection from "@/components/home/AboutSection";
import CampusSection from "@/components/home/CampusSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import NewsAndNoticeSection from "@/components/home/NewsAndNoticeSection";
import AdmissionCTASection from "@/components/home/AdmissionCTASection";
import CourseSection from "@/components/home/CourseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FounderSection />
      <AboutSection />
      <CampusSection />
      <CourseSection />
      <AdmissionCTASection />
      <NewsAndNoticeSection />
      <StatisticsSection />
    </>
  );
}
