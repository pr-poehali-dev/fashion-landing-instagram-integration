
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
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E5] font-sans">
      <Header />
      <main>
        <HeroSection />
        <InstagramFeed />
        <BrandCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
