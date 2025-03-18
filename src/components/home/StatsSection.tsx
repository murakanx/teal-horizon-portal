
import { PieChart, BarChart3, Globe } from "lucide-react";

export const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">7.2k+</div>
            <div className="text-gray-500">Clients worldwide</div>
            <div className="mt-2 text-sm text-gray-400">Utilized by businesses across 60+ countries</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">20k+</div>
            <div className="text-gray-500">Active resumes</div>
            <div className="mt-2 text-sm text-gray-400">Qualified candidates ready for your opportunities</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">18k+</div>
            <div className="text-gray-500">Categories</div>
            <div className="mt-2 text-sm text-gray-400">Roles across all major industries and specialties</div>
          </div>
        </div>
      </div>
    </section>
  );
};
