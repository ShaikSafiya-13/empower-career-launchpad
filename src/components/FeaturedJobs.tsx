
import { featuredJobs } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  return (
    <section className="py-16" id="jobs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Featured Job Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover jobs from top companies that match your skills and career goals
            </p>
          </div>
          <a href="#" className="text-brand-600 font-medium hover:text-brand-700 mt-4 md:mt-0">
            Browse all jobs →
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {featuredJobs.slice(0, 6).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-brand-400 text-brand-600 hover:bg-brand-50">
            Load More Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
