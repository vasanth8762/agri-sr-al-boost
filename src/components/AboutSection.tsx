import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Satellite, 
  TreePine, 
  Wheat,
  Mountain,
  Waves
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Monitor agricultural lands worldwide with satellite imagery and remote sensing technology."
    },
    {
      icon: Satellite,
      title: "Advanced Sensors",
      description: "Utilize multi-spectral satellite data for accurate land classification and analysis."
    },
    {
      icon: TreePine,
      title: "Environmental Impact",
      description: "Track deforestation, urban expansion, and environmental changes over time."
    },
    {
      icon: Wheat,
      title: "Precision Agriculture",
      description: "Optimize crop management and agricultural planning with detailed land analysis."
    },
    {
      icon: Mountain,
      title: "Terrain Analysis",
      description: "Classify different geographical features including hills, valleys, and plains."
    },
    {
      icon: Waves,
      title: "Water Resources",
      description: "Identify and monitor water bodies, rivers, and irrigation systems."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            About Remote Sensing
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionizing <span className="bg-gradient-hero bg-clip-text text-transparent">Land Classification</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Remote sensing technology enables us to monitor and classify Earth's surface from space, 
            providing crucial insights for agriculture, environmental conservation, and urban planning. 
            Our AI-powered platform makes this technology accessible to everyone.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold">
              Why Remote Sensing Matters
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Agricultural Monitoring:</strong> Track crop health, 
                identify pest infestations, and optimize irrigation patterns across vast agricultural areas.
              </p>
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Environmental Protection:</strong> Monitor deforestation, 
                track wildlife habitats, and assess the impact of climate change on ecosystems.
              </p>
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Urban Planning:</strong> Analyze urban sprawl, 
                identify suitable locations for development, and manage land use efficiently.
              </p>
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Disaster Management:</strong> Assess flood damage, 
                monitor drought conditions, and track natural disasters in real-time.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <div className="text-sm text-muted-foreground">Land Classifications</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
                <div className="text-sm text-muted-foreground">Processing</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">Global</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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

export default AboutSection;