
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import JobCard from "@/components/JobCard";
import { featuredJobs } from "@/data/mockData";

const FindJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6">Find Your Dream Job</h1>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Search jobs by title, company, or keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12"
              />
            </div>
            <Button className="h-12 bg-brand-500 hover:bg-brand-600">
              <Search className="mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
