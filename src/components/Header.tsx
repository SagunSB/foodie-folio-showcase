import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-primary">
            Bella Vista
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-muted/50 font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-muted/50 font-medium"
            >
              About
            </button>
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 min-h-[44px]"
            >
              Reserve Table
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-left text-foreground hover:text-primary transition-colors py-3 px-2 hover:bg-muted/50 rounded-md font-medium"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors py-3 px-2 hover:bg-muted/50 rounded-md font-medium"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow w-full mt-2"
              >
                Reserve Table
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;