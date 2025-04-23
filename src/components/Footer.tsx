
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CL</span>
              </div>
              <span className="text-lg font-bold gradient-text">Career Launchpad</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering job seekers with tools, training, and support for career success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Browse Jobs</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Free Training</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Find a Mentor</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Career Resources</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Resume Builder</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Post a Job</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Browse Candidates</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Recruitment Solutions</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Pricing Plans</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-600">Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly career tips and job opportunities delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" size="sm" className="bg-brand-500 hover:bg-brand-600">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Career Launchpad. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-brand-600">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-brand-600">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-brand-600">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
