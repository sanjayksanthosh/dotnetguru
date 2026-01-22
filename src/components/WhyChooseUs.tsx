import { GraduationCap, Award, Briefcase, BookOpen } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Professional Trainer",
    description: "Learn from industry experts with 10+ years of experience in .NET development.",
  },
  {
    icon: Award,
    title: "Accredited Courses",
    description: "Industry-recognized certifications that boost your career prospects.",
  },
  {
    icon: Briefcase,
    title: "Realtime Project",
    description: "Work on live projects to gain practical, hands-on experience.",
  },
  {
    icon: BookOpen,
    title: "Experiential Learning",
    description: "Interactive sessions with practical examples and real-world scenarios.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We provide the best learning experience with expert guidance and practical knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
