import CourseCard from "./CourseCard";
import { Button } from "./ui/button";
import { ArrowRight, Zap, Trophy, Briefcase, GraduationCap } from "lucide-react";

// Import course images
import jeeImage from "@/assets/course-jee.jpg";
import neetImage from "@/assets/course-neet.jpg";
import aiImage from "@/assets/course-ai.jpg";
import schoolImage from "@/assets/course-school.jpg";

const CoursesSection = () => {
  const courseCategories = [
    {
      title: "School Subjects",
      icon: GraduationCap,
      description: "Master fundamentals with interactive lessons",
      courses: [
        {
          title: "Advanced Mathematics for Class 12",
          description: "Comprehensive coverage of calculus, algebra, and geometry with real-world applications",
          image: schoolImage,
          duration: "6 months",
          students: 12500,
          rating: 4.8,
          price: "2,999",
          category: "Mathematics",
          instructor: "Dr. Rajesh Sharma"
        }
      ]
    },
    {
      title: "Competitive Exams",
      icon: Trophy,
      description: "Crack India's toughest entrance exams",
      courses: [
        {
          title: "IIT-JEE Advanced Preparation",
          description: "Complete course covering Physics, Chemistry, and Mathematics for JEE Advanced with mock tests",
          image: jeeImage,
          duration: "12 months",
          students: 8300,
          rating: 4.9,
          price: "14,999",
          category: "IIT-JEE",
          instructor: "Prof. Anil Kumar"
        },
        {
          title: "NEET Medical Entrance Mastery",
          description: "Comprehensive NEET preparation covering Biology, Chemistry, and Physics with clinical insights",
          image: neetImage,
          duration: "10 months",
          students: 6200,
          rating: 4.7,
          price: "12,999",
          category: "NEET",
          instructor: "Dr. Priya Desai"
        }
      ]
    },
    {
      title: "Professional Skills",
      icon: Briefcase,
      description: "Future-proof your career with trending skills",
      courses: [
        {
          title: "Complete AI & Machine Learning",
          description: "From Python basics to advanced ML algorithms, build real AI projects and get industry-ready",
          image: aiImage,
          duration: "8 months",
          students: 15600,
          rating: 4.8,
          price: "19,999",
          category: "AI/ML",
          instructor: "Amit Patel"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-hero bg-clip-text text-transparent">Explore Our</span>
            <span className="text-secondary"> Course Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From school subjects to professional upskilling, we have courses designed for every stage of your learning journey
          </p>
        </div>

        {courseCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-hero rounded-xl">
                  <IconComponent className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {category.courses.map((course, courseIndex) => (
                  <CourseCard key={courseIndex} {...course} />
                ))}
                
                {/* Show more courses placeholder */}
                <div className="bg-card/50 border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">More Courses Coming</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore {category.title.toLowerCase()} courses
                  </p>
                  <Button variant="outline-hero" size="sm">
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Browse All Courses
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
