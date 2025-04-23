
import { featuredUsers } from "@/data/mockData";
import ProfileCard from "./ProfileCard";

const FeaturedProfiles = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Featured Professionals</h2>
            <p className="text-muted-foreground max-w-2xl">
              Connect with talented job seekers ready to bring value to your organization
            </p>
          </div>
          <a href="#" className="text-brand-600 font-medium hover:text-brand-700 mt-4 md:mt-0">
            View all profiles →
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredUsers.map((user) => (
            <ProfileCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfiles;
