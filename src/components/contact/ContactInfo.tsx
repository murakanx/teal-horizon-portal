
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        You Will Grow, You Will Succeed. We Promise That
      </h2>
      <p className="text-gray-600 mb-10">
        Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultricies. Diam convallis morbi pellentesque adipiscing
      </p>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Call for inquiry</h3>
            <p className="text-gray-600">+257 388-6895</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Send us email</h3>
            <p className="text-gray-600">kramulous@sbcglobal.net</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Opening hours</h3>
            <p className="text-gray-600">Mon - Fri: 10AM - 10PM</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Office</h3>
            <p className="text-gray-600">19 North Road Piscataway, NY 08854</p>
          </div>
        </div>
      </div>
    </div>
  );
};
