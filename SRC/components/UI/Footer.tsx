

import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Think Vision Academy" className="h-12 w-14 object-cover rounded-lg" />
              <div>
                <h3 className="text-xl font-bold">Think Vision Academy</h3>
                <p className="text-sm text-secondary-foreground/80">Shaping Minds, Building Futures</p>
              </div>
            </div>
            <p className="text-secondary-foreground/90 leading-relaxed">
              India's premier e-learning platform empowering millions of students to achieve their academic and professional dreams.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-secondary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary-foreground/10">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Courses</h4>
            <ul className="space-y-2 text-secondary-foreground/90">
              <li><a href="#" className="hover:text-primary-glow transition-colors">School Subjects</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">IIT-JEE Preparation</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">NEET Preparation</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">UPSC Civil Services</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Professional Skills</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">AI & Data Science</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-secondary-foreground/90">
              <li><a href="#" className="hover:text-primary-glow transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Student Dashboard</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Instructor Portal</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Career Guidance</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Scholarship Programs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-secondary-foreground/90">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span>support@thinkvision.academy</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-glow mt-1" />
                <span>Think Vision Academy<br />Education Tower, Sector 62<br />Noida, UP 201309, India</span>
              </div>
            </div>

            {/* Pricing Note */}
            <div className="mt-6 p-4 bg-secondary-foreground/10 rounded-lg">
              <h5 className="font-semibold text-primary-glow mb-2">Professional Branding Package</h5>
              <p className="text-sm text-secondary-foreground/90">
                Complete brand identity design starting at <span className="font-semibold text-primary-glow">₹25,000</span>
              </p>
              <p className="text-xs text-secondary-foreground/70 mt-1">
                Includes logo design, brand guidelines, marketing materials
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/80 text-sm">
            © 2024 Think Vision Academy. All rights reserved. | Empowering Indian Education
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/80">
            <a href="#" className="hover:text-primary-glow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-glow transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-glow transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
