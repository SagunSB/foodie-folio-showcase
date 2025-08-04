import restaurantInterior from "@/assets/restaurant-interior.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Bella Vista
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A culinary journey that began with passion and continues with excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2025, DELICIOUS BITES has been a cornerstone of fine dining in the heart of the city. 
                  Our commitment to exceptional cuisine and unparalleled service has earned us recognition 
                  among food enthusiasts and critics alike.
                </p>
                <p>
                  We believe that dining is more than just eating—it's an experience that engages all the senses. 
                  From the carefully curated ambiance to the artfully plated dishes, every detail is designed 
                  to create memorable moments.
                </p>
                <p>
                  Our team of talented chefs sources the finest ingredients from local farms and international 
                  suppliers, ensuring that each dish reflects our commitment to quality and sustainability.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={restaurantInterior} 
                alt="Bella Vista Restaurant Interior" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src={chefCooking} 
                alt="Chef preparing dish" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-3xl font-bold text-primary mb-6">
                Culinary Excellence
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Led by Executive Chef Marco Antonelli, our culinary team brings together traditional 
                  techniques with modern innovation. Chef Antonelli's 20 years of experience in 
                  Michelin-starred restaurants around the world influences every dish we serve.
                </p>
                <p>
                  Our menu changes seasonally to showcase the best ingredients available, and we're 
                  proud to support local farmers and sustainable practices. Each dish is a carefully 
                  crafted masterpiece that balances flavor, texture, and visual appeal.
                </p>
                <p>
                  We invite you to join us for an unforgettable culinary journey where every meal 
                  is a celebration of taste, creativity, and passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;