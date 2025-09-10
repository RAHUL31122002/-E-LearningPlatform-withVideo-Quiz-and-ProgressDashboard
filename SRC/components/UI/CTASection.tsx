import { Button } from "./ui/button";
import { ArrowRight, Play, Users, Award } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-primary-foreground rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-primary-foreground rounded-lg rotate-12"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
            Join thousands of successful students who chose Think Vision Academy for their learning journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Users className="h-5 w-5" />
              Join Free Trial
            </Button>
          </div>

          {/* Success Stories */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Award className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-2xl font-bold mb-2">2,500+</div>
              <div className="text-primary-foreground/80">IIT-JEE Selections</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Award className="h-8 w-8 mx-auto mb-3 text-green-400" />
              <div className="text-2xl font-bold mb-2">1,800+</div>
              <div className="text-primary-foreground/80">NEET Qualified</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Award className="h-8 w-8 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl font-bold mb-2">5,000+</div>
              <div className="text-primary-foreground/80">Professionals Upskilled</div>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 font-semibold">
              Start Your Success Story Today
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
