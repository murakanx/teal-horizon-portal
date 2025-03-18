
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  BarChart, LineChart, PieChart, Pie, Cell, CartesianGrid, XAxis, 
  YAxis, Tooltip, Legend, Bar, Line, ResponsiveContainer 
} from 'recharts';

const revenueData = [
  { month: 'Jan', value: 12500 },
  { month: 'Feb', value: 15000 },
  { month: 'Mar', value: 18000 },
  { month: 'Apr', value: 16500 },
  { month: 'May', value: 21000 },
  { month: 'Jun', value: 19500 },
];

const employeeData = [
  { name: 'Engineering', value: 45 },
  { name: 'Marketing', value: 15 },
  { name: 'HR', value: 10 },
  { name: 'Sales', value: 20 },
  { name: 'Finance', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export const Reports = () => {
  const [reportType, setReportType] = useState('financial');
  
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <div className="flex space-x-2">
          <Button 
            variant={reportType === 'financial' ? 'default' : 'outline'}
            onClick={() => setReportType('financial')}
          >
            Financial
          </Button>
          <Button 
            variant={reportType === 'employees' ? 'default' : 'outline'}
            onClick={() => setReportType('employees')}
          >
            Employees
          </Button>
          <Button 
            variant={reportType === 'recruitment' ? 'default' : 'outline'}
            onClick={() => setReportType('recruitment')}
          >
            Recruitment
          </Button>
        </div>
      </div>
      
      {reportType === 'financial' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Legend />
                    <Bar dataKey="value" name="Revenue" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>
                Financial Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-2">Total Revenue: $102,500</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">75% of yearly target</p>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-2">Average Employee Cost: $5,200</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">45% increase from last year</p>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-2">Profit Margin: 24%</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">3% increase from last quarter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {reportType === 'employees' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={employeeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {employeeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Employee Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-2">Total Employees: 157</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">85% retention rate</p>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-2">New Hires (This Year): 32</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">65% of yearly hiring goal</p>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-2">Average Tenure: 3.5 years</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">70% improved from last year</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {reportType === 'recruitment' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { month: 'Jan', applications: 45, hires: 5 },
                    { month: 'Feb', applications: 52, hires: 7 },
                    { month: 'Mar', applications: 60, hires: 10 },
                    { month: 'Apr', applications: 45, hires: 8 },
                    { month: 'May', applications: 48, hires: 9 },
                    { month: 'Jun', applications: 38, hires: 6 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="applications" stroke="#8884d8" name="Applications" />
                    <Line type="monotone" dataKey="hires" stroke="#82ca9d" name="Hires" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recruitment Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-2">Time to Hire: 28 days</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">35% faster than industry average</p>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-2">Acceptance Rate: 72%</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">12% increase from last year</p>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-2">Recruitment Cost per Hire: $2,850</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">40% under budget</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
