
import { Button } from "@/components/ui/button";
import SignUpDialog from "./SignUpDialog";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-brand-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-200 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Launch Your Career with <span className="gradient-text">Confidence</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Find your dream job, get free career training, and connect with mentors who can help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <SignUpDialog>
              <Button size="lg" className="btn-primary text-base">
                Create Free Account
              </Button>
            </SignUpDialog>
            
            <Button variant="outline" size="lg" className="btn-secondary text-base">
              Browse Jobs
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-foreground">2,500+</span>
              <span>Job Listings</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-foreground">150+</span>
              <span>Free Courses</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-foreground">50+</span>
              <span>Expert Mentors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
