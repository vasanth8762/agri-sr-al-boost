import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Telescope, 
  Brain, 
  Target, 
  BarChart3, 
  Layers, 
  Cpu 
} from "lucide-react";

const features = [
  {
    icon: Telescope,
    title: "Super-Resolution Enhancement",
    description: "Transform low-resolution satellite imagery into high-detail agricultural data using advanced AI models with up to 8x resolution improvement.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Brain,
    title: "Active Learning Framework",
    description: "Intelligent sample selection reduces annotation costs by 90% while maintaining classification accuracy through dual-branch selection strategy.",
    gradient: "from-accent to-sky-500"
  },
  {
    icon: Target,
    title: "Precision Land Classification",
    description: "Accurately classify 9 different agricultural land types including farmland, meadow, forest, and more with AI-powered analysis.",
    gradient: "from-secondary to-amber-600"
  },
  {
    icon: BarChart3,
    title: "Intelligent Analytics",
    description: "Advanced analytics dashboard provides insights into crop patterns, land usage, and agricultural productivity metrics.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: Layers,
    title: "Multi-Scale Processing",
    description: "Process satellite imagery at multiple resolutions and scales to extract detailed agricultural features and patterns.",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: Cpu,
    title: "Edge AI Optimization",
    description: "Optimized for edge deployment with efficient neural network architectures that work on standard agricultural equipment.",
    gradient: "from-rose-500 to-pink-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Advanced <span className="bg-gradient-primary bg-clip-text text-transparent">Agricultural AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge technology combines super-resolution imaging with active learning 
            to revolutionize agricultural remote sensing and land management.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;