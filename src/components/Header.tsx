import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import englishXpressLogo from "@/assets/englishxpress-logo.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after clicking
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Our Approach", href: "#approach" },
    { label: "Why Join Us", href: "#why-join" },
    { label: "Courses", href: "#courses" },
    { label: "Achievers", href: "#achievers" },
    { label: "IELTS Tips", href: "#ielts-tips" },
    { label: "FAQ", href: "#faq" }
  ];

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
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant="whiteOutline" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => scrollToSection('#faq')}
            >
              Contact Us
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[50vw] max-w-sm h-[50vh] max-h-96">
                <div className="flex flex-col gap-1.5 mt-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <img 
                      src={englishXpressLogo} 
                      alt="EnglishXpress Logo" 
                      className="h-5 w-auto"
                    />
                    <div>
                      <h3 className="text-responsive-sm font-bold text-foreground">EnglishXpress</h3>
                      <p className="text-responsive-xs text-muted-foreground">Learn Better. Go Further!</p>
                    </div>
                  </div>
                  
                  {menuItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-2.5 py-1.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-responsive-xs"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="mt-1.5 text-responsive-xs py-1.5 h-auto"
                    onClick={() => scrollToSection('#faq')}
                  >
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;