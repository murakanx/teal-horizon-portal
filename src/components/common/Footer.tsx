
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-job-header text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white mb-4">
              <Briefcase className="h-6 w-6" />
              <span className="font-semibold text-xl">Job Portal</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris do.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white text-sm transition-colors">
                  For Candidates
                </Link>
              </li>
              <li>
                <Link to="/hrm-dashboard" className="text-gray-300 hover:text-white text-sm transition-colors">
                  For Employers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Job Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Telecommunications
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Hotels & Tourism
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Financial Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Eu nunc pretium vitae platea. Non tellus adipiscing volutpat.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary-dark text-white w-full">
                Subscribe now
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright Job Portal, 2024. All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
