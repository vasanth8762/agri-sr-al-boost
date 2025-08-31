import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// Import gallery images
import farmland1 from "@/assets/gallery/farmland1.jpg";
import farmland2 from "@/assets/gallery/farmland2.jpg";
import meadow1 from "@/assets/gallery/meadow1.jpg";
import meadow2 from "@/assets/gallery/meadow2.jpg";
import forest1 from "@/assets/gallery/forest1.jpg";
import forest2 from "@/assets/gallery/forest2.jpg";
import desert1 from "@/assets/gallery/desert1.jpg";
import desert2 from "@/assets/gallery/desert2.jpg";
import residential1 from "@/assets/gallery/residential1.jpg";
import residential2 from "@/assets/gallery/residential2.jpg";
import hills1 from "@/assets/gallery/hills1.jpg";
import hills2 from "@/assets/gallery/hills2.jpg";
import roads1 from "@/assets/gallery/roads1.jpg";
import lake1 from "@/assets/gallery/lake1.jpg";
import river1 from "@/assets/gallery/river1.jpg";

const galleryData = [
  {
    category: "Farmland",
    description: "Agricultural cropland with organized field patterns, irrigation systems, and various crop types visible from satellite imagery.",
    images: [
      { src: farmland1, alt: "Organized crop fields with geometric patterns" },
      { src: farmland2, alt: "Golden wheat fields ready for harvest" }
    ],
    color: "bg-green-500"
  },
  {
    category: "Meadow", 
    description: "Natural grassland areas used for grazing, featuring rolling hills and scattered vegetation patterns.",
    images: [
      { src: meadow1, alt: "Lush green meadow with rolling hills" },
      { src: meadow2, alt: "Open meadow with wildflowers and natural grass" }
    ],
    color: "bg-emerald-400"
  },
  {
    category: "Forest",
    description: "Dense woodland areas with tree canopy coverage, including both deciduous and coniferous forest types.",
    images: [
      { src: forest1, alt: "Dense forest canopy from aerial view" },
      { src: forest2, alt: "Coniferous forest with natural clearings" }
    ],
    color: "bg-green-700"
  },
  {
    category: "Desert",
    description: "Arid landscapes with minimal vegetation, featuring sand dunes, rocky terrain, and sparse plant life.",
    images: [
      { src: desert1, alt: "Sand dunes and arid desert landscape" },
      { src: desert2, alt: "Rocky desert terrain with sparse vegetation" }
    ],
    color: "bg-yellow-600"
  },
  {
    category: "Residential",
    description: "Urban and suburban areas with housing developments, organized street patterns, and community infrastructure.",
    images: [
      { src: residential1, alt: "Suburban residential area with organized streets" },
      { src: residential2, alt: "Urban neighborhood with houses and gardens" }
    ],
    color: "bg-blue-500"
  },
  {
    category: "Hills",
    description: "Elevated terrain and mountainous regions showing topographical variations and natural elevation changes.",
    images: [
      { src: hills1, alt: "Undulating hilly terrain with elevation changes" },
      { src: hills2, alt: "Mountainous hills with vegetation patterns" }
    ],
    color: "bg-amber-600"
  },
  {
    category: "Roads",
    description: "Transportation infrastructure including highways, roads, and intersections visible in satellite imagery.",
    images: [
      { src: roads1, alt: "Highway network and road intersections" }
    ],
    color: "bg-gray-500"
  },
  {
    category: "Lakes",
    description: "Large water bodies and reservoirs with clear boundaries and surrounding vegetation patterns.",
    images: [
      { src: lake1, alt: "Large lake surrounded by vegetation" }
    ],
    color: "bg-blue-400"
  },
  {
    category: "Rivers", 
    description: "Flowing water channels and streams meandering through landscapes with riparian vegetation.",
    images: [
      { src: river1, alt: "Meandering river with riparian vegetation" }
    ],
    color: "bg-cyan-500"
  }
];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const currentCategory = galleryData[selectedCategory];
  const hasMultipleImages = currentCategory.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentCategory.images.length - 1 : prev - 1
    );
  };

  const selectCategory = (index: number) => {
    setSelectedCategory(index);
    setCurrentImageIndex(0);
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            <ExternalLink className="w-4 h-4 mr-2" />
            Dataset Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Explore <span className="bg-gradient-hero bg-clip-text text-transparent">Land Classifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our comprehensive dataset of remote sensing images showing different land types. 
            Each category contains high-quality satellite imagery with detailed descriptions.
          </p>
        </div>

        {/* Category Selection */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {galleryData.map((category, index) => (
              <Button
                key={index}
                onClick={() => selectCategory(index)}
                variant={selectedCategory === index ? "default" : "outline"}
                className={`${
                  selectedCategory === index 
                    ? "bg-gradient-primary shadow-glow" 
                    : "hover:border-primary/50"
                } transition-all duration-300`}
              >
                <div className={`w-3 h-3 rounded mr-2 ${category.color}`} />
                {category.category}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.images.length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Selected Category Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Display */}
          <div className="relative animate-scale-in">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="relative">
                <img
                  src={currentCategory.images[currentImageIndex].src}
                  alt={currentCategory.images[currentImageIndex].alt}
                  className="w-full h-96 object-cover"
                />
                
                {/* Image Navigation */}
                {hasMultipleImages && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}

                {/* Image Counter */}
                {hasMultipleImages && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-black/70 text-white border-0">
                      {currentImageIndex + 1} / {currentCategory.images.length}
                    </Badge>
                  </div>
                )}
              </div>
            </Card>

            {/* Image Thumbnails */}
            {hasMultipleImages && (
              <div className="flex justify-center gap-2 mt-4">
                {currentCategory.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? "bg-primary scale-110" 
                        : "bg-muted hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Category Information */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-6 h-6 rounded ${currentCategory.color}`} />
                <h3 className="text-2xl md:text-3xl font-bold">{currentCategory.category}</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            {/* Category Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {currentCategory.images.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Sample Images
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">
                    HD
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Resolution
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technical Details */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Technical Details</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• Satellite imagery resolution: 256×256 pixels</div>
                  <div>• Color channels: RGB (Red, Green, Blue)</div>
                  <div>• Classification accuracy: 95%+</div>
                  <div>• Processing time: Real-time</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;