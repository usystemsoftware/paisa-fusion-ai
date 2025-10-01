import { Card } from "@/components/ui/card";
import { Building, Plane, ShoppingBag, Heart, Landmark, Factory } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Landmark,
      title: "Banking & Financial Services",
      description: "Digital transformation for the financial sector",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Innovative healthcare technology solutions",
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Reimagine retail with digital solutions",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 and smart manufacturing",
    },
    {
      icon: Plane,
      title: "Travel & Logistics",
      description: "Connected supply chain solutions",
    },
    {
      icon: Building,
      title: "Energy & Utilities",
      description: "Sustainable energy solutions",
    },
  ];

  return (
    <section id="industries" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for diverse industry challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105">
              <industry.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm">{industry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
