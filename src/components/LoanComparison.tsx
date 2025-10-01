import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const loans = [
  {
    bank: "HDFC Bank",
    type: "Personal Loan",
    interest: "10.5%",
    amount: "Up to ₹40 Lakhs",
    tenure: "5 Years",
    processing: "1-2%",
    featured: true,
    logo: "🏦"
  },
  {
    bank: "ICICI Bank",
    type: "Personal Loan",
    interest: "10.75%",
    amount: "Up to ₹50 Lakhs",
    tenure: "6 Years",
    processing: "2%",
    featured: false,
    logo: "🏦"
  },
  {
    bank: "SBI",
    type: "Personal Loan",
    interest: "11.15%",
    amount: "Up to ₹20 Lakhs",
    tenure: "5 Years",
    processing: "1%",
    featured: false,
    logo: "🏦"
  }
];

const LoanComparison = () => {
  return (
    <section id="loans" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Compare Personal Loans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the best interest rates from top banks. Pre-approved offers with instant disbursal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {loans.map((loan, index) => (
            <Card key={index} className={`p-6 relative ${loan.featured ? 'border-primary shadow-large' : ''}`}>
              {loan.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Best Offer
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{loan.logo}</div>
                <h3 className="font-bold text-xl mb-1">{loan.bank}</h3>
                <p className="text-sm text-muted-foreground">{loan.type}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-muted-foreground">Interest Rate</span>
                  <span className="font-semibold text-primary">{loan.interest} p.a.</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-muted-foreground">Loan Amount</span>
                  <span className="font-semibold">{loan.amount}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-muted-foreground">Tenure</span>
                  <span className="font-semibold">{loan.tenure}</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">Processing Fee</span>
                  <span className="font-semibold">{loan.processing}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Instant Approval</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Minimal Documentation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Quick Disbursal</span>
                </div>
              </div>

              <Button className="w-full" variant={loan.featured ? "default" : "outline"}>
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanComparison;
