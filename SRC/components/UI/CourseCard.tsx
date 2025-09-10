import { Button } from "./ui/button";
import { Clock, Users, Star, BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  category: string;
  instructor: string;
}

const CourseCard = ({ 
  title, 
  description, 
  image, 
  duration, 
  students, 
  rating, 
  price, 
  category, 
  instructor 
}: CourseCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 border border-border/50 hover:border-primary/30">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">By {instructor}</p>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {students.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            12 Lessons
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary">₹{price}</div>
            <div className="text-xs text-muted-foreground">Per course</div>
          </div>
          <Button variant="hero" size="sm" className="shrink-0">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
