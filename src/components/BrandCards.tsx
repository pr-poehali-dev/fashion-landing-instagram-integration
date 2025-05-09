
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Имитация данных о культовых брендах 60-х
const brands = {
  all: [
    { id: 1, name: "MARY QUANT", logo: "https://source.unsplash.com/random/400x200?fashion,mod", description: "Изобретательница мини-юбки", category: "legendary" },
    { id: 2, name: "BIBA", logo: "https://source.unsplash.com/random/400x200?retro,store", description: "Лондонский модный бутик", category: "stores" },
    { id: 3, name: "PUCCI", logo: "https://source.unsplash.com/random/400x200?pattern,colorful", description: "Психоделические принты", category: "legendary" },
    { id: 4, name: "PIERRE CARDIN", logo: "https://source.unsplash.com/random/400x200?futuristic,design", description: "Космический модернизм", category: "legendary" },
    { id: 5, name: "YVES SAINT LAURENT", logo: "https://source.unsplash.com/random/400x200?mondriant,dress", description: "Платья Мондриан", category: "legendary" },
    { id: 6, name: "COURRÈGES", logo: "https://source.unsplash.com/random/400x200?space,white", description: "Космическая мода", category: "legendary" },
    { id: 7, name: "CARNABY STREET", logo: "https://source.unsplash.com/random/400x200?london,street", description: "Модная улица Лондона", category: "stores" },
    { id: 8, name: "PACO RABANNE", logo: "https://source.unsplash.com/random/400x200?metal,fashion", description: "Платья из металла", category: "legendary" },
  ],
  get legendary() { return this.all.filter(brand => brand.category === "legendary"); },
  get stores() { return this.all.filter(brand => brand.category === "stores"); },
};

const BrandCards = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  
  // Случайные цвета для карточек в стиле 60-х
  const getRandomColor = (index: number) => {
    const colors = ["retro-orange", "retro-yellow", "retro-mint", "retro-pink", "retro-teal"];
    return colors[index % colors.length];
  };

  return (
    <section id="бренды" className="py-16 md:py-24 bg-retro-beige relative">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-retro-yellow skew-y-1"></div>
      <div className="absolute inset-0 retro-checkerboard text-retro-navy"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
          <h2 className="font-bebas-neue text-5xl md:text-6xl text-retro-navy mb-4 tracking-widest">
            КУЛЬТОВЫЕ <span className="text-retro-orange">БРЕНДЫ 60-х</span>
          </h2>
          
          <div className="w-24 h-1 bg-retro-red mx-auto mb-6"></div>
          
          <p className="text-retro-navy font-oswald">
            Дизайнеры и бутики, определившие эстетику свингующих шестидесятых.
            Эти имена изменили мир моды и стали символами эпохи.
          </p>
        </div>

        <Tabs 
          defaultValue="all" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="fade-in"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white p-1 rounded-none border-4 border-retro-navy">
              <TabsTrigger 
                value="all" 
                className="rounded-none font-bebas-neue text-lg tracking-wider data-[state=active]:bg-retro-navy data-[state=active]:text-white px-8"
              >
                ВСЕ
              </TabsTrigger>
              <TabsTrigger 
                value="legendary" 
                className="rounded-none font-bebas-neue text-lg tracking-wider data-[state=active]:bg-retro-navy data-[state=active]:text-white px-8"
              >
                ЛЕГЕНДАРНЫЕ
              </TabsTrigger>
              <TabsTrigger 
                value="stores" 
                className="rounded-none font-bebas-neue text-lg tracking-wider data-[state=active]:bg-retro-navy data-[state=active]:text-white px-8"
              >
                БУТИКИ
              </TabsTrigger>
            </TabsList>
          </div>

          {(["all", "legendary", "stores"] as const).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {brands[tab].map((brand, index) => {
                  const colorClass = getRandomColor(index);
                  
                  return (
                    <Card 
                      key={brand.id}
                      className="overflow-hidden border-none bg-white shadow hover:shadow-xl transition-all cursor-pointer hover-scale fade-in retro-border border-retro-navy group"
                      onMouseEnter={() => setHoveredBrand(brand.id)}
                      onMouseLeave={() => setHoveredBrand(null)}
                    >
                      <CardContent className={`p-6 flex flex-col items-center text-center h-full relative overflow-hidden`}>
                        {/* Декоративный фон */}
                        <div className={`absolute top-0 left-0 right-0 h-24 bg-${colorClass}`}></div>
                        
                        <div className={`w-20 h-20 rounded-full bg-${colorClass} border-4 border-white z-10 mb-4 flex items-center justify-center text-white font-bebas-neue text-lg`}>
                          {brand.name.split(' ').map(word => word[0]).join('')}
                        </div>
                        
                        <h3 className="font-bebas-neue text-2xl font-bold mb-2 tracking-wider">{brand.name}</h3>
                        <p className="text-sm text-retro-brown font-space-mono mb-4">{brand.description}</p>
                        
                        <Button 
                          variant="ghost" 
                          className={`mt-auto font-oswald tracking-wider text-${colorClass} hover:text-white hover:bg-${colorClass} transition-all ${
                            hoveredBrand === brand.id ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          ПОДРОБНЕЕ
                          <Icon name="ArrowRight" className="ml-1" size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12 fade-in">
          <Button 
            className="bg-retro-red hover:bg-retro-orange text-white px-8 py-6 font-bebas-neue text-xl tracking-wider rounded-none"
          >
            ВСЕ БРЕНДЫ
            <Icon name="Grid" className="ml-2" />
          </Button>
          
          {/* Декоративный элемент в стиле 60-х */}
          <div className="mod-circle w-16 h-16 mx-auto mt-8 text-retro-navy">
            <Icon name="Shirt" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCards;
