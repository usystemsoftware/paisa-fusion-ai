import { Button } from "@/components/ui/button";
import { CreditCard, FileText, Shield, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">FinanceHub</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#credit-score" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Credit Score
            </a>
            <a href="#loans" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Loans
            </a>
            <a href="#credit-cards" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Credit Cards
            </a>
            <a href="#insurance" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Insurance
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Login</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
