import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Safe & Secure</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Check Your <span className="text-primary">Credit Score</span> for Free
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Get instant access to your credit score, personalized loan offers, and the best credit cards tailored to your profile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Check Credit Score
              </Button>
              <Button size="lg" variant="outline">
                Compare Loans
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-foreground">5M+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Partner Banks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">₹10Cr+</div>
                <div className="text-sm text-muted-foreground">Loans Disbursed</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 shadow-large">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Free Credit Score</h3>
                  <p className="text-muted-foreground text-sm">
                    Check your CIBIL score instantly without any impact on your credit report
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-secondary/20 shadow-large">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Instant Approval</h3>
                  <p className="text-muted-foreground text-sm">
                    Get pre-approved offers from 50+ banks and NBFCs in minutes
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border shadow-large">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-muted">
                  <Shield className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">100% Secure</h3>
                  <p className="text-muted-foreground text-sm">
                    Bank-level security with 256-bit encryption to protect your data
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
