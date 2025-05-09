
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Имитация данных с Instagram
const mockInstagramPosts = [
  {
    id: 1,
    imageUrl: "https://source.unsplash.com/random/600x600?fashion,outfit,1",
    likes: 2543,
    comments: 124,
    caption: "Осенний образ в нейтральных оттенках #ootd #fashion",
  },
  {
    id: 2,
    imageUrl: "https://source.unsplash.com/random/600x600?fashion,outfit,2",
    likes: 1859,
    comments: 86,
    caption: "Мой любимый летний сет от @brandname #summer #style",
  },
  {
    id: 3,
    imageUrl: "https://source.unsplash.com/random/600x600?fashion,outfit,3",
    likes: 3012,
    comments: 156,
    caption: "Базовый гардероб: топ-5 вещей на каждый день #basics",
  },
  {
    id: 4,
    imageUrl: "https://source.unsplash.com/random/600x600?fashion,outfit,4",
    likes: 2147,
    comments: 98,
    caption: "Вечерний образ для особого случая #evening #glam",
  },
  {
    id: 5,
    imageUrl: "https://source.unsplash.com/random/600x600?fashion,outfit,5",
    likes: 1756,
    comments: 73,
    caption: "Как сочетать яркие аксессуары с базовыми вещами #accessories",
  },
  {
    id: 6,
    imageUrl: "https://source.unsplash.com/random/600x600?fashion,outfit,6",
    likes: 2385,
    comments: 112,
    caption: "Тренды осень-зима 2024/25 #trends #fashionforecast",
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
        imageUrl: `https://source.unsplash.com/random/600x600?fashion,outfit,${randomId}`,
        likes: Math.floor(Math.random() * 3000) + 1000,
        comments: Math.floor(Math.random() * 200) + 50,
        caption: "Новый стильный образ #fashion #style #outfit",
      });
    }
    setPosts(newPosts);
    setVisiblePosts(visiblePosts + 6);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
            Мой Instagram
          </h2>
          <p className="text-gray-600">
            Следите за моими ежедневными образами, тенденциями моды и бекстейджем в Instagram.
            Присоединяйтесь к моему модному сообществу!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.slice(0, visiblePosts).map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow fade-in hover-scale group"
            >
              <CardContent className="p-0 relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Heart" />
                      <span>{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="MessageCircle" />
                      <span>{post.comments.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Button 
            onClick={loadMorePosts}
            variant="outline" 
            className="border-[#9B87F5] text-[#9B87F5] hover:bg-[#9B87F5] hover:text-white px-8 py-6 rounded-full"
          >
            Загрузить еще
            <Icon name="RefreshCw" className="ml-2" />
          </Button>
          <div className="mt-6">
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#1A1F2C] hover:text-[#9B87F5] transition-colors font-medium"
            >
              <Icon name="Instagram" className="mr-2" />
              Подписаться в Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
