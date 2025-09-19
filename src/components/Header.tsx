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
              <h1 className="text-2xl font-bold text-foreground">EnglishXpress</h1>
              <p className="text-base text-muted-foreground">Learn Better. Go Further!</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-3">
            <a href="#home" className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">Home</a>
            <a href="#approach" className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">Our Approach</a>
            <a href="#why-join" className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">Why Join Us</a>
            <a href="#courses" className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">Courses</a>
            <a href="#achievers" className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">Achievers</a>
            <a href="#ielts-tips" className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">IELTS Tips</a>
            <a href="#faq" className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant="whiteOutline" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => {
                const element = document.querySelector('#faq .bg-accent');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;