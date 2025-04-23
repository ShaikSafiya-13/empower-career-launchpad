
import { User } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { User as UserIcon } from "lucide-react";

interface ProfileCardProps {
  user: User;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <Card className="card-hover overflow-hidden border border-border/40">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/150";
            }}
          />
        </div>
        <h3 className="font-semibold text-lg">{user.name}</h3>
        <div className="text-sm text-brand-600 font-medium mt-1">{user.role}</div>
        <div className="text-sm text-muted-foreground mt-1">{user.location}</div>
        
        <div className="w-full border-t border-border/30 my-4"></div>
        
        <div className="flex flex-wrap justify-center gap-1 mt-2">
          {user.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs font-normal">
              {skill}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
          {user.bio}
        </p>
      </CardContent>
      <CardFooter className="px-6 py-3 bg-secondary/50 flex justify-center">
        <button className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700">
          <UserIcon size={16} />
          View Profile
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
