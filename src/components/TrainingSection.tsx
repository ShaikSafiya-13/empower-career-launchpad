
import { trainings } from "@/data/mockData";
import TrainingCard from "./TrainingCard";
import { Button } from "@/components/ui/button";

const TrainingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/30" id="training">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-brand-600 text-sm font-medium uppercase tracking-wider">Free Career Training</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Learn In-Demand Skills</h2>
          <p className="text-muted-foreground">
            Access free, high-quality training resources to gain the skills employers are looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trainings.map((training) => (
            <TrainingCard key={training.id} training={training} />
          ))}
        </div>
        
        <div className="bg-accent4 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-3">Need Personalized Learning Path?</h3>
              <p className="text-muted-foreground max-w-xl">
                Answer a few questions about your goals and experience, and we'll design a custom learning path just for you.
              </p>
            </div>
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white">
              Get Custom Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
