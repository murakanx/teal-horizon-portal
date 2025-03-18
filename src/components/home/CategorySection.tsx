
import { BriefcaseIcon, Coffee, BuildingIcon, ShoppingCart, GraduationCap, BarChart3Icon, PlaneTakeoff, Bus } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Agriculture",
    icon: <BriefcaseIcon className="h-6 w-6 text-primary" />,
    count: 120,
  },
  {
    id: 2,
    name: "Manufacturing",
    icon: <BuildingIcon className="h-6 w-6 text-primary" />,
    count: 230,
  },
  {
    id: 3,
    name: "Commerce",
    icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    count: 340,
  },
  {
    id: 4,
    name: "Construction",
    icon: <BuildingIcon className="h-6 w-6 text-primary" />,
    count: 190,
  },
  {
    id: 5,
    name: "Hotels & Tourism",
    icon: <PlaneTakeoff className="h-6 w-6 text-primary" />,
    count: 250,
  },
  {
    id: 6,
    name: "Education",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    count: 310,
  },
  {
    id: 7,
    name: "Financial Services",
    icon: <BarChart3Icon className="h-6 w-6 text-primary" />,
    count: 280,
  },
  {
    id: 8,
    name: "Transport",
    icon: <Bus className="h-6 w-6 text-primary" />,
    count: 150,
  },
];

export const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/jobs?category=${category.name.toLowerCase()}`}
              className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="font-medium mb-2">{category.name}</h3>
              <span className="text-sm text-gray-500">{category.count} jobs</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
