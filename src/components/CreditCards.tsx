import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const creditCards = [
  {
    name: "HDFC Regalia",
    bank: "HDFC Bank",
    type: "Premium",
    joiningFee: "₹2,500",
    annualFee: "₹2,500",
    rewards: "4 Reward Points per ₹150",
    features: ["Airport Lounge", "Welcome Benefits", "Fuel Surcharge Waiver"],
    rating: 4.5,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "SBI Elite",
    bank: "SBI Card",
    type: "Lifestyle",
    joiningFee: "₹4,999",
    annualFee: "₹4,999",
    rewards: "5 Reward Points per ₹100",
    features: ["Golf Program", "Concierge Services", "Travel Benefits"],
    rating: 4.3,
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "ICICI Platinum",
    bank: "ICICI Bank",
    type: "Shopping",
    joiningFee: "₹499",
    annualFee: "₹499",
    rewards: "2 Reward Points per ₹100",
    features: ["E-commerce Benefits", "Movie Offers", "Dining Rewards"],
    rating: 4.2,
    color: "from-emerald-500 to-teal-600"
  }
];

const CreditCards = () => {
  return (
    <section id="credit-cards" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Best Credit Cards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect credit card that matches your lifestyle and spending pattern
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {creditCards.map((card, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-large transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${card.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-white">
                  <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30">
                    {card.type}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-1">{card.name}</h3>
                  <p className="text-sm opacity-90">{card.bank}</p>
                  <div className="absolute bottom-6 right-6 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">{card.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Joining Fee</p>
                    <p className="font-semibold">{card.joiningFee}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Annual Fee</p>
                    <p className="font-semibold">{card.annualFee}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Rewards</p>
                  <p className="font-semibold text-sm">{card.rewards}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full">Apply Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditCards;
