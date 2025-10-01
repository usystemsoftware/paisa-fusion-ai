import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Infosys</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#industries" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Industries
            </a>
            <a href="#insights" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Insights
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">Contact Us</Button>
            <Button size="sm" className="hidden md:flex">Get Started</Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 space-y-3">
            <a href="#services" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#industries" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Industries
            </a>
            <a href="#insights" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Insights
            </a>
            <a href="#about" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#careers" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </a>
            <div className="flex flex-col gap-2 pt-3">
              <Button variant="ghost" size="sm">Contact Us</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
