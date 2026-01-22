import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "SQL Server 2022",
    subtitle: "Master Database Management",
    description: "The SQL Server is a relational database management system from Microsoft. Learn to manage and store information efficiently.",
    color: "from-blue-600 to-blue-800",
    link: "/course/sql-server-course-online-training",
  },
  {
    title: "ASP.NET CORE 7.0",
    subtitle: "Build Modern Web Applications",
    description: ".NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications.",
    color: "from-primary to-red-800",
    link: "/course/aspnet-course-online-training",
  },
  {
    title: "C# 10.0",
    subtitle: "Object-Oriented Programming",
    description: "C# is a general-purpose, modern and object-oriented programming language. Master the fundamentals and advanced concepts.",
    color: "from-purple-600 to-purple-800",
    link: "/course/c-course-online-training",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <p className="text-lg md:text-xl mb-2 opacity-90">{slide.subtitle}</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                {slide.description}
              </p>
              <a
                href={slide.link}
                className="inline-flex bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:shadow-xl items-center gap-2"
              >
                <span>👆</span> VIEW COURSE CONTENT
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
