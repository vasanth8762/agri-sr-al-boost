import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "#about" },
      { name: "Classification", href: "#classify" },
      { name: "Gallery", href: "#gallery" },
      { name: "Documentation", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" }
    ],
    resources: [
      { name: "API Documentation", href: "#" },
      { name: "Research Papers", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Support", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg p-1.5">
                  <Leaf className="w-full h-full text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  LandSense AI
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Revolutionizing agricultural monitoring and land classification through 
                advanced AI and remote sensing technology. Making precision agriculture 
                accessible to everyone.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 LandSense AI. All rights reserved. | Built with advanced remote sensing technology.
          </p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="text-sm text-muted-foreground">
              Scroll to top
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-glow"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;