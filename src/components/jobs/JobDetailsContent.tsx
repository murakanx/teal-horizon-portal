
import { MapPin, Clock, DollarSign, Bookmark, BriefcaseIcon, Share2, Facebook, Twitter, Linkedin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface JobDetailsContentProps {
  job: {
    id: number;
    title: string;
    company: string;
    companyLogo: string;
    location: string;
    salary: string;
    category: string;
    type: string;
    experience: string;
    degree: string;
    postedTime: string;
    description: string;
    responsibilities: string[];
    skills: string[];
  };
}

export const JobDetailsContent = ({ job }: JobDetailsContentProps) => {
  const [saved, setSaved] = useState(false);

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="job-card-time">{job.postedTime} ago</span>
              <button 
                onClick={toggleSave}
                className="ml-auto text-gray-400 hover:text-primary transition-colors"
              >
                <Bookmark className={`h-5 w-5 ${saved ? "fill-primary text-primary" : ""}`} />
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                {/* Company logo placeholder */}
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  {job.company.charAt(0)}
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p className="text-gray-600">{job.company}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="job-card-tag">
                <BriefcaseIcon className="h-3 w-3 mr-1" />
                <span>{job.category}</span>
              </div>
              
              <div className="job-card-tag">
                <Clock className="h-3 w-3 mr-1" />
                <span>{job.type}</span>
              </div>
              
              <div className="job-card-tag">
                <DollarSign className="h-3 w-3 mr-1" />
                <span>{job.salary}</span>
              </div>
              
              <div className="job-card-tag">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700 mb-6">
              {job.description}
            </p>
            
            <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
            <ul className="space-y-3 mb-6">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-4">Professional Skills</h2>
            <ul className="space-y-3 mb-6">
              {job.skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-4">Tags:</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Full time</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Commerce</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">New York</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Corporate</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Location</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Share Job:</span>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-blue-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-6">Related Jobs</h2>
          <div className="space-y-4">
            {/* Related jobs would go here, using JobListing component */}
            <div className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex items-center mb-2">
                <span className="job-card-time">24 min ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  G
                </div>
                <div>
                  <h3 className="font-semibold">Internal Creative Coordinator</h3>
                  <p className="text-sm text-gray-600">Green Group</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <div className="job-card-tag">
                  <BriefcaseIcon className="h-3 w-3 mr-1" />
                  <span>Commerce</span>
                </div>
                <div className="job-card-tag">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Full time</span>
                </div>
                <div className="job-card-tag">
                  <DollarSign className="h-3 w-3 mr-1" />
                  <span>$44000-$48000</span>
                </div>
                <div className="job-card-tag">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>New York, USA</span>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button className="job-card-btn">Job Details</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex items-center mb-2">
                <span className="job-card-time">24 min ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  V
                </div>
                <div>
                  <h3 className="font-semibold">District Intranet Director</h3>
                  <p className="text-sm text-gray-600">VistaBundles - Walter Co</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <div className="job-card-tag">
                  <BriefcaseIcon className="h-3 w-3 mr-1" />
                  <span>Commerce</span>
                </div>
                <div className="job-card-tag">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Full time</span>
                </div>
                <div className="job-card-tag">
                  <DollarSign className="h-3 w-3 mr-1" />
                  <span>$42000-$48000</span>
                </div>
                <div className="job-card-tag">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>New York, USA</span>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button className="job-card-btn">Job Details</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Job Overview</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <BriefcaseIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Job Title</h3>
                <p className="font-medium">{job.title}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Job Type</h3>
                <p className="font-medium">{job.type}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <BriefcaseIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Category</h3>
                <p className="font-medium">{job.category}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <BriefcaseIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Experience</h3>
                <p className="font-medium">{job.experience}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <BriefcaseIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Degree</h3>
                <p className="font-medium">{job.degree}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Offered Salary</h3>
                <p className="font-medium">{job.salary}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Location</h3>
                <p className="font-medium">{job.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="h-48 bg-gray-100 rounded-lg mb-6"></div>
          <Button className="w-full bg-primary hover:bg-primary-dark text-white">
            Apply Job
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Send Us Message</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="form-input"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="form-input"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="form-input min-h-[120px]"
              ></textarea>
            </div>
            <Button className="w-full bg-primary hover:bg-primary-dark text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
