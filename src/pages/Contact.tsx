
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-job-header text-white py-14">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ContactInfo />
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
              {/* Map would go here */}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-20">
              <img src="/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png" alt="Zoom" className="h-6 opacity-50" />
              <img src="/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png" alt="Tinder" className="h-6 opacity-50" />
              <img src="/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png" alt="Dribbble" className="h-6 opacity-50" />
              <img src="/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png" alt="Asana" className="h-6 opacity-50" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
