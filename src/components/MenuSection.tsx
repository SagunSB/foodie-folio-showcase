import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const menuCategories = {
    appetizers: {
      title: "Appetizers",
      items: [
        {
          name: "Truffle Arancini",
          description: "Crispy risotto balls with truffle oil and parmesan",
          price: "$18"
        },
        {
          name: "Burrata Caprese",
          description: "Fresh burrata with heirloom tomatoes and basil",
          price: "$22"
        },
        {
          name: "Seared Scallops",
          description: "Pan-seared scallops with cauliflower purée",
          price: "$26"
        },
        {
          name: "Oysters Rockefeller",
          description: "Fresh oysters with spinach, herbs, and butter",
          price: "$24"
        },
        {
          name: "Tuna Tartare",
          description: "Yellowfin tuna with avocado and sesame",
          price: "$28"
        },
        {
          name: "Charcuterie Board",
          description: "Selection of cured meats, cheeses, and accompaniments",
          price: "$32"
        }
      ]
    },
    mains: {
      title: "Main Courses",
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "Grilled wagyu with roasted vegetables and red wine jus",
          price: "$65"
        },
        {
          name: "Mediterranean Sea Bass",
          description: "Pan-seared sea bass with lemon herb crust",
          price: "$42"
        },
        {
          name: "Duck Confit",
          description: "Slow-cooked duck leg with cherry gastrique",
          price: "$38"
        },
        {
          name: "Lobster Risotto",
          description: "Creamy saffron risotto with fresh lobster",
          price: "$48"
        },
        {
          name: "Rack of Lamb",
          description: "Herb-crusted lamb with rosemary jus",
          price: "$52"
        },
        {
          name: "Vegetarian Wellington",
          description: "Seasonal vegetables in puff pastry with mushroom sauce",
          price: "$34"
        }
      ]
    },
    desserts: {
      title: "Desserts",
      items: [
        {
          name: "Chocolate Soufflé",
          description: "Dark chocolate soufflé with vanilla bean ice cream",
          price: "$16"
        },
        {
          name: "Tiramisu",
          description: "Classic tiramisu with mascarpone and espresso",
          price: "$14"
        },
        {
          name: "Crème Brûlée",
          description: "Vanilla bean crème brûlée with fresh berries",
          price: "$12"
        },
        {
          name: "Lemon Tart",
          description: "Citrus tart with meringue and candied lemon",
          price: "$13"
        },
        {
          name: "Chocolate Fondant",
          description: "Warm chocolate cake with molten center",
          price: "$15"
        }
      ]
    },
    beverages: {
      title: "Beverages",
      items: [
        {
          name: "House Wine Selection",
          description: "Red, white, or rosé - ask your server",
          price: "$12-18"
        },
        {
          name: "Craft Cocktails",
          description: "Signature cocktails crafted by our mixologists",
          price: "$16-22"
        },
        {
          name: "Artisan Coffee",
          description: "Single-origin beans, expertly roasted",
          price: "$6"
        },
        {
          name: "Premium Tea Selection",
          description: "Curated selection of fine teas",
          price: "$5"
        }
      ]
    }
  };

  const categoryButtons = [
    { key: "appetizers", label: "Starters" },
    { key: "mains", label: "Mains" },
    { key: "desserts", label: "Desserts" },
    { key: "beverages", label: "Drinks" }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Crafted with passion, served with excellence. Each dish tells a story of culinary artistry.
          </p>
          
          {/* Hick's Law: Simplified Navigation - Only 4 clear choices */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoryButtons.map((category) => (
              <Button
                key={category.key}
                size="lg"
                variant={activeCategory === category.key ? "default" : "outline"}
                onClick={() => setActiveCategory(category.key)}
                className={`px-8 py-3 min-h-[48px] transition-all duration-300 ${
                  activeCategory === category.key 
                    ? "bg-gradient-to-r from-primary to-primary-glow shadow-lg" 
                    : "hover:bg-muted/50 border-2"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Law of Proximity: Related items grouped together */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
                {menuCategories[activeCategory].title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {menuCategories[activeCategory].items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-border/30 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-foreground text-lg">
                        {item.name}
                      </h4>
                      <span className="text-primary font-bold text-xl">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;