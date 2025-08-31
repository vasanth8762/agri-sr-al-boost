import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Leaf,
  Shield,
  Globe
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Reduce agricultural monitoring costs by up to 90% through intelligent active learning and automated analysis.",
    percentage: "90%",
    color: "text-green-600"
  },
  {
    icon: Clock,
    title: "Time Efficiency", 
    description: "Accelerate land classification processes from weeks to hours with AI-powered automation.",
    percentage: "10x",
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Accuracy Improvement",
    description: "Achieve higher classification accuracy with enhanced resolution and intelligent feature extraction.",
    percentage: "95%",
    color: "text-primary"
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Enable precision agriculture practices that optimize resource usage and environmental impact.",
    percentage: "40%",
    color: "text-emerald-600"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Early detection of crop issues and land changes for proactive agricultural management.",
    percentage: "85%",
    color: "text-amber-600"
  },
  {
    icon: Globe,
    title: "Scalability",
    description: "Deploy across large agricultural areas with consistent performance and reliability.",
    percentage: "100%",
    color: "text-accent"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Impact & Benefits
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Agriculture with
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Smart Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the measurable impact of AI-powered agricultural remote sensing 
            on productivity, sustainability, and operational efficiency.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary p-2.5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className={`text-2xl font-bold ${benefit.color}`}>
                      {benefit.percentage}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Join 500+ agricultural organizations transforming their operations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;