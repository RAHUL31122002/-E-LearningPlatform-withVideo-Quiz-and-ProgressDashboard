import { Button } from "./ui/button";
import { Menu, User, Search, Bell } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Think Vision Academy" className="h-10 w-12 object-cover rounded-lg" />
            <div>
              <h1 className="text-xl font-bold bg-hero bg-clip-text text-transparent">Think Vision Academy</h1>
              <p className="text-xs text-muted-foreground">Shaping Minds, Building Futures</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#competitive" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Competitive Exams</a>
            <a href="#professional" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Professional</a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline-hero" size="sm">
            <User className="h-4 w-4" />
            Login
          </Button>
          <Button variant="hero" size="sm" className="hidden md:flex">
            Start Learning
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
