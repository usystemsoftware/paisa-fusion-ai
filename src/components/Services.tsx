import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Cpu, Database, Shield, Smartphone, Workflow, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Transform your business with cloud-native solutions and migration strategies",
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      description: "Leverage artificial intelligence and automation to drive innovation",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Turn data into actionable insights with advanced analytics solutions",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your enterprise with comprehensive security solutions",
    },
    {
      icon: Smartphone,
      title: "Digital Experience",
      description: "Create engaging digital experiences for your customers",
    },
    {
      icon: Workflow,
      title: "Consulting",
      description: "Strategic consulting to accelerate your digital transformation",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to help you navigate your digital journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="link" className="p-0 h-auto text-primary">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
