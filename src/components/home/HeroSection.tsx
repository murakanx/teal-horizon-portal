
import { Search, MapPin, BriefcaseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const HeroSection = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    location: "",
    category: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
    console.log("Search params:", searchParams);
  };

  return (
    <section className="bg-job-header text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Job Today!
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explore opportunities that match your skills and career goals
          </p>

          <form onSubmit={handleSearch} className="bg-white rounded-lg p-2 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="keyword"
                  placeholder="Job title or keyword"
                  className="w-full px-10 py-3 rounded-md bg-transparent text-gray-800 focus:outline-none"
                  value={searchParams.keyword}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="location"
                  placeholder="City or location"
                  className="w-full px-10 py-3 rounded-md bg-transparent text-gray-800 focus:outline-none"
                  value={searchParams.location}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="relative">
                <BriefcaseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  name="category"
                  className="w-full px-10 py-3 rounded-md bg-transparent text-gray-800 focus:outline-none appearance-none"
                  value={searchParams.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select category</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
            </div>
            
            <div className="mt-2 flex justify-center md:justify-end">
              <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-6 py-3">
                Search Jobs
              </Button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-primary/20 rounded-full p-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-light" />
            </div>
            <span className="text-2xl font-bold">10,000+</span>
            <span className="text-gray-300 text-sm">Jobs</span>
          </div>
          
          <div className="flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-primary/20 rounded-full p-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-light" />
            </div>
            <span className="text-2xl font-bold">5,000+</span>
            <span className="text-gray-300 text-sm">Companies</span>
          </div>
          
          <div className="flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-primary/20 rounded-full p-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-light" />
            </div>
            <span className="text-2xl font-bold">7,500+</span>
            <span className="text-gray-300 text-sm">Candidates</span>
          </div>
        </div>
      </div>
    </section>
  );
};
