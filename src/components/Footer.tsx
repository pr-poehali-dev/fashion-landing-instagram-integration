
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Блок с логотипом и соцсетями */}
          <div className="md:col-span-4 fade-in">
            <h2 className="font-playfair text-2xl font-bold mb-4">СТИЛЬ</h2>
            <p className="text-gray-300 mb-6 max-w-xs">
              Модный блог о трендах, стиле жизни и любимых брендах. Вдохновляйся и создавай свой уникальный образ!
            </p>
            <div className="flex gap-4">
              {["Instagram", "Youtube", "TikTok", "Pinterest"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-[#9B87F5] rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name={social} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Навигация */}
          <div className="md:col-span-2 fade-in">
            <h3 className="font-medium text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              {["Главная", "Образы", "Бренды", "Блог", "Контакты"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Категории */}
          <div className="md:col-span-2 fade-in">
            <h3 className="font-medium text-lg mb-4">Категории</h3>
            <ul className="space-y-2">
              {["Повседневное", "Офисный стиль", "Вечерние образы", "Аксессуары", "Обувь"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Подписка */}
          <div className="md:col-span-4 fade-in">
            <h3 className="font-medium text-lg mb-4">Подписаться на рассылку</h3>
            <p className="text-gray-300 mb-4">
              Получайте новости о трендах, советы по стилю и эксклюзивные предложения.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#9B87F5] hover:bg-[#8B5CF6] text-white">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 fade-in">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Стиль. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
