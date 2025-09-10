import { Button } from "./ui/button";
import { Play, Award, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Think Vision Academy - Empowering Indian Students" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-hero bg-clip-text text-transparent">Shaping Minds,</span>
              <br />
              <span className="text-secondary">Building Futures</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              India's premier e-learning platform designed for aspirational learners. From IIT-JEE to AI mastery, 
              unlock your potential with Think Vision Academy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Play className="h-5 w-5" />
              Start Your Journey
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
              <BookOpen className="h-5 w-5" />
              Explore Courses
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-hero rounded-full mx-auto mb-2">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary">50,000+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-success rounded-full mx-auto mb-2">
                <Award className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full mx-auto mb-2">
                <BookOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="text-2xl font-bold text-accent-foreground">200+</div>
              <div className="text-sm text-muted-foreground">Expert Courses</div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center items-center hidden">
          <div className="relative">
            <div className="absolute -inset-4 bg-hero opacity-20 rounded-3xl blur-xl"></div>
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-hero border border-primary/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hero rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Interactive Classes</h3>
                    <p className="text-sm text-muted-foreground">Learn from top educators</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Personalized Learning</h3>
                    <p className="text-sm text-muted-foreground">AI-powered course recommendations</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Community Support</h3>
                    <p className="text-sm text-muted-foreground">Connect with fellow learners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
