
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InstagramFeed from "@/components/InstagramFeed";
import BrandCards from "@/components/BrandCards";
import Footer from "@/components/Footer";

const Index = () => {
  // Добавляем плавное появление элементов при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Добавляем задержку для каскадной анимации
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
            }, entry.target.dataset.delay || 0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el, index) => {
      // Устанавливаем разную задержку для элементов
      el.setAttribute("data-delay", (index * 100).toString());
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-retro-bg font-sans">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <InstagramFeed />
        <BrandCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
