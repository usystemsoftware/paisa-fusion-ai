import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Shield, TrendingUp } from "lucide-react";

const CreditScoreChecker = () => {
  const [showScore, setShowScore] = useState(false);
  const mockScore = 750;

  const getScoreColor = (score: number) => {
    if (score >= 750) return "text-secondary";
    if (score >= 650) return "text-primary";
    return "text-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 750) return "Excellent";
    if (score >= 650) return "Good";
    return "Fair";
  };

  return (
    <section id="credit-score" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Check Your Credit Score</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your free CIBIL score instantly. No hidden charges, no impact on your credit report.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-large">
            {!showScore ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Your information is 100% safe and secure</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" type="tel" placeholder="Enter your mobile number" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input id="pan" placeholder="Enter your PAN number" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="mt-2" />
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90" 
                  size="lg"
                  onClick={() => setShowScore(true)}
                >
                  Check My Credit Score
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By continuing, you agree to our Terms & Conditions
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 mb-4">
                    <div className={`text-5xl font-bold ${getScoreColor(mockScore)}`}>
                      {mockScore}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{getScoreLabel(mockScore)} Credit Score</h3>
                  <p className="text-muted-foreground">As of {new Date().toLocaleDateString()}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Score Range</span>
                    <span className="font-medium">300 - 900</span>
                  </div>
                  <Progress value={(mockScore - 300) / 6} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>300</span>
                    <span>900</span>
                  </div>
                </div>

                <div className="grid gap-3 pt-4">
                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">Credit Score Improved</div>
                      <div className="text-xs text-muted-foreground">+25 points from last month</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Button variant="outline">View Full Report</Button>
                  <Button className="bg-secondary hover:bg-secondary/90">Get Loan Offers</Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreChecker;
