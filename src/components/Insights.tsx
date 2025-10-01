import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Insights = () => {
  const insights = [
    {
      category: "Technology",
      title: "The Future of Enterprise AI",
      date: "March 15, 2025",
      description: "Exploring how artificial intelligence is reshaping enterprise operations and creating new opportunities for growth.",
      readTime: "5 min read",
    },
    {
      category: "Innovation",
      title: "Cloud Migration Success Stories",
      date: "March 10, 2025",
      description: "Learn from real-world examples of successful cloud transformation initiatives across industries.",
      readTime: "7 min read",
    },
    {
      category: "Digital Transformation",
      title: "Navigating Digital Disruption",
      date: "March 5, 2025",
      description: "Strategic insights on how enterprises can thrive in an era of constant technological change.",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="insights" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert perspectives on technology trends and business innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {insights.map((insight, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="text-sm text-primary font-semibold mb-3">{insight.category}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{insight.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{insight.description}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{insight.date}</span>
                </div>
                <span>{insight.readTime}</span>
              </div>
              <Button variant="link" className="p-0 h-auto text-primary mt-4 justify-start">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
