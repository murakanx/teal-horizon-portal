
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, PieChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Download, FileBarChart } from "lucide-react";

const employeeData = [
  { name: 'Jan', count: 120 },
  { name: 'Feb', count: 132 },
  { name: 'Mar', count: 141 },
  { name: 'Apr', count: 144 },
  { name: 'May', count: 157 },
  { name: 'Jun', count: 162 },
];

const departmentData = [
  { name: 'Engineering', value: 45 },
  { name: 'Marketing', value: 25 },
  { name: 'Sales', value: 30 },
  { name: 'HR', value: 12 },
  { name: 'Finance', value: 20 },
  { name: 'Product', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#2D9D8F'];

const reportTypes = [
  { id: 1, name: 'Employee Growth', description: 'Monthly employee count for the last 6 months', type: 'bar' },
  { id: 2, name: 'Department Distribution', description: 'Distribution of employees across departments', type: 'pie' },
  { id: 3, name: 'Salary Trends', description: 'Average salary trends by department', type: 'line' },
  { id: 4, name: 'Recruitment Pipeline', description: 'Applications and hires by month', type: 'bar' },
];

export const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(reportTypes[0]);
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reports</h2>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Reports
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        {reportTypes.map((report) => (
          <Card 
            key={report.id} 
            className={`cursor-pointer ${selectedReport.id === report.id ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setSelectedReport(report)}
          >
            <CardContent className="p-4 flex items-center">
              <div className="bg-primary/10 text-primary p-3 rounded-full mr-3">
                <FileBarChart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{report.name}</h3>
                <p className="text-xs text-gray-500">{report.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{selectedReport.name}</CardTitle>
          <div className="space-x-2">
            <Button variant="outline" size="sm">Weekly</Button>
            <Button variant="outline" size="sm">Monthly</Button>
            <Button variant="outline" size="sm">Yearly</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {selectedReport.type === 'bar' && (
                <BarChart data={employeeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#2D9D8F" />
                </BarChart>
              )}
              
              {selectedReport.type === 'pie' && (
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              )}
              
              {selectedReport.type === 'line' && (
                <LineChart data={employeeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="count" stroke="#2D9D8F" activeDot={{ r: 8 }} />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
