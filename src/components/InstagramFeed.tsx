
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Имитация данных с Instagram в стиле 60-х
const mockInstagramPosts = [
  {
    id: 1,
    imageUrl: "https://source.unsplash.com/random/600x600?60s,mod,fashion,1",
    likes: 2543,
    comments: 124,
    caption: "Геометрические узоры и монохромные образы 60-х #модныйблог",
  },
  {
    id: 2,
    imageUrl: "https://source.unsplash.com/random/600x600?60s,vintage,fashion,2",
    likes: 1859,
    comments: 86,
    caption: "Яркие платья А-силуэта в стиле Мэри Куант #мода60х",
  },
  {
    id: 3,
    imageUrl: "https://source.unsplash.com/random/600x600?retro,60s,model,3",
    likes: 3012,
    comments: 156,
    caption: "5 вариаций на тему мини-юбки — икона стиля 60-х #твигги",
  },
  {
    id: 4,
    imageUrl: "https://source.unsplash.com/random/600x600?mod,60s,4",
    likes: 2147,
    comments: 98,
    caption: "Психоделические принты и оп-арт в современных образах #ретро",
  },
  {
    id: 5,
    imageUrl: "https://source.unsplash.com/random/600x600?1960s,fashion,5",
    likes: 1756,
    comments: 73,
    caption: "Культовые аксессуары эпохи — огромные очки и шляпы-таблетки",
  },
  {
    id: 6,
    imageUrl: "https://source.unsplash.com/random/600x600?go-go,60s,6",
    likes: 2385,
    comments: 112,
    caption: "Эти сапоги го-го созданы, чтобы ходить! #модаизпрошлого",
  },
];

const InstagramFeed = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [posts, setPosts] = useState(mockInstagramPosts);

  // Имитация загрузки дополнительных постов
  const loadMorePosts = () => {
    // В реальном приложении здесь был бы запрос к API Instagram
    const newPosts = [...posts];
    for (let i = 0; i < 6; i++) {
      const randomId = Math.floor(Math.random() * 1000) + 100;
      newPosts.push({
        id: randomId,
        imageUrl: `https://source.unsplash.com/random/600x600?retro,60s,mod,${randomId}`,
        likes: Math.floor(Math.random() * 3000) + 1000,
        comments: Math.floor(Math.random() * 200) + 50,
        caption: "Стиль 60-х: свобода, цвет, эксперименты! #винтаж #мода60х",
      });
    }
    setPosts(newPosts);
    setVisiblePosts(visiblePosts + 6);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      {/* Декоративные элементы в стиле 60-х */}
      <div className="absolute inset-0 pop-art-dots"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
          <div className="mod-circle w-16 h-16 mx-auto mb-4 text-retro-navy font-bold">
            <Icon name="Instagram" size={24} />
          </div>
          
          <h2 className="font-bebas-neue text-5xl md:text-6xl text-retro-navy mb-4 tracking-wider">
            МОЙ <span className="text-retro-red">INSTAGRAM</span>
          </h2>
          
          <div className="w-24 h-1 bg-retro-orange mx-auto mb-6"></div>
          
          <p className="text-retro-navy font-oswald">
            Следите за моими ежедневными образами в стиле 60-х, винтажными находками и модными экспериментами.
            Присоединяйтесь к моему ретро-сообществу!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.slice(0, visiblePosts).map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow fade-in hover-scale group retro-border border-retro-beige"
            >
              <CardContent className="p-0 relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Эффект при наведении в стиле 60-х */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-retro-navy/80 group-hover:to-transparent transition-all duration-300 flex items-end justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-6 w-full">
                    <div className="text-white flex items-center gap-4 mb-3 font-space-mono">
                      <div className="flex items-center gap-1">
                        <Icon name="Heart" />
                        <span>{post.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="MessageCircle" />
                        <span>{post.comments.toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="text-white font-oswald">{post.caption}</p>
                  </div>
                </div>
                
                {/* Декоративные элементы для избранных постов */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-retro-red text-white p-2 font-bebas-neue tracking-wider">
                    HOT!
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute top-4 right-4 bg-retro-yellow text-retro-navy p-2 font-bebas-neue tracking-wider">
                    WOW!
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Button 
            onClick={loadMorePosts}
            className="bg-retro-yellow hover:bg-retro-orange text-retro-navy hover:text-white px-8 py-6 font-bebas-neue text-xl tracking-widest rounded-none"
          >
            ЗАГРУЗИТЬ ЕЩЕ
            <Icon name="RefreshCw" className="ml-2" />
          </Button>
          
          <div className="mt-8 p-2 bg-retro-navy inline-block">
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-retro-pink transition-colors font-oswald tracking-wider"
            >
              <Icon name="Instagram" className="mr-2" />
              ПОДПИСАТЬСЯ В INSTAGRAM
            </a>
          </div>
        </div>
      </div>
      
      {/* Декоративный зигзаг в стиле 60-х */}
      <div className="zigzag-decoration w-full h-10 absolute bottom-0 left-0"></div>
    </section>
  );
};

export default InstagramFeed;
