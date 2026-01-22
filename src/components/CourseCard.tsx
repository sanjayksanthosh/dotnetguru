import { User } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  link?: string;
}

const CourseCard = ({
  title,
  instructor,
  originalPrice,
  discountedPrice,
  image,
  link = "#",
}: CourseCardProps) => {
  return (
    <div className="course-card min-w-[300px] max-w-[350px]">
      <div className="relative h-48 overflow-hidden">
        <a href={link} className="block w-full h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </a>
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)}% OFF
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3 line-clamp-2">
          <a href={link} className="hover:text-primary transition-colors">{title}</a>
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <User size={16} />
          <span className="text-sm">By {instructor}</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-price-original line-through text-lg">₹{originalPrice}</span>
          <span className="text-price-discount text-2xl font-bold">₹{discountedPrice}</span>
        </div>
        <a href={link} className="block w-full btn-primary text-center">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
