import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Complete ASP.NET Core 7.0 MVC Web Development",
    instructor: "Praveen Kumar Manda",
    originalPrice: 7000,
    discountedPrice: 4000,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    link: "/course/aspnet-course-online-training",
  },
  {
    title: "C# Programming Masterclass - Beginner to Advanced",
    instructor: "Praveen Kumar Manda",
    originalPrice: 6000,
    discountedPrice: 3500,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    link: "/course/c-course-online-training",
  },
  {
    title: "SQL Server 2022 Complete Course",
    instructor: "Praveen Kumar Manda",
    originalPrice: 5000,
    discountedPrice: 3000,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
    link: "/course/sql-server-course-online-training",
  },
  {
    title: ".NET Combo Package - Complete Bundle",
    instructor: "Praveen Kumar Manda",
    originalPrice: 15000,
    discountedPrice: 9000,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    link: "/course/combo-package",
  },
  {
    title: "Entity Framework Core - Data Access",
    instructor: "Praveen Kumar Manda",
    originalPrice: 4000,
    discountedPrice: 2500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    link: "/course/aspnet-course-online-training",
  },
];

const CoursePricing = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Course Pricing</h2>
          <p className="section-subtitle">
            Choose from our selection of comprehensive courses designed to help you succeed
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all -ml-4"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all -mr-4"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-10">
          <button className="btn-outline">
            View all Course Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursePricing;
