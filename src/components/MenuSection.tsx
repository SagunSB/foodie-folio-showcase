import { Card, CardContent } from "@/components/ui/card";

const MenuSection = () => {
  const menuCategories = [
    {
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
        }
      ]
    },
    {
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
        }
      ]
    },
    {
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
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafted with passion, served with excellence. Each dish tells a story of culinary artistry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-border/30 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground text-lg">
                          {item.name}
                        </h4>
                        <span className="text-primary font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;