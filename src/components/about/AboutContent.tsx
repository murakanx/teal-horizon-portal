
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutContent = () => {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Et nunc ut tempus duis nisl sed massa</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet tristique magna, vel pellentesque odio. Nam sit amet semper lacus. Aliquam a tellus nec felis elementum ornare. Ut et molestie mauris, eu varius elit. Proin at tempus massa. Etiam eu pulvinar dui. Fusce vel nunc eget ex venenatis faucibus vel sed ipsum.
            </p>
          </div>
          
          <div className="mt-8 bg-gray-200 rounded-xl overflow-hidden h-64"></div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How it works</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Simple and effective steps to connect job seekers with their ideal opportunities and employers with perfect candidates
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 20C4 17.6863 6.13401 16 9 16H15C17.866 16 20 17.6863 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-medium mb-2">Create Account</h3>
              <p className="text-sm text-gray-500 text-center">
                Register and complete your profile with your skills and preferences
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 7H7V17H17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 11H7V17H13V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-medium mb-2">Upload Resume</h3>
              <p className="text-sm text-gray-500 text-center">
                Add your professional experience and educational background
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L11 14L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-medium mb-2">Find Jobs</h3>
              <p className="text-sm text-gray-500 text-center">
                Search through thousands of openings tailored to your criteria
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="font-medium mb-2">Apply Job</h3>
              <p className="text-sm text-gray-500 text-center">
                Submit applications with just a few clicks and track your progress
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-xl overflow-hidden relative">
            <div className="relative z-10 py-12 px-8 md:p-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Good Life Begins With<br />A Good Company
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of individuals who have found their perfect career match through our platform
              </p>
              
              <div className="flex justify-center">
                <PlayCircle className="h-16 w-16 text-white" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center justify-center p-4 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
                  <svg className="h-6 w-6 text-primary mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-white text-sm">175 globally known jobs profile</span>
                </div>
                
                <div className="flex items-center justify-center p-4 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
                  <svg className="h-6 w-6 text-primary mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-white text-sm">Validated job health metric aims reliable</span>
                </div>
                
                <div className="flex items-center justify-center p-4 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
                  <svg className="h-6 w-6 text-primary mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-white text-sm">Designed to facilitate secure browsing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
