
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle, MessageSquare, Send } from "lucide-react";

const messagesData = [
  { id: 1, sender: 'John Doe', content: 'Could you please review the updated project timeline?', time: '10:30 AM', unread: true },
  { id: 2, sender: 'HR Department', content: 'Reminder about the company meeting scheduled for tomorrow at 2 PM.', time: 'Yesterday', unread: false },
  { id: 3, sender: 'Jane Smith', content: 'I\'ve submitted the quarterly report for your review.', time: 'Yesterday', unread: false },
  { id: 4, sender: 'Tech Support', content: 'Your request for new equipment has been approved.', time: 'May 25', unread: false },
  { id: 5, sender: 'Finance Department', content: 'Please submit your expense reports by the end of this month.', time: 'May 24', unread: false },
];

export const Messages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(messagesData[0]);
  const [messageText, setMessageText] = useState('');
  
  const filteredMessages = messagesData.filter(message => 
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSendMessage = () => {
    if (messageText.trim() !== '') {
      // Logic to send message would go here
      setMessageText('');
    }
  };
  
  return (
    <div className="p-6 h-[calc(100vh-64px)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <Card className="lg:col-span-1 flex flex-col h-full">
          <CardHeader className="pb-2 pt-4">
            <div className="flex items-center justify-between">
              <CardTitle>Messages</CardTitle>
              <Button size="sm" variant="ghost">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto space-y-2">
            {filteredMessages.map((message) => (
              <div 
                key={message.id}
                className={`p-3 rounded-md cursor-pointer ${
                  selectedMessage.id === message.id 
                    ? 'bg-primary/10' 
                    : message.unread 
                      ? 'bg-gray-50 hover:bg-gray-100' 
                      : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                      {message.sender.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium flex items-center">
                        {message.sender}
                        {message.unread && (
                          <span className="ml-2 w-2 h-2 bg-primary rounded-full"></span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 truncate">{message.content}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{message.time}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2 flex flex-col h-full">
          {selectedMessage ? (
            <>
              <CardHeader className="pb-2 pt-4 border-b">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                    {selectedMessage.sender.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-base">{selectedMessage.sender}</CardTitle>
                    <p className="text-xs text-gray-500">Last active: Today at 11:42 AM</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto py-4">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2">
                      {selectedMessage.sender.charAt(0)}
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">{selectedMessage.content}</p>
                      <p className="text-xs text-gray-500 mt-1">{selectedMessage.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-end">
                    <div className="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Thanks for letting me know. I'll take a look at it.</p>
                      <p className="text-xs text-white/80 mt-1">10:45 AM</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 ml-2">
                      A
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 border-t">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-grow py-2 px-4 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button className="rounded-l-none" onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <MessageSquare className="h-16 w-16 mb-4" />
              <p>Select a conversation to start messaging</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
