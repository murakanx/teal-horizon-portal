
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { JobFilters, FilterState } from "@/components/jobs/JobFilters";
import { JobListing } from "@/components/jobs/JobListing";
import { ChevronLeft, ChevronRight, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const jobsData = [
  {
    id: 1,
    title: "Forward Security Director",
    company: "Black, Schroeder and Schultz Co.",
    companyLogo: "/company-logos/logo1.png",
    location: "New York, USA",
    salary: "$40000-$42000",
    category: "Hotels & Tourism",
    type: "Full time",
    postedTime: "10 min",
  },
  {
    id: 2,
    title: "Regional Creative Facilitator",
    company: "Winout - Boxen Co.",
    companyLogo: "/company-logos/logo2.png",
    location: "Los Angeles, USA",
    salary: "$28000-$32000",
    category: "Media",
    type: "Part time",
    postedTime: "12 min",
  },
  {
    id: 3,
    title: "Internal Integration Planner",
    company: "Miax, Quigley and Feest Inc.",
    companyLogo: "/company-logos/logo3.png",
    location: "Texas, USA",
    salary: "$48000-$50000",
    category: "Construction",
    type: "Full time",
    postedTime: "15 min",
  },
  {
    id: 4,
    title: "District Intranet Director",
    company: "VistaBundles - Walter Co.",
    companyLogo: "/company-logos/logo4.png",
    location: "Florida, USA",
    salary: "$42000-$48000",
    category: "Commerce",
    type: "Full time",
    postedTime: "24 min",
  },
  {
    id: 5,
    title: "Corporate Tactics Facilitator",
    company: "Conner, Turner and Tadley Inc.",
    companyLogo: "/company-logos/logo5.png",
    location: "Boston, USA",
    salary: "$38000-$42000",
    category: "Commerce",
    type: "Full time",
    postedTime: "30 min",
  },
  {
    id: 6,
    title: "Forward Accounts Consultant",
    company: "Miller Group",
    companyLogo: "/company-logos/logo6.png",
    location: "Boston, USA",
    salary: "$45000-$48000",
    category: "Financial services",
    type: "Full time",
    postedTime: "30 min",
  },
];

const topCompanies = [
  {
    id: 1,
    name: "Instagram",
    logo: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
    description: "Elit velit mauris aliquam est Leo euismod consectetur adipiscing diam amet non.",
    openJobs: 8,
  },
  {
    id: 2,
    name: "Tesla",
    logo: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
    description: "At pellentesque amet odio eros repellat nisi. Aliquam ut mauris faucibus nisl viverra sit amet massa leo.",
    openJobs: 12,
  },
  {
    id: 3,
    name: "McDonald's",
    logo: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
    description: "Odio aliquet tellus turpis maecenas facibus id viverra phasellus. Placebo nisi.",
    openJobs: 14,
  },
  {
    id: 4,
    name: "Apple",
    logo: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
    description: "Et odio sem tellus ultricies sodales pellentesque. In lacus commodo. Pharebus noster sapen.",
    openJobs: 9,
  },
];

const Jobs = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    keyword: "",
    location: "",
    categories: [],
    jobTypes: [],
    experienceLevels: [],
    datePosted: "all",
    salaryRange: [0, 100000],
    tags: [],
  });
  const [sortBy, setSortBy] = useState("latest");

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleApplyFilters = () => {
    // Apply filters logic would go here
    console.log("Applying filters:", filters);
  };

  const handleClearFilters = () => {
    setFilters({
      keyword: "",
      location: "",
      categories: [],
      jobTypes: [],
      experienceLevels: [],
      datePosted: "all",
      salaryRange: [0, 100000],
      tags: [],
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-job-header text-white py-14">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Jobs</h1>
          </div>
        </section>
        
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">Showing 6-6 of 10 results</p>
              
              <div className="flex items-center">
                <button 
                  className="md:hidden mr-4 p-2 rounded-md border border-gray-200 bg-white"
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                >
                  <SlidersHorizontal className="h-5 w-5 text-gray-500" />
                </button>
                
                <div className="relative">
                  <select 
                    className="appearance-none bg-white border border-gray-200 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="latest">Sort by latest</option>
                    <option value="oldest">Sort by oldest</option>
                    <option value="salary-high">Sort by salary (high to low)</option>
                    <option value="salary-low">Sort by salary (low to high)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className={`lg:block ${mobileFiltersOpen ? "block" : "hidden"} lg:col-span-1`}>
                <JobFilters 
                  filters={filters}
                  onChange={handleFilterChange}
                  onApply={handleApplyFilters}
                  onClear={handleClearFilters}
                />
              </div>
              
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  {jobsData.map((job) => (
                    <JobListing
                      key={job.id}
                      id={job.id}
                      title={job.title}
                      company={job.company}
                      companyLogo={job.companyLogo}
                      location={job.location}
                      salary={job.salary}
                      category={job.category}
                      type={job.type}
                      postedTime={job.postedTime}
                    />
                  ))}
                </div>
                
                <div className="flex justify-center mt-10">
                  <button className="pagination-item pagination-active">1</button>
                  <button className="pagination-item">2</button>
                  <button className="pagination-item flex items-center justify-center">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Top Company</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              At eu soluta pretium tincidunt amet secus et semper aliquet, blandit a massa elementum
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topCompanies.map((company) => (
                <div key={company.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-6 h-6 opacity-70"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {company.description}
                  </p>
                  <div className="text-primary text-sm font-medium">
                    {company.openJobs} open jobs
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
