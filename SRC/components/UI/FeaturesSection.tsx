
import { 
  Video, 
  Brain, 
  Users, 
  Trophy, 
  Clock, 
  Smartphone,
  BookOpen,
  Target,
  Award
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      description: "Join real-time classes with top educators and interact directly with instructors",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to your pace and learning style",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Peer Learning Groups",
      description: "Connect with fellow learners, form study groups, and grow together",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Earn badges, compete on leaderboards, and make learning fun and engaging",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "Learn Anytime, Anywhere",
      description: "Access courses 24/7 from any device with offline download capabilities",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Seamless learning experience optimized for smartphones and tablets",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "PDFs, practice tests, reference materials, and supplementary content",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set learning goals, track progress, and stay motivated with achievements",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Earn industry-recognized certificates upon course completion",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-secondary">Why Choose</span>
            <span className="bg-hero bg-clip-text text-transparent"> Think Vision Academy?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience next-generation e-learning with features designed specifically for Indian students' success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-hero transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">200+</div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
