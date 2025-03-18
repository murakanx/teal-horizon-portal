
import { BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const activityData = [
  { month: 'Jan', employees: 120, applications: 35, hires: 12 },
  { month: 'Feb', employees: 132, applications: 42, hires: 18 },
  { month: 'Mar', employees: 141, applications: 55, hires: 24 },
  { month: 'Apr', employees: 144, applications: 40, hires: 16 },
  { month: 'May', employees: 157, applications: 48, hires: 22 },
  { month: 'Jun', employees: 162, applications: 38, hires: 10 },
];

const applicationData = [
  { name: 'John Doe', position: 'Frontend Developer', date: 'May 26, 2023', status: 'Shortlisted' },
  { name: 'Sarah Johnson', position: 'UX Designer', date: 'May 24, 2023', status: 'Under Review' },
  { name: 'Michael Brown', position: 'Backend Developer', date: 'May 22, 2023', status: 'Rejected' },
  { name: 'Emma Wilson', position: 'Project Manager', date: 'May 20, 2023', status: 'Shortlisted' },
  { name: 'James Anderson', position: 'DevOps Engineer', date: 'May 18, 2023', status: 'Under Review' },
];

export const HRMDashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-lg font-semibold">Total Employees</CardTitle>
              <div className="bg-primary/10 text-primary p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">157</div>
            <div className="text-sm text-green-500">
              +12% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-lg font-semibold">Open Positions</CardTitle>
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">24</div>
            <div className="text-sm text-green-500">
              +4 new openings this week
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-lg font-semibold">Task Completion</CardTitle>
              <div className="bg-green-100 text-green-600 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">78%</div>
            <div className="text-sm text-green-500">
              +5% improvement
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="employees" stroke="#2D9D8F" />
                  <Line type="monotone" dataKey="applications" stroke="#4C72B0" />
                  <Line type="monotone" dataKey="hires" stroke="#55A868" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <p className="text-sm">New employee onboarded</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <div>
                  <p className="text-sm">New job position published</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div>
                  <p className="text-sm">New message from HR</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-sm">Monthly report generated</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Recent Applications</CardTitle>
          <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50">
            View All
          </button>
        </CardHeader>
        <CardContent>
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
                {applicationData.map((application, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                          {application.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {application.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.name.toLowerCase().replace(' ', '.')}@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {application.position}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{application.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${application.status === 'Shortlisted' ? 'bg-green-100 text-green-800' : 
                          application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary hover:text-primary-dark">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
