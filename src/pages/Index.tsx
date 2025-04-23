
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProfiles from "@/components/FeaturedProfiles";
import FeaturedJobs from "@/components/FeaturedJobs";
import TrainingSection from "@/components/TrainingSection";
import MentorSection from "@/components/MentorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProfiles />
        <FeaturedJobs />
        <TrainingSection />
        <MentorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
