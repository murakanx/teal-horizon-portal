
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Home, Users, Briefcase, BarChart2, MessageSquare, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HRMDashboard } from "./Dashboard";
import { Companies } from "./Companies";
import { Employees } from "./Employees";
import { Reports } from "./Reports";
import { Messages } from "./Messages";
import { Settings as SettingsComponent } from "./Settings";

type UserRole = "admin" | "company" | "manager" | "assistant-manager" | "employee";

interface HRMPortalProps {
  userRole?: UserRole;
}

export const HRMPortal = ({ userRole = "admin" }: HRMPortalProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout logic would go here
    navigate("/");
  };

  // Render appropriate component based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <HRMDashboard />;
      case "companies":
        return <Companies />;
      case "employees":
        return <Employees />;
      case "reports":
        return <Reports />;
      case "messages":
        return <Messages />;
      case "settings":
        return <SettingsComponent />;
      default:
        return <HRMDashboard />;
    }
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
                } ${activeSection === "dashboard" ? "bg-white/10" : ""}`}
                onClick={() => setActiveSection("dashboard")}
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
                  } ${activeSection === "companies" ? "bg-white/10" : ""}`}
                  onClick={() => setActiveSection("companies")}
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
                  } ${activeSection === "employees" ? "bg-white/10" : ""}`}
                  onClick={() => setActiveSection("employees")}
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
                } ${activeSection === "reports" ? "bg-white/10" : ""}`}
                onClick={() => setActiveSection("reports")}
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
                } ${activeSection === "messages" ? "bg-white/10" : ""}`}
                onClick={() => setActiveSection("messages")}
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
                } ${activeSection === "settings" ? "bg-white/10" : ""}`}
                onClick={() => setActiveSection("settings")}
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
            {activeSection === "dashboard" && (
              userRole === "admin" ? "Admin Dashboard" :
              userRole === "company" ? "Company Dashboard" :
              userRole === "manager" ? "Manager Dashboard" :
              userRole === "assistant-manager" ? "Assistant Manager Dashboard" :
              "Employee Dashboard"
            )}
            {activeSection === "companies" && "Companies"}
            {activeSection === "employees" && "Employees"}
            {activeSection === "reports" && "Reports"}
            {activeSection === "messages" && "Messages"}
            {activeSection === "settings" && "Settings"}
          </h1>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => setActiveSection("messages")}>
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>2 Messages</span>
            </Button>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary cursor-pointer" onClick={() => setActiveSection("settings")}>
              A
            </div>
          </div>
        </header>

        {/* Dynamic content based on active section */}
        {renderContent()}
      </div>
    </div>
  );
};
