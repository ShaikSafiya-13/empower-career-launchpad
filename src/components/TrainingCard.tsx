
import { Training } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface TrainingCardProps {
  training: Training;
}

const TrainingCard = ({ training }: TrainingCardProps) => {
  const levelColors = {
    "Beginner": "bg-accent1 text-green-700",
    "Intermediate": "bg-accent2 text-amber-700",
    "Advanced": "bg-accent3 text-orange-700"
  };

  return (
    <Card className="card-hover overflow-hidden border border-border/40">
      <div className="h-44 overflow-hidden">
        <img 
          src={training.image} 
          alt={training.title} 
          className="h-full w-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/300x150";
          }}
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg">{training.title}</h3>
          <Badge
            className={`${levelColors[training.level]} border-none`}
          >
            {training.level}
          </Badge>
        </div>
        <div className="text-sm font-medium text-brand-600">{training.provider}</div>
        <div className="text-sm text-muted-foreground mt-1">Duration: {training.duration}</div>
        
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
          {training.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mt-4">
          {training.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 py-3 bg-secondary/50 flex justify-center">
        <button className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700">
          <GraduationCap size={16} />
          Enroll Now
        </button>
      </CardFooter>
    </Card>
  );
};

export default TrainingCard;
