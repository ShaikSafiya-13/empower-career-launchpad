
import { mentors } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MentorSection = () => {
  return (
    <section className="py-16 bg-white" id="mentoring">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <span className="text-brand-600 text-sm font-medium uppercase tracking-wider">Personalized Guidance</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Connect with Expert Mentors</h2>
            <p className="text-muted-foreground mb-6">
              Get one-on-one guidance from industry professionals who can provide insider knowledge, review your resume, and help you prepare for interviews.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-accent1 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 11 4-7" /><path d="m19 11-4-7" /><path d="M2 11h20" /><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" /><path d="m9 11 1 9" /><path d="M4.5 15.5h15" /><path d="m15 11-1 9" /></svg>
                </div>
                <div>
                  <h3 className="font-medium">Career Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop a clear roadmap for achieving your professional goals
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-accent2 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                </div>
                <div>
                  <h3 className="font-medium">Resume Reviews</h3>
                  <p className="text-sm text-muted-foreground">
                    Get feedback to create a standout resume that gets noticed
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-accent3 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div>
                  <h3 className="font-medium">Interview Preparation</h3>
                  <p className="text-sm text-muted-foreground">
                    Practice with mock interviews and gain confidence
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-brand-500 hover:bg-brand-600">
              Find a Mentor
            </Button>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.id} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                        <img 
                          src={mentor.avatar} 
                          alt={mentor.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg">{mentor.name}</h3>
                      <div className="text-sm text-brand-600 font-medium mt-1">{mentor.title}</div>
                      <div className="text-xs text-muted-foreground">{mentor.company}</div>
                      
                      <div className="w-full border-t border-border/30 my-4"></div>
                      
                      <div className="flex flex-wrap justify-center gap-1 mb-3">
                        {mentor.expertise.slice(0, 1).map((exp, i) => (
                          <span key={i} className="text-sm text-muted-foreground">
                            {exp}{i < mentor.expertise.length - 1 ? ", " : ""}
                          </span>
                        ))}
                        {mentor.expertise.length > 1 && (
                          <span className="text-sm text-muted-foreground">
                            +{mentor.expertise.length - 1} more
                          </span>
                        )}
                      </div>
                      
                      <button className="text-sm font-medium text-brand-600 hover:text-brand-700">
                        Request Mentoring
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
