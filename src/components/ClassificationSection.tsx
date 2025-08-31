import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Upload, 
  Brain, 
  CheckCircle, 
  Loader2,
  Image as ImageIcon,
  Zap
} from "lucide-react";

const landClasses = [
  { name: "Farmland", color: "bg-green-500", description: "Agricultural cropland and cultivated fields" },
  { name: "Meadow", color: "bg-emerald-400", description: "Natural grassland and pastures" },
  { name: "Forest", color: "bg-green-700", description: "Dense woodland and tree coverage" },
  { name: "Desert", color: "bg-yellow-600", description: "Arid land with sparse vegetation" },
  { name: "Residential", color: "bg-blue-500", description: "Urban and suburban housing areas" },
  { name: "Hills", color: "bg-amber-600", description: "Elevated terrain and mountainous regions" },
  { name: "Roads", color: "bg-gray-500", description: "Transportation networks and infrastructure" },
  { name: "Lakes", color: "bg-blue-400", description: "Large water bodies and reservoirs" },
  { name: "Rivers", color: "bg-cyan-500", description: "Flowing water channels and streams" }
];

const ClassificationSection = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isClassifying, setIsClassifying] = useState(false);
  const [result, setResult] = useState<{class: string, confidence: number} | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImageUrl(URL.createObjectURL(file));
      setResult(null);
      toast({
        title: "Image uploaded successfully",
        description: "Ready for classification analysis",
      });
    }
  };

  const simulateClassification = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsClassifying(true);
    
    // Simulate AI classification with random result
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const randomClass = landClasses[Math.floor(Math.random() * landClasses.length)];
    const confidence = Math.floor(Math.random() * 15) + 85; // 85-99% confidence
    
    setResult({
      class: randomClass.name,
      confidence: confidence
    });
    
    setIsClassifying(false);
    
    toast({
      title: "Classification completed!",
      description: `Detected: ${randomClass.name} (${confidence}% confidence)`,
    });
  };

  const getClassColor = (className: string) => {
    const landClass = landClasses.find(c => c.name === className);
    return landClass?.color || "bg-gray-500";
  };

  const getClassDescription = (className: string) => {
    const landClass = landClasses.find(c => c.name === className);
    return landClass?.description || "";
  };

  return (
    <section id="classify" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            <Brain className="w-4 h-4 mr-2" />
            AI Classification
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Upload & <span className="bg-gradient-hero bg-clip-text text-transparent">Classify Your Images</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload satellite or aerial images to classify land types using our advanced AI model. 
            Get instant results with detailed confidence scores.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Upload Image</h3>
                  <p className="text-muted-foreground mb-6">
                    Select a satellite or aerial image for land classification
                  </p>
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload">
                    <Button className="cursor-pointer bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Choose Image
                    </Button>
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Image Preview */}
            {imageUrl && (
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Image Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={imageUrl} 
                    alt="Uploaded image for classification" 
                    className="w-full h-64 object-cover rounded-lg border"
                  />
                  <Button 
                    onClick={simulateClassification}
                    disabled={isClassifying}
                    className="w-full mt-4 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    {isClassifying ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Classifying...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Classify Image
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Classification Classes */}
            <Card>
              <CardHeader>
                <CardTitle>Supported Land Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {landClasses.map((landClass, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className={`w-4 h-4 rounded ${landClass.color}`} />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{landClass.name}</div>
                        <div className="text-xs text-muted-foreground">{landClass.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Classification Result */}
            {result && (
              <Card className="animate-scale-in border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    Classification Result
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Predicted Class:</span>
                      <Badge className={`${getClassColor(result.class)} text-white border-0`}>
                        {result.class}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Confidence:</span>
                      <span className="font-semibold text-green-600">{result.confidence}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${result.confidence}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Description:</strong> {getClassDescription(result.class)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassificationSection;