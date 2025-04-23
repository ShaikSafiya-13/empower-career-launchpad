
import { Job } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="card-hover overflow-hidden border border-border/40">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
            <img 
              src={job.logo} 
              alt={`${job.company} logo`} 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <Badge variant="outline" className="bg-accent1 text-brand-600 border-brand-100">
                {job.type}
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground mt-1">{job.company}</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <span>{job.location}</span>
              <span className="text-xs">•</span>
              <span>{job.salary}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-secondary/50 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
        <button className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700">
          <Briefcase size={16} />
          Apply Now
        </button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
