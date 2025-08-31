import { Button } from "@/components/ui/button";
import { ChevronRight, Satellite, Zap } from "lucide-react";
import heroImage from "@/assets/hero-agricultural-satellite.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Agricultural satellite imagery showing precision farming fields" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
            <Satellite className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Remote Sensing</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Transform Agricultural
            </span>
            <br />
            <span className="text-foreground">Monitoring with AI</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enhance low-resolution satellite imagery with advanced super-resolution and active learning 
            technology for intelligent agricultural land classification.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">8x</div>
              <div className="text-sm text-muted-foreground">Resolution Enhancement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">90%</div>
              <div className="text-sm text-muted-foreground">Annotation Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">9</div>
              <div className="text-sm text-muted-foreground">Land Classifications</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
              Get Started
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary/50 transition-colors">
              <Zap className="mr-2 w-4 h-4" />
              View Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;