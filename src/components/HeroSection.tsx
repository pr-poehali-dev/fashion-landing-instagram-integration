
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 relative overflow-hidden bg-retro-beige">
      {/* Декоративные элементы в стиле 60-х */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-retro-yellow rounded-full opacity-50 blur-xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-retro-pink rounded-full opacity-40 blur-xl translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Паттерн точек */}
      <div className="absolute inset-0 retro-dots text-retro-navy"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 fade-in max-w-3xl">
            <div className="mb-4 flex items-center">
              <div className="bg-retro-orange h-1 w-16 mr-4"></div>
              <p className="font-space-mono text-sm text-retro-brown">МОДА И СТИЛЬ ЭПОХИ</p>
            </div>
            
            <h1 className="font-bebas-neue text-6xl md:text-7xl lg:text-8xl font-bold text-retro-navy leading-none mb-6 tracking-wider">
              ТВИГГИ, МИНИ<br /> 
              <span className="text-retro-orange">И СВОБОДА СТИЛЯ</span>
            </h1>
            
            <div className="retro-border inline-block border-retro-orange p-6 mb-8 bg-white">
              <p className="text-lg md:text-xl font-oswald font-light text-retro-navy">
                Привет! Я Алина, фэшн-блогер и историк моды. 
                Исследую стиль 60-х — эпоху мини-юбок, геометрических 
                принтов и поп-арта. Присоединяйся к моему ретро-приключению!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-retro-red hover:bg-retro-orange text-white px-8 py-6 text-xl font-bebas-neue tracking-wider rounded-none"
              >
                МОИ ОБРАЗЫ
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-xl border-retro-navy text-retro-navy font-bebas-neue tracking-wider rounded-none hover:bg-retro-navy hover:text-white"
              >
                ОБО МНЕ
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-12 bg-white p-4 retro-border border-retro-yellow inline-block">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                    style={{
                      backgroundImage: `url(https://source.unsplash.com/random/100x100?retro,face&${i})`,
                      backgroundSize: 'cover'
                    }}
                  ></div>
                ))}
              </div>
              <div>
                <p className="font-bebas-neue text-xl text-retro-navy tracking-wide">10K+ МОДНИКОВ</p>
                <p className="font-space-mono text-xs text-retro-brown">ПРИСОЕДИНЯЙСЯ!</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 fade-in retro-waves text-retro-teal relative">
            <div className="retro-border border-retro-yellow overflow-hidden relative z-10 animate-rotate-in">
              <img 
                src="https://source.unsplash.com/random/600x800?60s,mod,fashion,retro" 
                alt="Мода 60-х" 
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              {/* Стилизованная рамка в стиле 60-х */}
              <div className="absolute top-6 -left-6 w-24 h-24 bg-retro-orange rotate-45 opacity-80"></div>
              <div className="absolute bottom-6 -right-6 w-24 h-24 bg-retro-yellow rotate-45 opacity-80"></div>
            </div>
            
            {/* Декоративный элемент в стиле поп-арт */}
            <div className="absolute bottom-10 -left-10 mod-circle w-24 h-24 z-20 font-bebas-neue text-2xl">
              WOW!
            </div>
          </div>
        </div>
      </div>
      
      {/* Секция статистики в стиле 60-х */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {[
            { number: "5+", label: "ЛЕТ ОПЫТА", color: "retro-orange" },
            { number: "200+", label: "ПУБЛИКАЦИЙ", color: "retro-yellow" },
            { number: "50+", label: "ВИНТАЖНЫХ НАХОДОК", color: "retro-teal" },
            { number: "10K+", label: "ПОДПИСЧИКОВ", color: "retro-pink" }
          ].map((stat, index) => (
            <div key={index} className={`text-center fade-in retro-border border-${stat.color} bg-white p-4`}>
              <p className={`font-bebas-neue text-4xl md:text-5xl font-bold text-${stat.color}`}>{stat.number}</p>
              <p className="text-retro-navy font-oswald tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Декоративный зигзаг в стиле 60-х */}
      <div className="zigzag-decoration w-full h-10 absolute bottom-0 left-0"></div>
    </section>
  );
};

export default HeroSection;
