
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Bell, Shield, Globe, Moon, Sun } from "lucide-react";

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-0">
            <nav className="flex flex-col">
              <button
                className={`flex items-center space-x-2 px-4 py-3 text-left ${
                  activeTab === 'profile' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-3 text-left ${
                  activeTab === 'notifications' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('notifications')}
              >
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-3 text-left ${
                  activeTab === 'security' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('security')}
              >
                <Shield className="h-5 w-5" />
                <span>Security</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-3 text-left ${
                  activeTab === 'appearance' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('appearance')}
              >
                <Globe className="h-5 w-5" />
                <span>Appearance</span>
              </button>
            </nav>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3">
          {activeTab === 'profile' && (
            <>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl">
                    A
                  </div>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="Admin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="User"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="admin@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                    defaultValue="System administrator with access to all HRM features."
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </>
          )}
          
          {activeTab === 'notifications' && (
            <>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <div className="flex items-center h-6 relative">
                    <input 
                      type="checkbox" 
                      id="email-notifications" 
                      className="sr-only"
                      defaultChecked 
                    />
                    <label 
                      htmlFor="email-notifications"
                      className="bg-gray-200 w-11 h-6 rounded-full cursor-pointer relative block after:absolute after:left-1 after:top-1 after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all peer-checked:after:translate-x-5 peer-checked:bg-primary"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Browser Notifications</h3>
                    <p className="text-sm text-gray-500">Show desktop notifications</p>
                  </div>
                  <div className="flex items-center h-6 relative">
                    <input 
                      type="checkbox" 
                      id="browser-notifications" 
                      className="sr-only"
                      defaultChecked 
                    />
                    <label 
                      htmlFor="browser-notifications"
                      className="bg-gray-200 w-11 h-6 rounded-full cursor-pointer relative block after:absolute after:left-1 after:top-1 after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all peer-checked:after:translate-x-5 peer-checked:bg-primary"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">SMS Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                  </div>
                  <div className="flex items-center h-6 relative">
                    <input 
                      type="checkbox" 
                      id="sms-notifications" 
                      className="sr-only" 
                    />
                    <label 
                      htmlFor="sms-notifications"
                      className="bg-gray-200 w-11 h-6 rounded-full cursor-pointer relative block after:absolute after:left-1 after:top-1 after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all peer-checked:after:translate-x-5 peer-checked:bg-primary"
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Notification Types</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="notif-employee" className="rounded text-primary mr-2" defaultChecked />
                      <label htmlFor="notif-employee">Employee updates</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="notif-application" className="rounded text-primary mr-2" defaultChecked />
                      <label htmlFor="notif-application">New applications</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="notif-report" className="rounded text-primary mr-2" defaultChecked />
                      <label htmlFor="notif-report">Report generation</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="notif-message" className="rounded text-primary mr-2" defaultChecked />
                      <label htmlFor="notif-message">New messages</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </>
          )}
          
          {activeTab === 'security' && (
            <>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                      <input
                        type="password"
                        className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <input
                        type="password"
                        className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500 mb-4">Add an extra layer of security to your account</p>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Sessions</h3>
                  <div className="border rounded-md">
                    <div className="p-3 border-b">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Current Session</div>
                          <div className="text-sm text-gray-500">Windows • Chrome • New York, USA</div>
                        </div>
                        <div className="text-sm text-green-500 font-medium">Active</div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Last Session</div>
                          <div className="text-sm text-gray-500">Mac • Safari • New York, USA</div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </>
          )}
          
          {activeTab === 'appearance' && (
            <>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how the HRM portal looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Theme</h3>
                  <div className="flex space-x-4">
                    <div 
                      className={`border rounded-md p-4 flex-1 flex flex-col items-center space-y-2 cursor-pointer ${!darkMode ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => setDarkMode(false)}
                    >
                      <Sun className="h-6 w-6" />
                      <span>Light</span>
                    </div>
                    <div 
                      className={`border rounded-md p-4 flex-1 flex flex-col items-center space-y-2 cursor-pointer ${darkMode ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => setDarkMode(true)}
                    >
                      <Moon className="h-6 w-6" />
                      <span>Dark</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Sidebar Position</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input type="radio" id="sidebar-left" name="sidebar-position" className="text-primary mr-2" defaultChecked />
                      <label htmlFor="sidebar-left">Left</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="sidebar-right" name="sidebar-position" className="text-primary mr-2" />
                      <label htmlFor="sidebar-right">Right</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Font Size</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input type="radio" id="font-small" name="font-size" className="text-primary mr-2" />
                      <label htmlFor="font-small">Small</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="font-medium" name="font-size" className="text-primary mr-2" defaultChecked />
                      <label htmlFor="font-medium">Medium</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="font-large" name="font-size" className="text-primary mr-2" />
                      <label htmlFor="font-large">Large</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Density</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input type="radio" id="density-compact" name="density" className="text-primary mr-2" />
                      <label htmlFor="density-compact">Compact</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="density-normal" name="density" className="text-primary mr-2" defaultChecked />
                      <label htmlFor="density-normal">Normal</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="density-comfortable" name="density" className="text-primary mr-2" />
                      <label htmlFor="density-comfortable">Comfortable</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};
