
import { Link } from "react-router-dom";
import { Bookmark, MapPin, Clock, DollarSign, BriefcaseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface JobListingProps {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  category: string;
  type: string;
  postedTime: string;
  isSaved?: boolean;
}

export const JobListing = ({
  id,
  title,
  company,
  companyLogo,
  location,
  salary,
  category,
  type,
  postedTime,
  isSaved = false,
}: JobListingProps) => {
  const [saved, setSaved] = useState(isSaved);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
  };

  return (
    <div className="job-card group relative">
      <div className="absolute right-4 top-4">
        <button
          onClick={toggleSave}
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label={saved ? "Unsave job" : "Save job"}
        >
          <Bookmark className={`h-5 w-5 ${saved ? "fill-primary text-primary" : ""}`} />
        </button>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
          {/* Company logo placeholder */}
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            {company.charAt(0)}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <span className="job-card-time">{postedTime} ago</span>
          </div>
          
          <h3 className="job-card-title">{title}</h3>
          <p className="job-card-company">{company}</p>
          
          <div className="job-card-info">
            <div className="job-card-tag">
              <BriefcaseIcon className="h-3 w-3 mr-1" />
              <span>{category}</span>
            </div>
            
            <div className="job-card-tag">
              <Clock className="h-3 w-3 mr-1" />
              <span>{type}</span>
            </div>
            
            <div className="job-card-tag">
              <DollarSign className="h-3 w-3 mr-1" />
              <span>{salary}</span>
            </div>
            
            <div className="job-card-tag">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <Link to={`/jobs/${id}`}>
          <Button className="job-card-btn">Job Details</Button>
        </Link>
      </div>
    </div>
  );
};
