
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Имитация данных о брендах
const brands = {
  all: [
    { id: 1, name: "Chanel", logo: "https://source.unsplash.com/random/400x200?chanel", category: "luxury" },
    { id: 2, name: "Zara", logo: "https://source.unsplash.com/random/400x200?zara", category: "casual" },
    { id: 3, name: "Nike", logo: "https://source.unsplash.com/random/400x200?nike", category: "sportswear" },
    { id: 4, name: "H&M", logo: "https://source.unsplash.com/random/400x200?h&m", category: "casual" },
    { id: 5, name: "Gucci", logo: "https://source.unsplash.com/random/400x200?gucci", category: "luxury" },
    { id: 6, name: "Adidas", logo: "https://source.unsplash.com/random/400x200?adidas", category: "sportswear" },
    { id: 7, name: "COS", logo: "https://source.unsplash.com/random/400x200?cos", category: "casual" },
    { id: 8, name: "Dior", logo: "https://source.unsplash.com/random/400x200?dior", category: "luxury" },
  ],
  get luxury() { return this.all.filter(brand => brand.category === "luxury"); },
  get casual() { return this.all.filter(brand => brand.category === "casual"); },
  get sportswear() { return this.all.filter(brand => brand.category === "sportswear"); },
};

const BrandCards = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  return (
    <section id="бренды" className="py-16 md:py-24 bg-[#F5F0E5]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
            Мои любимые бренды
          </h2>
          <p className="text-gray-600">
            Бренды, которые я рекомендую за их качество, стиль и инновации.
            Эти марки стали частью моего гардероба и стиля жизни.
          </p>
        </div>

        <Tabs 
          defaultValue="all" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="fade-in"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/50 p-1">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-white data-[state=active]:text-[#1A1F2C] px-6"
              >
                Все
              </TabsTrigger>
              <TabsTrigger 
                value="luxury" 
                className="data-[state=active]:bg-white data-[state=active]:text-[#1A1F2C] px-6"
              >
                Люкс
              </TabsTrigger>
              <TabsTrigger 
                value="casual" 
                className="data-[state=active]:bg-white data-[state=active]:text-[#1A1F2C] px-6"
              >
                Повседневные
              </TabsTrigger>
              <TabsTrigger 
                value="sportswear" 
                className="data-[state=active]:bg-white data-[state=active]:text-[#1A1F2C] px-6"
              >
                Спортивные
              </TabsTrigger>
            </TabsList>
          </div>

          {(["all", "luxury", "casual", "sportswear"] as const).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {brands[tab].map((brand) => (
                  <Card 
                    key={brand.id}
                    className="overflow-hidden border-none bg-white shadow hover:shadow-xl transition-all cursor-pointer hover-scale fade-in"
                    onMouseEnter={() => setHoveredBrand(brand.id)}
                    onMouseLeave={() => setHoveredBrand(null)}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="w-24 h-24 mb-4 flex items-center justify-center bg-[#F5F0E5] rounded-full p-4">
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-2">{brand.name}</h3>
                      <p className="text-sm text-gray-500 capitalize mb-4">{brand.category}</p>
                      
                      <Button 
                        variant="ghost" 
                        className={`mt-auto text-[#9B87F5] hover:text-[#8B5CF6] hover:bg-[#F5F0E5]/50 transition-all ${
                          hoveredBrand === brand.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        Подробнее
                        <Icon name="ArrowRight" className="ml-1" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12 fade-in">
          <Button 
            className="bg-[#9B87F5] hover:bg-[#8B5CF6] text-white px-8 py-6 rounded-full"
          >
            Все бренды
            <Icon name="Grid" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandCards;
