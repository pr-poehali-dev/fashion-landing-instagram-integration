
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-retro-navy text-white pt-16 pb-8 relative">
      {/* Декоративные элементы в стиле 60-х */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-retro-red"></div>
      <div className="absolute inset-0 retro-dots text-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Блок с логотипом и соцсетями */}
          <div className="md:col-span-4 fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="mod-circle w-10 h-10 bg-retro-yellow flex items-center justify-center text-retro-navy font-bebas-neue text-xl">
                МОД
              </div>
              <h2 className="font-bebas-neue text-3xl tracking-widest text-white">
                СТИЛЬ<span className="text-retro-orange">60</span>
              </h2>
            </div>
            
            <div className="bg-retro-beige/10 p-6 mb-6 max-w-xs">
              <p className="text-retro-beige font-oswald">
                Блог о моде 60-х годов: мини-юбки, гоу-гоу, психоделические принты и всё, что определило эту яркую эпоху!
              </p>
            </div>
            
            <div className="flex gap-4">
              {["Instagram", "Youtube", "TikTok", "Pinterest"].map((social, index) => {
                // Чередуем цвета для иконок
                const colors = ["bg-retro-orange", "bg-retro-yellow", "bg-retro-mint", "bg-retro-pink"];
                const colorClass = colors[index % colors.length];
                
                return (
                  <a 
                    key={social} 
                    href="#" 
                    className={`w-10 h-10 ${colorClass} hover:scale-110 transition-transform rounded-none flex items-center justify-center`}
                  >
                    <Icon name={social} size={20} className="text-retro-navy" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Навигация */}
          <div className="md:col-span-2 fade-in">
            <h3 className="font-bebas-neue text-2xl mb-4 tracking-wider text-retro-yellow">СТРАНИЦЫ</h3>
            <ul className="space-y-3">
              {["ГЛАВНАЯ", "ОБРАЗЫ", "БРЕНДЫ", "БЛОГ", "КОНТАКТЫ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-retro-beige hover:text-retro-orange transition-colors font-oswald tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Категории */}
          <div className="md:col-span-2 fade-in">
            <h3 className="font-bebas-neue text-2xl mb-4 tracking-wider text-retro-pink">РУБРИКИ</h3>
            <ul className="space-y-3">
              {["ТВИГГИ", "МИНИ-ЮБКИ", "МЭРИ КУАНТ", "МОДЕРНИЗМ", "ГОУ-ГОУ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-retro-beige hover:text-retro-pink transition-colors font-oswald tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Подписка */}
          <div className="md:col-span-4 fade-in">
            <h3 className="font-bebas-neue text-2xl mb-4 tracking-wider text-retro-orange">ПОДПИСКА НА РАССЫЛКУ</h3>
            <div className="bg-white/10 p-6 mb-6">
              <p className="text-retro-beige mb-4 font-oswald">
                Получайте новости о мире ретро-моды, винтажных находках и событиях в стиле 60-х!
              </p>
              <div className="flex gap-0">
                <Input 
                  type="email" 
                  placeholder="ВАШ EMAIL" 
                  className="bg-white text-retro-navy placeholder:text-retro-navy/50 rounded-none border-none font-space-mono"
                />
                <Button className="bg-retro-red hover:bg-retro-orange text-white rounded-none">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
            
            {/* Декоративный элемент в стиле 60-х */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-1 bg-retro-orange"></div>
              <div className="w-12 h-1 bg-retro-yellow"></div>
              <div className="w-12 h-1 bg-retro-pink"></div>
              <div className="w-12 h-1 bg-retro-teal"></div>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 fade-in">
          <p className="text-retro-beige/70 text-sm font-space-mono">
            © {new Date().getFullYear()} СТИЛЬ60. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-retro-beige/70 hover:text-retro-yellow text-sm transition-colors font-space-mono">
              ПРИВАТНОСТЬ
            </a>
            <a href="#" className="text-retro-beige/70 hover:text-retro-yellow text-sm transition-colors font-space-mono">
              УСЛОВИЯ
            </a>
            <a href="#" className="text-retro-beige/70 hover:text-retro-yellow text-sm transition-colors font-space-mono">
              COOKIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
