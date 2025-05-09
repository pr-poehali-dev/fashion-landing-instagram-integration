
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in max-w-xl">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F2C] leading-tight mb-4">
              Твой идеальный стиль начинается здесь
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Привет! Я Алина, фэшн-блогер и стилист с 5-летним опытом. 
              Делюсь трендами, создаю уникальные образы и помогаю
              найти твой собственный стиль.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-[#9B87F5] hover:bg-[#8B5CF6] text-white px-8 py-6 text-lg rounded-full"
              >
                Мои образы
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-lg border-[#1A1F2C] text-[#1A1F2C] rounded-full"
              >
                Подробнее обо мне
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img 
                      src={`https://source.unsplash.com/random/100x100?face&${i}`} 
                      alt="Подписчик" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-[#1A1F2C]">10K+ подписчиков</p>
                <p className="text-sm text-gray-500">Присоединяйся!</p>
              </div>
            </div>
          </div>
          
          <div className="fade-in relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://source.unsplash.com/random/600x800?fashion,model,portrait" 
                alt="Фэшн-блогер" 
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
            {/* Декоративный элемент */}
            <div className="absolute top-10 -right-10 w-64 h-64 bg-[#9B87F5]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#F5F0E5] rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Статистика */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-200">
          {[
            { number: "5+", label: "Лет опыта" },
            { number: "200+", label: "Публикаций" },
            { number: "50+", label: "Брендов" },
            { number: "10K+", label: "Подписчиков" }
          ].map((stat, index) => (
            <div key={index} className="text-center fade-in">
              <p className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1F2C]">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
