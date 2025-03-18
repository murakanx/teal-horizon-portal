
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Home, Users, Briefcase, BarChart2, MessageSquare, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

type UserRole = "admin" | "company" | "manager" | "assistant-manager" | "employee";

interface HRMPortalProps {
  userRole?: UserRole;
}

export const HRMPortal = ({ userRole = "admin" }: HRMPortalProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout logic would go here
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-job-header text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <div
            className={`font-bold text-xl flex items-center ${
              !sidebarOpen && "opacity-0"
            }`}
          >
            <Briefcase className="h-6 w-6 mr-2" />
            <span>HRM Portal</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                !sidebarOpen ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-2">
            <li>
              <Button
                variant="ghost"
                className={`w-full text-white hover:bg-white/10 justify-start py-3 ${
                  !sidebarOpen && "justify-center px-2"
                }`}
              >
                <Home className="h-5 w-5 mr-2" />
                {sidebarOpen && <span>Dashboard</span>}
              </Button>
            </li>
            
            {(userRole === "admin" || userRole === "company") && (
              <li>
                <Button
                  variant="ghost"
                  className={`w-full text-white hover:bg-white/10 justify-start py-3 ${
                    !sidebarOpen && "justify-center px-2"
                  }`}
                >
                  <Briefcase className="h-5 w-5 mr-2" />
                  {sidebarOpen && <span>Companies</span>}
                </Button>
              </li>
            )}
            
            {(userRole === "admin" || userRole === "company" || userRole === "manager") && (
              <li>
                <Button
                  variant="ghost"
                  className={`w-full text-white hover:bg-white/10 justify-start py-3 ${
                    !sidebarOpen && "justify-center px-2"
                  }`}
                >
                  <Users className="h-5 w-5 mr-2" />
                  {sidebarOpen && <span>Employees</span>}
                </Button>
              </li>
            )}
            
            <li>
              <Button
                variant="ghost"
                className={`w-full text-white hover:bg-white/10 justify-start py-3 ${
                  !sidebarOpen && "justify-center px-2"
                }`}
              >
                <BarChart2 className="h-5 w-5 mr-2" />
                {sidebarOpen && <span>Reports</span>}
              </Button>
            </li>
            
            <li>
              <Button
                variant="ghost"
                className={`w-full text-white hover:bg-white/10 justify-start py-3 ${
                  !sidebarOpen && "justify-center px-2"
                }`}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                {sidebarOpen && <span>Messages</span>}
              </Button>
            </li>
            
            <li>
              <Button
                variant="ghost"
                className={`w-full text-white hover:bg-white/10 justify-start py-3 ${
                  !sidebarOpen && "justify-center px-2"
                }`}
              >
                <Settings className="h-5 w-5 mr-2" />
                {sidebarOpen && <span>Settings</span>}
              </Button>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-4 left-0 right-0 px-2">
          <Button
            variant="ghost"
            className={`w-full text-white hover:bg-white/10 justify-start py-3 ${
              !sidebarOpen && "justify-center px-2"
            }`}
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-2" />
            {sidebarOpen && <span>Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Top header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            {userRole === "admin" && "Admin Dashboard"}
            {userRole === "company" && "Company Dashboard"}
            {userRole === "manager" && "Manager Dashboard"}
            {userRole === "assistant-manager" && "Assistant Manager Dashboard"}
            {userRole === "employee" && "Employee Dashboard"}
          </h1>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>2 Messages</span>
            </Button>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              A
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Total Employees</h2>
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">157</div>
              <div className="text-sm text-green-500">
                +12% from last month
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Open Positions</h2>
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">24</div>
              <div className="text-sm text-green-500">
                +4 new openings this week
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Task Completion</h2>
                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                  <BarChart2 className="h-5 w-5" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">78%</div>
              <div className="text-sm text-green-500">
                +5% improvement
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
              <h2 className="font-semibold text-lg mb-4">Activity Overview</h2>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Chart placeholder</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-lg mb-4">Recent Activities</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm">New employee onboarded</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm">New job position published</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full mr-3">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm">New message from HR</p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
                    <BarChart2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm">Monthly report generated</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">Recent Applications</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Applied
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                          J
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            John Doe
                          </div>
                          <div className="text-sm text-gray-500">
                            john.doe@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Frontend Developer
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">May 26, 2023</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Shortlisted
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                          S
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Sarah Johnson
                          </div>
                          <div className="text-sm text-gray-500">
                            sarah.j@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        UX Designer
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">May 24, 2023</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Under Review
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                          M
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Michael Brown
                          </div>
                          <div className="text-sm text-gray-500">
                            m.brown@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Backend Developer
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">May 22, 2023</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Rejected
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                        View
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
