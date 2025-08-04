import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dish.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Bella Vista
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed animate-fade-in">
          Where culinary artistry meets exceptional dining experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6"
            onClick={() => scrollToSection('menu')}
          >
            Explore Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-6"
            onClick={() => scrollToSection('contact')}
          >
            Reserve Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;