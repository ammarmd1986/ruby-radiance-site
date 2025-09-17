import englishXpressLogo from "@/assets/englishxpress-logo.png";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={englishXpressLogo} 
                alt="EnglishXpress Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">EnglishXpress</h3>
                <p className="text-sm text-muted-foreground">Learn Better. Go Further!</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              From Bangladesh to the World: Let English be your passport to unlimited opportunities with expert guidance and dedicated support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@englishxpress.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+8801782521290</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#approach" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Approach</a></li>
              <li><a href="#why-join" className="text-muted-foreground hover:text-primary transition-colors text-sm">Why Join Us</a></li>
              <li><a href="#achievers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Success Stories</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EnglishXpress. All rights reserved. | Designed with ❤️ for aspiring global citizens
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;