import { Button } from "@/components/ui/button";
import englishXpressLogo from "@/assets/englishxpress-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={englishXpressLogo} 
              alt="EnglishXpress Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">EnglishXpress</h1>
              <p className="text-sm text-muted-foreground">Learn Better. Go Further!</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#approach" className="text-foreground hover:text-primary transition-colors">Our Approach</a>
            <a href="#why-join" className="text-foreground hover:text-primary transition-colors">Why Join Us</a>
            <a href="#achievers" className="text-foreground hover:text-primary transition-colors">Achievers</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="whiteOutline" size="sm" className="hidden md:flex">
              Contact Us
            </Button>
            <Button variant="redSolid" size="sm">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;