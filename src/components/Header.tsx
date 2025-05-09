
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Логотип в стиле 60-х */}
          <div className="flex items-center space-x-2">
            <div className="mod-circle w-10 h-10 flex items-center justify-center text-retro-navy font-bebas-neue text-xl">
              МОД
            </div>
            <a href="/" className="font-bebas-neue text-3xl tracking-widest text-retro-navy">
              СТИЛЬ<span className="text-retro-orange">60</span>
            </a>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <Button 
              className="bg-retro-yellow text-retro-navy hover:bg-retro-orange hover:text-white rounded-none"
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Десктопное меню в стиле 60-х */}
          <nav className="hidden md:flex items-center space-x-8">
            {["ГЛАВНАЯ", "ОБРАЗЫ", "БРЕНДЫ", "ОБО МНЕ", "КОНТАКТЫ"].map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`font-oswald tracking-wide text-lg hover:text-retro-orange transition-colors ${
                  index % 2 === 0 ? "text-retro-navy" : "text-retro-red"
                }`}
              >
                {item}
              </a>
            ))}
            <Button className="bg-retro-orange hover:bg-retro-red text-white font-bebas-neue text-xl tracking-wide rounded-none px-8">
              ПОДПИСАТЬСЯ
            </Button>
          </nav>
        </div>

        {/* Мобильное выпадающее меню в стиле 60-х */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-in">
            <div className="flex flex-col">
              {["ГЛАВНАЯ", "ОБРАЗЫ", "БРЕНДЫ", "ОБО МНЕ", "КОНТАКТЫ"].map((item, index) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={`py-3 px-4 font-oswald text-lg border-l-4 ${
                    index % 2 === 0 
                      ? "border-retro-yellow text-retro-navy" 
                      : "border-retro-orange text-retro-red"
                  } hover:bg-retro-beige`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="px-4 py-3">
                <Button className="w-full bg-retro-orange hover:bg-retro-red text-white font-bebas-neue text-xl tracking-wide rounded-none">
                  ПОДПИСАТЬСЯ!
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Декоративный элемент в стиле 60-х */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-retro-yellow"></div>
    </header>
  );
};

export default Header;
